
export const  reducer =( state , action)=>{

    switch(action.type){
        case "OPEN_LOGIN":
            return{...state , isLogin:true}
        case "CLOSE_LOGIN":
            return{...state , isLogin:false}
        case "UPDATE_USER":
            return{...state , user:action.payload}
        case "LEADERBOARD_LIST":
            return{
                ...state , leaderBoard:action.payload
            }
        case "USER_HISTORY":
            return{
                ...state , userHistory:action.payload
            }
        // case 'USERLIST_UPDATE':
        //     return{
        //         ...state , leaderBoard:action.payload
        //     }
        default:
            return state;
    }

}