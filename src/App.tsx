import { Counter } from "./examples/UseState";
import { UserForm, NameList } from "./examples/UseReducer";
import { PracticeUseMemo } from "./examples/UseMemo";
import { PracticeUseCallback } from "./examples/UseCallback";
import { UseEffectPractice } from "./examples/UseEffect";


function App() {
  return (
    <div>
      <PracticeUseMemo/>
      <PracticeUseCallback/>
      <Counter/>
      <UserForm/>
      <NameList/>
      <UseEffectPractice/>
    </div>
  )
}
export default App
