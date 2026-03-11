function SectionHero() {

    return (
        <section id="hero">

            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">
                            <h1 id="message-header">
                                WinNet Fibra é<br />
                                Internet de verdade!
                            </h1>
                            <h2 style={{ color: "yellow" }}>Planos a partir de <b>R$79,99</b> de até <b>800</b> Mega.</h2>
                            <div className="text-center text-lg-start">
                                <a className="btn-get-started scrollto" href="#pricing" id="generete-ssh"><i
                                    className="bx bx-user-check"></i>Assine já!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                        <img src="img/astronauta.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

            <svg
                className="hero-waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
            >
                <defs>
                    <path
                        id="wave-path"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>

                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255,.1)" />
                </g>

                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255,.2)" />
                </g>

                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
        </section>
    )
}

export default SectionHero