import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";

const todoModule = {
  namespaced: true,
  strict: true,
  state,
  getters,
  mutations,
};

export default todoModule;
