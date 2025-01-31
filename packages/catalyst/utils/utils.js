import path from "node:path";
import packageJSONConfig from "@jstb/package-json-reader";
import { existsSync } from "node:fs";

const catalystConfig = packageJSONConfig("catalystConfig");

const getRootDir = () => {
  return path.resolve(process.cwd());
};

const isTypeScript = () => {
  const rootDir = getRootDir();
  console.log(rootDir);

  const tsConfigFileExists = existsSync(
    path.join(rootDir, "tsconfig.json"),
    "utf-8",
  );
  return tsConfigFileExists;
};

const defaultConfig = {
  lang: isTypeScript() ? "ts" : "js",
  arch: "none",
  skipStories: false,
  storyFormat: "script", //TODO
  styling: "css",
  targetBasePath: "/src",
};

if (catalystConfig) {
  for (const key in catalystConfig) {
    if (Object.hasOwnProperty.call(catalystConfig, key)) {
      defaultConfig[key] = catalystConfig[key];
    }
  }
}

const getDefaultConfig = () => {
  return defaultConfig;
};

export { getRootDir, getDefaultConfig };
