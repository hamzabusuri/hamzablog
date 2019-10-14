import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

class Portfolio extends React.Component{
    constructor(){
        super();
    }

  
    render(){
        return(
          <div class="section" style={ {backgroundColor: '#141414'}} id="portfolio">
                <div class="container">
                    <h3 class="header text_b center"> <i class="fa fa-github"></i> PROJECTS</h3>
                    <div class="row ">
                        <div class="col s12 m12 l4">
                            <div class="card  black">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator white-text text-lighten-5">CV Now</span>
                                    <p><a class="white-text text-lighten-5" target="_blank" href="https://github.com/hb308/Final-Year-Project">Github link</a></p>
                                </div>
                                <div class="card-reveal  blue-grey">
                                    <span class="card-title white-text text-lighten-5">CV Now <i class="material-icons right">close</i></span>
                                    <p>A platform which allows users to login and upload their CV into the system. Once they upload their CV, they are able to match to jobs based on their skills.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m12 l4">
                            <div class="card  black">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="https://images.unsplash.com/photo-1557862471-150b86c49ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator white-text text-lighten-5">Weather App</span>
                                    <p><a class="white-text text-lighten-5" target="_blank" href="https://github.com/hb308/weatherapp">Github link</a></p>
                                </div>
                                <div class="card-reveal  blue-grey">
                                    <span class="card-title white-text text-lighten-5">Weather App <i class="material-icons right">close</i></span>
                                    <p>A weather app made for hikers built using Preact which displays the weather and provides actions based on the weather conditions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m12 l4">
                            <div class="card  black">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                                </div>
                                <div class="card-content">
                                   <a> <span class="center-align card-title activator white-text text-lighten-5">Matcher</span></a>
                                    <p><a class="white-text text-lighten-5" target="_blank" href="https://github.com/hb308/Matcher">Github link</a></p>
                                </div>
                                <div class="card-reveal  blue-grey">
                                    <span class="center-align card-title white-text text-lighten-5">Matcher <i class="material-icons right">close</i></span>
                                    <p>A web project designed to allow users to login and match to other users in the website based on the user's hobbies. </p>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        )
    }

}

export default Portfolio;