import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowUp,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Globe2,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldAlert,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react"

const LOGOS = {
  canariasForma: "https://canariasforma.es/wp-content/uploads/2025/06/caf-logo-final-horizontal.svg",
  nike: "https://e7.pngegg.com/pngimages/838/890/png-clipart-swoosh-air-force-nike-free-nike-air-max-nike-angle-text.png",
  lopesan: "https://www.lopesan.com/documents/49789/1627587/11+COR-BLOP_LG_V_1T.jpg/acebfa19-ff6d-2b9f-433e-7bcd2f57d06d?version=3.0&t=1763540117719",
  hiperdino: "https://pinoahorro.com/_next/image?url=%2Flogos%2Flogo-hiperdino.webp&w=3840&q=75",
  fredOlsen: "https://anave.es/wp-content/uploads/2023/07/fred-olsen-logo.png",
  google: "https://cdn.simpleicons.org/google/4285F4",
  instagram: "https://cdn.simpleicons.org/instagram/E4405F",
  facebook: "https://cdn.simpleicons.org/facebook/1877F2",
  linkedin: "https://images.icon-icons.com/2429/PNG/512/linkedin_logo_icon_147268.png",
  website: "https://cdn.simpleicons.org/googlechrome/0F9D58",
}

const URLS = {
  canariasForma: "https://canariasforma.es/categoria-producto/formacion-profesional/",
  nike: "https://www.nike.com/es/",
  lopesan: "https://www.lopesan.com/",
  hiperdino: "https://www.hiperdino.es/",
  fredOlsen: "https://www.fredolsen.es/",
  instagramCF: "https://www.instagram.com/canariasforma/",
  facebookCF: "https://www.facebook.com/canariasforma/",
  linkedinCF: "https://www.linkedin.com/company/canariasforma/",
}

const slideNames = [
  "Portada",
  "Objetivo",
  "IA en marketing",
  "Diagnóstico Canarias Forma",
  "Diagnóstico comparado",
  "Canales digitales",
  "Canales comparados",
  "Benchmark",
  "Google Canarias Forma",
  "Google comparado",
  "Chatbot orientador",
  "Plan de acción",
  "Riesgos",
  "Cierre",
]

const brands = [
  {
    name: "Canarias Forma",
    logo: LOGOS.canariasForma,
    url: URLS.canariasForma,
    sector: "Formación profesional",
    focus: "Empleabilidad, cursos gratuitos y formación para personas desempleadas/ocupadas.",
    ai: "Orientador IA, respuesta a reseñas, rutas formativas y email automático.",
    strength: "Cercanía local + propuesta de valor útil.",
    improve: "Convertir visitas en inscripciones con mensajes por perfil.",
    google: "4.6 · 11 opiniones",
    color: "from-cyan-500 to-sky-600",
  },
  {
    name: "Nike",
    logo: LOGOS.nike,
    url: URLS.nike,
    sector: "Marca deportiva",
    focus: "Comunidad, aspiración, producto y experiencia global.",
    ai: "Personalización, recomendaciones, segmentación y campañas dinámicas.",
    strength: "Storytelling emocional muy potente.",
    improve: "En Canarias aparece competencia local con valoración mejorable.",
    google: "3.7 · 27 opiniones local GC",
    color: "from-zinc-900 to-zinc-600",
  },
  {
    name: "Lopesan",
    logo: LOGOS.lopesan,
    url: URLS.lopesan,
    sector: "Turismo",
    focus: "Reservas, experiencias, ofertas y captación de turistas/residentes.",
    ai: "Precios dinámicos, predicción de demanda y recomendaciones.",
    strength: "Muy orientado a conversión y experiencia visual.",
    improve: "Puede reforzar confianza con respuestas y contenido personalizado.",
    google: "4.6 · 516 opiniones app",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Hiperdino",
    logo: LOGOS.hiperdino,
    url: URLS.hiperdino,
    sector: "Supermercado",
    focus: "Compra online, app, ofertas, fidelización y cercanía.",
    ai: "Recomendación de productos, segmentación y gestión de stock.",
    strength: "Datos de compra y fidelización muy fuertes.",
    improve: "Usar reseñas para detectar fricciones por tienda y horario.",
    google: "4.3 · 2.2K opiniones local",
    color: "from-yellow-400 to-lime-500",
  },
  {
    name: "Fred. Olsen",
    logo: LOGOS.fredOlsen,
    url: URLS.fredOlsen,
    sector: "Transporte marítimo",
    focus: "Rutas, horarios, tarifas, estado del viaje y servicio interinsular.",
    ai: "Predicción de demanda, precios dinámicos y atención automatizada.",
    strength: "SEO práctico: rutas, tarifas y horarios muy claros.",
    improve: "Mejorar gestión de reseñas y dudas recurrentes.",
    google: "3.8 · 299 opiniones local",
    color: "from-red-600 to-rose-700",
  },
]

