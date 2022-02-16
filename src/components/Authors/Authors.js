import React, { Component } from 'react';

const data = {
    preHeading: "Artists",
  heading: "Our Creators",
  content: ""
}

const authorData = [
    {
        id: 1,
        img: "/img/author_1.jpg",
        avatar: "/img/avatar_1.jpg",
        author: "authors",
        btnText: "Follow"
      },
      {
        id: 2,
        img: "/img/author_2.jpg",
        avatar: "/img/avatar_2.jpg",
        author: "Arham",
        btnText: "Follow"
      },
      {
        id: 3,
        img: "/img/author_3.jpg",
        avatar: "/img/avatar_3.jpg",
        author: "Yasmin",
        btnText: "Follow"
      },
      {
        id: 4,
        img: "/img/author_4.jpg",
        avatar: "/img/avatar_4.jpg",
        author: "William",
        btnText: "Follow"
      }
]

class Authors extends Component {
    state = {
        data: {},
        authorData: []
    }
    componentDidMount(){
        
                this.setState({
                    data: data,
                    authorData: authorData
                })
            }
    render() {
        return (
            <section className="popular-collections-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.data.preHeading}</span>
                                <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                <p>{this.state.data.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/author">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            <a className="seller" href="/author">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href={item.author}>
                                                    <h5>{item.author}</h5>
                                                </a>
                                                <a className="btn btn-bordered-white btn-smaller" href="#">{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Authors;