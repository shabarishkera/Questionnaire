import React from 'react';

const CustomBox = ({title, color }) => {
  const boxStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    background: `linear-gradient(to bottom right, ${color}, #FFFFFF)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    margin:'10px'
  };

  return (
    <div style={boxStyle}>
      {title}
    </div>
  );
};

export default CustomBox;
