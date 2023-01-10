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

        {/* Statistiques de l'utilisateur */}
        <div className='content'>
          {/* Partie de gauche */}
          <div>
            {/* TODO : Activités */}
            <div>
              {/* TODO : Durée moyenne des sessions / Intensité / Score */}
            </div>
          </div>

          {/* Partie de droite */}
          <div>
            {/* TODO : Calories / Proteines / Glucides / Lipides */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;