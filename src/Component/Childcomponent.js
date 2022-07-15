import React from 'react'

function Childcomponent(props) {
    return ( 
        < button onClick = {() => props.greetMethod("Child")} > Greet </button>

    );
}

export default Childcomponent;