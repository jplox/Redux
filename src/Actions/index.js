

const IncNum = ()=>{
    return{
        type:"INCREMENT"
    }
}

const DecNum = ()=>{
    return{
        type:"DECREMENT"
    }
}

const IncrementByAmount = (num) => {
  return{
      type:"IncrementByAmount",
      payload:num,
  }   
}
export {IncNum , DecNum , IncrementByAmount};