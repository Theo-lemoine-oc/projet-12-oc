import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './graphics.css';

export default function Activities(props) {

  const { activity } = props;

    return (
      <div className='activity'>
        <div className="top">
          <h2>Activité quotidienne</h2>
          <ul>
            <li>Poids (kg)</li>
            <li>Calories brûlées (kCal)</li>
          </ul>
        </div>
        <ResponsiveContainer width="100%" aspect={6}>
          <BarChart
            width={500}
            height={200}
            data={activity.sessions}
            margin={{
              top: 5,
              right: 50,
              left: 20,
              bottom: 5,
            }}
            barGap={8}
            barCategoryGap="40%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis
              dataKey="day"
              dy={16}
              padding={{ left: -48, right: -48 }}
              tickLine={false}
              stroke={"#9b9eac"}
              tick={{ fontSize: 14 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="kilogram" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={8} />
            <Bar dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <span className="label">{`${payload[0].value}kg`}</span>
        <span className="label">{`${payload[1].value}Kcal`}</span>
      </div>
    );
  }

  return null;
};