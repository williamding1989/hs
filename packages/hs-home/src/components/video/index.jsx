import { useEffect, useRef, useState } from "react";
import play from "../../assets/play.png";
import "./index.less";
import pause from "../../assets/pause.png";

/**
 * 视频组件
 * @param {string}  src 视频地址
 * @param {string} poster 封面图
 * @param {string} playbtn 播放按钮杨师
 *
 */
const HsVideo = ({ src, poster, playbtn }) => {
  const vdo = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ctr, setCtr] = useState(false);

  // 播放视频
  const playVideo = () => {
    // 暂停
    if (isPlaying) {
      vdo.current.pause();
      setCtr(false);
      return setIsPlaying(false);
    }

    // 播放
    vdo.current.play();
    setIsPlaying(true);
    setCtr(true);
  };

  if (!src) return null;

  return (
    <div className="Hsvideo videocontainer">
      {isPlaying ? null : (
        <img src={playbtn || play} className="play" onClick={playVideo}></img>
      )}
      <video poster={poster} ref={vdo} controls={ctr}>
        <source src={src} type="video/mp4"></source>
        <source src={src} type="video/ogg"></source>
      </video>
    </div>
  );
};

export default HsVideo;