const channelCards = [
  {
    icon: LOGOS.website,
    title: "Web",
    strong: "Contenido completo, buscador visible y contacto claro.",
    improve: "Personalizar la portada por perfil: desempleado, trabajador, empresa o joven.",
  },
  {
    icon: LOGOS.google,
    title: "Google",
    strong: "Aparece en búsquedas locales y transmite confianza con reseñas.",
    improve: "Responder reseñas con IA asistida y convertir dudas frecuentes en contenidos.",
  },
  {
    icon: LOGOS.instagram,
    title: "Instagram",
    strong: "Buen canal visual para cursos y alumnos jóvenes.",
    improve: "Más reels cortos: salida laboral, antes/después, testimonios y fechas clave.",
  },
  {
    icon: LOGOS.facebook,
    title: "Facebook",
    strong: "Útil para comunidad local, avisos y público adulto.",
    improve: "Reutilizar contenido de Instagram y responder consultas con plantillas inteligentes.",
  },
  {
    icon: LOGOS.linkedin,
    title: "LinkedIn",
    strong: "Canal ideal para empleo, empresas y reputación profesional.",
    improve: "Publicar datos de empleabilidad, alianzas, casos de alumnos y contenido experto.",
  },
]

const googleComparison = [
  { name: "Canarias Forma", rating: "4.6", reviews: "11", insight: "Buena nota, pero pocas reseñas: oportunidad para aumentar prueba social." },
  { name: "Nike GC", rating: "3.7", reviews: "27", insight: "Marca global fuerte, experiencia local con margen de mejora." },
  { name: "Lopesan app", rating: "4.6", reviews: "516", insight: "Volumen mayor: más confianza y más datos para aprender del cliente." },
  { name: "Hiperdino Arucas", rating: "4.3", reviews: "2.2K", insight: "Gran volumen de reseñas: oro para análisis de sentimiento con IA." },
  { name: "Fred. Olsen LP", rating: "3.8", reviews: "299", insight: "Muchos datos para detectar problemas: teléfono, precios y atención." },
]

const plan = [
  { icon: Target, title: "Segmentación", text: "Crear mensajes distintos para desempleados, ocupados, empresas y jóvenes que buscan primera oportunidad." },
  { icon: Bot, title: "Chatbot orientador", text: "Recomendar cursos según objetivo laboral, horario, modalidad, ubicación y documentación necesaria." },
  { icon: Star, title: "Reseñas inteligentes", text: "Analizar reseñas, detectar patrones y responder con tono humano, útil y profesional." },
  { icon: Mail, title: "Automatización", text: "Emails o WhatsApp para recordar plazos, documentación, inicio de cursos y abandono de formularios." },
]

