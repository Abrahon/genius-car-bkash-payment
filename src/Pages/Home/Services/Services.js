import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState([])
    const searchRef = useRef();
    // console.log(isAsc);
    useEffect(()=>{
        fetch(`http://localhost:5000/services?order=${ isAsc ? 'asc' : 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[isAsc]);
    const handleSearch = ()=>{
        console.log(useRef); 

    }

    return (
        <div className='mb-4'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold">Our service area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
                <input className='input input-sm' ref={searchRef} type="text" />
                <button className={handleSearch}>Search</button>
               
                <button className='btn btn-ghost' onClick={()=>setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
             
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)

                }
            </div>
        </div>
    );
};

export default Services;