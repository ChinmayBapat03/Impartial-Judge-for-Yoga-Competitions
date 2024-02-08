import Slider from "./Slider/Slider";
import "./Competitions.css";
const Competitions = () => {
  return (
    <>
      <div className="back-img"></div>
      <div className="container">
        <div className="compTtitle">
          <h1 className="title">Poses Perfromed</h1>
        </div>
        <div className="container imageSlider">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Competitions;
