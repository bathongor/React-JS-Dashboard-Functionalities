import React from 'react'

const NavigationBar = () => (
    <nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand">Dashboard</div>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                    <li>
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-dashboard"></i>
                        </div>
                    </li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <div>
                        Account
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default NavigationBar;