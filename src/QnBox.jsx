import React, { useState } from 'react';

function QnBox(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  console.log(props.obj.question)
  var options=[];
  options.push(props.obj.correct_answer);
  options.push(props.obj.incorrect_answers[1]);
  options.push(props.obj.incorrect_answers[2]);
  options.push(props.obj.incorrect_answers[0]);
  options=options.sort( ()=>Math.random()-0.5 );
  console.log(options)
  return (
    <div className='qn-box'>
      <h2>{props.obj.question}</h2>
      <label>
        <input
          type="radio"
          value={options[0]}
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        {options[0]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[1]}
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        {options[1]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[2]}
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
       {options[2]}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={options[3]}
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        {options[3]}
      </label>
    </div>
  );
}

export default QnBox;
