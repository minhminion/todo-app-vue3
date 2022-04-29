import { computed, Plugin, reactive, ref, toRefs, watch } from "vue";
import { AuthorMethods } from "./authorMethods";
import { AuthState, UserIdentity } from "./types";

const authPlugin: Plugin = {
  async install(
    app,
    options: {
      authorMethods: AuthorMethods;
    }
  ) {
    const authState = reactive<AuthState>({
      isAuthenticating: false,
      isAuthenticated: false,
      error: {} as unknown,
      identity: {} as UserIdentity | null,
    });

    const setAuthState = (
      authenticated: boolean,
      identity?: UserIdentity | null
    ) => {
      authState.isAuthenticated = authenticated;

      authState.identity = identity;
    };

    app.provide("authState", authState);
    app.provide("setAuthState", setAuthState);
    app.provide("authorMethods", options.authorMethods);

    try {
      authState.isAuthenticating = true;
      const identity = await options.authorMethods.getIdentity();
      authState.identity = identity;
      authState.isAuthenticated = Boolean(identity);
    } catch (error: unknown) {
      authState.error = error;
    } finally {
      authState.isAuthenticating = false;
    }

    console.log("RUN");

    // Get initial Auth State
  },
};

export default authPlugin;
