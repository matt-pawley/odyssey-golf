import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
        error: false,
        isComplete: false,
        isLoading: false,
    }
    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({ [name]: value });
    }

    onSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true, error: false });

        const [ firstName, ...restOfName ] = this.state.name.split(' ');
        
        const response = await addToMailchimp(this.state.email, {
            FNAME: firstName,
            LNAME: restOfName.join(' '),
        });

        if (response.result === 'error') {
            this.setState({ isLoading: false, isComplete: false, error: response.msg });
            return;
        }
        
        this.setState({ isLoading: false, isComplete: true });
    }

    render() {
        const { isLoading, error } = this.state;

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
                            {error && <p>{error}</p>}

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

                            <Button className="button">{isLoading ? 'Loading' : 'Send'}</Button>
                        </form>
                    )}

                    <div className="mb-4">
                        <IconSmall />
                    </div>

                    <div className="social-links">
                        <SocialLink href="https://www.facebook.com/GolfOdyssey" icon={FaFacebook} />
                        <SocialLink href="https://twitter.com/MyGolfOdyssey" icon={FaTwitter} />
                        <SocialLink href="http://instagram.com/golfodyssey" icon={FaInstagram} />
                    </div>
                </div>
            </Layout>
        );
    }
}

