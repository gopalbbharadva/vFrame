import React from "react";
import "./channelavatar.css";

export const ChannelAvatar = ({ channelImg }) => {
  return (
    <>
      <img className="channel-avatar" src={channelImg} alt="channel profile" />
    </>
  );
};
