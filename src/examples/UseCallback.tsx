import { SortedList } from "./UseMemo";
import { useCallback, useState } from "react";


export function PracticeUseCallback() {
  const [names] = useState(["John", "Paul", "George", "Ringo"]);
  const sortFunc = useCallback((a: any, b: any) => a.localeCompare(b) * -1, []);

  return (
    <div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc}/>
    </div>
  )
}
