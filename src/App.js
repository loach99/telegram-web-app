
import {useEffect} from "react";
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
function App() {
  
  const {tg, onClose} = useTelegram();

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="App">
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
