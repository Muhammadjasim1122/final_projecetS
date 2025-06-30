// SpeechAssessmentTest.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const testWords = {
  english: [
    { sound: "p", word: "pop" },
    { sound: "b", word: "bubble" },
    { sound: "k", word: "cookie" }
  ],
  urdu: [
    { sound: "پ", word: "پپیتا" },
    { sound: "ب", word: "ببل" },
    { sound: "ک", word: "کیک" }
  ]
};

export default function SpeechAssessmentTest() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState({});
  const words = testWords[i18n.language === "ur" ? "urdu" : "english"];

  const handleResponse = (isCorrect) => {
    const sound = words[currentIndex].sound;
    setResults(prev => ({ ...prev, [sound]: isCorrect }));
    
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    const weakSounds = Object.keys(results).filter(sound => !results[sound]);
    localStorage.setItem("weakSounds", JSON.stringify(weakSounds));
    navigate("/recommended-exercises");
  };

  return (
    <div className="assessment-test">
      <h2>{i18n.t("assessment.title")}</h2>
      <div className="word-card">
        <h3>{words[currentIndex].word}</h3>
        <p>{i18n.t("assessment.prompt")}</p>
      </div>
      <div className="response-buttons">
        <button onClick={() => handleResponse(true)}>
          {i18n.t("assessment.correct")}
        </button>
        <button onClick={() => handleResponse(false)}>
          {i18n.t("assessment.incorrect")}
        </button>
      </div>
    </div>
  );
}