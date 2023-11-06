import { createContext } from "react";

const defaultValue = {
  locale: 'en',
  setLocale: () => {} 
}

const LangContext = createContext(defaultValue);
export default LangContext