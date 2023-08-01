import path from "node:path";
import fs from "node:fs";

const rootDir = path.resolve(process.cwd());
const packageJSONConfig = (config) => {
  try {
    const packageJSONFile = fs.readFileSync(
      path.join(rootDir, "package.json"),
      "utf-8",
    );
    const packageJSON = JSON.parse(packageJSONFile);
    return packageJSON[config];
  } catch (error) {
    throw error;
  }
};

const fullPackageJSON = () => {
  try {
    const packageJSONFile = fs.readFileSync(
      path.join(rootDir, "package.json"),
      "utf-8",
    );
    const packageJSON = JSON.parse(packageJSONFile);
    return packageJSON;
  } catch (error) {
    throw error;
  }
};

export default packageJSONConfig;
export { fullPackageJSON };
