// ===================== CONTENIDO DE ESTUDIO =====================
// v1 = "Un duelo de titanes en los orígenes de la tecnocracia colombiana: Lauchlin Currie - Albert Hirschman"
// v2 = "Malcolm Deas, el oráculo de Oxford"
// Ambos: podcast Déjà vu de La Silla Vacía (Alejandro Lloreda y Luis Guillermo Vélez)

const VIDEOS = {
  v1: {
    id: "yNIKs1G7VX8",
    short: "Currie vs. Hirschman",
    title: "Un duelo de titanes en los orígenes de la tecnocracia colombiana",
    guest: "Invitado: Andrés Guiot (doctor de Oxford, historiador de la planeación económica, traductor de la biografía de Hirschman)",
    color: "mint",
    emoji: "🏗️",
    esencial: [
      "En 1949 Colombia recibió la PRIMERA misión del BIRF (luego Banco Mundial) en el mundo, encabezada por Lauchlin Currie.",
      "Dos titanes del desarrollo, Currie (macroeconomista del New Deal) y Hirschman (pensador social, exiliado del nazismo), chocaron en Colombia.",
      "Colombia no era el 'Tíbet de Suramérica': fue pionera y 'conejillo de Indias' del desarrollo en la posguerra.",
      "Debates clave: Paz de Río vs. chatarrera en Barranquilla; reforma agraria (Hirschman) vs. desarrollo urbano y construcción (Currie).",
      "Currie ganó a largo plazo: su 'Operación Colombia' inspiró 'Las Cuatro Estrategias' de Misael Pastrana (1970-74)."
    ],
    secciones: [
      { t: "La misión de 1949", i: "🏦", p: [
        "Documento: <b>Bases de un programa de desarrollo para Colombia</b>, informe de la misión encabezada por <b>Lauchlin Currie</b>.",
        "Fue la <b>primera misión del Banco Internacional de Reconstrucción y Fomento (BIRF)</b> en el MUNDO, no solo en América Latina. El BIRF después hizo parte del Grupo Banco Mundial.",
        "Objetivo: formular un programa de desarrollo para <b>elevar el nivel de vida del pueblo colombiano</b>. No había precedentes.",
        "Antecedente: las <b>misiones Kemmerer</b> de los años 20 y 30.",
        "Currie llegó en <b>julio de 1949</b> con <b>14 expertos</b>; escribieron el informe a la carrera en Washington para entregarlo <b>una semana antes</b> del cambio de gobierno de Mariano Ospina Pérez a Laureano Gómez."
      ]},
      { t: "¿Cómo llegaron? Colombia 'levanta la mano'", i: "🙋", p: [
        "El gobierno de <b>Mariano Ospina Pérez</b> presentó al Banco Mundial una propuesta de financiación de proyectos de largo plazo.",
        "El Banco buscaba una nueva misión: el <b>Plan Marshall</b> lo había desplazado de la reconstrucción de Europa. Colombia ayudó a que pasara de banco de reconstrucción a <b>banco de fomento/desarrollo</b>.",
        "Proyecto bandera: <b>Acerías Paz de Río</b> (Belencito, Boyacá). El Banco necesitaba evaluar la capacidad de pago de Colombia → recluta a Currie.",
        "<b>Diplomacia económica</b>: el gobierno usó los hechos del <b>9 de abril de 1948</b> (Bogotazo) para decir que los proyectos eran urgentes para la reconstrucción.",
        "El presidente del Banco Mundial estaba en Bogotá el día del Bogotazo, por la <b>Conferencia Panamericana de 1948</b>. Contexto: <b>Guerra Fría</b>, 'el elefante en la sala'.",
        "Colombia, 'el ombligo del mundo': contradice la tesis del <b>'Tíbet de Suramérica'</b> (país aislado)."
      ]},
      { t: "Los dos titanes", i: "🥊", p: [
        "<b>Lauchlin Currie</b>: canadiense, del 'Brain Trust' de Roosevelt; <b>primer asesor económico de la Casa Blanca</b> (segundo gobierno Roosevelt); impulsor de las políticas fiscales expansivas del <b>New Deal</b>; asesor de <b>Chiang Kai-shek</b> en China.",
        "Currie fue perseguido por el <b>macartismo</b> (McCarthy): lo acusaron de filiación comunista y de ser de los que 'perdieron China'. Era el clásico liberal 'New Dealer'.",
        "<b>Albert Hirschman</b>: nacido en <b>Berlín</b>, familia judía no practicante; huyó del nazismo a los 18 años; estudió economía en Francia.",
        "Hirschman peleó con los republicanos en la <b>guerra civil española</b> (como Orwell) y en la <b>resistencia francesa</b>. Con <b>Varian Fry</b> y el Comité de Rescate de Emergencia ayudó a escapar a más de <b>3.000 personas</b> (Hannah Arendt, Marc Chagall, Marcel Duchamp). Serie de Netflix: <b>Transatlantic</b>.",
        "Hirschman trabajó en el <b>Plan Marshall</b> y llegó como asesor económico y financiero de la <b>Oficina de Planeación</b> (creada en el gobierno de Laureano Gómez por recomendación del Banco Mundial).",
        "Hirschman nunca fue comunista (su hermana sí). Venía de la juventud socialdemócrata de la República de Weimar.",
        "Paradoja: llegaron invitados por Ospina pero trabajaron con <b>Laureano Gómez</b>, un gobierno ultraconservador y anticomunista con simpatías falangistas, siendo ellos acusados de lo contrario.",
        "Se llevaban fatal: según Hirschman, tras un mes de 'convivencia' casi no se hablaban."
      ]},
      { t: "La paradoja: Violencia y desarrollo", i: "⚖️", p: [
        "1949: colapsa la democracia y empeora La Violencia… pero los tecnócratas parecían estar 'en otra dimensión'.",
        "A diferencia de la <b>Guerra de los Mil Días</b> (que destruyó la economía), La Violencia coincidió con el periodo de desarrollo <b>más dinámico</b> de Colombia: aprox. <b>1945/46–1965</b>.",
        "Frase invertida de Fabio Echeverri: 'la economía va bien, pero el país va mal'.",
        "Desde la Guerra de los Mil Días, Colombia tiene <b>disciplina fiscal ortodoxa</b> y buena relación con prestamistas (JP Morgan, Banco Mundial, FMI): 'Colombia paga su deuda'.",
        "Tradición de <b>planeación mixta público-privada</b>."
      ]},
      { t: "Bretton Woods y la idea de 'desarrollo'", i: "🌍", p: [
        "Posguerra: se crean en <b>Bretton Woods</b> el <b>FMI</b> y el <b>BIRF</b> (Banco Mundial).",
        "Keynes: los años 20 y 30 marcaron el fin del dogma decimonónico del <b>laissez-faire</b>.",
        "Las guerras mostraron que se podía planificar (nazis, soviéticos y luego todas las economías occidentales). Pregunta de 1946: ¿se puede usar la planificación para la paz y para volver ricas a las naciones pobres?",
        "El 'desarrollo' es una noción de <b>posguerra</b>: antes se creía que las economías crecían solas, 'orgánicamente'."
      ]},
      { t: "Duelo 1: Paz de Río", i: "🔩", p: [
        "Dos opciones de siderúrgica: <b>Boyacá</b> (cerca de minas de carbón y hierro) o una <b>chatarrera en Barranquilla</b>.",
        "<b>Currie RECHAZÓ Paz de Río</b>: por costo-eficiencia prefería la chatarrera en Barranquilla (material importado, ubicada en un puerto).",
        "<b>Hirschman la veía con mejores ojos</b>: era una 'escuela' para aprender a gestionar grandes proyectos y generaba <b>encadenamientos productivos hacia adelante y hacia atrás</b> (desarrollo regional y nacional).",
        "Contexto: todos querían industria pesada propia; precedente de <b>Volta Redonda</b> en Brasil (gobierno Vargas). Además se justificaba con el desarrollo de una región golpeada por la violencia."
      ]},
      { t: "CEPAL y el cepalismo 'tímido' en Colombia", i: "📊", p: [
        "<b>CEPAL</b>: agencia de la ONU creada en <b>1948</b> para América Latina, dirigida al inicio por <b>Raúl Prebisch</b> (banquero central argentino).",
        "Premisa: el comercio internacional es <b>asimétrico</b>; el progreso de la <b>periferia</b> depende del <b>centro</b>. Se necesita acción deliberada del Estado.",
        "<b>ISI – Industrialización por sustitución de importaciones</b>: aranceles y restricciones a importaciones para desarrollar la industria nacional. Ejemplos: Brasil ('poster child'), México, Argentina.",
        "En Colombia la adopción fue <b>tímida</b>. Mayor influencia a finales de los 50 → primer plan del Frente Nacional (plan decenal). Colombia sí participó en el <b>mercado andino</b> a finales de los 60.",
        "¿Por qué tímida? (1) Herencia del <b>liberalismo económico de los años 30</b> (Esteban Jaramillo), también en el conservatismo ospinista; (2) el poder de los <b>cafeteros</b>, dueños de las divisas.",
        "Hirschman (artículo de <b>1960</b> sobre ideologías del desarrollo): el cepalismo sintetiza dos tradiciones: la <b>autoflagelante</b> (arielismo, culpa de la herencia hispánica) y el <b>antiimperialismo</b> (culpa de EE.UU.)."
      ]},
      { t: "La gran paradoja conservadora", i: "🎩", p: [
        "Los gobiernos MÁS conservadores, <b>Ospina y Laureano Gómez</b>, fueron los más intervencionistas y de mayor nacionalismo económico.",
        "Laureano: creación de <b>Ecopetrol</b> (decisión de arriba hacia abajo, no fruto de una marcha obrera en Barranca), <b>Paz de Río</b>, <b>reforma del Banco de la República de 1951</b> (banca de fomento), <b>Código del Trabajo</b>.",
        "Visión corporativista, católica integral, antiliberal: el Estado como ente orgánico.",
        "También: la <b>Oficina de Planeación</b> (antecesora del DNP) y el <b>DANE</b> (las estadísticas pasan de la Contraloría al Ejecutivo).",
        "En esa época la planificación era un <b>consenso de izquierda y derecha</b>; eso cambia radicalmente en los años 80."
      ]},
      { t: "Después del golpe de Rojas (1953)", i: "🐄", p: [
        "<b>Currie renunció de inmediato</b> y se fue a <b>criar vacas en Albán (Cundinamarca)</b>. No le salió bien.",
        "<b>Hirschman</b> siguió <b>un año</b> frustrado con el gobierno militar, renunció y abrió una <b>consultora privada</b>. Le impresionaron las élites del <b>Valle del Cauca</b>.",
        "De ahí su idea de las <b>'racionalidades ocultas'</b>: la capacidad de emprendedores, firmas, hogares y comunidades para arreglárselas y encontrar oportunidades donde nadie las veía (menos planeación desde arriba).",
        "Más misiones: <b>CEPAL (1954)</b> –Colombia parecía excepcional porque los precios del café estaban por las nubes– y la <b>Misión Lebret</b> (humanistas franceses) con indicadores de vida rural usados en la rehabilitación de Lleras Camargo.",
        "Carta de la Junta Militar: de <b>250 informes</b> de la oficina de planeación, la mayoría quedaron 'en las gavetas'."
      ]},
      { t: "El papel del experto (tesis de Guiot)", i: "🧑‍🔬", p: [
        "Hirschman: al experto es fácil <b>echarle la culpa</b>; sirve de <b>chivo expiatorio</b> en crisis.",
        "Hipótesis de Guiot: los gobiernos colombianos llaman tantas misiones para <b>atribuir (o evadir) responsabilidades</b>: si sale bien, fue el político; si sale mal, 'me obligó el Fondo'.",
        "Visión menos cínica: el experto como <b>educador público</b>. Currie veía al economista como quien eleva el nivel de la discusión pública. Herencia: tecnócratas que escriben en prensa y hacen pedagogía."
      ]},
      { t: "Frente Nacional (1958): planeación 'albertollerista'", i: "🤝", p: [
        "Se crean el <b>DNP</b>, la <b>ESAP</b> y la <b>Comisión del Servicio Civil</b> (acuerdos de Sitges y Benidorm): había que <b>despolitizar el Estado</b>, que era un 'botín' de los partidos.",
        "Lema de Alberto Lleras Camargo: <b>'Austeridad y desarrollo'</b>.",
        "Planeación NO cepalina sino 'albertollerista': racionalizar las finanzas públicas para que el Estado dé infraestructura y la iniciativa privada produzca.",
        "Inspiración francesa: <b>planeación indicativa</b> (el Estado propone metas y las concierta con los privados, no les ordena).",
        "Primer contacto con el <b>FMI</b>: plan de estabilización acordado en la <b>Junta Militar de 1957</b>, porque Rojas Pinilla gastó mucho (El Dorado, vías, puentes) con la bonanza cafetera de 1954-55 y luego no fue sostenible."
      ]},
      { t: "Duelo 2: Reforma agraria vs. ciudades", i: "🌾", p: [
        "<b>Ley 135 de 1961</b> (reforma agraria), con apoyo del Banco Mundial, EE.UU., la <b>Alianza para el Progreso</b>, USAID y la CEPAL.",
        "Lógica: no se puede industrializar sin un agro productivo. Además la reforma agraria era parte de la <b>caja de herramientas del anticomunismo</b> (Corea, Italia…).",
        "<b>Hirschman</b> la defendió: libro <b>'Journeys Toward Progress' (1963)</b>; capítulo dedicado a <b>Carlos Lleras Restrepo</b>, 'maestro en el arte de la reforma'. La llamó <b>'revolución silenciosa'</b>. Instituciones: <b>Incora</b>, <b>Asociación de Usuarios Campesinos</b>.",
        "Frase de Hirschman: <b>una revolución es más fácil de realizar que una reforma</b>.",
        "<b>Currie</b>, tras su fracaso con las vacas, publica <b>'Operación Colombia'</b> (1960-61, encargada por Alberto Lleras): NO reforma agraria, sino <b>desarrollo urbano y construcción</b>; aprovechar la <b>revolución verde</b> y dejar que los campesinos migren a las ciudades, creando capacidad para absorber esa mano de obra.",
        "La urbanización pasó en TODA América Latina (y Europa), con o sin violencia. Películas: La Dolce Vita, Ciudad de Dios, <b>Los hijos de Sánchez</b>. Colombia tenía de las tasas de natalidad más altas del mundo."
      ]},
      { t: "Las Cuatro Estrategias (Pastrana, 1970-74)", i: "4️⃣", p: [
        "Currie maduró sus ideas ~10 años y encontró la coyuntura con el presidente electo <b>Misael Pastrana Borrero</b>.",
        "Considerado <b>el gran plan de desarrollo colombiano</b>: simple, elegante, fácil de comunicar, corto, y sí se implementó (plan de Estado).",
        "1) <b>Construcción urbana como sector líder</b> (vivienda, ahorro privado, empleo urbano).",
        "2) <b>Exportaciones no tradicionales</b> (flores, algodón): menos dependencia del café.",
        "3) <b>Productividad agrícola</b> vía crédito y tecnificación (escalas medias), NO reforma agraria.",
        "4) <b>Redistribución</b>: impuestos progresivos y a la valorización de la tierra.",
        "No era neoliberal (Currie no era un 'Chicago Boy'). La construcción también es <b>política industrial</b>: encadenamientos con cerámica, acero, ladrillo… los mismos encadenamientos de Hirschman pero con vivienda.",
        "<b>Pacto de Chicoral</b>: según el video, un mito ('ni fue en Chicoral ni fue un pacto'); la reforma agraria ya era <b>anacrónica</b> porque la gente ya estaba en las ciudades."
      ]},
      { t: "Final de los protagonistas y veredicto", i: "🏁", p: [
        "<b>Currie</b> se quedó en Colombia el resto de su vida, murió aquí y fue el <b>'decano de los economistas'</b> (como si Le Corbusier terminara sus días en Chapinero).",
        "<b>Hirschman</b> se fue en <b>1956</b>: Yale, Columbia, Harvard y el <b>Instituto de Estudios Avanzados de Princeton</b> (Einstein, Oppenheimer, von Neumann). Obras: <b>'Salida, voz y lealtad'</b>, <b>'Las pasiones y los intereses'</b>, <b>'Retóricas de la intransigencia/de la reacción'</b>.",
        "Hirschman pasó de tecnócrata a gran pensador social (como Polanyi, Gramsci, Popper, Hayek).",
        "Ironía: Currie terminó siendo el gran 'maestro de la reforma' que Hirschman elogiaba en Carlos Lleras, y ambos convergen en un desarrollo más estratégico, menos 'de arriba hacia abajo'.",
        "Veredicto: Colombia arrancó más atrás y llegó más adelante que Chile, Perú, Venezuela y posiblemente Argentina.",
        "Coyuntura 2026: el gobierno de Abelardo de la Espriella acudió al FMI para el Plan Nacional de Desarrollo 'Colombia, la patria milagro 2026-2030'. ¿Desempolvar Operación Colombia?"
      ]}
    ],
    lente: [
      "<b>Multilateralismo pionero</b>: Colombia es 'first mover' con el Banco Mundial (1949), las misiones Kemmerer y el FMI (1957).",
      "<b>Diplomacia económica</b>: usar el Bogotazo para pedir urgencia al Banco Mundial; la Conferencia Panamericana de 1948 en Bogotá.",
      "<b>Guerra Fría</b>: macartismo contra Currie y Hirschman; reforma agraria y Alianza para el Progreso como herramientas anticomunistas.",
      "<b>Integración regional</b>: CEPAL, centro-periferia y el mercado/pacto andino a finales de los 60.",
      "<b>Colombia vs. 'Tíbet de Suramérica'</b>: no fue un país aislado sino un laboratorio global del desarrollo."
    ],
    personajes: [
      { n: "Lauchlin Currie", r: "Economista canadiense-estadounidense", d: "Primer asesor económico de la Casa Blanca (Roosevelt). Dirigió la misión del BIRF de 1949. 'Operación Colombia' y 'Las Cuatro Estrategias'. Se quedó en Colombia." },
      { n: "Albert Hirschman", r: "Economista y pensador social", d: "Berlinés, exiliado del nazismo. Plan Marshall. Asesor de la Oficina de Planeación. Encadenamientos, racionalidades ocultas, 'revolución silenciosa'." },
      { n: "Mariano Ospina Pérez", r: "Presidente conservador", d: "Pidió el préstamo al Banco Mundial ('levantó la mano'). Fracaso político, éxito económico." },
      { n: "Laureano Gómez", r: "Presidente conservador", d: "Gobierno más intervencionista: Ecopetrol, Paz de Río, reforma BanRep 1951, Código del Trabajo, Oficina de Planeación." },
      { n: "Raúl Prebisch", r: "Banquero central argentino", d: "Dirigió la CEPAL en sus inicios: centro-periferia e ISI." },
      { n: "Carlos Lleras Restrepo", r: "Tecnócrata y presidente", d: "'Maestro en el arte de la reforma' para Hirschman. Obsesionado con la reforma agraria (Incora, usuarios campesinos)." },
      { n: "Alberto Lleras Camargo", r: "Presidente del Frente Nacional", d: "'Austeridad y desarrollo'. Ley 135 de 1961. Le encargó a Currie el estudio que se volvió 'Operación Colombia'." },
      { n: "Misael Pastrana Borrero", r: "Presidente 1970-74", d: "Adoptó el plan de Currie: 'Las Cuatro Estrategias'." },
      { n: "Varian Fry", r: "Estadounidense", d: "Con Hirschman, en el Comité de Rescate de Emergencia, sacó a más de 3.000 personas de Europa." },
      { n: "Edwin Kemmerer", r: "Economista estadounidense", d: "Sus misiones de los años 20 y 30 son el antecedente de la misión Currie." },
      { n: "Esteban Jaramillo", r: "Economista colombiano", d: "Símbolo del liberalismo económico de los años 30 que frenó el cepalismo." },
      { n: "Andrés Guiot", r: "Invitado del episodio", d: "Doctor de Oxford, experto en historia de la planeación económica; traductor de la biografía de Hirschman." }
    ],
    timeline: [
      ["Años 20-30", "Misiones Kemmerer"],
      ["1948", "Bogotazo (9 de abril) y Conferencia Panamericana en Bogotá; nace la CEPAL"],
      ["1949", "Llega la misión del BIRF encabezada por Currie (julio)"],
      ["1950-53", "Gobierno de Laureano Gómez: Oficina de Planeación, Hirschman asesor"],
      ["1951", "Ecopetrol y reforma del Banco de la República (banca de fomento)"],
      ["1953", "Golpe de Rojas Pinilla: Currie renuncia y se va a Albán"],
      ["1954", "Misión de la CEPAL; bonanza cafetera"],
      ["1956", "Hirschman deja Colombia"],
      ["1957", "Junta Militar: plan de estabilización con el FMI"],
      ["1958", "Frente Nacional: DNP, ESAP, Servicio Civil"],
      ["1960", "Hirschman: artículo sobre ideologías del desarrollo"],
      ["1961", "Ley 135 de reforma agraria; 'Operación Colombia' de Currie"],
      ["1963", "Hirschman publica 'Journeys Toward Progress'"],
      ["1970-74", "Pastrana: 'Las Cuatro Estrategias'"],
      ["1972-73", "El llamado 'Pacto de Chicoral'"],
      ["2026", "Gobierno de De la Espriella acude al FMI para el PND"]
    ]
  },

  v2: {
    id: "mwv7zTpHeLo",
    short: "Malcolm Deas",
    title: "Malcolm Deas, el oráculo de Oxford",
    guest: "Invitado: Diego Aretz, autor de 'Malcolm Deas. Retrato del inglés que hizo de Colombia su historia'",
    color: "lavender",
    emoji: "🎓",
    esencial: [
      "Malcolm Deas: historiador inglés de Colombia (Oxford), llegó en 1963 a los 22 años y murió en 2023. Fue el 'guía espiritual' del podcast.",
      "Fue contrapeso de la historiografía 'hegemónica' (Fals Borda, violentología): historia empírica, de detalles y archivo, contra las grandes teorías.",
      "Tesis: Colombia no es 'un país violento' sino 'un país que en ocasiones ha sido violento'; la violencia nace muchas veces de la EXCLUSIÓN POLÍTICA.",
      "Pregunta clave para entender un país: ¿cómo se manda? En Colombia el poder es difuso: 'unos creen que mandan y otros creen que obedecen'.",
      "Influyó en la seguridad: Barco, Gaviria, la Constitución del 91 y la seguridad democrática de Uribe; en 2016 apoyó el proceso de paz ('uribista santista')."
    ],
    secciones: [
      { t: "El libro y el autor", i: "📖", p: [
        "Libro: <b>'Malcolm Deas. Retrato del inglés que hizo de Colombia su historia'</b>, de <b>Diego Aretz</b>.",
        "Es un <b>perfil biográfico/periodístico</b>: unas 300 páginas, <b>más de 40 fuentes</b> y <b>más de 40 horas</b> de entrevista con Deas.",
        "La idea inicial era una entrevista larga tipo <b>'El olor de la guayaba'</b> (García Márquez con Plinio Apuleyo Mendoza), pero Deas enfermó y se acabaron las horas.",
        "Entonces 'pluralizaron': hablaron con quienes lo conocieron (José Antonio Ocampo, James Robinson, Gonzalo Sánchez, Rocío Londoño –su pareja– y <b>cuatro expresidentes</b>).",
        "Mientras más habla de Malcolm, más termina hablando de la Colombia que él vio.",
        "Prefacio de <b>James Robinson</b> (Nobel de Economía), un contradictor intelectual de Deas."
      ]},
      { t: "¿Quién era Malcolm Deas?", i: "🇬🇧", p: [
        "Nació en <b>Dorset</b>, 'el corazón de Inglaterra', en una familia muy ligada al Imperio Británico y a la India (su hermano tiene una plantación de té allá).",
        "De niño quería ser periodista en la India; terminó 'buscando las Indias' como Colón, y su trabajo de historiador se parecía al de un buen periodista.",
        "Recibió la <b>OBE (Orden del Imperio Británico)</b>, por sus aportes al Reino Unido (fue asesor de gobiernos británicos), no por ayudar a presidentes colombianos.",
        "Primero pensó en <b>México</b>, pero los mexicanistas estaban obsesionados con Zapata. Eligió Colombia.",
        "Lo atrajeron dos libros: <b>'One Damn Thing After Another'</b> (un inglés que trae un toro de lidia a la Sabana de Bogotá) y <b>'Nostromo'</b> de Joseph Conrad.",
        "Dedicó <b>60 años</b> a la historia de Colombia, Venezuela y América Latina. Fue <b>proctor</b> en Oxford.",
        "Sin tener doctorado, dirigió/evaluó <b>unos 60 doctorados</b> ('Dios lo había castigado').",
        "Obra de muchos <b>ensayos cortos</b>, no grandes volúmenes; daba gran importancia a las <b>personalidades</b>. Murió en <b>2023</b>."
      ]},
      { t: "Llegada a Colombia (1963)", i: "✈️", p: [
        "Llegó en <b>1963</b>, con 22 años, con una beca del <b>Institute of Current World Affairs</b> (ligada a EE.UU., país que nunca le gustó mucho). Debía escribir informes, que luego publicó el <b>Banco de la República</b>.",
        "Era fellow de <b>All Souls College</b> (Oxford), sin obligaciones de enseñanza.",
        "Primera impresión: casas inglesas y lluvia → '¿Qué carajos he hecho?'. Pero a una hora de Bogotá había 'otros universos'.",
        "Colombia en transición a la modernidad: país rural, migraciones del campo a la ciudad, Bogotá con <b>1,6 millones</b>; en ~20 años pasó a ~70% urbano.",
        "Contexto: <b>operación Marquetalia</b>, <b>Revolución Cubana</b> (él le daba gran peso en el origen de las guerrillas).",
        "'No había plata': 'aquí hasta los ricos no eran ricos'."
      ]},
      { t: "Oxford y la Revolución Cubana", i: "🏛️", p: [
        "En <b>1964</b> se funda en Oxford el <b>Latin American Centre</b>; Deas fue cofundador con <b>Raymond Carr</b> (gran historiador de la España moderna).",
        "Tras la <b>Revolución Cubana</b>, el gobierno británico creó centros de estudios de área por miedo a que la Guerra Fría se desbordara en la región.",
        "Por eso Deas decía, 'mamando gallo', que <b>le debía su puesto a Fidel Castro</b>.",
        "Raymond Carr le aconsejó: 'especialícese en un país'. Nadie en Europa sabía de Colombia."
      ]},
      { t: "La historia en Colombia: 'no había historiadores'", i: "🕸️", p: [
        "Significa que no había historia <b>científica/profesional</b> contemporánea.",
        "La <b>Academia Colombiana de Historia</b> 'olía a telarañas': 80% sobre la independencia; manual de <b>Henao y Arrubla</b> (años 20); biografías de conquistadores.",
        "Llegaban historiadores estadounidenses con visión <b>economicista/estadística</b> (a Deas no le gustaba) y corrientes francesas <b>marxistas</b> y luego <b>posmodernas</b>.",
        "Deas iba a <b>contracorriente</b>: visión <b>empírica y pragmática</b> de Oxford; '¿qué está pasando realmente en la calle?'.",
        "¿Por qué ensayos tan cortos? <b>'Porque alguien tiene que pensar'</b>. No había que echar <b>'paja'</b>."
      ]},
      { t: "Contra el 'pensamiento hegemónico'", i: "🧭", p: [
        "<b>Orlando Fals Borda</b>: fundador de la sociología; inventó la <b>IAP (investigación acción participativa)</b> = investigación + activismo político. Deas: 'se despistó'.",
        "'<b>Se despistó</b>' era lo más ofensivo que Deas decía de alguien (también lo dijo de Camilo Torres).",
        "<b>Gonzalo Sánchez</b>: su principal contradictor; de los fundadores del IEPRI (U. Nacional), referente de la <b>violentología</b>.",
        "Esas escuelas eran financiadas por las fundaciones <b>Ford y Rockefeller</b>; hacían historia en buena parte marxista: estudiar el pasado para el presente (eso le chocaba a Deas).",
        "Riesgo del intelectual 'comprometido' (engagé): sesgar lo que se encuentra."
      ]},
      { t: "Del poder y la gramática", i: "✒️", p: [
        "En la imaginación inglesa, el siglo XIX latinoamericano era golpes, generales de charretera y exotismo.",
        "Deas encontró en Colombia <b>civiles y civilistas</b> de corbatín gobernando: <b>gramáticos</b> en el poder.",
        "El <b>civilismo</b> y la democracia colombiana eran las grandes paradojas que lo intrigaban → su ensayo famoso <b>'Del poder y la gramática'</b>."
      ]},
      { t: "La costurera de Suaita: política para todos", i: "🧵", p: [
        "Ensayo sobre el <b>diario de una mujer en Suaita</b> (entre Boyacá y Santander), costurera y vendedora de dulces, que por 30 años anotó cómo vivía la política.",
        "Demostró que la <b>politización penetraba todas las capas de la sociedad</b> desde temprano en el siglo XIX, algo poco común en América Latina (salvo países como EE.UU.).",
        "Refutaba la tesis marxista de que la política era cosa de una delgada élite ('conversación entre caballeros') y el pueblo iba 'como borrego' a las guerras.",
        "Aunque el 80% fuera analfabeta, la gente hablaba de política en tiendas y chicherías. Colombia nace como <b>'república electoral'</b>.",
        "Gonzalo Sánchez reconoció: 'pensábamos que era un excéntrico inglés… cuán equivocados estábamos'."
      ]},
      { t: "Élites, Robinson y el optimismo", i: "🔄", p: [
        "Críticos decían que Deas era <b>demasiado optimista</b>, que le daba 'una palmadita' a las élites.",
        "<b>James Robinson</b> (Nobel de Economía, inglés, amigo) tenía la visión opuesta: élites cerradas que no incluyeron al país. Dictaron juntos un <b>seminario de verano en Los Andes</b> (idea de Alejandro Gaviria).",
        "Visión del video: las <b>élites rotan</b>; las grandes fortunas de hoy son nuevas (Santo Domingo no va más de 100 años atrás).",
        "Los defectos de las élites son los defectos de los colombianos: el fracaso del 20-30% en pobreza es colectivo (geografía, instituciones, educación).",
        "En el prefacio, Robinson compara a Deas con <b>Henry Kissinger</b> por sus amigos presidentes."
      ]},
      { t: "¿Cómo se manda en Colombia?", i: "👑", p: [
        "Pregunta central: para entender la política de un país, pregunte <b>cómo se manda</b> y quién tiene el poder. Gran importancia al <b>caciquismo/cacicazgo</b>.",
        "Chiste: <b>'En Colombia unos creen que mandan y otros creen que obedecen'</b>.",
        "El <b>poder en Colombia es difuso</b>: gobernar siempre ha sido difícil por la fragmentación territorial y la colonización en aislamiento → gente muy independiente.",
        "Anécdota del canciller <b>Jaime Bermúdez</b>: tras una charla sobre la Constitución del 91 en la costa, un señor dijo: <b>'Profe, eso no pegó aquí'</b>.",
        "<b>Arzobispo-virrey Caballero y Góngora</b>: desmontó a los <b>Comuneros</b> (1781) prometiendo, firmando y cumpliendo 'un poquito'; Deas decía que así se desmontó el paro de 2021."
      ]},
      { t: "La violencia: contra las 'causas objetivas'", i: "🕊️", p: [
        "Participó de cerca en los gobiernos de <b>Virgilio Barco</b> y sobre todo <b>César Gaviria</b> (consejería de seguridad). Puso la <b>seguridad</b> en la agenda académica.",
        "Tesis de las <b>causas objetivas</b> (del cura <b>Germán Guzmán</b> y Fals Borda, años 60; también Belisario Betancur): hay violencia porque hay <b>pobreza y desigualdad</b>. Deas era <b>escéptico</b>: esas causas existían en toda América Latina.",
        "Frase clave: Colombia no es un país violento, es <b>'un país que en ocasiones ha sido violento'</b>.",
        "Comparar: mientras otros países mataban millones (Alemania), en Colombia no ha habido una decisión colectiva de exterminio.",
        "Conclusión: la violencia nace muchas veces de la <b>exclusión política</b>: <b>la incapacidad del vencedor de integrar al vencido</b> en la representación política. (Ej.: pueblos rojos vs. azules; hasta el bocadillo era azul).",
        "Gonzalo Sánchez: <b>'Malcolm nos inhibió de ser irresponsables'</b>; obligó a mitigar las generalizaciones.",
        "Ante 'Colombia siempre ha sido violenta', 'el alma colombiana es violenta' o 'causas objetivas', Deas diría: <b>'paja'</b>."
      ]},
      { t: "De Barco a la Constitución del 91", i: "📜", p: [
        "Su diagnóstico influyó en el gobierno de <b>Barco</b> y en la <b>Constitución de 1991</b>, una reforma para <b>abrir el sistema político</b>.",
        "<b>Fernando Cepeda</b>, gran amigo, lo llevó a la Universidad de Los Andes y compró su diagnóstico.",
        "Se reincorporan el <b>M-19</b> y facciones de otras guerrillas. Antonio Navarro: 'queremos dejar las armas y pasar la lucha a las palabras y la política'.",
        "Pero la violencia <b>aumentó</b> después: combustible = <b>narcotráfico</b>, reacción <b>paramilitar</b>; la insurgencia no era tan importante para Deas 'hasta que encuentra la coca'."
      ]},
      { t: "La academia informal de la seguridad", i: "🛡️", p: [
        "Formó a muchos que luego ocuparon cargos de seguridad: invitó a <b>Álvaro Uribe</b> a Oxford (entre la gobernación de Antioquia y la presidencia de 2002), <b>Sergio Jaramillo Caro</b> (viceministro de Defensa y luego comisionado de paz), Andrés Peñate, <b>María Victoria Llorente</b> (Fundación Ideas para la Paz).",
        "Mensaje: la seguridad <b>no es un tema gremial de los militares</b>; un <b>civil</b> puede formular estrategia de seguridad.",
        "Recomendaba libros sobre la <b>contrainsurgencia británica en Kenia y Malasia</b>.",
        "Reuniones en su apartamento de <b>Chapinero</b> fueron claves en el pensamiento temprano de la <b>seguridad democrática</b> (según el investigador Jorge Delgado).",
        "Consejería de seguridad de <b>Rafael Pardo</b> → primer ministro de Defensa civil del periodo; derrota de <b>Pablo Escobar (1993)</b>.",
        "Idea: el Estado tiene el <b>derecho y el deber</b> de usar la fuerza para proteger a sus ciudadanos; <b>sin seguridad no hay Estado</b>.",
        "Cambio de chip: de 'solo queda negociar' (de Belisario a Pastrana) a que <b>sí es posible derrotar a la guerrilla</b> (Uribe). Deas mostró el antimilitarismo histórico: estudios sobre el reclutamiento del ejército y los pequeños presupuestos de defensa del siglo XX."
      ]},
      { t: "Uribe, Santos y el 'uribista santista'", i: "🤝", p: [
        "Relación muy cercana con <b>Uribe</b>; admiraba su conexión popular. La intelectualidad era casi unánimemente antiuribista y lo criticó.",
        "En <b>2016</b> apoyó el <b>proceso de paz</b>: se llamó <b>'uribista santista'</b>.",
        "Para Deas, el proceso de paz de Santos fue la <b>consecuencia lógica de la seguridad democrática</b>: continuidad, no ruptura (Santos fue protagonista de la seguridad democrática; Sergio Jaramillo hizo los contactos)."
      ]},
      { t: "Personalidad y legado", i: "🌟", p: [
        "<b>Igualitario</b>: hablaba con presidentes y con taxistas y vendedores; 'la historia está en todo lado'.",
        "Escuchaba a quien pensaba distinto: oyó una hora a <b>William Ospina</b> ('¿Dónde está la franja amarilla?').",
        "Le encantaba <b>'Chapolas negras'</b> de Fernando Vallejo (vida de José Asunción Silva a través de sus cuentas).",
        "El único colombiano que conocía antes de llegar: <b>Alberto Lleras</b>, en Oxford. No fue cercano a <b>García Márquez</b> (más 'team Vargas Llosa').",
        "Colombianistas extranjeros: <b>David Bushnell, Frank Safford, Daniel Pécaut</b>. Deas se diferenciaba por su <b>influencia política</b>.",
        "Nunca escribió una historia general de Colombia (Bushnell sí; Safford con Marco Palacios también). Su legado: <b>sus estudiantes</b> (~60 tesis) y sus ideas regadas en mucha gente.",
        "Tradición de Oxford como <b>Isaiah Berlin</b>: ecléctico, ensayista; de la última generación sin doctorado, libre para escribir sobre rentas fiscales un día y la tejedora de Suaita otro.",
        "Al morir, el <b>Financial Times</b> le dedicó un editorial. Su hija Felisa; él citaba 'blood is thicker than water'.",
        "'Un colombiano que la cigüeña puso en Dorset'. Frase del obituario: viendo vivienda en Soacha decía: <b>'Progreso. Veo progreso'</b>."
      ]}
    ],
    lente: [
      "<b>Guerra Fría y Revolución Cubana</b>: el Reino Unido crea estudios de área sobre América Latina (Latin American Centre, 1964).",
      "<b>Mirada externa</b>: los 'colombianistas' extranjeros (Deas, Bushnell, Safford, Pécaut) moldearon cómo el mundo y Colombia misma entienden el país.",
      "<b>Transferencia de doctrina</b>: lecturas de contrainsurgencia británica (Kenia, Malasia) que influyeron en la seguridad democrática.",
      "<b>Puente Reino Unido–Colombia</b>: Deas asesoró a gobiernos británicos (OBE) y colombianos; recibía a presidentes y cancilleres (Jaime Bermúdez).",
      "<b>Seguridad y paz</b>: de la seguridad democrática al proceso de paz de 2016, temas centrales de la imagen internacional de Colombia."
    ],
    personajes: [
      { n: "Malcolm Deas", r: "Historiador inglés (Oxford)", d: "Llegó en 1963, murió en 2023. 'Del poder y la gramática'. Escéptico de las causas objetivas. Uribista santista." },
      { n: "Diego Aretz", r: "Autor y periodista", d: "Escribió 'Malcolm Deas. Retrato del inglés que hizo de Colombia su historia'." },
      { n: "Raymond Carr", r: "Historiador de España", d: "Cofundó con Deas el Latin American Centre de Oxford; le dijo que se especializara en un país." },
      { n: "Orlando Fals Borda", r: "Sociólogo", d: "Fundador de la sociología en Colombia; IAP. Para Deas: 'se despistó'." },
      { n: "Gonzalo Sánchez", r: "Historiador, violentólogo", d: "Principal contradictor. 'Malcolm nos inhibió de ser irresponsables'." },
      { n: "James Robinson", r: "Economista, Nobel", d: "Visión pesimista de las élites; seminario con Deas en Los Andes; prefacio: lo compara con Kissinger." },
      { n: "Fernando Cepeda", r: "Politólogo, amigo", d: "Lo llevó a Los Andes; articuló su diagnóstico en la apertura política del 91." },
      { n: "Álvaro Uribe", r: "Presidente 2002-2010", d: "Deas lo invitó a Oxford; sus ideas nutrieron la seguridad democrática." },
      { n: "Sergio Jaramillo Caro", r: "Alumno de Deas", d: "Viceministro de Defensa y comisionado de paz; puente entre seguridad democrática y proceso de paz." },
      { n: "Jaime Bermúdez", r: "Excanciller", d: "Anécdota: 'Profe, eso (la Constitución del 91) no pegó aquí'." },
      { n: "Caballero y Góngora", r: "Arzobispo-virrey", d: "Desmontó a los Comuneros prometiendo y cumpliendo 'un poquito'." },
      { n: "Germán Guzmán", r: "Sacerdote ('el cura Guzmán')", d: "Con Fals Borda, origen de la tesis de las causas objetivas de la violencia (años 60)." }
    ],
    timeline: [
      ["1781", "Caballero y Góngora desmonta a los Comuneros"],
      ["1959", "Revolución Cubana"],
      ["1963", "Deas llega a Colombia (22 años)"],
      ["1964", "Latin American Centre de Oxford; operación Marquetalia"],
      ["Años 60", "Fals Borda y Guzmán: causas objetivas de la violencia"],
      ["1986-90", "Gobierno Barco: diagnóstico de exclusión política"],
      ["1990-94", "Gobierno Gaviria: consejería de seguridad (Pardo)"],
      ["1991", "Constitución: apertura política, reinserción del M-19"],
      ["1993", "Cae Pablo Escobar"],
      ["2002", "Uribe presidente: seguridad democrática"],
      ["2016", "Deas apoya el proceso de paz: 'uribista santista'"],
      ["2023", "Muere Malcolm Deas"],
      ["2026", "Diego Aretz publica el libro sobre Deas"]
    ]
  }
};

