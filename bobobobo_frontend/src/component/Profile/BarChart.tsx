import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

const data = [
  { month: 'January', amount: 5000 },
  { month: 'February', amount: 4800 },
  { month: 'March', amount: 5200 },
  { month: 'April', amount: 5500 },
  { month: 'May', amount: 5300 },
  { month: 'June', amount: 5400 },
  { month: 'July', amount: 5700 },
  { month: 'August', amount: 5800 },
  { month: 'September', amount: 5900 },
  { month: 'October', amount: 6000 },
  { month: 'November', amount: 6100 },
  { month: 'December', amount: 6200 },
]

export default function BarChartComponent() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <BarChart
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
          <Bar dataKey="amount" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
