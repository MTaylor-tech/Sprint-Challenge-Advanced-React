- [x] Why would you use class component over function components (removing hooks from the question)?

Class components manage their own state, and they can easily be written to extend other class components, allowing for more reusable code. (Also, the lifecycle methods are automatically part of a class component.)

- [x] Name three lifecycle methods and their purposes.

componentDidMount() //runs when the component is first rendered to the DOM; used for setting up any actions that will recur throughout the life of the component, for making API calls, and for loading initial values in state

componentWillUnmount() //runs when the component is going to be removed from the DOM; used for garbage collection and clearing out timers and actions

componentDidUpdate() //called after any updating occurs; allows you to compare the changes to the previous values and to act on new values

- [x] What is the purpose of a custom hook?

Custom hooks are wrapper functions that encompass an existing hook but add some functionality to it; for instance, a useLocalStorage() hook might extend useState() and add the functionality of storing the values into local storage.

- [x] Why is it important to test our apps?

It is important to find bugs and unexpected behaviors and fix them before end-users come across them. Automated testing can save time and effort when compared to manual testing of a web-app.
