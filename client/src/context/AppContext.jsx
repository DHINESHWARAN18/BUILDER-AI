import { useContext, useState } from "react";
import { createContext } from "react";


const AppContext = createContext(undefined);

export function AppContextProvider({children}){

    //auth states
    const [user , setUser] = useState(null)
    const [loadingUser,setLoadingUser] = useState(true)


    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error("useAppContext must be used within an AppContextProvider");
    }

    return context;
}