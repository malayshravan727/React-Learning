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

import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet:"earth",
        };
    console.log("Hey Im from constructor()");
    }
    componentDidMount() {
        this.setState({planet: "Mars"});
    }
    render() {
        console.log("Hey Im from render()");
        //view
        //logic
       return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            <h4>{this.state.planet}</h4>
        </div>
       );
    }
}

export default User;