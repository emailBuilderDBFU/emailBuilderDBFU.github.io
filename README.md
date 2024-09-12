# Deploys:
1. There is a github workflow set up which will run every time there is a master-commit. It will build the react app and push its build folder to the root of the "gh-pages" remote branch. See ./.github/workflows/deploy.yaml
    - Following something similar to: [this](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)
2. There is a [repo secret](https://github.com/emailBuilderDBFU/emailBuilderDBFU.github.io/settings/secrets/actions) setup (that should never expire) which will allow the deploy to push to the gh-pages branch.
3. The [github pages setup](https://github.com/emailBuilderDBFU/emailBuilderDBFU.github.io/settings/pages) uses the "gh-pages" branch, not master.