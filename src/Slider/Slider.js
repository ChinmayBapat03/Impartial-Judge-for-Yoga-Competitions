import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import DataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const dataSlider = DataSlider(); // Access the array returned by the DataSlider component

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={obj.url}
              alt={`Yoga Pose ${index + 1}`}
            />
            <h1 className="poseName">{obj.title}</h1>
            <h1 className="scoreGiven">{obj.score}</h1>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}







// import React, { useState } from "react";
// import "./Slider.css";
// import BtnSlider from "./BtnSlider";
// import dataSlider from "./dataSlider";

// export default function Slider() {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const nextSlide = () => {
//     if (slideIndex !== dataSlider.length) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === dataSlider.length) {
//       setSlideIndex(1);
//     }
//   };

//   const prevSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else if (slideIndex === 1) {
//       setSlideIndex(dataSlider.length);
//     }
//   };

//   const moveDot = (index) => {
//     setSlideIndex(index);
//   };

//   return (
//     <div className="container-slider">
//       {dataSlider.map((obj, index) => {
//         return (
//           <div
//             key={obj.id}
//             className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//           >
//             <img
//               src={process.env.PUBLIC_URL + `/Images/yoga${index + 1}.jpg`}
//             />
//             <h1 className="poseName">{obj.title}</h1>
//             <h1 className="scoreGiven">Score: {obj.score}</h1>
//           </div>
//         );
//       })}
//       <BtnSlider moveSlide={nextSlide} direction={"next"} />
//       <BtnSlider moveSlide={prevSlide} direction={"prev"} />

//       <div className="container-dots">
//         {Array.from({ length: 3 }).map((item, index) => (
//           <div
//             onClick={() => moveDot(index + 1)}
//             className={slideIndex === index + 1 ? "dot active" : "dot"}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
