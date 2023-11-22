import path from "node:path";
import packageJSONConfig from "@jstb/package-json-reader";

const catalystConfig = packageJSONConfig("catalystConfig");

const defaultConfig = {
  lang: "js",
  arch: "atomic",
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

const getRootDir = () => {
  return path.resolve(process.cwd());
};

export { getRootDir, getDefaultConfig };
