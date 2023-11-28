# Notes From This Project

**Notes**

- The React update to the element that is changing is an asynchronous event, this means that if we use something else (like a ```console.log()``` or ```alert```) these will appear first before the DOM updates made by React.
- When we need to reset some states, we must use the hook functionality itself to do it, because if we depend on the page refresh, we could cause problems by resetting everything in its totality and not only the states we want.
