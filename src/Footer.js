import React from 'react'

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid">
            <nav className="pull-left">
                <ul>
                    <li>
                        <div>
                            Home
                        </div>
                    </li>

                </ul>
            </nav>
            <p className="copyright pull-right">
                &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
            </p>
        </div>
    </footer>
)

export default Footer;