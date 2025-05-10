# GitHubTeamTemplets

This repository serves as a collection of templates and guidelines to standardize and streamline team collaboration on GitHub. It includes:

## Table of Contents

*   [Issue Templates](#issue-templates)
*   [GitHub Actions](#github-actions)
*   [Commit Message Best Practices](#commit-message-best-practices)
    *   [Default](#default)
    *   [Merge Commit](#merge-commit)
    *   [Revert Commit](#revert-commit)
    *   [Initial Commit](#initial-commit)
    *   [Types](#types)
    *   [Scopes](#scopes)
    *   [Breaking Changes Indicator](#breaking-changes-indicator)
    *   [Description](#description)
    *   [Body](#body)
    *   [Footer](#footer)
    *   [Versioning](#versioning)
    *   [Examples](#examples)
*   [Project Style Guidelines](#-project-style-guidelines)
    *   [File Naming Conventions](#file-naming-conventions)
    *   [Directory Structure Guidelines](#directory-structure-guidelines)

---

## Issue Templates
Pre-defined templates for various types of issues to ensure consistent and complete information. You can find these in the `.github/ISSUE_TEMPLATE` directory. Specific templates include:
*   `bugfix.yml`: For reporting bugs or defects found in the application.
*   `docs_improvement.yml`: For suggesting improvements or reporting issues in documentation.
*   `feature_request.yml`: For proposing new features or enhancements.
*   `improvement.yml`: For suggesting general improvements to existing features, processes, or the codebase.
*   `release_checklist.yml`: A checklist to ensure all steps are followed for a new software release.
*   `story.yml`: For defining user stories, typically describing a feature from an end-user perspective.
*   `subtask.yml`: For breaking down larger tasks, stories, or bugs into smaller, manageable units of work.
*   `task.yml`: For creating general tasks that need to be tracked and completed.
*   `tech_debt.yml`: For identifying and tracking areas of technical debt that require refactoring or improvement.

---

## GitHub Actions
*   [`cspell`](./.github/workflows/cspell.yml): Automatically checks for spelling errors in Markdown and text files using the [cspell action](https://github.com/streetsidesoftware/cspell-action). This helps maintain the quality and professionalism of the documentation and other text-based files in the repository.
*   [`gitleaks`](./.github/workflows/gitleaks.yml): Scans the repository for hardcoded secrets like passwords, API keys, and tokens using the [Gitleaks action](https://github.com/gitleaks/gitleaks-action). This helps prevent accidental exposure of sensitive information.
*   [`CodeQL`](./.github/workflows/codeql-analysis.yml): Performs static analysis of the code to find security vulnerabilities and maintain code quality using [GitHub's CodeQL action](https://github.com/github/codeql-action). It supports various languages and helps identify potential issues early in the development process.

---

The goal is to improve communication, maintain a clean project history, and make the development process more efficient.

## Commit Message Best Practices

### Default
<pre>
<b><a href="#types">&lt;type&gt;</a></b></font>(<b><a href="#scopes">&lt;optional scope&gt;</a></b>): <b><a href="#description">&lt;description&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#body">&lt;optional body&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#footer">&lt;optional footer&gt;</a></b>
</pre>

### Merge Commit
<pre>
Merge branch '<b>&lt;branch name&gt;</b>'
</pre>
<sup>Follows default git merge message</sup>

### Revert Commit
<pre>
Revert "<b>&lt;reverted commit subject line&gt;</b>"
</pre>
<sup>Follows default git revert message</sup>

### Initial Commit
```
chore: init
```

### Types
- API or UI relevant changes
    - `feat` Commits, that add or remove a new feature to the API or UI
    - `fix` Commits, that fix an API or UI bug of a preceded `feat` commit
- `refactor` Commits, that rewrite/restructure your code, however do not change any API or UI behaviour
    - `perf` Commits are special `refactor` commits, that improve performance
- `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` Commits, that add missing tests or correcting existing tests
- `docs` Commits, that affect documentation only
- `build` Commits, that affect build components like build tools, dependencies, project version, ci pipelines, ...
- `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- `chore` Miscellaneous commits e.g. modifying `.gitignore`

### Scopes
The `scope` provides additional contextual information.
* Is an **optional** part of the format
* Allowed Scopes depend on the specific project
* Don't use issue identifiers as scopes

### Breaking Changes Indicator
Breaking changes should be indicated by an `!` before the `:` in the subject line e.g. `feat(api)!: remove status endpoint`
- Is an **optional** part of the format
- Breaking changes **must** be described in the [commit footer section](#footer)

### Description
The `description` contains a concise description of the change.
- It is a **mandatory** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"
  - Think of `This commit will...` or `This commit should...`
- Don't capitalize the first letter
- No dot (`.`) at the end

### Body
The `body` should include the motivation for the change and contrast this with previous behavior.
- Is an **optional** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"
- This is the place to mention issue identifiers and their relations

### Footer
The `footer` should contain any information about **Breaking Changes** and is also the place to **reference Issues** that this commit refers to.
- Is an **optional** part of the format
- **optionally** reference an issue by its id.
- **Breaking Changes** should start with the word `BREAKING CHANGE:` followed by space or two newlines. The rest of the commit message is then used for this.

### Versioning
- **If** your next release contains commit with...
   - **breaking changes** incremented the **major version**
   - **API relevant changes** (`feat` or `fix`) incremented the **minor version**
- **Else** increment the **patch version**


### Examples
- ```
  feat: add email notifications on new direct messages
  ```
- ```
  feat(shopping cart): add the amazing button
  ```
- ```
  feat!: remove ticket list endpoint

  refers to JIRA-1337

  BREAKING CHANGE: ticket endpoints no longer supports list all entities.
  ```
- ```
  fix(shopping-cart): prevent order an empty shopping cart
  ```
- ```
  fix(api): fix wrong calculation of request body checksum
  ```
- ```
  fix: add missing parameter to service call

  The error occurred due to <reasons>.
  ```
- ```
  perf: decrease memory footprint for determine uniqe visitors by using HyperLogLog
  ```
- ```
  build: update dependencies
  ```
- ```
  build(release): bump version to 1.0.0
  ```
- ```
  refactor: implement fibonacci number calculation as recursion
  ```
- ```
  style: remove empty line
  ```

---

The commit message guidelines presented here are based on established conventions, notably those popularized by Angular and detailed in resources such as the Gist by Bengt Brodersen.[^1]

[^1]: The commit message guidelines are based on the Gist by Bengt Brodersen: [https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13).

---

## 📝 Project Style Guidelines

This section outlines recommended conventions for file naming and project structure to promote consistency, clarity, and maintainability in software projects.

### File Naming Conventions

Adopting a consistent file naming strategy is crucial for project organization.

*   **Consistency is Key:** Choose a style and stick to it. Common casing styles include:
    *   `kebab-case`: All lowercase with hyphens (e.g., `my-module-file.js`). Often preferred for web projects (HTML, CSS, JS files) and configuration files.
    *   `snake_case`: All lowercase with underscores (e.g., `my_python_script.py`, `database_connection.java`). Common in Python and some other backend languages.
    *   `PascalCase` (or `UpperCamelCase`): Capitalized words concatenated (e.g., `MyClass.cs`, `UserProfileComponent.jsx`). Often used for class names and UI components.
    *   `camelCase`: First word lowercase, subsequent words capitalized (e.g., `myVariableName.js`, `dataProcessingService.ts`). Common for variables and function names in many languages.
*   **Descriptive Names:** File names should clearly indicate their content or purpose. Avoid overly generic names like `utils.js` or `script.py` without further context if possible.
*   **Lowercase for Web/Config:** For files served by web servers or cross-platform configuration files, sticking to lowercase (`kebab-case` or `snake_case`) is generally safer to avoid case-sensitivity issues.
*   **Extensions:** Always use appropriate and standard file extensions (e.g., `.js`, `.py`, `.java`, `.md`, `.yml`, `.json`).

**Example Scenarios:**

*   A JavaScript module for user authentication: `user-authentication.js` (kebab-case)
*   A Python script for data processing: `data_processing_script.py` (snake_case)
*   A C# class definition: `CustomerModel.cs` (PascalCase)
*   A general configuration file: `config.yml` or `settings.json`

### Directory Structure Guidelines

A well-organized directory structure makes it easier to locate files, understand the project\'s architecture, and onboard new team members. While the ideal structure varies by project type and language/framework, here are some general principles:

*   **Source Code (`src` or `lib`):**
    *   Place the main application/library source code in a dedicated directory, commonly named `src` (for "source") or `lib` (for "library").
    *   Within `src`, group files by feature, module, or type (e.g., `src/components/`, `src/services/`, `src/models/` or `src/user-management/`, `src/order-processing/`).
*   **Tests (`tests` or `test`):**
    *   Keep test files separate from source code but in a clearly identifiable directory, often `tests` or `test`.
    *   Mirror the source code structure within the test directory to make it easy to find corresponding tests (e.g., `tests/services/userService.test.js` for `src/services/userService.js`).
*   **Documentation (`docs`):**
    *   Store project documentation (beyond READMEs) in a `docs` directory. This can include API documentation, architectural diagrams, and usage guides.
*   **Configuration (`config`):**
    *   Centralize environment-specific or application-wide configuration files in a `config` directory.
*   **Assets/Static Files (`public`, `static`, `assets`):**
    *   For web projects, place publicly accessible static files (images, stylesheets, fonts) in a directory like `public`, `static`, or `assets`.
*   **Scripts (`scripts`):**
    *   Utility scripts for build processes, deployment, or development tasks can be placed in a `scripts` directory.
*   **`.github` Directory (for GitHub repositories):**
    *   Store GitHub-specific files here:
        *   `ISSUE_TEMPLATE/`: Issue form templates.
        *   `workflows/`: GitHub Actions workflow files.
        *   `PULL_REQUEST_TEMPLATE.md`: Default pull request template.
*   **Root Directory:**
    *   Keep the root directory clean. It should typically contain:
        *   `README.md`
        *   License file (e.g., `LICENSE`)
        *   Contribution guidelines (e.g., `CONTRIBUTING.md`)
        *   Changelog (e.g., `CHANGELOG.md`)
        *   Project configuration files (e.g., `package.json`, `requirements.txt`, `.gitignore`).

**General Principles for Structure:**

*   **Modularity:** Structure the project so that components or modules are loosely coupled and can be understood and modified independently.
*   **Separation of Concerns:** Group files based on their role or functionality.
*   **Scalability:** Choose a structure that can accommodate project growth.
*   **Framework Conventions:** If using a specific framework (e.g., React, Django, Spring), adhere to its established directory structure conventions first, then adapt as needed.

These guidelines provide a starting point. The most important aspect is to choose a structure and naming convention that makes sense for your project and team, and then apply it consistently.
