import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CATEGORIES } from "../constant";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function TemporaryDrawer({setCategory}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 200, padding: "0 10px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="category"
    >
      <List>
        <ListItem style={{color: '#808290'}} >Categories</ListItem>
      </List>
      <Divider />
      <List>
        {CATEGORIES.map((text, index) => (
          <ListItem onClick={() => setCategory(text)} className="category" key={text} style={{fontWight: 300}} disablePadding>
            <ListItemButton>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{color: 'black'}} />
      </Button>
      <ThemeProvider theme={darkTheme}>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
