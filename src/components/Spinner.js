import  Loading from "./Loading.gif";
const Spinner =()=> {

    return (
      <div className='text-center'>
        <img src={Loading} alt="spinner" width={80} height={80}/>
      </div>
    )
  }

export default Spinner;