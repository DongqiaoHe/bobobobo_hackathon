import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'
import { Box, TextField, Grid } from '@mui/material'

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>My Information</Title>
      <Box
        component="form"
        sx={{
          '& #outlined-read-only-input-email': { width: '100ch' },
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off">
        <div>
          <TextField
            id="outlined-read-only-input-fname"
            label="First Name"
            defaultValue="Your First name"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-read-only-input-lname"
            label="Last Name"
            defaultValue="Your Last name"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-read-only-input-email"
            label="Email Address"
            defaultValue="example@123.com"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </Box>
    </React.Fragment>
  )
}
