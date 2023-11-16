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
