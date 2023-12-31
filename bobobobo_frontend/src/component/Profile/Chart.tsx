import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount }
}

const data = [
  createData('27 Sep', 47),
  createData('26 Sep', 45),
  createData('25 Sep', 48),
  createData('24 Sep', 55),
  createData('23 Sep', 40),
  createData('22 Sep', 45),
  createData('21 Sep', 60),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Last 7 days</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}>
              Carbon Footprint(kg)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
