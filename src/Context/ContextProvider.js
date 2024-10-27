import { useContext , createContext , useState , useReducer ,useEffect } from "react";
import { reducer } from "./reducer";
const initialState = {
    user:null,
    isLogin:false,
    leaderBoard:[],
    userhistory:[],
    error:null,

}
const  Context =  createContext(initialState)

export const  useValue = ()=>{
    return  useContext(Context)
}

const ContextProvider = ({children}) => {

    const [state , dispatch] =  useReducer(reducer , initialState)

    useEffect(()=>{
        const currentuser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentuser){
            dispatch({type:'UPDATEUSER' , payload:currentuser});
        }
    } , [])
  
  return (
     <Context.Provider value={{state , dispatch}}>
         {children}
     </Context.Provider>
  )
}

export default ContextProvider