import Cookie from "js-cookie";

export const ACCESS_TOKEN = "dG6EABne5a";

export function getCookie(key: string): string | undefined {
  return Cookie.get(key);
}

function setCookie(key: string, value: any): void {
  Cookie.set(key, value, {
    expires: 30,
    path: "/",
  });
}

export function getAccessToken(): string | undefined {
  return getCookie(ACCESS_TOKEN);
}
export function setAccessToken(accessToken: void) {
  setCookie(ACCESS_TOKEN, accessToken);
}

export function clearUserSession(): void {
  Cookie.remove(ACCESS_TOKEN, { path: "/" });
}
