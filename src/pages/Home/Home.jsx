import "./Home.css";
import BgImage from "../../assets/church1.jpg";
import Bg2 from ".././../assets/pexels-jibarofoto-2014775.jpg";
import Bg3 from ".././../assets/church3.jpg";
import BgBible2 from "../../assets/bible2.jpg";
import vicorImage from "../../assets/priest.jpg";
import { useEffect, useRef, useState } from "react";
import Announcements from "../../components/Announcements/Announcements";
import Events from "../../components/Events/Events";
import Sermons from "../../components/Sermons/Sermons";
import Reveal from "../../utils/Reveal";

function Home() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isVerseVisible, setIsVerseVisible] = useState(false);
  const [isContentAnimationStarted, setIsContentAnimationStarted] =
    useState(false);
  const [isBibleAnimationStarted, setIsBibleAnimationStarted] = useState(false);

  const contentRef = useRef(null);
  const bibleRef = useRef(null);

  useEffect(() => {
    // Set an interval to toggle state every 6 seconds
    const interval = setInterval(() => {
      setIsContentVisible((prevState) => !prevState);
      setIsVerseVisible((prevState) => !prevState);
    }, 6000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isContentAnimationStarted && entry.isIntersecting) {
            setIsContentAnimationStarted(true);
            entry.target.classList.add("content-visible");
          } else {
            entry.target.classList.remove("content-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const bibleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isBibleAnimationStarted && entry.isIntersecting) {
            setIsBibleAnimationStarted(true);
            entry.target.classList.add("content-visible");
          } else {
            entry.target.classList.remove("content-visible");
          }
        });
      },
      { threshold: 0.7 }
    );

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }
    if (bibleRef.current) {
      bibleObserver.observe(bibleRef.current);
    }

    // Clean up observers
    return () => {
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
      if (bibleRef.current) {
        bibleObserver.unobserve(bibleRef.current);
      }
    };
  }, [isContentAnimationStarted, isBibleAnimationStarted]);

  return (
    <main>
      <div className="background">
        <div className="overlay"></div>
        <img src={BgImage} alt="background" className="bgImage" />
        <img src={Bg2} alt="background" className="bgImage" />
        <img src={Bg3} alt="background" className="bgImage" />
        <div className="content" ref={contentRef}>
          <p className="text">
            <span className="whiteLine"></span>
            <span className="textPrimary">
              <b>Theme of the Year 2024</b>
            </span>
            <span className="whiteLine"></span>
          </p>
          <div>
            {
              <h1
                className={`animate ${
                  isContentAnimationStarted ? "content-visible" : ""
                }`}
              >
                THE YEAR OF OPEN DOORS AND DIVINE SPEED
              </h1>
            }
            {/*isVerseVisible && (
              <p className="banner">
                HE WHO IS HOLY, HE WHO IS TRUE... HE WHO HAS THE KEY ... <br />
                HE WHO OPENS & NO ONE SHUTS... SHUTS & NO ONE OPENS... <br /> I
                HAVE SET BEFORE YOU AN OPEN DOOR & NO ONE CAN SHUT IT...
              </p>
            )*/}
          </div>
          <p className="bannerText"></p>
          <button className="btn">Be part of us</button>
        </div>
      </div>
      <Reveal>
        <div className="midSection">
          <div className="weekQuote">
            {<img src={vicorImage} alt="Bible image" className="bgBible" />}
            <div className="quoteText">
              <h3>Quote of the week</h3>
              <p>
                ❝ Do the right thing at the right place at the right time and
                your future will be free from regrets ❞
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="events">
          <div className="servicesTop">
            <p className="text">
              <span className="greyLine"></span>
              <span className="textPrimary">Events</span>
              <span className="greyLine"></span>
            </p>
            <h1>Upcoming Events</h1>
          </div>
          <Events />
        </div>
      </Reveal>
      <Reveal>
        <div className="announcements">
          <div className="servicesTop">
            <p className="text">
              <span className="greyLine"></span>
              <span className="textPrimary">Announcements</span>
              <span className="greyLine"></span>
            </p>
            <h1>Important Announcements</h1>
          </div>
          <Announcements />
          <div className="eventsWrapper"></div>
        </div>
      </Reveal>
      <Reveal>
        <div className="sermonsSection">
          <div className="servicesTop">
            <p className="text">
              <span className="greyLine"></span>
              <span className="textPrimary" style={{ color: "grey" }}>
                Sermons
              </span>
              <span className="greyLine"></span>
            </p>
            <h1 style={{ fontSize: "40px" }}>Church Sermons</h1>
            <p style={{ color: "grey" }}></p>
          </div>
          <Sermons />
        </div>
      </Reveal>
      <Reveal>
        <div className="contact">
          <h1>Do you need Counselling, Prayer...</h1>
          <p>
            Reach out to us now for assistance on your journey to emotional and
            spiritual well-being.
          </p>
          <p style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
            <span>
              Call or message us at:{" "}
              <small style={{ color: "blue", fontSize: "16px" }}>
                0700001111
              </small>{" "}
            </span>
            <span>
              Facebook us at:{" "}
              <small
                style={{ color: "blue", fontSize: "16px", cursor: "pointer" }}
              >
                stpetersackchurch.facebook.com
              </small>{" "}
            </span>
          </p>
        </div>
      </Reveal>
    </main>
  );
}

export default Home;
