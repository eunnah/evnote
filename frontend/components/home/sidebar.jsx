import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout}) => (
	<section className="sidebar">
    <div className="sidebar-elephant-icon"><img src={window.elephantIconUrl} /></div>
		<Link to={`/note/new-note`}><div className="sidebar-new-icon">Add New Note</div></Link>
    <div className="sidebar-note-icon"></div>
    <div className="sidebar-notebook-icon"></div>
    <div className="sidebar-tag-icon"></div>
    <button className="header-button" onClick={logout}>Log Out</button>
	</section>
);

export default Sidebar;