function Fade({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, amount: 0.35 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Slide({ children, index, sectionRefs, className = "" }) {
  return (
    <section
      ref={(el) => (sectionRefs.current[index] = el)}
      data-index={index}
      className={`relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-5 py-24 md:px-10 ${className}`}
    >
      {children}
    </section>
  )
}

function Glass({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-2xl shadow-sky-900/10 backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  )
}

function ExternalButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-[#003d63]/20 bg-white px-4 py-2 text-sm font-bold text-[#003d63] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {children} <ExternalLink size={15} />
    </a>
  )
}

function MiniLogo({ brand }) {
  return (
    <a href={brand.url} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={brand.logo} alt={brand.name} className="h-9 w-20 object-contain mix-blend-multiply" / className="max-h-16 object-contain" />
      <div className="text-left">
        <p className="text-sm font-black text-[#003d63]">{brand.name}</p>
        <p className="text-xs text-slate-500">{brand.sector}</p>
      </div>
    </a>
  )
}

function RatingStars({ rating }) {
  const numeric = Number(rating)
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={15} className={star <= Math.round(numeric) ? "fill-amber-400 text-amber-400" : "text-slate-300"} />
      ))}
    </div>
  )
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const sectionRefs = useRef([])

  const goTo = (index) => {
    const safeIndex = Math.max(0, Math.min(slideNames.length - 1, index))
    sectionRefs.current[safeIndex]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setCurrent(Number(visible.target.dataset.index))
      },
      { threshold: [0.45, 0.65, 0.85] }
    )

    sectionRefs.current.forEach((section) => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[#e9fbff] text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#42d9ea_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#ffd166_0%,transparent_28%),linear-gradient(135deg,#e8fbff_0%,#edf9ff_45%,#fff8e8_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-4">
            <img src={LOGOS.canariasForma} alt="Canarias Forma" className="h-9 w-auto" / className="max-h-16 object-contain" />
            <div className="hidden text-sm font-black text-[#003d63] md:block">COMM18 · IA aplicada al Marketing Digital</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-[#003d63]/20 bg-white px-4 py-2 text-sm font-bold text-[#003d63] md:block">
              {current + 1}/{slideNames.length} · {slideNames[current]}
            </span>
            <button onClick={() => goTo(current - 1)} className="rounded-full bg-[#003d63] p-2 text-white shadow-lg transition hover:scale-105" aria-label="Slide anterior">
              <ArrowUp size={18} />
            </button>
            <button onClick={() => goTo(current + 1)} className="rounded-full bg-[#003d63] p-2 text-white shadow-lg transition hover:scale-105" aria-label="Slide siguiente">
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
        <div className="h-1 bg-white/40">
          <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-amber-400 transition-all duration-500" style={{ width: `${((current + 1) / slideNames.length) * 100}%` }} />
        </div>
      </header>

      <Slide index={0} sectionRefs={sectionRefs} className="bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <Fade className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-8 flex w-fit rounded-[1.7rem] border border-white/70 bg-white/85 px-10 py-6 shadow-2xl">
            <img src={LOGOS.canariasForma} alt="Canarias Forma" className="h-20 w-auto" / className="max-h-16 object-contain" />
          </div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-5 py-3 text-sm font-bold backdrop-blur-xl">
            <Sparkles size={18} /> Presentación interactiva · Actividad 1
          </div>
          <h1 className="text-5xl font-black tracking-tight drop-shadow-xl md:text-8xl">IA en el Marketing Digital</h1>
          <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold text-white/95 md:text-2xl">
            Análisis de marcas y propuesta de mejora para Canarias Forma.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <div><p className="font-black">Objetivo</p><p className="mt-2 text-white/85">Entender cómo la IA mejora marketing, datos y comunicación.</p></div>
            <div><p className="font-black">Comparativa</p><p className="mt-2 text-white/85">Nike, Lopesan, Hiperdino, Fred. Olsen y Canarias Forma.</p></div>
            <div><p className="font-black">Resultado</p><p className="mt-2 text-white/85">Ideas aplicables para captar alumnos y aumentar confianza.</p></div>
          </div>
        </Fade>
        <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white" size={34} />
      </Slide>

      <Slide index={1} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-[#003d63]">Objetivo de la actividad</p>
              <h2 className="text-5xl font-black leading-tight text-[#003d63]">De analizar IA a proponer marketing real</h2>
              <p className="mt-6 text-xl leading-9 text-slate-700">
                El trabajo pide reflexionar sobre usos de IA en marketing, beneficios para empresa y cliente, datos necesarios y riesgos. Nosotros lo llevamos a una propuesta útil para una academia real.
              </p>
            </div>
            <Glass className="grid gap-5">
              <div className="flex gap-4 rounded-3xl bg-cyan-50 p-5"><BrainCircuit className="text-cyan-700" /><div><b>IA</b><p>Automatiza, predice y personaliza.</p></div></div>
              <div className="flex gap-4 rounded-3xl bg-blue-50 p-5"><Target className="text-blue-700" /><div><b>Marketing</b><p>Convierte atención en interés, contacto e inscripción.</p></div></div>
              <div className="flex gap-4 rounded-3xl bg-amber-50 p-5"><GraduationCap className="text-amber-600" /><div><b>Canarias Forma</b><p>Puede usar IA para orientar mejor al futuro alumno.</p></div></div>
            </Glass>
          </div>
        </Fade>
      </Slide>

      <Slide index={2} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-black text-[#003d63]">¿Qué aporta la IA al marketing?</h2>
          <p className="mx-auto mt-5 max-w-4xl text-xl leading-8 text-slate-700">No sustituye la estrategia: la hace más rápida, medible y personalizada.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              [Search, "Analiza datos", "Busca patrones en reseñas, clics y formularios."],
              [Users, "Segmenta", "Adapta mensajes a cada tipo de usuario."],
              [MessageCircle, "Automatiza", "Responde dudas y acompaña al cliente."],
              [LineChart, "Predice", "Anticipa demanda, horarios y campañas."],
            ].map(([Icon, title, text]) => (
              <Glass key={title} className="text-left">
                <Icon className="mb-5 text-cyan-700" size={36} />
                <h3 className="text-2xl font-black text-[#003d63]">{title}</h3>
                <p className="mt-3 text-slate-700">{text}</p>
              </Glass>
            ))}
          </div>
        </Fade>
      </Slide>

      <Slide index={3} sectionRefs={sectionRefs}>
        <Fade className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Glass>
            <img src={LOGOS.canariasForma} alt="Canarias Forma" className="mb-8 h-16 w-auto" / className="max-h-16 object-contain" />
            <h2 className="text-4xl font-black text-[#003d63]">Diagnóstico rápido</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Canarias Forma tiene una base digital sólida: web, Google, Instagram, Facebook y LinkedIn. La oportunidad es convertir esa presencia en una experiencia más personalizada y medible.
            </p>
            <div className="mt-7 grid gap-3">
              {["Buena visibilidad local en Google.", "Reseñas que pueden transformarse en prueba social.", "Redes activas, pero con margen para más storytelling.", "Web con mucho contenido; se puede simplificar el camino a la inscripción."].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-cyan-50 p-4"><Star className="text-amber-500" size={18} /><b>{item}</b></div>
              ))}
            </div>
          </Glass>
          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-[#003d63] p-8 text-white shadow-2xl">
              <GraduationCap className="mb-4 text-amber-300" size={36} />
              <h3 className="text-3xl font-black">Propuesta de valor</h3>
              <p className="mt-2 text-white/90">Formación para mejorar empleabilidad y competencias profesionales.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Glass><MapPin className="mb-4 text-cyan-700" /><h3 className="text-2xl font-black text-[#003d63]">Canarias</h3><p>Cercanía local y conocimiento del mercado laboral canario.</p></Glass>
              <Glass><MousePointerClick className="mb-4 text-cyan-700" /><h3 className="text-2xl font-black text-[#003d63]">Conversión</h3><p>El reto: pasar de “me informo” a “me apunto”.</p></Glass>
            </div>
            <div className="flex flex-wrap gap-3"><ExternalButton href={URLS.canariasForma}>Web Canarias Forma</ExternalButton><ExternalButton href={URLS.instagramCF}>Instagram</ExternalButton><ExternalButton href={URLS.linkedinCF}>LinkedIn</ExternalButton></div>
          </div>
        </Fade>
      </Slide>

      <Slide index={4} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-5xl font-black text-[#003d63]">Diagnóstico comparado: 5 marcas, 5 aprendizajes</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {brands.map((brand) => (
              <Glass key={brand.name} className="flex flex-col">
                <div className={`mb-5 rounded-3xl bg-gradient-to-br ${brand.color} p-4`}>
                  <img src={brand.logo} alt={brand.name} className="mx-auto h-14 w-full object-contain mix-blend-screen" / className="max-h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-black text-[#003d63]">{brand.name}</h3>
                <p className="mt-2 text-sm font-bold text-cyan-700">{brand.sector}</p>
                <p className="mt-4 text-sm text-slate-700"><b>Fuerte:</b> {brand.strength}</p>
                <p className="mt-3 text-sm text-slate-700"><b>Mejora:</b> {brand.improve}</p>
                <div className="mt-auto pt-5"><ExternalButton href={brand.url}>Web</ExternalButton></div>
              </Glass>
            ))}
          </div>
        </Fade>
      </Slide>

      <Slide index={5} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-black text-[#003d63]">Canales digitales: qué funciona y qué mejorar</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {channelCards.map((item) => (
              <Glass key={item.title}>
                <img src={item.icon} alt={item.title} className="mb-6 h-10 w-10" / className="max-h-16 object-contain" />
                <h3 className="text-2xl font-black text-[#003d63]">{item.title}</h3>
                <p className="mt-5 text-sm font-black text-emerald-700">PUNTO FUERTE</p>
                <p className="mt-2 text-slate-700">{item.strong}</p>
                <p className="mt-5 text-sm font-black text-amber-600">MEJORA CON IA</p>
                <p className="mt-2 text-slate-700">{item.improve}</p>
              </Glass>
            ))}
          </div>
        </Fade>
      </Slide>

      <Slide index={6} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-5xl font-black text-[#003d63]">Canales comparados: dónde destaca cada marca</h2>
          <Glass className="overflow-hidden p-0">
            <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] bg-[#003d63] text-white">
              {['Marca', 'Web/SEO', 'Google/Reseñas', 'Redes', 'IA aplicable'].map((h) => <div key={h} className="p-4 font-black">{h}</div>)}
            </div>
            {brands.map((brand, i) => (
              <div key={brand.name} className={`grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] border-t border-slate-200 ${i % 2 ? 'bg-white/60' : 'bg-cyan-50/70'}`}>
                <div className="flex items-center gap-3 p-4"><img src={brand.logo} className="h-8 w-16 object-contain" / className="max-h-16 object-contain" /><b>{brand.name}</b></div>
                <div className="p-4 text-sm">{brand.name === 'Canarias Forma' ? 'Completa, mejorable en conversión' : brand.name === 'Nike' ? 'SEO + ecommerce muy fuerte' : brand.name === 'Lopesan' ? 'Reserva directa muy fuerte' : brand.name === 'Hiperdino' ? 'Compra online + tiendas' : 'Rutas, horarios y tarifas claras'}</div>
                <div className="p-4 text-sm">{brand.google}</div>
                <div className="p-4 text-sm">{brand.name === 'Canarias Forma' ? 'Instagram/Facebook/LinkedIn' : brand.name === 'Nike' ? 'Comunidad global' : brand.name === 'Lopesan' ? 'Visual y turístico' : brand.name === 'Hiperdino' ? 'Fidelización local' : 'Servicio y avisos'}</div>
                <div className="p-4 text-sm">{brand.ai}</div>
              </div>
            ))}
          </Glass>
        </Fade>
      </Slide>

      <Slide index={7} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-5xl font-black text-[#003d63]">Benchmark: qué puede aprender Canarias Forma</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {brands.slice(1).map((brand) => (
              <Glass key={brand.name}>
                <div className={`mb-6 rounded-3xl bg-gradient-to-br ${brand.color} p-5`}>
                  <img src={brand.logo} alt={brand.name} className="mx-auto h-16 w-full object-contain mix-blend-screen" / className="max-h-16 object-contain" />
                </div>
                <p className="text-sm font-black text-cyan-700">APRENDIZAJE</p>
                <h3 className="mt-2 text-2xl font-black text-[#003d63]">{brand.name}</h3>
                <p className="mt-4 text-slate-700">{brand.learning || brand.ai}</p>
              </Glass>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#003d63]/20 bg-[#003d63] p-8 text-white shadow-2xl shadow-sky-900/20">
            <h3 className="text-2xl font-black text-white">Conclusión del benchmark</h3>
            <p className="mt-3 text-white/90">Canarias Forma no necesita copiar a las grandes marcas: necesita adaptar sus mejores prácticas a formación, orientación laboral y confianza local.</p>
          </div>
        </Fade>
      </Slide>

      <Slide index={8} sectionRefs={sectionRefs}>
        <Fade className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-5xl font-black leading-tight text-[#003d63]">Google: de presencia a confianza</h2>
            <p className="mt-6 text-xl leading-9 text-slate-700">El usuario no solo busca cursos: busca seguridad. Las reseñas, la ficha de Google y la respuesta a opiniones son parte del marketing.</p>
            <Glass className="mt-8"><p className="font-black text-[#003d63]">Idea con IA:</p><p className="mt-2">Analizar opiniones, detectar dudas frecuentes y responder con un tono profesional, cercano y útil.</p></Glass>
          </div>
          <Glass className="overflow-hidden p-0">
            <div className="flex items-center gap-4 border-b bg-white p-5"><img src={LOGOS.google} className="h-7" / className="max-h-16 object-contain" /><div className="flex-1 rounded-full border px-5 py-3">canarias forma cursos gratuitos</div><Search /></div>
            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-7"><p className="text-sm text-slate-500">https://canariasforma.es</p><h3 className="mt-2 text-2xl font-black text-blue-700">Canarias Forma - Cursos gratuitos</h3><p className="mt-3 text-slate-700">Formación gratuita, online y flexible para digitalización, experiencia de cliente e inteligencia artificial.</p>{['Formación Profesional', 'Gran Canaria', 'Administración y finanzas', 'Diseño'].map((x) => <div key={x} className="mt-3 rounded-xl border p-3 text-blue-700">{x}</div>)}</div>
              <div className="border-l bg-slate-50 p-7"><img src={LOGOS.canariasForma} className="mb-5 h-10" / className="max-h-16 object-contain" /><h3 className="text-3xl font-black">CANARIAS FORMA</h3><div className="mt-4 flex items-center gap-2"><span className="text-3xl font-black">4.6</span><RatingStars rating="4.6" /></div><p className="mt-2 text-sm text-slate-600">Reseñas visibles = confianza antes de contactar</p>{['Sitio web', 'Cómo llegar', 'Opiniones'].map((x) => <button key={x} className="mt-4 w-full rounded-full border bg-white px-4 py-3 font-bold text-blue-700">{x}</button>)}</div>
            </div>
          </Glass>
        </Fade>
      </Slide>

      <Slide index={9} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-5xl font-black text-[#003d63]">Google comparado: confianza y volumen de datos</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {googleComparison.map((item) => (
              <Glass key={item.name}>
                <h3 className="text-xl font-black text-[#003d63]">{item.name}</h3>
                <div className="mt-5 flex items-center gap-3"><span className="text-5xl font-black">{item.rating}</span><RatingStars rating={item.rating} /></div>
                <p className="mt-2 text-sm font-bold text-slate-500">{item.reviews} reseñas/opiniones</p>
                <p className="mt-5 text-slate-700">{item.insight}</p>
              </Glass>
            ))}
          </div>
          <Glass className="mx-auto mt-8 max-w-5xl"><p><b>Lectura de marketing:</b> más reseñas no solo dan confianza; también dan datos. La IA puede detectar patrones de satisfacción, quejas frecuentes y oportunidades de contenido.</p></Glass>
        </Fade>
      </Slide>

      <Slide index={10} sectionRefs={sectionRefs}>
        <Fade className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-5xl font-black text-[#003d63]">Chatbot orientador</h2>
            <p className="mt-6 text-xl leading-9 text-slate-700">El objetivo no es poner un bot por moda: es reducir fricción y orientar al usuario hacia el curso correcto.</p>
            <div className="mt-8 grid gap-3">{['¿Qué curso me conviene?', '¿Puedo hacerlo si trabajo?', '¿Qué documentación necesito?', '¿Es gratuito?', '¿Cuándo empieza?'].map((x) => <div key={x} className="rounded-2xl bg-white/80 p-4 font-bold shadow-sm">{x}</div>)}</div>
          </div>
          <Glass>
            <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-4"><Bot className="text-cyan-700" /><b>Orientador IA · Canarias Forma</b></div>
            <div className="space-y-4">
              <div className="max-w-[82%] rounded-3xl bg-slate-100 p-4">Estoy desempleado y busco un curso con salida laboral.</div>
              <div className="ml-auto max-w-[82%] rounded-3xl bg-[#003d63] p-4 text-white">Te puedo recomendar cursos según tu perfil. ¿Prefieres online, presencial o modalidad flexible?</div>
              <div className="max-w-[82%] rounded-3xl bg-slate-100 p-4">Presencial en Gran Canaria, por la tarde.</div>
              <div className="ml-auto max-w-[82%] rounded-3xl bg-[#003d63] p-4 text-white">Perfecto. También puedo ayudarte con requisitos, documentación y avisarte cuando abra matrícula.</div>
            </div>
          </Glass>
        </Fade>
      </Slide>

      <Slide index={11} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-black text-[#003d63]">Plan de acción con IA para Canarias Forma</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {plan.map(({ icon: Icon, title, text }) => (
              <Glass key={title}>
                <Icon className="mb-5 text-cyan-700" size={38} />
                <h3 className="text-2xl font-black text-[#003d63]">{title}</h3>
                <p className="mt-4 text-slate-700">{text}</p>
              </Glass>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Glass><p className="text-sm font-black text-emerald-700">CORTO PLAZO</p><h3 className="mt-2 text-2xl font-black">Responder reseñas</h3><p className="mt-2">Plantillas con IA + revisión humana.</p></Glass>
            <Glass><p className="text-sm font-black text-amber-600">MEDIO PLAZO</p><h3 className="mt-2 text-2xl font-black">Rutas formativas</h3><p className="mt-2">Recomendar cursos por objetivo laboral.</p></Glass>
            <Glass><p className="text-sm font-black text-blue-700">LARGO PLAZO</p><h3 className="mt-2 text-2xl font-black">CRM inteligente</h3><p className="mt-2">Medir interés, conversión e inscripción.</p></Glass>
          </div>
        </Fade>
      </Slide>

      <Slide index={12} sectionRefs={sectionRefs}>
        <Fade className="mx-auto max-w-6xl text-center">
          <ShieldAlert className="mx-auto mb-6 text-amber-500" size={60} />
          <h2 className="text-5xl font-black text-[#003d63]">Riesgos y uso responsable</h2>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-700">Para que la IA ayude de verdad, debe usarse con control humano, privacidad y transparencia.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Glass><h3 className="text-2xl font-black text-[#003d63]">Privacidad</h3><p className="mt-3">No usar más datos de los necesarios.</p></Glass>
            <Glass><h3 className="text-2xl font-black text-[#003d63]">Sesgos</h3><p className="mt-3">Evitar recomendaciones injustas o poco inclusivas.</p></Glass>
            <Glass><h3 className="text-2xl font-black text-[#003d63]">Humanidad</h3><p className="mt-3">La IA ayuda, pero la relación con el alumno debe seguir siendo cercana.</p></Glass>
          </div>
        </Fade>
      </Slide>

      <Slide index={13} sectionRefs={sectionRefs} className="bg-gradient-to-br from-[#003d63] via-sky-700 to-cyan-600 text-white">
        <Fade className="mx-auto max-w-6xl text-center">
          <img src={LOGOS.canariasForma} alt="Canarias Forma" className="mx-auto mb-10 h-20 rounded-3xl bg-white/90 px-8 py-4" / className="max-h-16 object-contain" />
          <Trophy className="mx-auto mb-6 text-amber-300" size={60} />
          <h2 className="text-5xl font-black md:text-7xl">Conclusión</h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold text-white/90">La IA puede convertir la presencia digital de Canarias Forma en una experiencia más personalizada, útil y orientada a la inscripción.</p>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
            {brands.map((brand) => <MiniLogo key={brand.name} brand={brand} />)}
          </div>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-bold backdrop-blur-xl"><WandSparkles /> Actividad 1 · Marketing Digital con IA</div>
        </Fade>
      </Slide>
    </main>
  )
}
