import React, { Component } from 'react';

const initData = {
    pre_heading: "MOST POPULAR",
    heading: "Popular Collections",
    btn_1: "View All",
    btn_2: "Load More",
    content: "Discover the drops of the moment which have a crazy success, add one of these unique tokens to make your collection"
}

const data = [
    {
        "id": 1,
      "img": "/img/author_1.jpg",
      "avatar": "/img/avatar_1.jpg",
      "title": "Virtual Worlds",
      "content": "ERC-729"
    },
    {
      "id": 2,
      "img": "/img/author_2.jpg",
      "avatar": "/img/avatar_2.jpg",
      "title": "Digital Arts",
      "content": "ERC-522"
    }
]

class Collections extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="popular-collections-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                    <p>{this.state.initData.content}</p>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn text-left" href="/most-popular">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            <a className="seller" href="/item-details">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href="/item-details">
                                                    <h5 className="mb-2">{item.title}</h5>
                                                </a>
                                                <span>{item.content}</span>
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

export default Collections;