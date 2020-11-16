# github-browser

This is a demo project for navigating Github repositories. It currently supports only master branches.

## Setup

1. Install all dependencies with:

    `npm i`
    
2. Launch a project:

    `npm run start` 
    
3. Now the project is running at http://localhost:3000/

## How it's work

Project is really simple.
The welcome screen displays the initial link to go to the [tannerlinsley/react-query repository](https://github.com/tannerlinsley/react-query).

Then, if you need to navigate to a different repository, just replace the URL following the pattern:

`http://localhost:3000/{owner}/{repo}`

In case of error, an appropriate page will help you to return to the default repository.
