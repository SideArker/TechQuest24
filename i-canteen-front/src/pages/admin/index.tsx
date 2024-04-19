import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import AfterLogin from './AfterLogin';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (event:any) => {
    event.preventDefault();
 
    console.log("Login attempt:", username, password);
    setIsLoggedIn(true);  
  };

  if (isLoggedIn) {
    return <AfterLogin />;  
  }

  return (
    <section className='mt-[200px] mb-[120px] w-[95%] md:w-[40%] mx-auto'>
      <Paper elevation={6} className='mt-[100px] p-[50px] w-[100%]'>
        <Typography component="h1" variant="h5" className='font-extrabold'>
          Logowanie
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nazwa użytkownika"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '24px' }}
          >
            Zaloguj się
          </Button>
        </form>
      </Paper>
    </section>
  );
}

export default Admin;
