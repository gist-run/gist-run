# GistRun

[GistRun](https://gist.run) runs and edits [GitHub Gists](https://gist.github.com/) (surprise). GistRun is built with [Aurelia](http://aurelia.io), uses the [GitHub API](https://developer.github.com/v3/) and is hosted on [GitHub pages](https://pages.github.com/). [CloudFlare](https://www.cloudflare.com/) provides DNS and [Heroku](https://www.heroku.com/) hosts GistRun's integration with GitHub's OAuth [web application flow](https://developer.github.com/v3/oauth/#web-application-flow).
*Many thanks to the providers of these free libraries and services!*

## Why GistRun?

todo

## How does GistRun work?

todo

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.
4. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

5. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
6. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.


# Publishing to GitHub Pages

```shell
```
