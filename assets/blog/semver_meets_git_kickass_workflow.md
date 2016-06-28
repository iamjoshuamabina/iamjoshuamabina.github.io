# Semantic Versioning Meets Git Kickass Workflow

Semantic Versioning (referred to, for short, as SemVer), is a versioning system that has been on the rise over the last few years. With new plugins, addons, extensions, and libraries being built every day, having a universal way of versioning software development projects is a good thing to help us keep track of what’s going on.

What is SemVer?
SemVer is a 3-component system in the format of x.y.z where:

x stands for a major version
y stands for a minor version
z stands for a patch
So you have: Major.Minor.Patch.

How Does SemVer work?
SemVer relies on bumping the correct component up at the right time. Therefore, determining which type of version you should be releasing is simple.

If you are mostly fixing bugs, then this would be categorized as a patch, in which case you should bump z.

If you are implementing new features in a backward-compatible way, then you will bump y because this is what’s called a minor version.

On the other hand, if you implement new stuff that is likely to break the existing API, you need to bump x because it is a major version.

Why SemVer?
Because it makes sense. If there is one thing I’ve learned, it’s that versioning without guidelines basically means nothing. Moving to 4.2? Okay, fine. Why? Why not 5? Why not 4.1.1? Why not 4.11? Why not 4.1.oh-snap-new-version?

Following strict guidelines helps give meaning to version numbers.

For example, if you see version 1.3.37, then you’ll know this is the first major release, but there have already been 3 minor versions bringing new features. However, you’ll also note that this is the 37th patch in this minor version, which means there were a lot of bugs (little or big) involved.

Also it helps a lot in managing dependencies. Let’s say you are building a library called Unicorn. For whatever reasons, you have Rainbow as a dependency. When you get your lib out of the box for the first time, Rainbow is versioned 6.6.6 (looks nifty, huh?).

That means you can specify Rainbow as a Unicorn dependency as greater than or equal to 6.6.0, but less than 7.0.0. Remember how the first number is the major patch with backward-apocalyptic changes? If someday Rainbow moves up to 7.0.0, nothing tells you that it won’t break Unicorn, so it’s best to keep it at version 6.

Things to Keep in Mind
Now that you know what SemVer is, let’s look at some of the things that might trip people up when first starting to use it.

It Starts at 0.1.0
One thing to note when using SemVer is that it starts at 0.1.0 and not at 0.0.1 like one would assume. If you think this through, it makes sense. You do not start with a patch, you start with a set of features as a first draft for your project, hence version 0.1.0.

Before 1.0.0 is Only the Development Phase
Whenever you are building a new piece of software, there is always a phase where you keep asking yourself: When should I release the first official major version?

Here are a few hints to help you answer to this question: If your software is already being used in production or has users depending on it, then you should already be at 1.0.0. Also, if you are worrying a lot about breaking the current API, this likewise probably means you should be running 1.0.0 already.

Otherwise, keep in mind that versions below 1.0.0 are basically the development rush, where you focus on getting stuff done. Prior to 1.0.0, you shouldn’t be afraid of breaking things, and you’ll do whatever needs to be done so that when 1.0.0 is reached, it’s stable.

About Pre-releases
Before deploying a major version, you usually go through a lot of work that need to be tested again and again to make sure everything’s okay. That’s typically the moment you’d like to have a pre-release.

With SemVer, pre-releases can be defined by appending a hyphen and an identifier to a version. For example, a pre-release for version 1.0.0 could be 1.0.0-alpha.1. Then if another build is needed, it would become 1.0.0-alpha.2, and so on.

Final Thoughts
If you are not using SemVer, there is no legitimate excuse not to use it on your next project (or current project?). Not only does it help to keep things clean and meaningful, but it will also help other people who might be using your project as a dependency.