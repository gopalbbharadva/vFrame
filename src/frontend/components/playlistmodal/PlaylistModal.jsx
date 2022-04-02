import React, { useState } from "react";
import { PlaylistForm } from "./playlistform/PlaylistForm";
import { PlaylistItem } from "./playlistitem/PlaylistItem";
import { VscClose } from "react-icons/vsc";
import "./playlistmodal.css";

export const PlaylistModal = ({ playListVideo, setShowModal, modalRef }) => {
  const [showPlaylistForm, setShowPlaylistForm] = useState(false);

  return (
    <div className="modal-container flex-center">
      <div ref={modalRef} className="modal pd-hztl-md">
        <div className="modal-header pd-vrtl-md">
          <p className="fs-btw-ml">Save to...</p>
          <button
            onClick={() => setShowModal(false)}
            className="bg-transparent"
          >
            <VscClose className="fs-lg" />
          </button>
        </div>
        <PlaylistItem playListVideo={playListVideo} />
        {!showPlaylistForm ? (
          <div className="create-btn">
            <button
              className="bg-transparent pd-vrtl-md fs-btw-ml"
              onClick={() => setShowPlaylistForm(true)}
            >
              + Create Playlist
            </button>
          </div>
        ) : (
          <PlaylistForm />
        )}
      </div>
    </div>
  );
};
