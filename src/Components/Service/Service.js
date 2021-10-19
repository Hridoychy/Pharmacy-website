import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { img, id, name, price, mg, group } = props.services;
    return (



        <div className=''>
            <div className='service pb-3 m-3 p-3 backgroundColor ' >

                <div className='cart'>
                    <img src={img} alt="" />
                    <p>id:{id}</p>
                    <h3>Name:{name}</h3>
                    <h4>price:{price}</h4>
                    <h4>Mg:{mg}</h4>
                    <p>Group:{group}</p>
                </div>


                <Link to={`/booking/${id}`}>
                    <button className='btn-primary'>Buy: {name.toLowerCase()}</button>
                </Link>

            </div>

        </div>

    );
};

export default Service;