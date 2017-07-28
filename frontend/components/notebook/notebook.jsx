import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Notebook extends Component {

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const { notebooks } = this.props;
    if (!notebooks) return null;

    return (
      <section className="notebook">
        <div className="notebook-header">
        	<div className="notebook-header-title"><h3>NOTEBOOKS</h3></div>
          <Link to="/home/new-notebook"><div className="add-notebook-icon"></div></Link>
        </div>
        <div className="notebook-item-list">
        <ul>
          {notebooks.map(notebook => (
            <Link to={`/home/notebook/${notebook.id}`}><li className="notebook-item">
              <h4 className="notebook-item-title">{notebook.title}</h4></li></Link>
          ))}
        </ul>
        </div>
      </section>
    );
  }
}

export default Notebook;
