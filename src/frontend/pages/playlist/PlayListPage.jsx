import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/componentExport";
import { PlaylistModal } from "../../components/playlistmodal/PlaylistModal";
import { useAuth, usePlaylist } from "../../contexts/contextExport";
import { PlaylistCard } from "./components/playlistcard/PlaylistCard";
import "./playlistpage.css";

export const PlayListPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const {
    showModal,
    playListState: { playLists },
  } = usePlaylist();

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  console.log("playlists ", playLists);

  return (
    <>
      <section className="main-container">
        <Sidebar />
        {showModal && <PlaylistModal />}
        <div className="content-area flex-dir-row">
          <div className="video-grid">
            {playLists?.length >= 1 ? (
              playLists?.map((item, index) => (
                <PlaylistCard key={index} playListItem={item} />
              ))
            ) : (
              <div className="empty-div">
                <p className="fs-lg">Empty playlist</p>
                <Link to="/videolist" className="btn is-solid fs-btw-ml">
                  Go to Watch Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
