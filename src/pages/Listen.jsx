import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import audio from "../assets/fake-data/audio";
import { Image, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import CafeArt from "../components/CafeArt";
import { Link } from "react-router-dom";
function Listen(props) {
  console.log(props.location);
  const path =
    props.location.state === undefined ? "" : props.location.state.post_name;
  const [per, setPer] = useState(path === "thanhthanh" ? 0 : 1);
  const [audioPass, setAudioPass] = useState(0);
  const [timeChange, setTimeChange] = useState(false);

  const currentSong = [...audio];
  console.log(currentSong);

  const changeAudio = () => {
    if (per === 0) {
      setPer(1);
    } else {
      setPer(0);
    }
    setTimeChange(false);
    setAudioPass(audioPass + 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeChange(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [timeChange]);
  return (
    <div>
      <div className="player-container">
        <br />
        {audioPass >= 2 && (
          <>
            <Button className="btn-more" style={{ justifyItems: "left" }}>
              <Link to="/pick">Di chuyển đê !</Link>
            </Button>{" "}
            <br /> <br />
          </>
        )}
        <Image src={currentSong[per].cover}></Image>
        <div className="artist-info">
          <h2 className="artist-name">{currentSong[per].artist}</h2>
          <h3 className="artist-song-name">{currentSong[per].tell}</h3>
        </div>
        <div className="icon-change" style={{ background: "blue" }}>
          <Link onClick={changeAudio}>
            {timeChange && (
              <CafeArt
                name={per === 1 ? currentSong[0].name : currentSong[1].name}
                pass={audioPass}
              />
            )}
          </Link>
        </div>
        <AudioPlayer
          autoPlay
          src={currentSong[per].audio}
          onPlay={(e) => console.log("onPlay")}
        />
      </div>{" "}
    </div>
  );
}

Listen.propTypes = { name: PropTypes.string };

export default Listen;
