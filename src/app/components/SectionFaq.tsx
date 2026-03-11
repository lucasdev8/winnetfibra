function SectionFaq() {

    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>F.A.Q</h2>
                    <p>Perguntas frequentes</p>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse"
                                data-bs-target="#faq-list-1">Porque escolher a WinNet Fibra? <i className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                <p>
                                    A WinNET Fibra oferece internet 100% em fibra óptica, com mais estabilidade, velocidade real e baixa latência. Nossos planos atendem desde o uso básico até alta performance, com suporte rápido, atendimento próximo e total transparência. Aqui você contrata um serviço confiável, pensado para funcionar bem todos os dias.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2"
                                className="collapsed">Quem Somos? <i className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    A WinNET Fibra é um provedor de internet que nasceu com o compromisso de entregar conexão estável, rápida e segura para residências e empresas. Trabalhamos com tecnologia de fibra óptica e investimos constantemente em infraestrutura para garantir qualidade real no serviço e no atendimento. Nosso foco é oferecer mais do que internet: oferecemos confiança, suporte próximo e uma experiência que funciona de verdade no dia a dia dos nossos clientes.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3"
                                className="collapsed">A quanto tempo a WinNET ta no mercado? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    A WinNET Fibra entrou no mercado recentemente com um propósito claro: entregar internet de qualidade e atendimento diferenciado desde o primeiro dia. Mesmo sendo uma empresa nova, contamos com uma equipe experiente, tecnologia de ponta e foco total na satisfação dos nossos clientes. A nossa estrutura foi planejada para oferecer um serviço estável, transparente e que cresce com você.
                                </p>
                            </div>
                        </li>



                    </ul>
                </div>

            </div>
        </section>
    )
}

export default SectionFaq