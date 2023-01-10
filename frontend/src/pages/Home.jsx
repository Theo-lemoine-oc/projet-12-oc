import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import Sidebar from "../components/sidebar/Sidebar";
import { useUserInfos } from "../hooks/useUserInfos";
import { useParams } from 'react-router-dom';


function Home() {
  const { id } = useParams();
  const { data, isLoading, hasError } = useUserInfos(id);

  return (
    <div className='container'>
      <Sidebar />
      <section className='dashboard'>
        {(!isLoading && !hasError && data) && (
          <MainTitle user={data} />
        )}
      </section>
    </div>
  );
}

export default Home;