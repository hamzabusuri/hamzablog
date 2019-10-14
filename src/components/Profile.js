import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import FunnyImg from '../images/135.jpg';

class Profile extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
          <div id="about" class="section black">
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <h2 class="center header"> "You may not be there yet, but you're closer than you were yesterday"</h2>
                        </div>
                    </div>
                    <div class="row center">
                        <div class="col s12 m12 l3">
                            <img class="responsive-img" src={FunnyImg}/>
                        </div>
                        <div class="col s12 m12 offset-l1 l8 ">
                            <h5 class="center"><b>ABOUT ME</b></h5>
                            <h6>
                                Hey guys 👋 My name is Hamza and I am a Computer Science graduate currently working at AND Digital as an Associate Developer. I specialise mainly in web development and have worked on a number of projects using various frameworks.
                                <br />
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;