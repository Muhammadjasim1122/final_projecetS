import React, { useState, useEffect } from 'react';

import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,

} from '@mui/material';
import { useTranslation } from 'react-i18next';
import "../styles/SoundTest.css";
import { useLocation, useNavigate } from 'react-router-dom'; 



// img for test card
import PImg from '../assets/img/Pan.jpg';
import BImg from '../assets/img/Ball.jpg';
import MImg from '../assets/img/Mug.jpg';
import HImg from '../assets/img/Hat.jpg';
import WImg from '../assets/img/Water.jpg';

import TImg from '../assets/img/Toy.jpg';
import DImg from '../assets/img/Dog.jpg';
import NImg from '../assets/img/Name.jpg';
import KImg from '../assets/img/Kite.jpg';
import GImg from '../assets/img/Go.jpg';

import FImg from '../assets/img/Fish.jpg';
import SImg from '../assets/img/Sun.jpg';
import SHImg from '../assets/img/Shoe.jpg';
import JImg from '../assets/img/Jug.jpg';
import CHImg from '../assets/img/Chair.jpg';

import THImg from '../assets/img/Thumb.jpg';
import RImg from '../assets/img/Rabbit.jpg';
import LImg from '../assets/img/Lamp.jpg';



// img for Urdu


// Add this to your existing imports
import PaniImg from '../assets/img/Water.jpg';          
import BalImg from '../assets/img/Bal.jpg';           
import MezImg from '../assets/img/Mez.jpg';             
import TaraImg from '../assets/img/Tara.jpg';           
import NamakImg from '../assets/img/Namak.jpg';         
import LabImg from '../assets/img/Lip.jpg';             
import KitaabImg from '../assets/img/Kitaab.jpg';       
import GulabImg from '../assets/img/Gulab.jpg';         
import PhalImg from '../assets/img/Phal.jpg';           
import BhaapImg from '../assets/img/Bhaap.jpg';         
import SeebImg from '../assets/img/Seeb.jpg';           
import TamatarImg from '../assets/img/Tamatar.jpg';     
import DabbaImg from '../assets/img/Dabba.jpg';

import ChadarImg from '../assets/img/Chadar.jpg';       
import JanwarImg from '../assets/img/Janwar.jpg';       
import SherImg from '../assets/img/Sher.jpg';           
import DarakhImg from '../assets/img/Darakh.jpg';       
import GhodaImg from '../assets/img/Ghoda.jpg';         
import KhilonaImg from '../assets/img/Toy.jpg';     
import QalamImg from '../assets/img/Qalam.jpg';         
import JhoolaImg from '../assets/img/Jhoola.jpg';       
import BarhapaImg from '../assets/img/Barhapa.jpg';  
import LehsanImg from '../assets/img/Lehsan.jpg';   
import MarhamImg from '../assets/img/Marham.jpg';

//audio for urdu soud 
import PaniVoice from '../assets/UrduTestWordVoice/Water.m4a';    
import BalVoice from '../assets/UrduTestWordVoice/Bal.m4a';
import MezVoice from '../assets/UrduTestWordVoice/Mez.m4a';
import TaraVoice from '../assets/UrduTestWordVoice/Tara.m4a';
import NamakVoice from '../assets/UrduTestWordVoice/Namak.m4a';
import LabVoice from '../assets/UrduTestWordVoice/Lip.m4a';
import KitaabVoice from '../assets/UrduTestWordVoice/Kitaab.m4a';
import GulabVoice from '../assets/UrduTestWordVoice/Gulab.m4a';
import PhalVoice from '../assets/UrduTestWordVoice/Phal.m4a';
import BhaapVoice from '../assets/UrduTestWordVoice/Bhaap.m4a';
import SeebVoice from '../assets/UrduTestWordVoice/Seeb.m4a';
import TamatarVoice from '../assets/UrduTestWordVoice/Tamatar.m4a';
import DabbaVoice from '../assets/UrduTestWordVoice/Dabba.m4a';
import ChadarVoice from '../assets/UrduTestWordVoice/Chadar.m4a';
import JanwarVoice from '../assets/UrduTestWordVoice/Janwar.m4a';
import SherVoice from '../assets/UrduTestWordVoice/Sher.m4a';
import DarakhVoice from '../assets/UrduTestWordVoice/Darakh.m4a';



const STATUS = {
  UNTESTED: 'untested',
  CORRECT: 'correct',
  NEEDS_PRACTICE: 'needs_practice'
};

const STATUS_LABELS = {
  [STATUS.UNTESTED]: { label: 'Not Tested', color: 'default' },
  [STATUS.CORRECT]: { label: 'Correct', color: 'success' },
  [STATUS.NEEDS_PRACTICE]: { label: 'Needs Practice', color: 'error' }
};

