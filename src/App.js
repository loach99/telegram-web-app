import {useEffect} from "react";
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
function App() {
  const {tg} = useTelegram();
  
  useEffect(() => {
    tg.ready();
}, [])

  return (
    <div className="App">
          
    </div>
  );
}

export default App;
