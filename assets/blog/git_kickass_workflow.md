# Git: A Kick-ass Workflow

## # The Basics

### # WTF is Git?

Git is a 2-weeks project in 2005 by Linus Torvalds, the original author of the Linux kernel.

- **Free and open source** - Git is released under the GNU General Public License version 2.0.

- **Version control system (VCS)** - Git records changes to a file or set of files over time so that you can recall specific versions later.

- **Distributed** - One of the nicest things about git, is, it is distributed (a.k.a **decentralized**). Traditional version control systems are **centralized** (*translation* don&apos;t go down this road; **pain-in-the-ass** ahead). Being distributed, Git allows many developers to collaborate with great ease. 

### # Why Git?

Really short answer: It is a **Batman** thing to do.

The longer answer, you should use Git because:
	
- Better history: Because Git is distributed, developers make commits more often to their local branch without fear of your changes breaking the public codebase. More commits mean a better history.

- Offline: When ready to push your changes to a remote repository, connect to network and push. For developers, such flexibility means more productivity.

- Branching: Git's killer feature. Elsewhere, branching is a nightmare.

- Speedster: Git is fucking fast. A picture is worth a thousand words - [benchmarks are worth more](https://git-scm.com/about/small-and-fast). 

> **Not satisfied? Feel free to read more:**

> [Why Use Git Instead of a Legacy Version Control System?](http://www.gitguys.com/topics/why-use-git-instead-of-a-legacy-version-control-system/)

### # Setup and Config
	
`git-config` 

> Get and set repository or global options.

**Usage:**

- Set your global user settings.
	
	```bash
	$ git config --global user.name "Bruce Wayne"
	
	$ git config --global user.email "bwayne@wayne-ent.com"
	
	$ git config --global core.editor emacs
	```
- Get your global user settings
	
	```bash
	$ git config --global user.name
	Bruce Wayne
	
	$ git config --global user.email
	bwayne@wayne-ent.com
	```

- Sometimes, say when *Bruce Wayne* is busy being *Batman*, the ability to override the global settings comes in handy.
	
	```bash
	$ git config --local user.name "Batman"
	
	$ git config --local user.email "batman@justiceleague.com"
	```
	
### # Getting and Creating Projects

#### Cloning from a remote repository

`git-clone` 
	
> Clone a repository into a new directory.

**Usage:**

- Get a project from a remote repository

	```bash
	$ git clone <repository_url>
	```

#### Initializing a repository

`git-init` 
> Create an empty Git repository or re-initialize an exisiting one.

**Usage:**

- Create an empty Git repository - basically a `.git/` directory with appropriate subdirectories.

	```bash
	$ git init
	Initialized empty Git repository in /path/to/project/directory/.git/
	```
	
- Optimize your git workflow by automating the creation of .gitignore, README, LICENSE and other goodies.

	```bash
	$ git init --template=<template_directory>
	Initialized empty Git repository in /path/to/project/directory/.git/
	```
	
	The template directory contains files and directories that will be copied to the `.git/` directory after its created. 
	The default template directory is `/usr/share/git-core/templates/`.
		
- Run `git-init` again to re-initializes the project. It'll be like *reloading the `.git` directory.*
> Running git init in an existing repository is safe. It will not overwrite things that are already there. The primary reason for rerunning git init is to pick up newly added templates (or to move the repository to another place if --separate-git-dir is given).

### # Branching and Merging

### # Shairing and Updating Projects

## # Non Workflow

- **Make** Changes 
- **More** Changes
- **Break** Codebase
- **RAGE!!**
- **Fix** Codebase
- **Repeat**

## # Bad Workflow

- **Create** Changes
- **Commit** Changes
	
## # Basic Workflow

- **Create** Changes
- **Stage** Changes
- **Review** Changes
- **Commit** Changes

## # KickAss (Branching) Workflow

**Primary Branches:**

- Master Branch
	- Always reflects **PRODUCTION-READY** state
	- **Always exists**

- Develop Branch
	- Latest **DEVELOPMENT** state for next release.
	- Branch off **Master**.
	- Base **continous integration** on this.
	- When ready for release - Merge back into **Master**
	- **Always exists**

**Secondary Branches:**

- Feature Branches
	- Always **work-in-progress** for future releases.
	- *Start developing* - Branch off **LATEST DEVELOP** 
	- *Feature complete* - Merge back into **DEVELOP** and **discard.**
	- *Feature failed* - discard away.
	- Short or long running.
	- Typically in developer repositories.
	- Naming convention: **`feature-$feature_name`** e.g. **feature-upload-reports**
	
- Release Branches
	- Latest **RELEASE CANDIDATE** state.
	- Hold preparatory release work: QA, bug-fixes, testing.
	- Sits between **DEVELOP** and **MASTER.**
	- When ready for release - Branch from **DEVELOP.**
	- Merge back into **MASTER** - *for tagging* and **DEVELOP** to keep up-to-date with every commit.
	
- HotFix Branches
	- Like **RELEASE,** **HotFix** holds preparatory release work.
	- *The difference?* Hold **emergency problems** with **existing** production release.
	- Branch from **MASTER**
	- Merge back into **MASTER** and **DEVELOP.**
	- Discard after merging.
	- Naming convention e.g. **`hotfix-$issue_no#-$optional_desc`**
	
- Support Branches
	- Similar to **MASTER** + **HOTFIX** for **legacy releases**
	- *When a bug is discovered (in production):* Branch off an earlier tagged **MASTER** - into a **HOTFIX**
	- *When a bug is fixed?* Branch off **the HOTFIX** into a *tagged* **SUPPORT** branch.
	- **Do not merge back into anything** - This one runs its own lane.
	- **`Heads up!`** Could be cherry picked into **DEVELOP** if relevant.

## # All That *$H!7* Wrapped Together Nicely...

![All this *SHIT* put together](https://dl.dropboxusercontent.com/u/62773211/docs/Git%20Branching%20Workflow%20-%20Patrick%20Hogan.png)
	
	
**`ProTip`** Commit **Units**. Commit **Early**. Commit **Often**.


> **`Heads up!`** Patrick Hogan did **[a great talk about Git and Workflows](https://youtu.be/GYnOwPl8yCE)** - I just had to *gist* this.