// Conceptos clásicos del curso (contexto, NO están en los videos)
const CURSO = [
  { t: "Respice Polum", d: "'Mirar hacia el polo (norte)'. Doctrina de Marco Fidel Suárez (1918-1921): alinear la política exterior colombiana con Estados Unidos." },
  { t: "Respice Similia", d: "'Mirar a los semejantes'. Formulada por Alfonso López Michelsen (canciller y luego presidente 1974-78): diversificar y acercarse a América Latina y otros países en desarrollo." },
  { t: "Bretton Woods (1944)", d: "Conferencia que creó el FMI y el BIRF (Banco Mundial), base del orden económico de posguerra que trajo la misión Currie." },
  { t: "Alianza para el Progreso (1961)", d: "Programa de EE.UU. (Kennedy) para América Latina tras la Revolución Cubana; apoyó reformas agrarias como la Ley 135 de 1961." }
];

// ===================== PREGUNTAS =====================
// Selección múltiple, única respuesta. a = índice de la correcta.
const MC = [
  // ---- VIDEO 1 ----
  { v:"v1", q:"¿Qué entidad envió a Colombia en 1949 la primera misión de ese tipo en el mundo?", o:["El Banco Internacional de Reconstrucción y Fomento (BIRF), luego Banco Mundial","El Fondo Monetario Internacional","La CEPAL","El Banco Interamericano de Desarrollo"], a:0, e:"Fue la primera misión del BIRF a nivel mundial, no solo en América Latina." },
  { v:"v1", q:"¿Quién encabezó la misión de 1949?", o:["Albert Hirschman","Lauchlin Currie","Edwin Kemmerer","Raúl Prebisch"], a:1, e:"Lauchlin Currie dirigió la misión del BIRF; Hirschman llegó después como asesor de la Oficina de Planeación." },
  { v:"v1", q:"¿Cuál es el antecedente de esta misión mencionado en el video?", o:["La Misión Lebret","La Alianza para el Progreso","Las misiones Kemmerer de los años 20 y 30","El Plan Marshall"], a:2, e:"Las misiones Kemmerer de los años 20 y 30 son el antecedente." },
  { v:"v1", q:"¿Qué gobierno presentó la propuesta de financiación al Banco Mundial ('levantó la mano')?", o:["Laureano Gómez","Alberto Lleras Camargo","Gustavo Rojas Pinilla","Mariano Ospina Pérez"], a:3, e:"Mariano Ospina Pérez presentó la propuesta; la misión trabajó luego bajo Laureano Gómez." },
  { v:"v1", q:"¿Cuál era el proyecto bandera de los gobiernos conservadores en esa propuesta?", o:["Acerías Paz de Río en Belencito, Boyacá","El aeropuerto El Dorado","La refinería de Barrancabermeja","El Ferrocarril del Atlántico"], a:0, e:"Paz de Río, la siderúrgica de Belencito (Boyacá)." },
  { v:"v1", q:"¿Qué propuso Currie en lugar de Paz de Río?", o:["Importar todo el acero de EE.UU.","Una siderúrgica de chatarra en Barranquilla","Una siderúrgica estatal en Medellín","Una alianza con Volta Redonda en Brasil"], a:1, e:"Por costo-eficiencia: chatarrera en Barranquilla, en puerto y con material importado." },
  { v:"v1", q:"¿Por qué Hirschman veía con mejores ojos Paz de Río?", o:["Porque era más barata que importar acero","Porque lo recomendaba la CEPAL","Porque generaba encadenamientos productivos y era una escuela para gestionar grandes proyectos","Porque estaba en un puerto"], a:2, e:"Encadenamientos hacia adelante y hacia atrás + aprendizaje de gestión de grandes obras." },
  { v:"v1", q:"¿Qué cargo tuvo Lauchlin Currie en Estados Unidos?", o:["Secretario del Tesoro de Truman","Presidente del Banco Mundial","Director del Plan Marshall","Primer asesor económico de la Casa Blanca con Roosevelt"], a:3, e:"Fue del Brain Trust de Roosevelt y primer asesor económico de la Casa Blanca; impulsor del New Deal." },
  { v:"v1", q:"¿A qué líder asesoró Currie en China?", o:["Chiang Kai-shek","Mao Zedong","Sun Yat-sen","Zhou Enlai"], a:0, e:"Asesoró a Chiang Kai-shek; por eso lo culparon de 'perder China'." },
  { v:"v1", q:"¿Por qué el macartismo persiguió a Currie?", o:["Por evasión de impuestos","Por acusaciones de filiación comunista y de 'haber perdido China'","Por apoyar al nazismo","Por espiar para Colombia"], a:1, e:"Era un liberal 'New Dealer', el perfil que más sufrió el macartismo." },
  { v:"v1", q:"¿Dónde nació Albert Hirschman?", o:["Viena","París","Berlín","Ámsterdam"], a:2, e:"Berlín, familia judía no practicante; huyó del nazismo a los 18 años." },
  { v:"v1", q:"¿Con quién ayudó Hirschman a escapar a más de 3.000 personas de Europa?", o:["Oskar Schindler","La Cruz Roja","George Orwell","Varian Fry (Comité de Rescate de Emergencia)"], a:3, e:"Con Varian Fry sacaron a Hannah Arendt, Marc Chagall, Marcel Duchamp, entre otros." },
  { v:"v1", q:"¿Qué serie de Netflix narra ese episodio de la vida de Hirschman?", o:["Transatlantic","The Crown","Unorthodox","Narcos"], a:0, e:"'Transatlantic'." },
  { v:"v1", q:"¿En qué trabajó Hirschman antes de venir a Colombia?", o:["En el New Deal","En el Plan Marshall","En la CEPAL","En el FMI"], a:1, e:"Trabajó en el Plan Marshall en EE.UU." },
  { v:"v1", q:"¿Como asesor de qué entidad llegó Hirschman a Colombia?", o:["Banco de la República","Federación Nacional de Cafeteros","La Oficina de Planeación creada en el gobierno de Laureano Gómez","El DNP del Frente Nacional"], a:2, e:"Asesor económico y financiero de la Oficina de Planeación (antecesora del DNP)." },
  { v:"v1", q:"¿Cuál es la 'paradoja' económica del periodo 1945-1965 según el video?", o:["Hubo hiperinflación por la violencia","La economía colapsó como en la Guerra de los Mil Días","Colombia dejó de pagar su deuda","A pesar de La Violencia, fue el periodo de desarrollo más dinámico de Colombia"], a:3, e:"La Violencia, a diferencia de la Guerra de los Mil Días, no destruyó la economía." },
  { v:"v1", q:"¿Qué hecho usó el gobierno colombiano como argumento de 'urgencia' ante el Banco Mundial?", o:["Los hechos del 9 de abril de 1948 (Bogotazo)","La Guerra de los Mil Días","El golpe de Rojas Pinilla","La separación de Panamá"], a:0, e:"Dijeron que los proyectos eran urgentes para reconstruir tras el 9 de abril: diplomacia económica." },
  { v:"v1", q:"¿Por qué el presidente del Banco Mundial estaba en Bogotá el 9 de abril de 1948?", o:["Para firmar el préstamo de Paz de Río","Por la Conferencia Panamericana","Para conocer a Currie","Por la posesión de Ospina"], a:1, e:"Bogotá era sede de la Conferencia Panamericana de 1948." },
  { v:"v1", q:"¿Por qué al Banco Mundial le convenía la propuesta colombiana?", o:["Porque Colombia era su mayor accionista","Porque la CEPAL se lo ordenó","Porque el Plan Marshall lo había desplazado de la reconstrucción europea y buscaba nueva misión","Porque EE.UU. quería castigar a Colombia"], a:2, e:"Colombia ayudó a convertirlo de banco de reconstrucción en banco de fomento." },
  { v:"v1", q:"¿Quién dirigió la CEPAL en sus inicios?", o:["John Maynard Keynes","Esteban Jaramillo","Lauchlin Currie","Raúl Prebisch"], a:3, e:"Raúl Prebisch, banquero central argentino." },
  { v:"v1", q:"¿Cuál era la premisa central de la CEPAL?", o:["El comercio internacional es asimétrico: la periferia depende del centro","El libre mercado basta para desarrollarse","América Latina debía exportar solo materias primas","El Estado no debe intervenir"], a:0, e:"Centro-periferia: por eso proponía acción deliberada del Estado." },
  { v:"v1", q:"¿Qué es la industrialización por sustitución de importaciones (ISI)?", o:["Importar maquinaria sin aranceles","Usar aranceles y restricciones a importaciones para desarrollar la industria nacional","Exportar productos no tradicionales","Privatizar las empresas estatales"], a:1, e:"Proteger la industria doméstica hasta que sea competitiva." },
  { v:"v1", q:"¿Por qué el cepalismo fue 'tímido' en Colombia?", o:["Porque Colombia no era miembro de la ONU","Porque Prebisch odiaba a Colombia","Por la tradición liberal económica de los años 30 y el poder de los cafeteros","Porque el FMI lo prohibió"], a:2, e:"Liberalismo de Esteban Jaramillo (también en el conservatismo ospinista) + cafeteros dueños de las divisas." },
  { v:"v1", q:"Según Hirschman (1960), ¿qué dos tradiciones sintetiza el cepalismo?", o:["Marxismo y liberalismo","Keynesianismo y monetarismo","Catolicismo y protestantismo","La autoflagelante (arielismo) y el antiimperialismo"], a:3, e:"Culpa de la herencia hispánica + culpa de EE.UU. → 'el problema es nuestra posición periférica'." },
  { v:"v1", q:"¿Cuál fue el gobierno más intervencionista y de mayor nacionalismo económico del periodo?", o:["El de Laureano Gómez","El de Alberto Lleras Camargo","El de Misael Pastrana","El de Alfonso López Pumarejo"], a:0, e:"Ecopetrol, Paz de Río, reforma BanRep 1951, Código del Trabajo: la gran paradoja conservadora." },
  { v:"v1", q:"Según el video, ¿cómo se creó Ecopetrol?", o:["Por una marcha de trabajadores en Barrancabermeja","Por una decisión de arriba hacia abajo impulsada por Ospina y ejecutada por Laureano","Por orden del Banco Mundial","Por la CEPAL"], a:1, e:"El video desmiente la versión de la marcha obrera." },
  { v:"v1", q:"¿Qué hizo Currie tras el golpe de Rojas Pinilla (1953)?", o:["Se volvió ministro de Hacienda","Se fue a Princeton","Renunció de inmediato y se fue a criar vacas en Albán, Cundinamarca","Se unió a la CEPAL"], a:2, e:"Y no le salió bien, lo que cambió su visión del campo." },
  { v:"v1", q:"¿Qué hizo Hirschman tras el golpe de Rojas?", o:["Renunció de inmediato","Se volvió asesor de Rojas por 10 años","Volvió a Alemania","Siguió un año frustrado, renunció y abrió una consultora privada"], a:3, e:"Viajó por el país y le impresionó el Valle del Cauca." },
  { v:"v1", q:"¿Qué son las 'racionalidades ocultas' de Hirschman?", o:["La capacidad de emprendedores, firmas, hogares y comunidades para arreglárselas y encontrar oportunidades donde no se veían","Los secretos del Banco Mundial","La corrupción en la planeación","Las reglas ocultas del comercio centro-periferia"], a:0, e:"Idea inspirada en el dinamismo del Valle del Cauca: menos planeación desde arriba." },
  { v:"v1", q:"¿Qué fue la Misión Lebret?", o:["Una misión del FMI","Una misión de humanistas franceses que construyó indicadores de vida rural","Una misión militar de EE.UU.","La misión de la CEPAL de 1954"], a:1, e:"Sus indicadores se usaron en la rehabilitación de Lleras Camargo." },
  { v:"v1", q:"¿Cuál es la tesis de Andrés Guiot sobre por qué Colombia llama tantas misiones de expertos?", o:["Porque no hay economistas colombianos","Porque son gratis","Para atribuir o evadir responsabilidades: el experto sirve de chivo expiatorio","Por obligación de la ONU"], a:2, e:"'Si sale bien es el político; si sale mal, me obligó el Fondo'." },
  { v:"v1", q:"¿Qué instituciones se crean con el Frente Nacional para despolitizar el Estado?", o:["Ecopetrol y Paz de Río","Incora y ANUC","El DANE y la Contraloría","El DNP, la ESAP y la Comisión del Servicio Civil"], a:3, e:"Nacen de los acuerdos de Sitges y Benidorm." },
  { v:"v1", q:"¿Cuál era el lema de gobierno de Alberto Lleras Camargo?", o:["Austeridad y desarrollo","Paz y progreso","Orden y libertad","La patria milagro"], a:0, e:"'Austeridad y desarrollo'." },
  { v:"v1", q:"¿Qué es la 'planeación indicativa' (inspiración francesa)?", o:["El Estado dueño de todas las empresas","El Estado propone metas y las concierta con los privados","Dejar todo al mercado","Planes impuestos por el FMI"], a:1, e:"No se les dice qué hacer a los privados: se conciertan planes." },
  { v:"v1", q:"¿Por qué el FMI apareció en 1957?", o:["Por la guerra con el Perú","Por la crisis del petróleo","Por un plan de estabilización tras el gasto de Rojas (El Dorado, vías) que se volvió insostenible","Para financiar el Frente Nacional"], a:2, e:"Plan acordado en la Junta Militar; Lleras lo heredó." },
  { v:"v1", q:"¿Cuál es la ley de reforma agraria de 1961?", o:["Ley 200","Ley 100","Ley 160","Ley 135"], a:3, e:"Ley 135 de 1961." },
  { v:"v1", q:"¿Por qué EE.UU. apoyaba las reformas agrarias en la época?", o:["Eran parte de la caja de herramientas del anticomunismo","Querían comprar tierras","Por presión de la CEPAL","Para bajar el precio del café"], a:0, e:"Donde había tierra concentrada y riesgo de insurgencia, se impulsaba (Alianza para el Progreso)." },
  { v:"v1", q:"¿A quién dedicó Hirschman su capítulo sobre la reforma agraria colombiana en 'Journeys Toward Progress'?", o:["A Alberto Lleras Camargo","A Carlos Lleras Restrepo, 'maestro en el arte de la reforma'","A Lauchlin Currie","A Mariano Ospina"], a:1, e:"Carlos Lleras Restrepo." },
  { v:"v1", q:"¿Cómo llamó Hirschman a la reforma agraria colombiana?", o:["Una revolución verde","Un fracaso anunciado","Una revolución silenciosa","Una reforma neoliberal"], a:2, e:"'Revolución silenciosa': un camino reformista en plena Guerra Fría." },
  { v:"v1", q:"¿Qué frase de Hirschman cita el video?", o:["La economía va bien pero el país va mal","Sin seguridad no hay Estado","El experto siempre tiene la razón","Una revolución es más fácil de realizar que una reforma"], a:3, e:"Reformar es dificilísimo." },
  { v:"v1", q:"¿Qué proponía la 'Operación Colombia' de Currie?", o:["Impulsar el desarrollo urbano y la construcción, dejando que los campesinos migren a las ciudades","Redistribuir la tierra a los campesinos","Nacionalizar la industria","Volver al patrón oro"], a:0, e:"No reforma agraria: aprovechar la revolución verde y absorber la mano de obra en las ciudades." },
  { v:"v1", q:"¿Cómo se llamó el plan de desarrollo de Misael Pastrana inspirado en Currie?", o:["El Salto Social","Las Cuatro Estrategias","Para Cerrar la Brecha","Cambio con Equidad"], a:1, e:"Considerado el gran plan de desarrollo colombiano." },
  { v:"v1", q:"¿Cuál era la estrategia LÍDER de 'Las Cuatro Estrategias'?", o:["La reforma agraria","La sustitución de importaciones","La construcción urbana (vivienda)","La minería"], a:2, e:"Construcción como sector líder: vivienda, ahorro, empleo." },
  { v:"v1", q:"¿Cuál NO fue una de 'Las Cuatro Estrategias'?", o:["Construcción urbana","Exportaciones no tradicionales","Productividad agrícola con crédito y tecnificación","Reforma agraria redistributiva"], a:3, e:"La 4ª era redistribución vía impuestos progresivos y valorización, NO reforma agraria." },
  { v:"v1", q:"Según el video, ¿qué fue el 'Pacto de Chicoral'?", o:["Un mito: ni fue en Chicoral ni fue un pacto; la reforma agraria ya era anacrónica","El tratado que creó el Frente Nacional","El acuerdo con el FMI de 1957","El pacto que creó la CEPAL"], a:0, e:"La gente ya estaba en las ciudades, así que la reforma de los 50-60 había perdido sentido." },
  { v:"v1", q:"¿Por qué la construcción es también 'política industrial'?", o:["Porque la hace el Estado","Porque genera encadenamientos con cerámica, acero, ladrillo y servicios","Porque reduce impuestos","Porque la ordenó la CEPAL"], a:1, e:"Los mismos encadenamientos de Hirschman, pero con vivienda." },
  { v:"v1", q:"¿Dónde terminó su carrera Hirschman?", o:["En la Universidad Nacional","En el Banco Mundial","En el Instituto de Estudios Avanzados de Princeton","En Oxford"], a:2, e:"Pasó por Yale, Columbia y Harvard antes." },
  { v:"v1", q:"¿Cuál de estas obras es de Hirschman?", o:["Operación Colombia","Del poder y la gramática","La violencia en Colombia","Salida, voz y lealtad"], a:3, e:"También 'Las pasiones y los intereses' y 'Retóricas de la intransigencia'." },
  { v:"v1", q:"¿Qué pasó con Currie al final de su vida?", o:["Se quedó en Colombia, murió aquí y fue el 'decano de los economistas'","Volvió a la Casa Blanca","Se fue a Princeton","Regresó a Canadá"], a:0, e:"Un caso excepcional de gran personaje que se quedó en Colombia." },
  { v:"v1", q:"¿Qué tesis contradice el episodio sobre Colombia?", o:["Que Colombia paga su deuda","Que Colombia es el 'Tíbet de Suramérica', aislada del mundo","Que hubo violencia en los 50","Que existía la CEPAL"], a:1, e:"Colombia fue pionera, 'ombligo del mundo' y conejillo de Indias del desarrollo." },
  { v:"v1", q:"Según Keynes (citado en el video), ¿qué marcaron los años 20 y 30?", o:["El triunfo del patrón oro","El inicio del neoliberalismo","El fin del dogma decimonónico del laissez-faire","La creación de la CEPAL"], a:2, e:"Se abrió paso la intervención y la planificación." },
  { v:"v1", q:"¿Qué entidad se creó centralizando las estadísticas que antes estaban en la Contraloría?", o:["El DNP","La ESAP","El Incora","El DANE"], a:3, e:"El DANE pasó las estadísticas al Ejecutivo." },
  { v:"v1", q:"Veredicto final del video sobre el desarrollo colombiano:", o:["Colombia arrancó más atrás y llegó más adelante que Chile, Perú, Venezuela y posiblemente Argentina","Colombia fue el país más rico de la región","Colombia fracasó completamente","Colombia fue igual a Brasil"], a:0, e:"No fue lo esperado en los 50, pero mejoró decididamente la vida de la mayoría." },

  // ---- VIDEO 2 ----
  { v:"v2", q:"¿Quién fue Malcolm Deas?", o:["Un economista del Banco Mundial","Un historiador inglés de Colombia, profesor en Oxford","Un embajador británico","Un periodista de La Silla Vacía"], a:1, e:"El gran historiador británico de Colombia." },
  { v:"v2", q:"¿En qué año llegó Deas por primera vez a Colombia?", o:["1948","1958","1963","1970"], a:2, e:"1963, con 22 años." },
  { v:"v2", q:"¿Quién escribió el nuevo libro sobre Malcolm Deas?", o:["James Robinson","Gonzalo Sánchez","Alejandro Lloreda","Diego Aretz"], a:3, e:"'Malcolm Deas. Retrato del inglés que hizo de Colombia su historia'." },
  { v:"v2", q:"¿Cómo describe Diego Aretz su libro?", o:["Como un perfil biográfico/periodístico con más de 40 fuentes","Como una novela","Como una historia general de Colombia","Como un manual académico"], a:0, e:"Un perfil de ~300 páginas, más de 40 fuentes y 40 horas de entrevista." },
  { v:"v2", q:"¿Qué libro fue el modelo inicial del proyecto (una larga entrevista)?", o:["Cien años de soledad","El olor de la guayaba (García Márquez con Plinio Apuleyo Mendoza)","Nostromo","Del poder y la gramática"], a:1, e:"Pero Deas enfermó y tuvieron que 'pluralizar' las voces." },
  { v:"v2", q:"¿Dónde nació Deas?", o:["Londres","Oxford","Dorset","Escocia"], a:2, e:"Dorset, 'el corazón de Inglaterra'." },
  { v:"v2", q:"¿Por qué recibió Deas la OBE (Orden del Imperio Británico)?", o:["Por asesorar presidentes colombianos","Por hablar con taxistas","Por escribir sobre Colombia","Por sus aportes al gobierno y la sociedad del Reino Unido"], a:3, e:"Fue asesor de gobiernos británicos; no se la dieron por ayudar a presidentes colombianos." },
  { v:"v2", q:"¿Qué dos libros lo atrajeron a Colombia?", o:["'One Damn Thing After Another' y 'Nostromo' de Conrad","'Cien años de soledad' y 'La vorágine'","'María' y 'Nostromo'","'Las venas abiertas' y 'One Damn Thing After Another'"], a:0, e:"Uno trata de un inglés que trae un toro de lidia a la Sabana de Bogotá." },
  { v:"v2", q:"¿Por qué Deas no se especializó en México?", o:["Porque no hablaba español","Porque los mexicanistas estaban obsesionados con Zapata","Porque Oxford lo prohibió","Porque México era peligroso"], a:1, e:"A él no le interesaba tanto Zapata." },
  { v:"v2", q:"¿Con qué beca llegó Deas en 1963?", o:["Fulbright","Rhodes","Del Institute of Current World Affairs, con informes que luego publicó el Banco de la República","Del Banco Mundial"], a:2, e:"La condición era escribir informes." },
  { v:"v2", q:"¿Qué institución cofundó Deas en Oxford en 1964?", o:["All Souls College","St Antony's Library","El Instituto de Estudios Avanzados","El Latin American Centre"], a:3, e:"Con Raymond Carr." },
  { v:"v2", q:"¿Por qué Deas decía que 'le debía su puesto a Fidel Castro'?", o:["Porque tras la Revolución Cubana el gobierno británico creó centros de estudios de área sobre América Latina","Porque Fidel lo recomendó","Porque trabajó en Cuba","Porque escribió sobre Cuba"], a:0, e:"El miedo a que la Guerra Fría se desbordara en la región." },
  { v:"v2", q:"¿Quién le aconsejó 'especialícese en un país'?", o:["Isaiah Berlin","Raymond Carr, historiador de la España moderna","James Robinson","Alberto Lleras"], a:1, e:"Raymond Carr, su modelo de vida académica." },
  { v:"v2", q:"Deas no tenía doctorado. ¿Cuántos doctorados revisó/dirigió aproximadamente?", o:["5","20","60","200"], a:2, e:"Se reía: 'Dios me castigó'." },
  { v:"v2", q:"¿Qué quería decir Deas con 'cuando llegué a Colombia no había historiadores'?", o:["Que nadie sabía leer","Que no existía la Academia de Historia","Que todos eran extranjeros","Que no había historia científica/profesional contemporánea"], a:3, e:"La Academia de Historia 'olía a telarañas' y se centraba en la independencia." },
  { v:"v2", q:"¿Qué paradoja intrigó a Deas sobre el siglo XIX colombiano?", o:["El civilismo: gramáticos civiles gobernando, contra la imagen de golpes y generales","Que no hubo guerras civiles","Que Colombia era rica","Que no había elecciones"], a:0, e:"Eso desembocó en su ensayo 'Del poder y la gramática'." },
  { v:"v2", q:"¿Cuál es el ensayo más famoso de Deas mencionado?", o:["La violencia en Colombia","Del poder y la gramática","Operación Colombia","Salida, voz y lealtad"], a:1, e:"Sobre los gramáticos en el poder." },
  { v:"v2", q:"¿Qué es la IAP de Fals Borda?", o:["Instituto Andino de Política","Índice de Apertura Política","Investigación acción participativa: investigación combinada con activismo político","Una guerrilla"], a:2, e:"Muy usada en la sociología de izquierda." },
  { v:"v2", q:"¿Qué era lo más ofensivo que Deas podía decir de alguien?", o:["Paja","Es un godo","Es marxista","Se despistó"], a:3, e:"Lo dijo de Fals Borda y de Camilo Torres." },
  { v:"v2", q:"¿Quién fue el principal contradictor intelectual de Deas?", o:["Gonzalo Sánchez","Fernando Cepeda","Sergio Jaramillo","Diego Aretz"], a:0, e:"Referente de la violentología, ligado al IEPRI." },
  { v:"v2", q:"¿Qué demostró Deas con el diario de la costurera de Suaita?", o:["Que la política era solo de élites","Que la politización penetraba todas las capas de la sociedad desde el siglo XIX","Que las mujeres no votaban","Que Suaita era liberal"], a:1, e:"Refutaba la idea de una política reservada a la élite." },
  { v:"v2", q:"¿Qué visión tenía James Robinson frente a Deas?", o:["La misma","Más optimista","Opuesta: élites cerradas que no supieron incluir al país","No opinaba"], a:2, e:"Deas era acusado de optimista; Robinson es más pesimista." },
  { v:"v2", q:"¿Con quién compara Robinson a Deas en el prefacio?", o:["Winston Churchill","Isaiah Berlin","García Márquez","Henry Kissinger"], a:3, e:"Por la cantidad de amigos presidentes." },
  { v:"v2", q:"Para Deas, ¿cuál es la pregunta clave para entender la política de un país?", o:["¿Cómo se manda?","¿Cuánto crece la economía?","¿Quién tiene más tierra?","¿Cuántos partidos hay?"], a:0, e:"Quién tiene el poder y cómo se manda; peso del cacicazgo." },
  { v:"v2", q:"Completa el chiste de Deas: 'En Colombia unos creen que mandan y otros…'", o:["…mandan de verdad","…creen que obedecen","…no votan","…se despistan"], a:1, e:"El poder en Colombia es difuso." },
  { v:"v2", q:"¿Qué le dijeron al canciller Jaime Bermúdez tras su charla sobre la Constitución del 91?", o:["Gracias, doctor","Queremos otra constituyente","Profe, eso no pegó aquí","Viva el 91"], a:2, e:"Muestra que el poder y la ley no llegan igual a todo el territorio." },
  { v:"v2", q:"¿Cómo desmontó el arzobispo-virrey Caballero y Góngora a los Comuneros?", o:["Con el ejército","Con dinero","Con la Inquisición","Prometiendo, firmando y cumpliendo 'un poquito'"], a:3, e:"Deas decía que así se desmontó también el paro de 2021." },
  { v:"v2", q:"¿En qué gobiernos participó Deas de cerca (consejería de seguridad)?", o:["Virgilio Barco y César Gaviria","Turbay y Belisario","Pastrana y Samper","Duque y Petro"], a:0, e:"Sobre todo con César Gaviria." },
  { v:"v2", q:"¿Qué sostiene la tesis de las 'causas objetivas' de la violencia?", o:["Que la violencia es genética","Que hay violencia porque hay pobreza y desigualdad","Que la causa es el narcotráfico","Que la causa es la religión"], a:1, e:"Tesis de Germán Guzmán y Fals Borda (60s). Deas era escéptico." },
  { v:"v2", q:"¿Cuál es la frase de Deas sobre la violencia colombiana?", o:["Colombia es el país más violento del mundo","Colombia siempre ha sido violenta","Colombia es un país que en ocasiones ha sido violento","Colombia nunca ha sido violenta"], a:2, e:"Rechazaba la generalización de 200 años de violencia continua." },
  { v:"v2", q:"Para Deas, ¿cuál ha sido muchas veces el detonante de la violencia?", o:["La pobreza","El clima","La religión","La exclusión política: el vencedor no integra al vencido"], a:3, e:"Por eso: 'vayan a la política'." },
  { v:"v2", q:"¿Qué reforma recogió el diagnóstico de Deas sobre la exclusión política?", o:["La Constitución de 1991, que abrió el sistema político","La reforma agraria de 1961","El Frente Nacional","La Ley 100"], a:0, e:"Con el gobierno Barco antes; reinserción del M-19." },
  { v:"v2", q:"¿Qué dijo Gonzalo Sánchez sobre Deas?", o:["'Era un godo'","'Malcolm nos inhibió de ser irresponsables'","'Se despistó'","'Nunca lo leí'"], a:1, e:"Reconoce que Deas obligó a mitigar las generalizaciones." },
  { v:"v2", q:"¿Quién llevó a Deas a la Universidad de Los Andes?", o:["Alejandro Gaviria","Alberto Lleras","Fernando Cepeda","Rafael Pardo"], a:2, e:"Su gran amigo Fernando Cepeda." },
  { v:"v2", q:"Tras 1991, ¿por qué siguió la violencia según el video?", o:["Por la Constitución","Por la reforma agraria","Por el Frente Nacional","Por el narcotráfico, la reacción paramilitar y la insurgencia financiada con coca"], a:3, e:"Para Deas, la insurgencia no era muy importante hasta que encontró la coca." },
  { v:"v2", q:"¿Qué político invitó Deas a Oxford entre su gobernación y su presidencia?", o:["Álvaro Uribe","Juan Manuel Santos","César Gaviria","Gustavo Petro"], a:0, e:"Entre la gobernación de Antioquia y la presidencia de 2002." },
  { v:"v2", q:"¿Qué experiencias contrainsurgentes recomendaba Deas estudiar?", o:["Vietnam y Corea","Las británicas en Kenia y Malasia","Cuba y Nicaragua","Argelia y Francia"], a:1, e:"Influyó en el gobierno de 2002." },
  { v:"v2", q:"¿Qué idea sobre seguridad defendía Deas?", o:["La seguridad es un asunto solo de los militares","Hay que negociar siempre","Un civil puede formular estrategia de seguridad; sin seguridad no hay Estado","El Estado no debe usar la fuerza"], a:2, e:"El Estado tiene el derecho y el deber de usar la fuerza para proteger a sus ciudadanos." },
  { v:"v2", q:"¿Qué alumno de Deas fue viceministro de Defensa y luego comisionado de paz?", o:["Andrés Peñate","Fernando Cepeda","Jaime Bermúdez","Sergio Jaramillo Caro"], a:3, e:"Puente entre la seguridad democrática y el proceso de paz." },
  { v:"v2", q:"¿Qué cambio de 'chip' ocurre con Uribe según el video?", o:["Pasar de 'solo queda negociar' a que sí es posible derrotar a la guerrilla","Pasar de la guerra a la negociación","Abandonar la seguridad","Eliminar el ejército"], a:0, e:"Antes, negociar estaba en el ADN (de Belisario a Pastrana)." },
  { v:"v2", q:"¿Cómo se definió Deas en 2016?", o:["Antiuribista","Uribista santista","Petrista","Apolítico"], a:1, e:"Apoyó el proceso de paz." },
  { v:"v2", q:"Para Deas, el proceso de paz de Santos fue…", o:["Una traición a la seguridad democrática","Un error histórico","La consecuencia lógica de la seguridad democrática","Obra de la CEPAL"], a:2, e:"Continuidad, no ruptura." },
  { v:"v2", q:"¿Por qué Deas escribía ensayos tan cortos?", o:["Por pereza","Por falta de archivo","Por orden de Oxford","'Porque alguien tiene que pensar'"], a:3, e:"No había que echar 'paja'." },
  { v:"v2", q:"¿Qué colombianistas extranjeros se mencionan junto a Deas?", o:["David Bushnell, Frank Safford y Daniel Pécaut","Hirschman y Currie","Isaiah Berlin y Borges","Kissinger y Robinson"], a:0, e:"Deas se diferenciaba por su influencia política." },
  { v:"v2", q:"¿Cuál es el principal legado de Deas según el video?", o:["Una historia general de Colombia","Sus estudiantes y sus ideas regadas en mucha gente","Una gran teoría","Una fundación"], a:1, e:"Nunca intentó escribir una historia general de Colombia." },
  { v:"v2", q:"¿Qué novela/biografía le encantaba a Deas?", o:["Cien años de soledad","Ursúa de William Ospina","'Chapolas negras' de Fernando Vallejo","La vorágine"], a:2, e:"Vida de José Asunción Silva a través de sus cuentas." },
  { v:"v2", q:"¿Cuál fue el único colombiano que Deas conocía antes de llegar?", o:["García Márquez","Fals Borda","Fernando Cepeda","Alberto Lleras, en Oxford"], a:3, e:"Y no fue cercano a García Márquez." },
  { v:"v2", q:"¿Con qué gran pensador de Oxford se compara a Deas por ser ecléctico y ensayista?", o:["Isaiah Berlin","Karl Popper","Keynes","Eric Hobsbawm"], a:0, e:"Última generación sin doctorado y sin subespecialización." },
  { v:"v2", q:"¿Qué periódico británico le dedicó un editorial cuando murió?", o:["The Guardian","Financial Times","The Times","The Economist"], a:1, e:"Prueba de su importancia también en el Reino Unido." },
  { v:"v2", q:"¿Qué decía Deas viendo construir vivienda de interés social en Soacha?", o:["'Paja'","'Se despistó'","'Progreso. Veo progreso'","'Eso no pegó aquí'"], a:2, e:"Del obituario 'El oráculo de Oxford'." },
  { v:"v2", q:"¿En qué año murió Malcolm Deas?", o:["2016","2019","2021","2023"], a:3, e:"Murió en 2023." },
  { v:"v2", q:"¿Quiénes conducen el podcast Déjà vu?", o:["Alejandro Lloreda y Luis Guillermo Vélez","Juanita León y Héctor Riveros","Diego Aretz y Andrés Guiot","Tatiana Duque y Fernando Cruz"], a:0, e:"Juanita León y Héctor Riveros hacen 'La siguiente movida'." },
  { v:"v2", q:"¿Qué fundaciones financiaban a las escuelas de historia/sociología rivales de Deas?", o:["Gates y Soros","Ford y Rockefeller","Carnegie y Mellon","Ninguna"], a:1, e:"Según el video, financiaban a unos y otros." },
  { v:"v2", q:"Según el video, ¿qué muestra que las élites colombianas rotan?", o:["Que siempre gobiernan los mismos apellidos","Que no hay ricos","Que las grandes fortunas de hoy son nuevas (p.ej. Santo Domingo, menos de 100 años)","Que todas son extranjeras"], a:2, e:"Contra la idea de unas élites estáticas." }
];

