import React from 'react';

class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
			<footer style={{backgroundColor: '#607d8b'}} class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">H.B</h5>
                            <h5 class="grey-text text-lighten-4">Welcome to my world.</h5>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#">Home</a></li>
                                <li><a class="grey-text text-lighten-3" href="#portfolio">Portfolio</a></li>
                                <li><a class="grey-text text-lighten-3" href="#skills">Skills</a></li>
                                <li><a class="grey-text text-lighten-3" href="#blog">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © Hamza Busuri 2019
                        <a class="grey-text text-lighten-4 right" target='_blank' href="https://and.digital/">AND Digital</a>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;