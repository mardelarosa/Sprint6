import { NormalizeModernGS } from "./components/GlobalStyles/NormalizeModernGStyled";
import { useState } from "react";
import { story } from "./data/story";
import { Escena } from "./components/Escena/Escena";
import { Buttons } from "./components/Buttons/Buttons";



function App() {

  const [activeText, setActiveText] = useState(1);
  const increment = () =>
    activeText !== story.length && setActiveText((activeText) => activeText + 1);
  const decrement = () =>
    activeText !== 1 && setActiveText((activeText) => activeText - 1);


  return (
    <div className="App">
      <NormalizeModernGS />         
            
          <Buttons increment={increment} decrement={decrement} />
          <Escena story={story} activeText={activeText} />
        
    </div>
  );
}
export default App;
