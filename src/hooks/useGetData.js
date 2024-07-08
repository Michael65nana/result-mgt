import React, { useEffect, useState } from 'react'

const useGetData = () => {
    const [data, setData] = useState()
    // const fs = require(fs)
    console.log('so')
    // useEffect(() => {
    //     // setData(JSON.parse(fs.readFileSync('data.json')))
    //     // console.log(data)
    //     console.log('dds')
    //     fetch ('./src/data.json') 
    //       .then((response) => 
    //         response.json()
    //       )
    //       .then((json) => {
    //         setData(json)
    //         console.log(json)
    //       })
    //       .catch((error) => {
    //         console.log('error')
    //       })
    // }, [setData])
  return data
}

export default useGetData