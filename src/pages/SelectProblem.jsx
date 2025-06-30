import * as React from "react";
import { 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Typography, 
  Grid, 
  CardMedia, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import articulationImage from "../assets/img/articulation.png";
import articulationURImage from "../assets/img/articulationUR.png";
import stutteringProblem from "../assets/img/stutteringProblem.jpg";
import stutteringProblemUR from "../assets/img/stutteringProblemUR.png";
import { useTranslation } from "react-i18next";
import "../styles/SelectProblem.css";
import { Collapse, IconButton} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function SelectProblemPage() {
  const { t, i18n } = useTranslation();
  const [showAutoInfo, setShowAutoInfo] = useState(false);
  const [showManualInfo, setShowManualInfo] = useState(false);

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
          sounds: ["ت", "د", "ن", "ل"] 
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
          sounds: ["س", "ز", "ٹ", "ڈ", "ڑ"]
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
          sounds: ["ژ", "گھ", "کھ", "ق", "جھ"]
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

  const problems = [
    {
      title: "Articulation Disorders",
      description: "Helps kids learn to say sounds correctly...",
      image: i18n.language === "ur" ? articulationURImage : articulationImage,
      path: "/Articulation",
      learnMorePath: "/ArticulationIntro",
      requiresAge: true,
    },
    {
      title: "Stuttering (Fluency Disorders)",
      description: "Exercises for smoother, more confident speech...",
      image: i18n.language === "ur" ? stutteringProblemUR : stutteringProblem,
      path: "/fluency",
      learnMorePath: "/FluencyIntro",
      requiresAge: false,
    },
  ];

  const [openAgeDialog, setOpenAgeDialog] = useState(false);
  const [age, setAge] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [selectionMethod, setSelectionMethod] = useState("auto");
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSounds, setSelectedSounds] = useState([]);
  const [showSoundDialog, setShowSoundDialog] = useState(false);
  const [showStartTestDialog, setShowStartTestDialog] = useState(false);

  // API Integration - Save selected exercise path
  const saveSelectedPath = async ({ path, name }) => {
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/save-exercise-path", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ path, name })
    });
  };

  const handleStartClick = async (path, requiresAge, problemTitle) => {
    try {
      setSelectedPath(path);
      
      // Save the selected path via API
      await saveSelectedPath({ path, name: problemTitle });
      
      if (requiresAge) {
        setOpenAgeDialog(true);
        setActiveStep(0);
      } else {
        window.location.href = path;
      }
    } catch (error) {
      console.error("Failed to save selection:", error);
      alert("Failed to save your selection. Please try again.");
    }
  };
  

  const handleNext = () => {
    if (age && age >= 2 && age <= 7) {
      setActiveStep(1);
    }
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleAgeSubmit = () => {
    if (age && age >= 2 && age <= 12) {
      localStorage.setItem("childAge", age);
      localStorage.setItem("selectionMethod", selectionMethod);

      if (selectionMethod === "manual") {
        setShowSoundDialog(true);
      } else {
        // Directly redirect to Sound Test
        window.location.href = `/TestSound?age=${age}&lang=${i18n.language}`;
      }
    }
  };

  const handleSoundToggle = (sound) => {
    setSelectedSounds(prev => 
      prev.includes(sound) 
        ? prev.filter(s => s !== sound) 
        : [...prev, sound]
    );
  };

  const handleSoundSelectionComplete = () => {
    localStorage.setItem("selectedSounds", JSON.stringify(selectedSounds));
    window.location.href = `${selectedPath}?age=${age}&method=${selectionMethod}&sounds=${selectedSounds.join(",")}`;
  };

  const steps = [
    t('selectProblem.ageDialogTitle'),
    t('selectProblem.methodDialogTitle')
  ];

  return (
    <div className={`select-problem-container ${i18n.language === "ur" ? "urdu-mode" : ""}`}>
      <Typography variant="h3" gutterBottom className="SelectProblemHeading">
        {t('selectProblem.selectTitle')}
      </Typography>
      <h3 className="SelectProblemHeading">
        {t('selectProblem.subTitle')}!✨
      </h3>

      <Grid container spacing={4} justifyContent="center" className="grid-container">
        {problems.map((problem, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} className="grid-item">
            <Card className="card" elevation={3}>
              <CardMedia
                component="img"
                height="160"
                image={problem.image}
                alt={problem.title}
                className="card-media"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" className="Card-heading-SP">
                  {t(`selectProblem.problems.${problem.title}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`selectProblem.problems.${problem.title}.description`)}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Link to={problem.learnMorePath} style={{ textDecoration: 'none' }}>
                  <Button size="small" className="btn-secondary">
                    {t('selectProblem.learnMore')}
                  </Button>
                </Link>
                <Button 
                  size="small" 
                  className="btn-primary"
                  onClick={() => handleStartClick(problem.path, problem.requiresAge, problem.title)}
                >
                  {t('selectProblem.start')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Age and Method Selection Dialog */}
      <Dialog 
        open={openAgeDialog} 
        onClose={() => setOpenAgeDialog(false)}
        PaperProps={{
          style: {
            minWidth: "300px",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "12px"
          }
        }}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          {t('selectProblem.DialogTitle')}
        </DialogTitle>
        
        <Stepper activeStep={activeStep} alternativeLabel style={{ marginBottom: "20px" }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <DialogContent>
          {activeStep === 0 ? (
            <>
              <DialogContentText style={{ textAlign: "center", marginBottom: "20px" }}>
                {t('selectProblem.ageDialogDescription')}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label={t('selectProblem.ageLabel')}
                type="number"
                fullWidth
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                inputProps={{ 
                  min: 2, 
                  max: 12,
                  style: { textAlign: "center" }
                }}
                style={{ marginBottom: "10px" }}
              />
            </>
          ) : (
            <>
              <DialogContentText style={{ textAlign: "center", marginBottom: "20px" }}>
                {t('selectProblem.methodDialogTitle')}
              </DialogContentText>
             <FormControl component="fieldset" sx={{ width: "100%" }}>
  <RadioGroup
    aria-label="selection-method"
    name="selection-method"
    value={selectionMethod}
    onChange={(e) => setSelectionMethod(e.target.value)}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}
  >
    <div style={{ 
      display: 'flex',
      flexDirection: i18n.language === "ur" ? 'row-reverse' : 'row',
      alignItems: 'center'
    }}>
      <Radio value="auto" sx={{ 
        padding: '4px',
        marginLeft: i18n.language === "ur" ? '8px' : '0',
        marginRight: i18n.language === "ur" ? '0' : '8px'
      }}/>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: i18n.language === "ur" ? 'row-reverse' : 'row',
        alignItems: 'center'
      }}>
        <Typography sx={{ 
          textAlign: i18n.language === "ur" ? 'right' : 'left',
          marginRight: i18n.language === "ur" ? '8px' : '0',
          marginLeft: i18n.language === "ur" ? '0' : '8px'
        }}>
          {t('selectProblem.autoMethodTitle')}
        </Typography>
        <IconButton size="small" onClick={() => setShowAutoInfo(!showAutoInfo)}>
          {showAutoInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>
    </div>

    <Collapse in={showAutoInfo}>
      <Typography variant="body2" color="textSecondary" sx={{ 
        paddingLeft: i18n.language === "ur" ? '0' : '28px',
        paddingRight: i18n.language === "ur" ? '28px' : '0',
        textAlign: i18n.language === "ur" ? 'right' : 'left'
      }}>
        {t('selectProblem.autoMethodDescription')}
      </Typography>
    </Collapse>

    <div style={{ 
      display: 'flex',
      flexDirection: i18n.language === "ur" ? 'row-reverse' : 'row',
      alignItems: 'center'
    }}>
      <Radio value="manual" sx={{ 
        padding: '4px',
        marginLeft: i18n.language === "ur" ? '8px' : '0',
        marginRight: i18n.language === "ur" ? '0' : '8px'
      }}/>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: i18n.language === "ur" ? 'row-reverse' : 'row',
        alignItems: 'center'
      }}>
        <Typography sx={{ 
          textAlign: i18n.language === "ur" ? 'right' : 'left',
          marginRight: i18n.language === "ur" ? '8px' : '0',
          marginLeft: i18n.language === "ur" ? '0' : '8px'
        }}>
          {t('selectProblem.manualMethodTitle')}
        </Typography>
        <IconButton 
          size="small" 
          sx={{
            marginRight: i18n.language === "ur" ? "0" : "8px",
            marginLeft: i18n.language === "ur" ? "8px" : "0"
          }} 
          onClick={() => setShowManualInfo(!showManualInfo)}
        >
          {showManualInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>
    </div>

    <Collapse in={showManualInfo}>
      <Typography variant="body2" color="textSecondary" sx={{ 
        paddingLeft: i18n.language === "ur" ? '0' : '28px',
        paddingRight: i18n.language === "ur" ? '28px' : '0',
        textAlign: i18n.language === "ur" ? 'right' : 'left'
      }}>
        {t('selectProblem.manualMethodDescription')}
      </Typography>
    </Collapse>
  </RadioGroup>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-evenly" }}>
          {activeStep === 1 ? (
            <Button onClick={handleBack}>
              {t('selectProblem.back')}
            </Button>
          ) : (
            <Button onClick={() => setOpenAgeDialog(false)}>
              {t('selectProblem.cancel')}
            </Button>
          )}
          {activeStep === 0 ? (
            <Button 
              onClick={handleNext} 
              disabled={!age || age < 2 || age > 12}
              variant="contained"
              color="primary"
            >
              {t('selectProblem.next')}
            </Button>
          ) : (
            <Button 
              onClick={handleAgeSubmit} 
              variant="contained"
              color="primary"
            >
              {t('selectProblem.continue')}
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Sound Selection Dialog */}
      <Dialog 
        open={showSoundDialog} 
        onClose={() => setShowSoundDialog(false)}
        fullWidth
        maxWidth="md"
        dir={i18n.language === "ur" ? "rtl" : "ltr"}
      >
        <DialogTitle>
          {t('selectProblem.selectSoundsTitle')}
        </DialogTitle>
        <DialogContent>
          {/* Group sounds by difficulty level regardless of age section */}
          {[
            {
              level: i18n.language === "ur" ? "🟢 سبز روشنی (آسان)" : "🟢 Green Light (Easy)",
              emoji: "🟢"
            },
            {
              level: i18n.language === "ur" ? "🟡 پیلی روشنی (درمیانہ)" : "🟡 Yellow Light (Medium)",
              emoji: "🟡"
            },
            {
              level: i18n.language === "ur" ? "🔴 سرخ روشنی (مشکل)" : "🔴 Red Light (Hard)",
              emoji: "🔴"
            }
          ].map(({level, emoji}) => {
            // Get all sounds for age or younger, filtered by difficulty emoji
            const soundsForDifficulty = (i18n.language === "ur" ? urduConsonantSections : consonantSections)
              .filter(section => age >= section.minAge) // Only sections appropriate for this age
              .flatMap(section => section.sections)
              .filter(section => section.label.includes(emoji))
              .flatMap(section => section.sounds);

            // Only show difficulty level if there are sounds available
            if (soundsForDifficulty.length === 0) return null;

            // Define sounds not recommended for home practice
            const notRecommendedEnglish = ["R", "L"]; // English sounds not for home
            const notRecommendedUrdu = ["ژ", "گھ", "کھ", "ق", "جھ", "ڑھ", "لھ", "رھ"]; // Urdu sounds not for home
            const notRecommendedSounds = i18n.language === "ur" ? notRecommendedUrdu : notRecommendedEnglish;

            return (
              <div key={level} style={{ marginBottom: '20px' }}>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  style={{ textAlign: i18n.language === "ur" ? "right" : "left" }}
                >
                  {level}
                </Typography>
                <Grid 
                  container 
                  spacing={2} 
                  justifyContent={i18n.language === "ur" ? "flex-end" : "flex-start"}
                  style={{
                    flexDirection: i18n.language === "ur" ? "row-reverse" : "row"
                  }}
                >
                  {soundsForDifficulty.map(sound => {
                    const isNotRecommended = notRecommendedSounds.includes(sound);
                    return (
                      <Grid item key={sound}>
                        <Button
                          variant={
                            selectedSounds.includes(sound) ? "contained" : "outlined"
                          }
                          color={
                            isNotRecommended ? "error" : 
                            selectedSounds.includes(sound) ? "success" : "primary"
                          }
                          onClick={() => !isNotRecommended && handleSoundToggle(sound)}
                          style={{ 
                            minWidth: '60px',
                            fontWeight: selectedSounds.includes(sound) ? 'bold' : 'normal',
                            marginRight: i18n.language === "ur" ? "0" : "8px",
                            marginLeft: i18n.language === "ur" ? "8px" : "0",
                            opacity: isNotRecommended ? 2 : 1,
                            border :isNotRecommended ? '1px solid red' : '',
                            cursor: isNotRecommended ? "not-allowed" : "pointer",
                            color:"black"
                          }}
                          disabled={isNotRecommended}
                          title={
                            isNotRecommended ? 
                            (i18n.language === "ur" ? 
                              "گھریلو مشق کے لیے موزوں نہیں" : 
                              "Not recommended for home practice") : 
                            ""
                          }
                        >
                          {sound}
                          {isNotRecommended && " ⚠️"}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </DialogContent>
        <DialogActions style={{
          flexDirection: i18n.language === "ur" ? "row-reverse" : "row"
        }}>
          <Button onClick={() => setShowSoundDialog(false)}>
            {t('selectProblem.cancel')}
          </Button>
          <Button 
            onClick={handleSoundSelectionComplete} 
            variant="contained" 
            color="primary"
            disabled={selectedSounds.length === 0}
            sx={{ fontWeight: 'bold' }}
          >
            {t('selectProblem.confirmSelection')} ({selectedSounds.length})
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}