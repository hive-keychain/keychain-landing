import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isKeychainAnnouncement,
  normalizeChainId,
  requestEvmAccountConnection,
} from '../src/lib/keychainDemo.ts';
import type { Eip1193Provider } from '../src/types/evm-provider.ts';

function mockProvider(
  handler: (method: string) => unknown | Promise<unknown>,
): Eip1193Provider & { calls: string[] } {
  const calls: string[] = [];
  return {
    calls,
    async request({ method }) {
      calls.push(method);
      return handler(method);
    },
  };
}

test('selects only the verified Hive Keychain EIP-6963 identity', () => {
  const provider = mockProvider(() => []);
  assert.equal(isKeychainAnnouncement({
    info: { uuid: 'test', name: 'Hive Keychain', icon: '', rdns: 'com.hive-keychain' },
    provider,
  }), true);
  assert.equal(isKeychainAnnouncement({
    info: { uuid: 'test', name: 'Hive Keychain EVM', icon: '', rdns: 'com.hive-keychain' },
    provider,
  }), true);
  assert.equal(isKeychainAnnouncement({
    info: { uuid: 'test', name: 'Hive Keychain', icon: '', rdns: 'example.invalid' },
    provider,
  }), false);
});

test('requests accounts first and reads the chain only after approval', async () => {
  const provider = mockProvider((method) => {
    if (method === 'eth_requestAccounts') return ['0x1234567890abcdef'];
    if (method === 'eth_chainId') return '0x2105';
    throw new Error(`Unexpected method ${method}`);
  });
  const connection = await requestEvmAccountConnection(provider);
  assert.deepEqual(provider.calls, ['eth_requestAccounts', 'eth_chainId']);
  assert.deepEqual(connection, { address: '0x1234567890abcdef', chainId: '0x2105' });
});

test('does not make a second wallet request after rejection', async () => {
  const rejection = Object.assign(new Error('Rejected'), { code: 4001 });
  const provider = mockProvider(() => Promise.reject(rejection));
  await assert.rejects(requestEvmAccountConnection(provider), rejection);
  assert.deepEqual(provider.calls, ['eth_requestAccounts']);
});

test('normalizes decimal and hexadecimal chain IDs without guessing a network', () => {
  assert.equal(normalizeChainId('8453'), '0x2105');
  assert.equal(normalizeChainId('0X0A'), '0xa');
  assert.equal(normalizeChainId('not-a-chain'), '');
});
