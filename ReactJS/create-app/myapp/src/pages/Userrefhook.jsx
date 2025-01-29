import React, { useRef, useState } from 'react'

const Userrefhook = () => {
    const userref = useRef(null);
    const emailref = useRef(null);
    const [getvalue,SetValue] = useState("");
    function changevalue(){
        SetValue(userref.current.value)
    }
    return (
        <>
        <h1 className='my-5'>{getvalue}</h1>
        <input type="text" name="" ref={useRef} onChange={changevalue} /> {emailref}
        </>
  )
}

export default Userrefhook