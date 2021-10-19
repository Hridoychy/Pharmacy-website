
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Booking = () => {


    const { serviceId } = useParams();

    // let services = fakeData;

    const [services, setServices] = useState([])
    const [serviceDetails, setServiceDetails] = useState("");

    useEffect(() => {
        fetch('../Services.json')
            .then(res => res.json())
            .then(data => setServices(data));

        let selectedService = services.find(service => service.id === parseInt(serviceId))
        setServiceDetails(selectedService);
    }, [serviceId, services])


    return (
        <div className="details">

            <h3>Service Id:{serviceId}</h3>
            <h2>{serviceDetails?.name}</h2>
            <img src={serviceDetails?.img} alt="hi" />
            <p>{serviceDetails?.group}</p>


        </div>
    );
};

export default Booking;