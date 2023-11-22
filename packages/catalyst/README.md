# @jstb/catalyst

Configurable Component Generator for React

## Usage

### Installation with NPM

```bash
npm install @jstb/catalyst
```

### Add as a script in `package.json`

```json
"scripts": {
  "generate": "catalyst"
},
```

### Run on terminal

```bash
npm run generate
```

## Configurations

Customizations can be configured in `package.json` in the following format.

```json
"catalystConfig":{
  "lang":"ts"
  ...
},
```

The options available are
|OPTION|DEFAULT|VALUES|DESCRIPTION|
|------|-------|------|-----------|
|lang|`"js"`|`"js"`, `"ts"`|Components in JS or TSX|
|arch|`"atomic"`| `"atomic"`, `"lego"` or `"none"`|It follows Brad Frosts Atomic Design pattern for generating components(Atoms, Molecules Organisms, Templates and Pages). Alternatively, you can generate Lego Design Pattern(Bricks and Sets). You can also chose none, where there will be a flat directory structure|
|skipStories|`false`|`false`, `true`| If you are not using storybooks or don't want the `.story.js` or `.story.ts` to be created.
|targetBasePath|`src/[components/containers]`|any directory path relative to project root|If you want to create the components in a different location in your project.|
|styling|`css`|`css` or `scss` or `less`|
