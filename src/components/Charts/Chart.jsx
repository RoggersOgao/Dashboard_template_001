
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, aspect}) {
    const data = [
        {
          name: 'January',
          Total: 1200,
        //   amt: 2400,
        },
        {
          name: 'February',
          Total: 1500,
        //   amt: 2210,
        },
        {
          name: 'March',
          Total: 5000,
        //   amt: 2290,
        },
        {
          name: 'April',
          Total: 3908,
        //   amt: 2000,
        },
        {
          name: 'May',
          Total: 4800,
        //   amt: 2181,
        },
        {
          name: 'June',
          Total: 3800,
        //   amt: 2500,
        },
        {
          name: 'July',
          Total: 4300,
        //   amt: 2100,
        },
      ];

  return (
    <div className="chartContainer">
        <div className="chartContainer__title">
            {title}
        </div>
       <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart