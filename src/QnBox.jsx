import React, { useEffect, useState } from 'react';

function QnBox(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isselected,setselected]=useState(false)
const [options,setoptions]=useState([])
  const handleOptionChange = (e) => {
    if(!isselected)
    {setselected(true)
      props.setans_no(props.ans_no+1)}
    setSelectedOption(e.target.value);
    console.log(props.ans_no)
  };
  useEffect(()=>{

    var temp=[];
    temp.push(props.obj.correct_answer);
    temp.push(props.obj.incorrect_answers[1]);
    temp.push(props.obj.incorrect_answers[2]);
temp.push(props.obj.incorrect_answers[0]);
    temp=temp.sort( ()=>Math.random()-0.5 );
    setoptions(temp);

  },[])


  return (
    <div className='qn-box rounded-2 shadow my-5'>
      <h2><span className='text-primary'>{props.index+1}</span>.{props.obj.question}</h2>
      <label>
        <input
          type="radio"
          value={options[0]}
          checked={selectedOption === options[0]}
          onChange={handleOptionChange}
        />
        {options[0]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[1]}
          checked={selectedOption === options[1]}
          onChange={handleOptionChange}
        />
        {options[1]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[2]}
          checked={selectedOption === options[2]}
          onChange={handleOptionChange}
        />
       {options[2]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[3]}
          checked={selectedOption === options[3]}
          onChange={handleOptionChange}
        />
        {options[3]}
      </label>
      <div  className='bg-light text-success rounded-2 m-3 text-center h3 '>
        <p className={props.show?'hidden':''}>{props.obj.correct_answer}</p>
      </div>
    </div>
  );
}

export default QnBox;
