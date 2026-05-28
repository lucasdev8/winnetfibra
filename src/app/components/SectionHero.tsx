"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"

function SectionHero() {

    return (
        <section id="hero">

            <div className="container banner">
                <div className="row justify-content-between">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">
                            <h1 id="arial">Internet Fibra Óptica em Mata Roma-MA</h1>
                            <h2 color="color: rgba(255,255,255,0.82);" id="arial">Planos a partir de <b>R$79,90</b> com instalação rápida, suporte local, planos de até <b>800</b> Mega</h2>
                            <div id="container-button">
                                <a className="btn-get-started scrollto">
                                    <Icon icon="solar:planet-bold-duotone" width={20} /> ASSINE JÁ
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                        <Image width={400} height={50} src="/img/astronauta.png" className="img-fluid animated" alt="astronauta" />
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