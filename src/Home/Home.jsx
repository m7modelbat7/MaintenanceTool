import { useState } from "react";



export default function Home() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Mahmoud Elbath");

  function increment() {
    setCount(count + 1);
  } 
  function decrement() {
    setCount(count - 1);
  } 
  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h1 className="bg-danger">Welcome to the Home Page!</h1>
      <h2>My Name is {name}</h2>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
      <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
      <span className="badge bg-success">Current Count: {count}</span>
      <br />  
      <label className="form-label">Change Name</label>
      <input className="form-control" type="text" value={name} onChange={changeName} />
    </div>
  );
}
