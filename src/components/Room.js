import React from "react";
import {Link} from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({room}) {
 
    // Getting name, slug, images and price from room object
    const{name, slug, images, price} = room;
    // console.log(images[0]);

return(
<article className="room">
    <div className="img-container">
        {/* Shows the image if not found shows defaultImg */}
        <img src={images[0] || defaultImg} alt="singleroom"/>
        <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
        </div>
        <Link to={`rooms/${slug}`} className="btn-primary room-link">Features</Link>
        </div>  
<p className="room-info">{name}</p>
</article>
)
}

// Type Checking with propTypes and setting validations
Room.propTypes = {
    room:PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}