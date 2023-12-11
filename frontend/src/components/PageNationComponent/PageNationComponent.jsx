import './PageNationComponent.css'

const PageNationComponent = () => {
    const count = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='pgNatnCont flex'>
        <button>font</button>
        {count.map((vlu,len)=>{
            return (
            <div className='flex'>{len+1}</div>
            )
        })}
        <button>Back</button>
    </div>
  )
}

export default PageNationComponent;