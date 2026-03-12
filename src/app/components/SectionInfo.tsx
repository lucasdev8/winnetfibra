import { Icon } from "@iconify/react"

function SectionInfo() {

    return (
        <section id="about" className="about info">
            <div className="container-fluid">

                <div className="row">
                    <div
                        className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        data-aos="fade-left">
                        <h3>Infraestrutura de ponta</h3>
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon"><Icon color="#7ed759" icon="solar:server-path-line-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Os melhores equipamentos.</a></h4>
                            <p className="description">
                                Na Winnet Fibra, utilizamos equipamentos de alta qualidade e tecnologia avançada para garantir uma conexão rápida, estável e segura.
                                Nossa infraestrutura é pensada para oferecer o máximo desempenho, com baixa latência e alta confiabilidade.
                                Assim, levamos até você uma internet preparada para atender todas as suas necessidades do dia a dia.
                            </p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon"><Icon color="#7ed759" icon="solar:graph-new-up-bold-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Alto desempenho</a></h4>
                            <p className="description">A Winnet Fibra oferece internet de alto desempenho, garantindo velocidade e estabilidade para todas as suas atividades online.
                                Nossa rede foi projetada para suportar streaming, jogos e trabalho remoto sem travamentos ou lentidão.
                                Com tecnologia de ponta, entregamos uma experiência de navegação rápida, fluida e confiável todos os dias.</p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon"><Icon color="#7ed759" icon="solar:lock-password-bold-duotone" width={70} /></div>
                            <h4 className="title"><a href="">Segurança</a></h4>
                            <p className="description">A Winnet Fibra prioriza qualidade e segurança em cada detalhe da sua rede.
                                Utilizamos tecnologia moderna e infraestrutura confiável para garantir uma conexão estável e protegida.
                                Assim, você navega com tranquilidade, sabendo que está conectado a uma internet segura e de alto padrão.</p>
                        </div>

                    </div>
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
                        data-aos="fade-right">
                        {/* <img src="img/details-1.png" width="400px" alt="" /> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionInfo