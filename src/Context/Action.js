import axios from 'axios';

export const userRegister = ({ user }) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/v1/register', user);
        
        if (data) {
            dispatch({ type: "UPDATE_USER", payload: data });
        }
    } catch (error) {
        console.error('Registration Error:', error); 
        dispatch({ type: "ERROR", payload: error });
    }
};

export const userLogin = ({ username, password }) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/v1/login', { username, password });
        
        if (data) {
            dispatch({ type: "UPDATE_USER", payload: data });
        }
    } catch (error) {
        console.error('Login Error:', error); 
        dispatch({ type: "ERROR", payload: error });
    }
};

export const getUserHistory = ({ username }) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:7000/api/auth/v1/history/${username}`);
        
        if (data) {
            dispatch({ type: "USER_HISTORY", payload: data });
        }
    } catch (error) {
        console.error('Fetch User History Error:', error); 
        dispatch({ type: "ERROR", payload: error });
    }
};

export const  getAllUsers =()=> async(dispatch)=>{
    console.log("request  for  getAllusers")
    try{
         const {data} = await  axios.get('http://localhost:7000/api/user/v1/get-users');
         dispatch({type:'LEADERBOARD_LIST' , payload:data})
    }catch(error){
        console.error('Fetch User History Error:', error); 
        dispatch({ type: "ERROR", payload: error });
    }
}
