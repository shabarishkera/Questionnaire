import { React, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import QnBox from './QnBox'
import { context, Store } from './Store'

export default function Questions() {
  const [show, setshow] = useState(true)
  const handleanswer = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Create an array to store the radio button values
    const radioButtonValues = [];
    
    // Iterate through the radio buttons and get their values
    radioButtons.forEach((radioButton) => {
      if(radioButton.checked)
      radioButtonValues.push({
        name: radioButton.name, // Radio button name
        value: radioButton.value, // Radio button value
        checked: radioButton.checked, // Whether it's checked or not
      });
    });
    
    // Log the radio button values to the console
    alert("you answered "+radioButtonValues.length)
     

  }
  const nav = useNavigate();
  const [qns, setqns] = useState([]);
  const p = useLocation();
  const { ans_no, setans_no } = useContext(context);
  const handlesubmit = () => {
    
    if (show)
      setshow(false);
    else
      setshow(true)



  }
  useEffect(() => {

    setqns(p.state.res);


  }, [])


  return (
    <>

      <div className='container '>
      <div className="container text-center py-6">
        <div className="row">
            <div className="col-lg-6 col-xl-5 mx-auto">
                <div className="lc-block mb-3">
                    <img className="img-fluid wp-image-1892" src="https://livecanvas.com/media/logos/ipsum/logoipsum-logo-35.svg" width="" height="39" srcSet="" sizes="" alt=""/>
                </div>
                <div className="lc-block mb-3">
                    <div editable="rich">
                        <h1>Boost Your Brain</h1>
                    </div>
                </div>
                <div className="lc-block mb-5">
                    <div editable="rich">
                        <p className="lead">Answer the below questions and click on  'show results'</p>

                    </div>
                </div>
                <div className="lc-block"><a className="btn btn-danger btn-lg" href="#" role="button">All the Best</a>
                </div>
            </div>

        </div>

    </div>

        {qns.map((item, index) => {
          return (
            <div className="col-md" key={index}>
              <QnBox index={index} show={show} obj={item} ans_no={ans_no} setans_no={setans_no} />

            </div>
          )
        })}

        <button className='btn btn-primary h4 submit-btn my-5' onClick={handlesubmit}>{show ? 'show answer' : 'hide answers'}</button>
        <button className='btn btn-primary h4 submit-btn my-5' onClick={handleanswer}>show results</button>
      </div>
    </>
  )
}
