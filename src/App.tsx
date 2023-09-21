import { Counter } from "./examples/UseState";
import { UserForm, NameList } from "./examples/UseReducer";
import { PracticeUseMemo } from "./examples/UseMemo";
import { PracticeUseCallback } from "./examples/UseCallback";


function App() {
  return (
    <div>
      <PracticeUseMemo/>
      <PracticeUseCallback/>
      <Counter/>
      <UserForm/>
      <NameList/>
    </div>
  )
}
export default App
