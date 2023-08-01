# @jstb/catalyst

Functional Component Generator for React

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

Customizations are configured in `package.json` in the following format.

```json
"catalystConfig":{
  "lang":"ts"
  ...
}
```

The options available are
|OPTION|VALUES|DESCRIPTION|
|------|------|-----------|
|lang| `"js"` (default), `"ts"`|By default, this generates JS components. Can generate components in typescript, if you specify this param|
|arch| `"atomic"`(default), `"lego"`|By default, it follows Brad Frosts Atomic Design pattern for generating components(Atoms, Molecules Organisms, Templates and Pages). Alternatively, you can generate Lego Design Pattern(Bricks and Sets). |
