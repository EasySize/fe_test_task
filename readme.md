# Easysize test task

Your task is to build a simple javascript library with the following flow/criteria:
 - The library can be loaded into any e-commerce product page
 - The library is configurable and is launched with a trigger
 - After that trigger, a button should be added to the placeholder element
 - When that placeholder button is clicked, a widget/model/iframe should open containing your React app
 - The react app should contain at least two tabs/pages/screens, implementation is your choice
 - First screen should visualise the image of the product and a button 'Surprise me'
 - When that button is clicked, a loading indicator should show up, with a 'randomising your choice' gif, animation or something alike
 - After a couple of seconds, the last screen should show up, showing the randomly selected attribute and a button 'Select me'
 - When that button is clicked, you should select that attribute on the product page and close your widget/model/iframe

Notes:
 - The conf object has been somewhat prefilled to help you with the task
 - Your library file should be served at `http://127.0.0.1:3355/demo.js`
 - The app should/can use any external component library in order to speed up your process
 - You shouldn't modify this project, except for the widget configuration part of the `script.js` file

Submission:
 - Create a public git repo and push your code base there
 - Try to avoid having a single commit repo
 - Make a readme file, with a code snippet of what my script.js widget configuration part should look like
 - I will be expecting to test your app with the following steps:
   - Copy/paste the widget configuration to this project
   - git clone <your project>
   - nvm use <your node version>
   - npm install/build/serve

Evaluation:
 - The main evaluation point will be the architecture choices of your library
 - We do not expect the app to be pixel perfected, using default styles of your component library should be enough
