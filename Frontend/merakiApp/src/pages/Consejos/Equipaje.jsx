import React from 'react'

export const Equipaje = () => {
  return (
   <>
      <article className="article-equipaje d-flex flex-column justify-content-center ">
        <h3 className='ms-5'>Tips sobre el equipaje</h3>
        <div>
          <ul className='d-flex flex-column gap-3'>
            <li>
            Infórmate bien sobre la política de equipaje de tu aerolínea, ya que se cobra un plus por cada kilo que te pases o si las medidas no son las correctas.
            </li>
            <li>
             Verifica si se permiten artículos adicionales (como mochila pequeña, bolso de cámara, etc.).
            </li>
            <li>
             Asegúrate de que tenga cierre seguro y, si es posible, candado TSA (requerido en algunos aeropuertos).
            </li>
            <li>Usa una etiqueta con tu nombre y datos de contacto (sin poner dirección completa).</li>
            <li>
              No lleves objetos punzantes, líquidos grandes, aerosoles o baterías de litio sueltas en el equipaje facturado. Esto depende de cada país, así que informate bien de los artículos prohibidos.
            </li>
            <li>
              Menos siempre es más. Lleva ropa versátil y combinable. Evita los 'por si acaso'.
            </li>
              <li>
              Deja espacio para compras o souvenirs.
            </li>
             <li>
              Guarda los líquidos en una bolsa transparente y sellada si viajas solo con equipaje de mano (máximo 100 ml por envase).
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}