const STATUS_LABELS_URDU = {
  [STATUS.UNTESTED]: { label: 'ٹیسٹ نہیں ہوا', color: 'default' },
  [STATUS.CORRECT]: { label: 'صحیح', color: 'success' },
  [STATUS.NEEDS_PRACTICE]: { label: 'مشق کی ضرورت', color: 'error' }
};

const consonantSections = [
  {
    ageRange: "2-3",
    minAge: 2,
    maxAge: 3,
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g"] }
    ]
  },
  {
    ageRange: "4",
    minAge: 4,
    maxAge: 4,
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f"]},
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    ageRange: "5-6",
    minAge: 5,
    maxAge: 6,
    sections: [
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["th"] }
    ]
  },
  {
    ageRange: "6-7",
    minAge: 6,
    maxAge: 7,
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];

const urduConsonantSections = [
  {
    ageRange: "2-3",
    minAge: 2,
    maxAge: 3,
    sections: [
      {
        label: "🟢 سبز روشنی (آسان ہونٹوں کے حروف)",
        sounds: ["پ", "ب", "م"] 
      },
      {
        label: "🟡 پیلی روشنی (زبان کی نوک کے حروف)",
        sounds: ["ت","د" , "ن", "ل"] 
      },
      {
        label: "🔴 سرخ روشنی (زبان کے پچھلے حصے کے حروف)",
        sounds: ["ک", "گ"]
      }
    ]
  },
  {
    ageRange: "4",
    minAge: 4,
    maxAge: 4,
    sections: [
      {
        label: "🟢 سبز روشنی (آسان ہونٹوں کے حروف)",
        sounds: ["پھ", "بھ"]
      },
      {
        label: "🟡 پیلی روشنی (زبان کی نوک کے درمیانے درجے کے حروف)",
        sounds: ["س",  "ٹ", "ڈ"]
      },
      {
        label: "🔴 سرخ روشنی (مشکل زبان کے حروف)",
        sounds: ["چ", "ج", "ش"]
      }
    ]
  },
  {
    ageRange: "5-6",
    minAge: 5,
    maxAge: 6,
    sections: [
      {
        label: "🔴 سرخ روشنی (گھریلو مشق کے لیے موزوں نہیں)",
        sounds: [ "گھ", "کھ", "ق", "جھ"]
      }
    ]
  },
  {
    ageRange: "6-7",
    minAge: 6,
    maxAge: 7,
    sections: [
      {
        label: "🔴 سرخ روشنی (گھریلو مشق کے لیے موزوں نہیں)",
        sounds: ["ڑھ", "لھ", "رھ"]
      }
    ]
  }
];

