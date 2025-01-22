1. JSX (JavaScript XML)
A syntax extension that allows mixing HTML with JavaScript.
Example:
jsx
Copy
Edit
const element = <h1>Hello, world!</h1>;
2. Components
Building blocks of a React application.
Types:
Functional Components:
jsx
Copy
Edit
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
Class Components:
jsx
Copy
Edit
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
3. Props (Properties)
Used to pass data from a parent to a child component.
Props are immutable.
Example:
jsx
Copy
Edit
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
4. State
A component's local data storage, used to track changes.
Example:
jsx
Copy
Edit
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
5. Lifecycle Methods
Special methods in class components for different phases:

Mounting: componentDidMount
Updating: componentDidUpdate
Unmounting: componentWillUnmount
In functional components, hooks like useEffect replace lifecycle methods.

jsx
Copy
Edit
useEffect(() => {
  console.log('Component rendered or updated');
  return () => {
    console.log('Cleanup on unmount');
  };
}, []);
6. Hooks
Functions that let you use React features without writing a class.
Common hooks:
useState: Manage state.
useEffect: Perform side effects.
useContext: Access context.
useReducer: Complex state logic.
7. Context API
Provides a way to pass data through the component tree without manually passing props.
Example:
jsx
Copy
Edit
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
8. Events
Handlers in React use camelCase (e.g., onClick, onSubmit).
Example:
jsx
Copy
Edit
function Button() {
  const handleClick = () => alert('Clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}
9. Conditional Rendering
Render components based on a condition.
Example:
jsx
Copy
Edit
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}
10. Lists and Keys
Use the key prop to uniquely identify elements.
Example:
jsx
Copy
Edit
const items = ['Apple', 'Banana', 'Cherry'];
const list = items.map((item, index) => <li key={index}>{item}</li>);
11. Fragments
Avoids adding extra DOM nodes.
Example:
jsx
Copy
Edit
return (
  <>
    <h1>Hello</h1>
    <p>Welcome to React.</p>
  </>
);
12. Refs
Access and manipulate DOM elements directly.
Example:
jsx
Copy
Edit
const inputRef = React.useRef(null);

function FocusInput() {
  const handleFocus = () => inputRef.current.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
13. Higher-Order Components (HOC)
A function that takes a component and returns a new component.
Example:
jsx
Copy
Edit
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Rendering', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
14. React Router
Library for routing in React applications.
Example:
jsx
Copy
Edit
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
15. State Management (Redux, Zustand, etc.)
Centralized state management for complex apps.
Example using Redux:
jsx
Copy
Edit
import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);