/**
 * Planes de coworking: fuente única para /tarifas (tarjetas y tabla comparativa),
 * sus datos estructurados, la FAQ y llms.txt.
 */
export const plans = [
  {
    id: "jornada-completa",
    compare: {
      access: "24 h, 7 días",
      desk: "Mesa exclusiva",
      rooms: "Ilimitado",
    },
    title: "Jornada completa",
    tagline:
      "Mesa exclusiva en espacio compartido, en jornada completa con acceso 24/7.",
    notes: ["Horario ilimitado de reserva de salas de reunión."] as const,
    image: "/photos/tarifa-jornada-completa.jpg",
    alt: "Coworker concentrado en su puesto de trabajo con luz natural",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Coworking",
        amount: "200 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Reservar semana de prueba", className: "btn btn-ink" },
  },
  {
    id: "sala-exclusiva",
    compare: {
      access: "24 h, 7 días",
      desk: "Sala privada",
      rooms: "Ilimitado",
    },
    title: "Sala exclusiva",
    tagline:
      "Tu propia sala dentro de Arroelo. Un espacio privado para tu equipo con acceso 24 horas.",
    notes: ["Horario ilimitado de reserva de salas de reunión."] as const,
    image: "/photos/tarifa-sala-exclusiva.jpg",
    alt: "Sala exclusiva con cuatro puestos enfrentados, sillas de oficina, ventana con cortinas y estantería blanca",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Sala privada",
        amount: "400 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Consultar disponibilidad", className: "btn btn-primary" },
  },
  {
    id: "media-jornada",
    compare: {
      access: "8:00–15:00 o 15:00–22:00",
      desk: "No permanente",
      rooms: "8 h/semana",
    },
    title: "Media jornada",
    tagline:
      "Si trabajas en casa por la mañana y por la tarde te apetece cambiar de aire —o a la inversa—, aquí tienes sitio.",
    notes: [
      "8 horas de reserva de sala de reunión semanal.",
      "No se pueden dejar cosas en la mesa: el puesto no es permanente.",
    ] as const,
    image: "/photos/tarifa-media-jornada.jpg",
    alt: "Puestos de trabajo junto a la ventana con luz natural",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Mañanas · 8:00–15:00",
        amount: "110 €",
        note: "+ IVA / mes",
      },
      {
        label: "Tardes · 15:00–22:00",
        amount: "100 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Consultar media jornada", className: "btn btn-ink" },
  },
  {
    id: "bono-salon",
    compare: {
      access: "Días sueltos",
      desk: "No permanente",
      rooms: "No incluidas",
    },
    title: "Bonos días sueltos",
    tagline:
      "Para quien teletrabaja dos o tres días a la semana o pasa una temporada en Pontevedra y quiere salir de casa y desconectar. Podrás trabajar desde nuestro salón.",
    notes: [
      "No hay derecho a reserva de salas de reunión.",
      "No se pueden dejar cosas en la mesa: el puesto no es permanente.",
    ] as const,
    image: "/photos/tarifa-bonos-dias.jpg",
    alt: "Dos coworkers trabajando con portátil en la mesa del salón",
    objectPosition: "object-[center_45%]",
    prices: [
      {
        label: "Bono 10 días",
        amount: "100 €",
        note: "+ IVA",
      },
      {
        label: "Bono 20 días",
        amount: "180 €",
        note: "+ IVA",
      },
    ],
    features: [] as const,
    cta: { label: "Pedir un bono", className: "btn btn-primary" },
  },
] as const;
