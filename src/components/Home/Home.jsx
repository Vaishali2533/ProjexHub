import React from 'react';
import Header from '../header/Header';
import '../header/Header.css';
import Main from '../body/Main';
import '../body/Main.css';
import Footer from '../footer/Footer';
import '../footer/Footer.css';

function Home() {
    return (
        <>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default Home;