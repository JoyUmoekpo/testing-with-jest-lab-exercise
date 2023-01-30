# Testing Lab
In this lab you will practice high level and low level testing, as well as TDD with Jest.

## Part 1
Clone and run the Wanted Queries application by using the following commands in your terminal

- Navigate to the folder you want to store this inside in command line and run the following commands:

```
git clone -b version-1.1 https://github.com/DevMountain-QA/wanted-queries.git

cd wanted-queries

npm i

npm start

```

- The Wanted Queries app should be up and running in your browser

- Review the requirements located here: https://github.com/DevMountain-QA/wanted-queries/blob/version-1.1/README.md

- Create a test plan to organize your testing, and create a total of 5 tests:

  - 2 high level (broad) tests

  - 2 low level (specific) tests

  - 1 smoke/sanity test (basic run through of the whole site)

**There is no “Bug Bounty”, however you should have enough coverage in your tests to find some flaws with the application**

## Part 2
For part 2 you will need to create a directory and open it up in VS Code. Call the directory `testing-lab`.

### Step 1
In this step, we’ll initialize a `package.json` and import Jest into our project.

#### Instructions:

- Run `npm init -y`.

- Run `npm install --save-dev` jest to install Jest and save it to the development dependencies.

- Open `package.json` and modify the `test` script, replacing the entire string with `jest`

### Step 2
In this step, create a JavaScript file that has a couple functions.

Instructions:

- Create a `functions.js` file.

- Use `module.exports` to export an object.

- Add a new property to the object called `returnTwo`:

  - `returnTwo` should be a function that returns the integer `2`.

- Add a new property to the object called `greeting`:

  - `greeting` should be a function with a `name` parameter.

  - `greeting` should return `"Hello, name."` where `name` is the value of the `name` parameter.

- Add a new property to the object called `add`:

  - `add` should be a function with a `num1` and `num2` parameter.

  ` `add` should return the sum of `num1` and `num2`.

### Step 3
In this step, we’ll create a test file to test the functions inside of `functions.js`.

#### Instructions:

- Create a new test file called `functions.test.js`.

- Open `functions.test.js`.

- Require `functions.js` at the top.

- Create a test for `returnTwo`:

  - This test should `expect returnTwo()` to equal 2.

- Create a test for `greeting`:

  - This test should `expect greeting('James')` to equal `"Hello, James."`.

  - This test should `expect greeting('Jill')` to equal `"Hello, Jill."`.

- Create a test for `add`:

  - This test should `expect add(1, 2)` to equal `3`.

  - This test should `expect add(5, 9)` to equal `14`.

### Step 4
In this step, we’ll run our test script and watch Jest in action.

#### Instruction:

- Run npm run test.

If everything worked correctly, you should have a total of 3 passed tests.
