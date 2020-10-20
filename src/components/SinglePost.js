import React from 'react';
import Comments from './Comments';

const SinglePost = () => {
  return (
    <div>
      <h3 className='tag my-2 text-right'>GUIDE, LIFESTYLE</h3>
      <img
        src='https://static1.bmbfcluster.de/1/1/8/4_6077ddaa413435e/1184meg_e11d22113f60ffb.jpg'
        className='img-fluid rounded'
      />
      <h3 className='modal-title text-center pt-2 text-uppercase'>
        GUIDE, LIFESTYLE THE NO. 1 TRAVEL MISTAKE YOU’RE MAKING (AND 4 WAYS TO
        FIX IT)
      </h3>

      <p className='card-text text-center'>
        <small className='text-muted'>
          <i className='fa fa-user'></i> Ahmed | <i className='fa fa-clock'></i>{' '}
          Last updated 3 mins ago | <i className='fa fa-comments'></i> 23
        </small>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet,
        nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero
        dui eu lacus. Nam lobortis facilisis sapien non aliquet. Aenean ligula
        urna, vehicula placerat sodales vel, tempor et orci. Donec molestie
        metus a sagittis condimentum. Duis vulputate lectus massa, vel viverra
        sem interdum sit amet. In pulvinar arcu id nisi eleifend, in placerat
        velit tempor. Sed volutpat orci nec velit cursus posuere. Nulla congue
        mi sed enim venenatis, eu suscipit neque dictum. Integer nec eros nibh.
      </p>
      <h4 className='text-muted'>Vestibulum ante</h4>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Proin mattis, erat at ultrices aliquam, turpis nisi
        rutrum erat, eu finibus felis nisl ultricies mi. Aliquam quis interdum
        dui. Vivamus mattis bibendum dolor, vel varius ante facilisis at.
        Maecenas molestie vestibulum dui, vitae tempor massa mollis porta.
      </p>
      <h4 className='text-muted'>Etiam lorem</h4>
      <p>
        Nullam ipsum felis, euismod bibendum nunc nec, facilisis sagittis
        tortor. In tortor diam, commodo imperdiet risus eget, lacinia gravida
        ipsum. Etiam lorem sem, tempor vitae odio sit amet, porttitor sagittis
        massa. Aenean a diam nec orci malesuada convallis in a nisi. Nulla nulla
        orci, tincidunt ac malesuada et, gravida vitae leo.
      </p>

      <div className='g-5 my-5'>
        <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
          #DESIGN
        </span>
        <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
          #TECHNOLOGY
        </span>
        <span className='badge btn btn-secondary rounded-pill m-2 py-1 px-2'>
          #ACCOUNTING
        </span>
      </div>

      <div className='row mb-5'>
        <h5 className='text-muted mb-3'>Related Posts</h5> <hr />
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
      <Comments />
    </div>
  );
};

export default SinglePost;
