import React from 'react';
import CustomBox from './CoustomBox'; // Correct the import path
import { arr, hexColors } from './ListOfCategories'; // Correct the import path and add destructuring for arr and hexColors

export default function HomeScreen() {
  return (
    <>
      <div lc-helper="background" class="container-fluid py-5 mb-4 d-flex justify-content-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100')`,
    backgroundPosition: `center`,
backgroundSize:'cover',
backgroundRepeat:'no-repeat'}}>
        <div class="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12" style={{backdropFilter: 'blur(6px) saturate(102%)',
    
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: '12px',
    border: '1px solid rgba(209, 213, 219, 0.3)'}}>
            <div class="lc-block">
                <div editable="rich">
                    <h2 class="fw-bolder display-3">Questionire</h2>
                </div>
            </div>
            <div class="lc-block col-md-8">
                <div editable="rich">
                    <p class="lead">
                    </p>
                </div>
            </div>
            <div class="lc-block">
                <a class="btn btn-dark" href="#pick" role="button">Get Started</a>
            </div>
        </div>
    </div>
    <div class="container-fluid px-4 py-5 my-5 text-center">
        <div class="lc-block mb-4">
            <div editable="rich">
                <h2 class="display-2 fw-bold">Level up your <span class="text-primary">Knowledge</span></h2>
            </div>
        </div>
        <div class="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">

                <p class="lead">Anser 30 questions from topics of your choice</p>
            </div>
        </div>

        <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <a class="btn btn-primary btn-lg px-4 gap-3" href="#pick" role="button">Start Quiz  Now</a>
            <a class="btn btn-outline-secondary btn-lg px-4" href="#" role="button">Learn more</a>
        </div>
        <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
            <img class="img-fluid" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg" width="" height="783" srcset="" sizes="" alt=""/>
        </div>
    </div>
    <div class="py-5 bg-transparent text-center w-100">
        <h1  id='pick' editable="inline" class="display-1">Pick A topic </h1>
        <div editable="rich">
            <p class="lead"></p>
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
    </>
  );
}
