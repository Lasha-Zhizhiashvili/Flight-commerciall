import Slidecard from "../components/Slidecard";
import react, { useEffect, useState } from "react";
import React from "react";
import '../components/slidecardcont.css'

function Slidecardcont() {
  useEffect(() => {
    let cards = document.querySelector(".cards");
    let slides = Array.from(cards.children);

    let slidesize = slides[0].getBoundingClientRect().width;

    let seccounter = 50;
    let counter = 0;

    let getSlideSize = (slide, index) => {
      slide.style.left = slidesize * index + counter + "px";
      counter += seccounter;
    };

    slides.forEach(getSlideSize);

    let boxx = document.querySelector('.boxx')

    let isPressedDown = false;
    let cursorXspace;

    boxx.addEventListener("mousedown", (e) => {
      isPressedDown = true;
      cursorXspace = e.offsetX - cards.offsetLeft;
    });

    window.addEventListener("mouseup", () => {
      isPressedDown = false;
    });

    boxx.addEventListener("mousemove", (e) => {
      if (!isPressedDown) return;
      e.preventDefault();
      cards.style.left = `${e.offsetX - cursorXspace}px`;
      boundcards()
    });

    function boundcards(){
      let boxWidth = boxx.getBoundingClientRect();
      let cardsWidth = cards.getBoundingClientRect();

      if(parseInt(cards.style.left) > 0){
        cards.style.left = 0
      } else if(cardsWidth.right < boxWidth.right){
        cards.style.left = `-${cardsWidth.width - boxWidth.width}px`
      }
    }


  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="boxx"
            style={{ position: "relative", minHeight: '610px', overflowX: 'hidden' }}
          >
            <div className="cards" style={{position: 'absolute', pointerEvents: 'none', display: "flex" }}>
              <Slidecard />
              <Slidecard />
              <Slidecard />
              <Slidecard />
              <Slidecard />
              <Slidecard />
              <Slidecard />
              <Slidecard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slidecardcont;
