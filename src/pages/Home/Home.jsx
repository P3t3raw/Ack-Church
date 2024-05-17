import "./Home.css";
import BgImage from "../../assets/pexels-pixabay-372326.jpg";
import Bg2 from '.././../assets/bg2.jpg'
import Bg3 from '.././../assets/bg3.jpg'
import BgBible2 from "../../assets/bible2.jpg";
import { useEffect, useRef, useState } from "react";
import Announcements from "../../components/Announcements/Announcements";
import Events from "../../components/Events/Events";
import Sermons from "../../components/Sermons/Sermons";
import Reveal from "../../utils/Reveal";

function Home() {
  // const [verse, setVerse] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isVerseVisible, setIsVerseVisible] = useState(false);
  const [isContentAnimationStarted, setIsContentAnimationStarted] =
    useState(false);
  const [isBibleAnimationStarted, setIsBibleAnimationStarted] = useState(false);

  const contentRef = useRef(null);
  const bibleRef = useRef(null);

  // const toggleVerse = () => {
  //   setVerse(!verse); // Toggle the value of verse (from true to false or from false to true)
  // };

  useEffect(() => {
    // Example: Toggle verse state after 3 seconds when the component mounts
    const timeout = setTimeout(() => {
      setIsContentVisible((prevState) => !prevState);
      setIsVerseVisible((prevState) => !prevState);
      // Set verse to true after 3 seconds
    }, 6000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
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
            {isContentVisible && (
              <h1
                className={`animate ${
                  isContentAnimationStarted ? "content-visible" : ""
                }`}
              >
                THE YEAR OF OPEN DOORS AND DIVINE SPEED
              </h1>
            )}
            {/* {isVerseVisible && <p className="banner">He who..</p>} */}
          </div>
          <p className="bannerText"></p>
          <button className="btn">Be part of us</button>
        </div>
      </div>
      <Reveal>
      <div className="midSection">
        <div className="overlay2"></div>
        <img src={BgBible2} alt="Bible image" className="bgBible" />
        <div className="weekQuote">
          <h3>Quote of the week</h3>
          <p>
            ❝ Do the right thing at the right place at the right time and your
            future will be free from regrets ❞
          </p>
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
