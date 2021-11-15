import {useSelector , useDispatch} from 'react-redux';
import { IncNum , DecNum, IncrementByAmount } from '../Actions';
import { useState } from 'react';


/**
 * @description: Iteamcart function has Button and Paragraph so whenever you click on button the values get incremented
 * @returns JSX button and paragraph
 */
function IteamCart(){
    const myState= useSelector(state => state.ChangeNum)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(2);
    return(
        <>
         <p className="mypara">{myState}</p>
         <button className="btn btn-primary" onClick={()=> dispatch(IncNum())}> Press to Increment</button>
         <button className="btn btn-primary mx-5" onClick = {()=>{ dispatch(DecNum())}}> Press to Decrement</button> <br />
         <input type="text" name="" id="" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}  />  <button type="submit" className="btn btn-danger mx-4" onClick={() =>
            dispatch(IncrementByAmount(Number(incrementAmount)))
          }>Add Amount</button>
        </>
    );
}
export default IteamCart;
