import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import { Button } from 'reactstrap';


export default function Footer() {
  const {count, setCount} = useContext(AppContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={()=>setCount(count +1)}>Count up</Button>
    </div>
  )
}
