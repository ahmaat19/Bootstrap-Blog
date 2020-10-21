import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <h5 className='text-muted mb-3'>Meet the Author</h5> <hr />
      <div className='card'>
        <img
          src='https://img.freepik.com/free-photo/businessman-using-digital-tablet-while-colleague-background_107420-17056.jpg?size=626&ext=jpg'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <p className='card-text'>
            Gillion is a multi-concept WordPress theme that lets you create
            blog, magazine, news, review websites. With clean and functional
            design and lots of useful features theme will deliver amazing user
            experience to your clients and readers.
          </p>
          <a href='' className='btn btn-secondary rounded-lg'>
            learn more
          </a>
        </div>
      </div>
      <div className='mt-5'>
        <h5 className='text-muted'>Social Media</h5> <hr />
        <p>
          <div className='btn-group' role='group'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-google-plus'></i>
            <i className='fab fa-linkedin'></i>
          </div>
        </p>
      </div>
      <div className='mt-5'>
        <h5 className='text-muted'>Categories</h5> <hr />
        <p>
          <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              BUSINESS
              <span className='badge bg-secondary rounded-pill'>35</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              DESIGN
              <span className='badge bg-secondary rounded-pill'>9</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              LIFESTYLE
              <span className='badge bg-secondary rounded-pill'>6</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              MOTIVATION
              <span className='badge bg-secondary rounded-pill'>10</span>
            </li>
          </ul>
        </p>
      </div>
      <div className='mt-5'>
        <div className='card'>
          <img
            src='https://cdn.gillion.shufflehound.com/wp-content/uploads/sites/5/2017/07/AD.jpg'
            className='card-img-top'
            alt='...'
          />
        </div>
      </div>
      <div className='my-5'>
        <h5 className='text-muted'>Subscribe Now</h5> <hr />
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Your email address'
          />
          <span
            className='input-group-text btn btn-secondary'
            id='basic-addon2'
          >
            SIGNUP
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
