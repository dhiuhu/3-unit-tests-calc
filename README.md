## Unit Test Workflow

We use continuous integration to run unit tests automatically on each commit. The workflow is defined in the `.github/workflows/test-after-build.yml` file.

### Workflow Status

[![Unit Test Status](https://github.com/your-username/your-repository/workflows/Unit%20Tests/badge.svg)](https://github.com/dhiuhu/3-unit-tests-calc.git)

### Triggering Unit Tests

Unit tests are triggered automatically on each commit to the `main` branch.

If you want to run unit tests manually, you can use the following commit tag:

```bash
git commit -m "Run unit tests"
