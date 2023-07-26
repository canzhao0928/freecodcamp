import { useState } from "react";
import Clip from "../Clip";
export default function Drum() {
  const clips = [
    {
      id: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const [clip, setClip] = useState("");
  return (
    <div className="container" id="drum-machine">
      <div id="display">{clip}</div>
      {clips.map((clip, index) => (
        <Clip id={clip.id} url={clip.url} setState={setClip} key={index} />
      ))}
    </div>
  );
}
