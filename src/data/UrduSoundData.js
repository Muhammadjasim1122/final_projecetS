// src/data/urduSoundData.js
import PenguinAni from "../assets/penguin.json";
import PenguinImg from "../assets/img/penguin.png";
import BalloonAni from "../assets/balloon.json";
import BalloonImg from "../assets/img/balloon.png";
import TreasureAni from "../assets/treasure.json";
import TreasureImg from "../assets/img/treasure.png";
import birdImg from "../assets/img/bird.png";
import birdAni from "../assets/bird.json";

import PSoundBg from "/assets/img/bg.png";
import BSoundBg from "/assets/img/bg2.png";
import MSoundBg from "/assets/img/bg1.png";
import HSoundBg from "/assets/img/bg4.png";
import WSoundBg from "/assets/img/bg2.png";
import TSoundBg from "/assets/img/bg5.png";
import DSoundBg from "/assets/img/bg.png";
import NSoundBg from "/assets/img/bg1.png";
import KSoundBg from "/assets/img/bg4.png";
import GSoundBg from "/assets/img/bg2.png";
import FSoundBg from "/assets/img/bg5.png";
import VSoundBg from "/assets/img/bg3.png";
import SSoundBg from "/assets/img/bg1.png";
import ZSoundBg from "/assets/img/bg.png";
import SHSoundBg from "/assets/img/bg2.png";
import JSoundBg from "/assets/img/bg4.png";
import CHSoundBg from "/assets/img/bg3.png";
import THSoundBg from "/assets/img/bg2.png";


import PopSound from "/assets/sounds/pop.mp3";

