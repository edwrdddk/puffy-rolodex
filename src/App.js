// import { Component } from 'react';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='puffy-title'>Puffy Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search puffs'
        className='monster-search-box'
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

export default App;


/* CLASS COMPONENT */

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//     // console.log('constructor(1)');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount(3)');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users }
//         }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState(() => {
//       return { searchField } //key and value same (rememver that ES6 thing).
//     })
//   }

//   render() {
//     // console.log('render(2)');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='puffy-title'>Puffy Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='search puffs'
//           className='monster-search-box'
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }




