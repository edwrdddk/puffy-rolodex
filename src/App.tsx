// import { Component } from 'react';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import { getData } from './utils/fetch.data';
import './App.css';
import { ChangeEvent } from 'react';

export type Monster = {
  id: string;
  name: string;
  website: string;
}

function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
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




