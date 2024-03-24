# Git and Github

## Difference between Git and Github

**Git** is a Version Control System that

- tracks changes in files
- undoes changes
- swaps versions
- is ideal for teams

**GitHub** is a website, a cloud-based platform to store projects. It allows you to:

- showcase or share one's work
- track and manage
- let others review one's code, and make suggestions to improve it
- collaborate on a shared project

When you upload files to GitHub it will be stored in a Git repository. When changes are made, Git will automatically start to track and manage the changes. During a collaboration with others you will continually:

- **pull** all the latest changes made by the collaborators from the remote repository on GitHub
- **push** back one's own changes to the same remote repository on GitHub

## Create Repository on the Command Line

- _echo "# learning_references" >> README.md_
- `git init`
- `git add README.md`
- `git commit -m "first commit"`
- `git branch -M main`
- `git remote add origin`
- `git push -u origin main`

## Initializing a Git Repository

- open Git Bash
- navigate to the root directory of your project
- initialize the local directory, command: `git init -b main`
- add the files in your new local repository, command: `git add .`
- `git commit -m "First commit"`

## Adding a Local Repository to GitHub using Git

- create a new repository on GitHub. Do not initialize README, license, or gitignore files
- copy the remote repository URL
- open Git Bash
- change the current working directory to your local project
- `git remote add origin` (+ the repository's full URL on GitHub )
- `git remote -v`
- `git push origin main`
  If your default branch is not named "main", replace "main" with the name of your default branch.

## Cloning a Repository

`git clone` (it is important to clone the ssh_url and not the http_url)

## Git structure

**Working directory** Command: `git add` ->
**Index/Staging** Command: `git commit` ->
**HEAD** Command: `git push` ->
**Github** (**git remote add origin ssh_url**)

## Pulling

Command: `git pull`

## Branches

                    Main Branch

|           Team A            |           Team B            |
| :-------------------------: | :-------------------------: |
|      Feature A Branch       |      Feature A Branch       |
|      Feature A Commit       |      Feature B Commit       |
|   `git branch feature_a`    |   `git branch feature_b`    |
| `git checkout –b feature_a` | `git checkout –b feature_b` |

Commands:

- `git checkout -b` (creates a new branch, or change to another branch)
- `git status` (gives the current branch )
- `git merge` (+ the name of the branch merges the branch into the main)
