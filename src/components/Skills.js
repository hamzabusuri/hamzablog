import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

class Skills extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="skills" class="parallax-container">
                <div class="parallax">
                    <img class="responsive-img" src="https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=200" />
                </div>
                <div class="container">
                    <div class="row">
                    <h3 class="header text_b center"> <i class="fa fa-graduation-cap"></i> SKILLS</h3>
                    </div>
                    <div class="row center">
                        <div class="col s12 m12 l3">
                            <img class="responsive-img" src="https://img.icons8.com/color/144/000000/python.png" />
                        </div>
                        <div class="col s12 m12 l3">
                            <img class="responsive-img" src="https://img.icons8.com/color/144/000000/javascript.png" />
                        </div>
                        <div class="col s12 m12 l3">
                            <img class="responsive-img" src="https://img.icons8.com/color/144/000000/java-coffee-cup-logo.png" />
                        </div>
                        <div class="col s12 m12 l3">
                            <img class="responsive-img" src="https://img.icons8.com/plasticine/144/000000/react.png" />
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }

}

export default Skills;