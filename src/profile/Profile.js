import React from "react";


function Profile(props  ) {
    // const { user , handleName , children } = props 
    console.log(props)

    return (
        <div>
            <div className="position">
            <div className="text">
            <h1> fullName : {props.user.fullName} </h1>
            <h1> formation : {props.user.formation} </h1>
            <h1> profession : {props.user.profession} </h1>
            </div>
             {props.children}
            </div>
            <button onClick={() => props.handleName(props.user.fullName)}> Click Me </button> 
             
        </div>
    )
}

export default Profile;