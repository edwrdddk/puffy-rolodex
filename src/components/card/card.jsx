// import { Component } from "react";
import './card.css';

function Card(props) {
  const { id, name, website } = props.monster;
  return (
    <div className='card-container' key={id}>
      <img src={process.env.PUBLIC_URL + '/imges/puf' + id + '.png'} alt={`monster ${name}`} className='puffy-img' />
      <h2>{name}</h2>
      <p>{website}</p>
    </div>
  )
}

export default Card;



/* CLASS COMPONENT */

// class Card extends Component {
//   render() {
//     const { id, name, website } = this.props.monster;
//     return (
//       <div className='card-container' key={id}>
//         <img src={'imges/puf' + id + '.png'} alt={`monster ${name}`} className='puffy-img' />
//         <h2>{name}</h2>
//         <p>{website}</p>
//       </div>
//     )
//   }
// }
