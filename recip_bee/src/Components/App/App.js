import React from 'react';
import './App.css';

import RecipeList from '../RecipeList/RecipeList';
import SearchBar from '../SearchBar/SearchBar';

import edamam from '../../Utils/edamam';

class App extends React.Component {
  state = { recipes: [] };
 
  searchEdamam = async term => {
    const response = await edamam.get('/search', {
      params: { q: term }
    });
      this.setState({ recipes: response.data.hits });
    };  

  render() {
    return (
      <div className="App" >
        <h1>Recip-bee</h1>
        <SearchBar searchEdamam={this.searchEdamam} />
        <RecipeList recipes={this.state.recipes} />
      </div >
    );
  }
}

export default App;
