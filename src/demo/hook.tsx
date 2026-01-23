//useState
import { useState } from 'react'; 
function Counter() { 
const [count, setCount] = useState(0); 
return ( 
<> 
<p>Count: {count}</p> 
<button onClick={() => setCount(count + 1)}>Increment</button> 
</> 
); 
} 
useState returns a pair: 
count → current value 
setCount → function to update it


//useEffect Hook 
// To handle side effects in functional components 
//(/API calls, subscriptions, timers, DOM updates) 

useEffect(() => { 
console.log("Component mounted"); 
}, []); 
Example – Run on Dependency Change: 
useEffect(() => { 
console.log("Count changed!"); 
}, [count]); 
Cleanup Example: 
useEffect(() => { 
const timer = setInterval(() => { 
console.log("Tick..."); 
}, 1000); 
return () => clearInterval(timer); // cleanup 
}, []); 

// useRef Hook 
//To store mutable values that do not trigger re-renders and to directly reference DOM elements.  

const countRef = useRef(0); 
countRef.current += 1; 
Example 2 – Accessing DOM Element: 
const inputRef = useRef(); 
function focusInput() { 
inputRef.current.focus(); 
} 
return ( 
<> 
<input ref={inputRef} type="text" /> 
<button onClick={focusInput}>Focus</button> 
</> 
); 

// useContext Hook (Intro only) 
// To access global state/data using React Context.

const value = useContext(MyContext); 
(More deeply covered in Module 9: State Management) 

// Custom Hooks (Intro) 
//You can create your own hooks using use prefix to reuse logic. 

function useTitle(title) { 
useEffect(() => { 
document.title = title; 
}, [title]); 
} 
