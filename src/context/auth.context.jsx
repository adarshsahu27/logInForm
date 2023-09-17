import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props)=>{
    const {children} = props;
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true);
            // navigate("/home");
        }
    },[])
    const logOut = ()=>{
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/");
    }
    return <AuthContext.Provider value = {{isAuthenticated,setIsAuthenticated,logOut}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext