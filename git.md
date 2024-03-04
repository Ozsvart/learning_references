# Git and Github

## Difference between Git and Github

**Git** is a Version Control System that

- track changes in files
- undo changes
- swap versions
- ideal for teams

**GitHub** is a website, a cloud-based platform to store projects. It allows you:

- showcase or share one's work
- track and manage
- let others review one's code, and make suggestions to improve it
- collaborate on a shared project

When one upload files to GitHub it will be stored in a Git repository. When changes are made, Git will automatically start to track and manage the changes. During a collaboration with others one will continually:

- **pull** all the latest changes made by the collaborators from the remote repository on GitHub
- **push** back one's own changes to the same remote repository on GitHub

## Create Repository on the Command Line

- _echo "# learning_references" >> README.md_
- _git init_
- _git add README.md_
- _git commit -m "first commit"_
- _git branch -M main_
- _git remote add origin_
- _git push -u origin main_

## Initializing a Git Repository

- open Git Bash
- navigate to the root directory of your project
- initialize the local directory, command: _git init -b main_
- add the files in your new local repository, command: _git add . _
- _git commit -m "First commit"_

## Adding a Local Repository to GitHub using Git

- create a new repository on GitHub. Do not initialize README, license, or gitignore files
- copy the remote repository URL
- open Git Bash
- change the current working directory to your local project
- _git remote add origin_ (+ the repository's full URL on GitHub )
- _git remote -v_
- _git push origin main_
  If your default branch is not named "main", replace "main" with the name of your default branch.

## Cloning a Repository

_git clone_ (it is important to clone the ssh_url and not the http_url)

## Git structure

**Working directory** Command: _git add_ ->
**Index/Staging** Command: _git commit_ ->
**HEAD** Command: _git push_ ->
**Github** (**git remote add origin ssh_url**)

## Pulling

Command: git pull

## Branches

                    Main Branch

|          Team A           |          Team B           |
| :-----------------------: | :-----------------------: |
|     Feature A Branch      |     Feature A Branch      |
|     Feature A Commit      |     Feature B Commit      |
|   git branch feature_a    |   git branch feature_b    |
|  git checkout feature_a   |  git checkout feature_b   |
| git checkout –a feature_a | git checkout –b feature_b |

Commands:

- _git checkout -b_ (creates a new branch, or change to another branch)
- _git status_ (gives the current branch )
- _git merge_ (+ the name of the branch merges the branch into the main)
