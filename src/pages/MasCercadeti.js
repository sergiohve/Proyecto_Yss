import React from 'react'
import Sidebar from '../components/Sidebar'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contenido from '../components/Contenido';
import {  makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

import MoreIcon from '@material-ui/icons/MoreVert';
import Recurso133 from '../assets/projects_images/Recurso 133.png';
import Recurso131 from '../assets/projects_images/Recurso 131.png'
import Recurso138 from '../assets/projects_images/Recurso 138.png'
import Recurso132 from '../assets/projects_images/Recurso 132.png'
import Recurso136 from '../assets/projects_images/Recurso 136.png'

import Recurso121 from '../assets/projects_images/Recurso 121.png'
import Recurso125 from '../assets/projects_images/Recurso 125.png'
import Recurso126 from '../assets/projects_images/Recurso 126.png'
import Recurso127 from '../assets/projects_images/Recurso 127.png'
import Recurso128 from '../assets/projects_images/Recurso 128.png'
import Recurso129 from '../assets/projects_images/Recurso 129.png'
import Recurso130 from '../assets/projects_images/Recurso 130.png'
import Recurso134 from '../assets/projects_images/Recurso 134.png'

import Recurso124 from '../assets/projects_images/Recurso 124.png'
import Bannerscarrusel03 from '../assets/projects_images/Banners carrusel-03.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "black",
    marginTop: "100px",
    
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
   linkk: {
    width: "290px",
    paddingBottom: "16px",
  },
  link: {
    
    width: "70px",
    paddingBottom:"-10px",
    marginRight: "25px",
  },
  linkkk: {
    width: "100px",
    paddingBottom: "14px",
  },
  salir: {
    textAlign: "center",
  },
  topBar: {
    background: "#030037",
    height: "45px",

  },
  ambulancia: {
    marginLeft: "80px",
    width: "140px",
    paddingBottom:"130px",
  },
}));

export default function MasCercadeti() {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
     
      
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/login" className={classes.linkMobile}> <p className={classes.salir}>Salir</p></Link>
     
    </Menu>
  );

    return (
        <div className="app">
         <div className={classes.grow} >
      <AppBar position="static" className={classes.topBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
             <IconButton  color="inherit">
            <Link to="/#" className={classes.linkkk}><img src={Recurso138} alt="avatar" className="sidebar__avr" /></Link>
            <Link to="/#" className={classes.ambulancia}><img src={Recurso136} alt="avatar" className="sidebar__avr" /></Link>
            </IconButton>
          </IconButton>
        
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton aria-label="show 17 new notifications" color="inherit">
             <img src={Recurso131} alt="avatar" className={classes.linkk} />
    
            </IconButton>
            
            <Link to="/" ><img src={Recurso133} alt="avatar" className={classes.link} /><br/><img src={Recurso132} className={classes.link} alt="avatar" /></Link>
              
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
      
      <div className="container app__container">
        
        <div className="row app__row">
         <div className="col-lg-8 col-sm-12">
          <Link to="/cumpleaños" className="link"><img src={Bannerscarrusel03} alt="avatar" className="sidebar__avr" /></Link>
         </div>
         <div className="col-lg-4 col-sm-12">
          <Link to="/cumpleaños" className="link"><img src={Recurso121} alt="avatar" className="sidebar__avr" style={{height: "233px"}} /></Link>
         </div>
        
          <div className="col-lg-4 col-sm-12">
           

          <div className="sidar">
           
            
                 <div className="sidebar__item sidebar__resume">
               <Link to="/sabiasque" className="link"> <img src={Recurso130} alt="avatar" className="sidebar__avr" /></Link>
                </div>

                <div className="sidebar__item sidebar__resume">
                <Link to="/cumpleaños" className="link"><img src={Recurso125} alt="avatar" className="sidebar__avr" /></Link>
                </div>

                <div className="sidebar__item sidebar__resume">
                <Link to="/nuestroequipo" className="link"><img src={Recurso128} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                 <div className="sidebar__item sidebar__resume">
                <Link to="/nuevosingresos" className="link"> <img src={Recurso127} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                <div className="sidebar__item sidebar__resume">
                <Link to="/nacimientos" className="link"><img src={Recurso126} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
               
                
            
                <div className="sidebar__item sidebar__resume">
                <Link to="/cumpleaños" className="link"><img src={Recurso129} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
                
            
           
           
            <img src={Recurso124} alt="avatar" className="sidebar__avatar" />
            
            
            
           </div>
        </div>
         <div className="col-lg-4 col-sm-12">
         <h3>Reconocimiento Apple</h3>
         <img src={Recurso124} alt="avatar" className="sidebar__avatar" />

         </div>
          <div className="col-lg-4 col-sm-12">
         <img src={Recurso124} alt="avatar" className="sidebar__avatar" />

         </div>
          <div className="col-lg-8 col-sm-12">
        
        <Contenido />
        </div>
         <div className="col-lg-12 col-sm-12">
         
         <Footer/>
        
         </div>
     </div>
    
     </div>
     </div>
    )
}
