// Minimal typings for the API the Hive Keychain browser extension
// injects into every page as `window.hive_keychain`. Only the methods
// the live Hive demo on this page uses are declared.

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
  requestVote: (
    username: string,
    permlink: string,
    author: string,
    weight: number,
    callback: HiveKeychainCallback,
  ) => void;
  requestCustomJson: (
    username: string,
    id: string,
    keyType: HiveKeyType,
    json: string,
    displayMessage: string,
    callback: HiveKeychainCallback,
  ) => void;
  requestPost?: (
    username: string,
    title: string,
    body: string,
    parentPermlink: string,
    parentAuthor: string,
    jsonMetadata: string,
    permlink: string,
    commentOptions: string,
    callback: HiveKeychainCallback,
  ) => void;
  requestBroadcast?: (
    username: string,
    operations: unknown[],
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
