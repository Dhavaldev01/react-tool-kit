
import { createContext, useState} from 'react';


// create the context
export const GloabalContext = createContext(null);

/// create the global that receipt component as a children

function GloabalState({children}){

    const [theme, setTheme] = useState('light');

    function handleChangeThemeOnButtonCLick () {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return <GloabalContext.Provider value={{theme , handleChangeThemeOnButtonCLick}}>{children}</GloabalContext.Provider>
};

export default GloabalState;