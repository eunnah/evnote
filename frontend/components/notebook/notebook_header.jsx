import React from 'react';
import { Link } from 'react-router-dom';

const NotebookHeader = ({notebook}) => (
	<div className="notebook-header">
		<div className="notebook-index-header-title">
    	<h2>{notebook.title}</h2>
		</div>
  </div>
);

export default NotebookHeader;
