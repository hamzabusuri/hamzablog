import React from 'react';
import Background from '../images/cool-background.png';
import '../css/Blog.css'

class Blog extends React.Component{
    constructor(){
        super();
        this.state = {
            blogs: [],
            isLoaded: false,
        };

    }

    componentDidMount(){
        this.fetchedBlogs();
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
        console.log(fetchBlogs);

        if(isLoaded && fetchBlogs){
        return(
            <section className="profile-class" id="blog">
                <div className="containerportfolio">
                    <img className="bgimg" src={Background}/>
                    <h1 className="centeredport"><i class="fa fa-rss"> </i> BLOG</h1>
                    <div className="bloglist">
                    <div class="containerblog">
                            {fetchBlogs.map(blog => {
                        return ( 
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-12 post">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <h4>
                                                        <strong><a href="" class="post-title">{blog.blog_title}</a></strong></h4>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 post-header-line">
                                                    <i class="fa fa-user"></i> by <a href="#">{blog.publishedby}</a> 
                                                    <i class="fa fa-calendar"></i> {blog.datetime}
                                                </div>
                                            </div>
                                            <div class="row post-content">
                                                <div class="col-md-3">
                                                    <a href="#">
                                                    
                                                    </a>
                                                </div>
                                                <div class="col-md-12">
    
                                                    <p>
                                                        {blog.blog_body}
                                                    </p>
                                                    <p>
                                                        <a class="btn btn-read-more" href="">Read more</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            )
                            })
                            }      


                     </div>
                     </div>
                    </div>

            </section>
        )
        }

        else{
            console.log('loading')
            return(
                <div> Loading...</div>
            )
        }
    }

}

export default Blog;