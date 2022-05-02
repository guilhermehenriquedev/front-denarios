import { createContext, useState, useEffect } from "react";
import { LightTheme, DarkTheme } from '../components/Temas'


export const ThemeContext = createContext({});

export default function ThemeProvider({children}) {

    const [checkTheme, setCheckThemeColor] = useState(true)
    const [themeColor, setThemeColor] = useState(LightTheme)
    
    function changeThemeColor(){
        if(themeColor == LightTheme){
            setThemeColor(DarkTheme)  
        }else{
            setThemeColor(LightTheme)  
        }
    }

    return (
        <ThemeContext.Provider value={{themeColor, changeThemeColor, checkTheme }}>
                {children}
        </ThemeContext.Provider>
    );
}

