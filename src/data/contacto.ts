/** Datos de contacto y legales: fuente única para la web, los datos estructurados y llms.txt. */

export const contacto = {
  phone: "610 602 012",
  phoneHref: "tel:+34610602012",
  phoneIntl: "+34 610 602 012",
  email: "info@espacioarroelo.es",
  whatsappHref: `https://wa.me/34610602012?text=${encodeURIComponent(
    "Hola, me gustaría información sobre el coworking de Espacio Arroelo.",
  )}`,
  street: "Cobián Roffignac 6, planta 3",
  postalCode: "36002",
  city: "Pontevedra",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Cobi%C3%A1n+Roffignac+6+Pontevedra",
};

/** Horario de atención (el acceso de las tarifas fijas es 24 h). */
export const horario = {
  label: "Lunes a viernes, de 10:00 a 14:00 y de 16:00 a 19:00",
  short: "L–V · 10:00–14:00 y 16:00–19:00",
  slots: [
    { opens: "10:00", closes: "14:00" },
    { opens: "16:00", closes: "19:00" },
  ],
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

export const titular = {
  name: "Espacio Arroelo Coworking SL",
  nif: "B94079670",
  address: "Rúa Cobián Roffignac 6, planta 3, 36002 Pontevedra",
  email: contacto.email,
};
