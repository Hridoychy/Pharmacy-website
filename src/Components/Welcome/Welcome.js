import React from 'react';
import pharmacist from '../../Images/Wellcome/wellcome .jpg'
import './Welcome.css'

const Welcome = () => {
    return (
        <div>
            <h2 className='fw-bold mt-5 mb-5'>Welcome  </h2>
            <p></p>
            <div className='welcome mt-5 mb-5 responsive'>
                <div >
                    <img src={pharmacist} alt="" />
                </div>
                <div className=''>
                    <div className=' text-center m-5 p-3' >
                        <h1 className='background m-3  '>Upload Your Prescription </h1>
                        <h1 className='background m-3 '>Find Doctor</h1>
                        <h1 className='background m-3'>24/7 Help Line
                        </h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Welcome;