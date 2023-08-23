import ComponentGenerator from "./components/index.js";
import ContainerGenerator from "./containers/index.js";
import { getDefaultConfig } from "./utils/utils.js";

export default function (plop) {
  const defaultConfig = getDefaultConfig();
  plop.setHelper("doubleSpace", () => "  ");
  plop.setHelper("lang", () => defaultConfig.lang);
  plop.setHelper("ext", () => (defaultConfig.lang === "ts" ? "tsx" : "js"));

  plop.setGenerator("Component", ComponentGenerator);
  plop.setGenerator("Container", ContainerGenerator);
}
