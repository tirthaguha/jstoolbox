import ComponentGenerator from "./components/index.js";
import ContainerGenerator from "./containers/index.js";
import ContextGenerator from "./context/index.js";
import { getDefaultConfig } from "./utils/utils.js";

export default function (plop) {
  const defaultConfig = getDefaultConfig();
  plop.setHelper("doubleSpace", () => "  ");
  plop.setHelper("lang", () => defaultConfig.lang);
  plop.setHelper("ext", () => (defaultConfig.lang === "ts" ? "tsx" : "jsx"));
  plop.setHelper("styleExt", () => defaultConfig.styling);
  plop.setHelper("doubleCurlyOpen", () => "{{");
  plop.setHelper("doubleCurlyClose", () => "}}");

  plop.setGenerator("Component", ComponentGenerator);
  plop.setGenerator("Container", ContainerGenerator);
  plop.setGenerator("ContextProvider", ContextGenerator);
}
