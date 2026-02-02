import React from 'react'

function SvgImg() {
  return (
    <div>
         <svg
      width="300"
      height="200"
      style={{ border: "1px solid black" }}
    >
      {/* Shapes will go here */}
      <circle cx="100" cy="100" r="50" fill="skyblue" stroke="red" strokeWidth="6" />
    <rect x="180" y="50" width="90" height="100" fill="orange" stroke="red" strokeWidth="3" />
    <polygon points="50,150 150,150 100,50" fill="lightgreen" stroke="green" strokeWidth="3" />
      <text x="20" y="190" fill="black" fontSize="18">My SVG Drawing</text>
    </svg>
 
      
    </div>
  )
}

export default SvgImg
