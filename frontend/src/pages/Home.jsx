import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import Sidebar from "../components/sidebar/Sidebar.jsx";


function Home() {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <MainTitle />
      </section>
    </div>
  );
}

export default Home;