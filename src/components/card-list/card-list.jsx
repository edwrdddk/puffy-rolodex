// import { Component } from 'react';
import './card-list.css';
import Card from '../card/card';

function CardList(props) {

    const { monsters } = props; //destructuring in case u'll forget.
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
        )})}
      </div>
    )
  
}



/* CLASS COMPONENT */

// class CardList extends Component {
//   render() {

//     const { monsters } = this.props; //destructuring in case u'll forget.
//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           {/* const {name, website, id } = monster; */}
//           return (
//             <Card monster={monster} />
//         )})}
//       </div>
//     )
//   }
// }

export default CardList;


