import { getRootDir, getDefaultConfig } from "../utils/utils.js";
import path from "node:path";

const atomicChoice = [
  { name: "Organism", value: "organisms" },
  { name: "Page", value: "pages" },
];

const legoChoice = [{ name: "Set", value: "sets" }];

const rootDir = getRootDir();
const defaultConfig = getDefaultConfig();
const rootBasePath = [".", "containers", "templates"];
let targetBasePath = defaultConfig.targetBasePath.split("/");
targetBasePath = [...targetBasePath, "containers"];

const ContainerGenerator = {
  description: "Create a Container",
  prompts: [
    {
      type: "list",
      name: "category",
      message: "Type of Component",
      choices: () => {
        return defaultConfig.arch === "lego" ? legoChoice : atomicChoice;
      },
    },
    {
      type: "input",
      name: "name",
      message: "Name of the Container",
    },
  ],
  actions: [
    {
      type: "add",
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "{{pascalCase name}}.{{ext}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.{{lang}}.hbs",
      ),
    },
    {
      type: "add",
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "test",
        "{{pascalCase name}}.test.{{ext}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.test.{{lang}}.hbs",
      ),
    },
    {
      type: "add",
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "index.{{lang}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "index.{{lang}}.hbs",
      ),
    },
  ],
};

export default ContainerGenerator;
