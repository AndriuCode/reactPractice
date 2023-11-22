# Notes From This First Project

**Basic structure to use React**

```.jsx
// Import the main React packages
import React from 'react'
import ReactDOM from 'react-dom/client'

// Talk to the DOM and get the root element where we'll render all the jsx code
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        {/* Code */}
    </React.Fragment>
)
```

**Create a component**

```.jsx
// All components must be named with PascalCase 
// so that React knows they are components.
const ComponentName = () => {
    return (
        {/* Code */}
    )
}
```

**Notes**

- Components are an element factory and elements are what React renders.
- The properties of an element must be immutable, i.e., we cannot edit them after passing them to the component.
- We can use the ``children`` element to render the most important things in our project.
- React to make a project more dynamic, uses a concept called "**Virtual DOM**" and it is something like saving all the rendered elements and then, after an event happens, compare the saved elements with the new ones and only change the specific element that had a change.
