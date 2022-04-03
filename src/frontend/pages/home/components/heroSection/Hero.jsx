import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Bookhero from "../../../../images/Bookhero.svg";
import { useDataStore } from "../../../../contexts/DataStoreContext";

export const Hero = () => {
  const { toastProps } = useDataStore();

  return (
    <section className="mg-xlg pd-md">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-heading fs-xlg">
            Watch ,relate and apply book thoughts in your life.
          </h1>
          <p className="hero-quote">
            Don't have time to read books then watch books summary only on{" "}
            <span className="highlight-text">vFrame</span>.
          </p>
          <Link to="/videolist">
            <button
              onClick={() => toast.success("Welcome to vFrame", toastProps)}
              className="btn is-solid fs-lg bd-3 mg-vrtl-xlg"
            >
              Watch Now
            </button>
          </Link>
        </div>
        <img src={Bookhero} alt="hero picture" className="image" />
      </div>
    </section>
  );
};
