"use client"

import { Icon } from "@iconify/react"
import { Button } from "@mui/material"
import { useState } from "react"
import ModalCobertura from "../utils/components/ModalCobertura"

function Header() {
  const [openModal, setOpenModal] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleClose = () => setOpenModal(false)

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