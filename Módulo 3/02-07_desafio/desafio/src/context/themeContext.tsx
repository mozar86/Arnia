import React, { useContext, useState } from "react"

interface ThemeContextType {
    themePage: boolean
    configThemePage: () => void
}

const ThemeContext = React.createContext<ThemeContextType>({
    themePage: false,
    configThemePage: () => {}
})

export function ThemeContextProvider ({children}: any) {
    const [themePage, setThemePage] = useState<boolean>(false)

    const configThemePage = () => {
        setThemePage(!themePage)
    }

    return (
        <ThemeContext.Provider value={{themePage, configThemePage}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)