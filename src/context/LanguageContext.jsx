import { createContext, useState } from "react";

export const LanguageContext = createContext();

const startingState = "en";

export function LanguageContextProvider({ children }) {

    const [language, setLanguage] = useState(startingState);

    function handleSetLanguage(lang) {
        setLanguage(lang);
    }

    const languageContext = {
        language,
        handleSetLanguage
    }

    return <LanguageContext.Provider value={languageContext}>{children}</LanguageContext.Provider>

}