export declare global {
  interface Window {
    debugContent: T;
    debugSetContent(content: string): void;
  }
}
