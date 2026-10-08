import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GetTest = () => {

    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        // axios-get 방식으로 요청 후 성공하면(then) setData로 데이터 저장

        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    })

  return (
    <div>
      
    </div>
  )
}

export default GetTest
