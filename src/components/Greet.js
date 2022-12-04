import React from 'react'

// create function
// function Greeet() {
//     return <h1> Helo wandie function</h1>
// }

 const Greet = (props) => {
     console.log(props)
     return(
        <div>

    <h1>Hello {props.name}</h1>
    <h1>AGE {props.age}</h1>
    {props.children}

        </div>
     )
 }


// export component
export default Greet
