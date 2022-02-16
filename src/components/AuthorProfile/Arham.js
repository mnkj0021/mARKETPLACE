import React, { Component } from 'react';

const data = {
    "img": "/img/auction_2.jpg",
        "authorImg": "/img/avatar_8.jpg",
        "author": "Artnox",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "authorId": "ZqpthncaYTsd0579hasfu00st",
        "btnText": "Follow"
}

const socialData = [
    
        {
            "id": 1,
            "link": "facebook",
            "icon": "fab fa-facebook-f"
          },
          {
            "id": 2,
            "link": "twitter",
            "icon": "fab fa-twitter"
          },
          {
            "id": 3,
            "link": "google-plus",
            "icon": "fab fa-google-plus-g"
          },
          {
            "id": 4,
            "link": "vine",
            "icon": "fab fa-vine"
          }
      
    ]
class AuthorProfile extends Component {
    state = {
        data: {},
        socialData: []
    }
    componentDidMount(){
        
                this.setState({
                    data: data,
                    socialData: socialData
                })
    }
    render() {
        return (
            <div className="card no-hover text-center">
                <div className="image-over">
                    <img className="card-img-top" src={this.state.data.img} alt="" />
                    {/* Author */}
                    <div className="author">
                        <div className="author-thumb avatar-lg">
                            <img className="rounded-circle" src={this.state.data.authorImg} alt="" />
                        </div>
                    </div>
                </div>
                {/* Card Caption */}
                <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body mt-4">
                        <h5 className="mb-3">{this.state.data.author}</h5>
                        <p className="my-3">{this.state.data.content}</p>
                        
                        {/* Social Icons */}
                        <div className="social-icons d-flex justify-content-center my-3">
                            {this.state.socialData.map((item, idx) => {
                                return (
                                    <a key={`asd_${idx}`} className={item.link} href="#">
                                        <i className={item.icon} />
                                        <i className={item.icon} />
                                    </a>
                                );
                            })}
                        </div>
                        <a className="btn btn-bordered-white btn-smaller" href="#">{this.state.data.btnText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorProfile;