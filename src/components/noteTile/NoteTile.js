import { hover } from '@testing-library/user-event/dist/hover';
import { useEffect, useState } from 'react';
import { Folder } from 'react-ionicons';
import './NoteTile.css';
const NoteTile = ({ noteData, isActive, onClick, index }) => {
  const note = noteData;
  return (
    <div
      className="noteTileBg"
      onClick={() => {
        onClick(note, index);
      }}
      style={isActive?{backgroundColor:"#201616"}:{backgroundColor: "#1D1212"}}
    >
      <div>
        <Folder color={isActive ? '#6EC8A5' : '#4E7F6A'} height="1.5em" width="1.5em" />
      </div>
      <div className="text" style={isActive?{ color: "#FFFFFF" }:{color: "#A5A0A0"}}>
        {note.title}
      </div>
    </div>
  );
};
export default NoteTile;
