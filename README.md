# BOMBO — Sitio web

Landing one-page para BOMBO Guadalajara, con reservas por WhatsApp y panel demostrativo `/admin` para bloquear turnos.

## Desarrollo local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. El panel está en `http://localhost:3000/admin`.

## Estructura

```text
src/
├── app/                 # rutas App Router, layout y estilos globales
│   ├── admin/           # panel de bloqueos
│   └── page.tsx         # landing
├── components/          # landing y panel
└── lib/                 # turnos, WhatsApp y almacenamiento de bloqueos
public/bombo/            # recursos usados por el sitio
assets/                  # originales de trabajo
docs/                    # brief
```

## Estado de la primera versión

- La landing adapta sus secciones a móvil y escritorio y utiliza algunos GIFs y el video POV disponibles.
- Las solicitudes se preparan para WhatsApp; el restaurante confirma la reserva por ese medio.
- Los horarios usan bloques de 90 minutos con inicios cada 30 minutos. Se aplica el horario del brief y el último inicio queda 90 minutos antes del cierre.
- `/admin` permite bloquear turnos o el día completo. En esta versión, los bloqueos se guardan en `localStorage` del navegador, solo para demostración; todavía no hay inicio de sesión ni sincronización entre dispositivos.
- La promoción 3×1, los productos destacados y las descripciones son referenciales hasta que BOMBO confirme los detalles.

## Pendientes de contenido y producción

- Confirmar los hits, precios y textos definitivos del menú.
- Entregar el PDF del menú completo y las tipografías de marca.
- Reemplazar las piezas GIF por fotografía original de alta resolución cuando esté disponible.
- Confirmar condiciones y vigencia de promociones.
- Antes de usar `/admin` en producción, conectar una base de datos compartida y proteger el panel con autenticación.
- Confirmar los personajes e ilustraciones que se pueden usar comercialmente.

