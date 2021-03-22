import React from 'react'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'
import {  makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert'
import Recurso133 from '../assets/projects_images/Recurso 133.png'
import Recurso598 from '../assets/projects_images/Recurso 598.png'
import Recurso138 from '../assets/projects_images/Recurso 138.png'
import Recurso136 from '../assets/projects_images/Recurso 136.png'
import Recurso121 from '../assets/projects_images/Recurso 121.png'
import Recurso125 from '../assets/projects_images/Recurso 125.png'
import Recurso127 from '../assets/projects_images/Recurso 127.png'
import Recurso128 from '../assets/projects_images/Recurso 128.png'
import Recurso130 from '../assets/projects_images/Recurso 130.png'
import Recurso599 from '../assets/projects_images/Recurso 599.png'
import Recurso124 from '../assets/projects_images/Recurso 124.png'
import Recurso71 from '../assets/projects_images/Recurso 71.png'
import Recurso142 from '../assets/projects_images/Recurso 142.png'
import Recurso600 from '../assets/projects_images/Recurso 600.png'
import Recurso108 from '../assets/projects_images/Recurso 108.png'
import Recurso402 from '../assets/projects_images/Recurso 402.png'
import Recurso405 from '../assets/projects_images/Recurso 405.png'
import Recurso123 from '../assets/projects_images/Recurso 123.png'
import Recurso120 from '../assets/projects_images/Recurso 120.png'
import Recurso114 from '../assets/projects_images/Recurso 114.png'
import Recurso555 from '../assets/projects_images/Recurso 555.png'
import Recurso556 from '../assets/projects_images/Recurso 556.png'
import Recurso137 from '../assets/projects_images/Recurso 137.png'
import Recurso116 from '../assets/projects_images/Recurso 116.png'


import Recurso558 from '../assets/projects_images/Recurso 558.png'



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
  mas: {
   marginLeft: "200px",
   marginBottom: "17px",
  },
   linkk: {
    width: "290px",
    paddingBottom: "16px",
  }, 
  foot: {
    width: "100%",
    marginBottom: "35px",
   marginTop: "30px",
  },
  imgTitulo: {
     width: "100%",
     
  },
  imgTitulo1:{
    width: "100px",
    display:"block",
     margin:"auto",  
  },
  link: {
    
    width: "120px",
    marginTop: "30px",
    marginRight: "25px",
  },
  linkkk: {
    width: "100px",
   
  },
  salir: {
    textAlign: "center",
  },
  topBar: {
    background: "#030037",
    height: "45px",

  },
  ambulancia: {
    marginLeft: "50px",
    width: "140px",
    paddingBottom:"130px",
  },
  nombre: {
   fontWeight: "bold",
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
             <Link to="/" ><img src={Recurso133} alt="avatar" className={classes.link} /><br/><p  className={classes.nombre}><img src={Recurso116} alt="avatar" className={classes.link} /></p></Link>
           
           
            </IconButton>
          </IconButton>
        
           <h1 className={classes.mas}>MÁS CERCA DE TI</h1>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            <IconButton aria-label="show 17 new notifications" color="inherit">
            <img src={Recurso136} alt="avatar" className={classes.ambulancia} />
          
    
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
           
         <img src={Recurso138} alt="avatar"className={classes.linkkk} />
            </IconButton>
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
      
      <div className="container app__container" style={{marginTop: "40px"}}>
        
        <div className="row ">
         <div className="col-lg-8 col-md-12 col-sm-12" >
         <Carrusel />
         </div>
         <div className="col-lg-4 col-md-12 col-sm-12">
          <Link to="/Noticias" className="link"><img src={Recurso120} alt="avatar" className="bocina"  /><img src={Recurso121} alt="avatar" className="sidebar__avr" style={{height: "233px"}} /><img src={Recurso402} alt="avatar" className="galeria"  /></Link>
         </div>
         </div>
         <div className="row ">
          <div className="col-lg-4 col-md-12 col-sm-12">
           

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
                <Link to="/Nacimientos" className="link"><img src={Recurso71} alt="avatar" className="sidebar__avr" /></Link>
                </div>
                 <div className="sidebar__item sidebar__resume">
                <Link to="/buzondesugerencias" className="link"><img src={Recurso108} alt="avatar" className="sidebar__avr" /></Link>
                </div>
            
            
                
            
           
           
          
            
            
            
           </div>
        </div>
         <div className="col-lg-4 col-md-12 col-sm-12">
         <h3 className="titulo_cerca">Reconocimiento Apple</h3>
         <Link to="/reconocimientoapple" className="link"><img src={Recurso114} alt="avatar" className="manzana1" /><img src={Recurso142} alt="avatar" className="img_cerca" /></Link>

         </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
          <h3 className="titulo_cercaa">Capacitación</h3>
          <Link to="/capacitacion" className="link"><img src={Recurso555} alt="avatar" className="manzana1" /><img src={Recurso599} alt="avatar" className="img_cercaa" /></Link>

         </div>
         </div>
         <div className="row">
         <div className="col-lg-4 col-md-12 col-sm-12">
        
        <Link to="/Galeria" className="link"><img src={Recurso123} alt="avatar" className="camara"  /> <img src={Recurso124} alt="avatar" className="img_cercaaa" /><img src={Recurso405} alt="avatar" className="noticias"  /></Link>
         </div>
         <div className="col-lg-4 col-md-12 col-sm-12">
         <h3 className="titulo_cercaaa">Beneficios</h3>
         <Link to="/Beneficios" className="link"><img src={Recurso556} alt="avatar" className="manzana1" /><img src={Recurso598} alt="avatar"  className="img_cercaaaa" /></Link>
       </div>
       <div className="col-lg-4 col-md-12 col-sm-12">
       <h4 className="titulo_cercaaa">HSE-Seguridad y Prevención</h4>
             <Link to="/HSE" className="link"><img src={Recurso558} alt="avatar" className="manzana1" />  <img src={Recurso600} alt="avatar"  className="img_cercaaaa" /></Link>
       </div>
       </div>

         
        <div className={classes.foot}>
      
     
       <div className="col-lg-12 col-sm-12">
         
         <img src={Recurso137} alt="avatar" className={classes.imgTitulo} />
         <img src={Recurso138} alt="avatar" className={classes.imgTitulo1}/>
         </div>
         
         
       
      
    </div>
     </div>
    
     </div>
    
    )
}
