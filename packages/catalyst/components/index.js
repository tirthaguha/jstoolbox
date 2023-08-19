const packageJSON = JSON.parse(
  fs.readFileSync(path.join(rootDir, "package.json"), "utf-8"),
);

const { catalystConfig } = packageJSON;

const defaultConfig = {
  lang: "js",
  arch: "atomic",
  skipStories: false,
  storyFormat: "script", //TODO
  styling: "css", //TODO
  targetBasePath: "/src/components",
};

if (catalystConfig) {
  for (const key in catalystConfig) {
    if (Object.hasOwnProperty.call(catalystConfig, key)) {
      defaultConfig[key] = catalystConfig[key];
    }
  }
}

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

const targetBasePath = defaultConfig.targetBasePath.split("/");
const rootBasePath = ["components", "templates"];

export default ComponentGenerator = {
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
        "{{category}}",
        "{{kebabCase name}}",
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
        "{{category}}",
        "{{kebabCase name}}",
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
        "{{category}}",
        "{{kebabCase name}}",
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
        "{{category}}",
        "{{kebabCase name}}",
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
        "{{category}}",
        "{{kebabCase name}}",
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
};
