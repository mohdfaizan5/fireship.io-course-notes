# Fireship.io🔥 React course notes

|Terminologies|Description|
|---|---|
|||
|props | Properties|
|<></> | Fragments |
| | |
* 

## Things to remember

* React is a UI library 
  * Difference between library and framework is libraries are like cool guys, they have no rules in life they take what every user syntax is, On other side Frameworks are like Military they have rules and follow them likewise they follow strict `conventions`, `syntax` and throw error when not followed
* Top Down pros:
  * Data (args) can only be passed from parent to child, its not possible to send data from child to parent (we have methods but just remember this for now.)
* Why do we use props? Are props immutable?
  * We use props to share data between components.
  * yes they are immutable, it means once data assigned cannot be changed later.

## Conditional Rendering:

> Note: We can't directly use if else as you know the working of how JSX places elements in dom:

1. Ternary Operator
```jsx
  {!messages ? 
    <div>
      No messages in inbox🔴
    </div>
    :
    <div>
      Messages in inbox📪
    </div>

  }

```

2. When you want to render only one thing based on a conditions, as if exists then just render it

```jsx
// When errors showup its been encountered.
{errors && <div>Errors encountered</div>}
```
> Note: be carefull while using this, because sometimes values like `empty strings` and 0 can be false
>> Instead use a ternary operator where second value is null
```jsx
{errors ? <div>Errors encountered</div> : null}
```


## Loops:

You can't directly use for for loops, instead you have to use maps.


1. Maps
```jsx
function App(){
  const details = [
    {
      name: "faizan",
      age: 20,
      isAdmin: true
    },
    {
      name: "Tahir",
      age: 19,
      isAdmin: false
    },

  ]

  return (
    <>
      {details.map(()=> )}
    </>
  )
}
```

> Note: Dont use `{}` when you're looping, Because when you use {} you have to return there something.
> So wrap it up with `()` instead.

You're not done yet, this above code with throw you an soft error (works but still throws you an error) that `key` should be provided.
> Note don't use index as your key, it servers the purpose but react can't use it for proper re-rendering when state is effected and performance is effected
>> Remember: Only wrapper element should have key, not necessary for children.

## Events:
In vanila js we used event handler and took them as reference but here we take more declared way.

We will use `on..` prefix keywork to add an listener
```js

<button onClick={()=> console.log("btn clicked")}></button>

// Passing functions
<button onClick={btnHandler}></button>

// Dont use `()` as it will invoke the function
<button onClick={btnHandler()}></button> ❌

// To pass any args and bypass above syntax👇
<button onClick={()=> btnHandler(123, "message")}></button> 

```

## State

What is state?
Data that changes thoughout the life cycle of the app

* JS state is immutable this means we cant just change state(data) and expect the UI to be updated.
*  hence for data that react provides a solution called useState `hook`

### useState()

```jsx
const App = () =>{
  const [data, setData] = useState("Default data")
  const [count, setCount] = useState(0)
  //      ☝        ☝          ☝
  //   variable,  method    This returns a array that is destructed.
}
```

And whenever it(state) changes, react will automatically change the component that is depend on it.
> We can only update/change the value from the destructed method (setCount)

> Note: But when you're working with objects or arrays in state, when you take the old approach the data is overwritten, so we have to use the spread syntax to first add the old value and add our new value.
>
```jsx
const App = () =>{
  const [studentDetails, setStudentDetails] = useState([
    {
      name: "faizan",
      gpa: 8
    },
    {
      name: "Jimmy",
      gpa: 9
    },
  ])

  // to add this,
  const newStudent = {
      name: "Della",
      gpa: 7.6
    },
  

  setStudentDetails({...studentDetails, newStudent})
  // Here first the copy of old student details is added then along with you add new student.
}
```

## Effects:

Every component in react have a lifecycle you can tap into.

### useEffect()
Its a hook that is used to access the lifecycle of a component
* mount -> Whenever function is executed the code within the hook gets called
* update -> We have a dependency array that is responsible for the whole hook to execute again whenever state changes in dependency variables.
* demount -> This is what to do, when component is destroyed [not handly with this /doubt]


```jsx
// Syntax
useEffect(function, dependencyArray)
useEffect(()=> (), [])

// When array is empty then it runs only when data is initialized(in our case page load)


useEffect(()=> {
  console.log("page loaded now")

  // When you return function-> then this code gets executed when destroyed /doubt
  return ()=> console.log("Destroyed!!")
}, [count])
// When ever data in dependency array elements changes, the first arg function reruns.


```



## Context Api
Share react data from anywhere in the component tree










## Js learing:

1. In js functions are first class objects, which means they can be passed around to other components










## Doubts:

- [ ] Learn more about truthy and falsy values.
- [ ] ' Dont use `()` as it will invoke the function' meaning of invoke?