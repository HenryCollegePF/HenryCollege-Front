import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Email, Lock, Edit, VpnKey } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
}));

function Formulario() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar los datos del formulario al servidor
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/henrycollege");
    
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Formulario para cambiar la contraseña</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: <Email />,
          }}
        />
        <TextField
          className={classes.textField}
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          type="password"
          InputProps={{
            startAdornment: <Lock />,
          }}
        />
        <TextField
          className={classes.textField}
          label="Nuevo email"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: <Edit />,
          }}
        />
        <TextField
          className={classes.textField}
          label="Nueva contraseña"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          variant="outlined"
          type="password"
          InputProps={{
            startAdornment: <VpnKey />,
          }}
        />
        <div>
          <Button
            className={`${classes.button} ${classes.backButton}`}
            variant="contained"
            color="default"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button className={classes.button} variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;

