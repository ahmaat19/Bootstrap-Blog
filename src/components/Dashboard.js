import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import LatestPosts from './LatestPosts';
import Sidebar from './Sidebar';
import Spinner from './Spinner';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
      <div className='row'>
        <div className='col-lg-9  col-12'>
          <LatestPosts />
        </div>
        <div className='col-lg-3  col-12'>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
