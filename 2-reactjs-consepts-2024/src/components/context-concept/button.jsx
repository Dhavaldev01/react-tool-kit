import { useContext } from "react";
import { GloabalContext } from "../../context";


function ContextButtonCoponent(){

    const {handleChangeThemeOnButtonCLick } = useContext(GloabalContext);

    return <button onClick={handleChangeThemeOnButtonCLick}>Change Theme</button>
}
 
export default ContextButtonCoponent;