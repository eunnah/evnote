import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout}) => (
	<section className="sidebar">
    <div className="sidebar-elephant-icon"><img src={window.elephantIconUrl} /></div>
    <div className="sidebar-new-icon"><img src={window.newIconUrl} /></div>
    <div className="sidebar-note-icon"><img src={window.noteIconUrl} /></div>
    <div className="sidebar-notebook-icon"><img src={window.notebookIconUrl} /></div>
    <div className="sidebar-tag-icon"><img src={window.tagIconUrl} /></div>
    <button className="header-button" onClick={logout}>Log Out</button>
	</section>
);

export default Sidebar;
