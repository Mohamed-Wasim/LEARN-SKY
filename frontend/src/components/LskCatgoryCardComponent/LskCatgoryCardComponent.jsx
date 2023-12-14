import './LskCatgoryCardComponent.scss';

const LskCatgoryCardComponent = ({styles,text}) => {
  const categoryCardStyle = {
    backgroundColor: styles.backgroundColor,
    width:'50px',
    height:'50px',
    borderRadius:'100px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  };
  return (
    <div className='flex ctCrdCont'>
      <div className='flex ctCrdIcnTxtCont'>
        <div style={categoryCardStyle}>
            Icon
        </div>
          <p>{text}</p>
      </div>
    </div>
  )
}

export default LskCatgoryCardComponent;