import { Icon } from "@iconify/react";
import { Box, Dialog, DialogContent, MenuItem, Select } from "@mui/material";

type Props = {
    open: boolean
    height?: number
    handleClose: () => void
}

function ModalCobertura({ handleClose, open, height }: Props) {

    return (
        <Dialog
            open={open}
        >
            <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ height: height || 420, width: 350 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <Box onClick={handleClose}>
                            <Icon icon="solar:close-circle-line-duotone" width={50} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/img/logo-cor.png" alt="" width={200} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Select defaultValue="default" fullWidth>
                            <MenuItem value="default">Cidades que a OneClick Atende.</MenuItem>
                            <MenuItem value="mr">Mata Roma - MA(Em breve)</MenuItem>
                            <MenuItem value="mr">Anapurus - MA(Em breve)</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ModalCobertura