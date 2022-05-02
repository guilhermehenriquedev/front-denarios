import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import Box from '@mui/material/Box'
import GlobalStyles from '@mui/material/GlobalStyles'
import CssBaseline from '@mui/material/CssBaseline'
import AuthContext from '@/context/AuthContext'
import NavDrawer from '@/components/NavBar'
import Typography from '@mui/material/Typography'
import Head from '../components/Head'

import SwitchThemeButton from '../components/SwitchThemeButton';
import { Button } from "@mui/material";

export default function Layout({ children }) {
  const { user, signout } = useContext(AuthContext);

  const { themeColor, changeThemeColor } = useContext(ThemeContext); //Coletando estado de preferência da cor padrão do tema.
  //console.log(themeColor)

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Head title="Denários" />
      <CssBaseline />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex', //Popular como 'none' quando o usuário não estiver logado no sistema.
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            bgcolor: themeColor.navbar,
            borderBottom: `1px solid ${themeColor.navbar == '#fff' ? '#d4d4d4' : '#000'}`,

          }}
        >
          <NavDrawer />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }} >
            {user ? <>
              <Button onClick={() => signout()}>
                <Typography>Sair</Typography>
              </Button>
            </> : <>
              <Link href='/auth/signin'>
                <Typography>Entrar</Typography>
              </Link>
            </>}
            <SwitchThemeButton themeChangeFunction={changeThemeColor} value={true} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', height: '100%', width: '100%', background: themeColor.background, }}>
          {children}
        </Box>
      </Box>
    </>
  );
};