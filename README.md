# GitHubTeamTemplets

This repository serves as a collection of templates and guidelines to standardize and streamline team collaboration on GitHub. It includes:

*   **Issue Templates:** Pre-defined templates for various types of issues to ensure consistent and complete information. You can find these in the `.github/ISSUE_TEMPLATE` directory. Specific templates include:
    *   `bugfix.yml`: For reporting bugs or defects found in the application.
    *   `docs_improvement.yml`: For suggesting improvements or reporting issues in documentation.
    *   `feature_request.yml`: For proposing new features or enhancements.
    *   `improvement.yml`: For suggesting general improvements to existing features, processes, or the codebase.
    *   `release_checklist.yml`: A checklist to ensure all steps are followed for a new software release.
    *   `story.yml`: For defining user stories, typically describing a feature from an end-user perspective.
    *   `subtask.yml`: For breaking down larger tasks, stories, or bugs into smaller, manageable units of work.
    *   `task.yml`: For creating general tasks that need to be tracked and completed.
    *   `tech_debt.yml`: For identifying and tracking areas of technical debt that require refactoring or improvement.

*   **Commit Message Conventions:** Best practices for writing clear and informative commit messages, aiding in history tracking and automated changelog generation.

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

### Inital Commit
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
