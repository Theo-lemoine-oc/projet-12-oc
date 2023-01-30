import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './graphics.css';

const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export default function Time(props) {

    const { time } = props;
    console.log(time)

    return (
        <div className='time'>
            <div className="top">
                <h2>Durée moyenne des sessions</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={time.sessions}
                    margin={{
                        top: 0,
                        right: 12,
                        left: 12,
                        bottom: 24,
                    }}
                    >
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.6)"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        tickFormatter={(day) => daysOfWeek[(day + 6) % 7]}
                    />
                    <Tooltip content={ CustomTooltip } />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "#fff",
                            strokeWidth: 5,
                            r: 2,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <span className="label">{`${payload[0].value} min`}</span>
        </div>
      );
    }
  
    return null;
  };