import { Box, Button } from "@mui/material";

export default function Suporte() {

    return (
        <div className="container">
            <div className="section-title mt-5" data-aos="fade-up">
                <h2>Suporte</h2>
                <p>Nosso time está pronto pra te atender!</p>
                <Box sx={{ mt: 10, mb: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a className="btn btn-primary"> Falar com suporte</a>
                </Box>
                <p></p>
            </div>
        </div>
    )
}