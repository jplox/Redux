const intialstate = 0;
const ChangeNum = (state = intialstate, action)=>{
   switch (action.type) {
       case "INCREMENT": return state+1;
       case "DECREMENT": if(state<=0) {
           alert('Negatives are not allowed')
           return state=0;
       }else{
           return state-1;   
       }
       case "IncrementByAmount": return state + action.payload;

       default:
           return state;

   }
}
export default ChangeNum;