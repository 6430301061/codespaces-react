import {useState} from 'react'
export default function Counter(){
    const [count,setCount] = useState(0)
    const [value,setValue] = useState("type here");
    return (
            <>
                <h1>what is your name</h1>
                <input type ="text"
                value ={value}
                onChange={(e)=>{setValue(e.target.value)}}
                />
                <h3>your type {value.length}</h3>
                <br></br>
                <button onClick={()=> setCount(count+1)}>Click me!</button>
                <button onClick={()=> setCount(0)}>Reset!</button>
                <p>You clicked {count} times</p>
            </>
    );
}