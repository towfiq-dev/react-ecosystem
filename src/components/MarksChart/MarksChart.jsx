import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
  const marksDataRes = use(marksPromise)
  const marks = (marksDataRes.data)
  const resultData = marks.map(result=> {
    const student = {
      id: result.student_id,
      name: result.name,
      physics: result.marks.physics,
      chemistry: result.marks.chemistry,
      math: result.marks.math
    }
    const avg = (student.physics + student.chemistry + student.math)/3
    student.avg = avg
    return student
  })
  
  return (
    <div>
    <BarChart width={1200} height={400} data={resultData}>
    <XAxis dataKey={'name'}></XAxis>
    <YAxis></YAxis>
    <Bar dataKey={'physics'} fill='red'></Bar>
    <Bar dataKey={'chemistry'} fill='green'></Bar>
    <Bar dataKey={'math'} fill='yellow'></Bar>
    <Bar dataKey={'avg'} fill='aqua'></Bar>
    </BarChart>
    </div>
  );
};

export default MarksChart;