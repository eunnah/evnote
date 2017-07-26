import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout}) => (
	<section className="sidebar">
    <div className="sidebar-elephant-icon"><img src={window.elephantIconUrl} /></div>
		<Link to={`/note/new-note`}><div className="circle-button" id="sidebar-new-icon"></div></Link>
    <div className="circle-button" id="sidebar-note-icon"></div>
    <div className="circle-button" id="sidebar-notebook-icon"></div>
    <div className="circle-button" id="sidebar-tag-icon"></div>
    <button className="header-button" onClick={logout}>Log Out</button>
	</section>
);

export default Sidebar;
