import React from 'react'

function SobreNosotros() {
    return (
        <article class="nosotros d-flex flex-column align-items-center my-3">
            <div class="nosotros__titulo w-100 text-center mt-2">
                <h2 class="d-block px-5 py-4 p-xl-0">  SÉ PARTE DE NUESTRO VIVERO EN MENDOZA </h2>
            </div>
            <div class="nosotros__text d-flex flex-xl-row p-2 align-items-center justify-content-around">
                <p class="p-2 col-10 col-xl-8">
                    Tu aporte es fundamental para la construcción del viviero y así poder optimizar nuestros recursos.

                    No solo vas a hacer un aporte Ambiental si no también Social ya que será trabajado por alumnos de Colegios de la Zona!

                    Ya plantamos 9 Millones de Árboles en distintas partes del Mundo!

                    Sumá tus arboles con tu donación!
                </p>
                {/*<iframe class="col-10 col-xl-6" width="560" height="315" src="https://www.youtube.com/embed/1VplnxmVjao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
            </div>
        </article>
      )
}

export default SobreNosotros