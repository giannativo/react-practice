import { Counter } from "./examples/UseState";
import { UserForm, NameList } from "./examples/UseReducer";
import { PracticeUseMemo } from "./examples/UseMemo";
import { PracticeUseCallback } from "./examples/UseCallback";
import { UseEffectPractice } from "./examples/UseEffect";
import { PracticeUseRef } from "./examples/UseRef";
import { Pokemon } from "./examples/Pokemon";


function App() {
  return (
    <div>
      <PracticeUseMemo/>
      <PracticeUseCallback/>
      <Counter/>
      <UserForm/>
      <NameList/>
      <UseEffectPractice/>
      <PracticeUseRef/>
      <Pokemon/>
    </div>
  )
}
export default App