const UrduSoundData = {
  پ: {
    id: "پ",
    category: "green",
    title: "پ کی آواز سیکھیں! 🎤",
    subtitle: "ہونٹوں کو پیار سے ملائیں جیسے چوم رہے ہوں! 💋",
    voiceText: "آؤ پ کی آواز سیکھیں!",
     videoSrc: "/assets/video/Paay.mp4",
    nextRoute: "/ArticulationGame/partice/پ",
    backgroundImage: PSoundBg,
      
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "پ پ",
          emoji: "💋",
          tip: "ہونٹوں کو ملائیں اور کہیں 'پ...پ' جیسے بلبلہ پھٹ رہا ہو 🎈",
          audioSrc:"/assets/sounds/Paay/پ پ (1).mp3"
        },
        {
          word: "پ پ پ",
          emoji: "🫧",
          tip: "ہونٹ کھول کر کہیں 'پ پ پ' جیسے کئی بلبلے پھٹ رہے ہوں 🎯",
          audioSrc:"/assets/sounds/Paay/پ پ پ.mp3"
        
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "پا پا",
          emoji: "👶",
          tip: "بچے کی طرح کہیں 'پا' - منہ کھول کر ہونٹ ملائیں 😮",
          audioSrc:"/assets/sounds/Paay/پا پا (1).mp3"
          
        },
        {
          word: "پو پو",
          emoji: "🦜",
          tip: "طوطے کی طرح گول ہونٹ بنا کر 'پو' کہیں 💨",
          audioSrc:"/assets/sounds/Paay/پو پو.mp3"
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "پانی",
          emoji: "💧",
          tip: "پ سے شروع کریں: 'پا-نی' پہلے پ پر زور دیں 💥",
           audioSrc:"/assets/sounds/Paay/پانی.mp3"
        },
        {
          word: "پھول",
          emoji: "🌸",
          tip: "درمیان میں پ کی آواز: 'پھ-ول' 🌸",
           audioSrc:"/assets/sounds/Paay/پھول (1).mp3"
        }
      ]
    }
  },

  م: {
    id: "م",
    category: "green",
    title: "م کی آواز سیکھیں! 🎤",
    subtitle: "منہ بند کریں اور ناک سے آواز نکالیں! 🐵",
    voiceText: "آؤ م کی آواز سیکھیں!",
    videoSrc: "/assets/video/Meem.mp4",
    nextRoute: "/ArticulationGame/partice/م",
    backgroundImage: HSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "م م",
          emoji: "🙊",
          tip: "منہ بند کریں اور ناک سے 'م...م' بولیں جیسے بندر آواز نکال رہا ہو 🐒",
          audioSrc:"/assets/sounds/Meem/م م.mp3"
        },
        {
          word: "م م م",
          emoji: "🐵",
          tip: "'م م م' کہیں جیسے بندر مستانہ بول رہا ہو 🎶",
          audioSrc:"/assets/sounds/Meem/م م م.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "ما ما",
          emoji: "👩",
          tip: "پیار سے 'ما ما' کہیں جیسے بچے ماں کو پکار رہے ہوں 👶",
          audioSrc:"/assets/sounds/Meem/ما ما.mp3"
        },
        {
          word: "مو مو",
          emoji: "🐄",
          tip: "'مو' کہیں جیسے گائے بول رہی ہو 🐮",
          audioSrc:"/assets/sounds/Meem/مو مو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "میز",
          emoji: "🪑",
          tip: "'میز' میں شروعات پر م کی آواز پر زور دیں 📚",
          audioSrc:"/assets/sounds/Meem/میز.mp3"
        },
        {
          word: "مچھلی",
          emoji: "🐟",
          tip: "'مچھلی' کہتے وقت م کی آواز واضح نکالیں 🐟",
          audioSrc:"/assets/sounds/Meem/مچھلی.mp3"
        }
      ]
    }
  },

  ب: {
    id: "ب",
    category: "green",
    title: "ب کی آواز سیکھیں! 🎤",
    subtitle: "ہونٹ ملائیں اور گنگنائیں جیسے بھنورا ہو! 🐝",
    voiceText: "آؤ ب کی آواز سیکھیں!",
    videoSrc: "/assets/video/Bay.mp4",
    nextRoute: "/ArticulationGame/partice/ب",
    backgroundImage: BSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "ب ب",
          emoji: "🐝",
          tip: "ہونٹ ملائیں اور 'ب...ب' کہیں جیسے بھنورا گنگنا رہا ہو 🐝",
          audioSrc:"/assets/sounds/Bay/ب ب.mp3"
          
        },
        {
          word: "ب ب ب" ,
          emoji: "👩",
          tip: "ہونٹ ملائیں اور 'ب...ب' کہیں جیسے بھنورا گنگنا رہا ہو 🐝",
          audioSrc:"/assets/sounds/Bay/ب ب ب.mp3"
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "با با",
          emoji: "👨",
          tip: "ابا جی کو بلاتے ہوئے 'با...با' کہیں 👨",
          audioSrc:"/assets/sounds/Bay/با با.mp3"
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "بال",
          emoji: "⚽",
          tip: "ب سے شروع کریں: 'با-ل' ⚽",
          audioSrc:"/assets/sounds/Bay/بال.mp3"
        },
        {
          word: "کتاب",
          emoji: "📖",
          tip: "آخر میں ب کی آواز: 'کتا-ب' 📖",
          audioSrc:"/assets/sounds/Bay/کتاب.mp3"
        }
      ]
    }
  },
  // Add other consonants following the same pattern
  ت: {
    id: "ت",
    category: "yellow",
    title: "ت کی آواز سیکھیں! 🎤",
    subtitle: "زبان کی نوک دانتوں کے قریب لے جائیں اور تیز آواز نکالیں! 🔔",
    voiceText: "آؤ ت کی آواز سیکھیں!",
    videoSrc:"/assets/video/Taay.mp4",
    nextRoute: "/ArticulationGame/partice/ت",
    backgroundImage: TSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "ت ت",
          emoji: "🔔",
          tip: "’ت...ت‘ کہیں جیسے گھنٹی بجا رہے ہوں 🔔",
          audioSrc:"/assets/sounds/Taay/ت ت.mp3"
        },
        {
          word: "ت ت ت",
          emoji: "🎯",
          tip: "’ت ت ت‘ کہیں جیسے نشانے پر مار کر رہے ہوں 🎯",
          audioSrc:"/assets/sounds/Taay/ت ت ت.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "تا تا",
          emoji: "👣",
          tip: "چلتے ہوئے ’تا تا‘ کہیں جیسے بچہ قدم اٹھا رہا ہو 👶",
          audioSrc:"/assets/sounds/Taay/تا تا.mp3"
        },
        {
          word: "تو تو",
          emoji: "🧒",
          tip: "’تو‘ کہیں جیسے کسی کو پیار سے بلا رہے ہوں 🧒",
          audioSrc:"/assets/sounds/Taay/تو تو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "تارا",
          emoji: "⭐",
          tip: "’تارا‘ کہتے وقت ت کی آواز پر زور دیں ⭐",
          audioSrc:"/assets/sounds/Taay/تارا.mp3"
        },
        {
          word: "کتاب",
          emoji: "📖",
          tip: "’کتاب‘ کے شروع میں ت کو صاف بولیں 📖",
          audioSrc:"/assets/sounds/Bay/کتاب.mp3"
        }
      ]
    }
  },

  د: {
    id: "د",
    category: "yellow",
    title: "د کی آواز سیکھیں! 🎤",
    subtitle: "زبان کی نوک اوپر دانتوں کے قریب رکھیں اور آواز نکالیں! 🛎️",
    voiceText: "آؤ د کی آواز سیکھیں!",
    videoSrc:"/assets/video/Daal.mp4",
    nextRoute: "/ArticulationGame/partice/د",
    backgroundImage: CHSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "د د",
          emoji: "🛎️",
          tip: "’د...د‘ کہتے وقت زبان کی نوک دانتوں کے قریب رکھیں 🛎️",
               audioSrc:"/assets/sounds/Daal/د-د.mp3 "
        },
        {
          word: "د د د",
          emoji: "🎲",
          tip: "’د د د‘ کہیں جیسے ڈائس پھینک رہے ہوں 🎲",
          audioSrc:"/assets/sounds/Daal/د-د-د.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "دا دا",
          emoji: "👴",
          tip: "’دا دا‘ کہیں جیسے دادا ابو کو پکار رہے ہوں 👴",
          audioSrc:"/assets/sounds/Daal/دا-دا.mp3"
        },
        {
          word: "دو دو",
          emoji: "🧃",
          tip: "’دو‘ کہیں جیسے کسی کو جوس دے رہے ہوں 🧃",
          audioSrc:"/assets/sounds/Daal/mدو دو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "درخت",
          emoji: "🌳",
          tip: "’درخت‘ میں د کی آواز پر زور دیں جیسے درخت دکھا رہے ہوں 🌳",
          audioSrc:"/assets/sounds/Daal/درخت.mp3"
        },
        {
          word: "دروازہ",
          emoji: "🚪",
          tip: "’دروازہ‘ کہتے وقت د کی آواز صاف اور مضبوط نکالیں 🚪",
          audioSrc:"/assets/sounds/Daal/دروازہ.mp3"
        }
      ]
    }
  },
  ن: {
    id: "ن",
    category: "yellow",
    title: "ن کی آواز سیکھیں! 🎤",
    subtitle: "زبان کی نوک اوپر لے جائیں اور ناک سے آواز نکالیں! 🐽",
    voiceText: "آؤ ن کی آواز سیکھیں!",
    videoSrc:"/assets/video/Noon.mp4",
    nextRoute: "/ArticulationGame/partice/ن",
    backgroundImage: MSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "ن ن",
          emoji: "🐽",
          tip: "’ن...ن‘ کہتے وقت ناک سے آواز نکالیں جیسے سونگھ رہے ہوں 🐽",
          audioSrc:"/assets/sounds/Noon/ن ن.mp3"
        },
        {
          word: "ن ن ن",
          emoji: "🧠",
          tip: "’ن ن ن‘ کہتے ہوئے زبان کی نوک کو اوپر رکھیں 🧠",
           audioSrc:"/assets/sounds/Noon/ن ن ن.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "نا نا",
          emoji: "👵",
          tip: "پیار سے ’نا نا‘ کہیں جیسے نانی کو پکار رہے ہوں 👵",
          audioSrc:"/assets/sounds/Noon/نا نا.mp3"
        },
        {
          word: "نو نو",
          emoji: "🔔",
          tip: "’نو نو‘ کہیں جیسے گھنٹی کی آواز کی نقل کر رہے ہوں 🔔",
          audioSrc:"/assets/sounds/Noon/نو نو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "نمک",
          emoji: "🧂",
          tip: "’نمک‘ کہتے وقت ن کی آواز پر زور دیں 🧂",
           audioSrc:"public\assets\sounds\Noon\نمک.mp3"
        },
        {
          word: "ناز",
          emoji: "😊",
          tip: "’ناز‘ میں ن کی نرم آواز پر توجہ دیں 😊",
         audioSrc: "/assets/sounds/Noon/ناز.mp3"
        }
      ]
    }
  },

  ل: {
    id: "ل",
    category: "yellow",
    title: "ل کی آواز سیکھیں! 🎤",
    subtitle: "زبان کو دانتوں کے پیچھے چھت سے لگائیں اور آواز نکالیں! 👅",
    voiceText: "آؤ ل کی آواز سیکھیں!",
    videoSrc:"/assets/video/Laam.mp4",
    nextRoute: "/ArticulationGame/partice/ل",
    backgroundImage: DSoundBg, 
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "ل ل",
          emoji: "👅",
          tip: "زبان اوپر لگا کر ’ل...ل‘ کہیں جیسے چھت کو چھو رہے ہوں 👅",
          audioSrc: "/assets/sounds/Laam/ل ل.mp3"
        },
        {
          word: "ل ل ل",
          emoji: "🎵",
          tip: "’ل ل ل‘ کہیں جیسے گانے کی آواز ہو 🎶",
          audioSrc: "/assets/sounds/Laam/ل ل ل.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "لا لا",
          emoji: "👶",
          tip: "’لا لا‘ کہیں جیسے بچے کو لوری دے رہے ہوں 💤",
          audioSrc: "/assets/sounds/Laam/لا لا.mp3"
        },
        {
          word: "لو لو",
          emoji: "🎁",
          tip: "’لو‘ کہیں جیسے تحفہ دے رہے ہوں 🎁",
          audioSrc: "/assets/sounds/Laam/لو-لو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "لب",
          emoji: "👄",
          tip: "’لب‘ کہتے وقت ل کی آواز پر زور دیں جیسے ہونٹ دکھا رہے ہوں 👄",
          audioSrc: "/assets/sounds/Laam/لب.mp3"
        },
        {
          word: "لالٹین",
          emoji: "🪔",
          tip: "’لالٹین‘ کہتے ہوئے دونوں ل کی آواز واضح کریں 🪔",
          audioSrc: "/assets/sounds/Laam/لالٹین.mp3"
        }
      ]
    }
  },

  ک: {
    id: "ک",
    category: "red",
    title: "ک کی آواز سیکھیں! 🎤",
    subtitle: "زبان کے پچھلے حصے کو نرم ذرا سا اوپر کی جانب لگائیں اور آواز نکالیں! 👅",
    voiceText: "آؤ ک کی آواز سیکھیں!",
    videoSrc:"/assets/video/Kaaf.mp4",
    nextRoute: "/ArticulationGame/partice/ک",
    backgroundImage: JSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "ک ک",
          emoji: "👅",
          tip: "زبان کے پچھلے حصے کو نرم چھت کی جانب لگا کر ’ک...ک‘ کہیں جیسے کھڑکی کھول رہے ہوں 👅",
          audioSrc: "/assets/sounds/Kaaf/ک ک.mp3"
        },
        {
          word: "ک ک ک",
          emoji: "🎵",
          tip: "’ک ک ک‘ کہیں جیسے گانے کی تال پر آواز نکال رہے ہوں 🎶",
          audioSrc: "/assets/sounds/Kaaf/ک ک ک.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "کا کا",
          emoji: "👶",
          tip: "’کا کا‘ کہیں جیسے کسی بچے کو بلانے کی آواز ہو 💤",
          audioSrc: "/assets/sounds/Kaaf/کا کا.mp3"
        },
        {
          word: "کو کو",
          emoji: "🎁",
          tip: "’کو‘ کہیں جیسے کسی کو تحفہ دے رہے ہوں 🎁",
          audioSrc: "/assets/sounds/Kaaf/کو کو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "کتاب",
          emoji: "📚",
          tip: "’کتاب‘ کہتے ہوئے ’ک‘ کی آواز واضح اور صاف نکالیں 📚",
          audioSrc: "/assets/sounds/Kaaf/کتاب.mp3"
        },
        {
          word: "کبوتر",
          emoji: "🕊️",
          tip: "’کبوتر‘ کہتے وقت ’ک‘ کی آواز پر زور دیں جیسے پرندہ اڑ رہا ہو 🕊️",
          audioSrc: "/assets/sounds/Kaaf/کبوتر.mp3"
        }
      ]
    }
  },

  گ: {
    id: "گ",
    category: "red",
    title: "گ کی آواز سیکھیں! 🎤",
    subtitle: "زبان کے پچھلے حصے کو نرم چھت کی جانب لگائیں اور گونجدار آواز نکالیں! 👅",
    voiceText: "آؤ گ کی آواز سیکھیں!",
     videoSrc:"/assets/video/Ghaaf.mp4",
    nextRoute: "/ArticulationGame/partice/گ",
    backgroundImage: TSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "گ گ",
          emoji: "👅",
          tip: "زبان کے پچھلے حصے کو چھت کی جانب لگا کر ’گ...گ‘ کہیں جیسے دھیمی آواز میں بول رہے ہوں 👅",
          audioSrc: "/assets/sounds/Gaaf/گ گ.mp3"
        },
        {
          word: "گ گ گ",
          emoji: "🎵",
          tip: "’گ گ گ‘ کہیں جیسے گانے کی دھن میں آواز نکال رہے ہوں 🎶",
          audioSrc: "/assets/sounds/Gaaf/گ گ گ.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "گا گا",
          emoji: "👶",
          tip: "’گا گا‘ کہیں جیسے بچے کو آواز دے رہے ہوں 💤",
          audioSrc: "/assets/sounds/Gaaf/گا گا.mp3"
        },
        {
          word: "گو گو",
          emoji: "🎁",
          tip: "’گو‘ کہیں جیسے کسی کو تحفہ دے رہے ہوں 🎁",
          audioSrc: "/assets/sounds/Gaaf/گو گو.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "گھر",
          emoji: "🏠",
          tip: "’گھر‘ کہتے ہوئے ’گ‘ کی آواز صاف اور واضح نکالیں 🏠",
          audioSrc: "/assets/sounds/Gaaf/گھر.mp3"
        },
        {
          word: "گلاب",
          emoji: "🌹",
          tip: "’گلاب‘ کہتے وقت ’گ‘ کی آواز پر زور دیں جیسے خوشبو دار پھول 🌹",
          audioSrc: "/assets/sounds/Gaaf/گلاب.mp3"
        }
      ]
    }
  },

  //For the Age group of 4//

  پھ: {
    id: "پھ",
    category: "green",
    title: "پھ کی آواز سیکھیں! 🎤",
    subtitle: "نرم سانس کے ساتھ ہونٹوں سے آواز نکالیں جیسے ہوا آ رہی ہو! 🍃",
    voiceText: "چلو پھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/پھ",
    backgroundImage: KSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "پھول",
          emoji: "🌸",
          tip: "’پھول‘ کہتے ہوئے ’پھ‘ کی آواز پر نرمی سے سانس نکالیں 🌸",
          audioSrc: "/assets/sounds/Phay/پھول (1).mp3"
        },
        {
          word: "پھل",
          emoji: "🍎",
          tip: "’پھل‘ کہتے ہوئے جیسے آپ کوئی پھل دکھا رہے ہوں 🍎",
          audioSrc: "/assets/sounds/Phay/پھل.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "پھینک",
          emoji: "🎯",
          tip: "’پھینک‘ کہتے ہوئے گیند پھینکنے کی ایکٹنگ کریں 🎯",
          audioSrc: "/assets/sounds/Phay/پھینک.mp3"
        },
        {
          word: "پھسل",
          emoji: "🧊",
          tip: "’پھسل‘ کہتے وقت ’پھ‘ کی آواز لمبی کھینچیں 🧊",
          audioSrc: "/assets/sounds/Phay/پھسل.mp3"
        }
      ]
    },

    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "پھاٹا",
          emoji: "🧵",
          tip: "’پھاٹا‘ کہتے ہوئے ’پھ‘ پر زور دیں جیسے کپڑا پھٹ رہا ہو 🧵",
          audioSrc: "/assets/sounds/Phay/پھاٹا.mp3"
        },
        {
          word: "پھولا",
          emoji: "🎈",
          tip: "’پھولا‘ کہتے ہوئے جیسے غبارہ پھول رہا ہو 🎈",
          audioSrc: "/assets/sounds/Phay/پھولا.mp3"
        }
      ]
    }
  },

  بھ: {
    id: "بھ",
    category: "green",
    title: "بھ کی آواز سیکھیں! 🎤",
    subtitle: "ہونٹ بند کر کے سانس کے ساتھ بھاری آواز نکالیں! 💨",
    voiceText: "چلو بھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/بھ",
    backgroundImage: GSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "بھالو",
          emoji: "🐻",
          tip: "’بھالو‘ کہتے وقت ’بھ‘ کی آواز پر زور دیں جیسے ریچھ آ رہا ہو 🐻",
          audioSrc: "/assets/sounds/Bhaay/بھالو.mp3"
        },
        {
          word: "بھاپ",
          emoji: "♨️",
          tip: "’بھاپ‘ کہتے ہوئے ہلکی گرم سانس نکالیں جیسے چائے کی بھاپ ہو ♨️",
          audioSrc: "/assets/sounds/Bhaay/بھاپ.mp3"
        }
      ]
    },

    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "بھاگا",
          emoji: "🏃‍♂️",
          tip: "’بھاگا‘ کہتے ہوئے دوڑنے کا انداز دکھائیں 🏃‍♂️",
          audioSrc: "/assets/sounds/Bhaa/بھاگا.mp3"
        },
        {
          word: "بھرا",
          emoji: "🍯",
          tip: "’بھرا‘ کہتے وقت آواز میں نرمی رکھیں جیسے برتن بھر گیا ہو 🍯",
          audioSrc: "/assets/sounds/Bhaay/بھرا.mp3"
        }
      ]
    },

    level3: {
      animation: birdAni,
      basket_img: birdImg,
      exercises: [
        {
          word: "بھولا",
          emoji: "😇",
          tip: "’بھولا‘ کہتے وقت ’بھ‘ کی آواز واضح کریں جیسے کوئی معصوم ہو 😇",
          audioSrc: "/assets/sounds/Bhaay/بھولا.mp3"
        },
        {
          word: "بھیجا",
          emoji: "📦",
          tip: "’بھیجا‘ کہتے وقت جیسے آپ نے کچھ تحفہ بھیجا ہو 📦",
          audioSrc: "/assets/sounds/Bhaay/بھیجا.mp3"
        }
      ]
    }
  },

  س: {
    id: "س",
    category: "yellow",
    title: "س کی آواز سیکھیں! 🎤",
    subtitle: "دانتوں کے درمیان سے سانس نکال کر آواز نکالیں! 🐍",
    voiceText: "آؤ س کی آواز سیکھیں!",
    videoSrc:"/assets/video/Seen.mp4",
    nextRoute: "/ArticulationGame/partice/س",
    backgroundImage: VSoundBg,
    sound: PopSound,

    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        {
          word: "س س",
          emoji: "🐍",
          tip: "’س...س‘ کہیں جیسے سانپ کی آواز نکال رہے ہوں 🐍",
           audioSrc: "/assets/sounds/Seen/س س.mp3"
        },
        {
          word: "س س س",
          emoji: "💨",
          tip: "’س س س‘ کہتے وقت ہلکے سانس سے آواز نکالیں 💨",
           audioSrc: "/assets/sounds/Seen/س س س.mp3"
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        {
          word: "سا سا",
          emoji: "🧼",
          tip: "’سا‘ کہیں جیسے صفائی کی بات ہو 🧼",
           audioSrc: "/assets/sounds/Seen/سا سا.mp3"
        },
        {
          word: "سو سو",
          emoji: "💤",
          tip: "’سو‘ کہیں جیسے سونا ہو 💤",
           audioSrc: "/assets/sounds/Seen/سو سو.mp3"
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        {
          word: "سیب",
          emoji: "🍎",
          tip: "’سیب‘ میں س کی آواز پر زور دیں 🍎",
           audioSrc: "/assets/sounds/Seen/سیب.mp3"
        },
      ]
    }
  },

  ٹ: {
  id: "ٹ",
  category: "yellow",
  title: "ٹ کی آواز سیکھیں! 🎤",
  subtitle: "زبان کو پیچھے موڑ کر ’ٹ‘ کی آواز نکالیں! 🔊",
  voiceText: "آؤ ٹ کی آواز سیکھیں!",
  videoSrc:"/assets/video/Tay.mp4",
  nextRoute: "/ArticulationGame/partice/ٹ",
  backgroundImage: TSoundBg,
  sound: PopSound,

  level1: {
    animation: BalloonAni,
    basket_img: BalloonImg,
    exercises: [
      {
        word: "ٹ ٹ",
        emoji: "🔊",
        tip: "’ٹ...ٹ‘ کہیں جیسے سخت آواز نکال رہے ہوں 🔊",
        audioSrc: "/assets/sounds/Tay/ٹ ٹ.mp3"
      },
      {
        word: "ٹا ٹا",
        emoji: "👋",
        tip: "’ٹا ٹا‘ کہیں جیسے الوداع کہہ رہے ہوں 👋",
        audioSrc: "/assets/sounds/Tay/ٹا ٹا.mp3"
      },
    ]
  },
  level2: {
    animation: TreasureAni,
    basket_img: TreasureImg,
    exercises: [
      {
        word: "ٹماٹر",
        emoji: "🍅",
        tip: "’ٹماٹر‘ میں ٹ کی آواز پر زور دیں 🍅",
        audioSrc: "/assets/sounds/Tay/ٹماٹر.mp3"
      },
      {
        word: "ٹوکری",
        emoji: "🧺",
        tip: "’ٹوکری‘ کہتے وقت شروعات کی ٹ پر دھیان دیں 🧺",
        audioSrc: "/assets/sounds/Tay/ٹوکری.mp3"
      }
    ]
  }
},

