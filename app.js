const firebaseConfig = {
  apiKey: "AIzaSyCdu3MZhDL8OqIlBlUxJOwqLRQP4A4C570",
  authDomain: "liga-bakugan.firebaseapp.com",
  projectId: "liga-bakugan",
  storageBucket: "liga-bakugan.firebasestorage.app",
  messagingSenderId: "937923502730",
  appId: "1:937923502730:web:2cf8966e74c8449ca34373",
  measurementId: "G-97PV4B7K0X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


/* ================= i18n (ES / EN) ================= */
const I18N = {
  es: {
    'settings.title': 'Ajustes',
    'settings.subtitle': 'Sonido, sesión e idioma',
    'settings.volume': 'Volumen',
    'settings.mute': '🔇 Silenciar',
    'settings.unmute': '🔊 Activar sonido',
    'settings.login': 'Iniciar sesión',
    'settings.logout': 'Cerrar sesión',
    'settings.lang': 'Idioma',
    'settings.fabTitle': 'Ajustes',
    'banner.visitor': 'Estás en modo <strong>visita</strong> · Podés ver Liga, Noticias y Glosario.',
    'banner.login': 'Iniciá sesión',
    'banner.forProfile': ' para perfil y duelos.',
    'tab.perfil': 'PERFIL',
    'tab.historial': 'HISTORIAL',
    'hist.title': 'HISTORIAL DE PARTIDAS',
    'hist.subtitle': 'Tocá una partida para ver el detalle completo del encuentro.',
    'hist.empty': 'Aún no hay partidas registradas.',
    'hist.win': 'VICTORIA',
    'hist.loss': 'DERROTA',
    'hist.forfeit': 'ABANDONO',
    'tab.liga': 'LIGA',
    'tab.noticias': 'NOTICIAS',
    'tab.guia': 'GUÍA',
    'tab.glosario': 'GLOSARIO',
    'tab.coleccion': 'COLECCIÓN',
    'col.title': 'COLECCIÓN',
    'col.hint': 'Explorá el catálogo. Tocá un Bakugan para ver figura, carta de personaje, Evo o Fusión. Agregá a tu colección personal (por perfil) o sumá cores a un deck.',
    'col.sub.bakugan': 'BAKUGAN',
    'col.sub.cores': 'CORES',
    'col.sub.mine': 'MI COLECCIÓN',
    'col.search': 'Buscar por nombre...',
    'tab.admin': 'ADMIN',
    'tab.guiaTitle': 'Aprender a jugar',
    'footer.invite': 'Si querés unirte a nuestra comunidad y formar parte de nosotros, te invito a unirte a nuestro Discord:',
    'footer.discord': '💬 ÚNETE AL DISCORD',
    'logout.confirm': '¿Cerrar sesión?',
    'profile.title': 'MI PERFIL',
    'profile.nick': 'Nick-Name (Modificable)',
    'profile.nickPh': 'Tu Nickname...',
    'profile.contact': 'Contacto (Gmail o Teléfono)',
    'profile.contactPh': 'ejemplo@mail.com o +54...',
    'profile.stats': 'MIS ESTADÍSTICAS',
    'profile.points': 'PUNTOS',
    'profile.rank': 'RANGO',
    'profile.wins': 'VICTORIAS',
    'profile.losses': 'DERROTAS',
    'profile.factions': 'Facciones preferidas',
    'profile.decks': 'TUS 3 DECKS (3 Bakugan c/u)',
    'profile.deckName': 'Nombre del deck',
    'profile.deckNamePh': 'Nombre del deck...',
    'profile.deckHint': 'El deck activo se usa en duelos. Tocá una pestaña y marcá “Usar en duelo”.',
    'profile.useDeck': '⭐ Usar este deck en duelo',
    'profile.save': 'GUARDAR PERFIL',
    'profile.logout': 'CERRAR SESIÓN',
    'profile.pickAvatar': 'Elegí tu avatar',
    'profile.avatarHint': 'tocá para cambiar',
    'liga.ranking': 'RANKING DE LA LIGA',
    'liga.player': 'JUGADOR',
    'liga.pts': 'PTS',
    'liga.wd': 'V/D',
    'liga.rankCol': 'RANGO',
    'liga.swipe': '← Deslizá para ver todo →',
    'liga.pointsSystem': 'SISTEMA DE PUNTOS',
    'liga.pointsRules': '• Cada <strong>victoria</strong> suma <span style="color:var(--neon-green)">+50</span> puntos<br>• Cada <strong>derrota</strong> resta <span style="color:#ff4466">-25</span> puntos<br>• <strong>Abandono:</strong> el que abandona <span style="color:#ff4466">-50</span> pts · el ganador <span style="color:var(--neon-green)">+25</span> pts<br><br><strong>Rangos e Insignias:</strong>',
    'rank.novato': 'Novato',
    'rank.bronce': 'Bronce',
    'rank.plata': 'Plata',
    'rank.oro': 'Oro',
    'rank.diamante': 'Diamante',
    'rank.rey': 'Rey de Batallas',
    'news.title': 'TABLÓN DE NOTICIAS',
    'news.search': '🔍 Buscar noticias...',
    'news.loading': 'Cargando novedades...',
    'glossary.title': 'GLOSARIO TCG',
    'glossary.sec.bases': 'BASES DEL JUEGO',
    'glossary.sec.cores': 'TIPOS DE BAKUCORE',
    'glossary.sec.strike': 'MECÁNICAS STRIKE',
    'glossary.sec.symbols': 'SÍMBOLOS Y EFECTOS',
    'glossary.matrix.t': 'Matrix o Campo',
    'glossary.matrix.d': 'Es donde se lanzan los Bakugan para pelear. Está conformada por los 12 BakuCore (6 de cada jugador correspondientes a sus Bakugan).',
    'glossary.bakugan.t': 'Bakugan',
    'glossary.bakugan.d': 'Criaturas esféricas que se abren en el campo de batalla. Cada uno tiene una Facción (Pyrus, Aquos, etc.), posee dos estadísticas (B-Power y Daño) y se debe jugar con sus BakuCores correspondientes.',
    'glossary.bpower.t': 'B-Power',
    'glossary.bpower.d': 'Representa la energía de combate o fuerza del Bakugan. Quien logre el B-Power más alto durante la batalla gana la ronda.',
    'glossary.dmg.t': 'Daño',
    'glossary.dmg.d': 'Indica la cantidad de cartas que el oponente debe retirar/descartar de su mazo si tu Bakugan gana el combate.',
    'glossary.char.t': 'Carta Personaje',
    'glossary.char.d': 'Muestra las estadísticas base (B-Power y Daño), la facción y los BakuCores requeridos de tu Bakugan.',
    'glossary.action.t': 'Carta Acción',
    'glossary.action.d': 'Cartas que juegas pagando Energía para potenciar estadísticas, modificar el campo o cambiar el curso del combate.',
    'glossary.hero.t': 'Carta Héroe',
    'glossary.hero.d': 'Se quedan en el campo una vez jugadas y otorgan efectos pasivos o habilidades continuas durante toda la partida.',
    'glossary.flip.t': 'Carta Flip',
    'glossary.flip.d': 'Cartas defensivas que se activan inmediatamente cuando recibes daño del mazo para detener ataques o contraatacar.',
    'glossary.evo.t': 'Carta Evo',
    'glossary.evo.d': 'Evoluciones que colocas sobre una Carta de Personaje activa para aumentar drásticamente sus estadísticas y ganar nuevas habilidades.',
    'glossary.gear.t': 'Carta Gear',
    'glossary.gear.d': 'Equipamiento o armamento (Baku-Gear) que sumas a tus Bakugan pagando su coste en energía para potenciar tus ataques.',
    'glossary.shield.t': 'Shield Core',
    'glossary.shield.d': 'Shield (Escudo Naranja): Bakucore centrado en B-Power. Variantes altas suelen requerir Facción; las de debuff bajan B-Power sin restricción.',
    'glossary.magic.t': 'Magic Shield Core',
    'glossary.magic.d': 'Magic Shield (Escudo Mágico): máximos bonos de B-Power. Suele pedir condiciones (p. ej. Fusión) o bajar coste de Baku-Gear.',
    'glossary.fist.t': 'Fist Core',
    'glossary.fist.d': 'Fist (Puño Verde): cambios leves de stats; valores base bajos con buffs por facción.',
    'glossary.firefist.t': 'Fire Fist Core',
    'glossary.firefist.d': 'Fire Fist (Puño de Fuego): variante agresiva del Fist con más Daño o B-Power.',
    'glossary.helix.t': 'Helix Core',
    'glossary.helix.d': 'Helix (Hélice): sube un parámetro y baja otro.',
    'glossary.frost.t': 'FrostStrike',
    'glossary.frost.d': 'Coste de energía extra si el rival quiere jugar Flip tras el cálculo de daño.',
    'glossary.shadow.t': 'ShadowStrike',
    'glossary.shadow.d': 'Inmunidad a reducciones de estadísticas por cartas, cores o efectos rivales en combate.',
    'glossary.double.t': 'DobleStrike',
    'glossary.double.d': 'Multiplica x2 el daño total del Bakugan antes de aplicarlo.',
    'glossary.reroll.t': 'Reroll',
    'glossary.reroll.d': 'Permite relanzar tu Bakugan en el turno si falló el lanzamiento.',
    'glossary.negate.t': 'Negar Core',
    'glossary.negate.d': 'Anula el BakuCore del rival en esa ronda (stats y efectos).',
    'glossary.addcore.t': 'Sumar Core',
    'glossary.addcore.d': 'Toma un BakuCore extra de la Matrix para tu Bakugan activo.',
    'glossary.stealcore.t': 'Robar Core',
    'glossary.stealcore.d': 'Quita el BakuCore del rival y se lo da a tu Bakugan activo.',
    'glossary.energy.t': 'Energía',
    'glossary.energy.d': 'Coste en energía para jugar cartas de la mano.',
    'glossary.bakugear.t': 'Baku-Gear',
    'glossary.bakugear.d': 'Equipamiento/armamento. Suele reducir -2 el coste de un Baku-Gear.',
    'glossary.doublegear.t': 'Doble Baku-Gear',
    'glossary.doublegear.d': 'Permite un segundo Baku-Gear en el mismo Bakugan.',
    'glossary.stop.t': 'Stop',
    'glossary.stop.d': 'Frena y cancela el ataque rival tras el cálculo de daño.',
    'glossary.fusion.t': 'Fusión',
    'glossary.fusion.d': 'Voltea el Bakugan a su versión Fusionada con nuevas stats.',
    'glossary.ta.t': 'Team Attack',
    'glossary.ta.d': 'Suma el Daño de tus tres Bakugan en un solo impacto.',
    'glossary.victor.t': 'Victor',
    'glossary.victor.d': 'Se activa solo si tu Bakugan gana la ronda.',
    'glossary.diamond.t': 'Evolución Diamante',
    'glossary.diamond.d': 'Marca la línea evolutiva Diamante de un Bakugan.',
    'glossary.scan.t': 'Escanear (Scan)',
    'glossary.scan.d': 'Mira la carta superior del Deck; la dejás arriba o al fondo.',
    'glossary.draw.t': 'Robar Carta',
    'glossary.draw.d': 'Tomar cartas del tope del Deck.',
    'faq.title': 'CONSULTAS Y AYUDA',
    'faq.close': 'Cerrar ✖',
    'faq.back': '🔙 Volver al menú',
    'faq.q1': '¿Cómo sumo o pierdo puntos en la Liga?',
    'faq.a1': 'Cada victoria te suma +50 puntos y cada derrota te resta -25 puntos. ¡Acumula victorias para subir de rango!',
    'faq.q2': '¿Cómo funciona la Arena de Duelo TCG?',
    'faq.a2': 'Presioná ⚔️ en el Ranking, creá o ingresá un código de sala. El combate solo inicia cuando ambos están conectados. Decks y Bakugan se sincronizan en tiempo real.',
    'faq.q3': '¿Cuáles son los Rangos de la Liga?',
    'faq.a3': 'Novato (0-199), Bronce (200-499), Plata (500-999), Oro (1000-1599), Diamante (1600-3499) y Rey de Batallas (3500+).',
    'faq.q4': '¿Qué son los BakuCores y para qué sirven?',
    'faq.a4': 'Fichas del campo de batalla. Al abrir tu Bakugan sobre uno ganás bonos de B-Power o Daño. Tipos: Shield, Magic Shield, Fist, Fire Fist y Helix.',
    'faq.q5': '¿Diferencia entre B-Power y Daño?',
    'faq.a5': 'B-Power decide quién gana la ronda (el más alto gana). Daño = cartas que el perdedor descarta del mazo.',
    'faq.q6': '¿Qué hacen los efectos Strike?',
    'faq.a6': 'FrostStrike encarece Flip del rival; ShadowStrike evita que te bajen stats; DobleStrike multiplica tu daño x2.',
    'faq.q7': '¿Puedo cambiar mis Bakugan o Avatar?',
    'faq.a7': "Sí. Andá a Perfil, elegí avatar, editá tu equipo de 3 Bakugan o facciones y tocá GUARDAR PERFIL.",
    'faq.q8': '¿Cómo ver el perfil de otro jugador?',
    'faq.a8': 'En Liga tocá el nombre o fila de cualquier Brawler en el Ranking.',
    'faq.q9': '¿Cómo inicio sesión o me registro?',
    'faq.a9': 'En la bienvenida creás cuenta con Nick + Email + Contraseña, o iniciás con Nick/Email/Teléfono y clave.',
    'guide.m1': '¡Genial que estés aquí, Brawler! Voy a mostrarte un poco la arena.',
    'guide.m2': 'En <strong>Perfil</strong> podés cambiar tu Nick, ver tu ID, tu contacto y configurar tu equipo de 3 Bakugan.',
    'guide.m3': 'También podés seleccionar tus <strong>Facciones preferidas</strong> y cambiar tu ícono avatar.',
    'guide.m4': 'En el apartado <strong>Liga</strong> verás tu posición en el Ranking, tus puntos y en qué rango estás.',
    'guide.m5': 'Revisá <strong>Noticias</strong> para enterarte de torneos, eventos y avisos importantes.',
    'guide.m6': 'Si sos nuevo en el TCG, tenés un <strong>Glosario</strong> completo para consultar cuando quieras.',
    'guide.m7': '¡Listo! Ya conocés lo básico. Si necesitás ayuda, tocá mi ícono o el botón <strong>?</strong>.',
    'tut.continue': 'Continuar ▶',
    'tut.close': 'Cerrar',
    'tut.reviewCards': '🔁 Repasar cartas',
    'tut.continueTurns': 'Continuar ▶ Turnos',
    'tut.reviewDeck': '🔁 Cartas del deck',
    'tut.reviewCombat': '🔁 Combate',
    'tut.tapCard': 'Tocá la carta para verla en grande',
    'tut.charLabel': 'Tocá para girar · fondo negro = carta de personaje',
    'tut.step1': 'Bienvenidos Peleadores Bakugan. Si llegaste hasta aquí es porque estás interesado en ser un excelente peleador en la batalla Bakugan.',
    'tut.step1sub': 'Lady Fenne te guía',
    'tut.step2': 'Necesitás un <strong>Deck de 50 cartas</strong>. Tocá cada tipo para verlo en grande. Ahora vamos carta por carta.',
    'tut.step3': '<strong>Acción:</strong> cartas de juego rápido. Pagás el coste de energía y afectan solo a los Bakugans en combate. Tras usarlas van al <strong>descarte</strong>.',
    'tut.step4': '<strong>Héroe:</strong> efectos <strong>permanentes</strong>. Al pagar el coste van a la zona de Héroe y brindan su efecto de forma constante por turno.',
    'tut.step5': '<strong>Baku-Gear:</strong> equipamiento que sube las estadísticas básicas del Bakugan. Se acoplan debajo de la carta de personaje. Hay Gears simples y <strong>doble-bakugear</strong>.',
    'tut.step6': '<strong>Evo:</strong> hay varios tipos (Hyper, Maximus, Titan, Diamond, etc.). Al pagar energía quedan sobre la carta de personaje y <strong>reemplazan</strong> sus estadísticas básicas.',
    'tut.step7': '<strong>Flip:</strong> son los <strong>escudos</strong> del Deck. Detienen el daño del rival. Solo se juegan desde el Deck cuando recibís daño y pueden cambiar el curso de la partida.',
    'tut.step8': '<strong>Geogans:</strong> piezas de apoyo con formas geométricas. Al pagar el coste <strong>reemplazan al Bakugan activo</strong> por el Geogan (importante tener la figura física).',
    'tut.step9': 'También necesitás <strong>tres Bakugans</strong>, con sus <strong>Bakucores</strong> y <strong>cartas de personaje</strong> (fondo negro). Tocá para abrir / girar.',
    'tut.step10': '¿Querés <strong>repasar las cartas</strong> otra vez o seguimos con <strong>turnos y combates</strong>?',
    'tut.step11': '<strong>Turnos:</strong> en tu turno podés jugar cartas (Acción, Héroe, Gear, Evo, Geogan), cargar energía y preparar el combate. El deck de 50 cartas son tus <strong>puntos de vida</strong>.',
    'tut.step11sub': 'Robás, jugás efectos y luego combatís',
    'tut.step12': 'El objetivo: <strong>dejar al rival sin cartas en el deck</strong>. El <strong>Daño</strong> de tu Bakugan indica cuántas cartas descarta el rival al ganar el combate.',
    'tut.step12sub': 'Más daño = más cartas que pierde el rival',
    'tut.step13': 'Subí el <strong>B-Power</strong> para ganar la pelea. El vencedor queda <strong>desplegado</strong>. Con tus 3 Bakugans abiertos lanzás un <strong>Team Attack</strong> sumando el daño de los tres.',
    'tut.step14': '¡Listo, Brawler! ¿Repasamos las cartas, la mecánica de combate, o cerramos?',
    'tut.step14sub': '¡Estás listo para pelear!',
    'tut.label.bakugans': 'BAKUGANS',
    'tut.label.bakucores': 'BAKUCORES',
    'tut.label.chars': 'CARTAS DE PERSONAJE',
    'tut.dmg': 'Daño',
    'tut.teamAttack': 'TEAM ATTACK · Daño combinado',
    'tut.damageWord': 'daño'
  },
  en: {
    'settings.title': 'Settings',
    'settings.subtitle': 'Sound, session & language',
    'settings.volume': 'Volume',
    'settings.mute': '🔇 Mute',
    'settings.unmute': '🔊 Unmute',
    'settings.login': 'Sign in',
    'settings.logout': 'Sign out',
    'settings.lang': 'Language',
    'settings.fabTitle': 'Settings',
    'banner.visitor': 'You are in <strong>visitor</strong> mode · You can browse League, News and Glossary.',
    'banner.login': 'Sign in',
    'banner.forProfile': ' for profile and duels.',
    'tab.perfil': 'PROFILE',
    'tab.liga': 'LEAGUE',
    'tab.noticias': 'NEWS',
    'tab.guia': 'GUIDE',
    'tab.glosario': 'GLOSSARY',
    'tab.coleccion': 'COLLECTION',
    'col.title': 'COLLECTION',
    'col.hint': 'Browse the catalog. Tap a Bakugan to see figure, character card, Evo or Fusion. Add to your personal collection (per profile) or add cores to a deck.',
    'col.sub.bakugan': 'BAKUGAN',
    'col.sub.cores': 'CORES',
    'col.sub.mine': 'MY COLLECTION',
    'col.search': 'Search by name...',
    'tab.admin': 'ADMIN',
    'tab.guiaTitle': 'Learn how to play',
    'footer.invite': 'Want to join our community? Hop into our Discord:',
    'footer.discord': '💬 JOIN DISCORD',
    'logout.confirm': 'Sign out?',
    'profile.title': 'MY PROFILE',
    'profile.nick': 'Nickname (Editable)',
    'profile.nickPh': 'Your nickname...',
    'profile.contact': 'Contact (Email or Phone)',
    'profile.contactPh': 'example@mail.com or +1...',
    'profile.stats': 'MY STATS',
    'profile.points': 'POINTS',
    'profile.rank': 'RANK',
    'profile.wins': 'WINS',
    'profile.losses': 'LOSSES',
    'profile.factions': 'Preferred factions',
    'profile.decks': 'YOUR 3 DECKS (3 Bakugan each)',
    'profile.deckName': 'Deck name',
    'profile.deckNamePh': 'Deck name...',
    'profile.deckHint': 'The active deck is used in duels. Tap a tab and set “Use in duel”.',
    'profile.useDeck': '⭐ Use this deck in duels',
    'profile.save': 'SAVE PROFILE',
    'profile.logout': 'SIGN OUT',
    'profile.pickAvatar': 'Choose your avatar',
    'profile.avatarHint': 'tap to change',
    'liga.ranking': 'LEAGUE RANKING',
    'liga.player': 'PLAYER',
    'liga.pts': 'PTS',
    'liga.wd': 'W/L',
    'liga.rankCol': 'RANK',
    'liga.swipe': '← Swipe to see all →',
    'liga.pointsSystem': 'POINTS SYSTEM',
    'liga.pointsRules': '• Each <strong>win</strong> adds <span style="color:var(--neon-green)">+50</span> points<br>• Each <strong>loss</strong> subtracts <span style="color:#ff4466">-25</span> points<br>• <strong>Forfeit:</strong> the one who leaves <span style="color:#ff4466">-50</span> pts · winner <span style="color:var(--neon-green)">+25</span> pts<br><br><strong>Ranks & Badges:</strong>',
    'rank.novato': 'Rookie',
    'rank.bronce': 'Bronze',
    'rank.plata': 'Silver',
    'rank.oro': 'Gold',
    'rank.diamante': 'Diamond',
    'rank.rey': 'Battle King',
    'news.title': 'NEWS BOARD',
    'news.search': '🔍 Search news...',
    'news.loading': 'Loading news...',
    'glossary.title': 'TCG GLOSSARY',
    'glossary.sec.bases': 'GAME BASICS',
    'glossary.sec.cores': 'BAKUCORE TYPES',
    'glossary.sec.strike': 'STRIKE MECHANICS',
    'glossary.sec.symbols': 'SYMBOLS & EFFECTS',
    'glossary.matrix.t': 'Matrix / Field',
    'glossary.matrix.d': 'Where Bakugan are rolled to battle. Made of 12 BakuCores (6 per player matching their Bakugan).',
    'glossary.bakugan.t': 'Bakugan',
    'glossary.bakugan.d': 'Spherical creatures that open on the battlefield. Each has a Faction, B-Power and Damage, and must be played with matching BakuCores.',
    'glossary.bpower.t': 'B-Power',
    'glossary.bpower.d': 'Combat power of a Bakugan. Highest B-Power wins the round.',
    'glossary.dmg.t': 'Damage',
    'glossary.dmg.d': 'How many cards the opponent must discard from their deck if your Bakugan wins combat.',
    'glossary.char.t': 'Character Card',
    'glossary.char.d': 'Shows base stats (B-Power and Damage), faction and required BakuCores.',
    'glossary.action.t': 'Action Card',
    'glossary.action.d': 'Played by paying Energy to boost stats, change the field or swing combat.',
    'glossary.hero.t': 'Hero Card',
    'glossary.hero.d': 'Stay on the field once played and grant passive or ongoing abilities.',
    'glossary.flip.t': 'Flip Card',
    'glossary.flip.d': 'Defensive cards that activate when you take deck damage to stop or counter attacks.',
    'glossary.evo.t': 'Evo Card',
    'glossary.evo.d': 'Evolutions placed on an active Character Card to greatly raise stats and add abilities.',
    'glossary.gear.t': 'Gear Card',
    'glossary.gear.d': 'Equipment (Baku-Gear) attached to Bakugan by paying energy to boost attacks.',
    'glossary.shield.t': 'Shield Core',
    'glossary.shield.d': 'Orange Shield: focused on B-Power. High-value variants often need Faction conditions; debuff cores lower B-Power freely.',
    'glossary.magic.t': 'Magic Shield Core',
    'glossary.magic.d': 'Highest B-Power bonuses. Often needs conditions (e.g. Fusion) or reduces Baku-Gear cost.',
    'glossary.fist.t': 'Fist Core',
    'glossary.fist.d': 'Green Fist: mild stat changes with faction-specific buffs.',
    'glossary.firefist.t': 'Fire Fist Core',
    'glossary.firefist.d': 'Aggressive Fist variant with larger Damage or B-Power gains.',
    'glossary.helix.t': 'Helix Core',
    'glossary.helix.d': 'Trade-off stats: raises one parameter and lowers another.',
    'glossary.frost.t': 'FrostStrike',
    'glossary.frost.d': 'Extra energy cost if the opponent plays Flip after damage is calculated.',
    'glossary.shadow.t': 'ShadowStrike',
    'glossary.shadow.d': 'Immunity to stat reductions from cards, cores or opponent effects in combat.',
    'glossary.double.t': 'DoubleStrike',
    'glossary.double.d': 'Doubles (2x) the Bakugan’s total damage before applying it.',
    'glossary.reroll.t': 'Reroll',
    'glossary.reroll.d': 'Roll your Bakugan again this turn if the first roll failed.',
    'glossary.negate.t': 'Negate Core',
    'glossary.negate.d': 'Cancels the opponent’s BakuCore that round (stats and side effects).',
    'glossary.addcore.t': 'Add Core',
    'glossary.addcore.d': 'Take an extra BakuCore from the Matrix onto your active Bakugan.',
    'glossary.stealcore.t': 'Steal Core',
    'glossary.stealcore.d': 'Take the opponent’s claimed BakuCore onto your Bakugan.',
    'glossary.energy.t': 'Energy',
    'glossary.energy.d': 'Cost in energy points to play cards from your hand.',
    'glossary.bakugear.t': 'Baku-Gear',
    'glossary.bakugear.d': 'Equipment cards. Often reduce Baku-Gear play cost by 2 energy.',
    'glossary.doublegear.t': 'Double Baku-Gear',
    'glossary.doublegear.d': 'Allows a second Baku-Gear on the same Bakugan.',
    'glossary.stop.t': 'Stop',
    'glossary.stop.d': 'Stops and cancels the opponent’s attack after damage calculation.',
    'glossary.fusion.t': 'Fusion',
    'glossary.fusion.d': 'Flip the Bakugan card into its Fusion form with new stats.',
    'glossary.ta.t': 'Team Attack',
    'glossary.ta.d': 'Combined attack adding the Damage of all three of your Bakugan.',
    'glossary.victor.t': 'Victor',
    'glossary.victor.d': 'Triggers only if your Bakugan wins the round.',
    'glossary.diamond.t': 'Diamond Evolution',
    'glossary.diamond.d': 'Marks cards in a Diamond Bakugan evolution line.',
    'glossary.scan.t': 'Scan',
    'glossary.scan.d': 'Look at the top card of your Deck; leave it on top or send it to the bottom.',
    'glossary.draw.t': 'Draw Card',
    'glossary.draw.d': 'Draw cards from the top of your Deck.',
    'faq.title': 'HELP & FAQ',
    'faq.close': 'Close ✖',
    'faq.back': '🔙 Back to menu',
    'faq.q1': 'How do I gain or lose League points?',
    'faq.a1': 'Each win gives +50 points and each loss subtracts -25. Stack wins to climb ranks!',
    'faq.q2': 'How does the TCG Duel Arena work?',
    'faq.a2': 'Tap ⚔️ on the Ranking, create or enter a room code. Combat starts only when both players are connected. Decks and Bakugan sync in real time.',
    'faq.q3': 'What are the League ranks?',
    'faq.a3': 'Rookie (0-199), Bronze (200-499), Silver (500-999), Gold (1000-1599), Diamond (1600-3499) and Battle King (3500+).',
    'faq.q4': 'What are BakuCores and what do they do?',
    'faq.a4': 'Tokens that form the battlefield. Opening your Bakugan on one grants B-Power or Damage bonuses. Types: Shield, Magic Shield, Fist, Fire Fist and Helix.',
    'faq.q5': 'Difference between B-Power and Damage?',
    'faq.a5': 'B-Power decides who wins the round (highest wins). Damage is how many cards the loser discards from their deck.',
    'faq.q6': 'What do Strike effects do?',
    'faq.a6': 'FrostStrike makes opponent Flips cost more; ShadowStrike blocks stat reductions on you; DoubleStrike multiplies your damage x2.',
    'faq.q7': 'Can I change my Bakugan or Avatar?',
    'faq.a7': 'Yes. Go to Profile, pick an avatar, edit your 3 Bakugan team or factions and tap SAVE PROFILE.',
    'faq.q8': 'How do I view another player’s profile?',
    'faq.a8': 'In League, tap any Brawler’s name or row in the Ranking table.',
    'faq.q9': 'How do I sign in or register?',
    'faq.a9': 'On the welcome screen create an account with Nick + Email + Password, or sign in with Nick/Email/Phone and password.',
    'guide.m1': 'Great to have you here, Brawler! I’ll show you around the arena.',
    'guide.m2': 'In <strong>Profile</strong> you can change your Nick, see your ID and contact, and set your 3 Bakugan team.',
    'guide.m3': 'You can also pick preferred <strong>Factions</strong> and change your avatar icon.',
    'guide.m4': 'In <strong>League</strong> you’ll see your Ranking position, points and rank.',
    'guide.m5': 'Check <strong>News</strong> for tournaments, events and important notices.',
    'guide.m6': 'If you’re new to the TCG, there’s a full <strong>Glossary</strong> whenever you need it.',
    'guide.m7': 'That’s the basics! If you need help, tap my icon or the <strong>?</strong> button.',
    'tut.continue': 'Continue ▶',
    'tut.close': 'Close',
    'tut.reviewCards': '🔁 Review cards',
    'tut.continueTurns': 'Continue ▶ Turns',
    'tut.reviewDeck': '🔁 Deck cards',
    'tut.reviewCombat': '🔁 Combat',
    'tut.tapCard': 'Tap the card to view it larger',
    'tut.charLabel': 'Tap to flip · black back = Character Card',
    'tut.step1': 'Welcome, Bakugan Brawlers. If you made it here, you want to become a great fighter in Bakugan battles.',
    'tut.step1sub': 'Lady Fenne guides you',
    'tut.step2': 'You need a <strong>50-card Deck</strong>. Tap each type to view it large. Now we go card by card.',
    'tut.step3': '<strong>Action:</strong> fast-play cards. Pay the energy cost; they only affect Bakugan in combat. After use they go to the <strong>discard</strong>.',
    'tut.step4': '<strong>Hero:</strong> <strong>permanent</strong> effects. After paying the cost they go to the Hero zone and stay active each turn.',
    'tut.step5': '<strong>Baku-Gear:</strong> equipment that boosts a Bakugan’s base stats. They attach under the Character Card. There are simple Gears and <strong>double Baku-Gear</strong>.',
    'tut.step6': '<strong>Evo:</strong> several types (Hyper, Maximus, Titan, Diamond, etc.). After paying energy they sit on the Character Card and <strong>replace</strong> its base stats.',
    'tut.step7': '<strong>Flip:</strong> the Deck’s <strong>shields</strong>. They stop opponent damage. Played only from the Deck when you take damage and can swing the game.',
    'tut.step8': '<strong>Geogans:</strong> support pieces with geometric shapes. Paying the cost <strong>replaces the active Bakugan</strong> with the Geogan (you need the physical figure).',
    'tut.step9': 'You also need <strong>three Bakugan</strong>, with their <strong>BakuCores</strong> and <strong>Character Cards</strong> (black back). Tap to open / flip.',
    'tut.step10': 'Want to <strong>review the cards</strong> again, or continue with <strong>turns and combat</strong>?',
    'tut.step11': '<strong>Turns:</strong> on your turn you can play cards (Action, Hero, Gear, Evo, Geogan), charge energy and prepare combat. The 50-card deck is your <strong>life points</strong>.',
    'tut.step11sub': 'Draw, play effects, then battle',
    'tut.step12': 'Goal: <strong>empty the opponent’s deck</strong>. Your Bakugan’s <strong>Damage</strong> shows how many cards the opponent discards when you win combat.',
    'tut.step12sub': 'More damage = more cards the opponent loses',
    'tut.step13': 'Raise <strong>B-Power</strong> to win the fight. The winner stays <strong>deployed</strong>. With all 3 Bakugan open you launch a <strong>Team Attack</strong> adding their damage.',
    'tut.step14': 'You’re ready, Brawler! Review cards, combat, or close?',
    'tut.step14sub': 'You’re ready to brawl!',
    'tut.label.bakugans': 'BAKUGAN',
    'tut.label.bakucores': 'BAKUCORES',
    'tut.label.chars': 'CHARACTER CARDS',
    'tut.dmg': 'Damage',
    'tut.teamAttack': 'TEAM ATTACK · Combined damage',
    'tut.damageWord': 'damage'
  }
};

let currentLang = localStorage.getItem('bakugan_lang') || 'es';

function t(key) {
  const pack = I18N[currentLang] || I18N.es;
  return (pack && pack[key]) || (I18N.es && I18N.es[key]) || key;
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'es';
  currentLang = lang;
  localStorage.setItem('bakugan_lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'es';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = t(key);
    if (el.getAttribute('data-i18n-html') === '1') el.innerHTML = val;
    else el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.title = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key);
  });

  const sel = document.getElementById('lang-select');
  if (sel) sel.value = currentLang;

  try { applyVolumeToAudios(); } catch (e) {}
  try { updateAuthFabUI(); } catch (e) {}
  try {
    const sr = document.getElementById('stat-rank');
    if (sr && typeof currentUserId !== 'undefined' && currentUserId) {
      const p = (typeof players !== 'undefined') ? players.find(x => x.id === currentUserId) : null;
      if (p) {
        const r = getRank(p.points || 0);
        sr.textContent = r.name.toUpperCase();
      }
    }
  } catch (e) {}

  const ov = document.getElementById('tutorial-overlay');
  if (ov && ov.classList.contains('open')) {
    try { renderTutorialStep(); } catch (e) {}
  }
  // refresh open FAQ if visible
  try {
    const bubble = document.getElementById('guide-bubble');
    if (bubble && bubble.style.display === 'block' && bubble.innerHTML.indexOf('faq') === -1) {
      // leave as-is if answering; menu rebuild is on next open
    }
  } catch (e) {}
}

function cycleLanguage() {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
}

const AVATARS = [
  'dragonoid_diamante_icon.jpg',
  'Cyndeous_sworld_icon.jpg',
  'Cyndeous_icon.jpg',
  'fangzor_mantonoid_icon.jpg',
  'dragonoid_flame_icon.jpg',
  'Fenneca_icon.jpg',
  'trox_icon.jpg',
  'hydranoid_icon.jpg',
  'mantonoid_icon.jpg',
  'platinum_pharol_icon.jpg',
  'wrath_diamont_icon.jpg',
  'serpillious_icon.jpg',
  'griswing_icon.jpg',
  'wrath_face_icon.jpg',
 'luphiteon_icon.jpg',
  'artuliam_icon.jpg',
  'darkus_krakelios_ultra_by_themrtusky.png',
  'aurelus_leonidas_by_themrtusky.png',
  'darkus_pyrus_tretorous_dragonoid_by_themrtusky.png',
  'darkus_platinum_griswing_by_themrtusky.png',
  'haos_Fenneca_core_by_themrtusky.png',
  '39 sin título_20260710090235.png',
  'aurelus_auratoa_core_by_themrtusky.png',
  '39 sin título_20260710085756.png'
];

const GUIDE_POSES = [
  'Lady_fenne_04.png',
  'Lady_fenne_01.png',
  'Lady_fenne_01.png',
  'Lady_fenne_02.png',
  'Lady_fenne_01.png',
  'Lady_fenne_03.png'
];

const GUIDE_MINI = 'Lady_fenne_icono.png'; 

let currentUserId = null;
let selectedAvatarPath = AVATARS[0];
let players = [];
let newsList = [];
let guideStep = 0;
let guideFinished = false;
let isAdminMode = false;
let currentImageData = "";
let isAppInitialized = false;

/** Jugadores + noticias en vivo.
 *  Se listan TODOS los players (liga chica/mediana).
 *  orderBy('points') excluía a quien no tenía el campo → ranking vacío de más.
 *  Lazy-load de imágenes se mantiene en la colección.
 */
let rankingUnsub = null;
let myPlayerUnsub = null;

function upsertPlayerLocal(data) {
  if (!data || !data.id) return;
  // Asegurar points para ranking estable
  if (data.points == null || data.points === undefined) {
    data.points = Math.max(0, ((data.wins || 0) * 50) - ((data.losses || 0) * 25));
  }
  const idx = players.findIndex(p => p.id === data.id);
  if (idx === -1) players.push(data);
  else players[idx] = Object.assign({}, players[idx], data);
}

/** Carga un jugador bajo demanda (duelo / modal) si aún no está en memoria */
async function ensurePlayerLoaded(userId) {
  if (!userId) return null;
  let p = players.find(x => x.id === userId);
  if (p) return p;
  try {
    const doc = await db.collection('players').doc(userId).get();
    if (doc.exists) {
      p = Object.assign({ id: doc.id }, doc.data());
      if (!p.id) p.id = doc.id;
      upsertPlayerLocal(p);
      return p;
    }
  } catch (e) {
    console.warn('ensurePlayerLoaded', e);
  }
  return null;
}

function listenMyPlayerDoc(uid) {
  if (myPlayerUnsub) {
    try { myPlayerUnsub(); } catch (e) {}
    myPlayerUnsub = null;
  }
  if (!uid) return;
  myPlayerUnsub = db.collection('players').doc(uid).onSnapshot((doc) => {
    if (!doc.exists) return;
    const data = Object.assign({}, doc.data(), { id: doc.id });
    upsertPlayerLocal(data);
    if (typeof renderProfile === 'function') renderProfile();
    if (typeof applyAdminAccess === 'function') applyAdminAccess();
    if (typeof renderRanking === 'function') renderRanking();
  }, (err) => console.warn('myPlayer listener', err));
}

function listenToDatabase() {
  if (rankingUnsub) {
    try { rankingUnsub(); } catch (e) {}
    rankingUnsub = null;
  }

  // Todos los jugadores (sin orderBy: si falta "points" igual aparecen)
  rankingUnsub = db.collection('players').onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach((doc) => {
      const data = doc.data() || {};
      if (!data.id) data.id = doc.id;
      if (data.points == null || data.points === undefined) {
        data.points = Math.max(0, ((data.wins || 0) * 50) - ((data.losses || 0) * 25));
      }
      list.push(data);
    });
    players = list;
    if (typeof renderRanking === 'function') renderRanking();
    if (currentUserId) {
      if (typeof renderProfile === 'function') renderProfile();
      if (typeof applyAdminAccess === 'function') applyAdminAccess();
    } else {
      isAdminMode = false;
      const tab = document.getElementById('tab-admin-btn');
      if (tab) tab.style.display = 'none';
    }
  }, (err) => console.warn('players listener', err));

  if (currentUserId) listenMyPlayerDoc(currentUserId);

  db.collection('news').onSnapshot((snapshot) => {
    newsList = [];
    snapshot.forEach((doc) => {
      newsList.push({ id: doc.id, ...doc.data() });
    });
    newsList.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    renderNews();
    if (isAdminMode) {
      renderAdminNewsList();
    }
  });
}

/** Admin: refresco opcional (el listener ya trae a todos) */
async function loadAllPlayersForAdmin() {
  try {
    const snap = await db.collection('players').get();
    snap.forEach((doc) => {
      const data = doc.data() || {};
      if (!data.id) data.id = doc.id;
      upsertPlayerLocal(data);
    });
    if (typeof renderAdminPanel === 'function') renderAdminPanel();
    if (typeof renderRanking === 'function') renderRanking();
  } catch (e) {
    console.warn('loadAllPlayersForAdmin', e);
  }
}

function saveUserToCloud(user) {

  return db.collection("players").doc(user.id).set(user, { merge: true });
}

function recalculatePoints(player) {
  // Puntos se actualizan al aplicar resultados; solo aseguramos valor no negativo
  // y migraciones viejas sin points
  if (player.points == null || player.points === undefined) {
    player.points = Math.max(0, ((player.wins || 0) * 50) - ((player.losses || 0) * 25));
  }
  player.points = Math.max(0, player.points || 0);
}


/** Calcula el bonus real de un Bakucore según forma y facción del Bakugan que LO RECIBE (activo).
 *  - bpower / damage (efecto base) → SIEMPRE
 *  - factionBpower / factionDamage → solo si el Bakugan activo cumple restrictFaction
 *  - fusionBpower / fusionDamage → solo en forma fusión
 */
function computeBakucoreBonus(core, targetBaku, liveForm) {
  if (!core || !core.type) {
    return { bpower: 0, damage: 0, energyDelta: 0, tags: [], restricted: false, factionMatch: true };
  }

  let b = parseInt(core.bpower, 10) || 0;
  let d = parseInt(core.damage, 10) || 0;
  let e = parseInt(core.energyDelta, 10) || 0;
  const tags = [];

  const form = (liveForm || 'base');
  if (form === 'fusion') {
    const fb = parseInt(core.fusionBpower, 10) || 0;
    const fd = parseInt(core.fusionDamage, 10) || 0;
    b += fb;
    d += fd;
    if (fb || fd) tags.push('F');
  }

  const facs = [targetBaku && targetBaku.faction, targetBaku && targetBaku.faction2]
    .filter(Boolean)
    .map(x => String(x).toLowerCase());
  const need = [core.restrictFaction, core.restrictFaction2]
    .filter(Boolean)
    .map(x => String(x).toLowerCase());

  const facB = parseInt(core.factionBpower, 10) || 0;
  const facD = parseInt(core.factionDamage, 10) || 0;
  let factionMatch = true;

  if (need.length) {
    factionMatch = need.some(n => facs.includes(n));
    // Solo los bonos de FACCIÓN se condicionan; el efecto base ya está en b/d
    if (factionMatch) {
      b += facB;
      d += facD;
      if (facB || facD) tags.push('FAC');
    } else if (facB || facD) {
      tags.push('NO-FAC');
    }
  } else {
    // Sin restricción: si cargaron valores en campos de facción, se suman igual
    if (facB || facD) {
      b += facB;
      d += facD;
    }
  }

  if (core.shadowStrike) tags.push('Shadow');
  if (core.frostStrike) tags.push('Frost' + (core.frostValue ? core.frostValue : ''));
  if (core.doubleStrike) tags.push('Double');
  if (core.requiresGear || e) tags.push('Gear');

  return {
    bpower: b,
    damage: d,
    energyDelta: e,
    tags,
    restricted: need.length > 0,
    factionMatch,
    factionBonusB: factionMatch ? facB : 0,
    factionBonusD: factionMatch ? facD : 0
  };
}

function emptyBakucore() {
  return {
    variantId: '',
    type: '',
    bpower: '',
    damage: '',
    fusionBpower: '',
    fusionDamage: '',
    factionBpower: '',
    factionDamage: '',
    restrictFaction: '',
    restrictFaction2: '',
    requiresFusion: false,
    requiresGear: false,
    shadowStrike: false,
    frostStrike: false,
    frostValue: '',
    doubleStrike: false,
    energyDelta: ''
  };
}

function emptyBaku() {
  return {
    name: '',
    bpower: '',
    damage: '',
    faction: '',
    faction2: '',
    isFusion: false,
    isEvo: false,
    fusionBpower: '',
    fusionDamage: '',
    evoBpower: '',
    evoDamage: '',
    bakucores: [emptyBakucore(), emptyBakucore()]
  };
}

function normalizeBakucores(list) {
  const arr = Array.isArray(list) ? list.slice(0, 2) : [];
  while (arr.length < 2) arr.push(emptyBakucore());
  return arr.map(c => {
    if (!c || typeof c !== 'object') return emptyBakucore();
    // Si tiene variantId del catálogo, hidratar stats desde CORE_VARIANT_CATALOG
    let base = c;
    const vid = c.variantId || c.id || '';
    if (vid && typeof findCoreVariant === 'function') {
      const cat = findCoreVariant(vid);
      if (cat) {
        base = Object.assign({}, cat, c, { variantId: vid, type: cat.type || c.type || '' });
      }
    }
    return {
      variantId: vid || base.variantId || '',
      type: base.type || '',
      bpower: base.bpower != null && base.bpower !== '' ? base.bpower : '',
      damage: base.damage != null && base.damage !== '' ? base.damage : '',
      fusionBpower: base.fusionBpower != null && base.fusionBpower !== '' ? base.fusionBpower : '',
      fusionDamage: base.fusionDamage != null && base.fusionDamage !== '' ? base.fusionDamage : '',
      factionBpower: base.factionBpower != null && base.factionBpower !== '' ? base.factionBpower : '',
      factionDamage: base.factionDamage != null && base.factionDamage !== '' ? base.factionDamage : '',
      restrictFaction: base.restrictFaction || '',
      restrictFaction2: base.restrictFaction2 || '',
      requiresFusion: !!base.requiresFusion,
      requiresGear: !!base.requiresGear,
      shadowStrike: !!base.shadowStrike,
      frostStrike: !!base.frostStrike,
      frostValue: base.frostValue || '',
      doubleStrike: !!base.doubleStrike,
      energyDelta: base.energyDelta != null && base.energyDelta !== '' ? base.energyDelta : ''
    };
  });
}

function normalizeBakuList(list) {
  const arr = Array.isArray(list) ? list.slice(0, 3) : [];
  while (arr.length < 3) arr.push(emptyBaku());
  return arr.map(b => {
    if (!b || typeof b !== 'object') return emptyBaku();
    return {
      name: b.name || '',
      bpower: b.bpower || '',
      damage: b.damage || '',
      faction: b.faction || '',
      faction2: b.faction2 || '',
      isFusion: !!b.isFusion,
      isEvo: !!b.isEvo,
      fusionBpower: b.fusionBpower || '',
      fusionDamage: b.fusionDamage || '',
      evoBpower: b.evoBpower || '',
      evoDamage: b.evoDamage || '',
      bakucores: normalizeBakucores(b.bakucores)
    };
  });
}

function factionSelectorHtml(index) {
  const facs = ['Pyrus', 'Aquos', 'Ventus', 'Aurelus', 'Haos', 'Darkus'];
  return facs.map(f =>
    `<img src="faccion_${f.toLowerCase()}.png" data-faction="${f}" title="${f}" class="faction-opt" onclick="selectBakuganFaction(${index}, '${f}', this)" />`
  ).join('');
}

function bakucoreSelectorHtml(bakuIndex, slot) {
  const types = [
    { id: 'shield', src: 'core_shield.png', title: 'Shield (Escudo naranja)' },
    { id: 'magic_shield', src: 'core_magic_shield.png', title: 'Magic Shield (Escudo mágico)' },
    { id: 'fist', src: 'core_fist.png', title: 'Fist (Puño verde)' },
    { id: 'fire_fist', src: 'core_fire_fist.png', title: 'Fire Fist (Puño de fuego)' },
    { id: 'helix', src: 'core_helix.png', title: 'Helix' }
  ];
  return types.map(t =>
    `<img src="${t.src}" data-core="${t.id}" title="${t.title}" class="bakucore-opt" onclick="selectBakucoreType(${bakuIndex}, ${slot}, '${t.id}', this)" onerror="this.style.opacity='0.2'" />`
  ).join('');
}

/** Lista de variantes del catálogo (cara info, como dadas vuelta) para el editor de perfil */
function bakucoreVariantPickerHtml(bakuIndex, slot, typeFilter, selectedId, searchQ) {
  if (typeof CORE_VARIANT_CATALOG === 'undefined' || !CORE_VARIANT_CATALOG.length) {
    return '<div style="font-size:0.7rem;opacity:0.55;padding:8px;">Catálogo de variantes no cargado.</div>';
  }
  const q = (searchQ || '').trim().toLowerCase();
  let list = CORE_VARIANT_CATALOG.slice();
  if (typeFilter) list = list.filter(c => c.type === typeFilter);
  if (q) {
    list = list.filter(c => {
      const id = String(c.id || '').toLowerCase();
      const name = String(c.name || '').toLowerCase();
      const eff = (typeof formatCoreEffectText === 'function' ? formatCoreEffectText(c) : '').toLowerCase();
      return id.includes(q) || name.includes(q) || eff.includes(q);
    });
  }
  if (!list.length) {
    return '<div style="font-size:0.7rem;opacity:0.55;padding:8px;text-align:center;">Sin variantes para este filtro.</div>';
  }
  return list.map(c => {
    const typeMeta = (typeof findCoreType === 'function') ? findCoreType(c.type) : null;
    const flip = (typeof buildCoreFlipCard === 'function')
      ? buildCoreFlipCard(c, typeMeta, { onclick: 'event.stopPropagation()' })
      : `<div style="font-size:0.65rem;color:var(--neon-cyan);">${c.name || c.id}</div>`;
    const sel = (selectedId && selectedId === c.id) ? ' selected' : '';
    return `<div class="bakucore-variant-pick${sel}" data-variant="${c.id}" title="${c.id} · ${c.name || ''}"
      onclick="selectBakucoreVariant(${bakuIndex}, ${slot}, '${c.id}')">
      <span class="pick-id">${c.id}</span>
      ${flip}
    </div>`;
  }).join('');
}

function refreshBakucoreVariantPicker(bakuIndex, slot) {
  const grid = document.getElementById(`baku${bakuIndex}-core${slot}-variantGrid`);
  if (!grid) return;
  const typeEl = document.getElementById(`baku${bakuIndex}-core${slot}-type`);
  const idEl = document.getElementById(`baku${bakuIndex}-core${slot}-variantId`);
  const searchEl = document.getElementById(`baku${bakuIndex}-core${slot}-variantSearch`);
  const typeFilter = typeEl ? typeEl.value : '';
  const selectedId = idEl ? idEl.value : '';
  const q = searchEl ? searchEl.value : '';
  grid.innerHTML = bakucoreVariantPickerHtml(bakuIndex, slot, typeFilter, selectedId, q);
}

function updateBakucoreSelectedPreview(bakuIndex, slot, variantId) {
  const box = document.getElementById(`baku${bakuIndex}-core${slot}-selectedPreview`);
  const label = document.getElementById(`baku${bakuIndex}-core${slot}-selectedLabel`);
  if (!box) return;
  const cat = variantId && typeof findCoreVariant === 'function' ? findCoreVariant(variantId) : null;
  if (!cat) {
    box.classList.remove('open');
    box.innerHTML = '';
    if (label) label.textContent = '';
    return;
  }
  const typeMeta = findCoreType(cat.type);
  const flip = buildCoreFlipCard(cat, typeMeta, { onclick: 'event.stopPropagation()' });
  if (label) label.textContent = `Seleccionado: ${cat.id} · ${cat.name || cat.type}`;
  box.innerHTML = flip;
  box.classList.add('open');
}

/** Rellena todos los campos del slot desde CORE_VARIANT_CATALOG (lógica de arena) */
function applyVariantToSlotFields(bakuIndex, slot, cat) {
  const set = (suffix, val) => {
    const el = document.getElementById(`baku${bakuIndex}-core${slot}-${suffix}`);
    if (el) el.value = (val == null || val === false) ? '' : (val === true ? '1' : String(val));
  };
  const setFlag = (suffix, on) => {
    const el = document.getElementById(`baku${bakuIndex}-core${slot}-${suffix}`);
    if (el) el.value = on ? '1' : '0';
  };
  if (!cat) {
    set('variantId', '');
    set('type', '');
    set('bpower', '');
    set('damage', '');
    set('energyDelta', '');
    set('fusionBpower', '');
    set('fusionDamage', '');
    set('restrictFaction', '');
    set('restrictFaction2', '');
    set('factionBpower', '');
    set('factionDamage', '');
    set('frostValue', '');
    setFlag('requiresFusion', false);
    setFlag('requiresGear', false);
    setFlag('shadowStrike', false);
    setFlag('frostStrike', false);
    setFlag('doubleStrike', false);
    return;
  }
  set('variantId', cat.id || '');
  set('type', cat.type || '');
  set('bpower', cat.bpower != null ? cat.bpower : '');
  set('damage', cat.damage != null ? cat.damage : '');
  set('energyDelta', cat.energyDelta != null ? cat.energyDelta : '');
  set('fusionBpower', cat.fusionBpower != null ? cat.fusionBpower : '');
  set('fusionDamage', cat.fusionDamage != null ? cat.fusionDamage : '');
  set('restrictFaction', cat.restrictFaction || '');
  set('restrictFaction2', cat.restrictFaction2 || '');
  set('factionBpower', cat.factionBpower != null ? cat.factionBpower : '');
  set('factionDamage', cat.factionDamage != null ? cat.factionDamage : '');
  set('frostValue', cat.frostValue != null ? cat.frostValue : '');
  setFlag('requiresFusion', !!cat.requiresFusion);
  setFlag('requiresGear', !!cat.requiresGear);
  setFlag('shadowStrike', !!cat.shadowStrike);
  setFlag('frostStrike', !!cat.frostStrike);
  setFlag('doubleStrike', !!cat.doubleStrike);
}

function selectBakucoreVariant(bakuIndex, slot, variantId) {
  const idEl = document.getElementById(`baku${bakuIndex}-core${slot}-variantId`);
  const typeEl = document.getElementById(`baku${bakuIndex}-core${slot}-type`);
  const body = document.getElementById(`baku${bakuIndex}-core${slot}-body`);
  const header = document.getElementById(`baku${bakuIndex}-core${slot}-header`);
  if (body && !body.classList.contains('open')) {
    body.classList.add('open');
    if (header) header.classList.add('open');
  }
  // Toggle off si ya estaba seleccionado
  if (idEl && idEl.value === variantId) {
    applyVariantToSlotFields(bakuIndex, slot, null);
    applyBakucoreUI(bakuIndex, slot, '', '', '');
    updateBakucoreSelectedPreview(bakuIndex, slot, '');
    refreshBakucoreVariantPicker(bakuIndex, slot);
    const title = document.getElementById(`baku${bakuIndex}-core${slot}-title`);
    if (title) title.textContent = `Bakucore ${slot}`;
    return;
  }
  const cat = typeof findCoreVariant === 'function' ? findCoreVariant(variantId) : null;
  if (!cat) {
    alert('Variante no encontrada en el catálogo: ' + variantId);
    return;
  }
  applyVariantToSlotFields(bakuIndex, slot, cat);
  applyBakucoreUI(bakuIndex, slot, cat.type || '', cat.restrictFaction || '', cat.restrictFaction2 || '');
  updateBakucoreSelectedPreview(bakuIndex, slot, variantId);
  refreshBakucoreVariantPicker(bakuIndex, slot);
  const title = document.getElementById(`baku${bakuIndex}-core${slot}-title`);
  if (title) title.textContent = `Bakucore ${slot}: ${cat.id}`;
}

function toggleBakucoreManualFields(bakuIndex, slot) {
  const box = document.getElementById(`baku${bakuIndex}-core${slot}-manual`);
  const btn = document.getElementById(`baku${bakuIndex}-core${slot}-manualBtn`);
  if (!box) return;
  const open = !box.classList.contains('open');
  box.classList.toggle('open', open);
  if (btn) btn.textContent = open ? '▲ Ocultar campos manuales' : '▼ Ajustar manualmente (opcional)';
}

function bakucoreRestrictFactionHtml(bakuIndex, slot) {
  const facs = ['Pyrus', 'Aquos', 'Ventus', 'Aurelus', 'Haos', 'Darkus'];
  return facs.map(f =>
    `<img src="faccion_${f.toLowerCase()}.png" data-faction="${f}" title="${f}" class="faction-opt" onclick="selectBakucoreRestrictFaction(${bakuIndex}, ${slot}, '${f}', this)" />`
  ).join('');
}

const BAKUCORE_ICON = {
  shield: 'core_shield.png',
  magic_shield: 'core_magic_shield.png',
  fist: 'core_fist.png',
  fire_fist: 'core_fire_fist.png',
  helix: 'core_helix.png'
};


/* ============================================================================
 * ===================== CATÁLOGO DE COLECCIÓN =====================
 * CÓMO CARGAR BAKUGANS UNO POR UNO:
 * 1) FIGURA: figureClosed, figureOpen
 * 2) CARTA PERSONAJE: charCard  (fusionCardFront/Back si es fusión)
 * 3) STATS BASE: bpower, damage
 * 4) HABILIDAD BASE (solo forma normal): ability
 * 5) EVOS (pueden ser 0, 1 o varias) → array "evos":
 *      {
 *        name: 'Evo Diamante',           // opcional
 *        card: 'archivo_evo.png',        // imagen de la carta Evo
 *        bpower: 1500,
 *        damage: 9,
 *        ability: 'Texto SOLO de esta Evo'
 *      }
 *    Compatibilidad vieja: isEvo + evoCard + evoBpower + evoDamage
 *    (si no hay "evos", se convierte solo automáticamente)
 * 6) Cores: cores: ['fist','shield',...]
 * 7) icon: miniatura opcional
 * =================================================================
 */
const BAKUGAN_CATALOG = [
  {
    id: 'haos-fenneca-ultra',
    name: 'Fenneca Ultra',
    faction: 'haos',
    faction2: null,
    isFusion: false,
    isEvo: true,
    bpower: 800,
    damage: 2,
    ability: '',
    cores: ['shield', 'fist'],
    icon: 'Fenneca_icon.jpg',
    figureClosed: 'haos_fenneca_ultra(abierto).png',
    figureOpen: 'haos_fenneca_ultra(abierto).png',
    charCard: 'Fenneca_Ultra_(Haos_Card)_ENG_264_CC_SG (3).png',
    fusionCardFront: '',
    fusionCardBack: '',
    // Varias Evos posibles: agregá más objetos dentro del array
    evos: [
      {
        name: 'Fenneca Ultra Evo Diamante',
        card: 'Fenneca_Ultra_(Diamond_Card)_ENG_218_RA_SG (1)_evo_fennca.png',
        bpower: 2200,
        damage: 10,
        ability: ''
      }
      // ,{ name: 'Evo 2', card: 'otra_evo.png', bpower: 0, damage: 0, ability: '...' }
    ]
  },
  { 
      id: 'pyrus-dragonoid-ultra',
    name: 'Dragonoid Ultra',
    faction: 'pyrus',
    faction2: null,
    isFusion: false,
    isEvo: true,
    bpower: 500,
    damage: 5,
    ability: '',
    cores: ['magic_shield', 'fist'],
    icon: 'Fenneca_icon.jpg',
    figureClosed: '500px-Pyrus_Dragonoid_Ultra_BBP_(Open).png',
    figureOpen: '500px-Pyrus_Dragonoid_Ultra_BBP_(Open).png',
    charCard: 'Dragonoid_Ultra_(Pyrus_Card)_ENG_357_CC_BB.png',
    fusionCardFront: '',
    fusionCardBack: '',
    // Varias Evos posibles: agregá más objetos dentro del array
    evos: [
      {
        name: 'Dragonoid Ultra Evo Diamante',
        card:
'Dragonoid_Ultra_(Diamond_Card)_ENG_137_RA_BR.png',  bpower: 1800,
     damage: 12,
     ability: 'Furia, si no tienes cartas en tu mano DobleStrike'
      },
     {  name: 'Hyper Dragonoid Ultra',          card:'Hyper_Dragonoid_Ultra_(Pyrus_Card)_ENG_138_CO_BR.png',
        bpower: 800,
        damage: 8,
        ability:''
      }
    ] 
  },
  {
    id: 'pyrus-trhyno-Mythic',
    name: 'Trhyno Mythic',
    faction: 'Pyrus',
    faction2: null,
    isFusion: false,
    isEvo: false,
    bpower: 900,
    damage: 7,
    evoBpower: 0,
    evoDamage: 0,
    ability: ' con Shield se suma un BakuCore Adicional, con fist +600 B-power',
    cores: ['shield', 'fist'],
    icon: 'icono_bakugan.png',
    figureClosed: 'Pyrus_Trhyno_(abierto).png',
    figureOpen: 'Pyrus_Trhyno_(abierto).png',
    charCard: '428px-Trhyno_(Pyrus_Card)_ENG_77_CC_LE.png',
    evoCard: '',
    fusionCardFront: '',
    fusionCardBack: ''
  },
  {
    id: 'haos-sairus-ultra-LE',
    name: 'Sairus Ultra',
    faction: 'Haos',
    faction2: null,
    isFusion: false,
    isEvo: false,
    bpower: 500,
    damage: 9,
    evoBpower: 0,
    evoDamage: 0,
    ability: '',
    cores: ['shield', 'fist'],
    icon: 'icono_bakugan.png',
    figureClosed: 'Haos_Sairus_Ultra_BLE_(abierto).png',
    figureOpen: 'Haos_Sairus_Ultra_BLE_(abierto).png',
    charCard: 'Ultra_Sairus_(Haos_Card)_ENG_96_CC_LE.png',
    evoCard: '',
    fusionCardFront: '',
    fusionCardBack: ''
  },
  {
    id: 'haos-trox-ultra',
    name: 'Trox Ultra',
    faction: 'Haos',
    faction2: null,
    isFusion: false,
    isEvo: true,
    bpower: 800,
    damage: 2,
    ability: '',
    cores: ['magic_shield', 'fist'],
    icon: 'icono_bakugan.png',
    figureClosed: '800px-Haos_Trox_Ultra_BAA_(Open).png',
    figureOpen: '800px-Haos_Trox_Ultra_BAA_(Open).png',
    charCard: 'Trox_Ultra_(Haos_Card)_ENG_231_CC_AV.png',
    fusionCardFront: '',
    fusionCardBack: '',
    evos: [
      {
        name: 'Maximus Trox Ultra',
        card: 'Trox_Ultra_(Haos_Evo_Card)_ENG_141_SR_AV.jpg',
        bpower: 1500,
        damage: 9,
        ability: 'Trifecta: si tus Bakugans tienen 3 Bakucores o más unidos a ellos, este Bakugan gana +1500 de B-Power y +6 de Daño.'
      }
    ]
  },
  {
   id: 'haos-barbetra-LE',  
  name: 'Barbetra',
  faction: 'Haos',              
  faction2: null,              
  isFusion: false,
  isEvo: false,
  bpower: 500,
  damage: 5,
  evoBpower: '',                 
  evoDamage: '',
  ability: 'Fist, se suma +500 B-power',
  cores: ['fist', 'fist'],    
  icon: 'mi_icono.png',                    // opcional
  figureClosed: 'Haos_Barbetra_LE_(Open).png',   // figura cerrada
  figureOpen: 'Haos_Barbetra_LE_(Open).png',     // figura abierta (detalle al tocar)
  charCard: 'Barbetra_(Haos_Card)_ENG_83_CC_LE.png',    // ← carta de personaje → icono hexagonal en la grilla
  evoCard: '',   // carta Evo (si isEvo)
  fusionCardFront: '',                     // cara A si isFusion
  fusionCardBack: ''
 },
  {
  id: 'pyrus-Aurelus-dragonoid-y-Auxillataur',   // único, sin espacios (ej: faccion-nombre)
  name: 'Dragonoid y Auxillataur',
  faction: 'Pyrus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: 'Aurelus',                 // solo si es fusión, ej: 'Darkus'
  isFusion: true,
  isEvo: false,

  // --- STATS ---
  bpower: 800,
  damage: 1,
  evoBpower: 0,                 
  evoDamage: 0,
  ability: '8 de energia para fusionar',

  // --- CORES típicos de este Bakugan ---
  cores: ['fire_fist', 'fire_fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index, o ruta relativa) ---
  icon: 'mi_icono.png',                    // opcional
  figureClosed: 'Pyrus_Aurelus_Dragonoid_x_Auxillataur_Ultra_(Open).png',   // figura cerrada
  figureOpen: 'Pyrus_Aurelus_Dragonoid_x_Auxillataur_Ultra_(Open).png',     // figura abierta (detalle al tocar)
  charCard: 'Dragonoid_x_Auxillataur_Ultra_(Pyrus_Card)_ENG_190a_CC_FF.png',    // ← carta de personaje → icono hexagonal en la grilla
  evoCard: '',   // carta Evo (si isEvo)
  fusionCardFront: 'Dragonoid_x_Auxillataur_Ultra_(Pyrus_Card)_ENG_190a_CC_FF.png',                     // cara A si isFusion
  fusionCardBack: 'Dragonoid_x_Auxillataur_Ultra_(Pyrus_Card)_ENG_190b_CC_FF.png'                       // cara B si isFusion (gira al clic)
},
  {
  id: 'Darkus-Krakelios_Ultra',
  name: 'Krakelios_Ultra',
  faction: 'Darkus',
  faction2: null,
  isFusion: false,
  isEvo: true,
  bpower: 600,
  damage: 1,
  // Habilidad SOLO de la forma base
  ability: 'Al agarrar un BakuCore Helix +200 de B-Power.',
  cores: ['helix', 'helix'],
  icon: 'mi_icono.png',
  figureClosed: 'Darkus_Krakelios_Ultra_Ball_open.webp',
  figureOpen: 'Darkus_Krakelios_Ultra_Ball_open.webp',
  charCard: '429px-Krakelios_Ultra_(Darkus_Card)_ENG_200_CC_BR.png',
  fusionCardFront: '',
  fusionCardBack: '',
  evos: [
    {
      name: 'Hyper Krakelios Ultra',
      card: 'Hyper_Krakelios_Ultra_(Darkus_Card)_ENG_108_CO_AA.png',
      bpower: 800,
      damage: 4,
      ability: 'Al tomar un BakuCore Helix +400 de B-Power.'
    }
    // Ejemplo 2ª Evo:
    // ,{ name: 'Otra Evo', card: 'otra.png', bpower: 1000, damage: 5, ability: '...' }
  ]
},
  {
  id: 'Haos_Krakelios_Ultra',   // único, sin espacios (ej: faccion-nombre)
  name: 'Krakelios_Ultra',
  faction: 'haos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo si es fusión, ej: 'Darkus'
  isFusion: false,
  isEvo: false,

  // --- STATS ---
  bpower: 800,
  damage: 1,
  evoBpower: 0,                 // si isEvo: true
  evoDamage: 0,
  ability: 'Reroll y si toma un BakuCore Helix +8 de daño.',

  // --- CORES típicos de este Bakugan ---
  cores: ['helix', 'fist'],      
  icon: 'mi_icono.png',                    // opcional
  figureClosed: 'BLE_Haos_Krakelios_Ultra_(Open).png',   // figura cerrada
  figureOpen: 'BLE_Haos_Krakelios_Ultra_(Open).png',     // figura abierta (detalle al tocar)
  charCard: 'Ultra_Krakelios_(Haos_Card)_ENG_95_CC_LE.png',    // ← carta de personaje → icono hexagonal en la grilla
  evoCard: '',   // carta Evo (si isEvo)
  fusionCardFront: '',                     // cara A si isFusion
  fusionCardBack: ''                       // cara B si isFusion (gira al clic)
},
  {
  id: 'Aquos_Apophix_Ultra',
  name: 'Apophix_Ultra',
  faction: 'Aquos',
  faction2: null,
  isFusion: false,
  isEvo: true,
  bpower: 500,
  damage: 6,
  ability: '',
  cores: ['magic_shield', 'magic_shield'],
  icon: 'mi_icono.png',
  figureClosed: 'Aquos_Apophix_Ultra_(Open).png',
  figureOpen: 'Aquos_Apophix_Ultra_(Open).png',
  charCard: 'Apophix_Ultra_(Aquos_Card)_ENG_231_CC_GG.png',
  fusionCardFront: '',
  fusionCardBack: '',
  evos: [
    {
      name: 'Apophix Ultra Evo Diamante',
      card: 'Apophix_Ultra_(Diamond_Card)_ENG_201_RA_GG.png',
      bpower: 2100,
      damage: 8,
      ability: 'Cuando realiza un Team Attack, robás dos cartas.'
    }
  ]
},
  {
  id: 'ventus_Apophix_ultra',   // único, sin espacios (ej: faccion-nombre)
  name: 'Apophix_Ultra',
  faction: 'ventus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo si es fusión, ej: 'Darkus'
  isFusion: false,
  isEvo: false,

  // --- STATS ---
  bpower: 700,
  damage: 1,
  evoBpower: 0,                 
  evoDamage: 0,
  ability: '',

  // --- CORES típicos de este Bakugan ---
  cores: ['helix', 'fire_fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index, o ruta relativa) ---
  icon: 'mi_icono.png',                    // opcional
  figureClosed: '800px-Ventus_Apophix_Ultra_(Open).png',   // figura cerrada
  figureOpen: '800px-Ventus_Apophix_Ultra_(Open).png',     // figura abierta (detalle al tocar)
  charCard: '1200px-Apophix_Ultra_(Ventus_Card)_ENG_296_CC_GG.png',    // ← carta de personaje → icono hexagonal en la grilla
  evoCard: '',   // carta Evo (si isEvo)
  fusionCardFront: '',                     // cara A si isFusion
  fusionCardBack: ''                       // cara B si isFusion (gira al clic)
},
{
  id: 'Ventus_Trox_Ultra_LE',   // único, sin espacios (ej: faccion-nombre)
  name: 'Trox_Ultra',
  faction: 'ventus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo si es fusión, ej: 'Darkus'
  isFusion: false,
  isEvo: false,

  // --- STATS ---
  bpower: 600,
  damage: 6,
  evoBpower: 0,                 // si isEvo: true
  evoDamage: 0,
  ability: 'si toma un puño verde -2 de coste a un Gear que quieras equipar en este Bakugan.',

  // --- CORES típicos de este Bakugan ---
  cores: ['magic_shield', 'fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index, o ruta relativa) ---
  icon: 'mi_icono.png',                    // opcional
  figureClosed: 'Ventus_Trox_Ultra_BLE_(Open).png',   // figura cerrada
  figureOpen: 'Ventus_Trox_Ultra_BLE_(Open).png',     // figura abierta (detalle al tocar)
  charCard: 'Ultra_Trox_(Ventus_Card)_ENG_73_CC_LE.png',    // ← carta de personaje → icono hexagonal en la grilla
  evoCard: '',   // carta Evo (si isEvo)
  fusionCardFront: '',                     // cara A si isFusion
  fusionCardBack: ''                       // cara B si isFusion (gira al clic)
},  
  {
  id: 'Darkus_Fenneca_Ultra',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Fenneca Ultra',
  faction: 'Darkus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 400,
  damage: 4,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: 'con Helix +500 B-Power',

  // --- CORES típicos ---
  cores: ['helix', 'fire_fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: '800px-Darkus_Fenneca_Ultra_(Open).png',
  figureOpen: '800px-Darkus_Fenneca_Ultra_(Open).png',
  charCard: 'Fenneca_Ultra__Darkus_Card__ENG_254_CC_GG__1_-removebg-preview (1).png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
  ]
}, 
  {
    id: 'pyrus-dragonoid-core-BP',
    name: 'Dragonoid',
    faction: 'Pyrus',
    faction2: null,
    isFusion: false,
    isEvo: true,
    bpower: 200,
    damage: 5,
    evoBpower: 0,
    evoDamage: 0,
    ability: '',
    cores: ['fire_fist', 'fist'],
    icon: 'icono_bakugan.png',
    figureClosed: '800px-Pyrus_Dragonoid_BBP_(Open).png',
    figureOpen: '800px-Pyrus_Dragonoid_BBP_(Open).png',
    charCard: 'Dragonoid_(Pyrus_Card)_ENG_343_CC_BB.png',
    fusionCardFront: '',
    fusionCardBack: '',
    evos: [
    {
      name: 'Hyper Dragonoid',
      card: 'Hyper_Dragonoid_(Pyrus_Card)_ENG_265_RA_BB.png',
      bpower: 400,
      damage: 6,
      ability: 'con Firefist +300 de B-power y +3 de daño.'
      },
      {
      name: 'Dragonoid Evo Diamante',
      card: 'Dragonoid_(Diamond_Card)_ENG_259_SR_BB.png',
      bpower: 900,
      damage: 9,
      ability: 'con firefist +500 de B-Power y +5 de daño.'
    },
    {
      name: 'Titan Dragonoid',
      card: 'Titan_Dragonoid_(Pyrus_Card)_ENG_270_BE_BB.png',
      bpower: 1000,
      damage: 6,
      ability: 'DobleStrike si tu controlas a Dan Kouzo obtienes +2000 de B-power.'
    },
] },
  {
  id: 'Haos_Nova_Trox_LE',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Nova Trox',
  faction: 'haos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 800,
  damage: 6,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: '',

  // --- CORES típicos ---
  cores: ['magic_shield', 'fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: 'Nova_Trox_Haos_CC_LE.png',
  figureOpen: 'Nova_Trox_Haos_CC_LE.png',
  charCard: 'Nova_Trox_(Haos_Card)_ENG_92_CC_LE.png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
  ]  }, 
  {
  id: 'aquos_hydorous_AV',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Hydorous',
  faction: 'aquos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 400,
  damage: 4,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: 'si toma un Helix +500 de B-Power y +5 de daño',

  // --- CORES típicos ---
  cores: ['helix', 'fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: '800px-Aquos_Hydorous_BAA_(Open).png',
  figureOpen: '800px-Aquos_Hydorous_BAA_(Open).png',
  charCard: 'Hydorous_(Aquos_Card)_ENG_167_CC_AV.png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: 'Hydorous Evo Diamante',
      card: 'Hydorous_(Diamond_Card)_ENG_124_RA_FF.png',
      bpower: 1100,
      damage: 6,
      ability: 'si toma un Helix +1000 de B-Power y +10 de daño.'
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
] },
  {
  id: 'Aquos_-Oxidox_GG',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Oxidox',
  faction: 'aquos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 700,
  damage: 3,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: 'volver a lanzar si fallas.',

  // --- CORES típicos ---
  cores: ['magic_shield', 'fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: '800px-Aquos_Oxidox_(Open).png',
  figureOpen: '800px-Aquos_Oxidox_(Open).png',
  charCard: 'Oxidox_(Aquos_Card)_ENG_230_CC_GG.png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
  ]
},
  {
  id: 'Darkus_Genesis_Nillious_',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Genesis Nillious',
  faction: 'darkus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 700,
  damage: 4,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: 'si toma un Shield le dará +700 B-Power',

  // --- CORES típicos ---
  cores: ['shield', 'shield'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: 'Darkus_Genesis_Nillious_LE.png',
  figureOpen: 'Darkus_Genesis_Nillious_LE.png',
  charCard: 'Genesis_Nillious_(Darkus_Card)_ENG_125_CC_EV2 (1).png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
  ]
},
  {
  id: 'Darkus_fenneca_core',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Fenneca',
  faction: 'darkus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 300,
  damage: 5,

  // Habilidad SOLO de la forma base (si no tiene, dejá '')
  ability: 'si toma un firefist +500 de B-Power',

  // --- CORES típicos ---
  cores: ['shield', 'fire_fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: '800px-Darkus_Fenneca_(Open).png',
  figureOpen: '800px-Darkus_Fenneca_(Open).png',
  charCard: 'Fenneca_(Darkus_Card)_ENG_253_CC_SG.png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
    // Segunda Evo (descomentá y completá):
    // ,{
    //   name: 'Evo 2',
    //   card: 'otra_evo.png',
    //   bpower: 1800,
    //   damage: 10,
    //   ability: 'Otra habilidad de Evo.'
    // }
  ]
},
  {
  id: 'aurelus_Krakelios_ultra',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Krakelios_Ultra',
  faction: 'aurelus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,

  // --- STATS BASE ---
  bpower: 600,
  damage: 2,
  ability: 'puedes volver a lanzar si fallas el lanzamiento',

  // --- CORES típicos ---
  cores: ['magic_shield', 'fist'],      // fist | fire_fist | shield | magic_shield | helix

  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       // opcional
  figureClosed: 'Aurelus_Krakelios_Ultra_Ball.png',
  figureOpen: 'Aurelus_Krakelios_Ultra_Ball.png',
  charCard: 'Krakelios_Ultra_(Aurelus_Card)_ENG_185_CC_BR.png',   // icono hexagonal + carta en detalle

  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: 'Titan Krakelios Ultra',
      card:
'Titan_Krakelios_Ultra_(Aurelus_Card)_ENG_106_AR_BR.png',
      bpower: 1100,
      damage: 5,
      ability: 'puedes volver a lanzar tu Bakugan si fallaste el lanzamiento. Victoria elige una opción energizar dos cartas de la parte superior del Deck o robar dos cartas.'
    }
  ]
},
{
  id: 'aurelus-auxillataur_AV',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Auxillataur',
  faction: 'aurelus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,
  // --- STATS BASE ---
  bpower: 300,
  damage: 6,
  ability: '',
  // --- CORES típicos ---
  cores: ['shield', 'shield'],      // fist | fire_fist | shield | magic_shield | helix
  // --- IMÁGENES (misma carpeta que el index) ---
  icon: '',                       
  figureClosed: '500px-Aurelus_Auxillataur_(Open).png',
  figureOpen: '500px-Aurelus_Auxillataur_(Open).png',
  charCard: 'Auxillataur_(Aurelus_Card)_ENG_179_CC_AV.png',   // icono hexagonal + carta en detalle
  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: 'Auxillataur Evo Diamante',
      card: 'Auxillataur_(Diamond_Card)_ENG_122_RA_AV.png',
      bpower: 600,
      damage: 10,
      ability: ''
    }
  ]},
{
  id: 'ventus_trox_LE',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Nova Trox',
  faction: 'ventus',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,
  // --- STATS BASE ---
  bpower: 800,
  damage: 5,
  ability: 'si fallaste el lanzamiento podes volver a lanzar.',
  // --- CORES típicos ---
  cores: ['fist', 'shield'],      // fist | fire_fist | shield | magic_shield | helix
  icon: '',                       
  figureClosed: 'BLE_Ventus_Nova_Trox_(Open).png',
  figureOpen: 'BLE_Ventus_Nova_Trox_(Open).png',
  charCard: 'Nova_Trox_(Ventus_Card)_ENG_69_CC_LE.png',   // icono hexagonal + carta en detalle
  // Fusión (si isFusion: true)
  fusionCardFront: '',
  fusionCardBack: '',

  // --- EVOS (0, 1 o varias) ---
  evos: [
    {
      name: '',
      card: '',
      bpower: 0,
      damage: 0,
      ability: ''
    }
  ]},
  {
  id: 'Haos_fenneca_core_LE',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Fenneca',
  faction: 'haos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,
  // --- STATS BASE ---
  bpower: 400,
  damage: 7,
  ability: '',
  // --- CORES típicos ---
  cores: ['magic_shield', 'magic_shield'],      // fist | fire_fist | shield | magic_shield | helix
  icon: '',                       
  figureClosed: 'Diamond_Fenneca_BLE_(Open).png',
  figureOpen: 'Diamond_Fenneca_BLE_(Open).png',
  charCard: 'Fenneca_(Haos_Card)_ENG_86_CC_LE.png',   // icono hexagonal + carta en detalle
  fusionCardFront: '',
  fusionCardBack: '',
  evos: [
    {
      name: 'Fenneca Evo Diamante',
      card: 'Fenneca_(Diamond_Card)_ENG_21_RA_LE.png',
      bpower: 1500,
      damage: 5,
      ability: ''
    }
  ]
},
  {
  id: 'aquos_dragonoid_BP',     // ej: 'pyrus-dragonoid-ultra' (sin espacios)
  name: 'Dragonoid',
  faction: 'aquos',               // Pyrus | Aquos | Ventus | Aurelus | Haos | Darkus
  faction2: null,                 // solo fusión, ej: 'Aurelus'
  isFusion: false,
  // --- STATS BASE ---
  bpower: 400,
  damage: 3,
  ability: '',
  // --- CORES típicos ---
  cores: ['shield', 'fist'],      // fist | fire_fist | shield | magic_shield | helix
  icon: '',                       
  figureClosed: '800px-Aquos_Dragonoid_BBP_(Open).png',
  figureOpen: '800px-Aquos_Dragonoid_BBP_(Open).png',
  charCard: 'Dragonoid_(Aquos_Card)_ENG_283_CC_BB.png',   // icono hexagonal + carta en detalle
  fusionCardFront: '',
  fusionCardBack: '',
  evos: [
    {
      name: 'Titan Dragonoid',
      card: 'Titan_Dragonoid_(Aquos_Card)_ENG_227_RA_BB.png',
      bpower: 1200,
      damage: 6,
      ability: ''
    }
  ]
    
},
]
const CORE_TYPE_CATALOG = [
  // icon = cara simple (anverso al girar)
  // infoArt = carta con franja vacía donde va el efecto (reverso)
  { id: 'fist', name: 'Fist', icon: 'core_fist.png', infoArt: 'core_fist_frente.png', desc: 'Puño verde' },
  { id: 'fire_fist', name: 'Fire Fist', icon: 'core_fire_fist.png', infoArt: 'core_fire_fist_frente.png', desc: 'Puño de fuego' },
  { id: 'shield', name: 'Shield', icon: 'core_shield.png', infoArt: 'core_shield_frente.png', desc: 'Escudo naranja' },
  { id: 'magic_shield', name: 'Magic Shield', icon: 'core_magic_shield.png', infoArt: 'core_magic_shield_frente.png', desc: 'Escudo mágico' },
  { id: 'helix', name: 'Helix', icon: 'core_helix.png', infoArt: 'core_helix_frente.png', desc: 'Hélice' }
];

const CORE_VARIANT_CATALOG = [
  /* ===== FIST ===== */
  {
    id: 'fist-1',
    type: 'fist',
    name: 'Fist 1',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'Pyrus',
    restrictFaction2: 'Haos',
    ability: ''
  },
  {
    id: 'fist-2',
    type: 'fist',
    name: 'Fist 2',
    bpower: 150,
    damage: 2,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: '+100 B-Power y +1 Daño (sin restricción de facción).'
  },
  {
    id: 'fist-3',
    type: 'fist',
    name: 'Fist 3',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'Ventus',
    restrictFaction2: 'Haos',
    requiresGear: false,
    energyDelta: 0,
    ability: '+100 B. +3 Daño a Ventus/Haos. Requiere Baku-Gear (−1 Energía).'
  },
    {
    id: 'fist-4',
    type: 'fist',
    name: 'Fist 4',
    bpower: 0,
    damage: 1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
   {
    id: 'fist-5',
    type: 'fist',
    name: 'Fist 5',
    bpower: 0,
    damage: 2,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
  {
    id: 'fist-6',
    type: 'fist',
    name: 'Fist 6',
    bpower: 0,
    damage: 3,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  }, 
  {
    id: 'fist-7',
    type: 'fist',
    name: 'Fist 7',
    bpower: 50,
    damage: 1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
  {
    id: 'fist-8',
    type: 'fist',
    name: 'Fist 8',
    bpower: 50,
    damage: 2,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  }, 
  {
    id: 'fist-9',
    type: 'fist',
    name: 'Fist 9',
    bpower: 150,
    damage: 1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fist-10',
    type: 'fist',
    name: 'Fist 10',
    bpower: 0,
    damage: -1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fist-11',
    type: 'fist',
    name: 'Fist 11',
    bpower: 0,
    damage: -2,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fist-12',
    type: 'fist',
    name: 'Fist 12',
    bpower: 0,
    damage: -3,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fist-13',
    type: 'fist',
    name: 'Fist 13',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'pyrus',
    restrictFaction2: 'darkus',
    ability: ''
  },
    {
    id: 'fist-14',
    type: 'fist',
    name: 'Fist 14',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'aquos',
    restrictFaction2: 'darkus',
    ability: ''
  },
    {
    id: 'fist-15',
    type: 'fist',
    name: 'Fist 15',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'aquos',
    restrictFaction2: 'ventus',
    ability: ''
  },
    {
    id: 'fist-16',
    type: 'fist',
    name: 'Fist 16',
    bpower: 0,
    damage: 1,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
      {
    id: 'fist-17',
    type: 'fist',
    name: 'Fist 16',
    bpower: 0,
    damage: 2,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
      {
    id: 'fist-18',
    type: 'fist',
    name: 'Fist 18',
    bpower: 0,
    damage: 3,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
      {
    id: 'fist-19',
    type: 'fist',
    name: 'Fist 19',
    bpower: 50,
    damage: 1,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
      {
    id: 'fist-20',
    type: 'fist',
    name: 'Fist 20',
    bpower: 100,
    damage: 1,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
   {
    id: 'fist-21',
    type: 'fist',
    name: 'Fist 21',
    bpower: 0,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 5,
    requiresFusion: true,
    ability: ''
   },
     {
    id: 'fist-22',
    type: 'fist',
    name: 'Fist 22',
    bpower: 0,
    damage: 2,
    fusionBpower: 0,
    fusionDamage: 2,
    requiresFusion: true,
    ability: ''
   },
    {
    id: 'fist-23',
    type: 'fist',
    name: 'Fist 23',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 3,
    restrictFaction: 'pyrus',
    restrictFaction2: 'ventus',
    ability: ''
  },
  
  /*==== FIRE FIST ===== */
  {
    id: 'fire_fist-1',
    type: 'fire_fist',
    name: 'F-Fist 1',
    bpower: 250,
    damage: 3,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
  {
    id: 'fire_fist-2',
    type: 'fire_fist',
    name: 'F-Fist 2',
    bpower: 150,
    damage: 4,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fire_fist-3',
    type: 'fire_fist',
    name: 'F-Fist 3',
    bpower: 0,
    damage: 5,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fire_fist-4',
    type: 'fire_fist',
    name: 'F-Fist 4',
    bpower: 0,
    damage: 6,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fire_fist-5',
    type: 'fire_fist',
    name: 'F-Fist 5',
    bpower: 0,
    damage: -4,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
    {
    id: 'fire_fist-6',
    type: 'fire_fist',
    name: 'F-Fist 6',
    bpower: 0,
    damage: -5,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    ability: ''
  },
      {
    id: 'fire_fist-7',
    type: 'fire_fist',
    name: 'F-Fist 7',
    bpower: 200,
    damage: 3,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
       {
    id: 'fire_fist-7',
    type: 'fire_fist',
    name: 'F-Fist 7',
    bpower: 0,
    damage: +5,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
     {
    id: 'fire_fist-8',
    type: 'fire_fist',
    name: 'F_fist 8',
    bpower: 0,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 8,
    requiresFusion: true,
    ability: ''
   },
  {
    id: 'fire_fist-9',
    type: 'fire_fist',
    name: 'F_fist 9',
    bpower: 0,
    damage: 3,
    fusionBpower: 0,
    fusionDamage: 4,
    requiresFusion: true,
    ability: ''
   },
  /* ===== SHIELD ===== */

  {
    id: 'shield-1',
    type: 'shield',
    name: 'Shield 1',
    bpower: 0,
    damage: 0,
    factionBpower: 400,
    factionDamage: 0,
    restrictFaction: 'pyrus',
    restrictFaction2: 'haos',
    requiresGear: false,
    energyDelta: 0,
    ability:'',
  },
  {
    id: 'shield-2',
    type: 'shield',
    name: 'Shield 2',
    bpower: 300,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-3',
    type: 'shield',
    name: 'Shield 3',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-4',
    type: 'shield',
    name: 'Shield 4',
    bpower: 150,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-5',
    type: 'shield',
    name: 'Shield 5',
    bpower: 200,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-6',
    type: 'shield',
    name: 'Shield 6',
    bpower: 250,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-7',
    type: 'shield',
    name: 'Shield 7',
    bpower: 150,
    damage: 1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-8',
    type: 'shield',
    name: 'Shield 8',
    bpower: 50,
    damage: 1,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-9',
    type: 'shield',
    name: 'Shield 9',
    bpower: -100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-10',
    type: 'shield',
    name: 'Shield 10',
    bpower: -200,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-11',
    type: 'shield',
    name: 'Shield 11',
    bpower: -300,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
   {
    id: 'shield-12',
    type: 'shield',
    name: 'Shield 12',
    bpower: 0,
    damage: 0,
    factionBpower: 400,
    factionDamage: 0,
    restrictFaction: 'aquos',
    restrictFaction2: 'ventus',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-13',
    type: 'shield',
    name: 'Shield 13',
    bpower: 400,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: 'haos',
    restrictFaction2: 'ventus',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-14',
    type: 'shield',
    name: 'Shield 10',
    bpower: 400,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: 'aquos',
    restrictFaction2: 'darkus',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'shield-15',
    type: 'shield',
    name: 'Shield 15',
    bpower: 400,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: 'pyrus',
    restrictFaction2: 'darkus',
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'shield-15',
    type: 'shield',
    name: 'Shield 15',
    bpower: 100,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
    {
    id: 'shield-16',
    type: 'shield',
    name: 'Shield 16',
    bpower: 150,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
    {
    id: 'shield-17',
    type: 'shield',
    name: 'Shield 17',
    bpower: 200,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
    {
    id: 'shield-18',
    type: 'shield',
    name: 'Shield 18',
    bpower: 250,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
    {
    id: 'shield-19',
    type: 'shield',
    name: 'Shield 19',
    bpower: 300,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -1,
    ability: ''
    },
      {
    id: 'shield-20',
    type: 'shield',
    name: 'shield 20',
    bpower: 0,
    damage: 0,
    fusionBpower: 500,
    fusionDamage: 0,
    requiresFusion: true,
    ability: ''
   },
  {
    id: 'shield-21',
    type: 'shield',
    name: 'shield 21',
    bpower: 200,
    damage: 0,
    fusionBpower: 200,
    fusionDamage: 0,
    requiresFusion: true,
    ability: ''
   },
  { id: 'shield-22',
    type: 'shield',
    name: 'shield 22',
    bpower: 0,
    damage: 0,
    factionBpower: 400,
    factionDamage: 0,
    restrictFaction: 'aquos',
    restrictFaction2: 'pyrus',
    ability: ''
   },
  
  /* ===== MAGIC SHIELD ===== */
 {
    id: 'magic_shield-1',
    type: 'magic_shield',
    name: 'M-S-1',
    bpower: 500,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-2',
    type: 'magic_shield',
    name: 'M_S_2',
    bpower: 0,
    damage: 0,
    factionBpower: 550,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-3',
    type: 'magic_shield',
    name: 'M-S-3',
    bpower: 600,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-4',
    type: 'magic_shield',
    name: 'M-S-4',
    bpower: 650,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-5',
    type: 'magic_shield',
    name: 'M-S-5',
    bpower: -400,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-6',
    type: 'magic_shield',
    name: 'M-S-6',
    bpower: -100,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
   {
    id: 'magic_shield-7',
    type: 'magic_shield',
    name: 'M-S-7',
    bpower: -500,
    damage: 0,
    fusionBpower: 0,
    fusionDamage: 0,
    requiresFusion: false,
    ability: ''
  },
    {
    id: 'magic_shield-8',
    type: 'magic_shield',
    name: 'M-S-8',
    bpower: 400,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
    {
    id: 'magic_shield-9',
    type: 'magic_shield',
    name: 'M-S-8',
    bpower: 500,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0,
    restrictFaction: '',
    restrictFaction2: '',
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
   {
    id: 'magic_shield-10',
    type: 'magic_shield',
    name: 'M_S 10',
    bpower: 0,
    damage: 0,
    fusionBpower: 800,
    fusionDamage: 0,
    requiresFusion: true,
    ability: ''
   },
  {
    id: 'magic_shield-11',
    type: 'magic_shield',
    name: 'M_S 11',
    bpower: 300,
    damage: 0,
    fusionBpower: 400,
    fusionDamage: 0,
    requiresFusion: true,
    ability: ''
   },
  /* ===== HELIX ===== */
  {
    id: 'helix-1',
    type: 'helix',
    name: 'Helix 1',
    bpower: 500,
    damage: -1,
    ability: ''
  },
  {
    id: 'helix-2',
    type: 'helix',
    name: 'Helix 2',
    bpower: -100,
    damage: 4,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
  {
    id: 'helix-3',
    type: 'helix',
    name: 'Helix 3',
    bpower: 0,
    damage: 0,
    frostStrike: true,
    frostValue: 1,
    ability: ''
  },
    {
    id: 'helix-4',
    type: 'helix',
    name: 'Helix 4',
    bpower: -200,
    damage: 5,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-5',
    type: 'helix',
    name: 'Helix 5',
    bpower: 600,
    damage: -3,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-6',
    type: 'helix',
    name: 'Helix 6',
    bpower: 300,
    damage: 3,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-7',
    type: 'helix',
    name: 'Helix 7',
    bpower: -100,
    damage:-3,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-8',
    type: 'helix',
    name: 'Helix 8',
    bpower: -200,
    damage: -2,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-9',
    type: 'helix',
    name: 'Helix 9',
    bpower: -300,
    damage: -1,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: 0,
    ability: ''
  },
    {
    id: 'helix-10',
    type: 'helix',
    name: 'Helix 10',
    bpower: 400,
    damage: -1,
    shadowStrike: false,
    requiresGear: true,
    energyDelta: -1,
    ability: ''
  },
     {
    id: 'helix-11',
    type: 'helix',
    name: 'Helix 11',
    bpower: -100,
    damage: 3,
    shadowStrike: false,
    requiresGear: false,
    energyDelta: -2,
    ability: ''
  },
     {
    id: 'helix-12',
    type: 'helix',
    name: 'Helix 12',
    bpower: 0,
    damage: 0,
    shadowStrike: true,
    requiresGear: true,
    energyDelta: -2,
    ability: ''
  },
  {
    id: 'helix-13',
    type: 'helix',
    name: 'helix 13',
    bpower: 0,
    damage: 0,
    fusionBpower: 300,
    fusionDamage: 0,
    requiresFusion: true,
    frostStrike: true,
    frostValue: 2, 
    ability: ''
   },
    {
    id: 'helix-13',
    type: 'helix',
    name: 'helix 13',
    bpower: 0,
    damage: 2,
    fusionBpower: 500,
    fusionDamage: 0,
      ability:''
    },
];

/** Compat: tipos simples (filtros viejos / notas de deck) */
const CORE_CATALOG = CORE_TYPE_CATALOG.map(t => ({
  id: t.id,
  name: t.name,
  icon: t.icon,
  desc: t.desc
}));

let colCoreType = null; // null = ver tipos; 'fist' = listar variantes de Fist

function findCoreVariant(id) {
  return CORE_VARIANT_CATALOG.find(c => c.id === id) || null;
}
function findCoreType(typeId) {
  return CORE_TYPE_CATALOG.find(t => t.id === typeId) || null;
}
function coresOfType(typeId) {
  return CORE_VARIANT_CATALOG.filter(c => c.type === typeId);
}

/** Texto legible del efecto (misma lógica que computeBakucoreBonus) */
function formatCoreEffectText(c) {
  if (!c) return '';
  if (c.ability) return c.ability;
  const parts = [];
  const bp = parseInt(c.bpower, 10) || 0;
  const dm = parseInt(c.damage, 10) || 0;
  if (bp) parts.push((bp > 0 ? '+' : '') + bp + ' B-Power');
  if (dm) parts.push((dm > 0 ? '+' : '') + dm + ' Daño');
  const fbp = parseInt(c.factionBpower, 10) || 0;
  const fdm = parseInt(c.factionDamage, 10) || 0;
  const facs = [c.restrictFaction, c.restrictFaction2].filter(Boolean);
  if ((fbp || fdm) && facs.length) {
    const bits = [];
    if (fbp) bits.push((fbp > 0 ? '+' : '') + fbp + ' B');
    if (fdm) bits.push((fdm > 0 ? '+' : '') + fdm + ' Daño');
    parts.push(bits.join(' / ') + ' a ' + facs.join(' y '));
  } else if (fbp || fdm) {
    if (fbp) parts.push((fbp > 0 ? '+' : '') + fbp + ' B (facción)');
    if (fdm) parts.push((fdm > 0 ? '+' : '') + fdm + ' Daño (facción)');
  }
  const fub = parseInt(c.fusionBpower, 10) || 0;
  const fud = parseInt(c.fusionDamage, 10) || 0;
  if (fub || fud) {
    const bits = [];
    if (fub) bits.push((fub > 0 ? '+' : '') + fub + ' B');
    if (fud) bits.push((fud > 0 ? '+' : '') + fud + ' Daño');
    parts.push('Fusión: ' + bits.join(' / '));
  }
  if (c.requiresFusion) parts.push('Requiere Fusión');
  if (c.requiresGear) parts.push('Requiere Gear');
  if (c.shadowStrike) parts.push('ShadowStrike');
  if (c.frostStrike) parts.push('FrostStrike' + (c.frostValue ? ' ' + c.frostValue : ''));
  if (c.doubleStrike) parts.push('DoubleStrike');
  const e = parseInt(c.energyDelta, 10) || 0;
  if (e) parts.push((e > 0 ? '+' : '') + e + ' Energía');
  return parts.join(' · ') || 'Sin efecto cargado';
}

function coreSign(n) {
  n = parseInt(n, 10) || 0;
  if (!n) return '';
  return (n > 0 ? '+' : '') + n;
}

/** Chips con iconos (B-Power, Daño, facciones, Gear, strikes, fusión) sobre la carta */
function formatCoreEffectIconsHtml(c) {
  if (!c) return '';
  const chips = [];
  const bp = parseInt(c.bpower, 10) || 0;
  const dm = parseInt(c.damage, 10) || 0;
  if (bp) {
    chips.push(`<span class="col-core-icon-chip"><img src="simbolo_bpower.png" alt="B" onerror="this.remove()" />${coreSign(bp)}</span>`);
  }
  if (dm) {
    chips.push(`<span class="col-core-icon-chip"><img src="simbolo_dano.png" alt="D" onerror="this.remove()" />${coreSign(dm)}</span>`);
  }
  const fbp = parseInt(c.factionBpower, 10) || 0;
  const fdm = parseInt(c.factionDamage, 10) || 0;
  const facs = [c.restrictFaction, c.restrictFaction2].filter(Boolean);
  if (facs.length) {
    facs.forEach(f => {
      const raw = String(f);
      const key = (typeof FACTION_ICONS !== 'undefined')
        ? (Object.keys(FACTION_ICONS).find(k => k.toLowerCase() === raw.toLowerCase()) || raw)
        : raw;
      const src = (typeof FACTION_ICONS !== 'undefined' && FACTION_ICONS[key])
        ? FACTION_ICONS[key]
        : ('faccion_' + raw.toLowerCase() + '.png');
      chips.push(`<span class="col-core-icon-chip fac"><img src="${src}" alt="${key}" onerror="this.remove()" /></span>`);
    });
    if (fbp) chips.push(`<span class="col-core-icon-chip fac"><img src="simbolo_bpower.png" alt="B" onerror="this.remove()" />${coreSign(fbp)}</span>`);
    if (fdm) chips.push(`<span class="col-core-icon-chip fac"><img src="simbolo_dano.png" alt="D" onerror="this.remove()" />${coreSign(fdm)}</span>`);
  } else if (fbp || fdm) {
    if (fbp) chips.push(`<span class="col-core-icon-chip fac"><img src="simbolo_bpower.png" alt="B" onerror="this.remove()" />${coreSign(fbp)}</span>`);
    if (fdm) chips.push(`<span class="col-core-icon-chip fac"><img src="simbolo_dano.png" alt="D" onerror="this.remove()" />${coreSign(fdm)}</span>`);
  }

  // Fusión: renglón aparte (logo + B / Daño de fusión)
  const fub = parseInt(c.fusionBpower, 10) || 0;
  const fud = parseInt(c.fusionDamage, 10) || 0;
  if (c.requiresFusion || fub || fud) {
    let inner = `<img src="logo_fusion.png" alt="Fus" onerror="this.remove()" />`;
    if (fub) inner += `<img src="simbolo_bpower.png" alt="B" onerror="this.remove()" /><span>${coreSign(fub)}</span>`;
    if (fud) inner += `<img src="simbolo_dano.png" alt="D" onerror="this.remove()" /><span>${coreSign(fud)}</span>`;
    chips.push(`<span class="col-core-icon-chip fusion-row">${inner}</span>`);
  }

  // Gear + Energía: renglón aparte
  const e = parseInt(c.energyDelta, 10) || 0;
  if (c.requiresGear || e) {
    let inner = `<img src="logo_bakugear.png" alt="Gear" onerror="this.remove()" />`;
    inner += `<img src="logo_energia.png" alt="E" onerror="this.remove()" />`;
    if (e) inner += `<span>${coreSign(e)}</span>`;
    chips.push(`<span class="col-core-icon-chip gear-row">${inner}</span>`);
  }

  // Strikes con logos
  if (c.shadowStrike) {
    chips.push(`<span class="col-core-icon-chip strike"><img src="strike_shadow.png" alt="Shadow" onerror="this.remove()" /></span>`);
  }
  if (c.frostStrike) {
    const fv = c.frostValue ? String(c.frostValue) : '';
    chips.push(`<span class="col-core-icon-chip strike"><img src="strike_frost.png" alt="Frost" onerror="this.remove()" />${fv}</span>`);
  }
  if (c.doubleStrike) {
    chips.push(`<span class="col-core-icon-chip strike">x2</span>`);
  }

  if (!chips.length && c.ability) {
    return `<span class="col-core-icon-chip">${String(c.ability).slice(0, 36)}</span>`;
  }
  return chips.join('');
}

function buildCoreFlipCard(c, typeMeta, opts) {
  opts = opts || {};
  const owned = !!opts.owned;
  const big = !!opts.big;
  // Por defecto: cara de INFO visible al entrar; al tocar se ve el icono
  const startFlipped = opts.startFlipped !== false; // default true
  // Anverso: icono simple del tipo (igual para todas las variantes)
  const frontSrc = (typeMeta && typeMeta.icon) || c.icon || 'core_fist.png';
  // Reverso: carta con franja vacía + info encima (no cambia el anverso)
  const backSrc = c.infoArt
    || (typeMeta && typeMeta.infoArt)
    || c.cardArt
    || (typeMeta && typeMeta.cardArt)
    || frontSrc;
  const icons = formatCoreEffectIconsHtml(c);
  const wrapCls = big ? 'col-core-detail-flip' : 'col-core-flip';
  const flippedCls = startFlipped ? ' flipped' : '';
  const idAttr = opts.flipId ? ` id="${opts.flipId}"` : '';
  const click = opts.onclick || `toggleCoreFlip(this)`;
  return `<div class="${wrapCls}${flippedCls}${owned ? ' owned' : ''}"${idAttr} onclick="${click}">
    <div class="col-core-flip-inner">
      <div class="col-core-face front">
        <img class="cv-art" src="${frontSrc}" alt="${(typeMeta && typeMeta.name) || c.type || ''}" loading="lazy" decoding="async" onerror="this.style.opacity=0.35" />
      </div>
      <div class="col-core-face back">
        <img class="cv-art" src="${backSrc}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${frontSrc}'" />
        <div class="cv-info">
          <div class="cv-name">${c.name || ''}</div>
          <div class="col-core-icons">${icons}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function toggleCoreFlip(el) {
  if (!el) return;
  el.classList.toggle('flipped');
}


function openCoreTypeList(typeId) {
  colCoreType = typeId || null;
  renderCollectionGrid();
}



let colView = 'bakugan'; // bakugan | cores | mine
let colFactionFilter = '';
let colDetailId = null;
let colFigureOpen = false;

function getOwnedCollection() {
  const me = typeof getMyPlayer === 'function' ? getMyPlayer() : null;
  if (!me) return { bakugan: [], cores: {} };
  const c = me.collection || {};
  return {
    bakugan: Array.isArray(c.bakugan) ? c.bakugan.slice() : [],
    cores: (c.cores && typeof c.cores === 'object') ? { ...c.cores } : {}
  };
}

async function saveOwnedCollection(next) {
  if (!currentUserId) {
    alert('Iniciá sesión para guardar tu colección personal.');
    openLoginOverlay && openLoginOverlay();
    return false;
  }
  const me = getMyPlayer();
  if (!me) return false;
  me.collection = {
    bakugan: next.bakugan || [],
    cores: next.cores || {}
  };
  try {
    await saveUserToCloud(me);
    return true;
  } catch (e) {
    console.warn('save collection', e);
    alert('No se pudo guardar la colección.');
    return false;
  }
}

function setCollectionView(view) {
  colView = view || 'bakugan';
  if (colView !== 'cores') colCoreType = null;
  ['bakugan', 'cores', 'mine'].forEach(v => {
    const btn = document.getElementById('col-sub-' + v);
    if (btn) btn.classList.toggle('active', colView === v);
  });
  const filters = document.getElementById('col-bakugan-filters');
  if (filters) filters.style.display = (colView === 'cores') ? 'none' : 'flex';
  renderCollectionGrid();
}

function setColFactionFilter(faction, el) {
  colFactionFilter = faction || '';
  document.querySelectorAll('.col-faction-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCollectionGrid();
}

function filterCatalogList(list) {
  const q = (document.getElementById('col-search')?.value || '').trim().toLowerCase();
  const coreF = document.getElementById('col-filter-core')?.value || '';
  const bmin = parseInt(document.getElementById('col-filter-bmin')?.value, 10);
  const bmax = parseInt(document.getElementById('col-filter-bmax')?.value, 10);
  const dmin = parseInt(document.getElementById('col-filter-dmin')?.value, 10);
  const dmax = parseInt(document.getElementById('col-filter-dmax')?.value, 10);
  const flag = document.getElementById('col-filter-flag')?.value || '';

  return list.filter(b => {
    if (q && !(b.name || '').toLowerCase().includes(q) && !(b.id || '').toLowerCase().includes(q)) return false;
    if (colFactionFilter) {
      const f1 = (b.faction || '').toLowerCase();
      const f2 = (b.faction2 || '').toLowerCase();
      if (f1 !== colFactionFilter.toLowerCase() && f2 !== colFactionFilter.toLowerCase()) return false;
    }
    if (coreF && !(b.cores || []).includes(coreF)) return false;
    const bp = parseInt(b.bpower, 10) || 0;
    const dm = parseInt(b.damage, 10) || 0;
    if (!isNaN(bmin) && bp < bmin) return false;
    if (!isNaN(bmax) && bp > bmax) return false;
    if (!isNaN(dmin) && dm < dmin) return false;
    if (!isNaN(dmax) && dm > dmax) return false;
    if (flag === 'evo' && !catalogHasEvo(b)) return false;
    if (flag === 'fusion' && !b.isFusion) return false;
    if (flag === 'base' && (catalogHasEvo(b) || b.isFusion)) return false;
    return true;
  });
}

function renderCollectionGrid() {
  const grid = document.getElementById('col-grid');
  if (!grid) return;
  const owned = getOwnedCollection();

  if (colView === 'cores') {
    // Importante: un solo hijo full-width para no pelear con .col-grid
    if (!colCoreType) {
      grid.innerHTML = `<div class="col-cores-panel">
        <div class="col-core-type-grid">${CORE_TYPE_CATALOG.map(t => {
          const n = coresOfType(t.id).length;
          return `<div class="col-core-type-card" onclick="openCoreTypeList('${t.id}')">
            <img src="${t.icon}" alt="${t.name}" loading="lazy" decoding="async" onerror="this.style.opacity='0.3'" />
            <div class="ct-name">${t.name}</div>
            <div class="ct-count">${n} variante${n === 1 ? '' : 's'}</div>
          </div>`;
        }).join('')}</div>
      </div>`;
      return;
    }
    const typeMeta = findCoreType(colCoreType);
    const variants = coresOfType(colCoreType);
    const title = (typeMeta && typeMeta.name) ? typeMeta.name.toUpperCase() : String(colCoreType).toUpperCase();
    let body = '';
    if (!variants.length) {
      body = '<div class="col-empty">Todavía no hay variantes de este tipo.<br/>Agregalas en CORE_VARIANT_CATALOG.</div>';
    } else {
      body = `<p class="col-core-hint">Tocá la carta para girarla y ver el anverso</p>
        <div class="col-core-variant-grid">${variants.map(c => {
          const qty = owned.cores[c.id] || 0;
          // flip al tocar; doble tap / hold no — botón detalle en el reverso vía stop + open
          return `<div style="position:relative;">
            ${qty ? '<span class="col-owned-badge" style="z-index:5;">x' + qty + '</span>' : ''}
            ${buildCoreFlipCard(c, typeMeta, {
              owned: !!qty,
              onclick: `event.stopPropagation(); toggleCoreFlip(this);`
            })}
            <button type="button" class="btn btn-sm" style="width:100%;margin-top:6px;padding:5px 4px;font-size:0.55rem;"
              onclick="event.stopPropagation(); openCoreDetail('${c.id}')">Detalle</button>
          </div>`;
        }).join('')}</div>`;
    }
    grid.innerHTML = `<div class="col-cores-panel">
      <div class="col-core-list-head">
        <button type="button" class="btn btn-sm col-core-back" onclick="openCoreTypeList(null)">← Tipos de core</button>
        <div class="col-core-list-title">CORES ${title}</div>
      </div>
      ${body}
    </div>`;
    return;
  }

  let list = BAKUGAN_CATALOG.slice();
  if (colView === 'mine') {
    list = list.filter(b => owned.bakugan.includes(b.id));
  }
  list = filterCatalogList(list);

  if (!list.length) {
    grid.innerHTML = '<div class="col-empty">' +
      (colView === 'mine'
        ? 'Tu colección está vacía. Entrá al catálogo Bakugan y agregá figuras.'
        : 'No hay Bakugans con esos filtros. Agregá entradas en BAKUGAN_CATALOG.') +
      '</div>';
    return;
  }

  grid.innerHTML = list.map(b => {
    const isOwned = owned.bakugan.includes(b.id);
    const facIcon = (typeof FACTION_ICONS !== 'undefined' && FACTION_ICONS[b.faction])
      ? FACTION_ICONS[b.faction] : ('faccion_' + String(b.faction || '').toLowerCase() + '.png');
    // Solo icono hexagonal: prioriza carta de personaje, luego figura/icono de catálogo
    const hexSrc = b.charCard || b.fusionCardFront || b.icon || b.figureOpen || b.figureClosed || 'icono_bakugan.png';
    const thumbsHtml = `<div class="col-thumb-row hex-only">
      <div class="col-char-hex" title="${b.name}">
        <img src="${hexSrc}" alt="${b.name}" loading="lazy" decoding="async" onerror="this.src='icono_bakugan.png'" />
      </div>
    </div>`;
    return `<div class="col-card ${isOwned ? 'owned' : ''}" onclick="openBakuganDetail('${b.id}')">
      ${isOwned ? '<span class="col-owned-badge">OWN</span>' : ''}
      ${thumbsHtml}
      <div class="col-name">${b.name}</div>
      <div class="col-stats">
        <img src="${facIcon}" alt="" loading="lazy" decoding="async" style="width:14px;height:14px;object-fit:contain;" onerror="this.remove()" />
        <span>B ${b.bpower || 0}</span>
        <span>⚔ ${b.damage || 0}</span>
      </div>
    </div>`;
  }).join('');
}


/** Normaliza Evos: soporta array "evos" (nuevo) o campos legados isEvo/evoCard/evoBpower/evoDamage */
function getCatalogEvos(b) {
  if (!b) return [];
  if (Array.isArray(b.evos) && b.evos.length) {
    return b.evos.map((e, i) => ({
      name: e.name || ('Evo ' + (i + 1)),
      card: e.card || e.evoCard || '',
      bpower: parseInt(e.bpower != null ? e.bpower : e.evoBpower, 10) || 0,
      damage: parseInt(e.damage != null ? e.damage : e.evoDamage, 10) || 0,
      ability: e.ability || ''
    })).filter(e => e.card || e.bpower || e.damage || e.ability);
  }
  // Formato antiguo (una sola evo)
  if (b.isEvo || b.evoCard || b.evoBpower || b.evoDamage) {
    const card = b.evoCard || '';
    const bp = parseInt(b.evoBpower, 10) || 0;
    const dm = parseInt(b.evoDamage, 10) || 0;
    if (card || bp || dm) {
      return [{
        name: 'Evo / Diamante',
        card: card,
        bpower: bp,
        damage: dm,
        ability: '' // la ability vieja a veces mezclaba base+evo; ya no la atribuimos acá
      }];
    }
  }
  return [];
}

function catalogHasEvo(b) {
  return getCatalogEvos(b).length > 0;
}

function findCatalogBakugan(id) {
  return BAKUGAN_CATALOG.find(b => b.id === id) || null;
}

function openBakuganDetail(id) {
  const b = findCatalogBakugan(id);
  if (!b) return;
  colDetailId = id;
  colFigureOpen = false;
  const ov = document.getElementById('col-detail-overlay');
  const card = document.getElementById('col-detail-card');
  if (!ov || !card) return;

  const owned = getOwnedCollection();
  const isOwned = owned.bakugan.includes(b.id);
  const figure = b.figureClosed || b.figureOpen || b.icon || 'icono_bakugan.png';
  const facHtml = (typeof factionIconHtml === 'function')
    ? factionIconHtml(b.faction, 22) + (b.faction2 ? ' ' + factionIconHtml(b.faction2, 22) : '')
    : (b.faction || '');

  let cardsHtml = '';
  // Personaje / fusión con flip
  if (b.isFusion && (b.fusionCardFront || b.charCard)) {
    const front = b.fusionCardFront || b.charCard;
    const back = b.fusionCardBack || b.charCard || front;
    cardsHtml += `
      <div style="text-align:center;">
        <div class="col-char-flip" id="col-fusion-flip" onclick="toggleColFusionFlip()">
          <div class="col-char-flip-inner">
            <div class="col-char-face"><img src="${front}" alt="Frente" onerror="this.style.opacity=0.3"/></div>
            <div class="col-char-face back"><img src="${back}" alt="Reverso" onerror="this.style.opacity=0.3"/></div>
          </div>
        </div>
        <div class="col-card-label">FUSIÓN · clic para girar</div>
      </div>`;
  } else if (b.charCard) {
    cardsHtml += `
      <div style="text-align:center;">
        <div class="col-card-thumb" onclick="openColLightbox('${b.charCard.replace(/'/g, "\\'")}')">
          <img src="${b.charCard}" alt="Personaje" onerror="this.style.opacity=0.3"/>
        </div>
        <div class="col-card-label">CARTA PERSONAJE</div>
      </div>`;
  }
  const evoList = getCatalogEvos(b);
  evoList.forEach((ev, ei) => {
    if (!ev.card) return;
    const safeCard = String(ev.card).replace(/'/g, "\\'");
    const label = (ev.name || ('Evo ' + (ei + 1))).toUpperCase();
    cardsHtml += `
      <div style="text-align:center;">
        <div class="col-card-thumb" style="border-color:rgba(255,170,0,0.5);" onclick="openColLightbox('${safeCard}')">
          <img src="${ev.card}" alt="${label}" onerror="this.style.opacity=0.3"/>
        </div>
        <div class="col-card-label">${label}</div>
      </div>`;
  });

  const coresIcons = (b.cores || []).map(cid => {
    const src = (BAKUCORE_ICON && BAKUCORE_ICON[cid]) || '';
    return src ? `<img src="${src}" title="${cid}" style="width:28px;height:28px;object-fit:contain;" onerror="this.remove()" />` : '';
  }).join('');

  // Bloque de habilidades: base separada de cada Evo
  let abilityHtml = '';
  if (b.ability) {
    abilityHtml += `<div class="col-ability"><strong style="color:var(--neon-cyan);">Habilidad (Base)</strong><br/>${b.ability}</div>`;
  }
  evoList.forEach((ev, ei) => {
    const title = ev.name || ('Evo ' + (ei + 1));
    const statsLine = (ev.bpower || ev.damage)
      ? `<div style="font-size:0.75rem;margin:4px 0 6px;opacity:0.9;">B ${ev.bpower || 0} · ⚔ ${ev.damage || 0}</div>`
      : '';
    const ab = ev.ability
      ? `<div style="margin-top:4px;">${ev.ability}</div>`
      : '<div style="opacity:0.5;font-size:0.75rem;">Sin habilidad de Evo cargada</div>';
    abilityHtml += `<div class="col-ability" style="border-color:rgba(255,170,0,0.35);">
      <strong style="color:#ffcc55;">${title}</strong>
      ${statsLine}${ab}
    </div>`;
  });

  const evoMeta = evoList.length
    ? (' · ' + evoList.length + ' Evo' + (evoList.length > 1 ? 's' : ''))
    : '';

  card.innerHTML = `
    <button type="button" class="col-detail-close" onclick="closeBakuganDetail()">✕</button>
    <div class="col-detail-title">${b.name}</div>
    <div class="col-detail-meta">${facHtml}
      · B ${b.bpower || 0} · ⚔ ${b.damage || 0}
      ${evoMeta}
      ${b.isFusion ? ' · FUSIÓN' : ''}
    </div>
    <div class="col-figure-wrap">
      <img id="col-detail-figure" src="${figure}" alt="${b.name}"
        onclick="toggleColFigure()"
        onerror="this.src='icono_bakugan.png'" />
      <div style="font-size:0.65rem;opacity:0.55;margin-top:6px;">Tocá la figura para abrirla</div>
    </div>
    <div id="col-detail-cards" class="col-cards-row" style="display:none;">${cardsHtml || '<span style="opacity:0.5;font-size:0.75rem;">Sin cartas cargadas aún</span>'}</div>
    ${abilityHtml}
    <div style="text-align:center;margin:8px 0;">${coresIcons}</div>
    <div class="col-detail-actions">
      <button type="button" class="btn" onclick="toggleOwnBakugan('${b.id}')">${isOwned ? '✓ En mi colección · Quitar' : '+ Agregar a mi colección'}</button>
      <button type="button" class="btn btn-sm" onclick="addCatalogBakuganToTeam('${b.id}')">Usar en equipo del perfil (slot libre)</button>
    </div>
  `;
  ov.classList.add('open');
}

function toggleColFigure() {
  const b = findCatalogBakugan(colDetailId);
  if (!b) return;
  colFigureOpen = !colFigureOpen;
  const img = document.getElementById('col-detail-figure');
  const cards = document.getElementById('col-detail-cards');
  if (img) {
    img.src = colFigureOpen
      ? (b.figureOpen || b.figureClosed || b.icon)
      : (b.figureClosed || b.figureOpen || b.icon);
    img.classList.toggle('open-pose', colFigureOpen);
  }
  if (cards) cards.style.display = colFigureOpen ? 'flex' : 'none';
  try {
    const a = new Audio('bakugan_open.mp3');
    a.volume = 0.3;
    if (colFigureOpen) a.play().catch(() => {});
  } catch (e) {}
}

function toggleColFusionFlip() {
  const el = document.getElementById('col-fusion-flip');
  if (el) el.classList.toggle('flipped');
}

function closeBakuganDetail() {
  const ov = document.getElementById('col-detail-overlay');
  if (ov) ov.classList.remove('open');
  colDetailId = null;
  colFigureOpen = false;
}

function openColLightbox(src) {
  const box = document.getElementById('col-lightbox');
  const img = document.getElementById('col-lightbox-img');
  if (!box || !img) return;
  img.src = src;
  box.classList.add('open');
}
function closeColLightbox() {
  const box = document.getElementById('col-lightbox');
  if (box) box.classList.remove('open');
}

async function toggleOwnBakugan(id) {
  if (!currentUserId) {
    alert('Iniciá sesión para guardar en tu colección.');
    if (typeof openLoginOverlay === 'function') openLoginOverlay();
    return;
  }
  const owned = getOwnedCollection();
  const i = owned.bakugan.indexOf(id);
  if (i >= 0) owned.bakugan.splice(i, 1);
  else owned.bakugan.push(id);
  const ok = await saveOwnedCollection(owned);
  if (ok) {
    renderCollectionGrid();
    openBakuganDetail(id);
  }
}

/** Copia stats del catálogo a un slot vacío del equipo del perfil */
async function addCatalogBakuganToTeam(id) {
  if (!currentUserId) {
    alert('Iniciá sesión para editar tu equipo.');
    if (typeof openLoginOverlay === 'function') openLoginOverlay();
    return;
  }
  const b = findCatalogBakugan(id);
  const me = getMyPlayer();
  if (!b || !me) return;
  if (!Array.isArray(me.bakugan)) me.bakugan = [{}, {}, {}];
  while (me.bakugan.length < 3) me.bakugan.push({});
  let slot = me.bakugan.findIndex(x => !x || !x.name);
  if (slot < 0) {
    const which = prompt('Los 3 slots están ocupados. ¿Reemplazar slot 1, 2 o 3?', '1');
    slot = (parseInt(which, 10) || 1) - 1;
    if (slot < 0 || slot > 2) return;
  }
  const cores = (b.cores || []).slice(0, 2).map(t => ({
    type: t,
    bpower: 0,
    damage: 0,
    factionBpower: 0,
    factionDamage: 0
  }));
  while (cores.length < 2) cores.push({ type: '', bpower: 0, damage: 0 });
  me.bakugan[slot] = {
    name: b.name,
    faction: b.faction || '',
    faction2: b.faction2 || '',
    bpower: parseInt(b.bpower, 10) || 0,
    damage: parseInt(b.damage, 10) || 0,
    isEvo: catalogHasEvo(b),
    isFusion: !!b.isFusion,
    evoBpower: (getCatalogEvos(b)[0] && getCatalogEvos(b)[0].bpower) || parseInt(b.evoBpower, 10) || 0,
    evoDamage: (getCatalogEvos(b)[0] && getCatalogEvos(b)[0].damage) || parseInt(b.evoDamage, 10) || 0,
    catalogEvos: getCatalogEvos(b),
    bakucores: cores
  };
  // también marcar owned
  const owned = getOwnedCollection();
  if (!owned.bakugan.includes(id)) owned.bakugan.push(id);
  me.collection = { bakugan: owned.bakugan, cores: owned.cores };
  await saveUserToCloud(me);
  alert('"' + b.name + '" cargado en el slot ' + (slot + 1) + ' de tu perfil.\nRevisá PERFIL y guardá si necesitás ajustar cores.');
  try { if (typeof renderProfile === 'function') renderProfile(); } catch (e) {}
  closeBakuganDetail();
}

function openCoreDetail(coreId) {
  let c = findCoreVariant(coreId);
  if (!c) {
    const t = findCoreType(coreId);
    if (t) { openCoreTypeList(t.id); return; }
    return;
  }
  const typeMeta = findCoreType(c.type);
  const ov = document.getElementById('col-detail-overlay');
  const card = document.getElementById('col-detail-card');
  if (!ov || !card) return;
  const owned = getOwnedCollection();
  const qty = owned.cores[c.id] || 0;
  const fx = formatCoreEffectText(c);
  const flipHtml = buildCoreFlipCard(c, typeMeta, {
    owned: !!qty,
    big: true,
    flipId: 'col-core-detail-flip',
    onclick: "toggleCoreFlip(this)"
  });

  card.innerHTML = `
    <button type="button" class="col-detail-close" onclick="closeBakuganDetail()">✕</button>
    <div class="col-detail-title">${c.name}</div>
    <div class="col-detail-meta" style="margin-bottom:8px;">${(typeMeta && typeMeta.name) || c.type || ''} · tocá para girar</div>
    ${flipHtml}
    <p style="font-size:0.8rem;opacity:0.85;text-align:center;margin:6px 0 10px;line-height:1.35;">${fx}</p>
    <p style="text-align:center;font-size:0.75rem;color:var(--neon-green);">En inventario: x${qty}</p>
    <div class="col-detail-actions">
      <button type="button" class="btn" onclick="addCoreToInventory('${c.id}', 1)">+ Sumar 1 a mi inventario</button>
      <button type="button" class="btn btn-sm" onclick="addCoreToInventory('${c.id}', -1)">− Quitar 1</button>
      <button type="button" class="btn btn-sm" onclick="addCoreToActiveDeckNote('${c.id}')">Anotar en deck activo del perfil</button>
      <button type="button" class="btn btn-sm" onclick="closeBakuganDetail(); openCoreTypeList('${c.type}')">Ver más ${(typeMeta && typeMeta.name) || c.type}</button>
    </div>
  `;
  ov.classList.add('open');
  // mostrar el reverso con iconos al abrir
  setTimeout(() => {
    const el = document.getElementById('col-core-detail-flip');
    if (el) el.classList.add('flipped');
  }, 80);
}

async function addCoreToInventory(coreId, delta) {
  if (!currentUserId) {
    alert('Iniciá sesión para guardar cores.');
    if (typeof openLoginOverlay === 'function') openLoginOverlay();
    return;
  }
  const owned = getOwnedCollection();
  const n = Math.max(0, (owned.cores[coreId] || 0) + delta);
  if (n === 0) delete owned.cores[coreId];
  else owned.cores[coreId] = n;
  const ok = await saveOwnedCollection(owned);
  if (ok) {
    renderCollectionGrid();
    openCoreDetail(coreId);
  }
}

async function addCoreToActiveDeckNote(coreId) {
  if (!currentUserId) {
    alert('Iniciá sesión.');
    if (typeof openLoginOverlay === 'function') openLoginOverlay();
    return;
  }
  const me = getMyPlayer();
  if (!me) return;
  const c = findCoreVariant(coreId) || CORE_CATALOG.find(x => x.id === coreId);
  if (!Array.isArray(me.deckCoreNotes)) me.deckCoreNotes = [];
  me.deckCoreNotes.push({
    coreId: coreId,
    name: c ? c.name : coreId,
    at: Date.now()
  });
  me.deckCoreNotes = me.deckCoreNotes.slice(-30);
  // inventario +1
  const owned = getOwnedCollection();
  owned.cores[coreId] = (owned.cores[coreId] || 0) + 1;
  me.collection = { bakugan: owned.bakugan, cores: owned.cores };
  await saveUserToCloud(me);
  alert((c ? c.name : coreId) + ' anotado para tu deck e inventario +1.');
  openCoreDetail(coreId);
}



function bakucoreSlotHtml(bakuIndex, slot) {
  return `
    <div class="bakucore-slot" id="baku${bakuIndex}-core${slot}">
      <button type="button" class="bakucore-slot-header" id="baku${bakuIndex}-core${slot}-header" onclick="toggleBakucoreSlot(${bakuIndex}, ${slot})">
        <span class="core-header-left">
          <img src="core_shield.png" class="core-preview-icon" id="baku${bakuIndex}-core${slot}-preview" style="display:none;" onerror="this.style.display='none'" />
          <span id="baku${bakuIndex}-core${slot}-title">Bakucore ${slot}</span>
        </span>
        <span class="baku-collapse-chevron">▼</span>
      </button>
      <div class="bakucore-slot-body" id="baku${bakuIndex}-core${slot}-body">
        <div class="bakucore-restrict-label">1 · Filtrá por tipo de core</div>
        <div class="bakucore-type-selector" data-baku="${bakuIndex}" data-slot="${slot}">
          ${bakucoreSelectorHtml(bakuIndex, slot)}
        </div>
        <input type="hidden" id="baku${bakuIndex}-core${slot}-type" value="" />
        <input type="hidden" id="baku${bakuIndex}-core${slot}-variantId" value="" />

        <div class="bakucore-restrict-label">2 · Elegí la variante por ID (cara de efectos, como al dar vuelta)</div>
        <div class="bakucore-variant-toolbar">
          <input type="search" class="bakucore-variant-search" id="baku${bakuIndex}-core${slot}-variantSearch"
            placeholder="Buscar id / nombre / efecto…"
            oninput="refreshBakucoreVariantPicker(${bakuIndex}, ${slot})" />
        </div>
        <div class="bakucore-variant-grid" id="baku${bakuIndex}-core${slot}-variantGrid">
          ${bakucoreVariantPickerHtml(bakuIndex, slot, '', '', '')}
        </div>

        <div class="bakucore-selected-label" id="baku${bakuIndex}-core${slot}-selectedLabel"></div>
        <div class="bakucore-selected-preview" id="baku${bakuIndex}-core${slot}-selectedPreview"></div>

        <button type="button" class="btn btn-sm bakucore-manual-toggle" id="baku${bakuIndex}-core${slot}-manualBtn"
          onclick="toggleBakucoreManualFields(${bakuIndex}, ${slot})">▼ Ajustar manualmente (opcional)</button>
        <div class="bakucore-manual-fields" id="baku${bakuIndex}-core${slot}-manual">

        <div class="bakucore-restrict-label" style="margin-top:6px;">Efecto base (siempre)</div>
        <div class="baku-stats-row">
          <div class="baku-stat-field">
            <img src="simbolo_bpower.png" class="baku-icon" alt="B-Power" />
            <input type="number" id="baku${bakuIndex}-core${slot}-bpower" placeholder="B-Power" />
          </div>
          <div class="baku-stat-field">
            <img src="simbolo_dano.png" class="baku-icon" alt="Daño" />
            <input type="number" id="baku${bakuIndex}-core${slot}-damage" placeholder="Daño" />
          </div>
        </div>
        <div class="baku-stats-row" style="margin-top:6px;">
          <div class="baku-stat-field" style="grid-column:1 / -1;">
            <img src="logo_energia.png" class="baku-icon" alt="Energia" onerror="this.style.display='none'" />
            <input type="number" id="baku${bakuIndex}-core${slot}-energyDelta" placeholder="Delta Energía Gear (ej: -1, -2)" />
          </div>
        </div>

        <div class="bakucore-fusion-stats open" id="baku${bakuIndex}-core${slot}-fusionStats">
          <div class="bakucore-restrict-label">Bonus Fusión (F:) — se SUMA si el Bakugan está fusionado</div>
          <div class="baku-stats-row">
            <div class="baku-stat-field">
              <img src="logo_fusion.png" class="baku-icon" alt="Fusion" onerror="this.style.display='none'" />
              <input type="number" id="baku${bakuIndex}-core${slot}-fusionBpower" placeholder="B-Power F" />
            </div>
            <div class="baku-stat-field">
              <img src="simbolo_dano.png" class="baku-icon" alt="Daño F" />
              <input type="number" id="baku${bakuIndex}-core${slot}-fusionDamage" placeholder="Daño F" />
            </div>
          </div>
          <p style="font-size:0.6rem;opacity:0.55;margin-top:4px;line-height:1.3;">Ej: base +200B y F:+200B → en Fusion suma +400B. Magic solo F:+800 deja base en 0.</p>
        </div>

        <div class="bakucore-restrict open" id="baku${bakuIndex}-core${slot}-restrict">
          <div class="bakucore-restrict-label" id="baku${bakuIndex}-core${slot}-restrictLabel">Bonus por facción (hasta 2) — se SUMA si el Bakugan coincide</div>
          <div class="baku-faction-selector" data-baku-core="${bakuIndex}" data-core-slot="${slot}">
            ${bakucoreRestrictFactionHtml(bakuIndex, slot)}
          </div>
          <input type="hidden" id="baku${bakuIndex}-core${slot}-restrictFaction" value="" />
          <input type="hidden" id="baku${bakuIndex}-core${slot}-restrictFaction2" value="" />
          <div class="baku-stats-row" style="margin-top:6px;">
            <div class="baku-stat-field">
              <img src="simbolo_bpower.png" class="baku-icon" alt="B faccion" />
              <input type="number" id="baku${bakuIndex}-core${slot}-factionBpower" placeholder="B-Power facción" />
            </div>
            <div class="baku-stat-field">
              <img src="simbolo_dano.png" class="baku-icon" alt="Daño facción" />
              <input type="number" id="baku${bakuIndex}-core${slot}-factionDamage" placeholder="Daño facción" />
            </div>
          </div>
        </div>

        <div class="bakucore-magic-panel" id="baku${bakuIndex}-core${slot}-magic">
          <div class="bakucore-options-row">
            <div class="bakucore-flag-btn" id="baku${bakuIndex}-core${slot}-gearBtn" onclick="toggleBakucoreFlag(${bakuIndex}, ${slot}, 'gear')">
              <img src="logo_bakugear.png" alt="" onerror="this.style.display='none'" />
              <img src="logo_energia.png" alt="" onerror="this.style.display='none'" />
              Con Gear / Energía
            </div>
          </div>
          <input type="hidden" id="baku${bakuIndex}-core${slot}-requiresFusion" value="0" />
          <input type="hidden" id="baku${bakuIndex}-core${slot}-requiresGear" value="0" />
        </div>

        <div class="bakucore-helix-panel" id="baku${bakuIndex}-core${slot}-helix">
          <div class="bakucore-restrict-label">Efectos Strike (Helix)</div>
          <div class="bakucore-options-row">
            <div class="bakucore-flag-btn" id="baku${bakuIndex}-core${slot}-shadowBtn" onclick="toggleBakucoreFlag(${bakuIndex}, ${slot}, 'shadow')">
              <img src="strike_shadow.png" alt="ShadowStrike" onerror="this.style.display='none'" />
              Shadow
            </div>
            <div class="bakucore-flag-btn" id="baku${bakuIndex}-core${slot}-frostBtn" onclick="toggleBakucoreFlag(${bakuIndex}, ${slot}, 'frost')">
              <img src="strike_frost.png" alt="FrostStrike" onerror="this.style.display='none'" />
              Frost
              <input type="number" class="bakucore-frost-num" id="baku${bakuIndex}-core${slot}-frostValue" placeholder="#" min="0" onclick="event.stopPropagation()" />
            </div>
            <div class="bakucore-flag-btn" id="baku${bakuIndex}-core${slot}-doubleBtn" onclick="toggleBakucoreFlag(${bakuIndex}, ${slot}, 'double')">
              <img src="strike_double.png" alt="DobleStrike" onerror="this.style.display='none'" />
              Doble
            </div>
          </div>
          <input type="hidden" id="baku${bakuIndex}-core${slot}-shadowStrike" value="0" />
          <input type="hidden" id="baku${bakuIndex}-core${slot}-frostStrike" value="0" />
          <input type="hidden" id="baku${bakuIndex}-core${slot}-doubleStrike" value="0" />
        </div>
        </div><!-- /.bakucore-manual-fields -->
      </div>
    </div>`;
}

function toggleBakuganCard(index) {
  const header = document.getElementById(`baku${index}-collapse-header`);
  const body = document.getElementById(`baku${index}-body`);
  if (!header || !body) return;
  const open = !body.classList.contains('open');
  body.classList.toggle('open', open);
  header.classList.toggle('open', open);
}

function toggleBakucoreSlot(bakuIndex, slot) {
  const header = document.getElementById(`baku${bakuIndex}-core${slot}-header`);
  const body = document.getElementById(`baku${bakuIndex}-core${slot}-body`);
  if (!header || !body) return;
  const open = !body.classList.contains('open');
  body.classList.toggle('open', open);
  header.classList.toggle('open', open);
}

function buildBakuganEditorsHtml() {
  const container = document.getElementById('bakugan-team-container');
  if (!container || container.dataset.built === '1') return;
  let html = '';
  for (let i = 1; i <= 3; i++) {
    html += `
      <div class="baku-card-editor" id="baku-card-${i}">
        <button type="button" class="baku-collapse-header" id="baku${i}-collapse-header" onclick="toggleBakuganCard(${i})">
          <span class="baku-collapse-title"><img src="icono_bakugan.png" alt="" onerror="this.style.display='none'" />#${i}</span>
          <span class="baku-collapse-chevron">▼</span>
        </button>
        <input type="text" id="baku${i}-name" placeholder="Nombre del Bakugan..." class="baku-input-name" onclick="event.stopPropagation()" />
        <div class="baku-card-body" id="baku${i}-body">
          <div class="baku-stats-row">
            <div class="baku-stat-field">
              <img src="simbolo_bpower.png" class="baku-icon" alt="B-Power" />
              <input type="number" id="baku${i}-bpower" placeholder="B-Power base" />
            </div>
            <div class="baku-stat-field">
              <img src="simbolo_dano.png" class="baku-icon" alt="Daño" />
              <input type="number" id="baku${i}-damage" placeholder="Daño base" />
            </div>
          </div>
          <div class="baku-faction-label">Facción principal:</div>
          <div class="baku-faction-selector" data-baku-index="${i}" data-slot="1">
            ${factionSelectorHtml(i)}
          </div>
          <input type="hidden" id="baku${i}-faction" value="" />
          <input type="hidden" id="baku${i}-faction2" value="" />

          <div class="baku-form-toggles">
            <label class="baku-form-toggle" id="baku${i}-fusion-toggle" onclick="toggleBakuForm(${i}, 'fusion')">
              <img src="logo_fusion.png" alt="" style="width:18px;height:18px;object-fit:contain;" onerror="this.style.display='none'" />
              <span>FUSIÓN</span>
            </label>
            <label class="baku-form-toggle" id="baku${i}-evo-toggle" onclick="toggleBakuForm(${i}, 'evo')">
              <img src="logo_diamante.png" alt="" style="width:18px;height:18px;object-fit:contain;" onerror="this.style.display='none'" />
              <span>EVO</span>
            </label>
          </div>
          <input type="hidden" id="baku${i}-isFusion" value="0" />
          <input type="hidden" id="baku${i}-isEvo" value="0" />

          <div class="baku-subpanel fusion-panel" id="baku${i}-fusion-panel">
            <div class="baku-subpanel-title" style="color:var(--neon-magenta); display:flex;align-items:center;gap:6px;">
              <img src="logo_fusion.png" alt="" style="width:16px;height:16px;object-fit:contain;" onerror="this.style.display='none'" /> STATS DE FUSIÓN
            </div>
            <div class="baku-stats-row">
              <div class="baku-stat-field">
                <img src="simbolo_bpower.png" class="baku-icon" alt="B-Power" />
                <input type="number" id="baku${i}-fusion-bpower" placeholder="B-Power F" />
              </div>
              <div class="baku-stat-field">
                <img src="simbolo_dano.png" class="baku-icon" alt="Daño" />
                <input type="number" id="baku${i}-fusion-damage" placeholder="Daño F" />
              </div>
            </div>
            <div class="baku-faction-label">2ª facción (fusión):</div>
            <div class="baku-faction-selector" data-baku-index="${i}" data-slot="2">
              ${factionSelectorHtml(i)}
            </div>
          </div>

          <div class="baku-subpanel evo-panel" id="baku${i}-evo-panel">
            <div class="baku-subpanel-title" style="color:#ffcc55; display:flex;align-items:center;gap:6px;">
              <img src="logo_diamante.png" alt="" style="width:16px;height:16px;object-fit:contain;" onerror="this.style.display='none'" /> STATS DE EVO
            </div>
            <div class="baku-stats-row">
              <div class="baku-stat-field">
                <img src="simbolo_bpower.png" class="baku-icon" alt="B-Power" />
                <input type="number" id="baku${i}-evo-bpower" placeholder="B-Power Evo" />
              </div>
              <div class="baku-stat-field">
                <img src="simbolo_dano.png" class="baku-icon" alt="Daño" />
                <input type="number" id="baku${i}-evo-damage" placeholder="Daño Evo" />
              </div>
            </div>
          </div>

          <div class="bakucore-section">
            <div class="bakucore-section-title">⚙️ BAKUCORES</div>
            ${bakucoreSlotHtml(i, 1)}
            ${bakucoreSlotHtml(i, 2)}
          </div>
        </div>
      </div>`;
  }
  container.innerHTML = html;
  container.dataset.built = '1';
}

function applyBakucoreUI(bakuIndex, slot, type, restrictFaction, restrictFaction2) {
  const typeSel = document.querySelector(`.bakucore-type-selector[data-baku="${bakuIndex}"][data-slot="${slot}"]`);
  if (typeSel) {
    typeSel.querySelectorAll('.bakucore-opt').forEach(img => {
      img.classList.toggle('selected', img.getAttribute('data-core') === type);
    });
  }
  const preview = document.getElementById(`baku${bakuIndex}-core${slot}-preview`);
  if (preview) {
    if (type && BAKUCORE_ICON[type]) {
      preview.src = BAKUCORE_ICON[type];
      preview.style.display = 'inline-block';
    } else {
      preview.style.display = 'none';
    }
  }

  // Fusión y facción siempre visibles (las cartas reales combinan ambos)
  const fusionBox = document.getElementById(`baku${bakuIndex}-core${slot}-fusionStats`);
  if (fusionBox) fusionBox.classList.add('open');
  const restrictBox = document.getElementById(`baku${bakuIndex}-core${slot}-restrict`);
  if (restrictBox) restrictBox.classList.add('open');

  const magicBox = document.getElementById(`baku${bakuIndex}-core${slot}-magic`);
  const helixBox = document.getElementById(`baku${bakuIndex}-core${slot}-helix`);
  // Gear/energía relevante en fist, fire_fist, magic_shield
  if (magicBox) {
    const showGear = !type || type === 'fist' || type === 'fire_fist' || type === 'magic_shield' || type === 'shield' || type === 'helix';
    magicBox.classList.toggle('open', showGear);
  }
  if (helixBox) helixBox.classList.toggle('open', type === 'helix');

  // Marcar facciones restringidas
  const facSel = document.querySelector(`.baku-faction-selector[data-baku-core="${bakuIndex}"][data-core-slot="${slot}"]`);
  if (facSel) {
    const chosen = [restrictFaction, restrictFaction2].filter(Boolean);
    facSel.querySelectorAll('.faction-opt').forEach(img => {
      img.classList.toggle('selected', chosen.includes(img.getAttribute('data-faction')));
    });
  }

  // Flags visuales
  const gearBtn = document.getElementById(`baku${bakuIndex}-core${slot}-gearBtn`);
  const reqGear = (document.getElementById(`baku${bakuIndex}-core${slot}-requiresGear`) || {}).value === '1';
  if (gearBtn) gearBtn.classList.toggle('active', reqGear);

  const shadowBtn = document.getElementById(`baku${bakuIndex}-core${slot}-shadowBtn`);
  const frostBtn = document.getElementById(`baku${bakuIndex}-core${slot}-frostBtn`);
  const doubleBtn = document.getElementById(`baku${bakuIndex}-core${slot}-doubleBtn`);
  if (shadowBtn) shadowBtn.classList.toggle('active', (document.getElementById(`baku${bakuIndex}-core${slot}-shadowStrike`) || {}).value === '1');
  if (frostBtn) frostBtn.classList.toggle('active', (document.getElementById(`baku${bakuIndex}-core${slot}-frostStrike`) || {}).value === '1');
  if (doubleBtn) doubleBtn.classList.toggle('active', (document.getElementById(`baku${bakuIndex}-core${slot}-doubleStrike`) || {}).value === '1');
}

function selectBakucoreType(bakuIndex, slot, typeId, el) {
  const typeEl = document.getElementById(`baku${bakuIndex}-core${slot}-type`);
  if (!typeEl) return;
  const body = document.getElementById(`baku${bakuIndex}-core${slot}-body`);
  const header = document.getElementById(`baku${bakuIndex}-core${slot}-header`);
  if (body && !body.classList.contains('open')) {
    body.classList.add('open');
    if (header) header.classList.add('open');
  }
  // Si se vuelve a tocar el mismo tipo → quitar filtro (mostrar todos) sin borrar la variante elegida
  if (typeEl.value === typeId) {
    typeEl.value = '';
    applyBakucoreUI(bakuIndex, slot, '', 
      (document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction`) || {}).value || '',
      (document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction2`) || {}).value || '');
    refreshBakucoreVariantPicker(bakuIndex, slot);
    return;
  }
  typeEl.value = typeId;
  // Al filtrar por tipo, si la variante actual no es de ese tipo, limpiar selección
  const idEl = document.getElementById(`baku${bakuIndex}-core${slot}-variantId`);
  const curId = idEl ? idEl.value : '';
  if (curId && typeof findCoreVariant === 'function') {
    const cat = findCoreVariant(curId);
    if (!cat || cat.type !== typeId) {
      applyVariantToSlotFields(bakuIndex, slot, null);
      typeEl.value = typeId; // applyVariant limpia type; restaurar filtro
      updateBakucoreSelectedPreview(bakuIndex, slot, '');
      const title = document.getElementById(`baku${bakuIndex}-core${slot}-title`);
      if (title) title.textContent = `Bakucore ${slot}`;
    }
  }
  const rf1 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction`);
  const rf2 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction2`);
  applyBakucoreUI(bakuIndex, slot, typeId, rf1 ? rf1.value : '', rf2 ? rf2.value : '');
  refreshBakucoreVariantPicker(bakuIndex, slot);
}

function selectBakucoreRestrictFaction(bakuIndex, slot, factionName, el) {
  const rf1 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction`);
  const rf2 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction2`);
  if (!rf1 || !rf2) return;
  let f1 = rf1.value || '';
  let f2 = rf2.value || '';
  if (factionName === f1) {
    f1 = f2; f2 = '';
  } else if (factionName === f2) {
    f2 = '';
  } else if (!f1) {
    f1 = factionName;
  } else if (!f2) {
    f2 = factionName;
  } else {
    // replace second
    f2 = factionName;
  }
  rf1.value = f1;
  rf2.value = f2;
  const facSel = document.querySelector(`.baku-faction-selector[data-baku-core="${bakuIndex}"][data-core-slot="${slot}"]`);
  if (facSel) {
    facSel.querySelectorAll('.faction-opt').forEach(img => {
      const f = img.getAttribute('data-faction');
      img.classList.toggle('selected', f === f1 || f === f2);
    });
  }
}

function toggleBakucoreFlag(bakuIndex, slot, kind) {
  const map = {
    fusion: 'requiresFusion',
    gear: 'requiresGear',
    shadow: 'shadowStrike',
    frost: 'frostStrike',
    double: 'doubleStrike'
  };
  const key = map[kind];
  if (!key) return;
  const el = document.getElementById(`baku${bakuIndex}-core${slot}-${key}`);
  if (!el) return;
  el.value = el.value === '1' ? '0' : '1';
  const typeEl = document.getElementById(`baku${bakuIndex}-core${slot}-type`);
  const rf1 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction`);
  const rf2 = document.getElementById(`baku${bakuIndex}-core${slot}-restrictFaction2`);
  applyBakucoreUI(bakuIndex, slot, typeEl ? typeEl.value : '', rf1 ? rf1.value : '', rf2 ? rf2.value : '');
}

function toggleBakuForm(index, kind) {
  const isFusionEl = document.getElementById(`baku${index}-isFusion`);
  const isEvoEl = document.getElementById(`baku${index}-isEvo`);
  if (kind === 'fusion') {
    const next = isFusionEl.value !== '1';
    isFusionEl.value = next ? '1' : '0';
  } else {
    const next = isEvoEl.value !== '1';
    isEvoEl.value = next ? '1' : '0';
  }
  refreshBakuFormUI(index);
}

function refreshBakuFormUI(index) {
  const isFusion = document.getElementById(`baku${index}-isFusion`).value === '1';
  const isEvo = document.getElementById(`baku${index}-isEvo`).value === '1';
  const fusToggle = document.getElementById(`baku${index}-fusion-toggle`);
  const evoToggle = document.getElementById(`baku${index}-evo-toggle`);
  const fusPanel = document.getElementById(`baku${index}-fusion-panel`);
  const evoPanel = document.getElementById(`baku${index}-evo-panel`);
  if (fusToggle) fusToggle.classList.toggle('active-fusion', isFusion);
  if (evoToggle) evoToggle.classList.toggle('active-evo', isEvo);
  if (fusPanel) fusPanel.classList.toggle('open', isFusion);
  if (evoPanel) evoPanel.classList.toggle('open', isEvo);
}

function toggleAvatarPicker() {
  const panel = document.getElementById('avatar-picker-panel');
  if (!panel) return;
  panel.classList.toggle('open');
}

function toggleDeckEditor() {
  const panel = document.getElementById('deck-editor-panel');
  const header = document.getElementById('deck-collapse-header');
  if (!panel || !header) return;
  const open = !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  header.classList.toggle('open', open);
}

const FACTION_BG = {
  Pyrus: 'fondo_faccion_favorita_pyrus.jpg',
  Aquos: 'fondo_faccion_favorita_aquos.png',
  Ventus: 'fondo_faccion_favorita_ventus.jpg',
  Aurelus: 'fondo_faccion_favorita_aurelus.jpg',
  Haos: 'fondo_faccion_favorita_haos.png',
  Darkus: 'fondo_faccion_favorita_darkus.jpg'
};

function applyFavoriteFactionBackground(faction) {
  const panel = document.getElementById('profile-main-panel');
  if (!panel) return;
  const src = faction ? FACTION_BG[faction] : null;
  if (src) {
    panel.style.backgroundImage = `url('${src}')`;
    panel.classList.add('has-faction-bg');
  } else {
    panel.style.backgroundImage = '';
    panel.classList.remove('has-faction-bg');
  }
}

function togglePrefFaction(name, el) {
  const sel = document.getElementById('faction-select');
  if (!sel) return;
  const already = Array.from(sel.options).some(o => o.value === name && o.selected);
  // Solo una facción favorita
  Array.from(sel.options).forEach(o => { o.selected = false; });
  document.querySelectorAll('#pref-faction-selector .pref-faction-opt').forEach(img => img.classList.remove('selected'));
  if (already) {
    // deseleccionar
    applyFavoriteFactionBackground(null);
    return;
  }
  const opt = Array.from(sel.options).find(o => o.value === name);
  if (opt) opt.selected = true;
  if (el) el.classList.add('selected');
  applyFavoriteFactionBackground(name);
}

function syncPrefFactionIcons(factions) {
  let list = Array.isArray(factions) ? factions.filter(Boolean) : [];
  // Solo una: tomar la primera
  const single = list.length ? list[0] : '';
  document.querySelectorAll('#pref-faction-selector .pref-faction-opt').forEach(img => {
    const f = img.getAttribute('data-faction');
    img.classList.toggle('selected', f === single);
  });
  const sel = document.getElementById('faction-select');
  if (sel) {
    Array.from(sel.options).forEach(opt => {
      opt.selected = opt.value === single;
    });
  }
  applyFavoriteFactionBackground(single || null);
}

function ensurePlayerDecks(user) {
  if (!user) return;

  // Firestore a veces devuelve arrays como objetos {0:...,1:...}
  let rawDecks = user.decks;
  if (rawDecks && !Array.isArray(rawDecks) && typeof rawDecks === 'object') {
    rawDecks = Object.keys(rawDecks).sort((a, b) => Number(a) - Number(b)).map(k => rawDecks[k]);
  }

  if (!Array.isArray(rawDecks) || rawDecks.length === 0) {
    const legacy = normalizeBakuList(user.bakugan || [{}, {}, {}]);
    user.decks = [
      { name: 'Deck 1', bakugan: legacy },
      { name: 'Deck 2', bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] },
      { name: 'Deck 3', bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] }
    ];
  } else {
    user.decks = rawDecks.slice(0, 3).map((d, i) => ({
      name: (d && d.name) ? d.name : `Deck ${i + 1}`,
      bakugan: normalizeBakuList(d && d.bakugan)
    }));
    while (user.decks.length < 3) {
      user.decks.push({ name: `Deck ${user.decks.length + 1}`, bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] });
    }
  }

  if (user.activeDeck == null || user.activeDeck < 0 || user.activeDeck > 2) {
    user.activeDeck = 0;
  }

  // Si el deck activo está vacío y hay bakugan legacy, recuperarlos
  const active = user.decks[user.activeDeck];
  const activeEmpty = !active.bakugan.some(b => b && (b.name || b.bpower || b.damage));
  const legacy = normalizeBakuList(user.bakugan || []);
  if (activeEmpty && legacy.some(b => b && (b.name || b.bpower || b.damage))) {
    user.decks[user.activeDeck].bakugan = legacy;
  }

  // Compat: bakugan = deck activo
  user.bakugan = user.decks[user.activeDeck].bakugan;
}

function getActiveBakugan(user) {
  ensurePlayerDecks(user);
  return user.decks[user.activeDeck].bakugan;
}

function getActiveDeckName(user) {
  ensurePlayerDecks(user);
  return user.decks[user.activeDeck].name || `Deck ${user.activeDeck + 1}`;
}

let profileDeckIndex = 0;
let profileDecksCache = null;

function getRank(points) {
  if (points >= 3500) return { name: t('rank.rey'), cls: 'rank-rey', badge: 'Insignea_rey_07.png' };
  if (points >= 1600) return { name: t('rank.diamante'), cls: 'rank-diamante', badge: 'Insignea_platino_05.png' };
  if (points >= 1000) return { name: t('rank.oro'), cls: 'rank-oro', badge: 'Insignea_Oro_04.png' };
  if (points >= 500)  return { name: t('rank.plata'), cls: 'rank-plata', badge: 'Insignea_plata_03.png' };
  if (points >= 200)  return { name: t('rank.bronce'), cls: 'rank-bronce', badge: 'Insignea_bronce_02.png' };
  return { name: t('rank.novato'), cls: 'rank-novato', badge: 'Insignea_Novato_01.png' };
}

function isPngAvatar(src) {
  return /\.png(\?|$)/i.test(String(src || ''));
}

function applyAvatarFit(img, src) {
  if (!img) return;
  if (src) img.src = src;
  const path = src || img.getAttribute('src') || '';
  img.classList.toggle('avatar-png', isPngAvatar(path));
}

function buildAvatarGrid() {

  const grid = document.getElementById('avatar-grid');
  if (!grid) return;
  grid.innerHTML = '';

  AVATARS.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'avatar-opt' + (selectedAvatarPath === src ? ' selected' : '') + (isPngAvatar(src) ? ' avatar-png' : '');
    img.onclick = () => {
      document.querySelectorAll('.avatar-opt').forEach(a => a.classList.remove('selected'));
      img.classList.add('selected');
      selectedAvatarPath = src;
      const profileImg = document.getElementById('profile-avatar');
      applyAvatarFit(profileImg, src);
      const panel = document.getElementById('avatar-picker-panel');
      if (panel) panel.classList.remove('open');
    };
    grid.appendChild(img);
  });
}

/* ================= AUTH: LOGIN / REGISTRO / RECUPERAR ================= */
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const showing = input.type === 'text';
  input.type = showing ? 'password' : 'text';
  if (btn) {
    const nextShow = showing; // after toggle, password is hidden again if was showing
    btn.innerHTML = nextShow
      ? '<img src="icono_clave_visualizar.png" alt="Mostrar" onerror="this.parentElement.textContent=\'👁\'" />'
      : '<img src="icono_clave_ocultar.png" alt="Ocultar" onerror="this.parentElement.textContent=\'🙈\'" />';
    btn.title = nextShow ? 'Mostrar contraseña' : 'Ocultar contraseña';
  }
}

function showAuthForm(mode) {
  const loginForm = document.getElementById('form-login');
  const regForm = document.getElementById('form-register');
  const forgotForm = document.getElementById('form-forgot');
  const btnLogin = document.getElementById('btn-show-login');
  const btnReg = document.getElementById('btn-show-register');

  loginForm.style.display = 'none';
  regForm.style.display = 'none';
  if (forgotForm) forgotForm.style.display = 'none';

  document.getElementById('login-error').style.display = 'none';
  document.getElementById('register-error').style.display = 'none';
  const forgotErr = document.getElementById('forgot-error');
  const forgotOk = document.getElementById('forgot-success');
  if (forgotErr) forgotErr.style.display = 'none';
  if (forgotOk) forgotOk.style.display = 'none';

  if (mode === 'login') {
    loginForm.style.display = 'block';
    btnLogin.style.background = 'rgba(0,240,255,0.25)';
    btnLogin.style.color = 'var(--neon-cyan)';
    btnReg.style.background = 'transparent';
    btnReg.style.color = 'rgba(0,240,255,0.5)';
  } else if (mode === 'register') {
    regForm.style.display = 'block';
    btnReg.style.background = 'rgba(0,240,255,0.25)';
    btnReg.style.color = 'var(--neon-cyan)';
    btnLogin.style.background = 'transparent';
    btnLogin.style.color = 'rgba(0,240,255,0.5)';
  } else if (mode === 'forgot') {
    if (forgotForm) forgotForm.style.display = 'block';
    btnLogin.style.background = 'transparent';
    btnLogin.style.color = 'rgba(0,240,255,0.5)';
    btnReg.style.background = 'transparent';
    btnReg.style.color = 'rgba(0,240,255,0.5)';
    const loginId = document.getElementById('login-identifier');
    const forgotId = document.getElementById('forgot-identifier');
    if (loginId && forgotId && loginId.value.trim()) {
      forgotId.value = loginId.value.trim();
    }
  }
}

function showAuthError(form, msg) {
  const map = {
    login: 'login-error',
    register: 'register-error',
    forgot: 'forgot-error'
  };
  const el = document.getElementById(map[form] || 'login-error');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  const ok = document.getElementById('forgot-success');
  if (ok) ok.style.display = 'none';
}

async function resolveEmailFromIdentifier(identifier) {
  const raw = (identifier || '').trim();
  if (!raw) return null;

  if (raw.includes('@')) {
    return raw.toLowerCase();
  }

  const snap = await db.collection('players').get();
  let found = null;
  const clean = raw.replace(/\s+/g, '');
  snap.forEach(doc => {
    const d = doc.data();
    if (
      (d.nick && d.nick.toLowerCase() === raw.toLowerCase()) ||
      (d.phone && d.phone.replace(/\s+/g, '') === clean) ||
      (d.contact && d.contact.replace(/\s+/g, '') === clean)
    ) {
      found = d;
    }
  });

  return (found && found.email) ? found.email.toLowerCase() : null;
}

async function doForgotPassword() {
  const identifier = document.getElementById('forgot-identifier').value.trim();
  const errEl = document.getElementById('forgot-error');
  const okEl = document.getElementById('forgot-success');

  if (errEl) errEl.style.display = 'none';
  if (okEl) okEl.style.display = 'none';

  if (!identifier) {
    showAuthError('forgot', 'Ingresá tu Nick, Email o Teléfono.');
    return;
  }

  try {
    const email = await resolveEmailFromIdentifier(identifier);
    if (!email) {
      showAuthError('forgot', 'No encontramos ninguna cuenta con ese Nick, email o teléfono.');
      return;
    }

    await auth.sendPasswordResetEmail(email);

    if (okEl) {
      okEl.innerHTML = `✅ Te enviamos un enlace a <strong>${email}</strong>. Revisá tu bandeja de entrada (y spam) y seguí las instrucciones para crear una nueva contraseña.`;
      okEl.style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    let msg = 'No se pudo enviar el correo de recuperación.';
    if (err.code === 'auth/user-not-found') {
      msg = 'No existe una cuenta de Firebase con ese email. Verificá que te registraste con ese correo.';
    } else if (err.code === 'auth/invalid-email') {
      msg = 'El email asociado a la cuenta no es válido.';
    } else if (err.code === 'auth/too-many-requests') {
      msg = 'Demasiados intentos. Esperá unos minutos e intentá de nuevo.';
    } else if (err.message) {
      msg += ' ' + err.message;
    }
    showAuthError('forgot', msg);
  }
}

async function doRegister() {
  const nick = document.getElementById('reg-nick').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const phone = document.getElementById('reg-phone').value.trim();
  const pass = document.getElementById('reg-password').value;
  const pass2 = document.getElementById('reg-password2').value;

  if (!nick || nick.length < 3) {
    showAuthError('register', 'El nick debe tener al menos 3 caracteres.');
    return;
  }
  if (!email || !email.includes('@')) {
    showAuthError('register', 'Ingresá un email válido.');
    return;
  }
  if (pass.length < 6) {
    showAuthError('register', 'La contraseña debe tener mínimo 6 caracteres.');
    return;
  }
  if (pass !== pass2) {
    showAuthError('register', 'Las contraseñas no coinciden.');
    return;
  }

  const nickExists = players.some(p => p.nick && p.nick.toLowerCase() === nick.toLowerCase());
  if (nickExists) {
    showAuthError('register', 'Ese Nick-name ya está en uso. Elegí otro.');
    return;
  }

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    const uid = cred.user.uid;

    const user = {
      id: uid,
      nick: nick,
      email: email,
      contact: phone || email,
      phone: phone || '',
      factions: [],
      avatar: AVATARS[0],
      bakugan: [{}, {}, {}],
      wins: 0,
      losses: 0,
      points: 0,
      createdAt: Date.now()
    };

    await saveUserToCloud(user);
  } catch (err) {
    console.error(err);
    let msg = 'Error al registrar.';
    if (err.code === 'auth/email-already-in-use') msg = 'Ese email ya está registrado. Probá iniciar sesión.';
    else if (err.code === 'auth/weak-password') msg = 'Contraseña demasiado débil.';
    else if (err.code === 'auth/invalid-email') msg = 'Email inválido.';
    showAuthError('register', msg);
  }
}

async function doLogin() {
  const identifier = document.getElementById('login-identifier').value.trim();
  const pass = document.getElementById('login-password').value;

  if (!identifier || !pass) {
    showAuthError('login', 'Completá todos los campos.');
    return;
  }

  try {
    let emailToUse = null;

    if (identifier.includes('@')) {
      emailToUse = identifier.toLowerCase();
    } else {
      const snap = await db.collection('players').get();
      let found = null;
      snap.forEach(doc => {
        const d = doc.data();
        if (
          (d.nick && d.nick.toLowerCase() === identifier.toLowerCase()) ||
          (d.phone && d.phone.replace(/\s+/g, '') === identifier.replace(/\s+/g, '')) ||
          (d.contact && d.contact.replace(/\s+/g, '') === identifier.replace(/\s+/g, ''))
        ) {
          found = d;
        }
      });

      if (!found || !found.email) {
        showAuthError('login', 'No se encontró ninguna cuenta con ese Nick, email o teléfono.');
        return;
      }
      emailToUse = found.email;
    }

    await auth.signInWithEmailAndPassword(emailToUse, pass);
  } catch (err) {
    console.error(err);
    let msg = 'Error al iniciar sesión.';
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
      msg = 'Nick/Email/Teléfono o contraseña incorrectos.';
    } else if (err.code === 'auth/too-many-requests') {
      msg = 'Demasiados intentos. Esperá un momento.';
    }
    showAuthError('login', msg);
  }
}

function openLoginOverlay() {
  const ws = document.getElementById('welcome-screen');
  if (ws) {
    ws.classList.remove('hidden');
    showAuthForm('login');
  }
}

function closeLoginOverlay() {
  const ws = document.getElementById('welcome-screen');
  if (ws) ws.classList.add('hidden');
}

function handleAuthFabClick() {
  if (currentUserId) {
    logout();
  } else {
    openLoginOverlay();
  }
}

function updateAuthFabUI() {
  const settingsAuth = document.getElementById('settings-auth-btn');
  const banner = document.getElementById('visitor-banner');
  const perfilTab = document.getElementById('tab-perfil-btn');
  const histTab = document.getElementById('tab-historial-btn');

  if (currentUserId) {
    document.body.classList.remove('visitor-mode');
    if (settingsAuth) {
      settingsAuth.innerHTML = '<img src="icono_deslogueo.png" class="btn-icon-inline" alt="" onerror="this.style.display=\'none\'" /><span data-i18n="settings.logout">' + t('settings.logout') + '</span>';
      settingsAuth.onclick = () => { closeSettingsPanel(); logout(); };
    }
    if (banner) banner.style.display = 'none';
    if (perfilTab) perfilTab.style.display = '';
    if (histTab) histTab.style.display = '';
  } else {
    document.body.classList.add('visitor-mode');
    if (settingsAuth) {
      settingsAuth.innerHTML = '<img src="icono_loguear.png" class="btn-icon-inline" alt="" onerror="this.style.display=\'none\'" /><span data-i18n="settings.login">' + t('settings.login') + '</span>';
      settingsAuth.onclick = () => { closeSettingsPanel(); openLoginOverlay(); };
    }
    if (banner) banner.style.display = 'block';
    if (perfilTab) perfilTab.style.display = 'none';
    if (histTab) histTab.style.display = 'none';
  }
}

function enterVisitorMode() {
  currentUserId = null;
  isAdminMode = false;
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('main-app').style.display = 'flex';
  updateAuthFabUI();
  const tabAdmin = document.getElementById('tab-admin-btn');
  if (tabAdmin) tabAdmin.style.display = 'none';
  const bubble = document.getElementById('guide-bubble');
  if (bubble) bubble.style.display = 'none';
  renderRanking();
  renderNews();
  switchTab('liga');
  playLobbyMusic();
  // Presentación de la página: solo en modo visita (y solo 1 vez por navegador)
  const seen = localStorage.getItem('bakugan_page_guide_done') === '1';
  if (!seen) {
    guideFinished = false;
    startGuide();
  } else {
    finishGuide(true);
  }
}

function enterApp() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('main-app').style.display = 'flex';
  updateAuthFabUI();
  buildAvatarGrid();
  renderProfile();
  renderRanking();
  renderNews();
  applyAdminAccess();
  switchTab('perfil');
  // Usuarios logueados: sin presentación automática de Lady Fenne
  stopGuidePresentation();
  finishGuide(true); // deja el ícono de ayuda (?) disponible, sin hablar solo
  playLobbyMusic();
}

function logout() {
  if (confirm(t('logout.confirm'))) {
    stopAllMusic();
    leaveDuelRoom(true);
    auth.signOut();
  }
}

function toggleSettingsPanel() {
  unlockMusic();
  const panel = document.getElementById('settings-panel');
  if (panel) panel.classList.toggle('open');
}

function closeSettingsPanel() {
  const panel = document.getElementById('settings-panel');
  if (panel) panel.classList.remove('open');
}

/* ================= MÚSICA DE FONDO ================= */
let musicMuted = localStorage.getItem('bakugan_music_muted') === '1';
let musicVolume = parseInt(localStorage.getItem('bakugan_music_volume') || '40', 10);
let musicUnlocked = false;
let currentMusicMode = null; // 'lobby' | 'battle'

function getLobbyAudio() { return document.getElementById('audio-lobby'); }
function getBattleAudio() { return document.getElementById('audio-battle'); }

function applyVolumeToAudios() {
  const vol = musicMuted ? 0 : Math.max(0, Math.min(1, musicVolume / 100));
  const lobby = getLobbyAudio();
  const battle = getBattleAudio();
  if (lobby) lobby.volume = vol;
  if (battle) battle.volume = vol;
  const muteBtn = document.getElementById('audio-mute-btn');
  if (muteBtn) muteBtn.textContent = musicMuted ? t('settings.unmute') : t('settings.mute');
  const slider = document.getElementById('audio-volume');
  if (slider) slider.value = String(musicVolume);
  // Panel de audio dentro de la arena
  const duelSlider = document.getElementById('duel-volume-slider');
  if (duelSlider) duelSlider.value = String(musicVolume);
  const duelMute = document.getElementById('duel-mute-btn');
  if (duelMute) duelMute.textContent = musicMuted ? t('settings.unmute') : t('settings.mute');
  const duelAudioBtn = document.getElementById('duel-audio-btn');
  if (duelAudioBtn) duelAudioBtn.textContent = musicMuted ? '🔇' : '🔊';
}

function toggleDuelAudioPanel() {
  const panel = document.getElementById('duel-audio-panel');
  if (!panel) return;
  const open = panel.style.display === 'block';
  panel.style.display = open ? 'none' : 'block';
  if (!open) applyVolumeToAudios();
}

function setVolumeFromDuel(val) {
  setMusicVolume(val);
}

function toggleMuteFromDuel() {
  toggleMute();
}

function unlockMusic() {
  if (musicUnlocked) return;
  musicUnlocked = true;
  // Intento silencioso para desbloquear autoplay en móviles
  const a = getLobbyAudio();
  if (a) {
    a.play().then(() => {
      if (currentMusicMode !== 'lobby') a.pause();
    }).catch(() => {});
  }
}

function stopAllMusic() {
  const lobby = getLobbyAudio();
  const battle = getBattleAudio();
  if (lobby) { lobby.pause(); lobby.currentTime = 0; }
  if (battle) { battle.pause(); battle.currentTime = 0; }
  currentMusicMode = null;
}

function playLobbyMusic() {
  applyVolumeToAudios();
  const lobby = getLobbyAudio();
  const battle = getBattleAudio();
  if (battle) { battle.pause(); battle.currentTime = 0; }
  currentMusicMode = 'lobby';
  if (!lobby || musicMuted) return;
  lobby.play().catch(() => {
    // Autoplay bloqueado: se activará al primer toque
  });
}

function playBattleMusic() {
  applyVolumeToAudios();
  const lobby = getLobbyAudio();
  const battle = getBattleAudio();
  if (lobby) { lobby.pause(); lobby.currentTime = 0; }
  currentMusicMode = 'battle';
  if (!battle || musicMuted) return;
  battle.play().catch(() => {});
}

function setMusicVolume(val) {
  musicVolume = parseInt(val, 10) || 0;
  localStorage.setItem('bakugan_music_volume', String(musicVolume));
  if (musicVolume > 0 && musicMuted) {
    musicMuted = false;
    localStorage.setItem('bakugan_music_muted', '0');
  }
  applyVolumeToAudios();
  if (!musicMuted && currentMusicMode === 'lobby') playLobbyMusic();
  if (!musicMuted && currentMusicMode === 'battle') playBattleMusic();
}

function toggleMute() {
  musicMuted = !musicMuted;
  localStorage.setItem('bakugan_music_muted', musicMuted ? '1' : '0');
  applyVolumeToAudios();
  if (musicMuted) {
    const lobby = getLobbyAudio();
    const battle = getBattleAudio();
    if (lobby) lobby.pause();
    if (battle) battle.pause();
  } else if (currentMusicMode === 'battle') {
    playBattleMusic();
  } else {
    playLobbyMusic();
  }
}

// Cerrar panel de ajustes al tocar afuera
document.addEventListener('click', (e) => {
  const settingsPanel = document.getElementById('settings-panel');
  const settingsFab = document.getElementById('settings-fab-btn');
  if (settingsPanel && settingsPanel.classList.contains('open')) {
    if (!settingsPanel.contains(e.target) && !(settingsFab && settingsFab.contains(e.target))) {
      settingsPanel.classList.remove('open');
    }
  }
});

// Desbloquear audio con el primer toque en la página
document.addEventListener('pointerdown', () => {
  unlockMusic();
  if (currentMusicMode === 'lobby') playLobbyMusic();
  if (currentMusicMode === 'battle') playBattleMusic();
}, { once: true });

function selectBakuganFaction(bakuIndex, factionName, element) {
  const container = element.parentElement;
  const slot = container.getAttribute('data-slot') || '1';
  const isFusion = document.getElementById(`baku${bakuIndex}-isFusion`).value === '1';

  if (slot === '2') {
    // Segunda facción (solo fusión)
    document.getElementById(`baku${bakuIndex}-faction2`).value = factionName;
    container.querySelectorAll('.faction-opt').forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
    return;
  }

  // Facción principal
  const primaryEl = document.getElementById(`baku${bakuIndex}-faction`);
  // Si es fusión y tocan la misma que ya está, no-op; si quieren 2 facciones en el selector principal:
  // usamos selector principal solo para facción 1
  primaryEl.value = factionName;
  container.querySelectorAll('.faction-opt').forEach(img => img.classList.remove('selected'));
  element.classList.add('selected');
  // Si la 2ª es igual a la 1ª, limpiar 2ª
  const f2 = document.getElementById(`baku${bakuIndex}-faction2`);
  if (f2 && f2.value === factionName) f2.value = '';
}

function readBakucoreSlot(bakuIndex, slot) {
  const typeEl = document.getElementById(`baku${bakuIndex}-core${slot}-type`);
  const variantEl = document.getElementById(`baku${bakuIndex}-core${slot}-variantId`);
  if (!typeEl && !variantEl) return emptyBakucore();
  const flag = (id) => ((document.getElementById(id) || {}).value === '1');
  const val = (id) => ((document.getElementById(id) || {}).value || '');
  const variantId = val(`baku${bakuIndex}-core${slot}-variantId`);
  // Preferir datos del catálogo si hay variantId (fuente de verdad para la arena)
  if (variantId && typeof findCoreVariant === 'function') {
    const cat = findCoreVariant(variantId);
    if (cat) {
      return {
        variantId: cat.id,
        type: cat.type || (typeEl ? typeEl.value : '') || '',
        bpower: cat.bpower != null ? cat.bpower : val(`baku${bakuIndex}-core${slot}-bpower`),
        damage: cat.damage != null ? cat.damage : val(`baku${bakuIndex}-core${slot}-damage`),
        energyDelta: cat.energyDelta != null ? cat.energyDelta : val(`baku${bakuIndex}-core${slot}-energyDelta`),
        fusionBpower: cat.fusionBpower != null ? cat.fusionBpower : val(`baku${bakuIndex}-core${slot}-fusionBpower`),
        fusionDamage: cat.fusionDamage != null ? cat.fusionDamage : val(`baku${bakuIndex}-core${slot}-fusionDamage`),
        restrictFaction: cat.restrictFaction || val(`baku${bakuIndex}-core${slot}-restrictFaction`),
        restrictFaction2: cat.restrictFaction2 || val(`baku${bakuIndex}-core${slot}-restrictFaction2`),
        factionBpower: cat.factionBpower != null ? cat.factionBpower : val(`baku${bakuIndex}-core${slot}-factionBpower`),
        factionDamage: cat.factionDamage != null ? cat.factionDamage : val(`baku${bakuIndex}-core${slot}-factionDamage`),
        requiresFusion: !!cat.requiresFusion,
        requiresGear: !!cat.requiresGear,
        shadowStrike: !!cat.shadowStrike,
        frostStrike: !!cat.frostStrike,
        frostValue: cat.frostValue != null ? cat.frostValue : val(`baku${bakuIndex}-core${slot}-frostValue`),
        doubleStrike: !!cat.doubleStrike
      };
    }
  }
  return {
    variantId: variantId || '',
    type: (typeEl && typeEl.value) || '',
    bpower: val(`baku${bakuIndex}-core${slot}-bpower`),
    damage: val(`baku${bakuIndex}-core${slot}-damage`),
    energyDelta: val(`baku${bakuIndex}-core${slot}-energyDelta`),
    fusionBpower: val(`baku${bakuIndex}-core${slot}-fusionBpower`),
    fusionDamage: val(`baku${bakuIndex}-core${slot}-fusionDamage`),
    restrictFaction: val(`baku${bakuIndex}-core${slot}-restrictFaction`),
    restrictFaction2: val(`baku${bakuIndex}-core${slot}-restrictFaction2`),
    factionBpower: val(`baku${bakuIndex}-core${slot}-factionBpower`),
    factionDamage: val(`baku${bakuIndex}-core${slot}-factionDamage`),
    requiresFusion: flag(`baku${bakuIndex}-core${slot}-requiresFusion`),
    requiresGear: flag(`baku${bakuIndex}-core${slot}-requiresGear`),
    shadowStrike: flag(`baku${bakuIndex}-core${slot}-shadowStrike`),
    frostStrike: flag(`baku${bakuIndex}-core${slot}-frostStrike`),
    frostValue: val(`baku${bakuIndex}-core${slot}-frostValue`),
    doubleStrike: flag(`baku${bakuIndex}-core${slot}-doubleStrike`)
  };
}

function readBakuganEditors() {
  return [1, 2, 3].map(i => {
    const nameEl = document.getElementById(`baku${i}-name`);
    if (!nameEl) return emptyBaku();
    return {
      name: nameEl.value.trim(),
      bpower: document.getElementById(`baku${i}-bpower`).value,
      damage: document.getElementById(`baku${i}-damage`).value,
      faction: document.getElementById(`baku${i}-faction`).value,
      faction2: document.getElementById(`baku${i}-faction2`).value,
      isFusion: document.getElementById(`baku${i}-isFusion`).value === '1',
      isEvo: document.getElementById(`baku${i}-isEvo`).value === '1',
      fusionBpower: document.getElementById(`baku${i}-fusion-bpower`).value,
      fusionDamage: document.getElementById(`baku${i}-fusion-damage`).value,
      evoBpower: document.getElementById(`baku${i}-evo-bpower`).value,
      evoDamage: document.getElementById(`baku${i}-evo-damage`).value,
      bakucores: [readBakucoreSlot(i, 1), readBakucoreSlot(i, 2)]
    };
  });
}

function fillBakuganEditors(bakuList) {
  buildBakuganEditorsHtml();
  const list = normalizeBakuList(bakuList);
  [1, 2, 3].forEach(i => {
    const item = list[i - 1] || emptyBaku();
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    set(`baku${i}-name`, item.name || '');
    set(`baku${i}-bpower`, item.bpower || '');
    set(`baku${i}-damage`, item.damage || '');
    set(`baku${i}-faction`, item.faction || '');
    set(`baku${i}-faction2`, item.faction2 || '');
    set(`baku${i}-isFusion`, item.isFusion ? '1' : '0');
    set(`baku${i}-isEvo`, item.isEvo ? '1' : '0');
    set(`baku${i}-fusion-bpower`, item.fusionBpower || '');
    set(`baku${i}-fusion-damage`, item.fusionDamage || '');
    set(`baku${i}-evo-bpower`, item.evoBpower || '');
    set(`baku${i}-evo-damage`, item.evoDamage || '');

    // Marcar facciones visualmente
    const primarySel = document.querySelector(`.baku-faction-selector[data-baku-index="${i}"][data-slot="1"]`);
    if (primarySel) {
      primarySel.querySelectorAll('.faction-opt').forEach(img => {
        img.classList.toggle('selected', img.getAttribute('data-faction') === (item.faction || ''));
      });
    }
    const secondSel = document.querySelector(`.baku-faction-selector[data-baku-index="${i}"][data-slot="2"]`);
    if (secondSel) {
      secondSel.querySelectorAll('.faction-opt').forEach(img => {
        img.classList.toggle('selected', img.getAttribute('data-faction') === (item.faction2 || ''));
      });
    }
    refreshBakuFormUI(i);

    const cores = normalizeBakucores(item.bakucores);
    [1, 2].forEach(slot => {
      const core = cores[slot - 1] || emptyBakucore();
      set(`baku${i}-core${slot}-variantId`, core.variantId || '');
      set(`baku${i}-core${slot}-type`, core.type || '');
      set(`baku${i}-core${slot}-bpower`, core.bpower || '');
      set(`baku${i}-core${slot}-damage`, core.damage || '');
      set(`baku${i}-core${slot}-energyDelta`, core.energyDelta || '');
      set(`baku${i}-core${slot}-fusionBpower`, core.fusionBpower || '');
      set(`baku${i}-core${slot}-fusionDamage`, core.fusionDamage || '');
      set(`baku${i}-core${slot}-restrictFaction`, core.restrictFaction || '');
      set(`baku${i}-core${slot}-restrictFaction2`, core.restrictFaction2 || '');
      set(`baku${i}-core${slot}-factionBpower`, core.factionBpower || '');
      set(`baku${i}-core${slot}-factionDamage`, core.factionDamage || '');
      set(`baku${i}-core${slot}-requiresFusion`, core.requiresFusion ? '1' : '0');
      set(`baku${i}-core${slot}-requiresGear`, core.requiresGear ? '1' : '0');
      set(`baku${i}-core${slot}-shadowStrike`, core.shadowStrike ? '1' : '0');
      set(`baku${i}-core${slot}-frostStrike`, core.frostStrike ? '1' : '0');
      set(`baku${i}-core${slot}-frostValue`, core.frostValue || '');
      set(`baku${i}-core${slot}-doubleStrike`, core.doubleStrike ? '1' : '0');
      applyBakucoreUI(i, slot, core.type || '', core.restrictFaction || '', core.restrictFaction2 || '');
      updateBakucoreSelectedPreview(i, slot, core.variantId || '');
      refreshBakucoreVariantPicker(i, slot);
      const title = document.getElementById(`baku${i}-core${slot}-title`);
      if (title) title.textContent = core.variantId ? (`Bakucore ${slot}: ${core.variantId}`) : (`Bakucore ${slot}`);
    });
  });
}

function persistCurrentProfileDeckEditors() {
  if (!profileDecksCache) return;
  const nameInput = document.getElementById('deck-name-input');
  profileDecksCache[profileDeckIndex] = {
    name: (nameInput && nameInput.value.trim()) || `Deck ${profileDeckIndex + 1}`,
    bakugan: readBakuganEditors()
  };
}

function switchProfileDeck(index, skipPersist) {
  // Al cargar desde la nube NO debemos guardar el formulario vacío encima del cache
  if (!skipPersist) persistCurrentProfileDeckEditors();
  profileDeckIndex = index;
  if (!profileDecksCache) {
    profileDecksCache = [
      { name: 'Deck 1', bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] },
      { name: 'Deck 2', bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] },
      { name: 'Deck 3', bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] }
    ];
  }
  document.querySelectorAll('.deck-tab-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.deck, 10) === index);
  });
  const deck = profileDecksCache[index] || { name: `Deck ${index + 1}`, bakugan: [emptyBaku(), emptyBaku(), emptyBaku()] };
  const nameInput = document.getElementById('deck-name-input');
  if (nameInput) nameInput.value = deck.name || `Deck ${index + 1}`;
  fillBakuganEditors(deck.bakugan);
  updateActiveDeckLabel();
}

function updateActiveDeckLabel() {
  const user = players.find(p => p.id === currentUserId);
  const label = document.getElementById('active-deck-label');
  if (!label) return;
  const active = user && user.activeDeck != null ? user.activeDeck : 0;
  const name = (profileDecksCache && profileDecksCache[active] && profileDecksCache[active].name) || `Deck ${active + 1}`;
  label.textContent = `Deck activo para duelos: ${name}`;
  const btn = document.getElementById('btn-set-active-deck');
  if (btn) {
    btn.textContent = profileDeckIndex === active ? '⭐ Este es el deck activo' : '⭐ Usar este deck en duelo';
  }
}

function setActiveDeckFromProfile() {
  const user = players.find(p => p.id === currentUserId);
  if (!user) return;
  persistCurrentProfileDeckEditors();
  user.activeDeck = profileDeckIndex;
  updateActiveDeckLabel();
  alert(`Deck activo: ${profileDecksCache[profileDeckIndex].name || ('Deck ' + (profileDeckIndex + 1))}`);
}

function renderProfile() {
  let user = players.find(p => p.id === currentUserId);
  if (!user) return;

  ensurePlayerDecks(user);
  selectedAvatarPath = user.avatar || AVATARS[0];

  const profileAvatar = document.getElementById('profile-avatar');
  applyAvatarFit(profileAvatar, selectedAvatarPath);
  buildAvatarGrid();

  document.getElementById('profile-nick-display').textContent = user.nick || 'Brawler';
  document.getElementById('nick-edit-input').value = user.nick || '';
  document.getElementById('profile-id').textContent = 'ID: ' + (user.id || '---');
  document.getElementById('contact-input').value = user.contact || '';

  const sel = document.getElementById('faction-select');
  if (sel) {
    Array.from(sel.options).forEach(opt => {
      opt.selected = (user.factions || []).includes(opt.value);
    });
  }
  syncPrefFactionIcons(user.factions || []);

  // Cache local de decks para editar sin perder cambios al cambiar pestaña
  // Deep copy para no mutar el objeto de players
  profileDecksCache = (user.decks || []).map((d, i) => ({
    name: (d && d.name) ? d.name : `Deck ${i + 1}`,
    bakugan: normalizeBakuList(d && d.bakugan)
  }));
  while (profileDecksCache.length < 3) {
    profileDecksCache.push({
      name: `Deck ${profileDecksCache.length + 1}`,
      bakugan: [emptyBaku(), emptyBaku(), emptyBaku()]
    });
  }
  // Si el deck activo está vacío pero existe user.bakugan legacy con datos, recuperarlos
  const activeIdx = (user.activeDeck != null && user.activeDeck >= 0 && user.activeDeck <= 2) ? user.activeDeck : 0;
  const activeEmpty = !profileDecksCache[activeIdx].bakugan.some(b => b && (b.name || b.bpower || b.damage));
  const legacy = normalizeBakuList(user.bakugan || []);
  const legacyHasData = legacy.some(b => b && (b.name || b.bpower || b.damage));
  if (activeEmpty && legacyHasData) {
    profileDecksCache[activeIdx].bakugan = legacy;
    if (!profileDecksCache[activeIdx].name || profileDecksCache[activeIdx].name === `Deck ${activeIdx + 1}`) {
      // mantener nombre si ya había uno en decks
    }
  }
  profileDeckIndex = activeIdx;
  switchProfileDeck(activeIdx, true); // true = no pisar cache con inputs vacíos

  recalculatePoints(user);
  const r = getRank(user.points || 0);

  document.getElementById('stat-points').textContent = user.points || 0;
  document.getElementById('stat-wins').textContent = user.wins || 0;
  document.getElementById('stat-losses').textContent = user.losses || 0;
  document.getElementById('stat-rank').textContent = r.name.toUpperCase();

  const badgeImg = document.getElementById('stat-rank-badge');
  if (badgeImg) badgeImg.src = r.badge;
}

async function saveProfile() {
  let user = players.find(p => p.id === currentUserId);
  if (!user) return;

  const newNick = document.getElementById('nick-edit-input').value.trim();
  if (newNick && newNick !== user.nick) {
    const taken = players.some(p => p.id !== currentUserId && p.nick && p.nick.toLowerCase() === newNick.toLowerCase());
    if (taken) {
      alert('Ese Nick-name ya está en uso por otro brawler.');
      return;
    }
    user.nick = newNick;
  }

  const contactVal = document.getElementById('contact-input').value.trim();
  user.contact = contactVal;
  if (contactVal && !contactVal.includes('@')) {
    user.phone = contactVal;
  }

  const sel = document.getElementById('faction-select');
  const chosen = Array.from(sel.selectedOptions).map(o => o.value).filter(Boolean);
  user.factions = chosen.length ? [chosen[0]] : [];
  user.avatar = selectedAvatarPath;

  persistCurrentProfileDeckEditors();
  ensurePlayerDecks(user);
  user.decks = profileDecksCache.map((d, i) => ({
    name: d.name || `Deck ${i + 1}`,
    bakugan: normalizeBakuList(d.bakugan)
  }));
  if (user.activeDeck == null) user.activeDeck = 0;
  user.bakugan = user.decks[user.activeDeck].bakugan;

  const payload = { ...user };
  delete payload.isAdmin;

  await db.collection("players").doc(user.id).set(payload, { merge: true });
  alert('¡Perfil actualizado con éxito!');
}

function renderRanking() {
  const tbody = document.getElementById('rank-body');
  if (!tbody) return;

  const sorted = [...players].sort((a, b) => {
    recalculatePoints(a);
    recalculatePoints(b);
    return (b.points || 0) - (a.points || 0);
  });

  tbody.innerHTML = '';
  sorted.forEach((p, index) => {
    recalculatePoints(p);
    const r = getRank(p.points || 0);
    const isMe = p.id === currentUserId;

    const tr = document.createElement('tr');
    tr.className = 'rank-row-interactive';
    if (isMe) tr.style.background = 'rgba(0, 240, 255, 0.08)';

    tr.onclick = (e) => {
      if (!e.target.classList.contains('btn')) {
        openPlayerModal(p);
      }
    };

    const avatarSrc = p.avatar || (typeof AVATARS !== 'undefined' && AVATARS[0]) || 'dragonoid_diamante_icon.jpg';
    const shortId = (p.id || '').length > 10 ? (p.id || '').slice(0, 6) + '…' : (p.id || '');

    tr.innerHTML = `
      <td style="font-family:'Orbitron'; font-weight:bold; font-size:0.75rem; color:var(--neon-cyan);">#${index + 1}</td>
      <td>
        <div class="rank-player-cell">
          <img src="${avatarSrc}" loading="lazy" decoding="async" class="rank-avatar${/\.png(\?|$)/i.test(avatarSrc||'') ? ' avatar-png' : ''}" alt=""
               onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Cpolygon points=%2212,2 28,2 38,20 28,38 12,38 2,20%22 fill=%22%230a1525%22 stroke=%22%2300f0ff%22 stroke-width=%221.5%22/%3E%3C/svg%3E';" />
          <div style="min-width:0; flex:1;">
            <div class="rank-nick" style="color:${isMe ? 'var(--neon-cyan)' : '#fff'};">${p.nick || 'Brawler'}</div>
            <div class="rank-id-short">${shortId}</div>
          </div>
        </div>
      </td>
      <td style="font-family:'Orbitron'; font-weight:bold; color:var(--neon-cyan); font-size:0.85rem;">${p.points || 0}</td>
      <td style="font-size:0.7rem; white-space:nowrap;">${p.wins || 0}V/${p.losses || 0}D</td>
      <td>
        <span class="rank-badge ${r.cls}">
          <img src="${r.badge}" class="rank-badge-img-table" onerror="this.style.display='none'" />
          ${r.name}
        </span>
      </td>
      <td style="text-align:right;">
        <button class="btn btn-sm btn-duel" onclick="event.stopPropagation(); openDuelModal('${p.id}')">⚔️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* ================= VENTANA MODAL VER BRAWLER ================= */
async function openPlayerModal(player) {
  if (player && typeof player === 'string' && typeof ensurePlayerLoaded === 'function') {
    player = await ensurePlayerLoaded(player) || { id: player };
  } else if (player && player.id && typeof ensurePlayerLoaded === 'function') {
    player = (await ensurePlayerLoaded(player.id)) || player;
  }
  if (!player) return;
  recalculatePoints(player);
  const r = getRank(player.points || 0);

  applyAvatarFit(document.getElementById('modal-avatar'), player.avatar || AVATARS[0]);
  document.getElementById('modal-nick').textContent = player.nick || 'Brawler';
  document.getElementById('modal-rank-img').src = r.badge;
  document.getElementById('modal-rank-title').textContent = r.name.toUpperCase();

  const bakuContainer = document.getElementById('modal-bakugan-list');
  bakuContainer.innerHTML = '';

  ensurePlayerDecks(player);
  const activeName = getActiveDeckName(player);
  const bakuList = getActiveBakugan(player);
  const hasAny = bakuList.some(b => b && (b.name || b.bpower || b.damage));
  if (!hasAny) {
    bakuContainer.innerHTML = `<div style="font-size:0.75rem; opacity:0.6;">Sin Bakugan registrados</div>`;
  } else {
    const title = document.createElement('div');
    title.style.cssText = 'font-size:0.7rem; opacity:0.7; margin-bottom:6px;';
    title.textContent = 'Deck activo: ' + activeName;
    bakuContainer.appendChild(title);
    bakuList.forEach((b, idx) => {
      if (b && (b.name || b.bpower || b.damage)) {
        const item = document.createElement('div');
        item.className = 'modal-bakugan-item';
        const badges = [];
        if (b.isFusion) badges.push('<span style="color:var(--neon-magenta);font-size:0.65rem;display:inline-flex;align-items:center;gap:3px;"><img src="logo_fusion.png" style="width:12px;height:12px;object-fit:contain;" onerror="this.style.display=\'none\'" />Fusión</span>');
        if (b.isEvo) badges.push('<span style="color:#ffcc55;font-size:0.65rem;display:inline-flex;align-items:center;gap:3px;"><img src="logo_diamante.png" style="width:12px;height:12px;object-fit:contain;" onerror="this.style.display=\'none\'" />Evo</span>');
        const facStr = b.faction2 ? `${b.faction}/${b.faction2}` : b.faction;
        item.innerHTML = `
          <div style="display:flex;align-items:center;gap:6px;justify-content:center;flex-wrap:wrap;">
            <strong>#${idx + 1} ${b.name || 'Desconocido'}</strong>
            ${typeof factionIconHtml === 'function' ? factionIconHtml(facStr, 18) : (facStr || '')}
            ${badges.join(' ')}
          </div>
          <div style="font-size:0.8rem; color:var(--neon-cyan); margin-top:4px; display:flex; justify-content:center; gap:8px; align-items:center;">
            ${typeof statsLineHtml === 'function' ? statsLineHtml(b.bpower || 0, b.damage || 0, 15) : ((b.bpower || 0) + ' / ' + (b.damage || 0))}
          </div>
        `;
        bakuContainer.appendChild(item);
      }
    });
  }

  const facContainer = document.getElementById('modal-factions-list');
  facContainer.innerHTML = '';
  const facList = player.factions || [];
  if (facList.length === 0) {
    facContainer.innerHTML = `<div style="font-size:0.75rem; opacity:0.6;">Sin facciones seleccionadas</div>`;
  } else {
    facList.forEach(f => {
      const tag = document.createElement('span');
      tag.className = 'modal-faction-tag';
      tag.style.display = 'inline-flex';
      tag.style.alignItems = 'center';
      tag.style.gap = '4px';
      tag.innerHTML = (typeof factionIconHtml === 'function' ? factionIconHtml(f, 16) : '') + ' ' + f;
      facContainer.appendChild(tag);
    });
  }

  document.getElementById('player-modal-overlay').classList.add('active');
}

function closePlayerModal(e) {
  if (e.target.id === 'player-modal-overlay') {
    document.getElementById('player-modal-overlay').classList.remove('active');
  }
}

function closePlayerModalDirect() {
  document.getElementById('player-modal-overlay').classList.remove('active');
}

/* ================= PANEL DE ADMINISTRACIÓN (solo cuentas con isAdmin: true) ================= */
function applyAdminAccess() {
  const me = players.find(p => p.id === currentUserId);
  const allowed = !!(me && me.isAdmin === true);
  isAdminMode = allowed;

  const tab = document.getElementById('tab-admin-btn');
  if (tab) {
    tab.style.display = allowed ? 'block' : 'none';
  }

  // Si estaba en admin y le quitaron el permiso, volver a perfil
  if (!allowed) {
    const adminSec = document.getElementById('sec-admin');
    if (adminSec && adminSec.classList.contains('active')) {
      switchTab('perfil');
    }
  } else {
    // Carga completa solo para admin (una lectura, sin listener eterno de toda la colección)
    if (typeof loadAllPlayersForAdmin === 'function') {
      loadAllPlayersForAdmin().then(() => {
        renderAdminPanel();
        renderAdminNewsList();
      });
    } else {
      renderAdminPanel();
      renderAdminNewsList();
    }
  }
}

function renderAdminPanel() {
  const tbody = document.getElementById('admin-players-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  players.forEach(p => {
    recalculatePoints(p);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <strong>${p.nick}</strong><br>
        <span style="font-size:0.65rem; color:rgba(0,240,255,0.6);">${p.id}</span>
      </td>
      <td>${p.wins || 0} / ${p.losses || 0}</td>
      <td style="color:var(--neon-cyan); font-weight:bold;">${p.points || 0}</td>
      <td>
        <div style="display:flex; gap:4px; flex-wrap:wrap;">
          <button class="btn btn-sm" onclick="adjustStats('${p.id}', 1, 0)">+1 Vict</button>
          <button class="btn btn-sm btn-danger" onclick="adjustStats('${p.id}', 0, 1)">+1 Derrot</button>
          <button class="btn btn-sm btn-danger" style="background:#ff0033; color:#fff;" onclick="deletePlayer('${p.id}')">🗑️ ELIMINAR</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function adjustStats(userId, winsToAdd, lossesToAdd) {
  const p = players.find(x => x.id === userId);
  if (!p) return;
  p.wins = (p.wins || 0) + winsToAdd;
  p.losses = (p.losses || 0) + lossesToAdd;
  // Admin: victoria normal +50 / derrota normal -25
  p.points = Math.max(0, (p.points || 0) + (winsToAdd * 50) - (lossesToAdd * 25));
  await saveUserToCloud(p);
}

async function deletePlayer(userId) {
  const p = players.find(x => x.id === userId);
  if (!p) return;

  if (confirm(`¿Estás seguro de que deseas eliminar permanentemente al usuario ${p.nick}?`)) {
    await db.collection("players").doc(userId).delete();
    alert(`El usuario ${p.nick} ha sido eliminado.`);
  }
}

async function resetSeason() {
  if (!confirm('⚠️ ATENCIÓN: Esto pondrá a 0 las victorias, derrotas y puntos de TODOS los jugadores.\n\n¿Continuar?')) {
    return;
  }

  try {
    // Leer siempre desde la nube (no solo el array local)
    const snap = await db.collection('players').get();
    if (snap.empty) {
      alert('No hay jugadores registrados para reiniciar.');
      return;
    }

    const docs = [];
    snap.forEach(doc => docs.push(doc));

    // Firestore batch: máx 500 ops. Procesamos en bloques.
    const CHUNK = 400;
    let updated = 0;
    for (let i = 0; i < docs.length; i += CHUNK) {
      const batch = db.batch();
      const slice = docs.slice(i, i + CHUNK);
      slice.forEach(doc => {
        batch.set(doc.ref, {
          wins: 0,
          losses: 0,
          points: 0
        }, { merge: true });
      });
      await batch.commit();
      updated += slice.length;
    }

    // Limpiar salas de duelo viejas (opcional pero recomendable al reiniciar liga)
    try {
      const duelSnap = await db.collection('duels').get();
      const duelDocs = [];
      duelSnap.forEach(d => duelDocs.push(d));
      for (let i = 0; i < duelDocs.length; i += CHUNK) {
        const batch = db.batch();
        duelDocs.slice(i, i + CHUNK).forEach(d => batch.delete(d.ref));
        await batch.commit();
      }
    } catch (duelErr) {
      console.warn('No se pudieron borrar todas las salas de duelo:', duelErr);
    }

    // Actualizar array local al instante
    players.forEach(p => {
      p.wins = 0;
      p.losses = 0;
      p.points = 0;
    });
    renderRanking();
    renderAdminPanel();
    if (currentUserId) renderProfile();

    alert(`✅ Temporada reiniciada.\nJugadores actualizados: ${updated}\nVictorias, derrotas y puntos en 0.`);
  } catch (e) {
    console.error(e);
    alert('Error al reiniciar la temporada: ' + (e.message || e));
  }
}

/* ================= NOTICIAS Y PUBLICACIÓN ================= */
function compressImageFile(file, maxWidth, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer la imagen'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Imagen inválida'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width;
        let h = img.height;
        const limit = maxWidth || 1000;
        if (w > limit) {
          h = Math.round((h * limit) / w);
          w = limit;
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        // JPEG comprime mucho mejor que PNG para fotos
        let dataUrl = canvas.toDataURL('image/jpeg', quality || 0.7);
        // Si sigue grande, bajar calidad
        if (dataUrl.length > 700000) {
          dataUrl = canvas.toDataURL('image/jpeg', 0.5);
        }
        if (dataUrl.length > 900000) {
          dataUrl = canvas.toDataURL('image/jpeg', 0.35);
        }
        resolve(dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

const imageInput = document.getElementById('news-image-input');
if (imageInput) {
  imageInput.addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      currentImageData = await compressImageFile(file, 1000, 0.7);
      document.getElementById('image-preview').src = currentImageData;
      document.getElementById('image-preview-container').style.display = 'block';
    } catch (err) {
      console.error(err);
      alert('No se pudo procesar la imagen. Probá con otra foto más liviana.');
      removeNewsImage();
    }
  });
}

function removeNewsImage() {
  currentImageData = "";
  document.getElementById('news-image-input').value = "";
  document.getElementById('image-preview-container').style.display = 'none';
}

async function saveNews() {
  const title = document.getElementById('news-title-input').value.trim();
  const body = document.getElementById('news-body-input').value.trim();
  const newsId = document.getElementById('news-id').value;

  if (!title || !body) {
    alert('Por favor, ingresa un título y un contenido.');
    return;
  }

  if (!auth.currentUser) {
    alert('Tenés que estar logueado para publicar noticias. Cerrá admin, iniciá sesión y volvé a entrar al panel.');
    return;
  }

  // Firestore limita ~1MB por documento; la imagen base64 no puede ser enorme
  if (currentImageData && currentImageData.length > 900000) {
    alert('La imagen sigue siendo demasiado pesada. Probá con una más chica o sin imagen.');
    return;
  }

  const newsData = {
    title,
    body,
    image: currentImageData || '',
    timestamp: Date.now(),
    authorId: auth.currentUser.uid
  };

  try {
    if (newsId) {
      await db.collection('news').doc(newsId).set(newsData, { merge: true });
    } else {
      await db.collection('news').add(newsData);
    }
    resetNewsForm();
    alert('¡Noticia guardada exitosamente!');
  } catch (e) {
    console.error('Error al guardar noticia:', e);
    let msg = 'No se pudo guardar la noticia.';
    if (e && e.code === 'permission-denied') {
      msg = 'Permiso denegado. Revisá las reglas de Firestore de la colección "news" (write solo si estás autenticado).';
    } else if (e && (e.message || '').toLowerCase().includes('size')) {
      msg = 'La noticia es demasiado grande (imagen). Usá una foto más liviana.';
    } else if (e && e.message) {
      msg += '\n' + e.message;
    }
    alert(msg);
  }
}

function editNews(id) {
  const item = newsList.find(n => n.id === id);
  if (!item) return;

  document.getElementById('news-id').value = item.id;
  document.getElementById('news-title-input').value = item.title;
  document.getElementById('news-body-input').value = item.body;
  
  if (item.image) {
    currentImageData = item.image;
    document.getElementById('image-preview').src = item.image;
    document.getElementById('image-preview-container').style.display = 'block';
  } else {
    removeNewsImage();
  }

  document.getElementById('news-form-title').textContent = 'EDITAR NOTICIA';
  document.getElementById('cancel-news-btn').style.display = 'inline-block';
}

async function deleteNews(id) {
  if (confirm('¿Eliminar esta noticia?')) {
    await db.collection("news").doc(id).delete();
  }
}

function resetNewsForm() {
  document.getElementById('news-id').value = '';
  document.getElementById('news-title-input').value = '';
  document.getElementById('news-body-input').value = '';
  removeNewsImage();
  document.getElementById('news-form-title').textContent = 'PUBLICAR NOTICIA';
  document.getElementById('cancel-news-btn').style.display = 'none';
}

function renderNews(filterText = '') {
  const container = document.getElementById('news-container');
  if (!container) return;

  const filtered = newsList.filter(n => 
    n.title.toLowerCase().includes(filterText.toLowerCase()) || 
    n.body.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; opacity:0.6;">No hay noticias disponibles.</p>`;
    return;
  }

  container.innerHTML = '';
  filtered.forEach(n => {
    const card = document.createElement('div');
    card.className = 'news-card';
    const dateStr = new Date(n.timestamp).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    card.innerHTML = `
      <div class="news-title">${n.title}</div>
      <span class="news-date">📅 ${dateStr}</span>
      <div class="news-body">${n.body}</div>
      ${n.image ? `<img src="${n.image}" class="news-img" />` : ''}
    `;
    container.appendChild(card);
  });
}

function filterNews() {
  const val = document.getElementById('news-search-input').value;
  renderNews(val);
}

function renderAdminNewsList() {
  const container = document.getElementById('admin-news-list');
  if (!container) return;

  if (newsList.length === 0) {
    container.innerHTML = `<p style="font-size:0.8rem; opacity:0.6;">No hay noticias registradas.</p>`;
    return;
  }

  container.innerHTML = '';
  newsList.forEach(n => {
    const item = document.createElement('div');
    item.style.cssText = 'background:rgba(0,0,0,0.3); padding:8px; border-radius:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;';
    item.innerHTML = `
      <div>
        <strong style="color:var(--neon-cyan); font-size:0.85rem;">${n.title}</strong>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="btn btn-sm" onclick="editNews('${n.id}')">✏️ Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteNews('${n.id}')">🗑️ Borrar</button>
      </div>
    `;
    container.appendChild(item);
  });
}

/* ================= PERSONAJE GUÍA E INTERACCIÓN (FAQ MULTI) ================= */

const FAQ_DATA = [
  { id: 1, qKey: 'faq.q1', aKey: 'faq.a1' },
  { id: 2, qKey: 'faq.q2', aKey: 'faq.a2' },
  { id: 3, qKey: 'faq.q3', aKey: 'faq.a3' },
  { id: 4, qKey: 'faq.q4', aKey: 'faq.a4' },
  { id: 5, qKey: 'faq.q5', aKey: 'faq.a5' },
  { id: 6, qKey: 'faq.q6', aKey: 'faq.a6' },
  { id: 7, qKey: 'faq.q7', aKey: 'faq.a7' },
  { id: 8, qKey: 'faq.q8', aKey: 'faq.a8' },
  { id: 9, qKey: 'faq.q9', aKey: 'faq.a9' }
];

const guideMessages = [
  'guide.m1', 'guide.m2', 'guide.m3', 'guide.m4', 'guide.m5', 'guide.m6', 'guide.m7'
];

function startGuide() {
  if (guideFinished) return;
  stopGuidePresentation();

  guideStep = 0;
  const box = document.getElementById('char-box');
  const img = document.getElementById('guide-img');

  if (box) box.classList.remove('mini');
  if (img) img.src = GUIDE_POSES[0];
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn) helpBtn.style.display = 'none';

  showNextGuide();
}

function showNextGuide() {
  const bubble = document.getElementById('guide-bubble');
  const img = document.getElementById('guide-img');
  if (!bubble) return;
  if (_guideTimer) {
    clearTimeout(_guideTimer);
    _guideTimer = null;
  }

  if (guideStep < guideMessages.length) {
    bubble.innerHTML = t(guideMessages[guideStep]) +
      '<div style="text-align:right;margin-top:8px;">' +
      '<button type="button" class="btn btn-sm" style="padding:3px 10px;font-size:0.62rem;" onclick="event.stopPropagation();finishGuide()">' +
      (typeof t === 'function' ? (t('tut.close') || 'Cerrar') : 'Cerrar') +
      '</button></div>';
    bubble.style.display = 'block';

    const pose = GUIDE_POSES[guideStep] || GUIDE_POSES[0];
    if (img) img.src = pose;

    guideStep++;

    if (guideStep < guideMessages.length) {
      _guideTimer = setTimeout(showNextGuide, 4500);
    } else {
      _guideTimer = setTimeout(() => {
        bubble.style.display = 'none';
        finishGuide();
      }, 5000);
    }
  }
}

let _guideTimer = null;

function stopGuidePresentation() {
  if (_guideTimer) {
    clearTimeout(_guideTimer);
    _guideTimer = null;
  }
  const bubble = document.getElementById('guide-bubble');
  if (bubble) bubble.style.display = 'none';
}

function finishGuide(silent) {
  stopGuidePresentation();
  guideFinished = true;
  try { localStorage.setItem('bakugan_page_guide_done', '1'); } catch (e) {}
  const box = document.getElementById('char-box');
  const img = document.getElementById('guide-img');

  if (box) box.classList.add('mini');
  if (img) img.src = GUIDE_MINI;
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn) helpBtn.style.display = 'flex';
}

function toggleGuideHelp() {
  const bubble = document.getElementById('guide-bubble');
  if (!bubble) return;

  if (!guideFinished) return;

  if (bubble.style.display === 'block') {
    closeGuideBubble();
  } else {
    showFAQMenu();
  }
}

function showFAQMenu() {
  const bubble = document.getElementById('guide-bubble');
  if (!bubble) return;

  let html = `<div style="font-weight:bold; color:var(--neon-cyan); margin-bottom:8px; border-bottom:1px solid rgba(0,240,255,0.3); padding-bottom:4px; font-family:'Orbitron'; font-size:0.75rem;">🤖 ${t('faq.title')}</div>`;
  html += `<div style="display:flex; flex-direction:column; gap:6px; max-height:200px; overflow-y:auto; padding-right:4px;">`;

  FAQ_DATA.forEach(item => {
    html += `<button class="btn btn-sm" style="text-align:left; font-size:0.75rem; padding:6px 8px; text-transform:none; font-family:'Rajdhani'; letter-spacing:0;" onclick="showFAQAnswer(${item.id})">❓ ${t(item.qKey)}</button>`;
  });

  html += `</div>`;
  html += `<div style="text-align:right; margin-top:8px;"><button class="btn btn-sm btn-danger" style="padding:2px 8px; font-size:0.65rem;" onclick="closeGuideBubble()">${t('faq.close')}</button></div>`;

  bubble.innerHTML = html;
  bubble.style.display = 'block';
}

function showFAQAnswer(id) {
  const bubble = document.getElementById('guide-bubble');
  if (!bubble) return;
  const item = FAQ_DATA.find(q => q.id === id);
  if (!item) return;

  let html = `<div style="font-weight:bold; color:var(--neon-cyan); margin-bottom:6px; font-size:0.85rem;">${t(item.qKey)}</div>`;
  html += `<div style="font-size:0.8rem; line-height:1.35; margin-bottom:10px; color:#e0f7ff;">${t(item.aKey)}</div>`;
  html += `<div style="display:flex; justify-content:space-between; gap:6px;">`;
  html += `<button class="btn btn-sm" style="font-size:0.65rem; padding:4px 8px;" onclick="showFAQMenu()">${t('faq.back')}</button>`;
  html += `<button class="btn btn-sm btn-danger" style="font-size:0.65rem; padding:4px 8px;" onclick="closeGuideBubble()">${t('faq.close')}</button>`;
  html += `</div>`;

  bubble.innerHTML = html;
}

function closeGuideBubble() {
  const bubble = document.getElementById('guide-bubble');
  if (bubble) bubble.style.display = 'none';
}

/* ================= NAVEGACIÓN ENTRE SECCIONES ================= */
function switchTab(tabName) {
  // Visitantes solo pueden ver liga, noticias y glosario
  if (!currentUserId && (tabName === 'perfil' || tabName === 'historial' || tabName === 'admin')) {
    openLoginOverlay();
    return;
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  const activeSec = document.getElementById(`sec-${tabName}`);
  if (activeSec) activeSec.classList.add('active');
  if (tabName === 'historial') {
    loadMatchHistory().catch(err => console.warn('historial', err));
  }
  if (tabName === 'coleccion') {
    try { renderCollectionGrid(); } catch (err) { console.warn('coleccion', err); }
  }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.id === 'tab-tutorial-btn' || !btn.dataset.tab) {
      e.preventDefault();
      return; // APRENDER abre el tutorial por onclick propio
    }
    switchTab(btn.dataset.tab);
  });
});

/* ================= ARENA DE DUELO EN TIEMPO REAL ================= */
let activeRoomCode = null;
let duelUnsub = null;
let duelRole = null; // 'host' | 'guest'
let currentDuelData = null;
let invitedOpponentId = null;

function getMyPlayer() {
  return players.find(p => p.id === currentUserId) || null;
}

/** Stats en vivo por slot de Bakugan (partida) */
function buildLiveStatsFromBakugan(bakuList) {
  const list = Array.isArray(bakuList) ? bakuList : [];
  return [0, 1, 2].map(i => {
    const b = list[i] || {};
    const bp = parseInt(b.bpower, 10) || 0;
    const dm = parseInt(b.damage, 10) || 0;
    return {
      bpower: bp,
      damage: dm,
      form: 'base',
      formBaseB: bp,
      formBaseD: dm,
      appliedCores: {},
      deployed: false
    };
  });
}

function getLiveStatsArray(d, role) {
  const key = role === 'host' ? 'hostLiveStats' : 'guestLiveStats';
  const baku = role === 'host' ? (d.hostBakugan || []) : (d.guestBakugan || []);
  let arr;
  if (Array.isArray(d[key]) && d[key].length >= 3) {
    arr = d[key].map((s, i) => {
      const b = baku[i] || {};
      const bp = parseInt(s && s.bpower, 10);
      const dm = parseInt(s && s.damage, 10);
      const baseB = parseInt(b.bpower, 10) || 0;
      const baseD = parseInt(b.damage, 10) || 0;
      return {
        bpower: isNaN(bp) ? baseB : bp,
        damage: isNaN(dm) ? baseD : dm,
        form: (s && s.form) || 'base',
        formBaseB: (s && s.formBaseB != null) ? (parseInt(s.formBaseB, 10) || 0) : baseB,
        formBaseD: (s && s.formBaseD != null) ? (parseInt(s.formBaseD, 10) || 0) : baseD,
        appliedCores: (s && s.appliedCores && typeof s.appliedCores === 'object') ? s.appliedCores : {},
        deployed: !!(s && s.deployed)
      };
    });
  } else {
    arr = buildLiveStatsFromBakugan(baku);
  }
  // Overlay del Bakugan seleccionado (hostBpower/guestBpower)
  const selected = role === 'host' ? d.hostSelected : d.guestSelected;
  if (selected !== null && selected !== undefined && selected >= 0 && selected <= 2) {
    const curB = role === 'host' ? d.hostBpower : d.guestBpower;
    const curD = role === 'host' ? d.hostDamage : d.guestDamage;
    if (curB !== null && curB !== undefined) {
      const prev = arr[selected] || { form: 'base', formBaseB: 0, formBaseD: 0 };
      arr[selected] = {
        ...prev,
        bpower: parseInt(curB, 10) || 0,
        damage: (curD !== null && curD !== undefined)
          ? (parseInt(curD, 10) || 0)
          : (prev.damage || 0),
        appliedCores: prev.appliedCores || {},
        deployed: !!prev.deployed
      };
    }
  }
  return arr;
}

/** Mezcla datos de la sala con el perfil actual (isEvo/isFusion y stats de forma) */
function mergeBakuganWithProfile(roomList) {
  const me = getMyPlayer();
  const profileList = me ? getActiveBakugan(me) : [];
  return [0, 1, 2].map(i => {
    const roomB = (roomList && roomList[i]) || {};
    const profB = profileList[i] || {};
    return {
      ...roomB,
      name: roomB.name || profB.name || '',
      bpower: (roomB.bpower != null && roomB.bpower !== '') ? roomB.bpower : (profB.bpower || ''),
      damage: (roomB.damage != null && roomB.damage !== '') ? roomB.damage : (profB.damage || ''),
      faction: roomB.faction || profB.faction || '',
      faction2: profB.faction2 || roomB.faction2 || '',
      isFusion: !!(profB.isFusion || roomB.isFusion),
      isEvo: !!(profB.isEvo || roomB.isEvo),
      fusionBpower: profB.fusionBpower || roomB.fusionBpower || '',
      fusionDamage: profB.fusionDamage || roomB.fusionDamage || '',
      evoBpower: profB.evoBpower || roomB.evoBpower || '',
      evoDamage: profB.evoDamage || roomB.evoDamage || '',
      bakucores: mergeBakucoreLists(roomB.bakucores, profB.bakucores)
    };
  });
}

/** Une cores de sala + perfil: no pierde factionBpower/factionDamage si la sala es vieja */
function mergeBakucoreLists(roomCores, profCores) {
  const room = normalizeBakucores(roomCores);
  const prof = normalizeBakucores(profCores);
  const roomHas = room.some(c => c && c.type);
  if (!roomHas) return prof;
  return room.map((rc, i) => {
    const pc = prof[i] || emptyBakucore();
    if (!rc.type && pc.type) return { ...pc };
    return {
      ...rc,
      // Completar campos de facción/fusión si faltan en la sala
      factionBpower: (rc.factionBpower !== '' && rc.factionBpower != null) ? rc.factionBpower : (pc.factionBpower || ''),
      factionDamage: (rc.factionDamage !== '' && rc.factionDamage != null) ? rc.factionDamage : (pc.factionDamage || ''),
      fusionBpower: (rc.fusionBpower !== '' && rc.fusionBpower != null) ? rc.fusionBpower : (pc.fusionBpower || ''),
      fusionDamage: (rc.fusionDamage !== '' && rc.fusionDamage != null) ? rc.fusionDamage : (pc.fusionDamage || ''),
      restrictFaction: rc.restrictFaction || pc.restrictFaction || '',
      restrictFaction2: rc.restrictFaction2 || pc.restrictFaction2 || '',
      energyDelta: (rc.energyDelta !== '' && rc.energyDelta != null) ? rc.energyDelta : (pc.energyDelta || '')
    };
  });
}

function formLabel(form) {
  if (form === 'fusion') return 'Fusión';
  if (form === 'evo') return 'Evo';
  if (form === 'gear') return 'Baku-Gear';
  if (form === 'doublegear') return '2º Gear';
  return 'Base';
}

function formBadgeHtml(form) {
  if (!form || form === 'base') return '';
  const icons = {
    fusion: 'logo_fusion.png',
    evo: 'logo_diamante.png',
    gear: 'logo_bakugear.png',
    doublegear: 'logo_doble_bakugear.png'
  };
  const src = icons[form];
  const label = formLabel(form);
  if (!src) return `<span style="font-size:0.6rem;color:#ffaa00;">${label}</span>`;
  return `<span style="display:inline-flex;align-items:center;gap:3px;font-size:0.6rem;color:#ffaa00;">
    <img src="${src}" style="width:14px;height:14px;object-fit:contain;" onerror="this.style.display='none'" />${label}
  </span>`;
}

function askUseGears() {
  return confirm('¿Usás Baku-Gear / Segundo Baku-Gear en esta partida?\n\nSi aceptás, vas a poder activarlos en cada Bakugan.');
}



/** Busca en qué Bakugan mío está aplicado un core (key "bi_cs") */
function findCoreHolder(liveArr, key) {
  for (let i = 0; i < 3; i++) {
    const slot = liveArr[i] || {};
    if (slot.appliedCores && slot.appliedCores[key]) return i;
  }
  return -1;
}

function countDeployed(liveArr) {
  return [0, 1, 2].filter(i => liveArr[i] && liveArr[i].deployed).length;
}

function releaseAllDeployedCores(liveArr) {
  return [0, 1, 2].map(i => {
    const slot = liveArr[i] || { bpower: 0, damage: 0, form: 'base', formBaseB: 0, formBaseD: 0 };
    const formBaseB = slot.formBaseB != null ? (parseInt(slot.formBaseB, 10) || 0) : (parseInt(slot.bpower, 10) || 0);
    const formBaseD = slot.formBaseD != null ? (parseInt(slot.formBaseD, 10) || 0) : (parseInt(slot.damage, 10) || 0);
    // Al terminar el ciclo de Team Attack: cores vuelven a Matrix; stats de forma se mantienen
    const hadCores = slot.appliedCores && Object.keys(slot.appliedCores).length;
    if (!hadCores && !slot.deployed) return { ...slot };
    return {
      ...slot,
      bpower: formBaseB,
      damage: formBaseD,
      formBaseB,
      formBaseD,
      appliedCores: {},
      deployed: false
    };
  });
}

function sumAppliedCoreBonus(appliedCores) {
  const map = appliedCores && typeof appliedCores === 'object' ? appliedCores : {};
  let b = 0, d = 0;
  Object.keys(map).forEach(k => {
    const v = map[k] || {};
    b += parseInt(v.bpower, 10) || 0;
    d += parseInt(v.damage, 10) || 0;
  });
  return { bpower: b, damage: d };
}

/** Recalcula montos de cores ya aplicados según forma actual (activa F: / facción) */
function recalcAppliedCoresForForm(appliedCores, myBakuList, form, holderBaku) {
  const map = appliedCores && typeof appliedCores === 'object' ? appliedCores : {};
  const next = {};
  let hostList = null;
  let guestList = null;
  if (currentDuelData) {
    const hostRaw = currentDuelData.hostBakugan || [];
    const guestRaw = currentDuelData.guestBakugan || [];
    hostList = [0, 1, 2].map(i => {
      const b = hostRaw[i] || {};
      return { ...b, bakucores: normalizeBakucores(b.bakucores) };
    });
    guestList = [0, 1, 2].map(i => {
      const b = guestRaw[i] || {};
      return { ...b, bakucores: normalizeBakucores(b.bakucores) };
    });
  }
  // Bakugan que tiene los cores aplicados (para restricción de facción)
  const targetForFaction = holderBaku || null;

  Object.keys(map).forEach(key => {
    const parts = String(key).split('_');
    let bi, cs, ownerRole = null;
    if (parts[0] === 'host' || parts[0] === 'guest') {
      ownerRole = parts[0];
      bi = parseInt(parts[1], 10);
      cs = parseInt(parts[2], 10);
    } else if (parts[0] === 'mine' || parts[0] === 'opp') {
      const fromOpp = parts[0] === 'opp';
      ownerRole = duelRole
        ? (fromOpp ? (duelRole === 'host' ? 'guest' : 'host') : duelRole)
        : null;
      bi = parseInt(parts[1], 10);
      cs = parseInt(parts[2], 10);
    } else {
      bi = parseInt(parts[0], 10);
      cs = parseInt(parts[1], 10);
      ownerRole = duelRole || null;
    }
    if (isNaN(bi) || isNaN(cs)) {
      next[key] = map[key];
      return;
    }
    let list = myBakuList;
    if (ownerRole === 'host' && hostList) list = hostList;
    else if (ownerRole === 'guest' && guestList) list = guestList;
    const sourceBaku = (list && list[bi]) || {};
    const cores = normalizeBakucores(sourceBaku.bakucores);
    const core = cores[cs - 1];
    if (!core || !core.type) {
      next[key] = map[key];
      return;
    }
    // Facción del receptor (holder), no del dueño del core en la Matrix
    const forFaction = targetForFaction || sourceBaku;
    const bonus = computeBakucoreBonus(core, forFaction, form);
    const prev = map[key] || {};
    next[key] = {
      bpower: bonus.bpower || 0,
      damage: bonus.damage || 0,
      energyDelta: bonus.energyDelta || 0,
      fromOpp: !!prev.fromOpp,
      ownerRole: prev.ownerRole || ownerRole || '',
      sourceName: prev.sourceName || sourceBaku.name || '',
      coreType: prev.coreType || core.type || ''
    };
  });
  return next;
}

async function applyBakuganForm(index, formType) {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const myBakuRaw = duelRole === 'host' ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const myBaku = mergeBakuganWithProfile(myBakuRaw);
  const b = myBaku[index] || {};
  let liveArr = getLiveStatsArray(d, duelRole);
  const slot = liveArr[index] || { form: 'base', bpower: 0, damage: 0, appliedCores: {} };
  const oldApplied = (slot.appliedCores && typeof slot.appliedCores === 'object') ? { ...slot.appliedCores } : {};
  const oldCoreSum = sumAppliedCoreBonus(oldApplied);
  const oldFormBaseB = slot.formBaseB != null ? (parseInt(slot.formBaseB, 10) || 0) : (parseInt(b.bpower, 10) || 0);
  const oldFormBaseD = slot.formBaseD != null ? (parseInt(slot.formBaseD, 10) || 0) : (parseInt(b.damage, 10) || 0);
  // Bonos manuales (cartas físicas, botones +/-) que no son cores
  const residualB = (parseInt(slot.bpower, 10) || 0) - oldFormBaseB - oldCoreSum.bpower;
  const residualD = (parseInt(slot.damage, 10) || 0) - oldFormBaseD - oldCoreSum.damage;

  let formBaseB = 0;
  let formBaseD = 0;
  let form = formType;

  if (formType === 'fusion') {
    if (!b.isFusion) {
      alert('Este Bakugan no tiene Fusión en el perfil.');
      return;
    }
    formBaseB = parseInt(b.fusionBpower, 10) || 0;
    formBaseD = parseInt(b.fusionDamage, 10) || 0;
  } else if (formType === 'evo') {
    if (!b.isEvo) {
      alert('Este Bakugan no tiene Evo en el perfil.');
      return;
    }
    if (b.isFusion && slot.form !== 'fusion' && slot.form !== 'evo') {
      alert('Este Bakugan es Fusión + Evo.\nPrimero activá Fusión, después podés evolucionar.');
      return;
    }
    formBaseB = parseInt(b.evoBpower, 10) || 0;
    formBaseD = parseInt(b.evoDamage, 10) || 0;
  } else if (formType === 'gear' || formType === 'doublegear') {
    const title = formType === 'gear' ? 'Baku-Gear' : 'Segundo Baku-Gear';
    const bpStr = prompt(
      `${title}\n\n¿Cuánto B-Power SUMA la Gear?\n(Se suma a la forma actual; se conservan cores y bonos)`,
      '0'
    );
    if (bpStr === null) return;
    const dmStr = prompt(
      `${title}\n\n¿Cuánto Daño SUMA la Gear?\n(Se suma a la forma actual; se conservan cores y bonos)`,
      '0'
    );
    if (dmStr === null) return;
    const addB = parseInt(bpStr, 10) || 0;
    const addD = parseInt(dmStr, 10) || 0;
    // La Gear eleva la base de la forma; cores y residuales se mantienen encima
    formBaseB = oldFormBaseB + addB;
    formBaseD = oldFormBaseD + addD;
  } else {
    // Negar forma → stats base del perfil
    form = 'base';
    formBaseB = parseInt(b.bpower, 10) || 0;
    formBaseD = parseInt(b.damage, 10) || 0;
  }

  // Recalcular cores con la nueva forma (F: y facción actualizados)
  const appliedCores = recalcAppliedCoresForForm(oldApplied, myBaku, form, b);
  const coreSum = sumAppliedCoreBonus(appliedCores);
  // Nueva lectura: base de forma + cores activos + bonos manuales previos
  const newB = Math.max(0, formBaseB + coreSum.bpower + residualB);
  const newD = Math.max(0, formBaseD + coreSum.damage + residualD);

  liveArr[index] = {
    ...slot,
    bpower: newB,
    damage: newD,
    form: form,
    formBaseB: formBaseB,
    formBaseD: formBaseD,
    appliedCores: appliedCores,
    deployed: !!slot.deployed
  };

  const updates = duelRole === 'host'
    ? { hostLiveStats: liveArr, hostSelected: index, hostBpower: newB, hostDamage: newD }
    : { guestLiveStats: liveArr, guestSelected: index, guestBpower: newB, guestDamage: newD };

  await db.collection('duels').doc(activeRoomCode).update(updates);
}

async function negateBakuganForm(index) {
  if (!confirm('¿Negar / destruir la forma activa y volver a stats base del perfil?')) return;
  await applyBakuganForm(index, 'base');
}

const FACTION_ICONS = {
  Pyrus: 'faccion_pyrus.png',
  Aquos: 'faccion_aquos.png',
  Ventus: 'faccion_ventus.png',
  Aurelus: 'faccion_aurelus.png',
  Haos: 'faccion_haos.png',
  Darkus: 'faccion_darkus.png',
  'All-Faction': 'faccion_all-faction.png'
};

function factionIconHtml(faction, size) {
  const s = size || 16;
  if (!faction) return `<span style="opacity:0.5;font-size:0.7rem;">—</span>`;
  const parts = String(faction).split(/[/+,]| y /i).map(x => x.trim()).filter(Boolean);
  return parts.map(f => {
    const key = Object.keys(FACTION_ICONS).find(k => k.toLowerCase() === f.toLowerCase());
    const src = key ? FACTION_ICONS[key] : null;
    if (!src) return `<span style="font-size:0.7rem;">${f}</span>`;
    return `<img src="${src}" alt="${f}" title="${f}" style="width:${s}px;height:${s}px;object-fit:contain;vertical-align:middle;" onerror="this.style.display='none'" />`;
  }).join(' ');
}

function bpowerIconHtml(size) {
  const s = size || 16;
  return `<img src="simbolo_bpower.png" alt="B-Power" style="width:${s}px;height:${s}px;object-fit:contain;vertical-align:middle;" onerror="this.outerHTML='B'" />`;
}

function damageIconHtml(size) {
  const s = size || 16;
  return `<img src="simbolo_dano.png" alt="Daño" style="width:${s}px;height:${s}px;object-fit:contain;vertical-align:middle;" onerror="this.outerHTML='DMG'" />`;
}

function statsLineHtml(bpower, damage, size) {
  const s = size || 14;
  return `<span style="display:inline-flex;align-items:center;gap:4px;">${bpowerIconHtml(s)} ${bpower}</span>
    <span style="opacity:0.35;margin:0 2px;">|</span>
    <span style="display:inline-flex;align-items:center;gap:4px;">${damageIconHtml(s)} ${damage}</span>`;
}

async function openDuelModal(targetUserId) {
  if (!currentUserId) {
    alert('Tenés que iniciar sesión para duelar.');
    openLoginOverlay();
    return;
  }
  if (targetUserId && typeof ensurePlayerLoaded === 'function') {
    await ensurePlayerLoaded(targetUserId);
  }
  invitedOpponentId = targetUserId || null;
  document.getElementById('duel-setup').style.display = 'block';
  document.getElementById('duel-waiting').style.display = 'none';
  document.getElementById('duel-arena').style.display = 'none';
  document.getElementById('duel-setup-error').style.display = 'none';
  document.getElementById('room-code-input').value = '';
  document.getElementById('duel-screen').style.display = 'block';
  document.getElementById('main-app').style.display = 'none';
  playBattleMusic();
}

function closeDuelScreen() {
  leaveDuelRoom(true);
  const ds = document.getElementById('duel-screen');
  if (ds) {
    ds.style.display = 'none';
    ds.classList.remove('arena-hex-bg', 'arena-landscape', 'hit-shake');
  }
  const ar = document.getElementById('duel-arena');
  if (ar) ar.classList.remove('arena-landscape', 'hit-flash');
  arenaLandscape = false;
  try {
    if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
      window.screen.orientation.unlock();
    }
  } catch (e) {}
  if (currentUserId) {
    document.getElementById('main-app').style.display = 'flex';
  }
  playLobbyMusic();
}

async function createDuelRoom() {
  if (!currentUserId) return;
  const me = getMyPlayer();
  if (!me) {
    alert('No se encontró tu perfil.');
    return;
  }

  ensurePlayerDecks(me);
  const hostBaku = getActiveBakugan(me);
  const hostUseGears = askUseGears();
  const code = 'SALA-' + Math.floor(1000 + Math.random() * 9000);
  const room = {
    hostId: currentUserId,
    hostNick: me.nick || 'Brawler',
    hostAvatar: me.avatar || AVATARS[0],
    hostBakugan: hostBaku,
    hostDeckName: getActiveDeckName(me),
    hostDeck: 50,
    hostSelected: null,
    hostBpower: 0,
    hostDamage: 0,
    hostLiveStats: buildLiveStatsFromBakugan(hostBaku),
    hostUseGears: !!hostUseGears,
    guestId: null,
    guestNick: null,
    guestAvatar: null,
    guestBakugan: [],
    guestDeckName: '',
    guestDeck: 50,
    guestSelected: null,
    guestBpower: 0,
    guestDamage: 0,
    guestLiveStats: [],
    guestUseGears: false,
    status: 'waiting',
    initialDrawDone: false,
    turn: 1,
    priorityRole: null,
    createdAt: Date.now()
  };

  try {
    await db.collection('duels').doc(code).set(room);
    activeRoomCode = code;
    window._duelEndHandledRoom = null;
    duelRole = 'host';
    document.getElementById('room-code-input').value = code;
    document.getElementById('duel-setup').style.display = 'none';
    document.getElementById('duel-waiting').style.display = 'block';
    document.getElementById('waiting-code').textContent = code;
    document.getElementById('display-room-code').textContent = code;
    listenDuelRoom(code);
  } catch (e) {
    console.error(e);
    showDuelError('No se pudo crear la sala. Revisá las reglas de Firestore (colección duels).');
  }
}

async function joinDuelRoom() {
  if (!currentUserId) return;
  const code = document.getElementById('room-code-input').value.trim().toUpperCase();
  if (!code) {
    showDuelError('Ingresá un código de sala.');
    return;
  }

  const me = getMyPlayer();
  if (!me) {
    showDuelError('No se encontró tu perfil.');
    return;
  }

  try {
    const ref = db.collection('duels').doc(code);
    const snap = await ref.get();
    if (!snap.exists) {
      showDuelError('Esa sala no existe.');
      return;
    }
    const data = snap.data();

    // Si soy el host volviendo a entrar
    if (data.hostId === currentUserId) {
      activeRoomCode = code;
    window._duelEndHandledRoom = null;
      duelRole = 'host';
      document.getElementById('duel-setup').style.display = 'none';
      document.getElementById('display-room-code').textContent = code;
      listenDuelRoom(code);
      return;
    }

    // Si ya soy el guest
    if (data.guestId === currentUserId) {
      activeRoomCode = code;
    window._duelEndHandledRoom = null;
      duelRole = 'guest';
      document.getElementById('duel-setup').style.display = 'none';
      document.getElementById('display-room-code').textContent = code;
      listenDuelRoom(code);
      return;
    }

    // Sala llena
    if (data.guestId && data.guestId !== currentUserId) {
      showDuelError('La sala ya tiene 2 jugadores.');
      return;
    }

    // Unirse como guest + prioridad 50/50 al inicio
    ensurePlayerDecks(me);
    const guestBaku = getActiveBakugan(me);
    const guestUseGears = askUseGears();
    const priorityRole = Math.random() < 0.5 ? 'host' : 'guest';
    await ref.update({
      guestId: currentUserId,
      guestNick: me.nick || 'Brawler',
      guestAvatar: me.avatar || AVATARS[0],
      guestBakugan: guestBaku,
      guestDeckName: getActiveDeckName(me),
      guestLiveStats: buildLiveStatsFromBakugan(guestBaku),
      guestUseGears: !!guestUseGears,
      status: 'ready',
      priorityRole: priorityRole,
      turn: 1
    });

    activeRoomCode = code;
    window._duelEndHandledRoom = null;
    duelRole = 'guest';
    document.getElementById('duel-setup').style.display = 'none';
    document.getElementById('duel-waiting').style.display = 'none';
    document.getElementById('display-room-code').textContent = code;
    listenDuelRoom(code);
  } catch (e) {
    console.error(e);
    showDuelError('Error al unirse a la sala.');
  }
}

function showDuelError(msg) {
  const el = document.getElementById('duel-setup-error');
  el.textContent = msg;
  el.style.display = 'block';
}

function listenDuelRoom(code) {
  if (duelUnsub) {
    duelUnsub();
    duelUnsub = null;
  }
  duelUnsub = db.collection('duels').doc(code).onSnapshot((snap) => {
    if (!snap.exists) {
      alert('La sala fue cerrada.');
      closeDuelScreen();
      return;
    }
    currentDuelData = snap.data();
    renderDuelUI(currentDuelData);
  });
}


function toggleBakucoreMatrix() {
  const panel = document.getElementById('bakucore-matrix-panel');
  const btn = document.getElementById('btn-toggle-matrix');
  if (!panel || !btn) return;
  const open = !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  btn.classList.toggle('open', open);
  const label = btn.querySelector('span:first-child');
  if (label) label.textContent = open ? 'OCULTAR MATRIX' : 'DESPLEGAR MATRIX';
}

/** Clave ABSOLUTA del core en la sala: host_0_1 / guest_0_1 (misma para ambos jugadores) */
function matrixCoreKey(bakuIdx, coreSlot, fromOpp) {
  if (!duelRole) {
    const side = fromOpp ? 'opp' : 'mine';
    return `${side}_${bakuIdx}_${coreSlot}`;
  }
  // fromOpp=false → cores del jugador local; fromOpp=true → cores del rival
  const ownerRole = fromOpp
    ? (duelRole === 'host' ? 'guest' : 'host')
    : duelRole;
  return `${ownerRole}_${bakuIdx}_${coreSlot}`;
}

/** Busca quién tiene aplicado un core (host o guest). Devuelve { role, idx } o null */
function findCoreHolderGlobal(d, key) {
  if (!d || !key) return null;
  for (const role of ['host', 'guest']) {
    const live = getLiveStatsArray(d, role);
    for (let i = 0; i < 3; i++) {
      const slot = live[i] || {};
      const map = slot.appliedCores || {};
      if (map[key]) return { role, idx: i, meta: map[key] };
      // compat claves relativas viejas (mine_/opp_/sin prefijo) — solo si coinciden en este cliente
    }
  }
  return null;
}

function formatCoreBonusLines(bonus) {
  const lines = [];
  if (bonus.bpower) {
    const sign = bonus.bpower > 0 ? '+' : '';
    lines.push(`<span class="line"><img src="simbolo_bpower.png" alt="B" onerror="this.remove()" />${sign}${bonus.bpower}</span>`);
  }
  if (bonus.damage) {
    const sign = bonus.damage > 0 ? '+' : '';
    lines.push(`<span class="line"><img src="simbolo_dano.png" alt="D" onerror="this.remove()" />${sign}${bonus.damage}</span>`);
  }
  if (bonus.energyDelta) {
    const sign = bonus.energyDelta > 0 ? '+' : '';
    lines.push(`<span class="line"><img src="logo_energia.png" alt="E" onerror="this.remove()" />${sign}${bonus.energyDelta}</span>`);
  }
  if (!lines.length) {
    lines.push(`<span class="line" style="opacity:0.45;">—</span>`);
  }
  return lines.join('');
}

function renderMatrixCoreCell(core, baku, live, bakuIdx, coreSlot, isMine, activeSelected) {
  const hasType = core && core.type && BAKUCORE_ICON[core.type];
  if (!hasType) {
    return `<div class="matrix-core empty ${isMine ? 'mine' : 'opp-core'}" title="Vacío">
      <div style="font-size:0.55rem;opacity:0.4;">#${bakuIdx + 1}.${coreSlot}</div>
    </div>`;
  }
  // Bonus preview: facción + forma del Bakugan ACTIVO (quien recibiría el core)
  let form = (live && live.form) || 'base';
  let targetBaku = baku; // fallback
  if (currentDuelData && duelRole) {
    const iAmHost = duelRole === 'host';
    const myLive = getLiveStatsArray(currentDuelData, duelRole);
    const sel = iAmHost ? currentDuelData.hostSelected : currentDuelData.guestSelected;
    if (sel != null && myLive[sel] && myLive[sel].form) form = myLive[sel].form;
    const myRaw = iAmHost ? (currentDuelData.hostBakugan || []) : (currentDuelData.guestBakugan || []);
    const myList = mergeBakuganWithProfile(myRaw);
    if (sel != null && myList[sel]) targetBaku = myList[sel];
  }
  const bonus = computeBakucoreBonus(core, targetBaku, form);
  const fromOpp = !isMine;
  const key = matrixCoreKey(bakuIdx, coreSlot, fromOpp);

  let applied = false;
  let locked = false;
  let holderIdx = -1;
  let holderIsOpp = false;
  let holderTag = '';

  if (currentDuelData && duelRole) {
    const global = findCoreHolderGlobal(currentDuelData, key);
    if (global) {
      applied = true;
      holderIdx = global.idx;
      holderIsOpp = global.role !== duelRole;
      const holderLive = getLiveStatsArray(currentDuelData, global.role);
      locked = !!(holderLive[global.idx] && holderLive[global.idx].deployed);
      // Si lo tiene el rival → no puedo seleccionarlo
      if (holderIsOpp) locked = true;
      const who = holderIsOpp ? 'Rival' : 'Vos';
      holderTag = `<div class="matrix-core-tag">→ ${who} B${global.idx + 1}</div>`;
    }
  }

  const icon = BAKUCORE_ICON[core.type];
  const fromActive = isMine && activeSelected === bakuIdx;
  const tag = (bonus.tags && bonus.tags.length) ? `<div class="matrix-core-tag">${bonus.tags.join(' · ')}</div>` : '';
  const sideLabel = isMine ? 'Tuyo' : 'Rival';
  const click = locked ? '' : `onclick="toggleApplyMatrixCore(${bakuIdx}, ${coreSlot}, ${fromOpp ? 'true' : 'false'})"`;
  const lockedCls = locked ? ' locked' : '';
  const appliedCls = applied ? ' applied' : '';
  return `<div class="matrix-core ${isMine ? 'mine' : 'opp-core'}${appliedCls}${lockedCls}${fromActive ? ' from-active' : ''}" ${click} title="${sideLabel} · ${core.type} · B${bakuIdx + 1} C${coreSlot}">
    <img class="matrix-core-icon" src="${icon}" alt="${core.type}" onerror="this.style.opacity='0.3'" />
    <div class="matrix-core-bonus">${formatCoreBonusLines(bonus)}${tag}${holderTag}</div>
  </div>`;
}

function renderBakucoreMatrix(d) {
  const myRow = document.getElementById('matrix-my-cores');
  const oppRow = document.getElementById('matrix-opp-cores');
  if (!myRow || !oppRow || !d) return;

  const iAmHost = duelRole === 'host';
  const myBakuRaw = iAmHost ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const myBaku = mergeBakuganWithProfile(myBakuRaw);
  const oppBakuRaw = iAmHost ? (d.guestBakugan || []) : (d.hostBakugan || []);
  // rival: usar datos de sala (su perfil no está en este cliente completo a veces)
  const oppBaku = [0, 1, 2].map(i => {
    const b = oppBakuRaw[i] || {};
    return {
      ...b,
      bakucores: normalizeBakucores(b.bakucores)
    };
  });
  const myLive = getLiveStatsArray(d, iAmHost ? 'host' : 'guest');
  const oppLive = getLiveStatsArray(d, iAmHost ? 'guest' : 'host');
  const mySelected = iAmHost ? d.hostSelected : d.guestSelected;

  let myHtml = '';
  let oppHtml = '';
  for (let bi = 0; bi < 3; bi++) {
    const cores = normalizeBakucores((myBaku[bi] || {}).bakucores);
    const ocores = normalizeBakucores((oppBaku[bi] || {}).bakucores);
    for (let cs = 1; cs <= 2; cs++) {
      myHtml += renderMatrixCoreCell(cores[cs - 1], myBaku[bi], myLive[bi], bi, cs, true, mySelected);
      oppHtml += renderMatrixCoreCell(ocores[cs - 1], oppBaku[bi], oppLive[bi], bi, cs, false, null);
    }
  }
  myRow.innerHTML = myHtml;
  oppRow.innerHTML = oppHtml;
}

async function toggleApplyMatrixCore(bakuIdx, coreSlot, fromOpp) {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const selected = duelRole === 'host' ? d.hostSelected : d.guestSelected;
  if (selected === null || selected === undefined) {
    alert('Primero elegí un Bakugan activo en el campo.');
    return;
  }

  fromOpp = !!fromOpp;
  const iAmHost = duelRole === 'host';
  const sourceRaw = fromOpp
    ? (iAmHost ? (d.guestBakugan || []) : (d.hostBakugan || []))
    : (iAmHost ? (d.hostBakugan || []) : (d.guestBakugan || []));
  const sourceList = fromOpp
    ? [0, 1, 2].map(i => {
        const b = sourceRaw[i] || {};
        return { ...b, bakucores: normalizeBakucores(b.bakucores) };
      })
    : mergeBakuganWithProfile(sourceRaw);
  const sourceBaku = sourceList[bakuIdx] || {};
  const cores = normalizeBakucores(sourceBaku.bakucores);
  const core = cores[coreSlot - 1];
  if (!core || !core.type) {
    alert('Ese slot de Bakucore está vacío.');
    return;
  }

  const key = matrixCoreKey(bakuIdx, coreSlot, fromOpp);
  const global = findCoreHolderGlobal(d, key);

  // Si el rival ya lo tiene aplicado → bloqueado (un core solo puede usarlo un jugador a la vez)
  if (global && global.role !== duelRole) {
    alert('Ese Bakucore ya está aplicado por el rival. No se puede usar el mismo core a la vez.');
    return;
  }

  let liveArr = getLiveStatsArray(d, duelRole);
  const holder = (global && global.role === duelRole) ? global.idx : -1;

  if (holder >= 0 && liveArr[holder] && liveArr[holder].deployed) {
    alert('Ese Bakucore está adjunto a un Bakugan desplegado (ganó su ronda). No está disponible hasta el Team Attack / fin de turno.');
    return;
  }

  const slot = liveArr[selected] || { bpower: 0, damage: 0, form: 'base', appliedCores: {}, deployed: false };
  if (slot.deployed) {
    alert('Este Bakugan ya está desplegado. Sus cores quedan fijos hasta el Team Attack o fin de turno.');
    return;
  }

  // Si el core está en otro Bakugan mío no desplegado, quitarlo de ahí primero
  if (holder >= 0 && holder !== selected) {
    const other = liveArr[holder] || {};
    const otherApplied = { ...(other.appliedCores || {}) };
    const prev = otherApplied[key];
    if (prev) {
      other.bpower = Math.max(0, (other.bpower || 0) - (prev.bpower || 0));
      other.damage = Math.max(0, (other.damage || 0) - (prev.damage || 0));
      delete otherApplied[key];
      other.appliedCores = otherApplied;
      liveArr[holder] = other;
    }
  }

  const applied = { ...(slot.appliedCores || {}) };
  const form = slot.form || 'base';
  // Importante: la restricción de facción se evalúa con el Bakugan ACTIVO (quien recibe el core)
  const myBakuForBonus = mergeBakuganWithProfile(
    duelRole === 'host' ? (d.hostBakugan || []) : (d.guestBakugan || [])
  );
  const activeBaku = myBakuForBonus[selected] || {};
  const bonus = computeBakucoreBonus(core, activeBaku, form);
  // Facción no cumple: se aplica igual el efecto BASE; solo se omiten factionBpower/factionDamage
  // (sin popup molesto: la Matrix ya muestra NO-FAC cuando corresponde)

  if (applied[key]) {
    const prev = applied[key];
    slot.bpower = Math.max(0, (slot.bpower || 0) - (prev.bpower || 0));
    slot.damage = Math.max(0, (slot.damage || 0) - (prev.damage || 0));
    delete applied[key];
  } else {
    applied[key] = {
      bpower: bonus.bpower || 0,
      damage: bonus.damage || 0,
      energyDelta: bonus.energyDelta || 0,
      fromOpp: fromOpp,
      ownerRole: fromOpp ? (duelRole === 'host' ? 'guest' : 'host') : duelRole,
      sourceName: sourceBaku.name || '',
      coreType: core.type || ''
    };
    slot.bpower = Math.max(0, (slot.bpower || 0) + (bonus.bpower || 0));
    slot.damage = Math.max(0, (slot.damage || 0) + (bonus.damage || 0));
  }
  slot.appliedCores = applied;
  liveArr[selected] = slot;

  const updates = duelRole === 'host'
    ? { hostLiveStats: liveArr, hostBpower: slot.bpower, hostDamage: slot.damage }
    : { guestLiveStats: liveArr, guestBpower: slot.bpower, guestDamage: slot.damage };

  await db.collection('duels').doc(activeRoomCode).update(updates);
}

function renderDuelUI(d) {

  const bothReady = d.hostId && d.guestId;

  if (!bothReady) {
    document.getElementById('duel-waiting').style.display = 'block';
    document.getElementById('duel-arena').style.display = 'none';
    document.getElementById('waiting-code').textContent = activeRoomCode;
    document.getElementById('waiting-status').textContent = '1 / 2 jugadores conectados';
    return;
  }

  // Si falta prioridad (salas viejas), host la asigna 50/50
  if (!d.priorityRole && duelRole === 'host' && activeRoomCode) {
    const pr = Math.random() < 0.5 ? 'host' : 'guest';
    db.collection('duels').doc(activeRoomCode).update({ priorityRole: pr, turn: d.turn || 1 }).catch(() => {});
  }

  document.getElementById('duel-waiting').style.display = 'none';
  document.getElementById('duel-setup').style.display = 'none';
  const arenaEl = document.getElementById('duel-arena');
  if (arenaEl) {
    arenaEl.style.display = 'block';
  }
  const screenEl = document.getElementById('duel-screen');
  if (screenEl) {
    screenEl.classList.add('arena-hex-bg');
    // PC / pantallas anchas → horizontal por defecto
    applyArenaOrientation(window.innerWidth >= 900 || window.innerWidth > window.innerHeight);
  }

  const iAmHost = duelRole === 'host';
  const myDeck = iAmHost ? d.hostDeck : d.guestDeck;
  const oppDeck = iAmHost ? d.guestDeck : d.hostDeck;
  const myNick = iAmHost ? d.hostNick : d.guestNick;
  const oppNick = iAmHost ? d.guestNick : d.hostNick;
  const myBakuRaw = iAmHost ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const myBaku = mergeBakuganWithProfile(myBakuRaw);
  const myDeckName = iAmHost ? (d.hostDeckName || 'Deck activo') : (d.guestDeckName || 'Deck activo');
  const mySelected = iAmHost ? d.hostSelected : d.guestSelected;
  const myBpower = iAmHost ? d.hostBpower : d.guestBpower;
  const myDamage = iAmHost ? d.hostDamage : d.guestDamage;
  const oppSelected = iAmHost ? d.guestSelected : d.hostSelected;
  const oppBaku = iAmHost ? (d.guestBakugan || []) : (d.hostBakugan || []);
  const oppBpower = iAmHost ? d.guestBpower : d.hostBpower;
  const oppDamage = iAmHost ? d.guestDamage : d.hostDamage;

  // Turno y prioridad
  const turnEl = document.getElementById('duel-turn-display');
  if (turnEl) turnEl.textContent = String(d.turn || 1);
  const prioEl = document.getElementById('duel-priority-display');
  if (prioEl) {
    if (!d.priorityRole) {
      prioEl.textContent = 'Sorteando...';
    } else {
      const prioNick = d.priorityRole === 'host' ? (d.hostNick || 'Host') : (d.guestNick || 'Guest');
      const isMine = d.priorityRole === duelRole;
      prioEl.textContent = isMine ? `VOS (${prioNick})` : prioNick;
    }
  }

  document.getElementById('my-name-label').textContent = (myNick || 'TÚ').toUpperCase() + ' · VIDA';
  document.getElementById('opp-name-label').textContent = (oppNick || 'RIVAL').toUpperCase() + ' · VIDA';
  const myDeckEl = document.getElementById('my-deck');
  const oppDeckEl = document.getElementById('opp-deck');
  const myDeckVal = myDeck ?? 50;
  const oppDeckVal = oppDeck ?? 50;
  myDeckEl.textContent = myDeckVal;
  oppDeckEl.textContent = oppDeckVal;
  myDeckEl.style.color = myDeckVal <= 0 ? '#ff6688' : 'var(--neon-cyan)';
  oppDeckEl.style.color = oppDeckVal <= 0 ? '#ff6688' : '#fff';
  try {
    updateDeckStack('my-deck-stack', myDeckVal);
    updateDeckStack('opp-deck-stack', oppDeckVal);
  } catch (e) {}

  const deckNameEl = document.getElementById('my-active-deck-name');
  if (deckNameEl) deckNameEl.textContent = 'Deck: ' + myDeckName;

  // Botón unificado: mano inicial / robar carta + pasar prioridad
  const btn = document.getElementById('btn-main-action');
  const btnLabel = document.getElementById('btn-main-action-label');
  const nextTurnBtn = document.getElementById('btn-next-turn');
  if (nextTurnBtn) nextTurnBtn.style.display = 'none'; // ya no se usa: va junto al robo
  if (d.initialDrawDone) {
    const iHavePriority = d.priorityRole === duelRole;
    if (iHavePriority) {
      if (btnLabel) btnLabel.textContent = 'Robar carta y pasar prioridad (-1)';
      else if (btn) btn.textContent = 'Robar carta y pasar prioridad (-1)';
      if (btn) {
        btn.style.background = 'linear-gradient(45deg, #00f0ff, #0055ff)';
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
      }
    } else {
      if (btnLabel) btnLabel.textContent = 'Esperando que el rival pase prioridad';
      else if (btn) btn.textContent = 'Esperando que el rival pase prioridad';
      if (btn) {
        btn.style.background = 'linear-gradient(45deg, #334455, #223344)';
        btn.disabled = true;
        btn.style.opacity = '0.55';
        btn.style.pointerEvents = 'none';
      }
    }
  } else {
    if (btnLabel) btnLabel.textContent = 'Robar Mano Inicial (-6)';
    else if (btn) btn.textContent = 'Robar Mano Inicial (-6)';
    if (btn) {
      btn.style.background = 'linear-gradient(45deg, #ff9900, #ff0055)';
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }
  }

  const myLive = getLiveStatsArray(d, iAmHost ? 'host' : 'guest');
  const oppLive = getLiveStatsArray(d, iAmHost ? 'guest' : 'host');
  const oppRole = iAmHost ? 'guest' : 'host';

  const myUseGears = iAmHost ? !!d.hostUseGears : !!d.guestUseGears;

  // Lista de mis Bakugan — stats en vivo + formas
  const list = document.getElementById('my-bakugan-list');
  list.innerHTML = '';
  const deployedCount = countDeployed(myLive);
  // mini status above list (injected once)
  const statusId = 'deployed-status-line';
  let statusEl = document.getElementById(statusId);
  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = statusId;
    statusEl.style.cssText = 'font-size:0.65rem;color:#ffcc55;text-align:center;margin-bottom:6px;letter-spacing:0.5px;font-family:Orbitron,sans-serif;';
    if (list.parentNode) list.parentNode.insertBefore(statusEl, list);
  }
  statusEl.textContent = deployedCount
    ? ('DESPLEGADOS: ' + deployedCount + '/3' + (deployedCount >= 3 ? ' · TEAM ATTACK LISTO' : ''))
    : '';
  statusEl.style.display = deployedCount ? 'block' : 'none';
  [0, 1, 2].forEach((i) => {
    const b = myBaku[i] || {};
    const live = myLive[i] || { bpower: 0, damage: 0, form: 'base', formBaseB: 0, formBaseD: 0 };
    const name = b.name || `Bakugan #${i + 1}`;
    const selected = mySelected === i;
    const baseB = parseInt(b.bpower, 10) || 0;
    const baseD = parseInt(b.damage, 10) || 0;
    const formBaseB = live.formBaseB != null ? live.formBaseB : baseB;
    const formBaseD = live.formBaseD != null ? live.formBaseD : baseD;
    const modified = (live.bpower !== formBaseB) || (live.damage !== formBaseD);
    const facStr = (live.form === 'fusion' && b.faction2)
      ? `${b.faction}/${b.faction2}`
      : b.faction;

    const formBtns = [];
    if (b.isFusion) {
      formBtns.push(`<button type="button" class="btn btn-sm" data-form="fusion" data-idx="${i}" style="padding:4px 6px;min-width:auto;display:inline-flex;align-items:center;gap:3px;border-color:var(--neon-magenta);color:var(--neon-magenta);">
        <img src="logo_fusion.png" style="width:14px;height:14px;object-fit:contain;" onerror="this.style.display='none'" />Fusión
      </button>`);
    }
    if (b.isEvo) {
      formBtns.push(`<button type="button" class="btn btn-sm" data-form="evo" data-idx="${i}" style="padding:4px 6px;min-width:auto;display:inline-flex;align-items:center;gap:3px;border-color:#ffaa00;color:#ffcc55;">
        <img src="logo_diamante.png" style="width:14px;height:14px;object-fit:contain;" onerror="this.style.display='none'" />Evo
      </button>`);
    }
    if (myUseGears) {
      formBtns.push(`<button type="button" class="btn btn-sm" data-form="gear" data-idx="${i}" style="padding:4px 6px;min-width:auto;display:inline-flex;align-items:center;gap:3px;">
        <img src="logo_bakugear.png" style="width:14px;height:14px;object-fit:contain;" onerror="this.style.display='none'" />Gear
      </button>`);
      formBtns.push(`<button type="button" class="btn btn-sm" data-form="doublegear" data-idx="${i}" style="padding:4px 6px;min-width:auto;display:inline-flex;align-items:center;gap:3px;">
        <img src="logo_doble_bakugear.png" style="width:14px;height:14px;object-fit:contain;" onerror="this.style.display='none'" />2º Gear
      </button>`);
    }
    if (live.form && live.form !== 'base') {
      formBtns.push(`<button type="button" class="btn btn-sm btn-danger" data-form="base" data-idx="${i}" style="padding:4px 6px;min-width:auto;font-size:0.6rem;">Negar</button>`);
    }

    const div = document.createElement('div');
    div.style.cssText = `background:rgba(0,20,40,0.6); border:1px solid ${selected ? 'var(--neon-cyan)' : 'rgba(0,240,255,0.2)'}; border-radius:8px; padding:8px 10px;`;
    if (selected) div.style.boxShadow = '0 0 12px rgba(0,240,255,0.35)';
    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; cursor:pointer;" data-select="${i}">
        <div style="min-width:0;flex:1;">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            <strong style="color:${selected ? 'var(--neon-cyan)' : '#fff'};">${name}</strong>
            ${factionIconHtml(facStr, 18)}
            ${formBadgeHtml(live.form)}
          </div>
          <div style="font-size:0.8rem; color:var(--neon-cyan); margin-top:4px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            ${statsLineHtml(live.bpower, live.damage, 15)}
            ${modified ? '<span style="color:#ffaa00;font-size:0.65rem;">(mod)</span>' : ''}
          </div>
          <div style="font-size:0.65rem; opacity:0.45; margin-top:2px; display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
            ${live.form && live.form !== 'base' ? formLabel(live.form) + ':' : 'Base:'} ${statsLineHtml(formBaseB, formBaseD, 12)}
          </div>
        </div>
        <span style="font-size:0.7rem; color:var(--neon-magenta); flex-shrink:0;">${selected ? 'EN CAMPO' : 'Elegir'}${live.deployed ? '<span class="baku-deployed-badge">DESPLEGADO</span>' : ''}</span>
      </div>
      ${formBtns.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;" data-forms="${i}">${formBtns.join('')}</div>` : ''}
    `;
    const selectArea = div.querySelector('[data-select]');
    if (selectArea) selectArea.onclick = () => selectMyBakugan(i);
    div.querySelectorAll('[data-form]').forEach(btn => {
      btn.onclick = (ev) => {
        ev.stopPropagation();
        const f = btn.getAttribute('data-form');
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (f === 'base') negateBakuganForm(idx);
        else applyBakuganForm(idx, f);
      };
    });
    list.appendChild(div);
  });

  // Panel comparativa VOS
  const controls = document.getElementById('arena-stat-controls');
  const myNameEl = document.getElementById('arena-my-name');
  const myFacEl = document.getElementById('arena-my-faction');
  if (mySelected !== null && mySelected !== undefined && myBaku[mySelected]) {
    const b = myBaku[mySelected];
    const live = myLive[mySelected] || { bpower: 0, damage: 0, form: 'base' };
    const facStr = (live.form === 'fusion' && b.faction2) ? `${b.faction}/${b.faction2}` : b.faction;
    if (myNameEl) myNameEl.innerHTML = (b.name || 'Bakugan') + (live.form && live.form !== 'base' ? ' ' + formBadgeHtml(live.form) : '');
    if (myFacEl) myFacEl.innerHTML = factionIconHtml(facStr, 20);
    document.getElementById('arena-bpower').textContent = live.bpower;
    document.getElementById('arena-damage').textContent = live.damage;
    if (controls) controls.style.display = 'block';
  } else {
    if (myNameEl) myNameEl.textContent = '—';
    if (myFacEl) myFacEl.textContent = 'Elegí un Bakugan';
    document.getElementById('arena-bpower').textContent = '0';
    document.getElementById('arena-damage').textContent = '0';
    if (controls) controls.style.display = 'none';
  }

  // Panel comparativa RIVAL (arriba, al lado)
  // Fuente de verdad: campos hostBpower/guestBpower del snapshot (siempre actualizados)
  const oppNameEl = document.getElementById('arena-opp-name');
  const oppFacEl = document.getElementById('arena-opp-faction');
  if (oppSelected !== null && oppSelected !== undefined && oppBaku[oppSelected]) {
    const b = oppBaku[oppSelected];
    const live = oppLive[oppSelected] || { bpower: 0, damage: 0, form: 'base' };
    const showB = (oppBpower !== null && oppBpower !== undefined) ? oppBpower : live.bpower;
    const showD = (oppDamage !== null && oppDamage !== undefined) ? oppDamage : live.damage;
    const facStr = (live.form === 'fusion' && b.faction2) ? `${b.faction}/${b.faction2}` : b.faction;
    if (oppNameEl) oppNameEl.innerHTML = (b.name || 'Bakugan') + (live.form && live.form !== 'base' ? ' ' + formBadgeHtml(live.form) : '');
    if (oppFacEl) oppFacEl.innerHTML = factionIconHtml(facStr, 20);
    document.getElementById('arena-opp-bpower').textContent = showB;
    document.getElementById('arena-opp-damage').textContent = showD;
  } else {
    if (oppNameEl) oppNameEl.textContent = '—';
    if (oppFacEl) oppFacEl.textContent = 'Esperando...';
    document.getElementById('arena-opp-bpower').textContent = '0';
    document.getElementById('arena-opp-damage').textContent = '0';
  }

  // Reloj de resolución de daño
  try { renderDamageClockUI(d); } catch (e) { console.warn('damage clock', e); }

  // Team Attack: visible si los 3 Bakugans propios están desplegados
  try {
    const taBtn = document.getElementById('btn-team-attack');
    const taLabel = document.getElementById('btn-team-attack-label');
    if (taBtn) {
      const deployedN = countDeployed(myLive);
      const showTA = deployedN >= 3;
      taBtn.classList.toggle('visible', showTA);
      if (showTA && taLabel) {
        const totalD = [0, 1, 2].reduce((s, i) => s + (parseInt(myLive[i] && myLive[i].damage, 10) || 0), 0);
        taLabel.textContent = `TEAM ATTACK · ${totalD} ⚔ · liberar`;
      }
    }
  } catch (e) {}

  // Matrix de Bakucores
  try { renderBakucoreMatrix(d); } catch (e) { console.warn('matrix', e); }

  // Fin de partida: vida en -1 o menos (0 todavía juega)
  if ((myDeck < 0 || oppDeck < 0) && d.status !== 'ended') {
    handleDuelEnd(myDeck < 0 ? 'loss' : 'win');
  }
}

async function selectMyBakugan(index) {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const myBaku = duelRole === 'host' ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const liveKey = duelRole === 'host' ? 'hostLiveStats' : 'guestLiveStats';
  let liveArr = getLiveStatsArray(d, duelRole);

  // Si ese slot aún no tiene live stats, inicializar desde base del perfil
  if (!liveArr[index] || (liveArr[index].bpower == null && liveArr[index].damage == null)) {
    const baku = myBaku[index] || {};
    const bp = parseInt(baku.bpower, 10) || 0;
    const dm = parseInt(baku.damage, 10) || 0;
    liveArr[index] = {
      bpower: bp,
      damage: dm,
      form: 'base',
      formBaseB: bp,
      formBaseD: dm,
      appliedCores: {},
      deployed: false
    };
  }

  const live = liveArr[index];
  const updates = duelRole === 'host'
    ? { hostSelected: index, hostBpower: live.bpower, hostDamage: live.damage, hostLiveStats: liveArr }
    : { guestSelected: index, guestBpower: live.bpower, guestDamage: live.damage, guestLiveStats: liveArr };

  await db.collection('duels').doc(activeRoomCode).update(updates);
}

async function syncUpdateDeck(delta) {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const field = duelRole === 'host' ? 'hostDeck' : 'guestDeck';
  const current = currentDuelData[field] ?? 50;
  // Permitir 0 y negativos (la partida termina en -1)
  const next = current + delta;
  await db.collection('duels').doc(activeRoomCode).update({ [field]: next });
}

async function syncUpdateStat(stat, delta) {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const selected = duelRole === 'host' ? d.hostSelected : d.guestSelected;
  if (selected === null || selected === undefined) {
    alert('Primero seleccioná un Bakugan de tu equipo.');
    return;
  }

  const liveKey = duelRole === 'host' ? 'hostLiveStats' : 'guestLiveStats';
  let liveArr = getLiveStatsArray(d, duelRole);
  const slot = liveArr[selected] || { bpower: 0, damage: 0, form: 'base', appliedCores: {}, deployed: false };
  if (stat === 'bpower') {
    slot.bpower = Math.max(0, (slot.bpower || 0) + delta);
  } else {
    slot.damage = Math.max(0, (slot.damage || 0) + delta);
  }
  liveArr[selected] = {
    ...slot,
    appliedCores: slot.appliedCores || {},
    deployed: !!slot.deployed
  };

  const updates = duelRole === 'host'
    ? { hostLiveStats: liveArr, hostBpower: slot.bpower, hostDamage: slot.damage }
    : { guestLiveStats: liveArr, guestBpower: slot.bpower, guestDamage: slot.damage };

  await db.collection('duels').doc(activeRoomCode).update(updates);
}

/** Pierde la ronda → vuelve a stats de la FORMA activa (no quita Fusión/Evo/Gear) */



/** ===== ORIENTACIÓN ARENA (vertical / horizontal) ===== */
let arenaLandscape = false;

function applyArenaOrientation(landscape) {
  arenaLandscape = !!landscape;
  const screen = document.getElementById('duel-screen');
  const arena = document.getElementById('duel-arena');
  const btn = document.getElementById('btn-arena-orient');
  if (screen) screen.classList.toggle('arena-landscape', arenaLandscape);
  if (arena) arena.classList.toggle('arena-landscape', arenaLandscape);
  if (btn) btn.textContent = arenaLandscape ? '⛶ Vertical' : '⛶ Horizontal';

  // Intentar lock de orientación del dispositivo (solo con gesture / fullscreen a veces)
  try {
    if (screen && screen.orientation && screen.orientation.lock) {
      // no-op: ScreenOrientation en window
    }
    if (window.screen && screen.orientation && landscape) {
      // API moderna
    }
  } catch (e) {}
  try {
    if (landscape && window.screen && window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation.lock('landscape').catch(function () {});
    } else if (!landscape && window.screen && window.screen.orientation && window.screen.orientation.unlock) {
      window.screen.orientation.unlock();
    }
  } catch (e) {}
}

function toggleArenaOrientation() {
  applyArenaOrientation(!arenaLandscape);
}

/** ===== DECK VISUAL: 50 capas de icono_deck.png ===== */
const DECK_MAX_CARDS = 50;
const DECK_LAYER_STEP = 0.35; // px de solapado vertical

function ensureDeckStack(stackId) {
  const stack = document.getElementById(stackId);
  if (!stack) return null;
  if (stack.dataset.ready === '1' && stack.children.length === DECK_MAX_CARDS) return stack;
  stack.innerHTML = '';
  for (let i = 0; i < DECK_MAX_CARDS; i++) {
    const img = document.createElement('img');
    img.className = 'deck-layer';
    img.src = 'icono_deck.png';
    img.alt = '';
    img.draggable = false;
    img.style.bottom = (i * DECK_LAYER_STEP) + 'px';
    img.style.zIndex = String(i + 1);
    img.dataset.idx = String(i);
    img.onerror = function () { this.style.opacity = '0.15'; };
    stack.appendChild(img);
  }
  stack.dataset.ready = '1';
  return stack;
}

function updateDeckStack(stackId, count) {
  const stack = ensureDeckStack(stackId);
  if (!stack) return;
  const n = Math.max(0, Math.min(DECK_MAX_CARDS, parseInt(count, 10) || 0));
  const layers = stack.children;
  for (let i = 0; i < layers.length; i++) {
    if (i < n) layers[i].classList.remove('spent');
    else layers[i].classList.add('spent');
  }
}

function triggerArenaHitFeedback() {
  try {
    if (navigator.vibrate) navigator.vibrate([30, 40, 55]);
  } catch (e) {}
  const screen = document.getElementById('duel-screen');
  const arena = document.getElementById('duel-arena');
  if (screen) {
    screen.classList.remove('hit-shake');
    void screen.offsetWidth;
    screen.classList.add('hit-shake');
    setTimeout(function () { screen.classList.remove('hit-shake'); }, 450);
  }
  if (arena) {
    arena.classList.remove('hit-flash');
    void arena.offsetWidth;
    arena.classList.add('hit-flash');
    setTimeout(function () { arena.classList.remove('hit-flash'); }, 420);
  }
}

/** ===== RESOLUCIÓN DE DAÑO CON RELOJ (12s = 1 carta / 1 daño) ===== */
const DAMAGE_TICK_MS = 12000;
let _damageTickTimer = null;
let _damageAnimRaf = null;
let _damageLocal = null; // { remaining, total, targetRole, attackerRole, tickStartedAt }

function clearDamageTimers() {
  if (_damageTickTimer) { clearTimeout(_damageTickTimer); _damageTickTimer = null; }
  if (_damageAnimRaf) { cancelAnimationFrame(_damageAnimRaf); _damageAnimRaf = null; }
}

function isDamageResolutionActive(d) {
  return !!(d && d.damageResolution && d.damageResolution.active && !d.damageResolution.stopped);
}

/** Inicia resolución de daño contra el rival (Firestore + reloj local del atacante) */
async function startDamageResolution(amount, label) {
  // Reloj de daño desactivado: el descuento es manual
  amount = Math.max(0, parseInt(amount, 10) || 0);
  if (amount > 0) {
    alert((label || 'Daño') + ': ' + amount + '\n\nDescontá manualmente las cartas del rival con los botones de vida del deck.');
  }
  return;
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  amount = Math.max(0, parseInt(amount, 10) || 0);
  if (amount <= 0) {
    alert('El daño declarado es 0. No hay cartas que descartar.');
    return;
  }
  const d = currentDuelData;
  if (isDamageResolutionActive(d)) {
    alert('Ya hay una resolución de daño en curso. Esperá que termine o el rival use STOP.');
    return;
  }
  const targetRole = duelRole === 'host' ? 'guest' : 'host';
  const now = Date.now();
  const payload = {
    active: true,
    stopped: false,
    remaining: amount,
    total: amount,
    targetRole: targetRole,
    attackerRole: duelRole,
    label: label || 'Daño',
    tickStartedAt: now,
    updatedAt: now
  };
  await db.collection('duels').doc(activeRoomCode).update({ damageResolution: payload });
}

/** STOP: el jugador objetivo (o cualquiera con permiso) frena el daño restante */
async function stopDamageResolution() {
  if (!activeRoomCode || !currentDuelData) return;
  const d = currentDuelData;
  const res = d.damageResolution;
  if (!res || !res.active) return;
  // Solo el que recibe el daño (target) puede STOP — simula cartas que frenan
  if (duelRole && res.targetRole && duelRole !== res.targetRole) {
    alert('Solo el jugador que recibe el daño puede usar STOP (cartas que frenan el descarte).');
    return;
  }
  clearDamageTimers();
  _damageLocal = null;
  await db.collection('duels').doc(activeRoomCode).update({
    damageResolution: {
      ...res,
      active: false,
      stopped: true,
      remaining: res.remaining || 0,
      updatedAt: Date.now()
    }
  });
}

/** Aplica 1 punto de daño (1 carta) y programa el siguiente tick si corresponde */
async function applyDamageTick() {
  if (!activeRoomCode || !currentDuelData || !duelRole) return;
  const d = currentDuelData;
  const res = d.damageResolution;
  if (!res || !res.active || res.stopped) {
    clearDamageTimers();
    return;
  }
  // Solo el atacante escribe los ticks para evitar doble descuento
  if (res.attackerRole !== duelRole) return;

  const remaining = Math.max(0, (parseInt(res.remaining, 10) || 0) - 1);
  const targetRole = res.targetRole;
  const deckField = targetRole === 'host' ? 'hostDeck' : 'guestDeck';
  const currentDeck = d[deckField] ?? 50;
  const nextDeck = currentDeck - 1;

  const updates = {
    [deckField]: nextDeck,
    damageResolution: {
      ...res,
      remaining: remaining,
      active: remaining > 0,
      stopped: false,
      tickStartedAt: Date.now(),
      updatedAt: Date.now()
    }
  };
  await db.collection('duels').doc(activeRoomCode).update(updates);
  // Golpe visual + vibración al restar 1 carta
  triggerArenaHitFeedback();
}

function scheduleDamageTickFromState(d) {
  const res = d && d.damageResolution;
  if (!res || !res.active || res.stopped) {
    clearDamageTimers();
    _damageLocal = null;
    return;
  }
  const started = res.tickStartedAt || Date.now();
  // Evitar reiniciar el timer en cada snapshot de Firestore si es el mismo tick
  const sameTick = _damageLocal
    && _damageLocal.tickStartedAt === started
    && _damageLocal.remaining === res.remaining
    && _damageTickTimer;

  _damageLocal = {
    remaining: res.remaining,
    total: res.total,
    targetRole: res.targetRole,
    attackerRole: res.attackerRole,
    tickStartedAt: started
  };
  animateDamageClock();

  // Solo el atacante programa el timeout real
  if (duelRole !== res.attackerRole) return;
  if (sameTick) return;

  if (_damageTickTimer) { clearTimeout(_damageTickTimer); _damageTickTimer = null; }
  const elapsed = Date.now() - started;
  const wait = Math.max(50, DAMAGE_TICK_MS - elapsed);
  _damageTickTimer = setTimeout(() => {
    _damageTickTimer = null;
    applyDamageTick().catch(err => console.warn('damage tick', err));
  }, wait);
}

function animateDamageClock() {
  if (_damageAnimRaf) cancelAnimationFrame(_damageAnimRaf);
  const ring = document.getElementById('damage-clock-ring');
  const secsEl = document.getElementById('damage-clock-secs');
  function frame() {
    if (!_damageLocal) return;
    const started = _damageLocal.tickStartedAt || Date.now();
    const elapsed = Date.now() - started;
    const p = Math.min(100, (elapsed / DAMAGE_TICK_MS) * 100);
    const leftMs = Math.max(0, DAMAGE_TICK_MS - elapsed);
    const leftSec = Math.ceil(leftMs / 1000);
    if (ring) ring.style.setProperty('--p', p.toFixed(2));
    if (secsEl) secsEl.textContent = String(leftSec);
    if (elapsed < DAMAGE_TICK_MS && currentDuelData && isDamageResolutionActive(currentDuelData)) {
      _damageAnimRaf = requestAnimationFrame(frame);
    }
  }
  _damageAnimRaf = requestAnimationFrame(frame);
}

let _lastDamageRemaining = null;

function renderDamageClockUI(d) {
  const panel = document.getElementById('damage-clock-panel');
  const stopBtn = document.getElementById('damage-stop-btn');
  const myStop = document.getElementById('my-deck-stop');
  const oppStop = document.getElementById('opp-deck-stop');
  const res = d && d.damageResolution;
  const active = !!(res && res.active && !res.stopped);

  // Clientes que no escriben el tick también sienten el golpe al bajar remaining
  if (res && typeof res.remaining === 'number') {
    if (_lastDamageRemaining != null && res.remaining < _lastDamageRemaining) {
      if (!duelRole || res.attackerRole !== duelRole) {
        triggerArenaHitFeedback();
      }
    }
    _lastDamageRemaining = res.remaining;
  } else if (!active) {
    _lastDamageRemaining = null;
  }

  if (panel) panel.classList.toggle('active', active || !!(res && res.stopped && res.updatedAt && (Date.now() - res.updatedAt < 2500)));

  if (!res) {
    if (myStop) myStop.classList.remove('visible');
    if (oppStop) oppStop.classList.remove('visible');
    if (stopBtn) stopBtn.classList.remove('visible');
    return;
  }

  const remainingEl = document.getElementById('damage-clock-remaining');
  const totalEl = document.getElementById('damage-clock-total');
  const statusEl = document.getElementById('damage-clock-status');
  if (remainingEl) remainingEl.textContent = String(res.remaining != null ? res.remaining : 0);
  if (totalEl) totalEl.textContent = String(res.total != null ? res.total : 0);

  const iAmTarget = duelRole && res.targetRole === duelRole;
  const iAmAttacker = duelRole && res.attackerRole === duelRole;

  if (statusEl) {
    if (res.stopped) {
      statusEl.textContent = 'STOP · daño restante cancelado';
      statusEl.style.color = '#ff6688';
    } else if (!active) {
      statusEl.textContent = 'Resolución completada';
      statusEl.style.color = '#66ff99';
    } else if (iAmTarget) {
      statusEl.textContent = 'Te están aplicando daño · descartá cartas · STOP si frenás';
      statusEl.style.color = '#ffcc55';
    } else if (iAmAttacker) {
      statusEl.textContent = 'Tu daño se está resolviendo (12s por carta)';
      statusEl.style.color = 'var(--neon-cyan)';
    } else {
      statusEl.textContent = (res.label || 'Daño') + ' en curso';
    }
  }

  // STOP visible solo para el que recibe daño
  if (stopBtn) stopBtn.classList.toggle('visible', active && iAmTarget);
  if (myStop) myStop.classList.toggle('visible', active && iAmTarget);
  if (oppStop) {
    // indicador visual en el panel rival cuando YO soy el atacante
    oppStop.classList.toggle('visible', active && iAmAttacker);
  }

  if (active) {
    scheduleDamageTickFromState(d);
  } else {
    clearDamageTimers();
    _damageLocal = null;
  }
}

async function declareRoundWinner() {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const selected = duelRole === 'host' ? d.hostSelected : d.guestSelected;
  if (selected === null || selected === undefined) {
    alert('Primero elegí el Bakugan que ganó la ronda.');
    return;
  }

  let myLive = getLiveStatsArray(d, duelRole);
  const slot = myLive[selected] || { bpower: 0, damage: 0, form: 'base', appliedCores: {}, deployed: false };

  if (slot.deployed) {
    const dmg = parseInt(slot.damage, 10) || 0;
    alert('Este Bakugan ya está desplegado.\nDaño actual: ' + dmg + '\n\nDescontá manualmente las cartas del rival si corresponde.');
    return;
  }

  // 1) Desplegar mi Bakugan ganador (bloquea cores)
  myLive[selected] = {
    ...slot,
    appliedCores: slot.appliedCores || {},
    deployed: true
  };

  // 2) El rival activo pierde la ronda: devuelve cores a Matrix (stats de forma activa)
  const oppRole = duelRole === 'host' ? 'guest' : 'host';
  const oppSelected = duelRole === 'host' ? d.guestSelected : d.hostSelected;
  let oppLive = getLiveStatsArray(d, oppRole);
  let oppBpower = duelRole === 'host' ? d.guestBpower : d.hostBpower;
  let oppDamage = duelRole === 'host' ? d.guestDamage : d.hostDamage;

  if (oppSelected !== null && oppSelected !== undefined) {
    const oppSlot = oppLive[oppSelected] || { form: 'base', formBaseB: 0, formBaseD: 0, appliedCores: {} };
    const formBaseB = oppSlot.formBaseB != null
      ? (parseInt(oppSlot.formBaseB, 10) || 0)
      : (parseInt(oppSlot.bpower, 10) || 0);
    const formBaseD = oppSlot.formBaseD != null
      ? (parseInt(oppSlot.formBaseD, 10) || 0)
      : (parseInt(oppSlot.damage, 10) || 0);
    oppLive[oppSelected] = {
      ...oppSlot,
      bpower: formBaseB,
      damage: formBaseD,
      formBaseB: formBaseB,
      formBaseD: formBaseD,
      appliedCores: {},
      deployed: false
    };
    oppBpower = formBaseB;
    oppDamage = formBaseD;
  }

  const updates = duelRole === 'host'
    ? {
        hostLiveStats: myLive,
        hostBpower: slot.bpower,
        hostDamage: slot.damage,
        guestLiveStats: oppLive,
        guestBpower: oppBpower,
        guestDamage: oppDamage
      }
    : {
        guestLiveStats: myLive,
        guestBpower: slot.bpower,
        guestDamage: slot.damage,
        hostLiveStats: oppLive,
        hostBpower: oppBpower,
        hostDamage: oppDamage
      };

  await db.collection('duels').doc(activeRoomCode).update(updates);

  const dmg = parseInt(slot.damage, 10) || 0;
  if (dmg > 0) {
    alert('¡Ronda ganada!\n\nTu Bakugan queda desplegado y el rival devolvió sus cores.\n\nDaño del vencedor: ' + dmg + '\n\nDescontá manualmente las cartas del rival con los botones de vida del deck.');
  } else {
    alert('¡Ronda ganada!\nTu Bakugan queda desplegado y el rival devolvió sus cores a la Matrix.');
  }
}

/** Compat: alias viejos */
async function markActiveBakuganDeployed() {
  return declareRoundWinner();
}

async function resetActiveBakuganToBase() {
  alert('Ya no hace falta declarar derrota manualmente.\nCuando el rival pulse “Declarar vencedor”, tu Bakugan activo pierde la ronda y devuelve los cores automáticamente.');
}


async function releaseDeployedCoresAfterTurn() {
  if (!activeRoomCode || !currentDuelData) return;
  const d = currentDuelData;
  const updates = {};
  ['host', 'guest'].forEach(role => {
    const live = getLiveStatsArray(d, role);
    if (countDeployed(live) >= 3) {
      const released = releaseAllDeployedCores(live);
      if (role === 'host') {
        updates.hostLiveStats = released;
        const sel = d.hostSelected;
        if (sel != null && released[sel]) {
          updates.hostBpower = released[sel].bpower;
          updates.hostDamage = released[sel].damage;
        }
      } else {
        updates.guestLiveStats = released;
        const sel = d.guestSelected;
        if (sel != null && released[sel]) {
          updates.guestBpower = released[sel].bpower;
          updates.guestDamage = released[sel].damage;
        }
      }
    }
  });
  if (Object.keys(updates).length) {
    await db.collection('duels').doc(activeRoomCode).update(updates);
  }
}

async function executeTeamAttack() {
  if (!activeRoomCode || !duelRole || !currentDuelData) return;
  const d = currentDuelData;
  const liveArr = getLiveStatsArray(d, duelRole);
  if (countDeployed(liveArr) < 3) {
    alert('Team Attack requiere los 3 Bakugans desplegados (ganaron sus 3 rondas).');
    return;
  }
  const totalD = [0, 1, 2].reduce((sum, i) => sum + (parseInt(liveArr[i] && liveArr[i].damage, 10) || 0), 0);
  const raw = duelRole === 'host' ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const detail = [0, 1, 2].map(i => {
    const n = (raw[i] && raw[i].name) || ('B' + (i + 1));
    const dm = parseInt(liveArr[i] && liveArr[i].damage, 10) || 0;
    return n + ': ⚔ ' + dm;
  }).join('\n');

  const ok = confirm(
    'TEAM ATTACK\n\n' +
    detail + '\n\n' +
    'Daño total: ' + totalD + '\n\n' +
    'Al confirmar:\n' +
    '• Se liberan los 3 Bakugans (ya no desplegados)\n' +
    '• Los Bakucores vuelven a la Matrix\n' +
    '• Podés seguir lanzando\n\n' +
    'Descontá el daño del rival de forma manual.\n\n¿Liberar equipo?'
  );
  if (!ok) return;

  const released = releaseAllDeployedCores(liveArr);
  const sel = duelRole === 'host' ? d.hostSelected : d.guestSelected;
  const updates = {};
  if (duelRole === 'host') {
    updates.hostLiveStats = released;
    if (sel != null && released[sel]) {
      updates.hostBpower = released[sel].bpower;
      updates.hostDamage = released[sel].damage;
    }
  } else {
    updates.guestLiveStats = released;
    if (sel != null && released[sel]) {
      updates.guestBpower = released[sel].bpower;
      updates.guestDamage = released[sel].damage;
    }
  }
  await db.collection('duels').doc(activeRoomCode).update(updates);
  alert('Team Attack resuelto.\nDaño total declarado: ' + totalD + '\nEquipo liberado · cores de vuelta a la Matrix.');
}

async function handleMainActionButton() {
  if (!activeRoomCode || !currentDuelData || !duelRole) return;
  const d = currentDuelData;

  if (!d.initialDrawDone) {
    // Mano inicial: solo roba -6 a ambos
    await db.collection('duels').doc(activeRoomCode).update({
      hostDeck: (d.hostDeck ?? 50) - 6,
      guestDeck: (d.guestDeck ?? 50) - 6,
      initialDrawDone: true
    });
  } else {
    // Turno normal: robar -1 a ambos + pasar prioridad (cierra el turno)
    if (d.priorityRole && d.priorityRole !== duelRole) {
      alert('No tenés la prioridad. Tenés que esperar a que el rival te la pase.');
      return;
    }
    const nextTurn = (d.turn || 1) + 1;
    const nextPrio = d.priorityRole === 'host' ? 'guest' : 'host';
    await db.collection('duels').doc(activeRoomCode).update({
      hostDeck: (d.hostDeck ?? 50) - 1,
      guestDeck: (d.guestDeck ?? 50) - 1,
      turn: nextTurn,
      priorityRole: nextPrio
    });
    // Fin de turno: si los 3 estaban desplegados, liberar cores a Matrix
    try { await releaseDeployedCoresAfterTurn(); } catch (e) {}
  }
}

async function advanceDuelTurn() {
  if (!activeRoomCode || !currentDuelData || !duelRole) return;
  const d = currentDuelData;
  if (d.priorityRole && d.priorityRole !== duelRole) {
    alert('No tenés la prioridad. Tenés que esperar a que el rival te la pase.');
    return;
  }
  const nextTurn = (d.turn || 1) + 1;
  const nextPrio = d.priorityRole === 'host' ? 'guest' : 'host';
  await db.collection('duels').doc(activeRoomCode).update({
    turn: nextTurn,
    priorityRole: nextPrio
  });
  // Fin de turno por pasar prioridad: liberar cores si ciclo de 3 desplegados
  try { await releaseDeployedCoresAfterTurn(); } catch (e) {}
}

/** SALIR: si hay combate activo, cuenta como abandono (-50 / +25) */
async function requestLeaveDuel() {
  if (!activeRoomCode) {
    closeDuelScreen();
    return;
  }
  const d = currentDuelData;
  const inActiveFight = d && d.hostId && d.guestId && d.status !== 'ended';
  if (inActiveFight) {
    if (!confirm('¿Salir de la partida?\n\nCuenta como abandono:\n• Vos: -50 puntos\n• Rival: +25 puntos')) return;
    await handleDuelEnd('forfeit_loss');
    return;
  }
  // Sala de espera o sin rival: salir sin penalidad
  await leaveDuelRoom(false);
}

async function forfeitDuel() {
  // Compat: mismo flujo que salir en combate
  await requestLeaveDuel();
}

async function applyMatchResult(player, kind) {
  if (!player) return;
  if (kind === 'win') {
    player.wins = (player.wins || 0) + 1;
    player.points = (player.points || 0) + 50;
  } else if (kind === 'loss') {
    player.losses = (player.losses || 0) + 1;
    player.points = Math.max(0, (player.points || 0) - 25);
  } else if (kind === 'forfeit_win') {
    player.wins = (player.wins || 0) + 1;
    player.points = (player.points || 0) + 25;
  } else if (kind === 'forfeit_loss') {
    player.losses = (player.losses || 0) + 1;
    player.points = Math.max(0, (player.points || 0) - 50);
  }
  await saveUserToCloud(player);
}


/* ================= HISTORIAL DE PARTIDAS ================= */
function snapshotTeamForHistory(role, d) {
  const isHost = role === 'host';
  const raw = isHost ? (d.hostBakugan || []) : (d.guestBakugan || []);
  const live = getLiveStatsArray(d, role);
  const team = [0, 1, 2].map(i => {
    const b = raw[i] || {};
    const s = live[i] || {};
    const cores = normalizeBakucores(b.bakucores);
    const applied = s.appliedCores || {};
    const coreCombo = Object.keys(applied).map(k => {
      const meta = applied[k] || {};
      return {
        key: k,
        type: meta.coreType || '',
        fromOpp: !!meta.fromOpp,
        bpower: meta.bpower || 0,
        damage: meta.damage || 0
      };
    });
    return {
      name: b.name || ('Bakugan ' + (i + 1)),
      faction: b.faction || '',
      faction2: b.faction2 || '',
      baseBpower: parseInt(b.bpower, 10) || 0,
      baseDamage: parseInt(b.damage, 10) || 0,
      finalBpower: parseInt(s.bpower, 10) || 0,
      finalDamage: parseInt(s.damage, 10) || 0,
      form: s.form || 'base',
      deployed: !!s.deployed,
      isEvo: !!b.isEvo,
      isFusion: !!b.isFusion,
      usedEvo: (s.form === 'evo'),
      usedFusion: (s.form === 'fusion'),
      usedGear: (s.form === 'gear' || s.form === 'doublegear' || s.form === 'gear2' || !!(s.gearUsed)),
      coreCombo: coreCombo,
      coreTypes: cores.map(c => c && c.type).filter(Boolean)
    };
  });
  return team;
}

function buildMatchHistoryPayload(result, d) {
  const iAmHost = duelRole === 'host';
  const myId = currentUserId;
  const oppId = iAmHost ? d.guestId : d.hostId;
  const myNick = iAmHost ? (d.hostNick || 'Yo') : (d.guestNick || 'Yo');
  const oppNick = iAmHost ? (d.guestNick || 'Rival') : (d.hostNick || 'Rival');
  const myDeck = iAmHost ? (d.hostDeck ?? 50) : (d.guestDeck ?? 50);
  const oppDeck = iAmHost ? (d.guestDeck ?? 50) : (d.hostDeck ?? 50);
  const myTeam = snapshotTeamForHistory(iAmHost ? 'host' : 'guest', d);
  const oppTeam = snapshotTeamForHistory(iAmHost ? 'guest' : 'host', d);

  const allMine = myTeam.slice();
  let maxB = null, maxD = null;
  allMine.forEach(b => {
    if (!maxB || b.finalBpower > maxB.finalBpower) maxB = b;
    if (!maxD || b.finalDamage > maxD.finalDamage) maxD = b;
  });

  // MVP: mayor daño entre desplegados, o mayor B-Power
  const deployed = allMine.filter(b => b.deployed);
  let mvp = null;
  if (deployed.length) {
    mvp = deployed.slice().sort((a, b) => (b.finalDamage - a.finalDamage) || (b.finalBpower - a.finalBpower))[0];
  } else if (maxD) {
    mvp = maxD;
  }

  // % victorias / derrotas en ESTA partida (rondas = desplegados)
  const roundWins = deployed.length;
  const roundLosses = Math.max(0, 3 - roundWins);
  const withRates = allMine.map(b => {
    const w = b.deployed ? 1 : 0;
    const l = b.deployed ? 0 : 1;
    return {
      name: b.name,
      winPct: Math.round((w / Math.max(1, w + l)) * 100),
      lossPct: Math.round((l / Math.max(1, w + l)) * 100),
      deployed: b.deployed
    };
  });
  const mostWins = withRates.slice().sort((a, b) => b.winPct - a.winPct)[0] || null;
  const mostLosses = withRates.slice().sort((a, b) => b.lossPct - a.lossPct)[0] || null;

  const evos = allMine.filter(b => b.usedEvo).map(b => b.name);
  const fusions = allMine.filter(b => b.usedFusion).map(b => b.name);
  const gears = allMine.filter(b => b.usedGear).map(b => b.name);

  const factions = [];
  allMine.forEach(b => {
    if (b.faction) factions.push(b.faction);
    if (b.faction2) factions.push(b.faction2);
  });
  const uniqueFactions = [...new Set(factions.filter(Boolean))];

  const coreCombos = [];
  allMine.forEach(b => {
    (b.coreCombo || []).forEach(c => {
      const label = (c.type || 'core') + (c.fromOpp ? ' (rival)' : '');
      if (label) coreCombos.push(b.name + ': ' + label);
    });
  });

  const outcome = result === 'forfeit_loss' ? 'forfeit_loss' : (result === 'win' ? 'win' : 'loss');
  const winnerId = outcome === 'win' ? myId : (outcome === 'loss' || outcome === 'forfeit_loss' ? oppId : null);
  const loserId = outcome === 'win' ? oppId : myId;

  return {
    roomCode: activeRoomCode || '',
    playedAt: Date.now(),
    playedAtISO: new Date().toISOString(),
    result: outcome,
    playerId: myId,
    playerNick: myNick,
    opponentId: oppId || '',
    opponentNick: oppNick,
    winnerId: winnerId || '',
    loserId: loserId || '',
    winnerNick: outcome === 'win' ? myNick : oppNick,
    loserNick: outcome === 'win' ? oppNick : myNick,
    myDeckFinal: myDeck,
    oppDeckFinal: oppDeck,
    myTeam: myTeam,
    oppTeam: oppTeam,
    maxBpowerBakugan: maxB ? { name: maxB.name, value: maxB.finalBpower } : null,
    maxDamageBakugan: maxD ? { name: maxD.name, value: maxD.finalDamage } : null,
    mvpBakugan: mvp ? { name: mvp.name, bpower: mvp.finalBpower, damage: mvp.finalDamage } : null,
    mostWinPct: mostWins,
    mostLossPct: mostLosses,
    evosUsed: evos,
    fusionsUsed: fusions,
    gearsUsed: gears,
    factionsPlayed: uniqueFactions,
    bakucoreCombos: coreCombos,
    turn: d.turn || 1,
    forfeit: outcome === 'forfeit_loss'
  };
}

async function saveMatchHistoryEntry(result, d) {
  if (!currentUserId || !d) return null;
  const payload = buildMatchHistoryPayload(result, d);
  payload.id = payload.id || (activeRoomCode + '_' + currentUserId + '_' + (payload.playedAt || Date.now()));
  let saved = false;

  // 1) Subcolección del jugador
  try {
    const ref = db.collection('players').doc(currentUserId).collection('matchHistory').doc(String(payload.id));
    await ref.set(payload, { merge: true });
    saved = true;
  } catch (err) {
    console.warn('matchHistory subcolección falló', err);
  }

  // 2) Fallback: campo matchLog en el documento del jugador (funciona con reglas típicas)
  try {
    const me = getMyPlayer();
    const prev = (me && Array.isArray(me.matchLog)) ? me.matchLog.slice() : [];
    // evitar duplicados por id
    const filtered = prev.filter(x => x && x.id !== payload.id && !(x.roomCode === payload.roomCode && x.playedAt === payload.playedAt));
    filtered.unshift(payload);
    const nextLog = filtered.slice(0, 40);
    await db.collection('players').doc(currentUserId).set({ matchLog: nextLog }, { merge: true });
    if (me) me.matchLog = nextLog;
    saved = true;
  } catch (err2) {
    console.warn('matchLog fallback falló', err2);
  }

  // 3) Intento colección global (opcional)
  try {
    await db.collection('matchHistory').doc(String(payload.id)).set({ ...payload, id: payload.id }, { merge: true });
  } catch (e) {}

  return saved ? payload : null;
}

let _matchHistoryCache = [];
let _matchHistoryLoadedFor = null;

async function loadMatchHistory() {
  const list = document.getElementById('historial-list');
  if (!list) return;
  if (!currentUserId) {
    list.innerHTML = '<div class="hist-empty">Iniciá sesión para ver tu historial.</div>';
    return;
  }
  list.innerHTML = '<div class="hist-empty">Cargando historial…</div>';
  let items = [];

  // A) Subcolección
  try {
    const snap = await db.collection('players').doc(currentUserId).collection('matchHistory')
      .orderBy('playedAt', 'desc')
      .limit(40)
      .get();
    items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    try {
      const snap = await db.collection('players').doc(currentUserId).collection('matchHistory').limit(40).get();
      items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e2) {
      console.warn('historial subcolección', e2);
    }
  }

  // B) Fallback matchLog del perfil
  try {
    const me = getMyPlayer();
    let log = (me && Array.isArray(me.matchLog)) ? me.matchLog.slice() : [];
    if (!log.length) {
      const doc = await db.collection('players').doc(currentUserId).get();
      if (doc.exists) {
        const data = doc.data() || {};
        if (Array.isArray(data.matchLog)) log = data.matchLog.slice();
        // sincronizar cache local
        if (me) me.matchLog = log;
      }
    }
    log.forEach(entry => {
      if (!entry) return;
      const id = entry.id || (entry.roomCode + '_' + entry.playedAt);
      if (!items.some(x => (x.id === id) || (x.roomCode === entry.roomCode && x.playedAt === entry.playedAt))) {
        items.push({ ...entry, id });
      }
    });
  } catch (e3) {
    console.warn('matchLog read', e3);
  }

  items.sort((a, b) => (b.playedAt || 0) - (a.playedAt || 0));
  _matchHistoryCache = items.slice(0, 40);
  _matchHistoryLoadedFor = currentUserId;
  renderMatchHistoryList(_matchHistoryCache);
}

function formatHistDate(ts, iso) {
  try {
    const d = ts ? new Date(ts) : (iso ? new Date(iso) : null);
    if (!d || isNaN(d.getTime())) return '—';
    return d.toLocaleString('es-AR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  } catch (e) {
    return '—';
  }
}

function histResultBadge(result) {
  if (result === 'win') return '<span class="hist-result win">VICTORIA</span>';
  if (result === 'forfeit_loss') return '<span class="hist-result forfeit">ABANDONO</span>';
  return '<span class="hist-result loss">DERROTA</span>';
}

function renderMatchHistoryList(items) {
  const list = document.getElementById('historial-list');
  if (!list) return;
  if (!items || !items.length) {
    list.innerHTML = '<div class="hist-empty">Aún no hay partidas registradas.<br/>Cuando termines un duelo aparecerá aquí.</div>';
    return;
  }
  list.innerHTML = items.map((m, idx) => {
    const dateStr = formatHistDate(m.playedAt, m.playedAtISO);
    const opp = m.opponentNick || 'Rival';
    return `<div class="hist-card" id="hist-card-${idx}">
      <button type="button" class="hist-card-head" onclick="toggleHistCard(${idx})">
        ${histResultBadge(m.result)}
        <div class="hist-summary">
          <div class="opp">vs ${opp}</div>
          <div class="meta">${dateStr} · HP ${m.myDeckFinal ?? '—'} / ${m.oppDeckFinal ?? '—'}</div>
        </div>
        <span class="hist-chevron">▼</span>
      </button>
      <div class="hist-body" id="hist-body-${idx}"></div>
    </div>`;
  }).join('');
}

function toggleHistCard(idx) {
  const card = document.getElementById('hist-card-' + idx);
  if (!card) return;
  const open = !card.classList.contains('open');
  document.querySelectorAll('.hist-card.open').forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open', open);
  if (open) {
    const body = document.getElementById('hist-body-' + idx);
    const m = _matchHistoryCache[idx];
    if (body && m) body.innerHTML = renderMatchHistoryDetail(m);
  }
}

function renderTeamRows(team, title) {
  if (!team || !team.length) return `<div class="hist-section-title">${title}</div><div style="opacity:0.5;font-size:0.75rem;">Sin datos</div>`;
  const rows = team.map(b => {
    const formTag = b.form && b.form !== 'base' ? ` · ${String(b.form).toUpperCase()}` : '';
    const dep = b.deployed ? ' ★' : '';
    return `<div class="hist-baku-row">
      <span class="bn">${b.name || '—'}${dep}</span>
      <span>B ${b.finalBpower ?? b.baseBpower ?? 0}</span>
      <span>⚔ ${b.finalDamage ?? b.baseDamage ?? 0}</span>
      <span style="opacity:0.7;">${b.faction || ''}${b.faction2 ? ' / ' + b.faction2 : ''}${formTag}</span>
    </div>`;
  }).join('');
  return `<div class="hist-section-title">${title}</div><div class="hist-team">${rows}</div>`;
}

function renderMatchHistoryDetail(m) {
  const dateStr = formatHistDate(m.playedAt, m.playedAtISO);
  const chips = (arr, cls) => (arr && arr.length)
    ? `<div class="hist-chips">${arr.map(x => `<span class="hist-chip ${cls || ''}">${x}</span>`).join('')}</div>`
    : '<span style="opacity:0.5;font-size:0.75rem;">Ninguna</span>';

  return `
    <div class="hist-section-title">Encuentro</div>
    <div class="hist-grid">
      <div class="hist-kv"><div class="k">Fecha y hora</div><div class="v">${dateStr}</div></div>
      <div class="hist-kv"><div class="k">Resultado</div><div class="v">${m.result === 'win' ? 'Victoria' : (m.result === 'forfeit_loss' ? 'Abandono' : 'Derrota')}</div></div>
      <div class="hist-kv"><div class="k">Jugadores</div><div class="v">${m.playerNick || 'Yo'} vs ${m.opponentNick || 'Rival'}</div></div>
      <div class="hist-kv"><div class="k">Ganador / Perdedor</div><div class="v">${m.winnerNick || '—'} / ${m.loserNick || '—'}</div></div>
      <div class="hist-kv"><div class="k">HP final (cartas)</div><div class="v">Vos: ${m.myDeckFinal ?? '—'} · Rival: ${m.oppDeckFinal ?? '—'}</div></div>
      <div class="hist-kv"><div class="k">Turno final</div><div class="v">${m.turn || '—'}</div></div>
    </div>

    ${renderTeamRows(m.myTeam, 'Tu equipo')}
    ${renderTeamRows(m.oppTeam, 'Equipo rival')}

    <div class="hist-section-title">Destacados</div>
    <div class="hist-grid">
      <div class="hist-kv"><div class="k">Mayor B-Power individual</div><div class="v">${m.maxBpowerBakugan ? (m.maxBpowerBakugan.name + ' · B ' + m.maxBpowerBakugan.value) : '—'}</div></div>
      <div class="hist-kv"><div class="k">Mayor Daño individual</div><div class="v">${m.maxDamageBakugan ? (m.maxDamageBakugan.name + ' · ⚔ ' + m.maxDamageBakugan.value) : '—'}</div></div>
      <div class="hist-kv"><div class="k">Bakugan MVP</div><div class="v">${m.mvpBakugan ? (m.mvpBakugan.name + ' · B ' + m.mvpBakugan.bpower + ' · ⚔ ' + m.mvpBakugan.damage) : '—'}</div></div>
      <div class="hist-kv"><div class="k">Mayor % victorias (rondas)</div><div class="v">${m.mostWinPct ? (m.mostWinPct.name + ' · ' + m.mostWinPct.winPct + '%') : '—'}</div></div>
      <div class="hist-kv"><div class="k">Mayor % derrotas (rondas)</div><div class="v">${m.mostLossPct ? (m.mostLossPct.name + ' · ' + m.mostLossPct.lossPct + '%') : '—'}</div></div>
      <div class="hist-kv"><div class="k">Facciones jugadas</div><div class="v">${(m.factionsPlayed && m.factionsPlayed.length) ? m.factionsPlayed.join(', ') : '—'}</div></div>
    </div>

    <div class="hist-section-title">Evos utilizadas</div>
    ${chips(m.evosUsed, 'orange')}
    <div class="hist-section-title">Fusiones utilizadas</div>
    ${chips(m.fusionsUsed, 'magenta')}
    <div class="hist-section-title">Gears utilizados</div>
    ${chips(m.gearsUsed, '')}
    <div class="hist-section-title">Combo de Bakucores</div>
    ${chips(m.bakucoreCombos, '')}
  `;
}

async function handleDuelEnd(result) {
  // result: 'win' | 'loss' | 'forfeit_loss'
  if (!activeRoomCode || !currentDuelData) return;

  // Evitar doble aplicación de puntos en el mismo cliente
  if (window._duelEndHandledRoom === activeRoomCode) {
    return;
  }
  window._duelEndHandledRoom = activeRoomCode;

  const d = currentDuelData;
  const alreadyEnded = d.status === 'ended';

  if (!alreadyEnded) {
    try {
      await db.collection('duels').doc(activeRoomCode).update({
        status: 'ended',
        endResult: result,
        endedBy: currentUserId
      });
    } catch (e) {}
  }

  const me = getMyPlayer();
  const oppId = duelRole === 'host' ? d.guestId : d.hostId;
  const opp = players.find(p => p.id === oppId);

  // Guardar historial SIEMPRE (cada jugador guarda su vista)
  try {
    await saveMatchHistoryEntry(result, d);
  } catch (err) {
    console.warn('No se pudo guardar historial', err);
    try {
      alert('La partida terminó, pero el historial no se pudo guardar. Revisá las reglas de Firestore (matchLog / matchHistory).');
    } catch (e) {}
  }

  // Puntos: solo una vez por cliente
  if (result === 'forfeit_loss') {
    if (me) await applyMatchResult(me, 'forfeit_loss');
    if (opp) await applyMatchResult(opp, 'forfeit_win');
    alert('🏳️ Abandonaste. -50 pts. El rival gana +25 pts.');
  } else if (result === 'win') {
    if (me) await applyMatchResult(me, 'win');
    alert('🏆 ¡Victoria! +50 pts.');
  } else {
    if (me) await applyMatchResult(me, 'loss');
    alert('💥 Derrota. -25 pts.');
  }

  closeDuelScreen();
}

async function leaveDuelRoom(silent) {
  if (duelUnsub) {
    duelUnsub();
    duelUnsub = null;
  }
  if (activeRoomCode && duelRole === 'host' && currentDuelData && !currentDuelData.guestId) {
    // Host cancela sala vacía
    try { await db.collection('duels').doc(activeRoomCode).delete(); } catch (e) {}
  }
  activeRoomCode = null;
  duelRole = null;
  currentDuelData = null;
  if (!silent) {
    document.getElementById('duel-screen').style.display = 'none';
    if (currentUserId) document.getElementById('main-app').style.display = 'flex';
    playLobbyMusic();
  }
}

/* ================= TUTORIAL INTERACTIVO ================= */
const TUT_TYPES = [
  { name: 'Acción', img: 'ENG_51_CO_AV_Pyrobliterator_action_card.png' },
  { name: 'Flip', img: 'flip_ejemplo.png' },
  { name: 'Hero', img: 'heroe_pyrus_ejemplo.png' },
  { name: 'Baku-Gear', img: 'carta_gear.png' },
  { name: 'Geogan', img: 'geogan_ejemplo.jpg' },
  { name: 'Evo', img: 'Fenneca_Ultra_(Diamond_Card)_ENG_218_RA_SG (1)_evo_fennca.png' }
];
const TUT_BAKU = [
  {
    name: 'Fenneca Ultra',
    closed: 'haos_fenneca_ultra(cerrado).png',
    open: 'haos_fenneca_ultra(abierto).png',
    core: 'core_fist.png',
    coreBack: 'fist_reverso.png',
    charCard: 'Fenneca_Ultra_(Haos_Card)_ENG_264_CC_SG (3).png',
    dmg: 2
  },
  {
    name: 'Trhyno Mithyc',
    closed: 'Pyrus_Trhyno_(abierto).png',
    open: 'Pyrus_Trhyno_(abierto).png',
    core: 'core_fist.png',
    coreBack: 'fist_reverso.png',
    charCard: '428px-Trhyno_(Pyrus_Card)_ENG_77_CC_LE.png',
    dmg: 7
  },
  {
    name: 'Sairus Ultra',
    closed: 'Haos_Sairus_Ultra_BLE_(abierto).png',
    open: 'Haos_Sairus_Ultra_BLE_(abierto).png',
    core: 'core_shield.png',
    coreBack: 'shield_reverso.png',
    charCard: 'Ultra_Sairus_(Haos_Card)_ENG_96_CC_LE.png',
    dmg: 9
  },
  {
    name: 'Trox Ultra',
    closed: '800px-Haos_Trox_Ultra_BAA_(Open).png',
    open: '800px-Haos_Trox_Ultra_BAA_(Open).png',
    core: 'Core_helix.png',
    coreBack: 'shield_reverso.png',
    charCard: '',
    dmg: 3
  }
];
const TUT_CHAR_BACK = 'reverso_carta_de_personaje.png';

let tutStep = 0;
let tutTimers = [];

const TUT_FENNE_POSES = [
  'Lady_fenne_tutorial_juego(1).png',
  'Lady_fenne_tutorial_juego(2).png',
  'Lady_fenne_tutorial_juego(3).png',
  'Lady_fenne_tutorial_juego(4).png',
  'Lady_fenne_tutorial_juego(5).png'
];
let tutFennePoseIdx = 0;

function tutStartFenneTalk(imgEl) {
  if (!imgEl) return;
  tutFennePoseIdx = 0;
  const tick = () => {
    if (!imgEl.isConnected) return;
    if (!document.getElementById('tutorial-overlay')?.classList.contains('open')) return;
    tutFennePoseIdx = (tutFennePoseIdx + 1) % TUT_FENNE_POSES.length;
    // preload next then swap to avoid blank frames
    const next = TUT_FENNE_POSES[tutFennePoseIdx];
    const pre = new Image();
    pre.onload = () => { if (imgEl.isConnected) imgEl.src = next; };
    pre.onerror = () => { if (imgEl.isConnected) imgEl.src = next; };
    pre.src = next;
    tutLater(tick, 550);
  };
  tutLater(tick, 400);
}

function tutClearTimers() {
  tutTimers.forEach(t => clearTimeout(t));
  tutTimers = [];
}

function tutLater(fn, ms) {
  const id = setTimeout(fn, ms);
  tutTimers.push(id);
  return id;
}

function openTutorial() {
  tutStep = 0;
  const ov = document.getElementById('tutorial-overlay');
  if (ov) ov.classList.add('open');
  renderTutorialStep();
}

function closeTutorial() {
  tutClearTimers();
  document.querySelectorAll('.tut-fly-card').forEach(el => el.remove());
  const lb = document.getElementById('tut-lightbox');
  if (lb) lb.classList.remove('open');
  const ov = document.getElementById('tutorial-overlay');
  if (ov) ov.classList.remove('open');
}

function renderTutorialStep() {
  tutClearTimers();
  const bubble = document.getElementById('tut-bubble');
  const stage = document.getElementById('tut-stage');
  const actions = document.getElementById('tut-actions');
  const prog = document.getElementById('tut-progress');
  if (!bubble || !stage || !actions) return;

  const steps = [
    {
      progress: '1 / 14',
      text: t('tut.step1'),
      stage: () => { stage.innerHTML = '<div class="tut-fenne-orb tut-fenne-orb-lg" style="margin:0 auto;"><img id="tut-fenne-stage" src="Lady_fenne_tutorial_juego(1).png" onerror="this.style.display=\'none\'" /></div><p style="margin-top:12px;opacity:0.7;font-size:0.8rem;">' + t('tut.step1sub') + '</p>'; tutStartFenneTalk(document.getElementById('tut-fenne-stage')); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '2 / 14',
      text: t('tut.step2'),
      stage: () => { stage.innerHTML = '<div class="tut-deck-wrap"><div class="tut-deck-stack" id="tut-deck-anim"></div><div class="tut-reveal-row" id="tut-reveal-row"></div></div>'; tutAnimDeck(); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '3 / 14',
      text: t('tut.step3'),
      stage: () => { tutShowCardType(0); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '4 / 14',
      text: t('tut.step4'),
      stage: () => { tutShowCardType(2); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '5 / 14',
      text: t('tut.step5'),
      stage: () => { tutShowCardType(3); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '6 / 14',
      text: t('tut.step6'),
      stage: () => { tutShowCardType(5); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '7 / 14',
      text: t('tut.step7'),
      stage: () => { tutShowCardType(1); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '8 / 14',
      text: t('tut.step8'),
      stage: () => { tutShowCardType(4); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '9 / 14',
      text: t('tut.step9'),
      stage: () => { stage.innerHTML = '<div class="tut-section-label">' + t('tut.label.bakugans') + '</div><div class="tut-baku-row" id="tut-baku-row"></div><div class="tut-section-label">' + t('tut.label.bakucores') + '</div><div class="tut-core-row" id="tut-core-row"></div><div class="tut-section-label">' + t('tut.label.chars') + '</div><div class="tut-char-row" id="tut-char-row"></div>'; tutAnimBakus(); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '10 / 14',
      text: t('tut.step10'),
      stage: () => { stage.innerHTML = '<div class="tut-deck-wrap"><div class="tut-reveal-row" id="tut-reveal-row"></div></div>'; tutAnimDeck(); },
      buttons: [
        { label: t('tut.reviewCards'), fn: 'tutGo(2)' },
        { label: t('tut.continueTurns'), fn: 'tutNext()' }
      ]
    },
    {
      progress: '11 / 14',
      text: t('tut.step11'),
      stage: () => { stage.innerHTML = '<div class="tut-deck-wrap"><div class="tut-deck-stack" id="tut-deck-anim"></div></div><p style="text-align:center;font-size:0.75rem;opacity:0.75;margin-top:10px;">' + t('tut.step11sub') + '</p>'; tutAnimDeck(); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '12 / 14',
      text: t('tut.step12'),
      stage: () => { stage.innerHTML = '<div class="tut-stat-demo"><div class="tut-stat-chip" id="tut-chip-b"><img src="simbolo_bpower.png" onerror="this.remove()" /><span>B-Power</span></div><div class="tut-stat-chip dmg" id="tut-chip-d"><img src="simbolo_dano.png" onerror="this.remove()" /><span>' + t('tut.dmg') + '</span></div></div><p style="font-size:0.75rem;opacity:0.7;text-align:center;margin-top:8px;">' + t('tut.step12sub') + '</p>'; tutLater(() => { const d = document.getElementById('tut-chip-d'); if (d) d.classList.add('hl'); }, 500); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '13 / 14',
      text: t('tut.step13'),
      stage: () => { stage.innerHTML = '<div class="tut-battle" id="tut-battle"></div><div class="tut-discard" id="tut-discard"></div><div class="tut-team-row" id="tut-team"></div><div class="tut-impact" id="tut-impact" style="display:none;"></div>'; tutAnimBattle(); },
      buttons: [{ label: t('tut.continue'), fn: 'tutNext()' }]
    },
    {
      progress: '14 / 14',
      text: t('tut.step14'),
      stage: () => { stage.innerHTML = '<img src="logo_team_attack.png" style="width:72px;margin:8px;" onerror="this.style.display=\'none\'" /><p style="opacity:0.75;font-size:0.85rem;text-align:center;">' + t('tut.step14sub') + '</p>'; },
      buttons: [
        { label: t('tut.reviewDeck'), fn: 'tutGo(2)' },
        { label: t('tut.reviewCombat'), fn: 'tutGo(11)' },
        { label: t('tut.close'), fn: 'closeTutorial()' }
      ]
    }
  ];

  if (tutStep < 0) tutStep = 0;
  if (tutStep >= steps.length) tutStep = steps.length - 1;
  const s = steps[tutStep];
  if (prog) prog.textContent = s.progress;
  bubble.innerHTML = s.text;
  s.stage();
  const stepBtns = s.buttons.map(b =>
    `<button type="button" class="btn" onclick="${b.fn}">${b.label}</button>`
  ).join('');
  // Siempre se puede salir de la guía sin llegar al final
  const exitBtn = `<button type="button" class="btn btn-danger" onclick="closeTutorial()" style="flex:0 0 auto;min-width:110px;">✕ ${t('tut.close')}</button>`;
  actions.innerHTML = stepBtns + exitBtn;
  // Lady Fenne "habla" alternando poses
  const bubImg = document.getElementById('tut-fenne-bubble');
  if (bubImg) tutStartFenneTalk(bubImg);
}

function tutNext() {
  tutStep += 1;
  renderTutorialStep();
}

function tutGo(n) {
  tutStep = n;
  renderTutorialStep();
}

function tutFinishDeck() {
  // Por ahora cierra y lleva al perfil / deck
  closeTutorial();
  try { switchTab('perfil'); } catch (e) {}
  alert('Próximo módulo: construcción de Deck (Acción, Flip, Hero, Gears…). ¡Seguimos entrenando!');
}

function tutShowCardType(typeIdx) {
  const cardType = TUT_TYPES[typeIdx];
  if (!cardType) return;
  const stage = document.getElementById('tut-stage');
  if (!stage) return;
  const src = cardType.img;
  stage.innerHTML =
    '<div style="text-align:center;">' +
      '<div class="tut-reveal-card" style="width:140px;height:196px;margin:0 auto;cursor:pointer;" id="tut-focus-card">' +
        '<img src="' + src + '" alt="' + cardType.name + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.opacity=0.3" />' +
      '</div>' +
      '<div class="tut-reveal-name" style="font-size:0.85rem;margin-top:10px;">' + cardType.name + '</div>' +
      '<p style="font-size:0.65rem;opacity:0.55;margin-top:6px;">' + t('tut.tapCard') + '</p>' +
    '</div>';
  const card = document.getElementById('tut-focus-card');
  if (card) card.addEventListener('click', function () { openTutLightbox(src); });
}

function tutAnimDeck() {
  const stack = document.getElementById('tut-deck-anim');
  const row = document.getElementById('tut-reveal-row');
  if (!stack) return;
  stack.innerHTML = '';
  if (row) row.innerHTML = '';
  document.querySelectorAll('.tut-fly-card').forEach(el => { try { el.remove(); } catch (e) {} });

  // Pila estática (sin animación)
  for (let i = 0; i < 8; i++) {
    const c = document.createElement('div');
    c.className = 'tut-deck-card';
    c.style.bottom = (i * 1.1) + 'px';
    c.style.zIndex = String(i + 1);
    const im = document.createElement('img');
    im.src = 'icono_deck.png';
    im.onerror = function () { this.remove(); };
    c.appendChild(im);
    stack.appendChild(c);
  }

  // Todas las cartas visibles de una, tocables para ver en grande
  if (row) {
    TUT_TYPES.forEach((t, i) => {
      const item = document.createElement('div');
      item.className = 'tut-reveal-item show';
      item.id = 'tut-reveal-' + i;

      const card = document.createElement('div');
      card.className = 'tut-reveal-card';
      const img = document.createElement('img');
      img.alt = t.name;
      img.src = t.img;
      img.onerror = function () { this.style.opacity = '0.25'; };
      card.appendChild(img);
      card.addEventListener('click', function () { openTutLightbox(t.img); });

      const name = document.createElement('div');
      name.className = 'tut-reveal-name';
      name.textContent = t.name;

      item.appendChild(card);
      item.appendChild(name);
      row.appendChild(item);
    });
  }
}

function openTutLightbox(src) {
  const box = document.getElementById('tut-lightbox');
  const img = document.getElementById('tut-lightbox-img');
  if (!box || !img) return;
  img.src = src;
  box.classList.add('open');
}
function closeTutLightbox(ev, force) {
  if (!force && ev && ev.target && ev.target.id === 'tut-lightbox-img') return;
  const box = document.getElementById('tut-lightbox');
  if (box) box.classList.remove('open');
}

function tutAnimBakus() {
  const row = document.getElementById('tut-baku-row');
  const cores = document.getElementById('tut-core-row');
  const chars = document.getElementById('tut-char-row');
  if (!row) return;
  const list = TUT_BAKU.slice(0, 3);
  row.innerHTML = list.map((b, i) =>
    `<div class="tut-baku" data-i="${i}" onclick="tutOpenBaku(${i})">
      <img id="tut-baku-img-${i}" src="${b.closed}" alt="${b.name}" onerror="this.src='icono_bakugan.png'" />
      <div class="name">${b.name}</div>
    </div>`
  ).join('');
  // Bakucores: anverso / reverso real (fist_reverso / shield_reverso)
  cores.innerHTML = list.map((b, i) =>
    `<div class="tut-core" id="tut-core-${i}" title="Bakucore" onclick="tutFlipCore(${i})">
      <div class="tut-core-inner">
        <div class="tut-core-face"><img src="${b.core}" onerror="this.style.opacity='0.3'" /></div>
        <div class="tut-core-face back"><img src="${b.coreBack || b.core}" onerror="this.style.opacity='0.3'" /></div>
      </div>
    </div>`
  ).join('');
  // Cartas de personaje: reverso negro → anverso real
  if (chars) {
    chars.innerHTML = list.map((b, i) => {
      const front = b.charCard ? encodeURI(b.charCard) : '';
      return `<div class="tut-char" id="tut-char-${i}" onclick="tutToggleChar(${i})" title="${b.name}">
        <div class="tut-char-inner">
          <div class="tut-char-face">
            <img src="${TUT_CHAR_BACK}" alt="Reverso" onerror="this.parentElement.style.background='#111'" />
          </div>
          <div class="tut-char-face back">
            <img src="${front}" alt="${b.name}" onerror="this.parentElement.innerHTML='<span style=\'font-size:0.55rem;color:#ffcc55;padding:6px;text-align:center\'>${b.name}</span>'" />
          </div>
        </div>
      </div>`;
    }).join('') + '<div class="tut-char-label" style="width:100%;">' + t('tut.charLabel') + '</div>';
  }
  // secuencia automática: abrir Bakugan → girar core → girar carta
  list.forEach((_, i) => {
    tutLater(() => tutOpenBaku(i), 600 + i * 900);
    tutLater(() => tutFlipCore(i), 900 + i * 900);
    tutLater(() => tutFlipChar(i), 1200 + i * 900);
  });
}

function tutFlipCore(i) {
  const core = document.getElementById('tut-core-' + i);
  if (core) core.classList.toggle('flip');
}

function tutFlipChar(i) {
  const card = document.getElementById('tut-char-' + i);
  if (card) card.classList.add('flip');
}
function tutToggleChar(i) {
  const card = document.getElementById('tut-char-' + i);
  const b = TUT_BAKU[i];
  if (!card || !b) return;
  if (!card.classList.contains('flip')) {
    card.classList.add('flip');
    return;
  }
  // ya girada → abrir en grande
  if (b.charCard) openTutLightbox(encodeURI(b.charCard));
}

function tutOpenBaku(i) {
  const b = TUT_BAKU[i];
  if (!b) return;
  const wrap = document.querySelector('.tut-baku[data-i="' + i + '"]');
  const img = document.getElementById('tut-baku-img-' + i);
  if (wrap) wrap.classList.add('open');
  if (img) img.src = b.open;
  try {
    const a = new Audio('bakugan_open.mp3');
    a.volume = 0.35;
    a.play().catch(() => {});
  } catch (e) {}
}

function tutAnimBattle() {
  const battle = document.getElementById('tut-battle');
  const discard = document.getElementById('tut-discard');
  const team = document.getElementById('tut-team');
  const impact = document.getElementById('tut-impact');
  if (!battle) return;
  const me = TUT_BAKU[0];
  const opp = TUT_BAKU[3];
  battle.innerHTML = `
    <div class="fighter" id="tut-f1"><img src="${me.open}" onerror="this.style.opacity=0.3" /><div style="font-size:0.65rem;margin-top:4px;">B 1200 · ⚔ ${me.dmg}</div></div>
    <div class="tut-vs">VS</div>
    <div class="fighter" id="tut-f2"><img src="${opp.open}" onerror="this.style.opacity=0.3" /><div style="font-size:0.65rem;margin-top:4px;">B 900 · ⚔ ${opp.dmg}</div></div>
  `;
  tutLater(() => {
    const f1 = document.getElementById('tut-f1');
    const f2 = document.getElementById('tut-f2');
    if (f1) f1.classList.add('win');
    if (f2) f2.classList.add('lose');
  }, 900);
  tutLater(() => {
    if (!discard) return;
    discard.innerHTML = '';
    for (let i = 0; i < (me.dmg || 2); i++) {
      const img = document.createElement('img');
      img.src = 'icono_deck.png';
      img.style.animationDelay = (i * 0.12) + 's';
      discard.appendChild(img);
    }
  }, 1600);
  tutLater(() => {
    if (!team) return;
    const trio = TUT_BAKU.slice(0, 3);
    const total = trio.reduce((s, b) => s + (b.dmg || 0), 0);
    team.innerHTML = trio.map(b =>
      `<div style="text-align:center"><img class="baku" src="${b.open}" onerror="this.style.opacity=0.3" /><div style="font-size:0.55rem;color:#ffcc55;margin-top:2px;">⚔ ${b.dmg}</div></div>`
    ).join('') + '<img class="ta-logo" src="logo_team_attack.png" onerror="this.style.display=\'none\'" />' +
      `<div class="tut-team-dmg">TEAM ATTACK · ${trio.map(b => b.dmg).join(' + ')} = <strong>${total}</strong> ${t('tut.damageWord')}</div>`;
    if (impact) {
      impact.style.display = 'block';
      impact.textContent = t('tut.teamAttack') + ': ' + total;
    }
  }, 2800);
}



/* ================= INICIALIZACIÓN ================= */
window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  buildBakuganEditorsHtml();
  listenToDatabase();
  applyVolumeToAudios();
  document.body.classList.add('visitor-mode');
  updateAuthFabUI();

  // Escuchar cambios de autenticación (sesión persistente)
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      currentUserId = user.uid;
      const doc = await db.collection('players').doc(user.uid).get();
      if (doc.exists) {
        const data = doc.data();
        data.id = user.uid;
        const idx = players.findIndex(p => p.id === user.uid);
        if (idx === -1) players.push(data);
        else players[idx] = data;
      } else {
        const basic = {
          id: user.uid,
          nick: user.email ? user.email.split('@')[0] : 'Brawler',
          email: user.email || '',
          contact: user.email || '',
          phone: '',
          factions: [],
          avatar: AVATARS[0],
          bakugan: [{}, {}, {}],
          wins: 0,
          losses: 0,
          points: 0
        };
        await saveUserToCloud(basic);
        players.push(basic);
      }
      isAppInitialized = true;
      if (typeof listenMyPlayerDoc === 'function') listenMyPlayerDoc(user.uid);
      enterApp();
    } else {
      currentUserId = null;
      isAppInitialized = false;
      isAdminMode = false;
      if (typeof listenMyPlayerDoc === 'function') listenMyPlayerDoc(null);
      const tab = document.getElementById('tab-admin-btn');
      if (tab) tab.style.display = 'none';
      enterVisitorMode();
    }
  });
});
