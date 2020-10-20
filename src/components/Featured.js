import React from 'react';

const Featured = () => {
  return (
    <div className='row mb-5'>
      <h5 className='text-muted mb-3'>Featured Posts</h5> <hr />
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div className='card my-3'>
          <img
            src='https://darbi.org/wp-content/uploads/2018/09/maxresdefault-49.jpg'
            alt='...'
            className='card-img'
          />
          <div className='card-body'>
            <span className='tag'>GUIDE, LIFESTYLE</span>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className='card-text'>
              <small className='text-muted'>
                <i className='fa fa-user'></i> Ahmed |{' '}
                <i className='fa fa-clock'></i> 3 mins ago |{' '}
                <i className='fa fa-comments'></i> 23
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div className='card my-3'>
          <img
            src='https://images.jdmagicbox.com/comp/def_content/treadmill-dealers/6-treadmill-dealers-5-9fob0.jpg?clr=#3d3d29'
            alt='...'
            className='card-img'
          />
          <div className='card-body'>
            <span className='tag'>GUIDE, LIFESTYLE</span>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className='card-text'>
              <small className='text-muted'>
                <i className='fa fa-user'></i> Ahmed |{' '}
                <i className='fa fa-clock'></i> 3 mins ago |{' '}
                <i className='fa fa-comments'></i> 23
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
        <div className='card my-3'>
          <img
            src='https://www.irishtimes.com/polopoly_fs/1.3144326.1499266095!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
            alt='...'
            className='card-img'
          />
          <div className='card-body'>
            <span className='tag'>GUIDE, LIFESTYLE</span>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className='card-text'>
              <small className='text-muted'>
                <i className='fa fa-user'></i> Ahmed |{' '}
                <i className='fa fa-clock'></i> 3 mins ago |{' '}
                <i className='fa fa-comments'></i> 23
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