ڈ: {
  id: "ڈ",
  category: "yellow",
  title: "ڈ کی آواز سیکھیں! 🎤",
  subtitle: "زبان کو موڑ کر، آواز کے ساتھ ’ڈ‘ بولیں! 🎤",
  voiceText: "آؤ ڈ کی آواز سیکھیں!",
  videoSrc:"/assets/video/Dhaal.mp4",
  nextRoute: "/ArticulationGame/partice/ڈ",
  backgroundImage: NSoundBg,
  sound: PopSound,

  level1: {
    animation: BalloonAni,
    basket_img: BalloonImg,
    exercises: [
      {
        word: "ڈ ڈ",
        emoji: "🎙️",
        tip: "’ڈ...ڈ‘ کہیں جیسے مائیک میں بات کر رہے ہوں 🎙️",
         audioSrc: "/assets/sounds/Dhaal/ڈ ڈ.mp3"
      },
      {
        word: "ڈا ڈا",
        emoji: "👴",
        tip: "’ڈا ڈا‘ کہیں جیسے دادا ابو کو پکارا جائے 👴",
         audioSrc: "/assets/sounds/Dhaal/ڈا ڈا.mp3"
      },
      
    ]
  },
  level2: {
    animation: TreasureAni,
    basket_img: TreasureImg,
    exercises: [
      {
        word: "ڈبہ",
        emoji: "📦",
        tip: "’ڈبہ‘ کہتے وقت شروع کی ڈ پر زور دیں 📦",
        audioSrc: "/assets/sounds/Dhaal/ڈبہ.mp3"
      },
      {
        word: "ڈاکٹر",
        emoji: "🧑‍⚕️",
        tip: "’ڈاکٹر‘ میں ڈ کی آواز واضح نکالیں 🧑‍⚕️",
        audioSrc: "/assets/sounds/Dhaal/ڈاکٹر.mp3"
      }
    ]
  }
},


