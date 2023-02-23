import React, { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import './Footer.css';

const Footer = () => {
  const [mute, setMute] = useState(true);
  const [cam, setCam] = useState(true);
  const [record, setRecord] = useState(false);

  const handleMic = () => {
    mute === true ? setMute(false) : setMute(true);
  };
  const handleCam = () => {
    cam === true ? setCam(false) : setCam(true);
  };
  const handleRecord = () => {
    setRecord(!record);
  };



  return (
    <div className="outline-footer">
      <footer className="footer-list">
        <div className="left-icons">
          <button onClick={handleMic} className="on-off">
            {!mute ? <MicIcon /> : <MicOffIcon />}
          </button>

          <button onClick={handleCam} className="on-off">
            {!cam ? <VideocamIcon /> : <VideocamOffIcon />}
          </button>

          <RadioButtonCheckedIcon
            onClick={handleRecord}
            className="on-off"
            style={{ color: record ? "red" : "white" }}
          />
        </div>
        <div className="right-icons">
          <CallEndIcon className="endcall" />
          <MoreHorizIcon/>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
