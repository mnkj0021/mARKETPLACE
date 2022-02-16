import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const BASE_URL = "https://my-json-server.typicode.com/gregos12/def1/blogSingle";

class BlogSingle extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="single featured post-details">
                <div className="container">
                    <div className="row">
                        {/* Main */}
                        <div className="col-12 col-lg-8 p-0">
                            <div className="row">
                                <div className="col-12 align-self-center">
                                    {/* Image */}
                                    <div className="blog-thumb">
                                        <img className="w-100" src={this.state.data.image} alt="" />
                                    </div>
                                    <h2 className="featured ml-0">{this.state.data.title}</h2>
                                    <p>{this.state.data.content_1}</p>
                                    <p>
                                    </p>
                                    <blockquote>{this.state.data.quote}</blockquote>
                                    <p>{this.state.data.content_2}</p>
                                    <p>{this.state.data.content_3}</p>
                                    {/* Post Holder */}
                                    <ul className="mb-5 post-holder">
                                        <li className="post-meta-item">
                                            <div className="date">
                                                <span className="posted-on"> Together we will revolutionize <a href="#" rel="bookmark"><time className="entry-date published updated" dateTime="2018-11-01T06:18:46+00:00">{this.state.data.date}</time></a></span>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogSingle;