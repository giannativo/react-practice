import { useReducer } from "react";

export function UserForm() {
  const [state, dispatch] = useReducer((state: any, action: any) => ({...state, ...action}),
  {
    first: "",
    last: ""
  }
  )
  return (
    <div>
      <input type="text" value={state.first} onChange={(e) => {dispatch({ first: e.target.value })}} />
      <input type="text" value={state.last} onChange={(e) => {dispatch({ last: e.target.value })}} />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  )
}

export function NameList() {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name], name: "" };
    }
  },
  {
    names: [],
    name: ""
  }
  )
  return (
    <div className='App'>
      <div>
        {state.names.map((name: any, index: any) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <input type="text" value={state.name} onChange={
        (e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      }/>
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  )
}