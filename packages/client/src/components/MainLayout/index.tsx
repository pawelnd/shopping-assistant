import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentWrapper from "./ContentWrapper";

export default () => {
    return (
        <div>
            <TopBar></TopBar>
            <ContentWrapper></ContentWrapper>
            <Footer></Footer>
        </div>
    );
};
