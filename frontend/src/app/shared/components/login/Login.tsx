import { Box, useTheme } from '@mui/system'
import * as yup from 'yup'
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material'
import { useCallback, useState } from 'react'
import { AuthService } from '../../services/api/index'
import { useAuthContext } from '../../context'

interface ILoginProps {
  children: React.ReactNode
}

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5)
})

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const theme = useTheme()

  const handleSignup = useCallback(async () => {
    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(validatedData => {
        login(validatedData.email, validatedData.password)
      })
      .catch((errors: yup.ValidationError) => {
        errors.inner.forEach(error => {
          if (error.path === 'email') {
            setEmailError(error.message)
          } else if (error.path === 'password') {
            setPasswordError(error.message)
          }
        })
      })

    await AuthService.auth(email, password)
  }, [email, password])

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    return (
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
                  <OutlinedInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => setEmailError(' ')}
                    error={!!emailError}
                  ></OutlinedInput>
                  <FormHelperText>{emailError}</FormHelperText>
                </FormControl>
                <FormControl fullWidth sx={{ width: theme.spacing(44) }}>
                  <InputLabel variant="outlined"> Senha </InputLabel>
                  <OutlinedInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => setPasswordError(' ')}
                    error={!!passwordError}
                  ></OutlinedInput>
                  <FormHelperText>{passwordError}</FormHelperText>
                </FormControl>
              </Stack>
            </Box>
            <Box display="flex" alignItems="center">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid container justifyContent="center" margin={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ bgcolor: '#3f50b5' }}
                    type="button"
                    onClick={handleSignup}
                  >
                    Entrar
                  </Button>
                </Grid>
                <Grid container justifyContent="center">
                  <a href="/users">Casdastrar</a>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Card>
      </Box>
    )
  }
}
