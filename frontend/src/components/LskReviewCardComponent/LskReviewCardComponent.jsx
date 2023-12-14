import './LskReviewCardComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LskReviewsCardComponent = () => {
  return (
    <div className='flex RvCrdCont'>

        <div className='flex RvImgTxtCont'>
            <div className='RvImgCont'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
            </div>
            <div>
                <h3>Ronald Richards</h3>
            </div>
        </div>

        <div className='RvParaCont'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit quia placeat perferendis id amet natus, cumque molestias aliquid tempora.</p>
        </div>

        <div className='flex RvCrdIcnCont'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            {/* <FontAwesomeIcon icon={`${faRegular} ${faStar}`} /> */}
        </div>
    </div>
  )
}

export default LskReviewsCardComponent;