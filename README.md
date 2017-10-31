# FindMyPastNote

## Specification

FindMyPastNote is a webpage that stores your past notes so that you can remember your thoughts from past centuries ! 

The given requirement of the application are : 

* Add a note
* List of notes 
* View a note in a specific modal. 

image


## Instruction

#### Run the application

Open your terminal and navigate to a directory to install the program.

```
$ git clone git@github.com:adoolaeghe/findmypastnote.git
$ cd findmypastNote
```

Install the all the dependencies for running the project with : 
```
$ npm install
``` 

Finally, to the run this command to run the application locally:
``` 
$ npm start
```

It should open a new window in you browser on localhost:3000

#### Run the tests

To run the tests type the following into the terminal:

```
$ npm test
```

## My approach

This was the first time I was building a full webpage using ReactJs. I must admit being very excited about the potential of the technology ! 

Firstly, I used the the ```create-react-app``` that allowed me to get started with creating React component very quickly. I decided to have to main components ```note```and ```noteForm``` that are both rendered from the main ```App``` component. Then I learned more about the React distribution of props and state, I was a little stuck when trying the lift the user input defined in a child component back to the parent component. I fixed it by passing a function ```writeNote``` which is sent from ```parent component``` to child ```noteForm```, and sets the parents class state directly form the child component user input. From this I was able to render a list of new notes on the page. 

At this point I wasn't certain how I would build a persistence on the page without using a database. I researched about the browser localStorage functionality stores informations locally on a user’s browser. I read about its limitations as the storage would only be browser specific. I finally decided it would suits the specification at the MVP level of this project. Every time a note was added, the array of notes stored in the app state would be update the localStorage Json storage. This was done by converting the array in a string using stringify function. When rendering each note I parsed the Json to extract each content from the array of notes. 

The components are tested using Jest and enzyme. I used shallow rendering with Jest snapshots. Shallow rendering renders only component itself without its children. This allowing me to create isolated tests for each components. 

I started to style the application using traditional css markup. I latter decided to use the Scss synthax, which would allow better modularity when styling the components. To do so, I had to change the webpack configuration making sure the scss file would be compiled back in css. After spending a considerable amount of time on updating the configuration, I was still unable to use the scss synthax. I therefore decided to keep the original css markup. As a conclusion, I would like to know more in the future about styling using react. 

## Future

