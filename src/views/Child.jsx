import React from 'react'

function Child(props) {

    console.log(props);
    

  return (
    <>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>Name state variable ki value inside card(parent to child):: {props.name}</p>
    </>
  )
}

export default Child