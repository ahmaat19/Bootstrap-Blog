import React from 'react';

const Comments = () => {
  return (
    <>
      <div className='row text-muted my-5 comment-body'>
        <h4 className='text-muted mb-3'>Leave Reply</h4>

        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div class='mb-3'>
            <label class='form-label'>Name*</label>
            <input type='text' class='form-control shadow-none' />
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div class='mb-3'>
            <label class='form-label'>Email*</label>
            <input type='email' class='form-control shadow-none' />
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
          <div class='mb-3'>
            <label class='form-label'>Website</label>
            <input type='text' class='form-control shadow-none' />
          </div>
        </div>
        <div className='col-12 '>
          <div class='mb-3'>
            <label for='exampleFormControlTextarea1' class='form-label'>
              Your Comment
            </label>
            <textarea
              class='form-control shadow-none'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
        </div>
        <button class='btn btn-secondary'>Submit</button>
      </div>
      <div class='row my-4'>
        <div class='col-12'>
          <h4 className='text-muted mb-3'>1 Comments</h4>
          <div class='comment-card'>
            <img
              src='https://png.pngtree.com/svg/20161027/631929649c.svg'
              className='comment-avatar'
            />
            <p>
              <div className='font-weight-bold'>Mohamed Ali</div>
              <small className='text-muted'>
                <i className='fa fa-clock'></i> 35 mins ago |{' '}
                <i className='fa fa-trash'></i> Delete
              </small>
              <p>
                Morbi erat orci, malesuada sed pulvinar in, dictum et risus.
                Aliquam erat volutpat. Nam eros lectus, tempor quis condimentum
                nec, viverra ac mi. Vivamus id ex sed quam egestas euismod a sit
                amet dolor. Mauris elementum odio a nibh congue suscipit.
              </p>
            </p>
          </div>
        </div>
        <div class='col-12'>
          <div class='comment-card'>
            <img
              src='https://png.pngtree.com/svg/20161027/631929649c.svg'
              className='comment-avatar'
            />
            <p>
              <div className='font-weight-bold'>Charless Juan</div>
              <small className='text-muted'>
                <i className='fa fa-clock'></i> 2 hrs ago |{' '}
                <i className='fa fa-trash'></i> Delete
              </small>
              <p>
                Nullam ipsum felis, euismod bibendum nunc nec, facilisis
                sagittis tortor. In tortor diam, commodo imperdiet risus eget,
                lacinia gravida ipsum. Etiam lorem sem, tempor vitae odio sit
                amet, porttitor sagittis massa. Aenean a diam nec orci malesuada
                convallis in a nisi. Nulla nulla orci, tincidunt ac malesuada
                et, gravida vitae leo.
              </p>
            </p>
          </div>
        </div>
        <div class='col-12'>
          <div class='comment-card'>
            <img
              src='https://png.pngtree.com/svg/20161027/631929649c.svg'
              className='comment-avatar'
            />
            <p>
              <div className='font-weight-bold'>Sundus Jama</div>
              <small className='text-muted'>
                <i className='fa fa-clock'></i> 2 days ago |{' '}
                <i className='fa fa-trash'></i> Delete
              </small>
              <p>Love your work! Inspirational..</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
