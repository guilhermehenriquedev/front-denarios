import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Button from '@mui/material/Button';
import { styled } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeContext } from "@/context/ThemeContext";
import AuthContext from '@/context/AuthContext'
// import LockAnimation from '../components/LockAnimation';

function Copyright(props) {
  const { themeColor } = useContext(ThemeContext); 
  return (
    <Typography sx={{ color: themeColor.mainText }} align="center" {...props}>
      <Link sx={{ color: themeColor.mainText }}  href="https://mui.com/">
      {'© '}
      {new Date().getFullYear()}
      {' '}
        Dénarios
      </Link>
    </Typography>
  );
}

export default function SignIn() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signin, error} = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault();
    signin({email, password});
  }

  const { themeColor } = useContext(ThemeContext); //Coletando estado de preferência da cor padrão do tema.

  const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
      color: themeColor.secondaryText,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: themeColor.secondaryText,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: themeColor.secondaryText,
      },
      '&:hover fieldset': {
        borderColor: themeColor.mainText,
      },
      '&.Mui-focused fieldset': {
        borderColor: themeColor.mainText,
      },
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* <LockAnimation /> */}
      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: themeColor.mainText }}>
        Entrar no sistema
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, padding: '15px' }}>
        <CssTextField
          sx={{ label: { color: themeColor.secondaryText } }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          size="small"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CssTextField
          sx={{ label: { color: themeColor.secondaryText } }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          size="small"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: themeColor.mainText }} value="remember" color="primary" />}
          label="Lembre-se"
          sx={{ color: themeColor.mainText }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" sx={{ fontWeight: 'bold', color: themeColor.mainText }}>
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" sx={{ fontWeight: 'bold', color: themeColor.mainText }}>
              {"Crie uma conta agora"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>


  );
}