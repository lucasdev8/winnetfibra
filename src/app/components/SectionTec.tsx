import { Icon } from "@iconify/react";

function SectionTec() {

    return (
        <section id="about" className="about tec">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
                        data-aos="fade-right">
                    </div>

                    <div
                        className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        data-aos="fade-left">
                        <h3>Técnicos capacitados!</h3>
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon"><Icon color="#7ed759" icon="solar:shield-network-bold-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Técnicos rapidos.</a></h4>
                            <p className="description">
                                Na Winnet Fibra, contamos com uma equipe de técnicos ágeis e preparados para atender você com rapidez e eficiência.
                                Nosso suporte trabalha para resolver qualquer situação no menor tempo possível, garantindo que sua conexão volte a funcionar perfeitamente.
                                Porque sabemos que internet de qualidade também significa atendimento rápido quando você precisa.
                            </p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon"><Icon color="#7ed759" icon="solar:smartphone-bold-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Disponibilidade eficaz.</a></h4>
                            <p className="description">A Winnet Fibra conta com disponibilidade técnica eficaz, pronta para atender sempre que você precisar.
                                Nossa equipe trabalha com agilidade e responsabilidade para identificar e resolver qualquer situação rapidamente.
                                Assim, garantimos que sua conexão permaneça estável, com suporte confiável sempre ao seu alcance.</p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon"><Icon color="#7ed759" icon="solar:call-chat-rounded-bold-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Instalação padronizada</a></h4>
                            <p className="description">Na Winnet Fibra, realizamos uma instalação padronizada, seguindo critérios técnicos que garantem qualidade e organização em cada detalhe.
                                Nossa equipe utiliza boas práticas e materiais adequados para assegurar o melhor desempenho da sua conexão.
                                Assim, você recebe uma instalação segura, eficiente e preparada para oferecer internet de alto nível desde o primeiro dia.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionTec