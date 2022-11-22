const intialstate =
{
  login:{ id:1, Username:'admin',password:'Pass@123' }
}
    



const loginReducer = (state= intialstate,action ) => {
    switch (action.type){
        case 'LOGIN':
            return {
              login: action.payload
            };
        default:
            return state;    
    }
}
export default loginReducer;