import React from "react";
import "./Home.css";
import headerSideImg from "../../images/headerSideImg.png";
import Button from "@material-ui/core/Button";
import headerImg from "../../images/headerImg.png";
import football from "../../images/football.png";
import descriptionLogo from "../../images/descriptionLogo.png";
import bgEffect from "../../images/bgEffect.png";
import fifa_20 from "../../images/fifa_20.jpg";
import fifa_19 from "../../images/fifa_19.jpg";
import fifa_18 from "../../images/fifa_18.jpg";
import fifa_17 from "../../images/fifa_17.jpg";
import useWebAnimations from "@wellyshen/use-web-animations";
import Contact from '../Contact/Contact';


const Home = () => {
  const bgImgAnimate = useWebAnimations({
    keyframes: [
      {"transform": "translateX(100px)"},
      {"transform": "scale(1.1)"},
    ],
    timing: {
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
    }
  })
  const footballAnimate = useWebAnimations({
    keyframes: [
      {"transform": "translateY(-40vh) rotate(40deg)"},
      {"transform": "translateY(0)"},
      {"transform": "translateY(-20vh)"},
      {"transform": "translateY(0)"},
      {"transform": "translateX(-70vw) rotate(-360deg) "},
    ],
    timing: {
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-out", // Use a fancy timing function
    }
  })
  const descriptionLogoAnimate = useWebAnimations({
    keyframes: [
      {"transform": "scale(1.2)"},
    ],
    timing: {
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
    }
  })
  
  return (
    <>
  {/* ====================== first Screen =============================== */}
    <div className="container header mt-3">
      <div className="row">
        <div className="col-md-4 headerText text-center">
          <img src={headerSideImg} className="headerSideImg" alt="headerImg" />
          <h1>FEEL NEXT LEVEL</h1>
          <h6>
            Feel Next Level in FIFA 21 on PlayStation®5 and Xbox Series X with
            new technology that takes The World’s Game from visual to visceral.
          </h6>
          <div className="headerBtn">
            <Button variant="contained" color="primary">
              Learn More
            </Button>
            <Button variant="contained" color="primary">
              Watch Trailer
            </Button>
          </div>
        </div>
        <div className="col-md-8 headerImg">
          <img src={headerImg} className="img-fluid" ref={bgImgAnimate.ref} alt="background" />
        </div>
      </div>
      <img src={football} className="football" ref={footballAnimate.ref} alt="football"/>
    </div>


      {/* ====================== second Screen =============================== */}

      <div className="container secondSection">
      <img src={bgEffect} className="bgEffect" alt="bgEffect"/>
        <div className="descriptionLogo text-center">
          <img src={descriptionLogo} ref={descriptionLogoAnimate.ref} alt="logo"/>
        </div>
        <div className="mt-5 text-center sectionDescription">
        <p>

The legendary FIFA series has been produced by EA SPORTS for over 20 years, and is now the largest sports video game 
franchise on the planet. FIFA brings The World’s Game to life, letting you play with the biggest leagues, clubs,
 and players in world football, all with incredible detail and realism. Whether you want to build your dream squad 
in FIFA Ultimate Team, lead your favourite club to glory in Career Mode, take the game back to the streets with
 EA SPORTS VOLTA in FIFA 20,
 or get bragging rights over a friend in Kick-Off Mode, the FIFA series lets you play The World’s Game your way.</p>
      </div>
      </div>

      {/* ====================== third Screen =============================== */}
    <div className="container thirdSection">
    <h1 className="m-5 text-center">LATEST FIFA GAMES</h1>
      <div className="row fifaGame text-center">
        <div className="col-lg-3 col-md-6 my-2 fifaGameCol">
          <img src={fifa_20} className="fifaPlayer" alt="fifa game"/>
          <div className="gameHover ">
            <img src={descriptionLogo} className="fifaLogo" alt="logo"/>
            <h5>FIFA 2020 EA SPORT </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2 fifaGameCol">
        <img src={fifa_19} className="fifaPlayer" alt="fifa game"/>
        <div className="gameHover ">
            <img src={descriptionLogo} className="fifaLogo" alt="logo"/>
            <h5>FIFA 2019 EA SPORT </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2 fifaGameCol">
        <img src={fifa_18} className="fifaPlayer" alt="fifa game"/>
        <div className="gameHover ">
            <img src={descriptionLogo} className="fifaLogo" alt="logo"/>
            <h5>FIFA 2018 EA SPORT </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 my-2 fifaGameCol">
        <img src={fifa_17} className="fifaPlayer" alt="fifa game"/>
        <div className="gameHover ">
            <img src={descriptionLogo} className="fifaLogo" alt="logo"/>
            <h5>FIFA 2017 EA SPORT </h5>
          </div>
        </div>
      </div>
    </div>
    {/* ==================== forms ==================== */}
    <img src={bgEffect} className="bgEffect mt-5" alt="bgEffect"/>
<h2 className="text-center">CONTACT US</h2>
    <Contact />
      </>
  );
};

export default Home;
