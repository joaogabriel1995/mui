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
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useAppDrawerContext, useAppThemeContext } from '../../context'

interface IChildren {
  children: React.ReactNode
}

interface ILinkItemButton {
  to: string
  icon: string
  label: string
  onClick: (() => void) | undefined
}

const LinkItemButton: React.FC<ILinkItemButton> = ({
  to,
  icon,
  label,
  onClick
}) => {
  const navigate = useNavigate()
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText secondary={label} />
    </ListItemButton>
  )
}

export const MenuLateral: React.FC<IChildren> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { toggleTheme } = useAppThemeContext()

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } =
    useAppDrawerContext()

  return (
    <Fragment>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
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
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <LinkItemButton
                  key={drawerOption.path}
                  to={drawerOption.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                  label={drawerOption.label}
                  icon={drawerOption.icon}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon> dark_mode_icon </Icon>
                </ListItemIcon>
                <ListItemText secondary="Alternar Tema" />
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
