---
title: DOM Events - Ponder
---


- - -

## Preparation

This activity will walk us through building a simple To-do application that will allow you to add a task, mark a task as completed, and remove a task. It is recommended to review [Event Driven Programmming](../prepare1) before you start.

You will need your editor open to create a couple of new files for the following code:

### html

```html
<!-- events.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Events practice: ToDos</title>
    <style>
      .todos {
        width: 300px;
      }
      .todos > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid;
        padding: 0.5em;
      }
      .todos p {
        margin: 0;
      }
      .todos span {
        cursor: pointer;
      }
      .strike {
        text-decoration: line-through;
        color: gray;
      }
    </style>
  </head>
  <body>
    <h1>ToDos</h1>
    <section>
      <label for="todo">Enter Task</label>
      <input name="todo" id="todo" />
      <button id="submitTask">Enter</button>
    </section>
    <ul id="todoList" class="todos"></ul>
    <script src="events.js"></script>
  </body>
</html>
```

### Javascript

```javascript
// events.js

function newTask() {
  // get the list element from the DOM
  // get the value entered into the #todo input
  // render out the list 
  istElement.innerHTML += `
    <li> ${task}
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`
}

function manageTasks(e) {
  // using the event find the li element closest to what they clicked
  const parent = e.target.closest("li");
    // did they click the delete or complete icon?
    if (e.target.getAttribute('data-function') === "delete") {
      parent.remove();
    }
    if (e.target.getAttribute('data-function') === "complete") {
    parent.classList.toggle('strike');
    }
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
```

These activities will be most effective if you TRY them first before you look at the solution. And after you do look at the solution...DO NOT copy and paste the code. Read through it, try to understand what it is doing...then go fix your code.

## Activity 1

There are 2 functions to be written, and some events to listen for to complete this simple Todo list application. Begin by reviewing the code you were given. Pay attention to the comments!  Also don't forget to check for errors after each step!

1. Start with the `newTask` function. Get the value entered in the '#todo' input using the .value property. Then that task is rendered onto the page using the given template literal. 
   ```javascript
   `<li> ${task}
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
   ```
2. After completing that attach an event listener to the '#submitTask' button that will call the `newTask` function when it is clicked.
3. After making sure that it is working, complete the `manageTasks` function next. When someone clicks the ❎ it should call the `removeTask()` function. If they click the ✅ then the `completeTask()` should be called.

<div class="callout">

One way to approach this would be to attach a listener to each button for each task. But if we up with many tasks that is a lot of listeners to keep track of. Instead we can take advantage of [Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation).

If we click on one of the icons the event will 'bubble' up to the list item and look for an event listener there. It will then bubble up to the UL and look for a listener there...so we could simply attach one listener to the parent UL ('#todoList') to catch any click in our list!

One problem though...how do we know which button on which task was clicked? `event.currentTarget` always contains a reference to the element the listener is attached to. `event.target` always references the element that triggered the event! (the element clicked on in this case)

If you look at the HTML you were provided for a task you will see `data-action="delete"` on the delete icon. This is a custom HTML attribute. The `data-` is significant, but the `action` could have been anything we wanted. We can get the attribute from the element that was clicked and compare it to delete or complete.

 </div>

<details>
<summary>Solution 1</summary>

```javascript
function newTask() {
  // get the list element
    const listElement = document.querySelector('#todoList');
  // get the value entered into the #todo input
    const task = document.querySelector('#todo').value;
  // render out the list
  listElement.innerHTML += `
    <li> ${task}
    <div>
    <span data-function="delete">❎</span>
    <span data-function="complete">✅</span>
    </div>
    </li>`;
}

function manageTasks(e) {
    console.log(e);
  // did they click the delete or complete icon?
  const parent = e.target.closest("li");
  if (e.target.getAttribute("data-function") === "delete") {
    parent.remove();
  }
  if (e.target.getAttribute("data-function") === "complete") {
    parent.classList.toggle("strike");
  }
}

// Add your event listeners here for submit button and the to do list
document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);
```

</details>
