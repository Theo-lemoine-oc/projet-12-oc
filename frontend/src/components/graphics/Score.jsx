import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './graphics.css';

export default function Score(props) {

    const { score } = props;
    console.log(score)

    const pieData = [
        { name: "completed", value: score.todayScore, fillColor: `#E60000` },
        { name: "not-completed", value: 1 - score.todayScore, fillColor: "#fff" },
    ];

    return (
        <div className='score'>
            <div className="top">
                <h2>Score</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={pieData} innerRadius={70} outerRadius={80} startAngle={90} endAngle={450}>
                        {pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                        />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className='score-label'>
                <span>
                    {`${100 * score.todayScore }%`}
                    <span>de votre objectif</span>
                </span>
            </div>
        </div>
      );
}