import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const rootDir = path.resolve(process.cwd());
const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

console.log("rootDir", rootDir);
console.log("currentDir", currentDir);

const packageJSON = JSON.parse(
  fs.readFileSync(path.join(rootDir, "package.json"), "utf-8")
);

const { catalystConfig } = packageJSON;

const defaultConfig = {
  lang: "js",
  arch: "atomic",
  storyFile: true, //TODO
  storyFormat: "script", //TODO
  styling: "css-modules", //TODO
  targetBasePath: "src/components", //TODO
};

if (catalystConfig) {
  for (const key in catalystConfig) {
    if (Object.hasOwnProperty.call(catalystConfig, key)) {
      defaultConfig[key] = catalystConfig[key];
    }
  }
}

console.log("currentDir", currentDir);

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

const targetBasePath = ["src", "components"];
const rootBasePath = ["plop-templates", "Component"];

export default function (plop) {
  plop.setHelper("doubleSpace", () => "  ");
  plop.setHelper("lang", () => defaultConfig.lang);

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
          "{{pascalCase name}}.{{lang}}"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.{{lang}}.hbs"
        ),
      },
      {
        type: "add",
        path: path.join(
          rootDir,
          ...targetBasePath,
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.css"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.css.hbs"
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
          "{{pascalCase name}}.test.{{lang}}"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.test.{{lang}}.hbs"
        ),
      },
      {
        type: "add",
        path: path.join(
          rootDir,
          ...targetBasePath,
          "{{type}}",
          "{{pascalCase name}}",
          "index.{{lang}}"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "index.{{lang}}.hbs"
        ),
      },
      {
        type: "add",
        path: path.join(
          rootDir,
          ...targetBasePath,
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.stories.{{lang}}"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.stories.{{lang}}.hbs"
        ),
      },
      {
        type: "add",
        path: path.join(
          rootDir,
          ...targetBasePath,
          "{{type}}",
          "{{pascalCase name}}",
          "{{pascalCase name}}.mock.{{lang}}"
        ),
        templateFile: path.join(
          currentDir,
          ...rootBasePath,
          "{{lang}}",
          "Component.mock.{{lang}}.hbs"
        ),
      },
    ],
  });
}
