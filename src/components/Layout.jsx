import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';
import { Outlet} from "react-router-dom";

function Layout(props) {
    return(
        <div className="layout">
            <Header/>
                {/* { props.children } */}
                <Outlet />
            <Footer/>
        </div>
    );
}

export default Layout;