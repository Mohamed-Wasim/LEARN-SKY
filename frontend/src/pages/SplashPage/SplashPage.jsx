// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import Card from '../../components/CardComponent/Card';
import CourseCardComponent from '../../components/CourseCardComponent/CourseCardComponent';
import LskyButton from '../../components/LskyButton';
// import NavebarHeader from '../../components/NavbarHeader/NavbarHeader';
import SplashCardComponent from '../../components/SplashCardComponent/SplashCardComponent';
// import FooterCardComponent from '../../components/FooterCardComponent/FooterCardComponent';
// import ReviewsCardComponent from '../../components/ReviewsCardComponent/ReviewsCardComponent';
import Header from '../../components/headerComponent/header';
import './SplashPage.css';
import LskCatgoryCardComponent from '../../components/LskCatgoryCardComponent/LskCatgoryCardComponent';
import LskReviewsCardComponent from '../../components/LskReviewCardComponent/LskReviewCardComponent';
import LskFooterCardComponent from '../../components/LskFooterCardComponent/LskFooterCardComponent';
import LskSplashPageHeader from '../../components/LskSplashPageHeader/LskSplashPageHeader';
// import LksPopupComponent from '../../components/LksPopupComponent/LksPopupComponent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     // faFacebook 
//     faTwitter
// } from '@fortawesome/free-solid-svg-icons';

const SplashPage = () => {
    const count = [1,2,3,4,5,6];
    const footer = [1,2,3];
    const footer1 = [1,2,3,4];

    const ctgryData = [
        { styles: { backgroundColor: '#4F56F8'}, name: 'UI & UX' },
        { styles: { backgroundColor: '#EA833F'}, name: 'Development' },
        { styles: { backgroundColor: '#F45E52'}, name: 'Communication' },
        { styles: { backgroundColor: '#29DA82'}, name: 'Testing' },
        { styles: { backgroundColor: '#3D5CFF'}, name: 'Devops' },
        { styles: { backgroundColor: '#A170FF'}, name: 'Development' }
      ];

  return (
    <>
    {/* <Header/> */}
    {/* <NavebarHeader/> */}
    <LskSplashPageHeader/>
    <div className='sp_pg_cont'>
        <div className='flex sp_banner'>
            <div className='sp_banner_cntnt'>
                <h1>Teaching in the Internet age means <br/> 
                    we must teach tomorrow’s skills<br/>
                    <span className='spanClr'>today</span>
                </h1>
                <p>Provides you with the latest online learning system and material that help your</p>
                <div className='spCont'>
                    <div className='flex sp_bnr_cont'>
                    <div className='sp_bnr_Img'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banar-img" />
                    </div>
                    <div className='flex sp_bnr_btn'>
                        <LskyButton 
                        style={{
                            borderRadius :'100px'
                          }}
                        >Join as Organitation
                        </LskyButton>

                        <LskyButton
                        style={{
                            borderRadius :'100px'
                          }}
                        >Join as Student
                        </LskyButton>

                    </div>
                    <div className='sp_bnr_Img'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banar-img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='sp_bdy'>
            <div className='spOurCors sp_crs'>
                <h1>
                    Our Most <span className='spanClr'>Popular courses</span>
                </h1>
                <p className='spOurCrsPar'>
                    Let’s join our best classes with our famous instructor and institutes
                </p>
            </div>
            <div className='flex sp_dby_cntnt'>
                { count.map(()=>{
                  return <SplashCardComponent />
                })}
            </div>
        </div>
        <div className='sp_bdy'>
            <div className='flex spCategories'>
                <h1>
                Explore <span className='spanClr'>Top Categories</span>
                </h1>
                <p>Click on the categories and explore all courses</p>
            </div>
            <div className='flex sp_dby_cntnt'>
                {ctgryData.map((category, idx) => (
                    <LskCatgoryCardComponent 
                    key={idx} 
                    styles={category.styles} 
                    text={category.name} 
                    />
                ))}
            </div>
        </div>
        <div className='flex sp_bdy_abt'>
            <div className='sp_abt_img'>
                <div className='sp_abt_img_cont'>
                    <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
            </div>
            <div className='sp_bdy_abt_cont'>
                <h1>
                The number one factor in <span className='spanClr'>relevance drives out resistance.</span>
                </h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <LskyButton 
                    style={{
                        borderRadius :'100px'
                    }}
                    >Learn More
                </LskyButton>
            </div>
        </div>
        <div className='flex SpCrsCont'>
            <div className='sp_bdy_cont sp_tst_cont'>
                <h1>
                    Our Most <span className='spanClr'>Popular courses</span>
                </h1>
                <p>Let’s join our best classes with our famous instructor and institutes</p>
            </div>
            <div className='flex sp_dby_cntnt'>
                {/* { footer.map(()=>{
                    return <Card/>
                })} */}
               {footer.map(()=>{
                    return <LskReviewsCardComponent/>
                })}
            </div>
        </div>
    </div>
    <footer className='sp_ftr_cont'>
        <div className='flex sp_ftr_crdcont'>
            {footer1.map((category) => <LskFooterCardComponent
            // key={idx} 
            styles={category.styles} 
            // text={category.name} 
            />)}
        </div>
        <div className='sp_ftr_sec_cont'>
            <div className='flex sp_ftr_sec'>
            <div className='sp_ftr_sec1'>
                <h2>Ravvy Soft</h2>
                <p>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='sp_ftr_sec1'>
                <h3>Quick Link</h3>
                <div>
                    <div>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Course</p>
                        <p>Contact</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='sp_ftr_sec1'>
                <h3>Contact Us</h3>
                <div>
                    <div>
                        <p>(209) 555-0104</p>
                        <p>rivera@example.com</p>
                        <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </div>
                    <div></div>
                </div>
            </div>
            </div>
        </div>
        <div className='flex sp_ftr_ftr'>
            <div>
                <p>Copyright 2023 | All Rights Reserved</p>
            </div>
            <div className='flex'>
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                <p>Icon</p>
                <p>Icon</p>
                <p>Icon</p>
            </div>
        </div>
    </footer>
    {/* <LksPopupComponent/> */}
    </>
  )
}

export default SplashPage;