import Button from "../Button/Button";
import {useTelegram} from "./hooks/useTelegram";
const Header = () => {
    const {tg, onClose}   = useTelegram();
    
    return (
        <div>
            <Button onClick={onClose}/>
            <span>
                {tg.initDataUnsafe?.user.username}
            </span>
        </div> 
        
        
    );
}
 
export default Header;