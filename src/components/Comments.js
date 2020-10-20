import React from 'react';

const Comments = () => {
  return (
    <div className='row'>
      <h4 className='text-muted mb-3'>Leave Reply</h4>

      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Email address
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Email address
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Email address
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
      </div>
      <div className='col-12 text-muted'>
        <div class='mb-3'>
          <label for='exampleFormControlTextarea1' class='form-label'>
            Your Comment
          </label>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Comments;
