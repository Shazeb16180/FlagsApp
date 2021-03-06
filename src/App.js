import "./styles.css";
import { useState } from "react";
export default function App() {
  var emojiM = {
    "🇦🇷": "Argentina",
    "🇦🇺": "Australia",
    "🇧🇪": "Belgium",
    "🇧🇷": "Brasil",
    "🇪🇸": "Spain",
    "🇫🇷": "France",
    "🇦🇫": "Afghanistan",
    "🇧🇪": "Belgium",
    "🇨🇦": "Canada",
    "🇨🇭": "Switzerland",
    "🇵🇹": "Portugal",
    "🇶🇦": "Qatar",
    "🇹🇷": "Turkey",
    "🇺🇸": "United States of America",
    "🇾🇪": "Yemen",
    "🇧🇬": "Bulgaria",
    "🇦🇪": "United Arab Emirates",
    "🇧🇹": "Bhutan",
    "🇮🇳": "India"

  };
  var emojiList = Object.keys(emojiM);
  const [meaning, cMeaning] = useState("");
  function changeM(event) {
    var emoji = event.target.value;
    if (emoji in emojiM) {
      var meaning = emojiM[emoji];
    } else {
      meaning = "No Meaning Man";
    }
    cMeaning(meaning);
  }
  function getMeaning(item) {
    if (item in emojiM) {
      var meaning = emojiM[item];
    } else {
      meaning = "no Meaning";
    }
    cMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meanings</h1>
      <input onChange={changeM}></input>
      <h2>Country Name:{meaning}</h2>
      {emojiList.map(function (item) {
        return (
          <span
            key={item}
            style={{ padding: "0.5rem", cursor: "pointer", fontSize: "4rem" }}
            onClick={() => getMeaning(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
