import { Divider, Stack, Typography } from "@mui/material"
import Speedometer from "./Speedmeter"
import { Icon } from "@iconify/react"

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
                                <Speedometer max={900} value={Number(plan.speedPlan)} />
                                <Divider />
                                <h4 className="text-dark"><sup>R$</sup>{plan.pricePlan}<sup>99</sup><span className="text-dark"> / Mês</span></h4>
                                <ul>
                                    <Stack
                                        component="ol"
                                        direction="column"
                                        spacing={0.1}
                                        sx={{
                                            pl: 2,
                                            textAlign: 'left',
                                            listStyle: 'none'
                                        }}
                                    >
                                        <li>
                                            <Icon icon="solar:wi-fi-router-bold-duotone" width={30} /><Typography variant="overline">Wifi {plan.typeWifi}</Typography>
                                        </li>

                                        <li>
                                            <Icon icon="solar:shield-network-bold-duotone" width={30} /><Typography variant="overline">Navegação ilimitada</Typography>
                                        </li>

                                        <li>
                                            <Icon icon="solar:round-sort-vertical-bold-duotone" width={30} /><Typography variant="overline">
                                                <b>{plan.speedPlan}</b> Down | <b>{Number(plan.speedPlan) / 2}</b> Up
                                            </Typography>
                                        </li>

                                        <li>
                                            <Icon icon="solar:call-chat-rounded-bold-duotone" width={30} /><Typography variant="overline">Suporte de Seg a Dom</Typography>
                                        </li>
                                    </Stack>
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