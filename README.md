# Armando Vallarino's Project

## Getting Started

Please serve to review my project I already performed for the acceptance process

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Please note that the input box is case sensitive.

## Questionnarie for acceptance of process

1. What is the difference between Component and PureComponent? Give an example where it might break my app.
Component. It renderise always that setState changes
PureComponent. It does an alanysis of values of props and states and, if values don't change, it will not renderize again.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?
ShouldComponentUpdate triggers only when props or state change, if context changes, it might not trigger ShouldComponentUpdate and it can cause a bad behave of the component

3. Describe 3 ways to pass information from a component to its PARENT.
A.- With a function that is received as a prop:

```javascript
// Patern component
function ParentComponent() {
  function handleDataFromChild(data) {
    console.log("Data received from child:", data);
  }

  return <ChildComponent onData={handleDataFromChild} />;
}
// Child Component
function ChildComponent({ onData }) {
  function sendDataToParent() {
    const data = "Informatin from child";
    onData(data);
  }
  return (
    <button onClick={sendDataToParent}>Send data to Parent</button>
  );
}
```

B.- With a context

```javascript
// Create a Context
const DataContext = React.createContext();
// Parent Component
function ParentComponent() {
  const [data, setData] = useState("");
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ChildComponent />
    </DataContext.Provider>
  );
}
// Child component
function ChildComponent() {
  const { data, setData } = useContext(DataContext);

  function sendDataToParent() {
    const newData = "Info from child";
    setData(newData);
  }

  return (
    <button onClick={sendDataToParent}>Enviar datos al padre</button>
  );
}
```

C.- With personalized events

```javascript
// Parent compoent
function ParentComponent() {
  function handleDataFromChild(event) {
    console.log("Data receibed from child:", event.detail);
  }
  return (
    <div>
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </div>
  );
}
// Child component
function ChildComponent() {
  function sendDataToParent() {
    const data = "Info from Child";
    const event = new CustomEvent("customEvent", { detail: data });
    window.dispatchEvent(event);
  }
  return (
    <button onClick={sendDataToParent}>Send Info to parent</button>
  );
}
// Listen to event in parent component
window.addEventListener("customEvent", handleDataFromChild);
```

4. Give 2 ways to prevent components from re-rendering.
shouldComponentUpdate in Class Components and useMemo in Functional Components

5. What is a fragment and why do we need it? Give an example where it might break my app.
Components only accept to return a single node, if you need more than one you can envelope in a fragment:

```html
<React.Fragment>
</React.Fragment>
```

Or on the simplify way: <></>

6. Give 3 examples of the HOC pattern.

 An High order component is a function that receives as a parameter another componets and returns another different, usually this functions stars with the word whit

- withAuth: A High Order Component that adds authentication logic into a component, verifying if user is authenticated before render the component
- withLoading: A High Order Component that shows a loading indicator until it waits another component finish the data load
- withErrorHandling: A High Order Component that handles th errors that may occur inside a component and send an error message if some error occurred.

7. What's the difference in handling exceptions in promises, callbacks and async…await?
Promises. they are handle using the catch method: 

```javascript
myPromise.then(() => {}).catch((error) => {})
```

With CallBAcks they are handle sending a special function for the error: 

```javascript
miCallBack((result) => {}, (error) => {})
```

Async...await uses the block try/ catch

8. How many arguments does setState take and why is it async.
Two, partialState and a callBack that executes when the state has been updated

9. List the steps needed to migrate a Class to Function Component.

- Copy the class logic (like state and methods) into functional component.
- Delete the class and convert all the methods in functional components independent or use hooks to handle the state
- Replace the references to this.state for the use of hooks like useState and useEffect.
- Replace the life cycle methods for hooks like useEffect and useLayoutEffect.
- Make sure that the functional component has the same functionality than the original class before delete the class completely.

10. List a few ways styles can be used with components.

- CSS in line: You can use the attribute style on the JSX elements to apply styles in line.
- Global Styles: You can import global CSS files on your app to apply styles to the entire level app.
- Module Styles: you can use CSS modules or libraries like styled-components to define stules of modular way an reusable inside the components.

11. How to render an HTML string coming from the server.
with dangerouslySetInnerHTML:

```html
<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
```
