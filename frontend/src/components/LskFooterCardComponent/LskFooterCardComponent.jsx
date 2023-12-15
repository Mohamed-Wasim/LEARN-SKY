import './LskFooterCardComponent.scss';

const LskFooterCardComponent = ({styles,text}) => {
    // const categoryCardStyle = {
    //     backgroundColor: styles.backgroundColor,
    //   };
  return (
    <div className='flex ft_cr_cont'>
        <div className='flex ft_ic_cont' 
        // style={categoryCardStyle}
        >
            <p>{}</p>
        </div>
        <div className='FtCrdTxtCont'>
            <h3>300</h3>
            <p>Instrution</p>
        </div>
    </div>
  )
}

export default LskFooterCardComponent;