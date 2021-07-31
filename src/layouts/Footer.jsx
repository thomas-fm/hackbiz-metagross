import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {
    return (
        <footer>
            <div id="page-wrapper-footer">
                <div id="logo-footer">
                    <div href="#" id="title-footer">
                        Edurang
                        <h6> Bandung, Jawa Barat </h6>
                        <h6> 0852-1496-8412 </h6>
                    </div>
                </div>
                <ul id="footer-ul">
                    <li>
                        <a href="#" id="footer-link">
                            <TwitterIcon />
                            <h4>Twitter</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">
                            <FacebookIcon />
                            <h4>Facebook</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="footer-link">
                            <InstagramIcon />
                            <h4>Instagram</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
