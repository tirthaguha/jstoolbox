import { getRootDir, getDefaultConfig } from "../utils/utils.js";
import path from "node:path";

// const atomicChoice = [
//   { name: "Organism", value: "organisms" },
//   { name: "Page", value: "pages" },
// ];

// const legoChoice = [{ name: "Set", value: "sets" }];

// const name = "ContextProvider";

const rootDir = getRootDir();
const defaultConfig = getDefaultConfig();
const rootBasePath = [".", "context", "templates"];
let targetBasePath = defaultConfig.targetBasePath.split("/");
targetBasePath = [...targetBasePath, "store"];

const ContextGenerator = {
  description: "Create a Context API Provider",
  prompts: [],
  actions: [
    {
      type: "add",
      path: path.join(rootDir, ...targetBasePath, "ContextProvider.{{ext}}"),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.{{lang}}.hbs",
      ),
    },
    // {
    //   type: "add",
    //   path: path.join(
    //     rootDir,
    //     ...targetBasePath,
    //     "{{kebabCase name}}",
    //     "test",
    //     "{{pascalCase name}}.test.{{ext}}",
    //   ),
    //   templateFile: path.join(
    //     ...rootBasePath,
    //     "{{lang}}",
    //     "Component.test.{{lang}}.hbs",
    //   ),
    // },
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

export default ContextGenerator;
