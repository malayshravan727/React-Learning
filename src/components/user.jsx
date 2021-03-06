// const User = (props) => {
//     return (
//         <div>
//             <h1>
//                 {props.name}
//             </h1>
//             <h4>{props.description}</h4>
//         </div>
//     );
// };

// export default User;

// import React from "react";

// class User extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       planet: "earth",
//     };
//     console.log("Hey I'm from Constructor");
//   }

//   componentDidMount() {
//     this.setState({ planet: "jupiter" });
//   }

  // static getDerivedStateFromProps(prop, state) {
  //   console.log("I'm from get derived state from props");
  //   return { planet: "Jupiter" };
  // }

//   shouldComponentUpdate(nextProp, nextState) {
//     console.log("from shouldComponentUpdate");
//     console.log({
//       nextProp,
//       nextState,
//     });
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProp, prevState) {
//     console.log("from getSnapshotBeforeUpdate");
//     console.log({ prevProp, prevState });
//     return true;
//   }

//   componentDidUpdate() {
//     console.log(this.state);
//   }

//   render() {
//     console.log("Hey Im from render()");
//     return (
//       <div>
//         <h1> {this.props.name} </h1>
//         <p> {this.props.description} </p>
//         <h4>{this.state.planet}</h4>
//       </div>
//     );
//   }
// }

// export default User;

// state

import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  // componentDidMount
  useEffect(() => {
    // heavy computation
    console.log("component mounting");

    // componentWillUnMount
    return console.log("bye bye");
  }, []);

  // componentDidUpdate
  // shouldComponentUpdate
  useEffect(() => {
    console.log("Planet changes");
  }, [planet]);

  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.description} </p>
      <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
  );
};

export default User;

// state

// React 16

// Hooks -> power to you functional components

// ->  Life Cycle methods

// -> Hooks