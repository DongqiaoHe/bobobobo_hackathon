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
  { name: 'Yours', amount: 5000 },
  { name: 'Average', amount: 4800 },
]

export default function BarChartComponent() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Comparison</Title>
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
            dataKey="name"
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
              Carbon Emission(kg)
            </Label>
          </YAxis>
          <Bar dataKey="amount" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
