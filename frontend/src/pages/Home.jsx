import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import FiguresCard from '../components/utils/FiguresCard';
import Sidebar from "../components/sidebar/Sidebar";
import Activities from '../components/graphics/Activities';
import { useUserInfos } from "../hooks/useUserInfos";
import { useUserInfosActivities } from "../hooks/useUserInfosActivities";
import { useUserInfosTime } from "../hooks/useUserInfosTime";
import { useParams } from 'react-router-dom';
import Time from '../components/graphics/Time';


function Home() {
  const { id } = useParams();
  const { data: userInfos, isLoading: isLoadingUserInfos, hasError: hasErrorOnUserInfos } = useUserInfos(id);
  const { data: userInfosActivities, isLoading: isLoadingUserInfosActivities, hasError: hasErrorOnUserInfosActivities} = useUserInfosActivities(id);
  const { data: userInfosTime, isLoading: isLoadingUserInfosTime, hasError: hasErrorOnUserInfosTime} = useUserInfosTime(id);

  if (isLoadingUserInfos || isLoadingUserInfosActivities || isLoadingUserInfosTime) {
    return <div>Loading in progress..</div>
  }

  if (hasErrorOnUserInfos || hasErrorOnUserInfosActivities || hasErrorOnUserInfosTime) {
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
              <Activities activity={ userInfosActivities } />
            )}
            <div className='graphics-bottom'>
              {(!isLoadingUserInfosTime && !hasErrorOnUserInfosTime && userInfosTime) && (
                <Time time={ userInfosTime } />
              )}
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