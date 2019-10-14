import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import ProfImg from '../images/018.jpg';


class Nav extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
          <div class="section" id="home">
          <div class="navbar-fixed">
          <nav>
              <div class="nav-wrapper">
                  <a href="#" class="brand-logo">H.B</a>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                      <li><a href="#"> <i class="fa fa-home"></i> Home</a></li>
                      <li><a href="#portfolio"><i class="fa fa-github"></i> Projects</a></li>
                      <li><a href="#skills"><i class="fa fa-graduation-cap"></i> Skills</a></li>
                      <li><a href="#blog"><i class="fa fa-rss"></i> Blog</a></li>
                  </ul>
              </div>
          </nav>

          </div>
          <ul class="sidenav" id="mobile-demo">
                      <li><a href="#"> <i class="fa fa-home"></i> Home</a></li>
                      <li><a href="#portfolio"><i class="fa fa-github"></i> Portfolio</a></li>
                      <li><a href="#skills"><i class="fa fa-graduation-cap"></i> Skills</a></li>
                      <li><a href="#blog"><i class="fa fa-rss"></i> Blog</a></li>
          </ul>

              <br></br>
              <br></br>
              <h1 style={{color: 'white'}} class="center">
                          HAMZA <b>BUSURI</b>
                      </h1>
              <img class="masthead-avatar mb-5 z-depth-5" src={ProfImg} alt="" />
              <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fa fa-handshake-o"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
              <h5 id="mainText" class="center">Associate Developer @ AND Digital</h5>
      
          </div>
        )
    }

}

export default Nav;