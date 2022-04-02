import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { usePlaylist } from "../../../contexts/PlaylistContext";
import { postPlaylistHandler } from "../../../helperfunctions/playListHandler";
import "./playlistform.css";

export const PlaylistForm = () => {
  const { token } = useAuth();
  const { playListDispatch } = usePlaylist();
  const [playListTitle, setPlayListTitle] = useState({});

  return (
    <form
      onSubmit={(e) =>
        postPlaylistHandler(
          e,
          token,
          playListTitle,
          setPlayListTitle,
          playListDispatch
        )
      }
      className="playlist-form"
    >
      <input
        onChange={(e) => setPlayListTitle({ title: e.target.value })}
        className="playlist-input fs-md pd-sm"
        type="text"
        required
        maxLength={12}
        value={playListTitle.title}
        placeholder="Playlist..."
      />
      <button className="btn is-solid mg-vrtl-sm">CREATE</button>
    </form>
  );
};
