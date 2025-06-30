import React, { useState, useEffect } from "react";
import "../styles/PauseAndPlanKids.css";
import { useTranslation } from "react-i18next";

const PauseAndPlanKidsPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showSpeakButton, setShowSpeakButton] = useState(false);
  const [bounceWord, setBounceWord] = useState(-1);
  const [stars, setStars] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [completedSentences, setCompletedSentences] = useState([]);
  const { t, i18n } = useTranslation();

  const sentences = [
    {
      en: ["I", "like", "to", "eat", "apples"],
      ur: ["میں", "سیب", "کھانا", "پسند", "کرتا", "ہوں"]
    },
    {
      en: ["The", "sun", "is", "shining", "bright"],
      ur: ["سورج", "تیز", "چمک", "رہا", "ہے"]
    },
    // {
    //   en: ["My", "dog", "likes", "to", "play"],
    //   ur: ["میرا", "کتا", "کھیلنا", "پسند", "کرتا", "ہے"]
    // },
    {
      en: ["We", "go", "to", "school", "everyday"],
      ur: ["ہم", "روزانہ", "سکول", "جاتے", "ہیں"]
    },
    // {
    //   en: ["Let's", "read", "a", "book", "together"],
    //   ur: ["آؤ", "ایک", "کتاب", "پڑھیں", "مل", "کر"]
    // }
  ];

  const getCurrentSentence = () => {
    return i18n.language === 'ur' ? sentences[currentSentenceIndex].ur : sentences[currentSentenceIndex].en;
  };

  const getCurrentFullSentence = () => {
    return getCurrentSentence().join(" ");
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const createStar = () => {
    const newStar = {
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 2 + 1
    };
    setStars(prev => [...prev, newStar]);
    setTimeout(() => {
      setStars(prev => prev.filter(star => star.id !== newStar.id));
    }, newStar.duration * 1000);
  };

  const playUrduAudio = (word) => {
    const map = {
      "میں": "main.mp3",
  "سیب": "saib.mp3",
  "کھانا": "khana.mp3",
  "پسند": "pasand.mp3",
  "کرتا": "karta.mp3",
  "ہوں": "hon.mp3",
  "سورج": "sooraj.mp3",
  "تیز": "tez.mp3",
  "چمک": "chamak.mp3",
  "رہا": "raha.mp3",
  "ہے": "hai.mp3",
  "ہم": "hum.mp3",
  "روزانہ": "rozana.mp3",
  "سکول": "school.mp3",
  "جاتے": "jatay.mp3",
  "ہیں": "hain.mp3",
    };
    const fileName = Object.keys(map).find(k => word.includes(k)) ? map[word] : null;

    if (fileName) {
      const audio = new Audio(`/audio/urdu/${fileName}`);
      return new Promise(resolve => {
        audio.onended = resolve;
        audio.play();
      });
    } else {
      return new Promise(resolve => resolve());
    }
  };

  const speakText = (text) => {
    if (i18n.language === 'ur') {
      return playUrduAudio(text);
    } else {
      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        utterance.onend = resolve;
        speechSynthesis.speak(utterance);
      });
    }
  };

  const startPauseAndPlanExercise = async () => {
    setIsRunning(true);
    setFeedback("");
    setShowSpeakButton(false);
    setStars([]);

    const currentSentence = getCurrentSentence();

    for (let i = 0; i < currentSentence.length; i++) {
      setBounceWord(i);
      await speakText(currentSentence[i]);
      createStar();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setBounceWord(-1);
    setShowSpeakButton(true);
    setIsRunning(false);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback("Speech Recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = i18n.language === 'ur' ? "ur-PK" : "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setFeedback(i18n.language === 'ur' ? "سنیں..." : t("pausePlan.listening"));

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.trim().toLowerCase();
      console.log("User said:", spokenText);

      const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase();
      const expectedText = normalize(getCurrentFullSentence());

      if (normalize(spokenText) === expectedText) {
        const successMessage = i18n.language === 'ur' ? "شاباش! آپ نے صحیح کہا" : t("pausePlan.feedbackPerfect");
        setFeedback(successMessage);
        setShowConfetti(true);
        for (let i = 0; i < 10; i++) {
          setTimeout(() => createStar(), i * 200);
        }

        setCompletedSentences(prev => [...prev, currentSentenceIndex]);

        setTimeout(() => {
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
          setShowSpeakButton(false);
        }, 3000);
      } else {
        const retryMessage = i18n.language === 'ur' ? "پھر سے کوشش کریں" : t("pausePlan.feedbackRetry", { spokenText });
        setFeedback(retryMessage);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setFeedback(i18n.language === 'ur' ? "معاف کریں، میں سن نہیں سکا" : t("pausePlan.couldntHear"));
    };
  };

  return (
    <div className="pause-plan-container">
      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="pause-plan-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
            animation: `pausePlanPulse ${star.duration}s infinite`
          }}
        >⭐</div>
      ))}

      {/* Confetti */}
      {showConfetti && (
        <div className="pause-plan-confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="pause-plan-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 20 - 20}%`,
                background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: `${Math.random() > 0.5 ? '50%' : '0'}`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Game Card */}
      <div className="pause-plan-game-card">
        <div className={`pause-plan-header ${i18n.language === 'ur' ? 'urdu' : ''}`}>
          <div className="pause-plan-title-section">
            <h1 className="pause-plan-title">
              {i18n.language === 'ur' ? (
                <span>سوچیں، رکیں، بولیں <span className="pause-plan-bounce-emoji">🗣</span></span>
              ) : (
                <span className="pause-plan-bounce-emoji">🗣 Pause and Plan Game</span>
              )}
            </h1>
            <div className="pause-plan-instructions">
              <p className="pause-plan-description">{t("pausePlan.description")}</p>
            </div>
          </div>
          <div className="pause-plan-animal-character">
            <div className="pause-plan-animal-emoji">🦁</div>
          </div>
        </div>

        <div className="pause-plan-words-container" dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}>
          {getCurrentSentence().map((word, index) => (
            <div
              key={index}
              className={`pause-plan-word 
                ${bounceWord === index ? "pause-plan-word-active" : ""}
                ${i18n.language === 'ur' ? "pause-plan-word-urdu" : ""}`}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`pause-plan-feedback ${feedback.includes("شاباش") || feedback.includes("Perfect") ? "pause-plan-feedback-success" : "pause-plan-feedback-retry"}`}>
            {feedback.includes("شاباش") || feedback.includes("Perfect") ? "🎉 " : "🎯 "}
            {feedback}
          </div>
        )}

        {/* Buttons */}
        <div className="pause-plan-buttons-container">
          <button
            onClick={startPauseAndPlanExercise}
            disabled={isRunning}
            className={`pause-plan-button pause-plan-listen-button ${isRunning ? "pause-plan-button-disabled" : ""}`}
          >
            {isRunning ? (
              <span className="pause-plan-button-content">🔊 {t("pausePlan.speakingButton")}</span>
            ) : (
              <span className="pause-plan-button-content">🔊 {t("pausePlan.listenButton")}</span>
            )}
          </button>

          {showSpeakButton && (
            <button
              onClick={startSpeechRecognition}
              className="pause-plan-button pause-plan-speak-button"
            >
              <span className="pause-plan-pulse-emoji">🎤</span> {t("pausePlan.speakButton")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PauseAndPlanKidsPage;
