import React from "react";
import PropTypes from "prop-types";


function Profile(props) {
    // const { user , handleName , children } = props 
    console.log(props)
const styleObject={ display:'flex', alignItems: 'center', margin: '50px', justifyContent: 'space-around'}

    return (
        <div>
            <div  style= {styleObject}>
                <div className="text">
                    <h1> fullName : {props.fullName} </h1>
                    <h1> formation : {props.formation} </h1>
                    <h1> profession : {props.profession} </h1>
                </div>
                {props.children}
            </div>
            <button onClick={() => props.handleName(props.fullName)}> Click Me </button>

        </div>
    )
};

Profile.defaultProps = {
    fullName: "you can call me flowers",
    formation: "learning js",
    profession: "learning web development",
}

Profile.propTypes = {
    fullName: PropTypes.string,
    formation: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};
export default Profile;