import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../product/Product';
import { Container, Row } from 'reactstrap';
export default function Products() {
  const [data,setData]=useState([])
useEffect(()=>{
  fetchData();
},[])
const url="https://66a077917053166bcabb8106.mockapi.io/student"
const fetchData =()=>{
  axios.get(url)
  .then(function(res){
      setData(res.data)
  })
  .catch(function(error){
    console.log(error)
  })
}
  return (
    <div>
      Products
      <Container>
      <Row>
       {
          data.map((item,index)=>(
            <Product key={index} product={item} />
          ))
       }
        </Row>
        </Container>
    </div>
  )
}
