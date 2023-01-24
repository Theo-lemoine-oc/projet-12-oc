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
        subject: kindTranslate[item.kind],
        A: item.value
      }
    });

    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
}