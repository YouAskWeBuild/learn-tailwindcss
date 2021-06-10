# Installation

## Tailwind CSS

> Recommended way to install Tailwind CSS is installing Tailwind as a PostCSS plugin

### PostCSS

> PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

Read more about PostCSS here

    - [PostCSS Github](https://github.com/postcss/postcss)
    - [PostCSS Website](https://postcss.org/)

### Creating a project

- Run the following command in terminal

  ```shell
  npm init
  ```

- Enter the package name, version, description, etc and a **package.json** would be generated.

  ```json
  {
    "name": "learn-tailwindcss",
    "version": "1.0.0",
    "description": "Learn tailwindcss | A step by step tutorial",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/YouAskWeBuild/learn-tailwindcss.git"
    },
    "keywords": ["tailwindcss", "tailwind", "css", "tutorial"],
    "author": "Balachandar Sureshkumar",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/YouAskWeBuild/learn-tailwindcss/issues"
    },
    "homepage": "https://github.com/YouAskWeBuild/learn-tailwindcss#readme"
  }
  ```

- You may or may not have few keys like in the above package.json example depending on your input in previous step

- Run the following command

  ```shell
   npm i -D webpack webpack-cli webpack-dev-server copy-webpack-plugin style-loader css-loader postcss-loader babel-loader @babel/core @babel/preset-env
  ```

- Create a new file called **webpack.config.js** in the root folder of your project with the following content.

  ```js
  const path = require("path");
  const CopyWebpackPlugin = require("copy-webpack-plugin");

  module.exports = {
    mode: "production",
    entry: "./src/assets/js/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      watchContentBase: true,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "*.html",
            context: path.resolve(__dirname, "src", "html"),
            force: true,
          },
        ],
      }),
    ],
  };
  ```

- Add the following lines to the **package.json** under the "scripts" object

> "start": "webpack serve --mode=development --open",

> "build": "export NODE_ENV=production && webpack"

```json
"scripts":{
    "start": "webpack serve --mode=development --open",
    "build": "export NODE_ENV=production && webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

> "scripts" key should look like above

- Run the following command

  ```shell
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```

- The above command installs the following

  1. Tailwind CSS - Latest version
  2. PostCss - Latest version
  3. Autoprefixer - Latest version

  > For the latest versions you need PostCSS version 8 or above.

- Run the following command

  ```shell
  npx tailwindcss init -p --full
  ```

  > This will create configuration files for tailwind called **tailwind.config.js** and for postcss called **postcss.config.js**

  ***

  **NOTE**

  **--full** in the above command will include all of Tailwind’s default configuration

  So you can skip --full and add the configurations later.

  ***

- Create a js file called index.js and paste the following content.

  ```js
  import "../css/style.css";
  ```

  > I have created the file under src/assets/js/, if you create in some other path, you have to change the path correspondingly in webpack.config.js file under _entry_ key.

- Create a css file called styles.css and paste the following content.

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  > I have created the file under src/assets/css/, if you create in some other path, you have to change the path correspondingly in index.js file

- To remove styles which are not being used, add `'./src/**/*.html'` to purge array in tailwind.config.js

  > purge: ['./src/**/*.html'],

- Create a html file _index.html_ under src/html with the following content
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tailwind CSS</title>
    </head>
    <body>
      <h1 class="bg-blue-900 text-white">Hello world</h1>
      <script src="bundle.js"></script>
    </body>
  </html>
  ```
- Run
  ```shell
  npm start
  # to start development server
  # or
  npm build
  #to build for production
  ```
