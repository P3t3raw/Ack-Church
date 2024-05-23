import React from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";
import "./Sermons.css";
export default function Sermons() {
  return (
    <div>
      <div className="sermonImagesWrapper">
        <div>
          <div className="sermonBgImage image1">
            <div className="sermonContent">
              <span>BY VEN:</span>
              <small>Gilbert Odhiambo</small>
              <button>
                {" "}
                <FaPlay /> Watch
              </button>
            </div>
          </div>
          <div className="sermonImgBottom">
            <span>Let the sunset inspire you</span>
            <small>MAY 12, 2024</small>
          </div>
        </div>
        <div>
          <div className="sermonBgImage image2">
            <div className="sermonContent">
              <span>BY EVANGELIST:</span>
              <small>Captain Peter</small>
              <button>
                {" "}
                <FaPlay /> Watch
              </button>
            </div>
          </div>
          <div className="sermonImgBottom">
            <span>Developing Spiritual Mentality</span>
            <small>MAY 5, 2024</small>
          </div>
        </div>
        <div>
          <div className="sermonBgImage image3">
            <div className="sermonContent">
              <span>BY REVEREND:</span>
              <small>Loice</small>
              <button>
                {" "}
                <FaPlay /> Watch
              </button>
            </div>
          </div>
          <div className="sermonImgBottom">
            <span>Let the Bible Motivate You</span>
            <small>APRIL 28, 2024</small>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <button className="sermonsBtn">
          {" "}
          <FaYoutube /> Watch More
        </button>
      </div>
    </div>
  );
}
