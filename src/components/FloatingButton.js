import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

class FloatingButton extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div class="fixed-action-btn vertical">
                <a class="btn-floating btn-large  blue-grey darken-4">
                    <i class="fa fa-globe"></i>
                </a>
                <ul>
                    <li><a target="_blank" href="https://www.instagram.com/_busuri/?hl=en" class="btn-floating  blue darken-4"><i class="fa fa-instagram"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/mrbusuri" class="btn-floating cyan lighten-1"><i class="fa fa-twitter"></i></a></li>
                    <li>
                        <a target="_blank" href="https://github.com/hamzabusuri" class="btn-floating grey darken-3"> <i class="fa fa-github"></i></a>
                    </li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/hamza-busuri/" class="btn-floating blue-grey lighten-1"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        )
    }

}

export default FloatingButton;