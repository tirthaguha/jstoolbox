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
const skipTests = defaultConfig.skipTests;

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
      when: () => {
        return defaultConfig.arch !== "none";
      },
    },
    {
      type: "input",
      name: "name",
      message: "Name of the Container",
    },
    {
      type: "confirm",
      name: "actions",
      message: "Do you need actions with this container?",
      choices: ["Yes", "No"],
    },
    {
      type: "confirm",
      name: "reducer",
      message: "Do you need reducer with this container?",
      choices: ["Yes", "No"],
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
      skip: (data) => {
        return skipTests ? "Skipping Story file" : false;
      },
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
      skip: (data) => {
        return data.actions ? false : "Skipping Actions";
      },
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "{{pascalCase name}}.actions.{{lang}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.actions.{{lang}}.hbs",
      ),
    },
    {
      type: "add",
      skip: (data) => {
        return data.reducer ? false : "Skipping Reducer";
      },
      path: path.join(
        rootDir,
        ...targetBasePath,
        "{{category}}",
        "{{kebabCase name}}",
        "{{pascalCase name}}.reducer.{{lang}}",
      ),
      templateFile: path.join(
        ...rootBasePath,
        "{{lang}}",
        "Component.reducer.{{lang}}.hbs",
      ),
    },
  ],
};

export default ContainerGenerator;
