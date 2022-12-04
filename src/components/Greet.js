import React from 'react'

// create function
// function Greeet() {
//     return <h1> Helo wandie function</h1>
// }

 const Greet = (props) => {
     const {name,age} = props
    //  console.log(props)
     return(
        <div>

    <h1>Hello :{name}</h1>
    <h1>AGE : {age}</h1>
    {/* {props.children} */}

        </div>
     )
 }


// export component
export default Greet
