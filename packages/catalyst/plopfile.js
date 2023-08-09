import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const rootDir = path.resolve(process.cwd());
const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

const packageJSON = JSON.parse(
  fs.readFileSync(path.join(rootDir, "package.json"), "utf-8"),
);

const { catalystConfig } = packageJSON;

const defaultConfig = {
  lang: "js",
  arch: "atomic",
  skipStories: false,
  storyFormat: "script", //TODO
  styling: "css-modules", //TODO
  targetBasePath: "/src/newcomponents",
};

if (catalystConfig) {
  for (const key in catalystConfig) {
    if (Object.hasOwnProperty.call(catalystConfig, key)) {
      defaultConfig[key] = catalystConfig[key];
    }
  }
}

const atomicChoice = [
  { name: "Atom", value: "Atoms" },
  { name: "Molecule", value: "Molecules" },
  { name: "Organism", value: "Organisms" },
  { name: "Template", value: "Templates" },
];

const legoChoice = [
  { name: "Brick", value: "Bricks" },
  { name: "Set", value: "Sets" },
];

const targetBasePath = defaultConfig.targetBasePath.split("/");
const rootBasePath = ["plop-templates", "Component"];

export default function (plop) {
  plop.setHelper("doubleSpace", () => "  ");
  plop.setHelper("lang", () => defaultConfig.lang);
  plop.setHelper("ext", () => (defaultConfig.lang === "ts" ? "tsx" : "js"));

  plop.setGenerator("component", {
    description: "Create a Component",
    prompts: [
      {
        type: "list",
        name: "type",
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
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.{{ext}}",
        ),
        templateFile: path.join(
          currentDir,
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
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.css",
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.css.hbs",
        ),
      },
      {
        type: "add",
        path: path.join(
          rootDir,
          ...targetBasePath,
          "{{type}}",
          "{{pascalCase name}}",
          "test",
          "{{pascalCase name}}.test.{{ext}}",
        ),
        templateFile: path.join(
          currentDir,
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
          "{{type}}",
          "{{pascalCase name}}",
          "index.{{lang}}",
        ),
        templateFile: path.join(
          currentDir,
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
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.stories.{{ext}}",
        ),
        templateFile: path.join(
          currentDir,
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
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.mock.{{lang}}",
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.mock.{{lang}}.hbs",
        ),
      },
    ],
  });
}