export default function TestSound() {
  const { t, i18n } = useTranslation();


   const location = useLocation();  // ✅ Move this to the top
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const age = parseInt(query.get('age'));
  const lang = query.get('lang') || i18n.language;

  const [groupedSounds, setGroupedSounds] = useState([]);
  const [notRecommendedSounds, setNotRecommendedSounds] = useState([]);
  const [soundStatus, setSoundStatus] = useState({});
  const [isListening, setIsListening] = useState(false);
  const [activeSound, setActiveSound] = useState(null);


    

  const soundExamples = {
    en: {
      p: "pan", b: "ball", m: "mug", h: "hat", w: "water",
      t: "toy", d: "dog", n: "name", k: "kite", g: "go",
      f: "fish", s: "sun", sh: "shoe", j: "jug", ch: "chair",
      th: "thumb", R: "rabbit", L: "lamp"
    },
   ur: {
  پ: "پانی",         // پ → paani
  ب: "بال",          // ب → baal
  م: "میز",          // م → meiz
  ت: "تارا",         // ت → taara
  ن: "نمک",          // ن → نمک
  ل: "لب",           // ل → lab
  د: "درخت",        // د → darakht
  ک: "کتاب",         // ک → kitaab
  گ: "گلاب",         // گ → gulaab

  پھ: "پھل",         // پھ → phal
  بھ: "بھاپ",        // بھ → bhaap

س: "سیب",   // س → seeb (apple)

  ٹ: "ٹماٹر",        // ٹ → tamatar
  ڈ: "ڈبہ",          // ڈ → dabba

  چ: "چادر",         // چ → chaadar
  ج: "جانور",        // ج → jaanwar
  ش: "شیر",          // ش → sher


  گھ: "گھوڑا",       // گھ → ghoṛa
  کھ: "کھلونا",      // کھ → khilauna
  ق: "قلم",          // ق → qalam
  جھ: "جھولا",       // جھ → jhoola

  ڑھ: "بڑھاپا",      // ڑھ → baṛhaapa
 لھ: "لھسن",   // لھ → lehsan (garlic)
رھ: "مرھم",      // رھ → marham (ointment)
}

  };

// Load saved status from localStorage
useEffect(() => {
  const savedStatus = localStorage.getItem(`soundStatus-${lang}`);
  if (savedStatus) {
    const parsed = JSON.parse(savedStatus);
    console.log(`Loaded sound status for ${lang}:`, parsed);  // 👈 add this line
    setSoundStatus(parsed);
  }
}, [lang]);



 // Save status to localStorage when it changes
useEffect(() => {
  console.log(`Saving sound status for ${lang}:`, soundStatus);  // 👈 add this line
  localStorage.setItem(`soundStatus-${lang}`, JSON.stringify(soundStatus));
}, [soundStatus, lang]);



useEffect(() => {
  if (!age) return;

  const sections = lang === 'ur' ? urduConsonantSections : consonantSections;
  
  // Get ALL age groups where age >= minAge (cumulative)
  const matchingAgeGroups = sections.filter(group => age >= group.minAge);

  if (matchingAgeGroups.length > 0) {
    // Group sounds by difficulty level (🟢, 🟡, 🔴)
    const groups = [
      {
        level: lang === 'ur' ? "🟢 سبز روشنی (آسان)" : "🟢 Green Light (Easy)",
        emoji: "🟢",
        sounds: []
      },
      {
        level: lang === 'ur' ? "🟡 پیلی روشنی (درمیانہ)" : "🟡 Yellow Light (Medium)",
        emoji: "🟡",
        sounds: []
      },
      {
        level: lang === 'ur' ? "🔴 سرخ روشنی (مشکل)" : "🔴 Red Light (Hard)",
        emoji: "🔴",
        sounds: []
      }
    ];

    // Combine sounds from all matching age groups
    matchingAgeGroups.forEach(ageGroup => {
      ageGroup.sections.forEach(section => {
        const group = groups.find(g => section.label.includes(g.emoji));
        if (group) {
          group.sounds = [...new Set([...group.sounds, ...section.sounds])]; // Remove duplicates
        }
      });
    });

    // Filter out empty groups
    const filteredGroups = groups.filter(group => group.sounds.length > 0);
    setGroupedSounds(filteredGroups);


    
  setNotRecommendedSounds(notRecommendedMap[lang] || []);
  } else {
    // Fallback if age doesn't match any group
    const allSounds = Object.keys(soundExamples[lang === 'ur' ? 'ur' : 'en']);
    setGroupedSounds([{
      level: lang === 'ur' ? "تمام حروف" : "All Sounds",
      emoji: "",
      sounds: allSounds
    }]);
    setNotRecommendedSounds([]);
  }
}, [age, lang]);

  const speak = (sound) => {
  if (lang === 'ur') {
    const voiceFile = urduAudioMap[sound];
    if (voiceFile) {
      const audio = new Audio(voiceFile);
      audio.play();
    } else {
      console.warn(`No voice file found for: ${sound}`);
    }
  } else {
    const word = soundExamples.en[sound];
    if (word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }
};

const startListening = (sound) => {
    setActiveSound(sound);
    setIsListening(true);
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in your browser');
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'ur' ? 'ur-PK' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0];
      const spokenWord = result.transcript;
      const confidence = result.confidence;
      
      console.log('Speech recognition result:', {
        spokenWord,
        confidence,
        isFinal: event.results[0].isFinal
      });

      const expectedWord = soundExamples[lang === 'ur' ? 'ur' : 'en'][sound];
      
      console.log('Expected word:', expectedWord);
      console.log('Comparison:', {
        spokenWordLower: spokenWord.toLowerCase(),
        expectedWordLower: expectedWord.toLowerCase()
      });

      const isCorrect = spokenWord.toLowerCase().includes(expectedWord.toLowerCase()) || 
                       (lang === 'ur' && checkUrduPronunciation(sound, spokenWord));
      
      console.log('Pronunciation is:', isCorrect ? 'CORRECT' : 'INCORRECT');
      
      updateSoundStatus(sound, isCorrect);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      
      // Show user-friendly error messages
      let errorMessage = 'Error occurred during speech recognition';
      switch(event.error) {
        case 'no-speech':
          errorMessage = lang === 'ur' ? 'کوئی آواز نہیں سنائی دی' : 'No speech was detected';
          break;
        case 'audio-capture':
          errorMessage = lang === 'ur' ? 'مائیکروفون تک رسائی نہیں ہو سکی' : 'Microphone access was denied';
          break;
        case 'not-allowed':
          errorMessage = lang === 'ur' ? 'مائیکروفون کی اجازت نہیں دی گئی' : 'Microphone permission was blocked';
          break;
      }
      
      alert(errorMessage);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
      setIsListening(false);
    };

    try {
      recognition.start();
      console.log('Started listening for:', sound);
    } catch (error) {
      console.error('Failed to start recognition:', error);
      setIsListening(false);
    }
  };

 // Helper function for Urdu pronunciation checking
 const checkUrduPronunciation = (sound, spokenWord) => {
  const spokenLower = spokenWord.toLowerCase();
  
  const expectedWordsMap = {
    'پ': ['پانی', 'pani', 'paani'],
    'ب': ['بال', 'baal', 'bal'],
    'م': ['میز', 'mez', 'maiz'],
    'ت': ['تارا', 'tara', 'taara'],
    'ن': ['نمک', 'namak'],
    'ل': ['لب', 'lab'],
    'د': ['درخت', 'darakht', 'darkhat'],
    'ک': ['کتاب', 'kitaab', 'kitab'],
    'گ': ['گلاب', 'gulab'],
    'پھ': ['پھل', 'phal'],
    'بھ': ['بھاپ', 'bhaap'],
    'س': ['سیب', 'seeb', 'saib'],
    'ٹ': ['ٹماٹر', 'tamatar'],
    'ڈ': ['ڈبہ', 'dabba'],
    'چ': ['چادر', 'chadar'],
    'ج': ['جانور', 'janwar'],
    'ش': ['شیر', 'sher']
  };

  const expectedWords = expectedWordsMap[sound] || [];
  return expectedWords.some(word => spokenLower.includes(word.toLowerCase()));
};


  const updateSoundStatus = (sound, isCorrect) => {
    setSoundStatus(prev => ({
      ...prev,
      [sound]: isCorrect ? STATUS.CORRECT : STATUS.NEEDS_PRACTICE
    }));
  };

  const getStatusLabel = (sound) => {
    const status = soundStatus[sound] || STATUS.UNTESTED;
    const labels = lang === 'ur' ? STATUS_LABELS_URDU : STATUS_LABELS;
    return labels[status];
  };


    const resetSoundStatus = (sound) => {
    setSoundStatus(prev => {
      const newStatus = { ...prev };
      delete newStatus[sound];
      return newStatus;
    });
  };

  const englishImageMap = {
    p: PImg,
    b: BImg,
    m: MImg,
    h: HImg,
    w: WImg,
    t: TImg,
    d: DImg,
    n: NImg,
    k: KImg,
    g: GImg,
    f: FImg,
    s: SImg,
    sh: SHImg,
    j: JImg,
    ch: CHImg,
    th: THImg,
    R: RImg,
    L: LImg
  };

  const urduImageMap = {
  پ: PaniImg,         // پانی
  ب: BalImg,         // بال
  م: MezImg,          // میز
  ت: TaraImg,         // تارا
  ن: NamakImg,        // نمک
  ل: LabImg,          // لب
    د: DarakhImg,  
  ک: KitaabImg,       // کتاب
  گ: GulabImg,        // گلاب
  پھ: PhalImg,        // پھل
  بھ: BhaapImg,       // بھاپ
  س: SeebImg,         // سیب
  ٹ: TamatarImg,      // ٹماٹر
  ڈ: DabbaImg,        // ڈبہ
  چ: ChadarImg,       // چادر
  ج: JanwarImg,       // جانور
  ش: SherImg,         // شیر
  گھ: GhodaImg,       // گھوڑا
  کھ: KhilonaImg,     // کھلونا
  ق: QalamImg,        // قلم
  جھ: JhoolaImg,      // جھولا
  ڑھ: BarhapaImg,     // بڑھاپا
  لھ: LehsanImg,      // لہسن
  رھ: MarhamImg       // مرہم
};     
 const urduAudioMap = {
  پ: PaniVoice,
  ب: BalVoice,
  م: MezVoice,
  ت: TaraVoice,
  ن: NamakVoice,
  ل: LabVoice,
  د: DarakhVoice,
  ک: KitaabVoice,
  گ: GulabVoice,
  پھ: PhalVoice,
  بھ: BhaapVoice,
  س: SeebVoice,
  ٹ: TamatarVoice,
  ڈ: DabbaVoice,
  چ: ChadarVoice,
  ج: JanwarVoice,
  ش: SherVoice

};


