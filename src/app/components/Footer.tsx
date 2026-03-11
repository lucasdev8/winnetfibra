function Footer() {

    return (
        // <footer id="footer">
        //     <div className="footer-top">
        //         <div className="container">

        //             <div className="row justify-content-around align-items-center">

        //                 <div className="col-lg-4 col-md-6 footer-newsletter">
        //                     <h4>Fale conosco</h4>
        //                     <p>Deixe seu email</p>

        //                     <form action="/email" method="post">
        //                         <input type="email" name="email" />
        //                         <input type="submit" value="ENVIAR" />
        //                     </form>
        //                 </div>

        //                 <div className="col-lg-4 col-md-6">
        //                     <img src="/img/logo.png" width="120" />
        //                     <img src="/img/anatel.png" width="120" />

        //                     <p>Rua josé viturino gomes - Mata Roma</p>
        //                 </div>

        //             </div>

        //         </div>
        //     </div>
        // </footer>

        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-around align-items-center">

                        <div className="col-lg-4 col-md-6 footer-newsletter mb-5">
                            <h4>Fale-conosco</h4>
                            <p>Deixe seu email pra gente entrar em contato com você</p>
                            <form action="/email" method="post">
                                <input type="email" name="email" placeholder="Seu melhor email" className="form-control mb-2" />
                                <input type="submit" value="ENVIAR" className="btn btn-primary" />
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info text-center">
                                <div className="mb-3">
                                    <img src="/img/logo.png" alt="logo" width="120" className="me-2" />
                                    <img src="/img/anatel.png" alt="anatel" width="120" />
                                </div>
                                <p className="pb-3">Todos direitos Reservados | {new Date().getFullYear()}</p>
                                <p className="pb-4">Rua José Viturino Gomes - S/N - Mata Roma - MA</p>
                                <p className="pb-1">CNPJ: 00.000.000/0001</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer