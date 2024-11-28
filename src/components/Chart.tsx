import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface IProps {
  data: IPopulation[];
}



function Chart({ data }: IProps) {
  return (
    <ResponsiveContainer height={250}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="value" tickFormatter={(tick) => `${(tick / 1_000_000)}M`} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart