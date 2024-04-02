/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Customcards = ({ header, text, bannerImage, pattern }) => {
    if (pattern == 1)
        return (
            <div className="home-banner-container-custom-card" style={{ justifyContent: 'space-between', flex: 1 }}>
                <div className="home-image-section-cutsom-card">
                    <img src={bannerImage} alt="" />
                </div>
                <div className="home-text-section-custom-card" >
                    <h1 className="primary-heading">
                        {header}
                    </h1>
                    <p className="primary-text">
                        {text}
                    </p>
                </div>

            </div>
        );
    else
        return (
            <div className="home-banner-container1">
                <div className="home-text-section" >
                    <h1 className="primary-heading">
                        {header}
                    </h1>
                    <p className="primary-text">
                        {text}
                    </p>
                </div>
                <div className="home-image-section">
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        );
};

export default Customcards;
