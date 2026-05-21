"use client"

import { Icon } from "@iconify/react"
import { Button } from "@mui/material"
import { useState } from "react"
import ModalCobertura from "../utils/components/ModalCobertura"
import Image from "next/image"
import SectionHero from "./SectionHero"

function Header() {
  const [openModal, setOpenModal] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex align-items-center justify-content-between">

          <Image src="/img/logo.png" alt="logo" width="120" height="120" />
          
          <nav
            id="navbar"
            className={`navbar ${menuOpen ? "navbar-mobile" : ""}`}
          // className="navbar"
          >
            <ul>

              <li>
                <Button
                  href="/"
                  onClick={closeMenu}
                >
                  <Icon icon="solar:home-2-bold-duotone" width={20} />
                  &nbsp;<b style={{ color: "white" }}>Inicio</b>
                </Button>
              </li>

              <li>
                <Button
                  href="/planos"
                  onClick={closeMenu}
                >
                  <Icon icon="solar:planet-bold-duotone" width={20} />
                  &nbsp;<b style={{ color: "white" }}>Planos</b>
                </Button>
              </li>

              <li>
                <Button
                  href="/cobertura"
                  onClick={() => setOpenModal(true)}
                >
                  <Icon icon="solar:gps-bold-duotone" width={20} />
                  &nbsp;<b style={{ color: "white" }}>Cobertura</b>
                </Button>
              </li>

              <li>
                <Button
                  href="/suporte"
                  onClick={closeMenu}
                >
                  <Icon icon="solar:headphones-round-bold-duotone" width={20} />
                  &nbsp;<b style={{ color: "white" }}>Suporte</b>
                </Button>
              </li>

              <li>
                <Button
                  href="https://wa.me/5598992489457"
                  variant="contained"
                  color="info"
                  onClick={closeMenu}
                >
                  <Icon icon="solar:user-circle-bold-duotone" width={20} />
                  &nbsp;<b style={{ color: "white" }}>Minha OneClick</b>
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
      <SectionHero />
    </>
  )
}

export default Header