// Verdadero / Falso
const VF = [
  { v:"v1", q:"La misión de 1949 fue la primera misión del BIRF en América Latina, pero ya había hecho otras en Asia.", a:false, e:"Fue la primera a nivel MUNDIAL." },
  { v:"v1", q:"Currie llegó a Colombia en julio de 1949 con un equipo de 14 expertos.", a:true, e:"Sí, y escribieron el informe en Washington." },
  { v:"v1", q:"El informe de la misión se entregó justo antes del cambio de gobierno de Ospina a Laureano Gómez.", a:true, e:"Una semana antes." },
  { v:"v1", q:"Currie defendió con entusiasmo la siderúrgica de Paz de Río.", a:false, e:"La rechazó; prefería una chatarrera en Barranquilla. Hirschman fue quien la vio con mejores ojos." },
  { v:"v1", q:"Hirschman fue miembro activo del Partido Comunista.", a:false, e:"Nunca lo fue; su hermana sí. Él era abiertamente anticomunista." },
  { v:"v1", q:"Tanto Currie como Hirschman fueron sospechosos de filiaciones comunistas en EE.UU.", a:true, e:"En el contexto del macartismo." },
  { v:"v1", q:"La Violencia destruyó la economía colombiana igual que la Guerra de los Mil Días.", a:false, e:"Al contrario: coincidió con el periodo más dinámico de desarrollo." },
  { v:"v1", q:"La CEPAL fue creada por la ONU en 1948 para América Latina.", a:true, e:"Dirigida al inicio por Raúl Prebisch." },
  { v:"v1", q:"Colombia fue el gran 'poster child' del cepalismo en América Latina.", a:false, e:"Fue Brasil. En Colombia la adopción fue tímida." },
  { v:"v1", q:"Los gobiernos de Ospina y Laureano Gómez fueron paradójicamente muy intervencionistas.", a:true, e:"Ecopetrol, Paz de Río, reforma del BanRep de 1951…" },
  { v:"v1", q:"La Oficina de Planeación, antecesora del DNP, se creó en el gobierno de Laureano Gómez por recomendación del Banco Mundial.", a:true, e:"Ahí llegó Hirschman como asesor." },
  { v:"v1", q:"Después del golpe de Rojas Pinilla, Hirschman renunció de inmediato y Currie se quedó un año.", a:false, e:"Al revés: Currie renunció de inmediato; Hirschman se quedó un año." },
  { v:"v1", q:"Las 'racionalidades ocultas' fueron inspiradas en parte por el dinamismo del Valle del Cauca.", a:true, e:"Las élites vallecaucanas impresionaron a Hirschman." },
  { v:"v1", q:"De los 250 informes de la oficina de planeación, la mayoría se implementaron.", a:false, e:"La mayoría se quedaron 'en las gavetas'." },
  { v:"v1", q:"La planeación del Frente Nacional fue de inspiración cepalina pura.", a:false, e:"Fue 'albertollerista' e indicativa (francesa): racionalizar finanzas y dar infraestructura a los privados." },
  { v:"v1", q:"La reforma agraria de 1961 tuvo apoyo de EE.UU., la Alianza para el Progreso, el Banco Mundial y la CEPAL.", a:true, e:"Hubo una 'extraña convergencia'." },
  { v:"v1", q:"Currie, en 'Operación Colombia', defendía mantener a los campesinos en el campo con reforma agraria.", a:false, e:"Proponía lo contrario: urbanización y construcción." },
  { v:"v1", q:"La urbanización de Colombia se debió únicamente a La Violencia.", a:false, e:"Ocurrió en toda América Latina y Europa; la violencia quizá la aceleró." },
  { v:"v1", q:"'Las Cuatro Estrategias' fue un plan neoliberal.", a:false, e:"Incluía impuestos progresivos y redistribución; Currie no era un Chicago Boy." },
  { v:"v1", q:"Hirschman dejó Colombia en 1956.", a:true, e:"Luego Yale, Columbia, Harvard y Princeton." },
  { v:"v1", q:"El primer plan de estabilización con el FMI se acordó durante la Junta Militar de 1957.", a:true, e:"Por el gasto insostenible de Rojas." },
  { v:"v1", q:"Hirschman era más un macroeconomista y Currie más un pensador social.", a:false, e:"Al revés: Currie el gran macroeconomista; Hirschman el gran pensador social." },
  { v:"v2", q:"Malcolm Deas llegó a Colombia en 1963 con 22 años.", a:true, e:"Correcto." },
  { v:"v2", q:"Deas tenía doctorado de Oxford.", a:false, e:"No tenía doctorado, pero revisó unos 60." },
  { v:"v2", q:"Deas pensó primero en especializarse en México.", a:true, e:"Pero los mexicanistas estaban obsesionados con Zapata." },
  { v:"v2", q:"El Latin American Centre de Oxford surgió como consecuencia de la Revolución Cubana.", a:true, e:"Por eso 'le debía su puesto a Fidel Castro'." },
  { v:"v2", q:"Deas creía que Colombia ha sido un país violento de forma continua durante 200 años.", a:false, e:"Decía que 'en ocasiones ha sido violento'." },
  { v:"v2", q:"Deas apoyaba la tesis de las causas objetivas (pobreza y desigualdad) de la violencia.", a:false, e:"Era escéptico: esas causas existían en toda América Latina." },
  { v:"v2", q:"Para Deas, la exclusión política ha sido muchas veces el detonante de la violencia.", a:true, e:"La incapacidad del vencedor de integrar al vencido." },
  { v:"v2", q:"Gonzalo Sánchez fue alumno y seguidor fiel de Deas.", a:false, e:"Fue su principal contradictor, aunque reconoció su aporte." },
  { v:"v2", q:"James Robinson escribió el prefacio del libro de Diego Aretz.", a:true, e:"Y un capítulo; compara a Deas con Kissinger." },
  { v:"v2", q:"Deas consideraba que la política en el siglo XIX colombiano era solo asunto de las élites.", a:false, e:"Demostró que penetraba todas las capas sociales." },
  { v:"v2", q:"Deas participó en la consejería de seguridad del gobierno de César Gaviria.", a:true, e:"Y estuvo cerca del gobierno Barco." },
  { v:"v2", q:"Deas pensaba que la seguridad era un tema exclusivo de las Fuerzas Militares.", a:false, e:"Defendía que un civil puede formular estrategia de seguridad." },
  { v:"v2", q:"Deas se opuso al proceso de paz de 2016.", a:false, e:"Lo apoyó: se llamó 'uribista santista'." },
  { v:"v2", q:"Deas escribió una gran historia general de Colombia.", a:false, e:"Nunca lo intentó; su legado son sus estudiantes y ensayos." },
  { v:"v2", q:"Deas recibió la OBE por aportes al Reino Unido.", a:true, e:"Fue asesor de gobiernos británicos." },
  { v:"v2", q:"Deas era muy cercano a Gabriel García Márquez.", a:false, e:"No; el video dice que sería más 'team Vargas Llosa'." },
  { v:"v2", q:"Para Deas, 'se despistó' era una forma de condenar intelectualmente a alguien.", a:true, e:"Lo más ofensivo que decía." },
  { v:"v2", q:"Deas invitó a Álvaro Uribe a Oxford antes de su presidencia.", a:true, e:"Entre la gobernación de Antioquia y 2002." },
  { v:"v2", q:"La violencia en Colombia disminuyó de inmediato tras la Constitución de 1991.", a:false, e:"Se incrementó: narcotráfico y paramilitarismo." },
  { v:"v2", q:"Deas creía que la historia debía estudiarse para servir a una agenda política del presente.", a:false, e:"Esa idea (de la historia marxista) le chocaba profundamente." }
];

