import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import Sidebar from "../components/sidebar/Sidebar";
import { GetID } from "../hooks/GetID";
import { useParams } from 'react-router-dom';


function Home() {
  const { id } = useParams();
  const { data, isLoading, hasError } = GetID(id);

  return (
    <div className='container'>
      <Sidebar />
      <section>
        {(!isLoading && !hasError && data) && (
          <MainTitle user={data} />
        )}
      </section>
    </div>
  );
}

export default Home;