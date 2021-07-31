import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div id="page-wrapper-footer">
                <div id="logo-footer">
                    <div href="#" id="title-footer">
                        BayarNanti
                        <h6> Bandung, Jawa Barat </h6>
                        <h6> 0852-1496-8412 </h6>
                    </div>
                </div>
                <ul id="footer-ul">
                    <li>
                        <a
                            href="https://twitter.com/bukanridhokun"
                            id="footer-link"
                        >
                            <img id="twitter" src="../../assets/twitter.png" />
                            <h4>Twitter</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://web.facebook.com/ridho.daffasyah/"
                            id="footer-link"
                        >
                            <img
                                id="facebook"
                                src="../../assets/facebook.png"
                            />
                            <h4>Facebook</h4>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/ridhodaffasyah/"
                            id="footer-link"
                        >
                            <img
                                id="instagram"
                                src="../../assets/instagram.png"
                            />
                            <h4>Instagram</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
