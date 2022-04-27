export class LocalStorage {
  public static get = (key: string) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null || serializedState == "[]") {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  public static save = (key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Something went wrong: ${err}`);
    }
  };
}
