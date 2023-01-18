import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import FiguresCard from '../components/utils/FiguresCard';
import Sidebar from "../components/sidebar/Sidebar";
import Activities from '../components/graphics/Activities';
import { useUserInfos } from "../hooks/useUserInfos";
import { useUserInfosActivities } from "../hooks/useUserInfosActivities";
import { useParams } from 'react-router-dom';


function Home() {
  const { id } = useParams();
  const { data: userInfos, isLoading: isLoadingUserInfos, hasError: hasErrorOnUserInfos } = useUserInfos(id);
  const { data: userInfosActivities, isLoading: isLoadingUserInfosActivities, hasError: hasErrorOnUserInfosActivities} = useUserInfosActivities(id);

  if (isLoadingUserInfos || isLoadingUserInfosActivities) {
    return <div>Loading in progress..</div>
  }

  if (hasErrorOnUserInfos || hasErrorOnUserInfosActivities) {
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
          <section className='graphics'>
            {(!isLoadingUserInfosActivities && !hasErrorOnUserInfosActivities && userInfosActivities) && (
              <Activities activity={userInfosActivities} />
            )}
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