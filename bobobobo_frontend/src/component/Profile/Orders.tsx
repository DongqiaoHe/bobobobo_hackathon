import * as React from 'react'
import Title from './Title'
import { Box, TextField, Button } from '@mui/material'
import { isVisible } from '@testing-library/user-event/dist/utils'

export default function Orders() {
  const [isEditable, setIsEditable] = React.useState(false)
  const [buttonLabel, setButtonLabel] = React.useState('Edit')

  const handleButtonClick = () => {
    if (isEditable) {
      // Handle the submit logic here if needed
      setButtonLabel('Edit')
    } else {
      setButtonLabel('Finish')
    }
    setIsEditable(!isEditable)
  }

  return (
    <React.Fragment>
      <Title>My Information</Title>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          '& #outlined-read-only-input-fname': { width: '25ch' },
          '& #outlined-read-only-input-lname': { width: '25ch' },
          '& #outlined-read-only-input-email': { width: '50ch' },
        }}
        noValidate
        autoComplete="off">
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <div>
            <TextField
              id="outlined-read-only-input-fname"
              label="User Name"
              defaultValue="usename"
              InputProps={{
                readOnly: !isEditable,
              }}
            />
            <TextField
              id="outlined-read-only-input-email"
              label="Email Address"
              defaultValue="example@123.com"
              InputProps={{
                readOnly: !isEditable,
              }}
            />
            <TextField
              id="outlined-read-only-input-lname"
              label="password"
              defaultValue="password"
              type={"password"}
            />

          </div>
          <Button variant="contained" onClick={handleButtonClick}>
            {buttonLabel}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
