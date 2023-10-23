import React from 'react';
import CustomBox from './CoustomBox'; // Correct the import path
import { arr, hexColors } from './ListOfCategories'; // Correct the import path and add destructuring for arr and hexColors
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default function HomeScreen() {
  return (
    <>
      <div lc-helper="background" className="container-fluid py-5 mb-4 d-flex justify-content-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100')`,
    backgroundPosition: `center`,
backgroundSize:'cover',
backgroundRepeat:'no-repeat'}}>
        <div className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12" style={{backdropFilter: 'blur(6px) saturate(102%)',
    
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: '12px',
    border: '1px solid rgba(209, 213, 219, 0.3)'}}>
            <div className="lc-block">
                <div editable="rich">
                    <h2 className="fw-bolder display-3">Questionire</h2>
                </div>
            </div>
            <div className="lc-block col-md-8">
                <div editable="rich">
                    <p className="lead">
                    A React-based quiz application that allows users to answer 30 questions from a variety of categories using the Trivia API. Users can choose from 10+ categories to customize their quiz experience
                    </p>
                </div>
            </div>
            <div className="lc-block">
                <a className="btn btn-dark" href="#pick" role="button">Get Started</a>
            </div>
        </div>
    </div>





    <div className="row mb-4 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="lc-block text-center">
                    <img className="img-fluid w-50" src="https://cdn.livecanvas.com/media/svg/isometric/app_development_SVG.svg" srcset="" sizes="" width="" height=""/>
                </div>
            </div>
            <div className="col-lg-6 p-lg-6">
                <div className="lc-block mb-5">
                    <div editable="rich">

                        <h2 className="display-6 fw-bold"> What You Get :</h2>

                        <p className="lead"><br/> how you will be benifited from our app</p>
                    </div>
                </div>
                
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                            
                        </div>
                        
  
                        <div className="ms-3 align-self-center" editable="rich">
                            <p>Interactive Learning</p>
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            <p>Instant Feedback</p>
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                           
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            <p>Answer 30 questions from the selected category.</p>
                        </div>
                    </div>
                </div>
                <div className="lc-block">
                    <div className="d-inline-flex">
                        <div>
                            
                        </div>

                        <div className="ms-3 align-self-center" editable="rich">
                            <p>Assessment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    <div className="container-fluid px-4 py-5 my-5 text-center">
        <div className="lc-block mb-4">
            <div editable="rich">
                <h2 className="display-2 fw-bold">Level up your <span className="text-primary">Knowledge</span></h2>
            </div>
        </div>
        <div className="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">

                <p className="lead">Anser 30 questions from topics of your choice</p>
            </div>
        </div>

        <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <a className="btn btn-primary btn-lg px-4 gap-3" href="#pick" role="button">Start Quiz  Now</a>
            <Link className="btn btn-outline-secondary btn-lg px-4" to="/learnmore" role="button">Learn more</Link>
        </div>
        <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
            <img className="img-fluid" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg" width="" height="783" srcset="" sizes="" alt=""/>
        </div>
    </div>
    <div className="py-5 bg-transparent text-center w-100">
        <h1  id='pick' editable="inline" className="display-1">Pick A topic </h1>
        <div editable="rich">
            <p className="lead"></p>
        </div>
    </div>

    <div  className="container  justify-content-center align-center">
      <div className="row  justify-content-center ">
        {arr.map((item, index) => {
            return(
          <div className="col-md" key={index}>
            <CustomBox title={item} color={hexColors[Math.floor(Math.random() * 25)]} />
          </div>
            )
})}
      </div>
    </div>
    <Footer/>
    </>
  );
}
