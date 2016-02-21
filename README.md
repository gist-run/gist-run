# GistRun

[GistRun](https://gist.run) runs and edits [GitHub Gists](https://gist.github.com/) (surprise). GistRun is built with [Aurelia](http://aurelia.io), uses the [GitHub API](https://developer.github.com/v3/) and is hosted on [GitHub pages](https://pages.github.com/). [CloudFlare](https://www.cloudflare.com/) provides DNS and [Heruku](https://www.heroku.com/) hosts GistRun's integration with GitHub's OAuth [web application flow](https://developer.github.com/v3/oauth/#web-application-flow).
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

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.


# Publishing to GitHub Pages

```shell
git branch -D gh-pages
git checkout -b gh-pages
gulp build
jspm bundle 'config' + 'main' + 'util' + 'editing/*' + 'github/*' + 'import/*' + 'ui/*' + 'ui/embed/*' + 'worker/*' + 'ui/embed/*.html!text' + 'ui/*.html!text' + npm:aurelia-framework@1.0.0-beta.1.0.8 + npm:aurelia-bootstrapper@1.0.0-beta.1.0.2 + npm:aurelia-templating-binding@1.0.0-beta.1.0.2 + npm:aurelia-templating-resources@1.0.0-beta.1.0.4 + npm:aurelia-templating-router@1.0.0-beta.1.0.5 + npm:aurelia-loader-default@1.0.0-beta.1.0.2 + npm:aurelia-history-browser@1.0.0-beta.1.0.1 + split.js + text dist/bundle.js --inject
git add dist/bundle.js -f
git add jspm_packages/system.js -f
git add jspm_packages/github/ajaxorg/ace-builds@1.2.3 -f
git add jspm_packages/github/github/octicons@3.3.0/octicons.css -f
git add jspm_packages/github/primer/primer@2.5.0/css/primer.css -f
git add jspm_packages/github/github/octicons@3.3.0/octicons.woff -f
Remove-Item -Recurse -Force build
Remove-Item -Recurse -Force src
Remove-Item -Recurse -Force test
Remove-Item "gulpfile.js"
Remove-Item "jsconfig.json"
Remove-Item "karma.conf.js"
Remove-Item "LICENSE"
Remove-Item "package.json"
Remove-Item "protractor.conf.js"
Remove-Item "README.md"
Remove-Item "wallaby.js"
Remove-Item ".editorconfig"
Remove-Item ".eslintignore"
Remove-Item ".eslintrc"
Remove-Item ".npmignore"
Remove-Item "aurelia.protractor.js"
git add -u
git commit -m "chore(gh-pages): publish"
git push --set-upstream origin gh-pages -f
git checkout master
jspm install
gulp watch
```