چ: {
  id: "چ",
  category: "red",
  title: "چ کی آواز سیکھیں! 🎤",
  subtitle: "زبان کو اوپر موڑ کر اچانک ’چ‘ کی آواز نکالیں! 🤧",
  voiceText: "آؤ چ کی آواز سیکھیں!",
  videoSrc:"/assets/video/Chaay.mp4",
  nextRoute: "/ArticulationGame/partice/چ",
  backgroundImage: CHSoundBg,
  sound: PopSound,

  level1: {
    animation: BalloonAni,
    basket_img: BalloonImg,
    exercises: [
      { word: "چ چ",   emoji: "🤧", tip: "’چ...چ‘ کہیں جیسے اچھی طرح چھینک آئے! 🤧",audioSrc: "/assets/sounds/Chay/چ چ.mp3" },
      { word: "چ چ چ", emoji: "🎯", tip: "’چ چ چ‘ کہیں جیسے نشانے پر مار رہے ہوں 🎯",audioSrc: "/assets/sounds/Chay/چ چ چ.mp3" }
    ]
  },
  level2: {
    animation: PenguinAni,
    basket_img: PenguinImg,
    exercises: [
      { word: "چا چا", emoji: "🧣", tip: "’چا چا‘ کہیں جیسے سردی میں کالر سینگ رہے ہوں 🧣",audioSrc: "/assets/sounds/Chay/چا چا.mp3" },
      { word: "چو چو", emoji: "🐸", tip: "’چو چو‘ کہیں جیسے مینڈک کی آواز ہو 🐸",audioSrc: "/assets/sounds/Chay/چو چو.mp3" }
    ]
  },
  level3: {
    animation: TreasureAni,
    basket_img: TreasureImg,
    exercises: [
      { word: "چادر", emoji: "🧣", tip: "’چادر‘ کہتے وقت چ کی آواز صاف نکالیں 🧣",audioSrc: "/assets/sounds/Chay/چادر.mp3" },
      { word: "چمچہ", emoji: "🥄", tip: "’چمچہ‘ میں شروعات کی ’چ‘ پر زور دیں 🥄",audioSrc: "/assets/sounds/Chay/چمچہ.mp3" }
    ]
  }
},

