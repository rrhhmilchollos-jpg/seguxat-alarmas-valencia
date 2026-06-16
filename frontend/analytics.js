// Google Analytics 4 — carga diferida desde un único archivo para que
// activar/cambiar el ID de medición no requiera editar las 8 páginas.
//
// ⚠️ PENDIENTE: sustituir "G-PENDIENTE" por el ID de medición real
// (formato G-XXXXXXXXXX) en cuanto se cree la propiedad en
// https://analytics.google.com → Admin → Crear propiedad.
// Mientras el ID siga siendo "G-PENDIENTE", este script no carga nada
// (para no enviar datos rotos a una propiedad inexistente).

(function () {
  var MEASUREMENT_ID = "G-PENDIENTE";

  if (MEASUREMENT_ID === "G-PENDIENTE") {
    console.info("[Seguxat] Google Analytics 4 no configurado todavía (falta el ID de medición real).");
    return;
  }

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);
})();
