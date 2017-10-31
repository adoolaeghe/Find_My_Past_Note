# FindMyPastNote

## Specification

FindMyPastNote is a webp application that stores your past notes so that you can remember your thoughts from past centuries ! 

The given requirements of the application are : 

* Add a note
* List of notes 
* View a note in a specific modal. 

<p align="center">
  <img src="https://media.giphy.com/media/3ohhwFbatgpT6Etoze/giphy.gif" />
</p>


## Instructions

#### Run the application

Open your terminal and navigate to a directory to install the program.

```
$ git clone git@github.com:adoolaeghe/Find_My_Past_Note.git
$ cd Find_My_Past_Note
```

Install all the dependencies for running the project with : 
```
$ npm install
``` 

Finally, run this command to run the application locally:
``` 
$ npm start
```

It should open a new window in you browser on localhost:3000

#### Run the tests

<img src="https://i.imgur.com/1qvEnpG.png" width="300px">

To run the tests type the following into the terminal:

```
$ npm test
```

## My approach

This was the first time I was building a full webpage using ReactJs. I must admit that I really felt excited about the potential of this technology ! 

Firstly, I used the the ```create-react-app``` that allowed me to get started with creating React components very quickly. I decided to have the main components ```note``` and ```noteForm``` that are both rendered from the main ```App``` component. Then I learned more about the React distribution of props and state. I was a little stuck when trying to lift the user input entered in the form in a child component back to the parent component but I fixed it by passing a function ```writeNote``` which is sent from the parent component```app``` to child ```noteForm```. When called, it sets back the parents class state directly from the child component user input. From this I was able to render a list of new notes on the page. 

At this point I wasn't certain how I would implement the notes persistence without using a database. I researched about the browser localStorage functionality which stores information locally on a user’s browser. I read about its limitations as the storage would only be browser specific. However, in the context of an MVP, I decided it would suit the specifications of this project temporarily. Every time a note was added, it is stored as an array in the state of the main component, which also updates the localStorage Json storage. This was done by converting the array into a string using ```stringify``` function. The rendering function also maps through the parsed localStorage to render each note on the page. 

The components are tested using Jest and enzyme testing framework. I used shallow rendering with Jest snapshots. Shallow rendering renders only the component itself without its children. This allowed me to create isolated tests for each component. I was able to inspect the component ```.type``` and ```.props``` to verify that the correct result was rendered. However I couldn't simulate an event like click or change of state. When simulating a click event, it resulted in an error with the ```getElementbyId``` called in Onclick event. 

As a conclusion, I would like to know more in the future about styling using react. I would like to research more about testing ReactJs application especially when going into more complex architecture with Redux for example. 

## If I had more time....

* More tests ! I would like to understand more about shallow rendering test, especially when passing callbacks to children components.  
* Styling more appropriately using "styles components" keeping React components and styles together. 

## Thank you for taking the time to assess this tech-test
