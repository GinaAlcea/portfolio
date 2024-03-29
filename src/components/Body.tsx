import React from 'react'

interface Props {
  name: string
  age: number
  height?: number
}

const Body = ({ name, age }: Props) => {
  return (
    <>
      <div>Name : {name}</div>
      <div>Age : {age}</div>
    </>
  )
}

export default Body
