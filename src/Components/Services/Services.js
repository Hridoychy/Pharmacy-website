import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='Service'>
            <div className='mt-5' id='Services'>

                <h1>Products</h1>

                <div className='service-container '>

                    {
                        services.map(services => <Service key={services.id} services={services}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;