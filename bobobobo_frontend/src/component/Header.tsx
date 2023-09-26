import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface HeaderProps {
  title: string;
  left?: React.ReactElement;
  right?: React.ReactElement;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {
            props.left? React.cloneElement(props.left): null
        }
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {
            props.right? React.cloneElement(props.right): null
        }
      </Toolbar>
    </React.Fragment>
  );
}
