import React, { Component } from 'react';
import AuthorProfile from "../AuthorProfile/AuthorProfile";

class Create extends Component {
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            {/* Author Profile */}
                            <AuthorProfile />
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Collab</span>
                                    <h3 className="mt-3 mb-0">Create Item</h3>
                                    <h4 className="mt-3 mb-0">Openrare is a unique market place in the world, we want to bring much more than NFTs, that's why we created Openrare.

We develop unique drops resulting from artistic collaborations from all possible fields, to offer our customers the best, we must control the quality and exclusivity of our drops in order to offer each of our collectors satisfaction at all times.</h4>
                                
<h4 className="mt-3 mb-0">Openrare wishes to highlight a multitude of artists across the art world as part of an exclusive collaboration.
Are you an artist, a company, have a crazy idea or are you a collector of a unique physical object that you want to sell as NFTs in the easiest and safest way possible?</h4>
                                 
<h4 className="mt-3 mb-0">Openrare wishes to highlight a multitude of artists across the art world as part of an exclusive collaboration.
Are you an artist, a company, have a crazy idea or are you a collector of a unique physical object that you want to sell as NFTs in the easiest and safest way possible?</h4>
                                  </div>
                            </div>
                            {/* Item Form */}
                            <form id="contact-form" className="item-form card no-hover" method="POST" action="assets/php/mail.php">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Message" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit"><i className="icon-paper-plane mr-2" />Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Create;