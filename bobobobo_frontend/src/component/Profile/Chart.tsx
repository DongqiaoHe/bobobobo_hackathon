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
  createData('27 Sep', 0),
  createData('26 Sep', 300),
  createData('25 Sep', 600),
  createData('24 Sep', 800),
  createData('23 Sep', 1500),
  createData('22 Sep', 2000),
  createData('21 Sep', 2400),
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
              Sales ($)
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
