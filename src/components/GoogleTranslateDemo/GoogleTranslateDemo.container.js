import { useEffect, useState } from "react";
import languages from "../../asset/languages";
import axios from "axios";
import GoogleTranslateDemoView from "./GoogleTranslateDemo.view";
function GoogleTranslateDemoContainer(props) {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [textToConvert, setTextToConvert] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleSourceLanguageChange = (e) => {
    setSourceLanguage(e.target.value);
  };

  const handleTargetLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  const handleTextToConvertChange = (e) => {
    setTextToConvert(e.target.value);
  };

  const handleTranslate = async (textToConvert, targetLanguage) => {
    try {
      const response = await axios.post(`${backendUrl}/translate`, {
        text: textToConvert,
        targetLanguage: targetLanguage,
      });
      //   console.log(response);
      setConvertedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(`${backendUrl}/languages`);
        const languages = response.data.languages;
        // console.log("Languages:");
        // languages.forEach((language) =>
        //   console.log(language.code, language.name)
        // );
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    // fetchLanguages();
  }, []);
  return (
    <GoogleTranslateDemoView
      handleSourceLanguageChange={handleSourceLanguageChange}
      handleTargetLanguageChange={handleTargetLanguageChange}
      handleTextToConvertChange={handleTextToConvertChange}
      handleTranslate={handleTranslate}
      sourceLanguage={sourceLanguage}
      targetLanguage={targetLanguage}
      textToConvert={textToConvert}
      convertedText={convertedText}
      languages={languages}
    />
  );
}

export default GoogleTranslateDemoContainer;
