import { AppTheme } from "./types";

export interface State {
  loading: boolean;
  theme: AppTheme;
}

export const state: State = {
  loading: false,
  theme: AppTheme.LIGHT,
};
