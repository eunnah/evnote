import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout}) => (
	<section className="sidebar">
    <div className="sidebar-elephant-icon"><img src={window.elephantIconUrl} /></div>
		<Link to={`/home/new-note`}><div className="circle-button" id="sidebar-new-icon"></div></Link>
    <Link to={`/home`}><div className="circle-button" id="sidebar-note-icon"></div></Link>
    <Link to={`/home/notebook`}><div className="circle-button" id="sidebar-notebook-icon"></div></Link>
    <div className="circle-button" id="sidebar-tag-icon"></div>
    <div className="circle-button" id="sidebar-logout-icon" onClick={logout}></div>
	</section>
);

export default Sidebar;
