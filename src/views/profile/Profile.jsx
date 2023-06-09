import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';


const drawerWidth = 240;

function Profile(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //       {['Datos Pago', 'Actualizar Cuenta'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           {text === 'Actualizar Cuenta' ? (
  //             <Link to="/profile/formulario" style={{ textDecoration: 'none', color: 'inherit' }}>
  //               <ListItemButton>
  //                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //                 <ListItemText primary={text} />
  //               </ListItemButton>
  //             </Link>
  //           ) : (
  //             <Link to="/profile/students" style={{ textDecoration: 'none', color: 'inherit' }}>
  //               <ListItemButton>
  //                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //                 <ListItemText primary={text} />
  //               </ListItemButton>
  //             </Link>
  //           )}
  //         </ListItem>
  //       ))}
  //       <ListItem key="Informacion Personal" disablePadding>
  //         <Link to="/profile/informacion-personal" style={{ textDecoration: 'none', color: 'inherit' }}>
  //           <ListItemButton>
  //             <ListItemIcon><InboxIcon /></ListItemIcon>
  //             <ListItemText primary="Informacion Personal" />
  //           </ListItemButton>
  //         </Link>
  //       </ListItem>
  //       <ListItem
  //         component={Link}
  //         to="/"
  //         style={{ textDecoration: 'none', color: 'inherit' }}
  //         disablePadding
  //       >
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <MailIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="back" />
  //         </ListItemButton>
  //       </ListItem>
  //     </List>
  //     <Divider />
  //   </div>
  // );

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Información Personal','Datos Pago', 'Actualizar Cuenta' ].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === 'Actualizar Cuenta' ? (
              <Link to="/profile/formulario" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ) : text === 'Información Personal' ? (
              <Link to="/profile/informacion-personal" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ) : (
              <Link to="/profile/students" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
        <ListItem
          component={Link}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="back" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Perfil Alumno
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
  
}

Profile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Profile;