"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { readBlocks, slotsForDate, whatsappLink, type BlockMap } from "@/lib/booking";

const today = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

export default function SitePage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [gamer, setGamer] = useState(false);
  const [blocks, setBlocks] = useState<BlockMap>({});
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setDate(today());
    const refresh = () => setBlocks(readBlocks());
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("bombo-blocks-updated", refresh);
    return () => { window.removeEventListener("storage", refresh); window.removeEventListener("bombo-blocks-updated", refresh); };
  }, []);
  const slots = useMemo(() => slotsForDate(date), [date]);
  const fullDate = date ? new Date(`${date}T12:00:00`).toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" }) : "";
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!date || !time) return;
    const msg = `Hola BOMBO, quiero reservar para ${people} ${Number(people) === 1 ? "persona" : "personas"} el ${fullDate} a las ${time},${gamer ? " con mesa gamer" : " sin mesa gamer"}.`;
    setSent(true);
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  return <>
    <header className="topbar"><a className="brand" href="#inicio" aria-label="BOMBO inicio">BOMBO<span>✦</span></a><nav><a href="#menu">El menú</a><a href="#cuartel">El cuartel</a><a href="#gamer">Modo gamer</a><a href="#visitanos">Visítanos</a></nav><a className="nav-cta" href="#reservar">RESERVA <span>↗</span></a></header>
    <main>
      <section id="inicio" className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> BOMBO GUADALAJARA · DESDE 2019</p><h1>ANTOJO<br/>EN <span className="outline">MODO</span><br/><span className="yellow-word">HÉROE</span><span className="star">✦</span></h1><p className="hero-deck">Hamburguesas tan buenas que hasta los superhéroes se saltan la dieta.</p><a className="button button-dark" href="#reservar">RESERVA TU MESA <span>↘</span></a><div className="hero-aside">MUCHO MÁS QUE UNA HAMBURGUESA <b>↓</b></div></div>
        <div className="hero-art"><video autoPlay muted loop playsInline poster="/bombo/grandes-antojos.gif"><source src="/bombo/pov-restaurante.mp4" type="video/mp4"/></video><div className="hero-sticker">EL<br/>ANTOJO<br/><span>ES REAL</span></div><div className="hero-caption"><span>01 / 07</span><span>HECHO PARA GRANDES ANTOJOS</span></div></div>
        <div className="hero-bottom"><span>BURGER JOINT · GAMER DEN · GEEK HQ</span><span>GUADALAJARA, MX&nbsp; ✦ &nbsp;20°37' N</span></div>
      </section>
      <div className="ticker"><div>COMIETELA TOODITA <i>✦</i> MESA GAMER <i>✦</i> HOT CHART <i>✦</i> 3×1 <i>✦</i> COMIETELA TOODITA <i>✦</i> MESA GAMER <i>✦</i> HOT CHART <i>✦</i> 3×1 <i>✦</i></div></div>
      <section id="menu" className="menu-section section-pad"><div className="section-heading"><div><p className="eyebrow">01 — LA RAZÓN DEL ANTOJO</p><h2>ELIGE TU<br/><span>ALTER EGO.</span></h2></div><p className="section-note">Precios claros. Lo único confuso aquí es cuál elegir.</p></div><div className="menu-grid"><article className="menu-feature"><img src="/bombo/menu-hamburguesas.png" alt="Selección de hamburguesas BOMBO"/><div className="menu-feature-tag">EL MÁS PEDIDO ✦</div><div className="menu-card-copy"><span>01 / CLÁSICO CON SUPERPODERES</span><h3>BOMBO<br/>BURGER</h3><p>Doble carne, doble queso, cero remordimientos.</p><a href="#reservar">ESA QUIERO ↗</a></div></article><article className="menu-card menu-yellow"><div className="menu-card-top"><span>02 / EL DE LA CASA</span><span>✳</span></div><div className="burger-doodle">◉</div><h3>SMASH<br/>BURGER</h3><p>Costra crujiente. Centro jugoso. Final feliz.</p><b>EL PLAN B QUE SE VUELVE PLAN A</b></article><article className="menu-card menu-red"><div className="menu-card-top"><span>03 / PARA COMPARTIR (JA)</span><span>✦</span></div><div className="wing-doodle">HOT<br/>HOT<br/>HOT</div><h3>WINGS +<br/>HOT CHART</h3><p>¿Qué tan valiente eres? Hay niveles.</p><b>POQUITO · PICA · AUXILIO</b></article></div><div className="menu-footer"><p>Esto es solo el tráiler.<br/><strong>La película completa está acá.</strong></p><a className="button button-outline" href="https://wa.me/523323425707?text=Hola%20BOMBO%2C%20%C2%BFme%20comparten%20el%20men%C3%BA%20completo%3F" target="_blank" rel="noreferrer">PREGUNTA POR EL MENÚ ↗</a></div></section>
      <section id="cuartel" className="hq-section"><div className="hq-image"><img src="/bombo/grandes-antojos.gif" alt="El universo y los antojos de BOMBO"/><span className="image-label">UN CUARTEL COMO NINGÚN OTRO · GDL</span></div><div className="hq-copy"><p className="eyebrow">02 — BASE DE OPERACIONES</p><h2>NO HAY<br/>DÍA <span>ABURRIDO</span><br/>AQUÍ.</h2><p>Figuras gigantes, universos que se cruzan y una mesa donde siempre cabe alguien más. Tu escondite favorito también tiene papas.</p><a className="text-link" href="#visitanos">CONOCE EL CUARTEL <span>↗</span></a><span className="hq-spark">✳</span></div></section>
      <section id="gamer" className="gamer-section"><div className="gamer-copy"><p className="eyebrow">03 — INSERT COIN</p><h2>UNA MANO<br/>EN EL <span>CONTROL.</span><br/>OTRA EN<br/>LA BURGER.</h2><p>Sí, hay videojuegos en la mesa. No, no te vamos a prestar el control bueno.</p><a className="button button-light" href="#reservar">APARTA MESA GAMER <span>↘</span></a></div><div className="gamer-visual"><img src="/bombo/pov-gamer.gif" alt="Mesa gamer de BOMBO"/><div className="pixel-label">PLAYER 01<br/><strong>READY?</strong></div><span className="crosshair">✣</span></div><div className="gamer-count">2 PLAYERS <span>✦</span> 1 GRAN ANTOJO</div></section>
      <section id="promos" className="promo-section"><div className="promo-mark">3<span>×</span>1</div><div><p className="eyebrow">LA TRINIDAD DEL ANTOJO</p><h2>TRES POR UNO.<br/><span>MATEMÁTICAS RICAS.</span></h2><p>Promo referencial: pregunta por la disponibilidad y condiciones al reservar.</p></div><a href="#reservar" className="button button-dark">PREGUNTA POR LA PROMO ↗</a></section>
      <section id="reservar" className="booking-section"><div className="booking-intro"><p className="eyebrow">04 — AQUÍ EMPIEZA EL PLAN</p><h2>APARTA TU<br/><span>CUARTEL.</span></h2><p>Tu mesa te está esperando. Llenamos el formulario y WhatsApp hace lo suyo.</p><div className="booking-aside">LOS ANTOJOS GRANDES<br/>SE PLANEAN EN EQUIPO <span>✦</span></div></div><form className="booking-form" onSubmit={submit}><div className="form-head"><span>RESERVA DE MESA</span><span>01 — 04</span></div><label>FECHA<input type="date" min={today()} required value={date} onChange={e => { setDate(e.target.value); setTime(""); }} /></label><fieldset><legend>HORA <span>· TURNOS DE 90 MIN</span></legend><div className="slot-grid">{slots.map(slot => { const blocked = (blocks[date] || []).includes(slot) || (blocks[date] || []).includes("ALL"); return <button type="button" key={slot} className={`slot ${time === slot ? "selected" : ""}`} disabled={blocked} onClick={() => setTime(slot)}>{blocked ? "AGOTADO" : slot}</button>; })}</div></fieldset><div className="form-row"><label>PERSONAS<select value={people} onChange={e => setPeople(e.target.value)}>{[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>)}</select></label><label className="gamer-check"><span>MESA GAMER</span><button type="button" className={`toggle ${gamer ? "on" : ""}`} aria-pressed={gamer} onClick={() => setGamer(!gamer)}><i/></button></label></div><button className="button button-dark submit-button" disabled={!date || !time}>CONFIRMAR POR WHATSAPP <span>↗</span></button>{sent && <p className="success-note">¡Listo! WhatsApp se abrió con tu solicitud. El equipo confirma tu reserva por ahí.</p>}<small>Las solicitudes se confirman por WhatsApp. Abrir el enlace no garantiza disponibilidad hasta recibir respuesta.</small></form></section>
      <section id="visitanos" className="visit-section"><div className="visit-title"><p className="eyebrow">05 — ENCUÉNTRANOS</p><h2>CAEMOS<br/><span>EN LA PERLA.</span></h2></div><div className="visit-details"><p>Centro de Vida La Perla<br/>Av. Mariano Otero 3000, Local BR 06<br/>Guadalajara, Jalisco</p><a className="text-link" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/Q5o8AquyUPs4kNCT7">ABRIR EN MAPS ↗</a><p className="hours"><b>LUN — JUE</b> 1:00 pm — 11:00 pm<br/><b>VIE — SÁB</b> 1:00 pm — 12:00 am<br/><b>DOM</b> 1:00 pm — 10:00 pm</p></div><a className="visit-whatsapp" href="https://wa.me/523323425707" target="_blank" rel="noreferrer"><span>¿TE PERDISTE?</span><b>+52 33 2342 5707 ↗</b></a></section>
    </main><footer className="footer"><a className="brand footer-brand" href="#inicio">BOMBO<span>✦</span></a><p>CON GRANDES ANTOJOS VIENEN GRANDES CUENTAS.<br/>CLARAS, ESO SÍ.</p><span>© BOMBO GUADALAJARA 2026</span></footer>
    <a className="mobile-reserve" href="#reservar">RESERVA TU MESA ↗</a>
  </>;
}

