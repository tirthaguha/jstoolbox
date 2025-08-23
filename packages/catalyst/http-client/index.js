import { getRootDir, getDefaultConfig } from "../utils/utils.js";
import path from "node:path";

const rootDir = getRootDir();
const defaultConfig = getDefaultConfig();
const rootBasePath = [".", "context", "templates"];
let targetBasePath = defaultConfig.targetBasePath.split("/");
targetBasePath = [...targetBasePath, "store"];

const HTTPClientGenerator = {
  description: "Create a Context API Provider",
  prompts: [],
  actions: [
    {
      type: "add",
      path: path.join(rootDir, ...targetBasePath, "HTTPClient.{{ext}}"),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.{{lang}}.hbs",
      ),
    },
    {
      type: "add",
      path: path.join(rootDir, ...targetBasePath, "index.{{lang}}"),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "index.{{lang}}.hbs",
      ),
    },
  ],
};

export default HTTPClientGenerator;