const notRecommendedMap = {
  en: [ "R", "L"], // English sounds not recommended
  ur: ["ژ", "گھ", "کھ", "ق", "جھ","ڑھ", "لھ", "رھ"] // Urdu sounds not recommended
};



  return (
   
    <div    className={"SoundTestCon"} style={{ padding: '20px', maxHeight: '100vh', overflowY: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center"  style={{
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 'xx-large',
    textAlign: 'center'
  }}>
        {t('testSound.title')}
      </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/Articulation')}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 8px rgba(0,0,0,0.15)'
            }
          }}
        >
          {t('testSound.continue')}
        </Button>
      </Box>

      {groupedSounds.map((group) => (
        <Box key={group.level} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            gutterBottom 
            align={lang === 'ur' ? 'right' : 'left'}
            sx={{ 
              color: group.emoji === '🟢' ? 'success.main' : 
                    group.emoji === '🟡' ? 'warning.main' : 
                    'error.main',
          ...(lang === 'ur'
  ? {
      pr: 2,
      borderRight:
        group.emoji === '🟢'
          ? '4px solid #4CAF50'
          : group.emoji === '🟡'
          ? '4px solid #FFC107'
          : '4px solid #F44336',
    }
  : {
      pl: 2,
      borderLeft:
        group.emoji === '🟢'
          ? '4px solid #4CAF50'
          : group.emoji === '🟡'
          ? '4px solid #FFC107'
          : '4px solid #F44336',
    }),

            }}
          >
            {group.level}
          </Typography>
          
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            {group.sounds.map((sound) => {
              const isNotRecommended = notRecommendedSounds.includes(sound);
              const word = soundExamples[lang === 'ur' ? 'ur' : 'en'][sound];
          const exampleWord = lang === 'ur' ? `لفظ: ${word || "—"}` : `Word: ${word || "—"}`;
              const imageSrc = lang === 'ur' ? urduImageMap[sound] : englishImageMap[sound];
                const statusInfo = getStatusLabel(sound);
              return (
                <Grid
                  key={sound}
                  sx={{
                    gridColumn: { xs: 'span 4', sm: 'span 4', md: 'span 3' },
                    display: 'flex'
                  }}
                >
               <Card
  sx={{
    width: '100%',
    maxWidth: 260,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 2,
    borderRadius: 3,
    backgroundColor: isNotRecommended ? '#fff3f3' : '#f9f9f9',
    border: isNotRecommended ? '2px dashed #f44336' : '1px solid #ddd',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: isNotRecommended ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.1)',
      transform: isNotRecommended ? 'none' : 'translateY(-4px)',
    },
  }}
>

                    <CardContent style={{ 
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexGrow: 1
                    }}>
                      <Box sx={{
                     width: '100%',
    aspectRatio: '1 / 1',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    mb: 2,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
                      }}>
                        <img
                          src={imageSrc}
                          alt={sound}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '6px'
                          }}
                          onError={(e) => { 
                            e.target.src = '/images/default.png';
                            e.target.onerror = null;
                          }}
                        />
                      </Box>

                      <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem' }}>
                        {sound}
                      </Typography>
                      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                        {exampleWord}
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '12px', 
                        mt: 'auto',
                        width: '100%'
                      }}>
                        <Button 
                          variant="outlined" 
                          size="medium"
                          onClick={isNotRecommended ? null : () => speak(sound)}
                          color={group.emoji === '🟢' ? 'success' : 
                                 group.emoji === '🟡' ? 'warning' : 'error'}
                          sx={{ flex: 1 }}
                          disabled={isNotRecommended}
                        >
                          🔊 {t('testSound.listen')}
                        </Button>
                     <Button
  variant="contained"
  size="medium"
  color={group.emoji === '🟢' ? 'success' : 
         group.emoji === '🟡' ? 'warning' : 'error'}
  onClick={isNotRecommended ? null : () => startListening(sound)}
  sx={{ flex: 1 }}
  disabled={isNotRecommended || isListening}

>
  {isListening && activeSound === sound ? t('testSound.listening') : `🎙️ ${t('testSound.speak')}`}
</Button>
                      </Box>


 <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Chip
                          label={statusInfo.label}
                          color={statusInfo.color}
                          variant="outlined"
                          size="small"
                        />
                        {soundStatus[sound] && (
                          <Button 
                            size="small" 
                            onClick={() => resetSoundStatus(sound)}
                            color="secondary"
                          >
                            {lang === 'ur' ? 'دوبارہ ٹیسٹ کریں' : 'Retest'}
                          </Button>
                        )}
                      </Box>


                      {isNotRecommended && (
                        <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                          ⚠️ {t('testSound.notRecommended')}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </div>
  );
}