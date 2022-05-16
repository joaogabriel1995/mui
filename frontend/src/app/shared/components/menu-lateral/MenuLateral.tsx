import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment } from 'react'

interface IChildren {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IChildren> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Fragment>
      <Drawer variant={smDown ? 'temporary' : 'permanent'}>
        <Box
          width={theme.spacing(28)}
          display="flex"
          height="100vh"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src=""
            ></Avatar>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav" color="#ffffff">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                  <ListItemText secondary="Página Inicial" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>personIcon</Icon>
                  <ListItemText secondary="Cadastro" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>addBoxIcon</Icon>
                  <ListItemText secondary="Produtos" />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>analyticsIcon</Icon>
                  <ListItemText secondary="Estatísticas" />
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </Fragment>
  )
}
