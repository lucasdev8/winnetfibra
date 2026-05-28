"use client"

import { useState } from "react";

import { Box } from "@mui/material";
import ModalCobertura from "@/app/utils/components/ModalCobertura";

export default function Cobertura() {
    const [openModal, setOpenModal] = useState(false)

    const handleClose = () => setOpenModal(false)
    const handleOpen = () => setOpenModal(true)

    return (
        <div className="container">
            <ModalCobertura handleClose={handleClose} open={openModal} />
            <div className="section-title mt-5" data-aos="fade-up">
                <h2>Cobertura</h2>
                <p>Verifique a disponibilidade.</p>
                <Box sx={{ mt: 10, mb: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="footer-newsletter">
                        <a className="btn btn-primary" onClick={handleOpen}>Consultar Cobertura</a>
                    </div>
                </Box>
                <p></p>
            </div>
        </div>
    )
}