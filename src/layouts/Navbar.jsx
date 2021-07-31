import React from 'react'

const Navbar = () => {
    return (
        <div id="page-wrapper">
            <header id="header">
                {/* Nama product */}
                <div id="logo">
                    <a href="#" id="title">
                        Edurang
                    </a>
                </div>
                {/* UI pada navbar */}
                <nav id="nav-bar">
                    <ul>
                        <li>
                            <a href="#signup" id="nav-link">
                                Jenis Pinjaman
                            </a>
                        </li>
                        <li>
                            <a href="#tutor" id="nav-link">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button
                                    onclick="myFunction()"
                                    class="drop-button"
                                    id="beloaner"
                                >
                                    Masuk
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
