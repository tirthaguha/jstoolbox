#!/usr/bin/env node

import inquirer from "inquirer";
import { copyFile, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

inquirer
  .prompt([
    {
      type: "confirm",
      name: "isVscode",
      message: "Do you need the vscode extensions and settings?",
      default: true,
    },
    {
      type: "confirm",
      name: "isPrettier",
      message: "Do you want to use Prettier?",
      default: true,
    },
  ])
  .then((answers) => {
    // Install Prettier
    // Copy Prettier Config
    // Copy EditorConfig
    // Copy VSCode Settings and Extensions
    const { isVscode, isPrettier } = answers;

    if (isVscode) {
      const sourceDir = path.join(import.meta.dirname, "vscode");
      const targetDir = path.join(process.cwd(), ".vscode");
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir);
      }
      copyFile(
        path.join(sourceDir, "settings.json"),
        path.join(targetDir, "settings.json"),
        (err) => {
          if (err) throw err;
          console.log("settings.json was copied to .vscode folder");
        },
      );
      copyFile(
        path.join(sourceDir, "extensions.json"),
        path.join(targetDir, "extensions.json"),
        (err) => {
          if (err) throw err;
          console.log("extensions.json was copied to .vscode folder");
        },
      );
    }

    if (isPrettier) {
      const sourceDir = path.join(import.meta.dirname, "prettier");
      const targetDir = process.cwd();
      copyFile(
        path.join(sourceDir, ".prettier.json"),
        path.join(targetDir, ".prettier.json"),
        (err) => {
          if (err) throw err;
          console.log(".prettierjson was copied to root folder");
        },
      );
      copyFile(
        path.join(sourceDir, ".prettierignore"),
        path.join(targetDir, ".prettierignore"),
        (err) => {
          if (err) throw err;
          console.log(".prettierignore was copied to root folder");
        },
      );
      copyFile(
        path.join(sourceDir, ".editorconfig"),
        path.join(targetDir, ".editorconfig"),
        (err) => {
          if (err) throw err;
          console.log(".editorconfig was copied to root folder");
          console.log("\n\nRun `npm i -D prettier` to install Prettier");
        },
      );
    }
  })
  .catch((error) => {
    console.log(error);
    throw error;
    // if (error.isTtyError) {
    //   // Prompt couldn't be rendered in the current environment
    // } else {
    //   // Something else went wrong
    // }
  });
