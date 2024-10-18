import React from 'react';

export default function Banner(props) {
    const bannerImg = {backgroundImage: `url(${props.imgUrl})`};
    return (
        <div className='banner-container' style={bannerImg}>
            <h1>{props.text}</h1>
        </div>
    );
}

Banner.defaultProps = {
    text: "",
};