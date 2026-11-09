// Minimal typings for the non-broadcast API used by the landing page.

export interface HiveKeychainResponse {
  success: boolean;
  message?: string;
  error?: string;
  result?: unknown;
}

export type HiveKeychainCallback = (response: HiveKeychainResponse) => void;

export type HiveKeyType = 'Posting' | 'Active' | 'Memo';

export interface HiveKeychain {
  requestHandshake: (callback: () => void) => void;
  requestSignBuffer: (
    username: string,
    message: string,
    keyType: HiveKeyType,
    callback: HiveKeychainCallback,
  ) => void;
}

declare global {
  interface Window {
    hive_keychain?: HiveKeychain;
  }
}

export {};
