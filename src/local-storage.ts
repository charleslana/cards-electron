export function getStorage(key: string): string | null {
  return localStorage.getItem(key);
}

export function setStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function generics<T>(value: T): T {
  console.log(value);
  return value;
}
