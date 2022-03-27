import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { useAuth } from "../../contexts/contextExport";
import "./watchlaterpage.css";

export const WatchLaterPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);
  return (
    <>
      <section className="main-container">
        <Sidebar />
        <h1>watch later Page</h1>
      </section>
    </>
  );
};
