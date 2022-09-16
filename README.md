# Personal Website Template
This project is for generating sites similar to my own website cihanbosnali.com. The UI is influenced by film / tv streaming websites. My motivation was to update the content easily without changing the code. Hence, all content is written into json files. You can use json files to add cards and other information. You can add images to the public/data/ folder and mention them in your json to use them on your cards.

![](https://img.shields.io/badge/Project_Status-In_Progress-informational?style=flat&logoColor=white&color=orange)
![](https://img.shields.io/badge/License-MIT_License-informational?style=flat&logoColor=white&color=darkgreen)
![](https://img.shields.io/badge/Frontend-React-informational?style=flat&logo=react&logoColor=white&color=blue)

## Installation
- Clone the repository.
- Use `npm install` to install dependencies
- Use `npm start` to run

## Adding Data
The [data](https://github.com/CihanBosnali/personal-website-22-template/tree/main/src/data) folder includes json files necessary to generate your website. You can change this files to add your data to your website build.

## Deployment
Use the command below to generate a build. You will need to host the newly generated build folder.
```
npm run build
```
You can use your favorite static hosting platform to host your site. My current favorite is [Firebase Hosting](https://firebase.google.com/docs/hosting).

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the create-react-app documentation about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the create-react-app documentation about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