ج: {
  id: "ج",
  category: "red",
  title: "ج کی آواز سیکھیں! 🎤",
  subtitle: "زبان کی جڑ کو اوپر چھت سے لگا کر ’ج‘ کی آواز نکالیں! 🎠",
  voiceText: "آؤ ج کی آواز سیکھیں!",
  videoSrc:"/assets/video/Jeem.mp ",
  nextRoute: "/ArticulationGame/partice/ج",
  backgroundImage: JSoundBg,
  sound: PopSound,

  level1: {
    animation: BalloonAni,
    basket_img: BalloonImg,
    exercises: [
      { word: "ج ج",   emoji: "🎠", tip: "’ج...ج‘ کہیں جیسے جھولا ہلا رہے ہوں 🎠", audioSrc: "/assets/sounds/Jeem/ج ج.mp3"},
       { word: "جا جا", emoji: "🏠", tip: "’جا جا‘ کہیں جیسے گھر جارہے ہوں 🏠" , audioSrc: "/assets/sounds/Jeem/جا جا.mp3"}
      
    ]
  },
  level2: {
    animation: TreasureAni,
    basket_img: TreasureImg,
    exercises: [
      { word: "جانور", emoji: "🐯", tip: "’جانور‘ میں ج کی آواز واضح نکالیں 🐯",audioSrc: "/assets/sounds/Jeem/جانور.mp3"},
      { word: "جھیل",   emoji: "🏞️", tip: "’جھیل‘ کہتے وقت ج کی آواز پر زور دیں 🏞️",audioSrc: "/assets/sounds/Jeem/جھیل.mp3" }
    ]
  }
},

