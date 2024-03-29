# Redux Airport

We're going to build an application to track planes at an airport.

## Assignment Objectives

- Add redux to a new project
- Store information in the redux store using reducers
- Display information stored in redux in a React component

## Getting Started

`Fork`, `Clone`, and `npm install` to get started.

## Base Requirements

For the initial release we just need to know what airlines have planes at this airport.

Create a form to add airlines, and a table to show all the airlines that have been added.

### Tasks

x Add Redux to the project. 
  x Install the necessary dependencies. (`npm install redux@4 react-redux@7 redux-logger@3`)
  x The array of airlines should be stored inside the redux state.
x Add a form with one input for an airline name. 
  x When the user hits an `Add Airline`, button, add that new airline to the redux state.
x Add a table to display all the airlines at this airport.
x Create separate React components for both the form & table

## Stretch Goals

For the second release, we need to track the number of planes each airline has at this airport. Update the application to track and display this information.

### Tasks

x Add a second input to the form to input the number of planes the airline has at this airport.
  x Update the redux state to track both the airline name & plane count.
x Update the table to show the airline and plane count