// ¿Currie o Hirschman?
const WHO = [
  ["Encabezó la misión del BIRF de 1949.", "Currie"],
  ["Nació en Berlín y huyó del nazismo a los 18 años.", "Hirschman"],
  ["Fue asesor de Chiang Kai-shek en China.", "Currie"],
  ["Ayudó con Varian Fry a escapar a Hannah Arendt y Marc Chagall.", "Hirschman"],
  ["Prefería una chatarrera en Barranquilla a Paz de Río.", "Currie"],
  ["Veía en Paz de Río encadenamientos hacia adelante y hacia atrás.", "Hirschman"],
  ["Tras el golpe de Rojas renunció de inmediato y se fue a criar vacas a Albán.", "Currie"],
  ["Siguió un año con el gobierno militar y luego abrió una consultora privada.", "Hirschman"],
  ["Habló de las 'racionalidades ocultas'.", "Hirschman"],
  ["Escribió 'Operación Colombia'.", "Currie"],
  ["Llamó a la reforma agraria colombiana una 'revolución silenciosa'.", "Hirschman"],
  ["Inspiró 'Las Cuatro Estrategias' de Misael Pastrana.", "Currie"],
  ["Fue el primer asesor económico de la Casa Blanca con Roosevelt.", "Currie"],
  ["Trabajó en el Plan Marshall antes de llegar a Colombia.", "Hirschman"],
  ["Se quedó en Colombia el resto de su vida.", "Currie"],
  ["Terminó en el Instituto de Estudios Avanzados de Princeton.", "Hirschman"],
  ["Escribió 'Salida, voz y lealtad'.", "Hirschman"],
  ["Peleó con los republicanos en la guerra civil española.", "Hirschman"],
  ["Era el clásico liberal 'New Dealer'.", "Currie"],
  ["Dedicó un capítulo a Carlos Lleras Restrepo, 'maestro en el arte de la reforma'.", "Hirschman"],
  ["Pensaba que la clave era la construcción urbana y dejar migrar a los campesinos.", "Currie"],
  ["Dijo que una revolución es más fácil de realizar que una reforma.", "Hirschman"],
  ["Fue llamado el 'decano de los economistas' en Colombia.", "Currie"],
  ["Escribió en 1960 sobre las ideologías del desarrollo y el cepalismo.", "Hirschman"],
  ["Llegó como asesor de la Oficina de Planeación de Laureano Gómez.", "Hirschman"],
  ["Lo culparon de 'perder China'.", "Currie"]
];

