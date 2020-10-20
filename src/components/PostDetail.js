import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';
import Spinner from './Spinner';

const PostDetail = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
      <div className='row mt-5'>
        <div className='col-lg-9  col-12'>
          <SinglePost />
        </div>
        <div className='col-lg-3  col-12'>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
