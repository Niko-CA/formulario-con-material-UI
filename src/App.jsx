
import { TextField, Button, Container, Typography } from "@mui/material";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Formulario con Material UI
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombres"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Apellidos"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Container>
  )
}

export default App
