import { useState } from 'react'

export function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

export function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
      <div className='App'>
        <button
          onClick={addOne}
        >Count = {count}</button>
      </div>
  )
}