/*
TO DO APP

1. EASY: First write out the function that will add on to the existing list from the users input.
2. EASY: Create a button at the bottom of the list to clear out the whole list.
3. HARD: With each item that is added, also add a delete button. NOTE: need a running count to keep track of which id element to delete.
4. NIGHTMARE: Using the running count, can you figure out a way to edit the task? NOTE: need to add an edit button
*/

// ***PSEUDOCODE FOR NIGHTMARE MODE***

//create counter

//add task function
  //assign task to variable
  //create html div
  //assign li id
  //update li innerhtml with task variable
  //append li to ul  
  //update counter
  //clear entry field

//edit task function
  //define element number to be editd
  //access li element in the dom based on the toEdit value
  //define changes from element
  //update innerHTML with changes
  //clear the form fields
  
//delete task function
  //define element number to be deleted
  //access li element in the dom based on the toDelete value
  //update css to strikethrough text
  //clear form fields
    
//clear all function
  //update taskCol to its original state
  //reset counter