import React from "react";
import "./noteform.css";

export const NoteForm = () => {
  return (
    <div className="notes-main">
      <form className="note-form">
        <p className="mg-vrtl-md fs-lg">Notes</p>
        <input
          required
          type="text"
          placeholder="Title"
          className="input-primary pd-sm fs-btn bd-3"
        />
        <textarea
          required
          placeholder="Description"
          name="note"
          id="2"
          className="input-primary pd-sm bd-3 fs-md mg-top"
        ></textarea>
        <div>
          <button className="btn is-solid ">Save</button>
          <button className="btn is-primary is-outline ">Discard</button>
        </div>
      </form>
    </div>
  );
};
