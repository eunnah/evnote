import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteIndexHeader from './note_index_header';
import NoteIndexItem from './note_index_item';

class NoteIndex extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      loading ?
      <LoadingIcon /> :
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>

        <Route exact path="/" component={PokemonFormContainer} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </section>
    );
  }
}

export default PokemonIndex;
