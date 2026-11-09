export interface Eip1193RequestArguments {
  method: string;
  params?: readonly unknown[] | Record<string, unknown>;
}

export interface Eip1193Provider {
  request: (args: Eip1193RequestArguments) => Promise<unknown>;
  on?: (event: string, listener: (...args: unknown[]) => void) => void;
  removeListener?: (event: string, listener: (...args: unknown[]) => void) => void;
}

export interface Eip6963ProviderInfo {
  uuid: string;
  name: string;
  icon: string;
  rdns: string;
}

export interface Eip6963ProviderDetail {
  info: Eip6963ProviderInfo;
  provider: Eip1193Provider;
}

export interface Eip6963AnnounceProviderEvent extends CustomEvent<Eip6963ProviderDetail> {
  type: 'eip6963:announceProvider';
}

declare global {
  interface Window {
    hiveKeychainEthereum?: Eip1193Provider;
    hiveKeychain?: { ethereum?: Eip1193Provider };
  }
}
