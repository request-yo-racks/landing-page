# landing-page
RYR landing page

## Setup the project

Setup a directory to store the RYR projects:
```bash
export RYR_PROJECT_DIR="${HOME}/projects/request-yo-racks"
```

Clone the project:
```bash
  mkdir -p "${RYR_PROJECT_DIR}"
  cd "${RYR_PROJECT_DIR}"
  git clone git@github.com:request-yo-racks/landing-page.git
```

Prepare your development environment:
```bash
cd "${RYR_PROJECT_DIR}/landing-page"
npm i
```

## Local development

To serve the project locally:
```bash
npm run dev
```

To test the project locally (i.e. running the full list of ci-tasks):
```bash
npm run ci
```
The `scripts` section of the `package.json` file will show you all the available commands.
