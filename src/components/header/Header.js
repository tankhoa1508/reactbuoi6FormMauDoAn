import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import { Button } from 'reactstrap';

export default function Header() {
  
  const {count, setCount} = useContext(AppContext);
  return (
    <div>
      header
      <h1>Count: {count}</h1>
      <Button onClick={()=>setCount(count +1)}>Count up</Button>
    </div>
  )
}