// ¿Qué diría Malcolm Deas? "¡Paja!" o "De acuerdo"
const PAJA = [
  ["Colombia siempre ha sido violenta: 200 años continuos de violencia.", "Paja"],
  ["La violencia tiene causas objetivas: la pobreza y la desigualdad.", "Paja"],
  ["Hay algo en el alma colombiana que tiende instintivamente a la violencia.", "Paja"],
  ["Colombia es un país que en ocasiones ha sido violento.", "De acuerdo"],
  ["La exclusión política ha sido muchas veces el detonante de la violencia.", "De acuerdo"],
  ["En el siglo XIX la política era solo una conversación entre caballeros de la élite.", "Paja"],
  ["La politización penetró todas las capas de la sociedad desde temprano en el siglo XIX.", "De acuerdo"],
  ["En Colombia siempre han gobernado las mismas familias.", "Paja"],
  ["Un civil puede formular una estrategia de seguridad.", "De acuerdo"],
  ["La seguridad es un asunto gremial que hay que dejarle solo al ejército.", "Paja"],
  ["Sin seguridad no hay Estado.", "De acuerdo"],
  ["Para entender la política de un país hay que preguntar cómo se manda.", "De acuerdo"],
  ["Los problemas son tan grandes que el Estado nunca podrá ganar: solo queda negociar ya.", "Paja"],
  ["El proceso de paz fue la consecuencia lógica de la seguridad democrática.", "De acuerdo"],
  ["Para explicar Colombia hay que escribir grandes volúmenes y una gran teoría.", "Paja"],
  ["El diario de una costurera de pueblo puede ser una fuente histórica valiosa.", "De acuerdo"],
  ["Colombia ha hecho varias cosas bien: servicios públicos, salud, educación.", "De acuerdo"],
  ["Hay que estudiar el pasado para justificar la lucha política del presente.", "Paja"],
  ["El Estado tiene el derecho y el deber de usar la fuerza para proteger a sus ciudadanos.", "De acuerdo"],
  ["La insurgencia siempre fue la gran fuerza del país, aun antes de la coca.", "Paja"]
];