ش: {
  id: "ش",
  category: "red",
  title: "ش کی آواز سیکھیں! 🎤",
  subtitle: "ہونٹ گول کریں اور ’ش‘ کی نرم سانس والی آواز نکالیں! 🤫",
  voiceText: "آؤ ش کی آواز سیکھیں!",
  videoSrc:"/assets/video/Sheen.mp4",
  nextRoute: "/ArticulationGame/partice/ش",
  backgroundImage: SHSoundBg,
  sound: PopSound,

  level1: {
    animation: BalloonAni,
    basket_img: BalloonImg,
    exercises: [
      { word: "ش ش",   emoji: "🤫", tip: "’ش...ش‘ کہیں جیسے کسی کو چپ کروانا ہو 🤫",audioSrc: "/assets/sounds/Sheen/ش ش.mp3" },
      { word: "شیر",    emoji: "🦁", tip: "’شیر‘ میں ’ش‘ کی آواز گھماؤ کے ساتھ بولیں 🦁" ,audioSrc: "/assets/sounds/Sheen/شیر.mp3"}
      
    ]
  },
},

//Age group 5-6//

  گھ: {
    id: "گھ",
    category: "red",
    title: "گھ کی آواز سیکھیں! 🎤",
    subtitle: "گ کی آواز کے ساتھ ہلکی سانس نکالیں جیسے کچھ بھاری اٹھا رہے ہوں! 💨",
    voiceText: "چلو گھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/گھ",
    backgroundImage: MSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "گھوڑا", emoji: "🐴", tip: "’گھوڑا‘ کہتے وقت ’گھ‘ کو بھاری آواز سے ادا کریں 🐴" },
        { word: "گھاس", emoji: "🌿", tip: "’گھاس‘ کہتے وقت نرمی سے سانس نکالیں 🌿" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "گھڑی", emoji: "⏰", tip: "’گھڑی‘ کہتے ہوئے ’گھ‘ کو نمایاں کریں جیسے ٹک ٹک ہو ⏰" },
        { word: "گھومنا", emoji: "🎡", tip: "’گھومنا‘ میں ’گھ‘ کو گھما کر بولیں 🎡" }
      ]
    },
  },

  کھ: {
    id: "کھ",
    category: "red",
    title: "کھ کی آواز سیکھیں! 🎤",
    subtitle: "ک کی آواز کے ساتھ ہوا کا زور دیں جیسے دروازہ کھل رہا ہو! 🚪",
    voiceText: "چلو کھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/کھ",
    backgroundImage: FSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "کھانا", emoji: "🍽️", tip: "’کھانا‘ کہتے وقت ’کھ‘ کو صاف ادا کریں 🍽️" },
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "کھڑکی", emoji: "🪟", tip: "’کھڑکی‘ کہتے وقت ’کھ‘ کی آواز نمایاں کریں 🪟" },
        { word: "کھینچو", emoji: "🎯", tip: "’کھینچو‘ میں ’کھ‘ کی آواز کو کھینچیں 🎯" }
      ]
    },
  },

  ق: {
    id: "ق",
    category: "red",
    title: "ق کی آواز سیکھیں! 🎤",
    subtitle: "گلے کے نیچے سے گہری آواز نکالیں جیسے پانی کے نیچے سے بول رہے ہوں! 🌊",
    voiceText: "چلو ق کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/ق",
    backgroundImage: JSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "قلم", emoji: "✍️", tip: "’قلم‘ کہتے ہوئے ’ق‘ کی گہری آواز نکالیں ✍️" },
        { word: "قرآن", emoji: "📖", tip: "’قرآن‘ میں ’ق‘ کو ادب سے اور گہرائی سے بولیں 📖" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "قمیض", emoji: "👕", tip: "’قمیض‘ کہتے ہوئے آواز کو نرم اور صاف رکھیں 👕" },
        { word: "قطار", emoji: "📏", tip: "’قطار‘ میں ’ق‘ کو مضبوطی سے ادا کریں 📏" }
      ]
    },
  },

  غ: {
    id: "غ",
    category: "red",
    title: "غ کی آواز سیکھیں! 🎤",
    subtitle: "گلے کے پیچھے سے گونجتی ہوئی آواز نکالیں جیسے غرررر ہو رہا ہو! 🐯",
    voiceText: "چلو غ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/غ",
    backgroundImage: VSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "غم", emoji: "😢", tip: "’غم‘ کہتے ہوئے ’غ‘ کو نرمی سے اور گہرائی سے بولیں 😢" },
        { word: "غبارہ", emoji: "🎈", tip: "’غبارہ‘ میں ’غ‘ کو نرم اور گول انداز میں ادا کریں 🎈" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "غلطی", emoji: "❌", tip: "’غلطی‘ کہتے وقت ’غ‘ کی آواز واضح رکھیں ❌" },
        { word: "غصہ", emoji: "😠", tip: "’غصہ‘ میں ’غ‘ کو زور سے ادا کریں جیسے ناراض ہوں 😠" }
      ]
    },
  },

  جھ: {
    id: "جھ",
    category: "red",
    title: "جھ کی آواز سیکھیں! 🎤",
    subtitle: "’ج‘ کے ساتھ سانس کو جھٹکے سے نکالیں جیسے کچھ ہلا رہے ہوں! 🌀",
    voiceText: "چلو جھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/جھ",
    backgroundImage: DSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "جھولا", emoji: "🎠", tip: "’جھولا‘ کہتے ہوئے ’جھ‘ کی آواز کو گھومنے کی طرح بولیں 🎠" },
        { word: "جھاڑو", emoji: "🧹", tip: "’جھاڑو‘ کہتے ہوئے ’جھ‘ پر زور دیں جیسے صفائی ہو رہی ہو 🧹" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "جھانکنا", emoji: "👀", tip: "’جھانکنا‘ کہتے وقت ’جھ‘ کی آواز نرم اور چپکے سے ہو 👀" },
        { word: "جھٹکا", emoji: "⚡", tip: "’جھٹکا‘ کہتے ہوئے ’جھ‘ کو تیزی سے ادا کریں ⚡" }
      ]
    },
  },

  ڑھ: {
    id: "ڑھ",
    category: "red",
    title: "ڑھ کی آواز سیکھیں! 🎤",
    subtitle: "جھٹکے سے گلے کے اندر سے ’ڑھ‘ کی آواز نکالیں جیسے بھاری ر ہے! 👅",
    voiceText: "چلو ڑھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/ڑھ",
    backgroundImage: DSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "بڑھنا", emoji: "📈", tip: "’بڑھنا‘ میں ’ڑھ‘ کی آواز بڑھتے ہوئے انداز میں نکالیں 📈" },
        { word: "چڑھائی", emoji: "🧗‍♀️", tip: "’چڑھائی‘ کہتے وقت آواز کو اوپر کی طرف لے جائیں 🧗‍♀️" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "چڑھنا", emoji: "🪜", tip: "’چڑھنا‘ کہتے وقت ’ڑھ‘ کو نمایاں کریں 🪜" },
        { word: "اُڑھانا", emoji: "🪁", tip: "’اُڑھانا‘ میں ’ڑھ‘ کو نرمی سے ادا کریں 🪁" }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { word: "گھڑھنا", emoji: "🛠️", tip: "’گھڑھنا‘ میں ’ڑھ‘ کو مضبوطی سے کہیں 🛠️" },
        { word: "چڑھاؤ", emoji: "🧱", tip: "’چڑھاؤ‘ میں ’ڑھ‘ کی آواز کو بھاری بنائیں 🧱" }
      ]
    }
  },

  ڈھ: {
    id: "ڈھ",
    category: "red",
    title: "ڈھ کی آواز سیکھیں! 🎤",
    subtitle: "’ڈ‘ کی آواز کے ساتھ ہوا کی ہلکی جھٹکی شامل کریں جیسے کچھ گر رہا ہو! 💨",
    voiceText: "چلو ڈھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/ڈھ",
    backgroundImage: PSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "ڈھول", emoji: "🥁", tip: "’ڈھول‘ کہتے ہوئے ’ڈھ‘ کو گونج دار بنائیں 🥁" },
        { word: "ڈھیر", emoji: "🪨", tip: "’ڈھیر‘ میں ’ڈھ‘ کی آواز کو دھیرے سے نکالیں 🪨" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "ڈھلوان", emoji: "⛰️", tip: "’ڈھلوان‘ کہتے وقت آواز کو نیچے کی طرف لے جائیں ⛰️" },
        { word: "ڈھونڈنا", emoji: "🔍", tip: "’ڈھونڈنا‘ میں ’ڈھ‘ کو نرم جھٹکے سے ادا کریں 🔍" }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { word: "ڈھکنا", emoji: "🛑", tip: "’ڈھکنا‘ میں ’ڈھ‘ کی آواز کو صاف اور بھاری نکالیں 🛑" },
        { word: "ڈھالا", emoji: "🔩", tip: "’ڈھالا‘ کہتے وقت ’ڈھ‘ کی آواز کو گول بنائیں 🔩" }
      ]
    }
  },

  لھ: {
    id: "لھ",
    category: "red",
    title: "لھ کی آواز سیکھیں! 🎤",
    subtitle: "’ل‘ کے ساتھ ہلکی سانس کا جھٹکا شامل کریں جیسے کوئی نرم چیز ہو! 💨",
    voiceText: "چلو لھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/لھ",
    backgroundImage: BSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "لھکنا", emoji: "🌬️", tip: "’لھکنا‘ میں ’لھ‘ کی آواز کو نرم ہوا کی طرح کہیں 🌬️" },
        { word: "لھار", emoji: "🛠️", tip: "’لھار‘ کہتے وقت ’لھ‘ کو زور سے کہیں جیسے لوہے پر کام ہو رہا ہو 🛠️" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "لھرا", emoji: "🏳️", tip: "’لھرا‘ میں ’لھ‘ کی آواز لہراتی ہو جیسے جھنڈا لہرا رہا ہو 🏳️" },
        { word: "لھک", emoji: "💨", tip: "’لھک‘ کہتے وقت ’لھ‘ کی آواز کو ہوا کے ساتھ نکالیں 💨" }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { word: "لھج", emoji: "🎼", tip: "’لھج‘ کہتے وقت ’لھ‘ کی آواز کو نرمی سے نکالیں 🎼" },
        { word: "لھسا", emoji: "🧼", tip: "’لھسا‘ میں ’لھ‘ کی آواز صاف اور نرم ہو جیسے صابن ہو 🧼" }
      ]
    }
  },

  رھ: {
    id: "رھ",
    category: "red",
    title: "رھ کی آواز سیکھیں! 🎤",
    subtitle: "’ر‘ کے ساتھ ہوا کا نرم اور جھٹکیدار اثر شامل کریں جیسے کچھ ہلکا ہل رہا ہو! 🌀",
    voiceText: "چلو رھ کی آواز بولیں!",
    nextRoute: "/ArticulationGame/partice/رھ",
    backgroundImage: HSoundBg,
    sound: PopSound,
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { word: "رھنا", emoji: "🛌", tip: "’رھنا‘ کہتے وقت ’رھ‘ کی آواز دھیرے سے نکالیں 🛌" },
        { word: "رھائی", emoji: "🕊️", tip: "’رھائی‘ میں ’رھ‘ کی آواز کو آزادانہ نکالیں 🕊️" }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { word: "رھائشی", emoji: "🏠", tip: "’رھائشی‘ میں ’رھ‘ کی آواز کو نرمی سے ادا کریں 🏠" },
        { word: "رھٹ", emoji: "⚙️", tip: "’رھٹ‘ کہتے وقت ’رھ‘ کو گھماؤ کے ساتھ بولیں ⚙️" }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { word: "رھگزر", emoji: "🚶‍♂️", tip: "’رھگزر‘ میں ’رھ‘ کی آواز صاف اور مسلسل ہو 🚶‍♂️" },
        { word: "رھائیگی", emoji: "📜", tip: "’رھائیگی‘ کہتے وقت ’رھ‘ کی آواز دھیمی اور صاف ہو 📜" }
      ]
    }
  }




  // Add more consonants following the same pattern...
};

export default UrduSoundData;