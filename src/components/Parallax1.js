import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

class Parallax1 extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="p1" class="parallax-container">
            <div class="parallax">
                <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" />
    
            </div>
            <div class="container">
                <div class="row">
                    <div class="col s12 center white-text">
                        <h1><b><i class="fa fa-quote-right"></i> QUOTE</b></h1>
                        <h4>"A good programmer is someone who always looks both ways before crossing a one-way street."
                            </h4>
                    </div>
                </div>
            </div>
    
        </div>
        )
    }

}

export default Parallax1;