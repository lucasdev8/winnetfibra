// "use client"

// import { Icon } from "@iconify/react"
// import { useState } from "react"

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <header id="header" className="fixed-top d-flex align-items-center header-transparent">
//       <div className="container d-flex align-items-center justify-content-between">

//         <div>
//           <img src="/img/logo.png" alt="logo" width="120" />
//         </div>

//         <nav id="navbar" className={menuOpen ? "navbar navbar-mobile" : "navbar"}>
//           <ul>
//             <li>
//               <a className="nav-link scrollto active" href="/">
//                 <Icon icon="solar:home-2-bold-duotone" width={20} />&nbsp;Inicio
//               </a>
//             </li>

//             <li>
//               <a className="nav-link scrollto" href="#pricing">
//                 <Icon icon="solar:planet-bold-duotone" width={20} />&nbsp;Planos
//               </a>
//             </li>

//             <li>
//               <a className="nav-link scrollto" href="#faq">
//                 <Icon icon="solar:gps-bold-duotone" width={20} />&nbsp;Cobertura
//               </a>
//             </li>

//             <li>
//               <a className="nav-link scrollto" href="https://wa.me/5598992489457">
//                 <Icon icon="solar:headphones-round-bold-duotone" width={20} />&nbsp;Suporte
//               </a>
//             </li>

//             <li>
//               <a href="https://wa.me/5598992489457" className="btn btn-primary">
//                 <Icon icon="solar:user-circle-bold-duotone" width={20} />&nbsp;Área do Cliente
//               </a>
//             </li>
//           </ul>
//           <Icon
//             icon={menuOpen ? "solar:close-circle-line-duotone" : "solar:hamburger-menu-line-duotone"}
//             onClick={() => setMenuOpen(!menuOpen)}
//             width={40}
//           />
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header

"use client"

import { Icon } from "@iconify/react"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ModalCobertura from "../utils/components/ModalCobertura"

function Header() {
  const [openModal, setOpenModal] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    Swal.fire({
      icon: "success",
      title: "Seja Bem vindo!"
    })
  }, [])

  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container d-flex align-items-center justify-content-between">

        <img src="/img/logo.png" alt="logo" width="120" />
        <ModalCobertura handleClose={handleClose} open={openModal} />
        <nav
          id="navbar"
          className={`navbar ${menuOpen ? "navbar-mobile" : ""}`}
        // className="navbar"
        >
          <ul>

            <li>
              <Button
                className="nav-link scrollto"
                href="/"
                onClick={closeMenu}
              >
                <Icon icon="solar:home-2-bold-duotone" width={20} />
                &nbsp;Inicio
              </Button>
            </li>

            <li>
              <Button
                className="nav-link scrollto"
                href="#pricing"
                onClick={closeMenu}
              >
                <Icon icon="solar:planet-bold-duotone" width={20} />
                &nbsp;Planos
              </Button>
            </li>

            <li>
              <Button
                className="nav-link scrollto"
                href="#pricing"
                onClick={() => setOpenModal(true)}
              >
                <Icon icon="solar:gps-bold-duotone" width={20} />
                &nbsp;Cobertura
              </Button>
            </li>

            <li>
              <Button
                className="nav-link scrollto"
                href="https://wa.me/5598992489457"
                onClick={closeMenu}
              >
                <Icon icon="solar:headphones-round-bold-duotone" width={20} />
                &nbsp;Suporte
              </Button>
            </li>

            <li>
              <Button
                href="https://wa.me/5598992489457"
                // className="btn btn-primary"
                variant="contained"
                color="info"
                onClick={closeMenu}
              >
                <Icon icon="solar:user-circle-bold-duotone" width={20} />
                &nbsp;Minha OneClick
              </Button>
            </li>

          </ul>

          <Icon
            className="mobile-nav-toggle"
            icon={menuOpen
              ? "solar:close-circle-bold-duotone"
              : "solar:hamburger-menu-bold-duotone"}
            width={36}
            onClick={() => setMenuOpen(!menuOpen)}
          />

        </nav>

      </div>
    </header>
  )
}

export default Header