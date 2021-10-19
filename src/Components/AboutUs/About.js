import React from 'react';
import './About.css'

const About = () => {
  return (
    <div id='About' className='About-us'>

      <div className='bg-secondary text-white'>
        <h1 className='bg-light
         p-5'><h2 className='text-primary fw-bold'>About Us:</h2></h1>

        <h1><u>Contact US:</u></h1>
        <h1>maa pharma </h1>
        <h3>Email:maa pharma@gmail.com</h3>
        <h3>Fax:+44 870 022 3792</h3>
      </div>


      <form class="row g-3 container mt-5">
        {/* form use */}
        <h1 className='text-success'>Give your Message :</h1>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Name</label>
          <input type="name" class="form-control" id="inputEmail4" placeholder='name' />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">message</label>
          <input type="text" class="form-control" id="text" placeholder="say some thing" />
        </div>

        {/* button use */}
        <div class="col-12">
          <button type="submit" class="btn btn-primary bg-dark">Send</button>
        </div>
      </form>
    </div>
  );
};

export default About;