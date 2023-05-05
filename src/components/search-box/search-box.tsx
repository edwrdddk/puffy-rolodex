// import { Component } from "react";
import { ChangeEventHandler } from "react";
import "./search-box.css";

/* FUNCTIONAL COMPONENT TSX*/

// // How typing generaly works
// const name: string = 'poof'

// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// // Overload an interfase. Other option is extend. Lecture 200. U can not do it with the type, thats the difference beetwen the two.
// // Both r used to represent an object in TS.
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>; //type parameter (generic)
};

const SearchBox = (
  { className, placeholder, onChangeHandler }: SearchBoxProps //destructing props
) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

/* FUNCTIONAL COMPONENT JSX*/

// function SearchBox({ className, placeholder, onChangeHandler }) { //destructing props
//   return (
//     <input
//       className={`search-box ${className}`}
//       type='search'
//       placeholder={placeholder}
//       onChange={onChangeHandler}
//     />
//   )
// }

// export default SearchBox;

/* CLASS COMPONENT JSX*/

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type='search'
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }
