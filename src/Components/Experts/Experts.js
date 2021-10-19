import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: 'https://cdn.osudpotro.com/products/uptech-go-adult-350ml-removebg-preview-1630148323568.webp',
        name: 'Uptech Go Adult 350ml',
        price: '450'
    },
    {
        img: 'https://cdn.osudpotro.com/products/main-file-1632378574849.webp',
        name: 'Aneroid Blood Pressure Kit - BP AG1-20',
        price: '1550'
    },
    {
        img: 'https://cdn.osudpotro.com/products/VISSCO-Anklet-1605619843839.webp',
        name: 'Vissco Anklet',
        price: '460'
    },
    {
        img: 'https://cdn.osudpotro.com/products/1604845365539-min-1625420528904.webp',
        name: 'Xtreme Ultra Thin',
        price: '70'
    },
    {
        img: 'https://cdn.osudpotro.com/products/1604845258909.png',
        name: 'Amore Gold',
        price: '100'
    },
]

const Experts = () => {
    return (
        <div className='container' id='Experts' >
            <h2 className='text-primary fw-bold'>Other Product</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;