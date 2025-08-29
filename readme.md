
 Answering  the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Difference between  getElementById,getElementsByClassName, querySelector, querySelectorAll is


* getElementById --- Finds one element by its unique ID. Returns a single element.

* getElementsByClassName --- Finds all elements with a given class. Returns a live HTMLCollection (updates if DOM changes).

* querySelector --- Finds the first element matching any CSS selector. Very flexible.

* querySelectorAll --- Finds all elements matching a CSS selector. Returns a static NodeList (doesn’t update automatically).



2. How do you create and insert a new element into the DOM?

Ans: Here we can  create and insert a new element into the DOM

Using document.createElement("") to make an element.
Then set content or attributes like .innerText, .setAttribute

Insert into the DOM using methods like --

Insert it into the DOM using appendChild, append, prepend, or insertBefore.


3. What is Event Bubbling and how does it work?

Ans: Event bubbling are when an event happens on a child element (like a button), it first runs the handler on that element.

Then it bubbles up to its parent, then grandparent, all the way up to document.



4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is  attach a single event listener on a parent element instead of on many child elements.

* The parent can catch child events because of bubbling.

* It improves performance and works for dynamically added elements.

* its useful because it has better performance like fewer listeners.


5. What is the difference between preventDefault() and stopPropagation() methods?


Ans : Here is the difference between preventDefauldt and stopPropagation ------

* preventDefault ---> Stops the default browser action like stop a form from submitting and  stop a link from navigating .

* stopPropagation ---> Stops the event from bubbling up  Stops the event from bubbling up to parent elements.