// Completar la frase
const FILL = [
  { v:"v1", s:"La misión de 1949 fue del Banco Internacional de Reconstrucción y ___.", a:"Fomento", o:["Fomento","Comercio","Desarrollo Social","Ahorro"] },
  { v:"v1", s:"Hirschman veía en Paz de Río ___ productivos hacia adelante y hacia atrás.", a:"encadenamientos", o:["encadenamientos","subsidios","aranceles","monopolios"] },
  { v:"v1", s:"Hirschman llamó a la reforma agraria colombiana una revolución ___.", a:"silenciosa", o:["silenciosa","verde","cultural","armada"] },
  { v:"v1", s:"El plan de desarrollo de Misael Pastrana se llamó 'Las Cuatro ___'.", a:"Estrategias", o:["Estrategias","Libertades","Fronteras","Reformas"] },
  { v:"v1", s:"Currie publicó el libro 'Operación ___'.", a:"Colombia", o:["Colombia","Marquetalia","Progreso","Cóndor"] },
  { v:"v1", s:"La CEPAL promovió la industrialización por ___ de importaciones.", a:"sustitución", o:["sustitución","liberalización","multiplicación","eliminación"] },
  { v:"v1", s:"El lema de Alberto Lleras Camargo fue 'austeridad y ___'.", a:"desarrollo", o:["desarrollo","orden","seguridad","paz"] },
  { v:"v1", s:"La planeación de inspiración francesa del Frente Nacional fue la planeación ___.", a:"indicativa", o:["indicativa","centralizada","soviética","obligatoria"] },
  { v:"v1", s:"Hirschman habló de las racionalidades ___ de emprendedores y comunidades.", a:"ocultas", o:["ocultas","limitadas","perfectas","económicas"] },
  { v:"v1", s:"Currie y Hirschman fueron víctimas de sospechas del ___ en EE.UU.", a:"macartismo", o:["macartismo","nazismo","fascismo","peronismo"] },
  { v:"v1", s:"Antes de Colombia, Hirschman trabajó en el Plan ___.", a:"Marshall", o:["Marshall","Colombia","Cóndor","Lazo"] },
  { v:"v1", s:"La ley de reforma agraria de 1961 es la Ley ___.", a:"135", o:["135","100","200","160"] },
  { v:"v1", s:"El episodio contradice la tesis de Colombia como el '___ de Suramérica'.", a:"Tíbet", o:["Tíbet","Japón","Suiza","Egipto"] },
  { v:"v2", s:"El ensayo más famoso de Deas se llama 'Del poder y la ___'.", a:"gramática", o:["gramática","violencia","política","historia"] },
  { v:"v2", s:"Para Deas, para entender un país hay que preguntar: ¿cómo se ___?", a:"manda", o:["manda","produce","vota","negocia"] },
  { v:"v2", s:"'En Colombia unos creen que mandan y otros creen que ___'.", a:"obedecen", o:["obedecen","mandan","votan","pelean"] },
  { v:"v2", s:"Lo más ofensivo que Deas decía de alguien era: 'se ___'.", a:"despistó", o:["despistó","equivocó","vendió","durmió"] },
  { v:"v2", s:"Deas: Colombia es un país que en ___ ha sido violento.", a:"ocasiones", o:["ocasiones","siempre","esencia","nada"] },
  { v:"v2", s:"Fals Borda creó la IAP: investigación ___ participativa.", a:"acción", o:["acción","académica","aplicada","armada"] },
  { v:"v2", s:"Deas cofundó el Latin American Centre de Oxford con Raymond ___.", a:"Carr", o:["Carr","Berlin","Robinson","Pécaut"] },
  { v:"v2", s:"Deas decía que le debía su puesto en Oxford a Fidel ___.", a:"Castro", o:["Castro","Cepeda","Fals","Lleras"] },
  { v:"v2", s:"Las ideas de Deas nutrieron la política de seguridad ___ de Uribe.", a:"democrática", o:["democrática","nacional","ciudadana","total"] },
  { v:"v2", s:"Gonzalo Sánchez: 'Malcolm nos inhibió de ser ___'.", a:"irresponsables", o:["irresponsables","marxistas","optimistas","historiadores"] },
  { v:"v2", s:"En el prefacio, Robinson compara a Deas con Henry ___.", a:"Kissinger", o:["Kissinger","Ford","Kennedy","Truman"] },
  { v:"v2", s:"En 2016, Deas se definió como 'uribista ___'.", a:"santista", o:["santista","petrista","pastranista","gavirista"] },
  { v:"v2", s:"El diario estudiado por Deas era de una costurera de ___ (entre Boyacá y Santander).", a:"Suaita", o:["Suaita","Soacha","Tunja","Albán"] }
];

