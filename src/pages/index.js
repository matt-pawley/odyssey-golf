import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from './../components/button';
import Input from '../components/input';
import SocialLink from '../components/socialLink';

import { FaEnvelope, FaUserCircle, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import Icon from './../images/logo.svg';
import IconSmall from './../images/logo-small.svg';

export default class extends React.Component {
    state = {
        name: '',
        email: '',
        isComplete: false,
    }
    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({ [name]: value });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ isComplete: true });
    }

    render() {
        return (
            <Layout>
                <SEO title="Home" keywords={[`golf`, `odyssey`]} />
                <div className="inner">
                    <div className="mb-4">
                        <Icon />
                    </div>

                    <h2 className="m-0 mb-2">Website Coming Soon</h2>
                    <h3 className="m-0 mb-4">Be the first to know when we launch</h3>

                    {this.state.isComplete && (
                        <p className="mb-4">Great! We will be in touch soon.</p>
                    )}

                    {!this.state.isComplete && (
                        <form onSubmit={this.onSubmit} className="mb-4">
                            <div className="row mb-2">
                                <Input 
                                    required
                                    name="name"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                    placeholder="Your name" 
                                    renderIcon={() => <FaUserCircle />} 
                                />

                                <Input 
                                    required
                                    name="email" 
                                    type="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                    placeholder="Your email" 
                                    renderIcon={() => <FaEnvelope />} 
                                />
                            </div>

                            <Button className="button">Send</Button>
                        </form>
                    )}

                    <div className="mb-4">
                        <IconSmall />
                    </div>

                    <div className="social-links">
                        <SocialLink href="https://www.facebook.com" icon={FaFacebook} />
                        <SocialLink href="https://twitter.com/golfodysseyuk" icon={FaTwitter} />
                        <SocialLink href="http://instagram.com/golfodyssey" icon={FaInstagram} />
                    </div>
                </div>
            </Layout>
        );
    }
}

