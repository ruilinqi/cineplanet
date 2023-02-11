import React, { useState,useEffect } from "react";

export default function BackToTopButton() {

  const [backToTopButton, setBackToTopButton] = useState(false)
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 1200) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return(
    <div>
      {backToTopButton && (
        <button 
        style={{position: 'fixed', bottom: '50px', fontSize: "50px", width:'50px',height:'50px', right:'50px',background: "#ffc107",
        color: "white",paddingBottom: "50px" }} onClick = {scrollUp}>^</button>
      )}
    </div>
  )
}