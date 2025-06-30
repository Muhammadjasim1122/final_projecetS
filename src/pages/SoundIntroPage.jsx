import { useEffect, useRef, useState, useCallback } from 'react';
import { playAnimationAndSound } from "../utils/animationHelper";
import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router-dom"; 
import '../styles/SoundIntroPage.css';
import { useTranslation } from "react-i18next"; 
import animationData1 from "../assets/Animation-withoutTxt.json";  
import SoundData from "../data/soundData";
import UrduSoundData from "../data/UrduSoundData";
const SoundIntroPage = () => {
  const { soundId } = useParams(); 
  const { i18n } = useTranslation();
  const navigate = useNavigate();

 const isUrdu = i18n.language === "ur";
  const direction = isUrdu ? "rtl" : "ltr";
  const config = isUrdu 
    ? UrduSoundData[soundId] 
    : SoundData[soundId];

  if (!config) {
    return (
      <div className="alert alert-warning" dir={direction}>
        {isUrdu 
          ? "یہ آواز ابھی دستیاب نہیں ہے۔" 
          : "Sound not found"}
      </div>
    );
  }

  const { title, subtitle, animationData, voiceText, videoSrc, nextRoute,backgroundImage } = config;
   useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Sound ID:', soundId);
    console.log('Available Urdu sounds:', Object.keys(UrduSoundData));
    console.log('Selected config:', config);
  }, [i18n.language, soundId]);

  const lottieRef = useRef();
  const videoRef = useRef();
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Play animation and speech
  const playAnimationAndSpeak = useCallback(() => {
    if (!animationPlayed) {
      setIsAnimating(true);
      playAnimationAndSound(lottieRef, animationData, voiceText, () => {
        setAnimationPlayed(true);
        setIsAnimating(false);
      });
    }
  }, [animationPlayed, animationData, voiceText]);

  useEffect(() => {
    playAnimationAndSpeak();
  }, [playAnimationAndSpeak]);

  const handleAnimationClick = () => {
    if (!isAnimating && animationPlayed) {
      setIsAnimating(true);
      playAnimationAndSound(lottieRef, animationData, voiceText, () => {
        setIsAnimating(false);
      });
    }
  };
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
    backgroundColor: '#f4f4f4' // Fallback
  };
  return (
    <div className="container-ArticulationGame flex flex-col items-center justify-center min-h-screen text-center p-6 pb-0" style={containerStyle}>
      {!videoPlayed && (
        <div className="intro-screen flex flex-col items-center justify-center">
          <h1 className="text-sm sm:text-4xl md:text-4xl font-bold text-purple-600 mb-4 ArticulationGameHeading">
            {title}
          </h1>
          {subtitle && (
            <h5 className="text-md text-gray-700 mb-2 subtitle-SI">{subtitle}</h5>
          )}
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData1}
            loop={false}
            autoplay={false}
            className="lottie-animation"
            onClick={handleAnimationClick}
            style={{ cursor: "pointer", maxWidth: "250px", width: "100%", margin: "0 auto" }}
          />
          <button
            className="bg-purple-600 text-white p-4 rounded-md hover:bg-purple-700 transition-all mt-4"
            onClick={() => setVideoPlayed(true)}
          >
            Watch How!
          </button>
        </div>
      )}

      {videoPlayed && (
        <div className="instruction-video flex flex-col items-center justify-center space-y-4 "> 
          <h1 className="text-2xl font-bold text-purple-600 mb-4 ArticulationGameHeading">
            {title}
          </h1>
          <video
            ref={videoRef}
            style={{ width: '80%', maxWidth: '500px', height: 'auto' }}
            controls
            className="video-player"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
          <button
            className="bg-purple-600 text-white p-4 rounded-md hover:bg-purple-700 transition-all mt-4"
            onClick={() => navigate(nextRoute)}
          >
            Let’s Play
          </button>
        </div>
      )}
    </div>
  );
};

export default SoundIntroPage;
