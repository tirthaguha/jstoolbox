import { getRootDir, getDefaultConfig } from "../utils/utils.js";
import path from "node:path";

const atomicChoice = [
  { name: "Atom", value: "atoms" },
  { name: "Molecule", value: "molecules" },
  { name: "Organism", value: "organisms" },
  { name: "Template", value: "templates" },
];

const legoChoice = [
  { name: "Brick", value: "bricks" },
  { name: "Set", value: "sets" },
];

const rootDir = getRootDir();
const defaultConfig = getDefaultConfig();
const rootBasePath = [".", "components", "templates"];
let targetBasePath = defaultConfig.targetBasePath.split("/");
targetBasePath = [...targetBasePath, "components"];
// console.log(defaultConfig);

const ComponentGenerator = {
  description: "Create a Component",
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
      message: "Name of the Component",
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
        "{{pascalCase name}}.css",
      ),
      templateFile: path.join(...rootBasePath, "{{lang}}", "Component.css.hbs"),
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
    {
      type: "add",
      skip: () => {
        return defaultConfig.skipStories ? "Skipping Story file" : false;
      },
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "{{pascalCase name}}.stories.{{ext}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.stories.{{lang}}.hbs",
      ),
    },
    {
      type: "add",
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "{{pascalCase name}}.mock.{{lang}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.mock.{{lang}}.hbs",
      ),
    },
  ],
};

export default ComponentGenerator;
