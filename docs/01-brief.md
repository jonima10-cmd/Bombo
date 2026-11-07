# BOMBO — Brief del sitio web

Documento de trabajo con lo definido hasta ahora. Se actualiza paso a paso.

---

## 1. El negocio

- **Marca:** BOMBO, restaurante geek de hamburguesas (y mucho más).
- **Propuesta de valor:** el local tiene figuras enormes de superhéroes, ambiente muy geek y videojuegos en algunas mesas.
- **Sucursal única:** BOMBO Guadalajara
  - Centro de Vida La Perla, Av. Mariano Otero 3000, Local BR 06
  - Tel. / WhatsApp: +52 33 2342 5707
  - Google Maps: https://maps.app.goo.gl/Q5o8AquyUPs4kNCT7

### Horarios

| Día | Horario |
|---|---|
| Lunes a jueves | 1:00 pm – 11:00 pm |
| Viernes y sábado | 1:00 pm – 12:00 am |
| Domingo | 1:00 pm – 10:00 pm |

---

## 2. Objetivo del sitio

**Que la gente reserve mesa.** Todo el sitio empuja hacia el botón "Reservar".

- Formato: **one-page landing** con navegación por anclas.
- Código propio con **animaciones personalizadas**.
- Despliegue en **Vercel**.

---

## 3. Identidad visual

- **Paleta:** amarillo eléctrico, negro, cian, rojo y gris claro.
- **Logo:** tres versiones (apilada BOM/BO, horizontal con chispa, "B" sola con chispa).
- **Tipografía:** display pesada con mezcla de anchos y pesos por letra (efecto cómic) para titulares, y monoespaciada para texto de apoyo. Los dobles de letras ("TOODITA", "CUENTAAS") son parte del chiste visual.
- **Elementos gráficos:** estrella cian, máscaras de luchador, ícono de hamburguesa, efecto glitch cian/amarillo.
- **Fotografía:** hamburguesa heroica, POV de mesa con videojuego, piezas tipográficas planas. También hay un video POV del restaurante.
- **Pilares temáticos:** cómics, videojuegos, figuras de acción.

> **Nota de derechos:** usar personajes con licencia (Spider-Man, Thor, etc.) en un sitio comercial implica riesgo de propiedad intelectual. Tener una versión de respaldo con héroes propios o parodias del local.

---

## 4. Tono de voz

**Irreverente, divertido, irónico, con humor pesado — como si hablara Deadpool.**

Ejemplos iniciales (se afinan en el paso 2):

- Hero: *"Hamburguesas tan buenas que hasta los superhéroes se saltan la dieta."*
- Menú: *"Precios claros. Lo único confuso aquí es cuál elegir."*
- Zona gamer: *"Sí, hay videojuegos en la mesa. No, no te vamos a prestar el control bueno."*
- Horario agotado: *"Lleno. Hasta los villanos reservaron."*
- Footer: *"Con grandes antojos vienen grandes cuentas. Claras, eso sí."*

---

## 5. Estructura de la landing (anclas)

1. **`#inicio` (hero):** logo apilado grande, titular con letras de distinto peso, estrella cian y máscara flotando, botón "Reservar mesa".
2. **`#menu`:** solo los hits, con foto, nombre de personaje y chiste. Botón "Descargar menú completo (PDF)".
3. **`#cuartel`:** el local y las figuras gigantes de superhéroes.
4. **`#gamer`:** las mesas con videojuegos.
5. **`#promos`:** el 3x1 y lo que salga.
6. **`#reservar`:** formulario de reserva (objetivo principal).
7. **`#visitanos` + footer:** mapa, horarios, redes, WhatsApp.

Menú fijo con botón "Reservar" siempre visible.

---

## 6. Menú: hits + PDF

En la web solo van los más vendidos; el resto va en el PDF descargable.

**Hits propuestos (pendiente de confirmar):**

1. Smash Burger
2. Bombo Burger
3. Wagyu Burger
4. Toritas de Filete
5. Wings con el Hot Chart
6. Bombox (menú kids con juguete sorpresa)

**Categorías del menú completo (para el PDF):** hamburguesas y más, pizzas, sopas y ensaladas, tacos, pastas, entradas, postres, malteadas, kids menú.

**Detalles rescatables del menú:**

- **Hot Chart:** medidor de picante de salsas, candidato a mini-widget interactivo.
- **Mural de realidad aumentada** mencionado en el menú kids.

---

## 7. Sistema de reservas

### Flujo del cliente

1. Elige fecha, hora y número de personas, y si quiere mesa gamer.
2. La web consulta los horarios bloqueados y marca esos turnos como **"AGOTADO"**.
3. Al confirmar, se abre **WhatsApp con un mensaje prellenado**, por ejemplo: *"Hola BOMBO, quiero reservar para 4 el sábado 15 a las 8:00 pm, mesa gamer."*
4. El restaurante confirma por WhatsApp.

### Panel interno (`/admin`)

- Acceso protegido (contraseña o enlace mágico).
- Calendario simple para **bloquear y desbloquear** turnos sueltos o días completos.
- Opcional recomendado: guardar cada solicitud como **"pendiente"** para ver cuántas reservas hay por turno, ya que abrir WhatsApp no garantiza que el cliente envíe el mensaje.

### Turnos (propuesta pendiente de confirmar)

- Bloques de **1 h 30 min**, cada 30 minutos.
- Último turno 1 h 30 antes del cierre.

---

## 8. Animaciones propuestas

- Titulares que se arman letra por letra, con las letras "gordas" entrando con rebote.
- Stickers (estrella, máscaras, hamburguesa) con parallax y giro leve al hacer scroll.
- Logo con chispa que "explota" al cargar y al pasar el cursor.
- Glitch cian/amarillo en la máscara.
- Transiciones pixeladas entre secciones (guiño gamer).
- Cinta marquee en franja negra: "3x1 · MESA GAMER · HOT CHART".
- Botón de reservar con pulso y sonido 8-bit opcional.

---

## 9. Referencias web

- **MoMoney (Museum of Money):** titulares gigantes con fotos y stickers incrustados, tarjetas inclinadas, transición pixelada.
- **Lunchbox:** fondo amarillo con titular negro enorme, palabras clave resaltadas, franja negra con marquee.

---

## 10. Stack técnico

- **Next.js + Tailwind CSS** desplegado en **Vercel**.
- **Framer Motion o GSAP** para animaciones.
- **Base de datos pequeña** para bloqueos y solicitudes (Postgres con Neon o Upstash Redis, integrables desde Vercel).
- **Función serverless** para consultar disponibilidad y guardar solicitudes.
- **Responsive primero en móvil.**

---

## 11. Plan de trabajo

1. ✅ Estrategia y estructura (mapa del sitio, objetivo, reservas)
2. ⏳ **Voz y copy:** guía de tono y textos de cada sección
3. Sistema visual web: colores, tipografías, botones, stickers, animaciones
4. Diseño de la home, sección por sección
5. Panel de administración
6. Construcción del sitio funcional
7. Pulido: microinteracciones, rendimiento, revisión final

---

## 12. Pendientes por confirmar

- [ ] Lista final de hits del menú
- [ ] Duración de turnos de reserva
- [ ] Decidir si se guardan las solicitudes como "pendientes" en el panel
- [ ] Revisar el video POV como posible fondo del hero
- [ ] Definir qué personajes usar (licenciados o propios)

