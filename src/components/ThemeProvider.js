import { useState } from "react";

const lightTheme = {
    button: '#0079FF',
    buttonHover: '#60ABFF',
    carret: '#0079FF',
    body2: '#697C9A',
    toggle: '#4B6A9B',
    toggleHover: '#222731;',
    font: '#2B3442',
    body: '#F6F8FF',
    secondary: '#FEFEFE',
    boxShadow: '  0px 16px 30px -10px rgba(70, 96, 187, 0.2)',
};

const darkTheme = {
    button: '#0079FF',
    carret: '#0079FF',
    buttonHover: '#60ABFF',
    font: '#ffffff',
    toggle: '#ffffff',
    toggleHover: '#90A4D4;',
    body2: '#ffffff',
    body: '#141D2F',
    secondary: '#1E2A47',
    extra: '#A9A9A9',
};



export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState (darkTheme)
    const [isDark, setIsDark] = useState(true)

    function changeTheme(){
        if(isDark){
            setTheme(lightTheme)
            setIsDark(false)
        }else{
            setTheme(darkTheme)
            setIsDark(true)
        }
    }

    function convert(){
        const newTheme = {}
        Object.keys(theme).forEach((key)=>{
            const value = theme[key]
            const newKey= `--${key}`
            newTheme[newKey]= value
        })
        return newTheme
    }

    return (
        <div style={convert()}>
            {children(changeTheme,isDark)}

        </div>
    )
}