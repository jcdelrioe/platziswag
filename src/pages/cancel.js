import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <p>Lo sentimos que no te hayas decidido a hacer la compra</p>
        <p>Te esperamos de vuelta, no pares de aprender!!!</p>
        <span role="img" aria-label="emoji">
          💔
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
