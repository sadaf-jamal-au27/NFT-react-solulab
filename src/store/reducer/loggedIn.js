export default function loggedIn(state={login:false},action){
   switch (action.type) {
       case 'login':
           return {login:true};
   
       case 'falseLogin':
           return {login:false};
   
       default:
           return state;
   }
}