# test-datastore


## Description

Since we have different repository in every project for the API tests. We need a way to collaborate between different test suites in order to have a common data store to avoid redundancy and a better way to share knowledge/data.

This repository serves as a single point of contact for the following:

1. Request data
2. Response validation
3. Enums (commonly used error codes)

## Usage

This repository should be added as a submodule in all other API test repositories of individual projects.
This is useful because we will have multiple repositories that share the same data/components. With this approach you can easily update those data/components in all the repositories that added them as a submodule. This is a lot more convienient than copy-pasting the code into the repositories.

[More on git submodules ](https://www.atlassian.com/git/tutorials/git-submodule)
