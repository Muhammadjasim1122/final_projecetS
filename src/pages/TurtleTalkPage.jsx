// src/pages/TurtleExercisePage.jsx
import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Card, LinearProgress } from "@mui/material";
import { speakText } from "../utils/tts";
import "../styles/TurtleTalkPage.css";
import CompletionOverlay from "../components/excercise/compOverlay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Urdu sentence to audio file mapping
const urduAudioMap = {
  "میرا نام جاسم ہے۔": "/audio/urdu/jasim-name.mp3",
  "میری عمر چھ سال ہے۔": "/audio/urdu/age-six.mp3",
  "میں پارک جا رہا ہوں۔": "/audio/urdu/going-park.mp3",
  "آج سورج چمک رہا ہے۔": "/audio/urdu/sunny-day.mp3",
  "مجھے سیب کھانا پسند ہے۔": "/audio/urdu/like-apples.mp3",
  "ہم روز فٹبال کھیلتے ہیں۔": "/audio/urdu/play-football.mp3",
};

// Helper to play audio (Urdu = pre-recorded, English = TTS)
const playSentence = (sentence, language) => {
  if (language === "ur") {
    const audioPath = urduAudioMap[sentence];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    } else {
      console.warn("No audio file found for:", sentence);
    }
  } else {
    speakText(sentence);
  }
};

const TurtleExercisePage = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const [childSpeech, setChildSpeech] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [starsEarned, setStarsEarned] = useState(0);
  const [completedSentences, setCompletedSentences] = useState(0);
  const navigate = useNavigate();

  const turtleSentences = i18n.language === 'ur'
    ? [
        "میرا نام جاسم ہے۔",
        // "میری عمر چھ سال ہے۔",
        "میں پارک جا رہا ہوں۔",
        // "آج سورج چمک رہا ہے۔",
        // "مجھے سیب کھانا پسند ہے۔",
        // "ہم روز فٹبال کھیلتے ہیں۔"
      ]
    : [
        "My name is jasim.",
        // "I am 6 years old.",
        "I am going to the park.",
        // "The sun is shining today.",
        // "I like eating apples.",
        // "We play football every day."
      ];

  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (turtleSentences.length > 0) {
      setCurrentSentence(turtleSentences[0]);
      playSentence(turtleSentences[0], i18n.language);
    }
  }, [i18n.language]);

  const startNewSentence = () => {
    let nextIndex = currentIndex >= turtleSentences.length - 1 ? 0 : currentIndex + 1;
    if (nextIndex === 0) setShowCompletion(false);

    setCurrentIndex(nextIndex);
    const newSentence = turtleSentences[nextIndex];
    setCurrentSentence(newSentence);
    setChildSpeech("");
    setResultMessage("");
    playSentence(newSentence, i18n.language);
  };

  const repeatCurrentSentence = () => {
    setChildSpeech("");
    setResultMessage("");
    playSentence(currentSentence, i18n.language);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = i18n.language === "ur" ? "ur-PK" : "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setChildSpeech(transcript);
      checkAnswer(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const checkAnswer = (childText) => {
    const normalizeText = (text) => {
      return text.trim().toLowerCase()
        .replace(/[.,!?۔]/g, "")
        .replace(/\s+/g, " ");
    };
  
    const calculateSimilarity = (str1, str2) => {
      const words1 = str1.split(" ");
      const words2 = str2.split(" ");
      const matchingWords = words1.filter(word => words2.includes(word)).length;
      return matchingWords / Math.max(words1.length, words2.length);
    };
  
    const cleanChild = normalizeText(childText);
    const cleanOriginal = normalizeText(currentSentence);
    const similarity = calculateSimilarity(cleanChild, cleanOriginal);
  
    if (cleanChild === cleanOriginal || similarity >= 0.85) {
      // ✅ Correct Answer
      if (i18n.language === "ur") {
        setResultMessage("✅ شاباش! آپ نے درست جملہ کہا۔");
      } else {
        setResultMessage("✅ Great job! You said it perfectly!");
      }
  
      const newCompleted = completedSentences + 1;
      setCompletedSentences(newCompleted);
      const newProgress = (newCompleted / turtleSentences.length) * 100;
      setProgress(newProgress);
      const newStars = Math.min(newCompleted, 5);
      setStarsEarned(newStars);
  
      setTimeout(() => {
        if (currentIndex < turtleSentences.length - 1) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          setCurrentSentence(turtleSentences[nextIndex]);
          setChildSpeech("");
          setResultMessage("");
          playSentence(turtleSentences[nextIndex], i18n.language);
        } else {
          setStarsEarned(5);
          setShowCompletion(true);
        }
      }, 1500);
    } else {
      // ❌ Incorrect Answer
      if (i18n.language === "ur") {
        setResultMessage("❌ غلط جواب! دوبارہ کوشش کریں۔");
      } else {
        setResultMessage(`❌ You said: "${childText}"`);
      }
    }
  };
  

  const handleCloseOverlay = () => {
    setShowCompletion(false);
    setCurrentIndex(0);
    setCurrentSentence(turtleSentences[0]);
    setChildSpeech("");
    setResultMessage("");
    setProgress(0);
    setStarsEarned(0);
    setCompletedSentences(0);
    navigate("/fluency");
  };

  return (
    <Container maxWidth="md" className="kids-page">
      <Typography variant="h4" gutterBottom className={`kids-heading ${i18n.language === 'ur' ? 'urdu' : ''}`}>
        {t("turtle.title")}
      </Typography>

      <Card className="kids-card">
        <LinearProgress
          variant="determinate"
          value={progress}
          className="progress-bar"
          style={{ marginBottom: '20px', height: '10px' }}
        />

        <Typography variant="h5" gutterBottom className="kids-sentence">
          "{currentSentence || "Click Start to Begin!"}"
        </Typography>

        <div className="btn-sec">
          <Button variant="contained" onClick={startNewSentence} className="kids-button mx-2">
            {currentIndex === turtleSentences.length - 1 ? t("turtle.restart") : t("turtle.next")}
          </Button>

          {currentSentence && (
            <>
              <Button variant="contained" color="secondary" onClick={repeatCurrentSentence} className="kids-button mx-2">
                {t("turtle.hearAgain")}
              </Button>

              <Button variant="contained" color="secondary" onClick={startListening} disabled={isListening} className="kids-button mx-2">
                🎤 {isListening ? t("turtle.listening") : t("turtle.speakNow")}
              </Button>
            </>
          )}
        </div>

        {resultMessage && (
          <Typography variant="h6" className="kids-result" style={{ color: resultMessage.startsWith("✅") ? "green" : "red" }}>
            {resultMessage}
          </Typography>
        )}
      </Card>

      {showCompletion && (
        <CompletionOverlay stars={starsEarned} onClose={handleCloseOverlay} />
      )}
    </Container>
  );
};

export default TurtleExercisePage;
