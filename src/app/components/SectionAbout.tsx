import { Icon } from "@iconify/react"

function SectionAbout() {

    return (
        <section id="about" className="about">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
                        data-aos="fade-right">
                    </div>

                    <div
                        className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        data-aos="fade-left">
                        <h3>Mata Roma agora é WinNet Fibra!</h3>
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon"><Icon color="#7ed759" icon="solar:shield-network-bold-duotone" width={70}/></div>
                            <h4 className="title"><a href="">Internet 100% Fibra Óptica.</a></h4>
                            <p className="description">
                                Fibra óptica é uma tecnologia de internet que conecta diretamente a central do provedor à residência ou empresa usando cabos de fibra óptica, sem cobre. Ela oferece altas velocidades, maior estabilidade, baixa latência e menor interferência eletromagnética.
                            </p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon"><Icon color="#7ed759" icon="solar:smartphone-bold-duotone" width={70}/></div>
                            <h4 className="title"><a href="">Aplicativo.</a></h4>
                            <p className="description">Temos aplicativo própio, fácil de utilizar, é bem leve e com várias funcionalidades!, pague suas
                                Faturas, Gerencie pessoas conectadas em sua rede WIFI, faça alteração de SSID e Senha e Muito mais!</p>
                        </div>

                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon"><Icon color="#7ed759" icon="solar:call-chat-rounded-bold-duotone" width={70}/></div>
                            <h4 className="title"><a href="">Suporte Rápido</a></h4>
                            <p className="description">Nossa equipe de suporte trabalha 24 horas por dia, para tirar dúvidas ou solucionar
                                problemas!</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionAbout