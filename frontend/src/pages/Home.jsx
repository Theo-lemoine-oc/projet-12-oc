import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import FiguresCard from '../components/utils/FiguresCard';
import Sidebar from "../components/sidebar/Sidebar";
import { useUserInfos } from "../hooks/useUserInfos";
import { useParams } from 'react-router-dom';


function Home() {
  const { id } = useParams();
  const { data: userInfos, isLoading: isLoadingUserInfos, hasError: hasErrorOnUserInfos } = useUserInfos(id);

  if (isLoadingUserInfos) {
    return <div>Loading in progress..</div>
  }

  if (hasErrorOnUserInfos) {
    return <div>An error has been occured</div>
  }

  return (
    <div className='container'>
      <Sidebar />
      <div className='dashboard'>
        {(!isLoadingUserInfos && !hasErrorOnUserInfos && userInfos) && (
          <MainTitle user={userInfos} />
        )}

        {/* Statistiques de l'utilisateur */}
        <div className='content'>
          {/* Partie de gauche */}
          <section>
            {/* TODO : Activités */}
            <div>
              {/* TODO : Durée moyenne des sessions / Intensité / Score */}
            </div>
          </section>

          {/* Partie de droite */}
          <section className='figures'>
            {(!isLoadingUserInfos && !hasErrorOnUserInfos && userInfos) && (
              <FiguresCard user={userInfos} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;