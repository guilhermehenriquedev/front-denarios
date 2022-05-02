import React, { useContext, useState } from 'react'
import { ThemeContext } from "../context/ThemeContext";
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import DehazeIcon from '@mui/icons-material/Dehaze'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import styles from '@/styles/main.module.scss'
import Link from '@mui/material/Link'
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

//ícones
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function TemporaryDrawer() {

  const { themeColor } = useContext(ThemeContext); //Coletando estado de preferência da cor padrão do tema.

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={styles.boxNav}
      sx={{ width: 250, background: themeColor.background, height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <ListItem disablePadding>

        <ListItemButton sx={{ background: themeColor.background, '&:hover': { background: themeColor.hover } }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: themeColor.mainText }} />
          </ListItemIcon>
          <Link color="inherit" href="/">
            <ListItemText primary={<Typography sx={{ fontSize: "14px", color: themeColor.mainText }}>Home</Typography>} />
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>

        <ListItemButton sx={{ background: themeColor.background, '&:hover': { background: themeColor.hover } }}>
          <ListItemIcon>
            <InfoIcon sx={{ color: themeColor.mainText }} />
          </ListItemIcon>
          <Link color="inherit" href="/">
            <ListItemText primary={<Typography sx={{ fontSize: "14px", color: themeColor.mainText }}>Quem somos?</Typography>} />
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>

        <ListItemButton sx={{ background: themeColor.background, '&:hover': { background: themeColor.hover } }}>
          <ListItemIcon>
            <ShareIcon sx={{ color: themeColor.mainText }} />
          </ListItemIcon>
          <Link color="inherit" href="/">
            <ListItemText primary={<Typography sx={{ fontSize: "14px", color: themeColor.mainText, fontWeight: "bold" }}>Compartilhe</Typography>} />
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>

        <ListItemButton sx={{ background: themeColor.background, '&:hover': { background: themeColor.hover } }}>
          <ListItemIcon>
            <ConnectWithoutContactIcon sx={{ color: themeColor.mainText }} />
          </ListItemIcon>
          <Link color="inherit" href="/">
            <ListItemText primary={<Typography sx={{ fontSize: "14px", color: themeColor.mainText, fontWeight: "bold" }}>Contatos</Typography>} />
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <DehazeIcon className={styles.dehazeButton} sx={{ color: themeColor.mainText, fontSize: 30, marginLeft: '10px', '&:hover': { cursor: 'pointer', opacity: '0.8' } }} onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}