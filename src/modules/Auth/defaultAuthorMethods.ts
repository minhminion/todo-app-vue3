import { LocalStorage } from "@/utils";
import { AuthorMethods } from "./authorMethods";

const defaultAuthMethods: AuthorMethods = {
  login(username, password) {
    return new Promise((res) =>
      setTimeout(
        () =>
          res(
            LocalStorage.save("auth", {
              username,
              password,
            })
          ),
        500
      )
    );
  },
  checkAuth: (): Promise<boolean> =>
    new Promise((res) =>
      setTimeout(() => res(Boolean(LocalStorage.get("auth"))), 300)
    ),
  logout: (): Promise<void> =>
    new Promise((res) =>
      setTimeout(() => res(LocalStorage.remove("auth")), 300)
    ),
  getIdentity: (): Promise<null> =>
    new Promise((res) => setTimeout(() => res(LocalStorage.get("auth")), 300)),
  register: (): Promise<void> => Promise.resolve(),
  refreshToken: (): Promise<void> => Promise.resolve(),
};

export default defaultAuthMethods;