// Relacionar columnas
const MATCH = [
  { v:"v1", t:"Personajes del duelo de titanes", p:[
    ["Lauchlin Currie","Dirigió la misión del BIRF de 1949"],
    ["Albert Hirschman","Racionalidades ocultas"],
    ["Raúl Prebisch","Dirigió la CEPAL"],
    ["Varian Fry","Rescate de intelectuales en Europa"],
    ["Carlos Lleras Restrepo","Maestro en el arte de la reforma"],
    ["Misael Pastrana","Las Cuatro Estrategias"]
  ]},
  { v:"v1", t:"Gobiernos y decisiones", p:[
    ["Mariano Ospina Pérez","Pidió el préstamo al Banco Mundial"],
    ["Laureano Gómez","Ecopetrol y reforma del BanRep de 1951"],
    ["Rojas Pinilla","El Dorado y gasto insostenible"],
    ["Junta Militar (1957)","Plan de estabilización con el FMI"],
    ["Alberto Lleras Camargo","Austeridad y desarrollo"],
    ["Edwin Kemmerer","Misiones de los años 20 y 30"]
  ]},
  { v:"v1", t:"Conceptos clave (video 1)", p:[
    ["ISI","Aranceles para proteger la industria nacional"],
    ["Planeación indicativa","El Estado concierta metas con los privados"],
    ["Encadenamientos","Efectos productivos hacia adelante y atrás"],
    ["Centro-periferia","Comercio internacional asimétrico"],
    ["Operación Colombia","Urbanizar y construir en vez de reforma agraria"],
    ["Chivo expiatorio","Rol del experto para culparlo en crisis"]
  ]},
  { v:"v2", t:"Personajes alrededor de Deas", p:[
    ["Diego Aretz","Autor del libro sobre Deas"],
    ["Orlando Fals Borda","Investigación acción participativa"],
    ["Gonzalo Sánchez","Principal contradictor, violentología"],
    ["James Robinson","Nobel; lo compara con Kissinger"],
    ["Raymond Carr","Cofundador del Latin American Centre"],
    ["Fernando Cepeda","Lo llevó a Los Andes"]
  ]},
  { v:"v2", t:"Poder, seguridad y anécdotas", p:[
    ["Jaime Bermúdez","'Profe, eso no pegó aquí'"],
    ["Caballero y Góngora","Prometer y cumplir 'un poquito'"],
    ["Sergio Jaramillo Caro","Viceministro de Defensa y comisionado de paz"],
    ["Álvaro Uribe","Invitado a Oxford antes de 2002"],
    ["Rafael Pardo","Consejería de seguridad; cae Escobar"],
    ["Alberto Lleras","Único colombiano que Deas conocía antes de llegar"]
  ]},
  { v:"v2", t:"Ideas de Deas", p:[
    ["Del poder y la gramática","Civiles y gramáticos en el poder"],
    ["Costurera de Suaita","Politización de todas las capas sociales"],
    ["Exclusión política","Detonante de la violencia"],
    ["Causas objetivas","Tesis de pobreza y desigualdad (rechazada)"],
    ["¿Cómo se manda?","Pregunta para entender un país"],
    ["'Paja'","Generalización sin pruebas"]
  ]}
];

