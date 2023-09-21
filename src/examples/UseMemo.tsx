import { useMemo, useState } from "react";

export function SortedList({list, sortFunc}: any) {
  const sortedList = useMemo(() => [...list].sort(sortFunc), [list, sortFunc]);
  return <div>{sortedList.join(", ")}</div>;
}

export function PracticeUseMemo() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers]);
  return (
      <div>Total: {total}</div>
  )
}
