
import {useEffect} from "react";
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
function App() {
  
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="App">
          
    </div>
  );
}

export default App;
