import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './graphics.css';


const kindTranslate = {
  1: "Intensité",
  2: "Vitesse",
  3: "Force",
  4: "Endurance",
  5: "Energie",
  6: "Cardio"
}

export default function Performances(props) {

    const { perfs } = props;
    console.log(perfs);

    const data = perfs.data.map(item => {
      return {
        activity: kindTranslate[item.kind],
        value: item.value
      }
    });

    return (
      <div className="perfs">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="80%" data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="activity"
              stroke="white"
              dy={4}
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 500,
              }}
            />
            <PolarRadiusAxis />
            <Radar 
            dataKey="value"
            fill="#FF0101B2"
            fillOpacity={0.7}
            stroke="transparent"
             />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
}