import React from "react";
import "./Home.css";
import chinmay from "./images/chinmay.jpg";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="back-img"></div>
      <div className="cover-img"></div>
      <section className="home">
        <div className="overlay">
          <div className="homeContent container">
            <div className="textDiv">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#000",
                  fontWeight: 1000,
                  fontSize: "3.5em",
                }}
                startDelay={1500}
                cursorColor="#000"
                multiText={["Learn", "Compete", "Win"]}
                multiTextDelay={1500}
                typeSpeed={10}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Motivation */}
      <section>
        <div id="team" className="text-center intro">
          <div className="container">
            <div className="col col-md-offset-2 ">
              <h2 className="title">Our Motivation</h2>
            </div>
            <div className="row">
              <div className="intro-text">
                <p>
                  The increasing interest in many Indian Ancient sports like
                  Kabaddi, Kho-Kho, Mallakhamb has boosted many people of all
                  backgrounds to explore and contribute to all these sports. One
                  of these sports is "Yoga". Many well-known institutions like
                  Iyengar Yoga Institute, Pune have come up where people are
                  trained with advanced Yoga Asanas that ask for great
                  flexibility. This has led to great competition coming into
                  play from various countries like Germany, USA, etc. Locally as
                  well, many talented athletes tend to lose their opportunity at
                  State, National level championships by a very small amount of
                  difference between scores of the winners and themselves.
                  However, due to sudden growth in demand for competitive yoga,
                  there is a scarcity of judges for competitions. The present
                  judge tends to make a partial judgment if the player
                  performing is his student or if he has been paid as well.
                  These kinds of practices curb the growth and opportunities of
                  actually deserving and hardworking candidates. Another
                  disadvantage of the partial competitions is that they are used
                  to make a profit as most of the competitions are sponsored by
                  politicians, companies, etc. and thus have a huge cash prize.
                  Players from rural India, who are incredible in doing Yoga and
                  have dedicated their whole life to the sport are affected by
                  this majorly.. There is thus a major need to have an unbiased
                  grading system for such highly significant competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devs section */}
      <section>
        <div id="team" className="text-center devs">
          <div className="container">
            <div className="col col-md-offset-2">
              <h2 className="title">Meet the Developer</h2>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 team">
                {/* <div className="thumbnail">
                  <img src={neeraj} alt="Team-Members" className="team-img" />
                  <h4 className="caption">Neeraj J Manurkar</h4>
                </div> */}
              </div>
              <div className="col-6 col-md-4 team">
                <div className="thumbnail">
                  <img src={chinmay} alt="Team-Members" className="team-img" />
                  <h4 className="caption">Chinmay Bapat</h4>
                  <p className="intro-text">Final Year B.Tech Student at Vellore Institute of Technology, Chennai Campus. Pursuing Computer Science Engineering with specialization in Artificial Intelligence and Robotics. I am also a National Level Mallakhamb player and a part time coach in Pune, Maharashtra.My goal is to solve the real-life problems using available technology for the betterment of the community..This project is one such attempt..</p>
                </div>
              </div>
              <div className="col-6 col-md-4 team">
                {/* <div className="thumbnail">
                  <img src={jinen} alt="Team-Members" className="team-img" />
                  <h4 className="caption">Jinen Rathore</h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