// Ordenar cronológicamente (en orden correcto)
const ORDER = [
  { v:"v1", t:"Ordena: el camino de la tecnocracia (video 1)", items:[
    "Misiones Kemmerer (años 20-30)",
    "Bogotazo y Conferencia Panamericana (1948)",
    "Llega la misión Currie (1949)",
    "Golpe de Rojas Pinilla; Currie a Albán (1953)",
    "Frente Nacional crea el DNP (1958)",
    "Ley 135 de reforma agraria (1961)",
    "Las Cuatro Estrategias de Pastrana (1970-74)"
  ]},
  { v:"v1", t:"Ordena: la vida de Hirschman", items:[
    "Nace en Berlín",
    "Huye del nazismo y estudia en Francia",
    "Rescate de intelectuales con Varian Fry",
    "Trabaja en el Plan Marshall",
    "Asesor de la Oficina de Planeación en Colombia",
    "Deja Colombia (1956)",
    "Instituto de Estudios Avanzados de Princeton"
  ]},
  { v:"v2", t:"Ordena: la vida de Malcolm Deas", items:[
    "Nace en Dorset",
    "Fellow de All Souls, Oxford",
    "Llega a Colombia (1963)",
    "Cofunda el Latin American Centre (1964)",
    "Consejería de seguridad con Gaviria (1990-94)",
    "Se declara 'uribista santista' (2016)",
    "Muere (2023)"
  ]},
  { v:"v2", t:"Ordena: violencia, seguridad y paz", items:[
    "Caballero y Góngora y los Comuneros (1781)",
    "Revolución Cubana (1959)",
    "Tesis de las causas objetivas (años 60)",
    "Constitución de 1991 y reinserción del M-19",
    "Cae Pablo Escobar (1993)",
    "Seguridad democrática de Uribe (2002)",
    "Proceso de paz (2016)"
  ]}
];
