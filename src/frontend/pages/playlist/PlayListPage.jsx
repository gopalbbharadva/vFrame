import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { useAuth } from "../../contexts/contextExport";
import "./playlistpage.css";

export const PlayListPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  console.log("playlist page", isLoggedIn);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
      <section className="main-container">
        <Sidebar />
        <h1>PlayListPage</h1>
      </section>
    </>
  );
};
