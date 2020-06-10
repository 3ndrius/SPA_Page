import React from 'react';
import Round from '../assets/other/client_cercel_overlay.png'
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <section className="offer">

        <div className="left">
            <div className="content">
                <h1>Adipisci doloremque nemo explicabo laboriosam maiores.</h1>
                <div className="read-more"><Link to="/products">Read more</Link></div>
            </div>
           
        </div>
        <div className="right">
                <div className="content">
                    <h1>Lorem ipsum dolor sit amet. Totam, officia voluptatibus.</h1>
                    <div className="read-more"><Link to="/products">Learn more</Link></div>
                </div>
        </div>
        <img src={Round} alt="round" className="round"/>
    </section>
    );
}

export default Offer;
