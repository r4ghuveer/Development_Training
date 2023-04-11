# using react
npm / npx create-react-app my_app  (this will create all neccessary folders and files to use react)

go to project directory and run "npm start" to start the react app.

react app is a function based component, so we have to write a function and return the jsx.

in jsx we have to write :
 class = > className

 Babel compiles the jsx code that is inside the function.

1) index.html is the entry point which displays our page
2) App.js has a App function that returns our jsx code to index.js
3) index.js is the entry point for app.js, index.js renders the jsx code to index.html 
4) In the App.js we have to return only one element for ex. <div></div>. 
    4.1) But if you want to return multiple tags we can use jsx fragment, i.e. start with <> and end with </> .
