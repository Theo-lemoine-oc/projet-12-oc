import React from 'react';
import MainTitle from '../components/utils/MainTitle';
import FiguresCard from '../components/utils/FiguresCard';
import Sidebar from "../components/sidebar/Sidebar";
import Activities from '../components/graphics/Activities';
import { useUserInfos } from "../hooks/useUserInfos";
import { useUserInfosActivities } from "../hooks/useUserInfosActivities";
import { useUserInfosTime } from "../hooks/useUserInfosTime";
import { useUserInfosPerformances } from "../hooks/useUserInfosPerformances";
import { useParams } from 'react-router-dom';
import Time from '../components/graphics/Time';
import Performances from '../components/graphics/Performances';
import Score from '../components/graphics/Score';


function Home() {
  const { id } = useParams();
  const { data: userInfos, isLoading: isLoadingUserInfos, hasError: hasErrorOnUserInfos } = useUserInfos(id);
  const { data: userInfosActivities, isLoading: isLoadingUserInfosActivities, hasError: hasErrorOnUserInfosActivities} = useUserInfosActivities(id);
  const { data: userInfosTime, isLoading: isLoadingUserInfosTime, hasError: hasErrorOnUserInfosTime} = useUserInfosTime(id);
  const { data: UserInfosPerformances, isLoading: isLoadingUserInfosPerformances, hasError: hasErrorUserInfosPerformances} = useUserInfosPerformances(id);

  if (isLoadingUserInfos || isLoadingUserInfosActivities || isLoadingUserInfosTime || isLoadingUserInfosPerformances) {
    return <div>Loading in progress..</div>
  }

  if (hasErrorOnUserInfos || hasErrorOnUserInfosActivities || hasErrorOnUserInfosTime || hasErrorUserInfosPerformances) {
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

              {(!isLoadingUserInfosPerformances && !hasErrorUserInfosPerformances && UserInfosPerformances) && (
                <Performances perfs={ UserInfosPerformances } />
              )}
              
              {(!isLoadingUserInfos && !hasErrorOnUserInfos && userInfos) && (
                <Score score={userInfos} />
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