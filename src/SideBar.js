import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => (
    <div className="sidebar" data-color="orange" data-image="assets/img/sidebar-5.jpg">
        <div className="sidebar-wrapper">
            <div className="logo">
                <div className="simple-text">
                    Infinite Solutions Dashboard
                </div>
            </div>

            <ul className="nav">
                <li className="active">
                    <div>
                        <i className="pe-7s-graph"></i>
                        <p><Link to='/'>Shopping List</Link></p>
                    </div>
                </li>
                <li className="active">
                    <div>
                        <i className="pe-7s-graph"></i>
                        <p><Link to='/addcontent'>Credits</Link></p>
                    </div>
                </li>
                        
            </ul>
        </div>
    </div>
)

export default SideBar;