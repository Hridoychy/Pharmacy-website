import React from 'react';
import './Blog.css'




const Blog = () => {

    return (
        <div id='Blog'>
            <h1 className='bg-dark p-5'> <h2 className='text-primary fw-bold'>Our Client Says</h2></h1>

            <div className='bloging'>
                {/* bloging */}
                <div className='border border-successg m-3 '>

                    <p>Pharmacists are required to deliver and receive feedback in a variety of formal and informal contexts. This may be as part of an appraisal or assessment; a particular aspect of work, such as punctuality, behaviour towards colleagues or patients; or on a presentation or manuscript. Pharmacists may also be required to deliver feedback to other healthcare professionals — for example, if a doctor has prescribed something inappropriately[5], is not acting on medication-related jobs, or repeatedly sends discharges late to the pharmacy..</p>

                </div>
                <div className='border border-successg m-3 '>

                    <p>"You successfully combine efficiency with excellent customer service."
                        "Every time they've been friendly, quick, and awesome."
                        "Everything!"
                        "Friendly staff!"
                        "The people - they are the best."
                        "Very friendly atmosphere"
                        "It's fast."
                        "Everybody is very friendly and helpful!"
                        "Awesome staff!!"
                        "I love the caring personal service at Parkhurst. I've never had such a good experience at a big chain drugstore!"</p>
                </div>
                <div className='border border-successg m-3 '>

                    <p>Everybody is friendly and does a good job. I've been using this pharmacy for 20 years and they have done excellent work since day 1! Keep up the good work!"
                        "I'm always greeted with a friendly smile. I love how they keep the drive-through flowing - if somebody's waiting for a prescription, they have them drive around! "
                        "The service! Unlike chain pharmacies, I feel like the most important customer Parkhurst has, as does every customer. When I have had questions regarding my prescription, or over-the-counter drugs, I have always received a fast, helpful answer.".</p>
                </div>
                <div className='border border-successg m-3 '>
                    <p>Fast and friendly"
                        "Excellent; always friendly; ready when you go to pickup; no waiting"
                        "Very personable!"</p>
                </div>

            </div>

        </div>
    );
};

export default Blog;