import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Parallax1 from '../components/Parallax1';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';


class MainComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            blogs: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        this.fetchedBlogs();
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
          });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems);
          });

          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems);
          });

          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
          });



        }

    fetchedBlogs = () => {
        fetch('http://localhost:5000/blogs')
        .then(response => response.json())
        .then(fetchedBlogs => this.setState({blogs: fetchedBlogs}))
        .then(this.setState({isLoaded: true}))
    }
    render(){
        let isLoaded = this.state.isLoaded;
        let fetchBlogs = this.state.blogs;
        if(isLoaded && fetchBlogs){
        return(
            <div>
            <Nav/>
            <Profile/>
            <Parallax1/>
            <Portfolio/>
            <Skills/>
            <div class="section" style={{backgroundColor: '#101010'}} id="blog">
                <div class="container">
                    <div class="row">
                    <h3 class="header text_b center"><i class="fa fa-rss"></i> BLOGS</h3>
                    </div>
                    <div class="row center">
                        {fetchBlogs.map(blog => {
                            return(
                                <div class="col s12 m6">

                                    <div class="card">
                                            <div class="card-image waves-effect waves-block waves-light">
                                            <img class="responsive-img activator" src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1924&q=80"/>
                                            </div>
                                            <div key={blog._id} class="card-content">
                                            <i class="activator material-icons right">menu_book</i>
                                            <span class="card-title activator grey-text text-darken-4">{blog.blog_title}</span>
                                            <p>
                                            
                                                <span><i class="fa fa-user"></i> by {blog.publishedby}</span>
                                                <br></br>
                                                <span><i class="fa fa-calendar"></i> {blog.datetime}</span>
                                             </p>
                                            </div>
                                            <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">{blog.blog_title}<i class="material-icons right">close</i></span>
                                            <p style={{color: 'black'}}>
                                            
                                                <span><i class="fa fa-user"></i> by {blog.publishedby}</span>
                                                <br></br>
                                                <span><i class="fa fa-calendar"></i> {blog.datetime}</span>
                                             </p>
                                             <br></br>
                                             <p style={{color: 'black'}}>{blog.blog_body}</p>
                                            </div>
                                        </div>
          
                            </div>
                            );
                        })}
                        
                    </div>
                </div>
            </div>
            <FloatingButton/>
            <Footer/>
        </div>
        )
        }

        else{
            return(
                <div> Loading...</div>
            )
        }
    }

}

export default MainComponent;