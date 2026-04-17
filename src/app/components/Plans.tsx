import Speedometer from "./Speedmeter"

type TPlan = {
    namePlan: string
    speedPlan: string
    pricePlan: number
    typeWifi: string
}

type Plans = {
    plans: TPlan[]
}

function Plans({ plans }: Plans) {

    return (
        <section id="pricing" className="pricing">
            <div id="pricing-individual"></div>
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Planos</h2>
                    <p>Escolha o melhor plano para você!</p>
                </div>

                <div className="row" data-aos="fade-left">
                    {plans?.map((plan, key) => (
                        <div key={key} className="col-lg-3 col-md-6">
                            <div className="box m-1" data-aos="zoom-in" data-aos-delay="100">
                                <h3>{plan.namePlan}</h3>
                                <Speedometer max={900} value={Number(plan.speedPlan)}/>
                                {/* <h3 className="mega">{plan.speedPlan} Mega</h3> */}
                                <h4 className="text-dark"><sup>R$</sup>{plan.pricePlan}<span className="text-dark"> / Mês</span></h4>
                                <ul>
                                    <li><i className="bx bx-wifi"></i> Wifi {plan.typeWifi}
                                    </li>
                                    <li><i className="bx bx-user"></i> Navegação ilimitada</li>
                                    <li><i className="bx bx-phone-outgoing"></i>Chamadas de video</li>
                                    <li><i className="bx bx-joystick-alt"></i>Jogos online</li>
                                    <li><i className="bx bx-server"></i>Down/Up: {plan.speedPlan}/{Number(plan.speedPlan)/2}</li>
                                    <li><i className="bx bx-check"></i>Suporte de Seg a Dom</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="https://t.me/kioopol_oficial" className="btn-buy">ASSINAR</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Plans