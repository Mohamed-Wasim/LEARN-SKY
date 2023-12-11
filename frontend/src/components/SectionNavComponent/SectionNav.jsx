import { NavLink } from 'react-router-dom';
import './SectionNav.css';

const SectionNav = () => {
  return (
    <div className='secCont'>
        <div className='flex'>
                <div>
                    <h1>Online Courses</h1>
                </div>

                <div className='flex'>
                    <h4>sort</h4>
                    <h4>explore</h4>
                    <h4>search...</h4>
                </div>
        </div>
        <div className='flex sectionNav'>
            <NavLink to='/CourseLibrary'>
                <h4>Course Library</h4>
            </NavLink>
            
            
            <NavLink to='/LiveClasses'>
                <h4>Live Classes</h4>
            </NavLink>
        </div>
    </div>
  )
}

export default SectionNav;