"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { readBlocks, saveBlocks, slotsForDate, type BlockMap } from "@/lib/booking";

const localDate = () => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`; };

export default function AdminPanel() {
  const [date, setDate] = useState("");
  const [blocks, setBlocks] = useState<BlockMap>({});
  const [notice, setNotice] = useState("");
  useEffect(() => { setDate(localDate()); setBlocks(readBlocks()); }, []);
  const slots = useMemo(() => slotsForDate(date), [date]);
  const blocked = blocks[date] || [];
  function toggle(slot: string) {
    const updated = blocked.includes("ALL")
      ? slots.filter(x => x !== slot)
      : blocked.includes(slot)
        ? blocked.filter(x => x !== slot)
        : [...blocked, slot];
    const next = { ...blocks, [date]: updated };
    if (next[date]?.length === 0) delete next[date];
    setBlocks(next); saveBlocks(next); setNotice("Disponibilidad actualizada en este navegador.");
  }
  function toggleDay() {
    const next = { ...blocks };
    if (blocked.includes("ALL")) delete next[date]; else next[date] = ["ALL"];
    setBlocks(next); saveBlocks(next); setNotice("Bloqueo del día actualizado en este navegador.");
  }
  return <main className="admin-page"><header className="admin-header"><Link className="brand" href="/">BOMBO<span>✦</span></Link><Link className="admin-back" href="/">← VOLVER AL SITIO</Link></header><section className="admin-content"><p className="eyebrow">PANEL DE DISPONIBILIDAD</p><h1>BLOQUEA<br/><span>EL CUARTEL.</span></h1><p className="admin-lead">Elige un día y bloquea los turnos que ya no estén disponibles.</p><div className="admin-card"><label>FECHA<input type="date" min={localDate()} value={date} onChange={e => {setDate(e.target.value);setNotice("");}}/></label><div className="admin-day-control"><div><b>Bloquear día completo</b><span>Marca todos los turnos como agotados</span></div><button className={`toggle ${blocked.includes("ALL") ? "on" : ""}`} aria-label="Bloquear día completo" onClick={toggleDay}><i/></button></div><div className="admin-slot-heading"><b>TURNOS DEL DÍA</b><span>Selecciona para bloquear o liberar</span></div><div className="admin-slot-grid">{slots.map(slot => { const isBlocked = blocked.includes("ALL") || blocked.includes(slot); return <button key={slot} className={`admin-slot ${isBlocked ? "is-blocked" : ""}`} onClick={() => toggle(slot)}><span>{slot}</span><small>{isBlocked ? "BLOQUEADO" : "DISPONIBLE"}</small></button>; })}</div>{notice && <p className="admin-notice">✓ {notice}</p>}</div><p className="admin-warning"><b>Versión demostrativa:</b> los bloqueos se guardan solo en este navegador. Para que el equipo los comparta y administre de forma segura hace falta conectar una base de datos y proteger el acceso con autenticación.</p></section></main>;
}

