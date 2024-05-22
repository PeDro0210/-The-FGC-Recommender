import React from 'react';

const LoadingCircle = () => {
  const style = {
    display: 'inline-block',
    width: '25vw',
    height: '25vw',
    border: '5vw solid #f3f3f3', // Light grey border
    borderTop: '5vw solid #3498db', // Blue color border
    borderRadius: '50%',
    animation: 'spin 2s linear infinite'
  };

  return (
    <div style={style}></div>
  );
};

// Adding keyframes for the spin animation
const css = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Adding style tag to head
document.head.appendChild(document.createElement("style")).textContent = css;

export default LoadingCircle;