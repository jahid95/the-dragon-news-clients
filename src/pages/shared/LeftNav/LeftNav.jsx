import React, { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {
const [catagories, setCatagories] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/catagories')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
},[])

    return (
        <div>
            <h2>Right Nav</h2>
        </div>
    );
};

export default LeftNav;