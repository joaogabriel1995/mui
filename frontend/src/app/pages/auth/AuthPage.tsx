import { bgcolor, Box, margin, ThemeProvider, useTheme } from '@mui/system'
import { LightTheme } from '../../shared/themes/index'
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Item,
  Typography,
  Divider
} from '@mui/material'
import { Link } from 'react-router-dom'
import { teal } from '@mui/material/colors'

export const AuthPage = () => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={LightTheme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Card
          variant="outlined"
          sx={{
            width: theme.spacing(48),
            height: theme.spacing(50),
            boxShadow: 20
          }}
        >
          <Stack spacing={1}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginY={theme.spacing(1)}
              sx={{
                height: theme.spacing(5)
              }}
            >
              <Typography variant="h4" font-weight="200">
                Login
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                width: theme.spacing(48),
                height: theme.spacing(25),
                margin: theme.spacing(1)
              }}
            >
              <Stack display="flex" justifyContent="center" spacing={5}>
                <FormControl fullWidth sx={{ width: theme.spacing(44) }}>
                  <InputLabel variant="outlined"> Email </InputLabel>
                  <OutlinedInput label="Email"></OutlinedInput>
                </FormControl>
                <FormControl fullWidth sx={{ width: theme.spacing(44) }}>
                  <InputLabel variant="outlined"> Senha </InputLabel>
                  <OutlinedInput label="Senha" type="password"></OutlinedInput>
                </FormControl>
              </Stack>
            </Box>
            <Box display="flex" alignItems="center">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid container xs={12} justifyContent="center" margin={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ bgcolor: '#3f50b5' }}
                  >
                    Entrar
                  </Button>
                </Grid>
                <Grid container xs={12} justifyContent="center">
                  <Link to="/home"> Esqueci minha senha </Link>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  )
}
