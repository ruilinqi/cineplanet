import React, { useState,useEffect } from "react";
import "./BackToTopButton.css"
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
        <button className="gotopbutton" onClick = {scrollUp}><span>^</span></button>
      )}
    </div>
  )
}