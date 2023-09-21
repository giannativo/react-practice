import { Counter } from "./examples/UseState";
import { UserForm, NameList } from "./examples/UseReducer";
import { SortedList, PracticeUseMemo } from "./examples/UseMemo";
import { useCallback, useState } from "react";


function App() {
  const [names] = useState(["John", "Paul", "George", "Ringo"]);
  const sortFunc = useCallback((a: any, b: any) => a.localeCompare(b) * -1, []);

  return (
    <div>
      <PracticeUseMemo/>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc}/>
      <Counter/>
      <UserForm/>
      <NameList/>
    </div>
  )
}
export default App
