// import { Component } from "react";
import { Monster } from '../../App';
import './card.css';

type CardProps = {
  monster: Monster;
}

const Card = ({ monster } : CardProps) => {
  const { id, name, website } = monster;
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
