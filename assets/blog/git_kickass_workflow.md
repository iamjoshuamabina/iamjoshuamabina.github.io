# # Git KickAss Workflow
> ### `Basics and Best Practices`

> **`ProTip`** Commit **Units**. Commit **Early**. Commit **Often**.

> **`Heads up!`** Patrick Hogan did **[a great talk about Git and Workflows](https://youtu.be/GYnOwPl8yCE)** - I just had to *gist* this.

> **`Heads up!`** This is work in progress.

> *Feel free to yell at me - mabinajoshua@gmail.com*

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
	
	
