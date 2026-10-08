/**
 * @typedef {{ tipo: "mensaje" | "foto" | "carta" | "ticket" | "audio", contenido?: string, alt?: string, frente?: string, reverso?: string, archivo?: string, titulo?: string }} Bloque
 * @typedef {{ numero: number, titulo: string, bloques?: Bloque[], tipo?: Bloque["tipo"], contenido?: string, frente?: string, reverso?: string, audio?: string }} Dia
 */

/** @type {Dia[]} */
export const dias = [
  { numero: 1, titulo: "Feli mesesito cumpleañeroo!!💗", tipo: "carta", frente:"me demoré más de lo que esperaba en esto pero espero que te guste c:", reverso: "Una mini sorpresita por cada día, no vale hacer trampa \n -PISTITA- \n Hay regalitos... \n  unos los compré, otros vienen en camino y otro los hice yo \n o hice el intento al menos :,) \n  ten piedad y no me juzgues (tanto) hermosa hada artesana (ಥ _ ಥ)" },

 { numero: 2,
  titulo: "Hola wapa",
  bloques: [
    { tipo: "mensaje", contenido: "Te iré dando pequeñas pistas sobre algunas de las sorpresitas paratú" },
    { tipo: "carta", frente: "Ya te adelanté que son más de una :>", reverso:"-PISTITA- \n Uno de tus regalos es probablemente más pequeño de lo que estás imaginando \n \n \n bueno\nmásdeuno"},
      { tipo: "ticket", frente: "Vale por...", contenido: "💕Un picnic💕\n yo me encargo de todo, tú solo escoge tu mejor aufi picniestico :)" },
]
  },

  {
  numero: 3,
  titulo: "HOLAMIAMOR",
  bloques: [
    { tipo: "mensaje", contenido: "Hoy tas de suerte :P" },
    { tipo: "ticket", frente: "Te ganaste un...", contenido: "💕 VALE POR UN LIBRO 💕\n solo es excusa para ir juntos a Crisol jeje, solo por esta vez también cuentan tus manwhas cochinotes" },
  ],
}, 
 
{ numero: 4,
  titulo: "OLAAAA",
  bloques: [
    { tipo: "mensaje", contenido: "Estuve preparando vaarias cositas para este mes, creo que te van a gustar" },
    { tipo: "carta", frente: "quiero que lo pases bien en tu mesesito cumpleañero :) y aunque no esta siendo como me hubiera gustado, intentaré compensarlo", reverso:"-PISTITA- \n Hay algo dulce esperandote en algun momento de este mes... \n apartedemi "},
      { tipo: "ticket", frente: "Mini-pistita", contenido: "Algo te acompañará todos los días desde el suelo..." },
]
  },





  { numero: 5,
  titulo: "Ya falta poquito...",
  bloques: [
    { tipo: "mensaje", contenido: "Estoy muy emocionado askljdhalk " },
    { tipo: "carta", frente: "y espero que tú también lo estés \n Ahi te va otra pista", reverso:"-PISTITA- \n  Hay uno que espero que uses bastante.\n igual sí no lo haces está bien, sinpresiones, fingiré que no me importa :')"},
  { tipo: "audio", archivo: "/audio/congratulations.mp3", titulo: "cancionhermosa, pero no tan hermosa como tú" },]
  },
{
  numero: 6,
  titulo: "TICTACTICTAC...",
  bloques: [
    { tipo: "mensaje", contenido: "Un pequeño adelanto" },
         { tipo: "carta", frente: "Amore \n Estas invitada a una cita especial...", 
          reverso: "Quiero invitarte a una cena romantica con tu servidor :) 📍Lugar: Secreto por ahora jeje \n 🕡Hora: 6:45pm \n 📅Fecha: 12 de octubre \n 👗Dresscode: verte hermosa, como siempre."},
    { tipo: "ticket", frente: "Quieres saber más o dejo que sea sorpresa? 👀", contenido: "No seas sapa :P \n askdj dime tu respuesta por wasa " },

   
  ],
},   



{ numero: 7,
  titulo: "Una carta y una canción",
  bloques: [
    { tipo: "mensaje", contenido: "Hay una infinidad de canciones que me recuerdan a ti, no sé si es porque estas en mi cabeza 24/7 y veo partes de ti en todo, o porque estoy muy enamorado:P pero todas son especiales..." },
    { tipo: "carta", frente: "y esta es una de ellas >volteamebro<", reverso: "Estoy muy orgulloso de ti y de lo que estas logrando amor, estar a tu lado me da paz y quiero que asi sea toda mi vida, hoy nomas quiero recordarte que puedes apoyarte en mi siempre que lo necesites, no te exijas demasiado, 'la presion es un privilegio' pero el descanso tambien es importante, te amo infinitamente💓" },
    { tipo: "audio", archivo: "/audio/tearheart.mp3", titulo: "aña" },
  ],
},
{
  numero: 8,
  titulo: "BOM DIA",
  bloques: [
    { tipo: "mensaje", contenido: "Hoy toca vale de nuevo C:" },
    { tipo: "ticket", frente: "Adivina de que...", contenido: "UN BESOTE MIO 😽" },
        { tipo: "mensaje", contenido: "segundointento \n Amor mio, quieres saber más sobre la cita que he planeado para tú cumpleaños?👀 " },
      { tipo: "ticket", frente: "Rasga aqui", contenido: "El 12 vas a necesitar de algo para una de tus sorpresas...\n pero no te preocupes, yo lo tengo :P \n puedes recogerlo cuando quieras\n Ah si, para revelar algo más, toca tu mini-me jeje" },
       { tipo: "audio", archivo: "/audio/mariposas.mp3", titulo: "<3" },

    ],
  
  
}, 

{ numero: 9,
  titulo: "HOLA DE NUEVO AMOR",
  bloques: [
    { tipo: "mensaje", contenido: "TAS EMOCIONADA? 😺" },
    { tipo: "carta", frente: "yo espero que sí\n Se vienen 2 días importantes :)\n estás preparada?\n Espero estes teniendo un día hermoso mi vida, tú puedes!! \n ahi va la pista", 
      reverso: "-PISTITA- \n Ojalá te gusten las alcachofas brillantes \n lo entenderás después \n o tal vez no... \n TEAMO💕."},
      { tipo: "audio", archivo: "/audio/love..mp3", titulo: "amol." },
        { tipo: "ticket", frente: "Mini-pistita", contenido: "Uno no durará mucho tiempo sin abrir en tus manos 🔵🤏, eres veloz." },
  ],
},
{ numero: 10,
  titulo: "Cada vez está más cerca",
  bloques: [
    { tipo: "mensaje", contenido: "y no hablo de un día cualquiera 🦥" },
    { tipo: "carta", frente: "Ten lindo día mi amor, echale ganas 💓\n ya te la sabes \n ahi va la pista", 
      reverso: "-PISTITA- \n Algunos regalos tienen sentido, otros puede que no, pero todos y cada uno de ellos fueron pensados especialmente para ti 💕."},
   { tipo: "ticket", frente: "Vale por...", contenido: "💕El maquillaje que quieras💕\n a tu eleccion si vas conmigo o sinmigo \n Aplican TyC🦥 " },
    ],
},




{
  numero: 11,
  titulo: "NO FALTA NADA",
  bloques: [
    { tipo: "mensaje", contenido: "May the odds be ever in your favor!" },
        { tipo: "carta", frente: "Cómop te sientes amor? ya solo faltan horas para tu cumpleaños y unas cuantas más para nuestro segundo aniversario :)", 
      reverso: "es increible como vuela el tiempo, no puedo describir con palabras lo afortunado que me siento de estar a tu lado y de acompañarte en momentos importantes como el que viene, espero que lo disfrutes mucho y que te guste todo lo que preparé para ti, te amo infinitamente 💓"},

    { tipo: "ticket", frente: "Mini-pistita", contenido: "Uno tiene que ver con algo que te apasiona mucho🤓" },
  ],
}, 
{
  numero: 12,
  titulo: "Happy Hunger games, meu amor!!",
  bloques: [
    {
      tipo: "recorrido-cumple",
      datos: {
        carta: {
          frente: "Hoy no hay un regalo",
          reverso: "Hay varios pero no te voy a decir cuales :P \n  Tú lo tendrás que descubrir..."
        },

        // Completa estos textos cuando los tengas.
        invitacion: "Te invito a un recorrido especial por tu cumpleaños, como primer destino me gustaría invitarte a mi humilde morada, hay una sorpresita esperandote 💕",
        pistaDos: "Preparé algo para ti, tiene un poquito de azúcar👀, bastante cariño💕 y un diseño algo exotico, espero que te guste y si no, que valores el intento (ಥ _ ಥ) teamo",

        regalos: [
       
          {
            respuesta: "FLORES",
            adivinanza: "No tengo voz, pero puedo decir “te quiero”.\nNo duran para siempre, pero cuando llegan suelen alegrar el día.\nAlgunas tienen espinas y otras huelen demasiado bien.\n¿Qué palabra buscas?"
          },
          {
            respuesta: "CAPIBARA",
            adivinanza: "Soy grande, tranquilo y me llevo bien con casi todos.\nNo necesito correr para caerle bien a nadie.\nSi me ves relajado, probablemente estoy haciendo exactamente lo que quiero.\n¿Quién soy?"
          },
          {
            respuesta: "MINI",
            adivinanza: "Puedo ser una casa, una comida o cualquier cosa que imagines,\npero en un tamaño mucho más pequeño.\nSoy pequeña, aunque hacerme puede tomar bastante tiempo. (para ti, lo dudo)\n¿Qué palabra me describe?"
          },
          {
            respuesta: "MONO",
            adivinanza: "Vivo entre árboles, soy bastante curioso\ny dicen que algunas de mis costumbres se parecen mucho a las de ustedes.\n más a las tuyas por lo que me han contado\n¿Qué palabra buscas?"
          },
          {
            respuesta: "LUZ",
            adivinanza: "No puedes agarrarme con las manos,\npero puedo hacer que todo se vea diferente.\nAparezco cuando hay oscuridad y desaparezco cuando ya no me necesitas.\n¿Qué soy?"
          },
          {
            respuesta: "HECHO A MANO",
            adivinanza: "No salí de una fábrica\ny probablemente tampoco de una tienda.\nAlguien tuvo que dedicar tiempo, paciencia\ny un poquito de fe para hacerme. 😂\n¿Qué palabra o frase buscas?"
          },
          {
            respuesta: "ARENA",
            adivinanza: "En este lugar no quieres terminar.\nAquí competir significa sobrevivir\ny tener suerte puede ser más importante que ser fuerte.\n¿Qué palabra buscas?"
          },
          {
            respuesta: "COSECHA",
            adivinanza: "Llega una vez al año\ny puede decidir quién tendrá que irse\naunque nadie quiera hacerlo.\nEn cierto lugar, puede ser bastante más aterradora de lo normal.\n¿Qué palabra buscas?"
          },
          {
            respuesta: "ABRAZO",
            adivinanza: "No cuesta dinero,\nno necesitas comprarlo\ny puede hacer que un día malo se sienta un poquito mejor.\nPara hacerlo solo hacen falta dos personas… normalmente.\n¿Qué palabra buscas?"
          },
          {
            respuesta: "DIENTE",
            adivinanza: "Tengo una corona, pero no soy rey.\nTengo raíces, pero no soy una planta.\nY aunque normalmente vivo dentro de una boca,\nhoy estoy buscando una respuesta.\n¿Qué soy?"
          },
          {
            respuesta: "CELULAR",
            adivinanza: "Probablemente estás leyendo esto gracias a mí.\nMe llevas contigo prácticamente a todas partes\ny cuando desaparezco durante cinco minutos, empieza el pánico. 😂\n¿Qué palabra buscas?"
          },
          {
            respuesta: "RECUERDO",
            adivinanza: "No puedo volver a vivir un momento,\npero puedo hacer que vuelvas a pensar en él.\nA veces está en una foto, una canción o una pequeña cosa guardada.\n¿Qué palabra buscas?"
          }
        ]
      }
    }
  ]
},
];
