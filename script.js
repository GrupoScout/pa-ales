console.log("Script cargado correctamente");

// Acá pegá tu array de productos:
const products = [
 const products = [
 { name: "HUGGIES CLASSIC PEQUEÑO X 30", price: 0 },
  { name: "HUGGIES CLASSIC TRIPLE PROT. M(68) G(60) XG(52) XXG(50)", price: 0 },
  { name: "HUGGIES PROTECT PLUS AHORRO PEQ X 50", price: 0 },
  { name: "HUGGIES PROTECT PLUS AHORRO M(68) G(60) XG(52) XXG(50) XXXG(48)", price: 0 },
  { name: "HUGGIES FLEX CONF R.N LE X 34", price: 0 },
  { name: "HUGGIES FLEX CONF AHORRO LE M(68) G(60) XG(52) XXG(50) XXXG (48)", price: 0 },
  { name: "HUGGIES FLEX COMF PEQUEÑO X50 (NUEVO)", price: 0 },
  { name: "HUGGIES SUPREME PACK AHORRO M(68) G(60) XG(52) XXG(50) XXXG(48)", price: 0 },
  { name: "HUGGIES NATURAL CARE + TOALLA SIRENITA x48 M(68) G(60) XG(52) XXG(50) XXXG(48)", price: 0 },
  { name: "HUGGIES SUPREME / NATURAL CARE PACK MENSUAL XXG(96) XXXG(92)", price: 0 },
  { name: "HUGGIES SUPREME PEQUEÑO X 50 CR AHORRO ( NUEVO)", price: 0 },
  { name: "HUGGIES SUPREME RN X 34", price: 0 },
  { name: "HUGGIES CLASIC + HUGGIES FLEX JUMBO P. G(80) XG(64) XXG (60)", price: 0 },
  { name: "HUGGIES PANTS NATURAL CARE XG (56) XXG (52)", price: 0 },
  { name: "LITTLE SWIMMER (PANTS )", price: 0 },
  { name: "PAMPERS BABYSAN P (52)", price: 0 },
  { name: "PAMPERS BABYSAN 'NUEVO' HP M(72) G(72) XG(58) XXG(54)", price: 0 },
  { name: "PAMPERS BABYDRY P X36", price: 0 },
  { name: "PAMPERS BABYDRY RN X36", price: 0 },
  { name: "PAMPERS BABYDRY M (72) G (72) XG(54) XXG(54)", price: 0 },
  { name: "PAMPERS BABYDRY G (110) XG (96)XXG (88)", price: 0 },
  { name: "PAMPERS BABYDRY P X56", price: 0 },
  { name: "PAMPERS DELUXE PROTECT P (36)", price: 0 },
  { name: "PAMPERS DELUXE PROTECT M (72) G (72) XG(58) XXG(54)", price: 0 },
  { name: "PAMPERS DELUXE PROTECT G (110) XG (96) XXG (88)", price: 0 },
  { name: "PAMPERS DELUXE RN X 56", price: 0 },
  { name: "PAMPERS DELUXE PROTECT RN x36 Hasta 4 kilos", price: 0 },
  { name: "PAMPERS DELUXE PROTECT RN + x36 De 0 a 6 kilos", price: 0 },
  { name: "PAMPERS PANTS CONFORT SECXG (34) XXG (32)", price: 0 },
  { name: "PAMPERS PANTS PREMIUM CARE G(64) XG (52) XXG (52)", price: 0 },
{ name: "PAMPERS SPLASHERS G (11) XG (10)", price: 0 },
{ name: "LINEA DUFFY", price: 0 },
{ name: "PAÑAL L. COTTON HIPERPACK P(40) M(36) G(32) XG(28) XXG(26)", price: 0 },
{ name: "PAÑAL L. COTTON MEGA AHORRO M(52) G(48) XG(44) XXG(42)", price: 0 },
{ name: "BABYSEC ULTRA JUMBO S.PACK M(68) G(60) XG(52) XXG(52)", price: 0 },
{ name: "BABYSEC PREMIUM JUMBO S.PACK M(68) G(60) XG(52) XXG(52)", price: 0 },
{ name: "PAÑAL ESTRELLA MEGA PEQUEÑO 6X30", price: 0 },
{ name: "PAÑAL ESTRELLA HIPERPACK Jr(30) M(44) G (40) XG (36) XXG (34)", price: 0 },
{ name: "PAÑAL ESTRELLA SUPERPACK JUNIOR (50)", price: 0 },
{ name: "PAÑAL ESTRELLA SUPERPACK G (60) XG (52) XXG(50)", price: 0 },
{ name: "PROTECTOR SOLAR 'COCO BEACH' FPS 50 POMO 130 ml. ( ART. 6006)", price: 0 },
{ name: "PROTECTOR SOLAR 'COCO BEACH' FPS 50 POMO 60 ml. ( ART. 6003)", price: 0 },
{ name: "PROTECTOR SOLAR 'COCO BEACH' FPS 50 C/COLOR POMO 60ml (ART. 6004)", price: 0 },
{ name: "PROTECTOR SOLAR AEROSOL 'COCO BEACH' F. 30 170ml ( ART. 6110", price: 0 },
{ name: "PROTECTOR SOLAR AEROSOL 'COCO BEACH' F. 50 170ml (6109)", price: 0 },
{ name: "HENNIA PAÑAL RECTO G X 20", price: 0 },
{ name: "HENNIA PAÑAL RECTO EG X 20", price: 0 },
{ name: "HENNIA PAÑAL RECTO G X 50", price: 0 },
{ name: "HENNIA PAÑAL RECTO EG X 50", price: 0 },
{ name: "NONINO G X 50 RECTO", price: 0 },
{ name: "NONINO EG X 50 RECTO", price: 0 },
{ name: "NONINO EEG X 50 RECTO", price: 0 },
{ name: "NONINO G X 20 RECTO", price: 0 },
{ name: "NONINO EG X 20 RECTO", price: 0 },
{ name: "NONINO EEG X 20 RECTO", price: 0 },
{ name: "COMODÍN CLÁSICO GRANDE X10", price: 0 },
{ name: "COMODIN CLASICO GRANDE X 20", price: 0 },
{ name: "COMODIN CLASICO XG X 10", price: 0 },
{ name: "COMODIN CLASICO XG X 20", price: 0 },
{ name: "COMODÍN CLÁSICO XXG X20", price: 0 },
{ name: "COMODÍN CLÁSICO G X50", price: 0 },
{ name: "COMODÍN CLÁSICO XG X50", price: 0 },
{ name: "COMODIN BASICO G X50", price: 0 },
{ name: "COMODIN BASICO XG X50", price: 0 },
{ name: "PAÑAL NONISEC GDE X10", price: 0 },
{ name: "PAÑAL NONISEC GDE X20", price: 0 },
{ name: "PAÑAL NONISEC XG X10", price: 0 },
{ name: "PAÑAL NONISEC XG X20", price: 0 },
{ name: "PAÑAL NONISEC XXG x10", price: 0 },
{ name: "PAÑAL NONISEC XXG X20", price: 0 },
{ name: "PAÑAL NONISEC BASICO GDE X50", price: 0 },
{ name: "PAÑAL NONISEC BASICO XG X50", price: 0 },
{ name: "PAÑAL NONISEC CLASICO GDE X50", price: 0 },
{ name: "PAÑAL NONISEC CLASICO XG X50", price: 0 },
{ name: "NONINO PLUS ELASTIZADO G X 16", price: 0 },
{ name: "NONINO PLUS ELASTIZADO EG X 16", price: 0 },
{ name: "NONINO CLASICO ELASTIZADO G X 16 (NUEVO)", price: 0 },
{ name: "NONINO CLASICO ELASTIZADO EG X 16 (NUEVO)", price: 0 },
{ name: "PLENITUD CLASIC C/BARRERAS M - G - XG x 16", price: 0 },
{ name: "PLENITUD CLASSIC PANTS ROPA INTERIOS P/M G/XG", price: 0 },
{ name: "PLENITUD PROT. CONT. DE OLORES C/BARR (M(16) G(16)XG(16)", price: 0 },
{ name: "PLENITUD ROPA INT UNISEX ACT. PLUS (P/M) (G/XG) X 8", price: 0 },
{ name: "PLENITUD ROPA INT UNISEX ACT. PLUS (P/M) (G/XG) X 16", price: 0 },
{ name: "PLENITUD FEMME R/INTERIOR P/M x 8 G/XG x 8", price: 0 },
{ name: "NONISEC ANAT. EXTRA PROTECT EG X 16", price: 0 },
{ name: "NONISEC ANAT ULTRA GD X16", price: 0 },
{ name: "NONISEC ANAT ULTRA XG X16", price: 0 },
{ name: "COMODÍN ANAT. GDE X 8", price: 0 },
{ name: "COMODÍN ANAT. XG X 8", price: 0 },
{ name: "COMODÍN ANAT. GDE X 16", price: 0 },
{ name: "COMODÍN ANAT. XG X 16", price: 0 },
{ name: "HENNIA GDE X 8", price: 0 },
{ name: "HENNIA XG X 8", price: 0 },
{ name: "HENNIA XXG 8", price: 0 },
{ name: "ADULT CARE ROPA INTERIOR M x 8", price: 0 },
{ name: "ADULT CARE ROPA INTERIOR G x 8", price: 0 },
{ name: "ADULT CARE ROPA INTERIOR XG x 8", price: 0 },
{ name: "COMODIN ANAT 2DA SELECC. G (16)", price: 0 },
{ name: "COMODIN ANAT 2DA SELECC. EG(16)", price: 0 },
{ name: "HENNIA 2DA SELECCIÓN X 10 U.", price: 0 },
{ name: "BOMBACHA PLASTICA COMODIN TALLE 2,3,4", price: 0 },
{ name: "INDASLIP GRANDE X20 L8", price: 0 },
{ name: "INDASEC PANT PLUS INTERIOR M X12", price: 0 },
{ name: "PAÑALES JUVENILES ELASTIZADOS", price: 0 },
{ name: "COMODÍN ANAT. CHICO X 10", price: 0 },
{ name: "COMODÍN ANAT. MED. X 8", price: 0 },
{ name: "NONINO ANATOMICO JUVENIL  MEDIANO CLASICO X 8", price: 0 },
{ name: "NONISEC ANAT ULTRA MED X8", price: 0 },
{ name: "NONINO ANATOMICO JUVENIL X 8", price: 0 },
{ name: "GOOD NITES M x 14 - L x 11", price: 0 },
{ name: "APOSITO POST-PARTO HUGGIES MAMA X 10", price: 0 },
{ name: "APOSITO DONCELLA POST PARTO X 10", price: 0 },
{ name: "COMODÍN APOSITO X 10 (CELESTE/VERDE)", price: 0 },
{ name: "COMODÍN APOSITO X 10 Post Parto(ROSA)", price: 0 },
{ name: "ZALEAS NONINO X 10", price: 0 },
{ name: "ZALEAS COMODIN X10", price: 0 },
{ name: "ZALEAS AMBOS x 10U.", price: 0 },
{ name: "ZALEAS NONISEC X 10", price: 0 },
{ name: "ZALEAS ADULT CARE X10", price: 0 },
{ name: "NONINO APOSITO INC. FUERTE x 20", price: 0 },
{ name: "NONINO REFUERZA PAÑAL MAXI x 20", price: 0 },
{ name: "HENNIA REFUERZA PAÑAL ANATOMICO x20", price: 0 },
{ name: "HENNIA REFUERZA PAÑAL PLUS x 20 RECTO", price: 0 },
{ name: "HENNIA APOSITO INCONTINENCIA EXTREMA EG PLUS X 20", price: 0 },
{ name: "HENNIA APOSITO INCONTINENCIA SEVERA x20", price: 0 },
  { name: "COMODIN APOSITO INCONTINENCIA FUERTE G X 10 (VERDE)", price: 0 },
  { name: "COMODIN APOSITO INCONTINENCIA FUERTE G X 20 (VERDE)", price: 0 },
  { name: "COMODIN APOSITO INCONTINENCIA EXTREMA EG X 10 (VERDE)", price: 0 },
  { name: "COMODIN APOSITO INCONTINENCIA EXTREMA EG X 20 (VERDE)", price: 0 },
  { name: "COMODÍN REFUERZA PAÑAL ADULTOS G X 10 (CELESTE)", price: 0 },
  { name: "COMODÍN REFUERZA PAÑAL ADULTOS G X 20 (CELESTE)", price: 0 },
  { name: "COMODÍN REFUERZA PAÑAL ADULTOS XG X 10 (CELESTE)", price: 0 },
  { name: "COMODÍN REFUERZA PAÑAL ADULTOS XG X 20 (CELESTE)", price: 0 },
  { name: "NONISEC INC. MODERADA X 20", price: 0 },
  { name: "NONISEC INCON. FUERTE X 20", price: 0 },
  { name: "NONISEC REF. PAÑAL C/GEL X 20", price: 0 },
  { name: "NONISEC REF. PAÑAL MAXI C/GEL X 20", price: 0 },
  { name: "NONISEC INC. LEVE X 10 - 25% MÁS DE GEL", price: 0 },
  { name: "NONISEC INC. LEVE X 20 - 25% MÁS DE GEL", price: 0 },
  { name: "INDASEC NORMAL X24", price: 0 },
  { name: "INDASEC EXTRA X20", price: 0 },
  { name: "INDASEC MAXI X15", price: 0 },
  { name: "INDASEC MAXI GOOD NIGHT x12", price: 0 },
  { name: "COMODIN CUBRE COLCHON 1 PLAZA", price: 0 },
  { name: "COMODIN CUBRE COLCHON 2 PLAZAS", price: 0 },
  { name: "HUGGIES T/H TRIPLE PROTECCIÓN X 80", price: 0 },
  { name: "PAMPERS WIPES X 48 SIEMPRE LIMPIO", price: 0 },
  { name: "Q-SOFT IDEAL DOY PACK X 70 CLASICAS/ C. ALOE", price: 0 },
  { name: "Q-SOFT DOY PACK X 50 CLASICAS-C/ALOE VIT C", price: 0 },
  { name: "Q-SOFT FLOW PACK PREMIUM X40 CLASICA y ALOE - S/TAPA", price: 0 },
  { name: "Q-SOFT FLOW PACK PREMIUM X40 C/OLEO CALCÁREO", price: 0 },
  { name: "Q-SOFT FLOW P. PREMIUM BABY x 50 ANTIPASPADURAS", price: 0 },
  { name: "TOALLAS ESTRELLA BABY C. DIARIO FLOW P. (C/TAPA)", price: 0 },
  { name: "TOALLAS ESTRELLA BABY SENSIBLE FLOW P. (C/TAPA)", price: 0 },
  { name: "TOALLAS ESTRELLA BABY FLOW P. RELAJANTE", price: 0 },
  { name: "Q-SOFT ADULTOS x 40U", price: 0 },
  { name: "COMODIN TOALLA ADULTO X 60", price: 0 },
  { name: "NONISEC TOALLA HÚMEDA ADULTO ALOE VERA X 60", price: 0 },
  { name: "TOALLAS HIGIÉNICAS FEMENINAS", price: 0 },
  { name: "DONCELLA TOALLA C/ALAS POCKET X8", price: 0 },
  { name: "DONCELLA TOALLA NOCTURNA X16", price: 0 },
  { name: "DONCELLA TOALLAS C/ALAS DUO PACK X16", price: 0 },
  { name: "DONCELLA PROTECTOR DIARIO ANATOMICO X20", price: 0 },
  { name: "DONCELLA PROTECTOR DIARIO ANATOMICO X40", price: 0 },
  { name: "DONCELLA PROTECTOR DIARIO RESPIRABLE X20", price: 0 },
  { name: "DONCELLA PROTECTOR DUO FORMA X20", price: 0 },
  { name: "DONCELLA PROTECTOR DIARIO RESPIRABLE X40", price: 0 },
{ name: "DONCELLA PROTECTOR TANGA X20", price: 0 },
{ name: "PAPEL HIGIENICO Y ROLLOS DE COCINA", price: 0 },
{ name: "PAPEL HIGIENICO 4 x 30m. S/H Bco (Art. 900)", price: 0 },
{ name: "PAPEL HIGIENICO 4 x 30m. PREMIUM DOBLE HOJA (Art. 915)", price: 0 },
{ name: "PAPEL HIGIENICO 4 X 80 PREMIUM S/H (916)", price: 0 },
{ name: "PAPEL HIGIENICO 4 X 80 mts. C/ALOE VERA S/H (914)", price: 0 },
{ name: "ROLLO COCINA PREMIUM 200 PAÑOS D/H (ART 921)", price: 0 },
{ name: "ROLLO COCINA 3 X 50 PAÑOS (ART 927)", price: 0 },
{ name: "PAÑUELOS POKET 36 X 150 BCO DOBLE HOJA (987)", price: 0 },
{ name: "PAÑUELOS POKET TRIPLE HOJA 6 x 10u (982)", price: 0 },
{ name: "SERVILLETAS ELEGANTE 150 U. (32 X 31,5 CM.)", price: 0 },
{ name: "OLEO CALCAREO", price: 0 },
{ name: "BABY BASIC OLEO CALCAREO X 250", price: 0 },
{ name: "BABY BASIC OLEO CALCAREO X 500", price: 0 },
{ name: "BABY BASIC OLEO CALCAREO X 1000", price: 0 },
{ name: "OLEO FRESH CLUB 1000 ML", price: 0 },
{ name: "ÓLEO CALCAREO ESTRELLA X 500 C/MANZ. (T. AMARILLA)", price: 0 },
{ name: "ÓLEO CALCAREO ESTRELLA X 950", price: 0 },
{ name: "ÓLEO CALCAREO ESTRELLA S/FRAGANCIA X 500 (TAPA NAR.)", price: 0 },
{ name: "OLEO CALCÁREO BUNNY BABY  X 1000ml ( NUEVOS )", price: 0 },
{ name: "OLEO CALCÁREO BUNNY BABY  X 500 ml ( NUEVOS )", price: 0 },
{ name: "ALGODONES E HISOPOS", price: 0 },
{ name: "DONCELLA X 70", price: 0 },
{ name: "DONCELLA X 140", price: 0 },
{ name: "DONCELLA X 300", price: 0 },
{ name: "DONCELLA X 500", price: 0 },
{ name: "Q-SOFT HISOPOS X 75", price: 0 },
{ name: "ESTRELLA POMPONES X 50", price: 0 },
{ name: "ESTRELLA DISCOS DE ALGODÓN X 80", price: 0 },
{ name: "ESTRELLA PAÑOS ALGODÓN X 40u.", price: 0 },
{ name: "DONCELLA P. MAMARIOS X 24", price: 0 },
{ name: "ESTRELLA PAÑOS ALGODÓN X 50u.", price: 0 },
{ name: "ESTRELLA CLASICO x 300 gr.", price: 0 },
{ name: "ESTRELLA SUPER X 400 gr", price: 0 },
{ name: "ESTRELLA SUPER X 200 gr", price: 0 },
{ name: "ESTRELLLA SUPER X 100 GS", price: 0 },
{ name: "ESTRELLA CLASICO X 140 GS", price: 0 },
{ name: "ESTRELLA PRE CORTADO X100 GS", price: 0 },
{ name: "ALGODÓN CARESS x 500 GR", price: 0 },
{ name: "FECULA BEBE ALGABO EXTRA SUAVE 200gr", price: 0 },
{ name: "CANNON EAU DE COLOGNE DANIELLE X 90ML", price: 0 },
{ name: "CANNON EAU DE COLOGNE JOLIE DANIELLE x 90 ml", price: 0 },
{ name: "CANNON JABONERA Con Jabón de 75gr.", price: 0 },
{ name: "CANNON ESTUCHE COMBINADO (COLONIA MAS PELUCHE CONEJO)", price: 0 },
{ name: "MAMADERA DE REGALO DISPITA - C/ BOLSA PARA REGALO", price: 0 },
{ name: "PELELA AUTITO/SAPITO/OSITO", price: 0 },
{ name: "REPELENTE INFLUENCIA X 200ML EXTRA DURACIÓN", price: 0 },
{ name: "REPELENTE VAIS GEL P/NIÑOS + 3 MESES 100 ML", price: 0 },
{ name: "REPELENTE VAIS AEROSOL 140 ML", price: 0 },
{ name: "REPELENTE EXTRA DURACION VAIS X 200ML", price: 0 },
{ name: "REPELENTE VAIS SPRAY x 200ML", price: 0 },
{ name: "REPELENTE VAIS CREMA EXTRA DURACION 220GS", price: 0 },
{ name: "REPELENTE VAIS AEROSOL EXTRA DURACION 140 ML", price: 0 },
  { name: "BAÑO FÁCIL MANZANILLA (20cm x 20cm) X10U", price: 0 },
  { name: "BAÑO FÁCIL ALOE VERA (20cm x 20cm) X10U", price: 0 },
  { name: "ESPONJA JABONOSA NONISEC C/ALOE Y C/MANZANILLA", price: 0 },
  { name: "PRACTIBAÑO COMODIN C/ALOE", price: 0 },
  { name: "PRUNE 1 PERFUME 50ML C/VAPORIZADOR", price: 0 },
  { name: "PRUNE 2 PERFUME 50ML C/VAPORIZADOR", price: 0 },
  { name: "PRUNE 3 PERFUME 50ML C/VAPORIZADOR", price: 0 },
  { name: "PRUNE 4 PERFUME 50ML C/VAPORIZADOR", price: 0 },
  { name: "PRUNE ICON PERFUME 70ML C/VAPORIZADOR", price: 0 },
  { name: "PRUNE MOI P 60ML C/VAPORIZADOR", price: 0 },
  { name: "CARO CUORE C/VAPORIZADOR 60 ML", price: 0 },
  { name: "LAS PEPAS NINFA 100ML C/VAPORIZADOR", price: 0 },
  { name: "LAS PEPAS MITO 100ML C/VAPORIZADOR", price: 0 },
  { name: "PAULA CAHEN D ANVERS AMOR 60ML C/VAPORIZADOR", price: 0 },
  { name: "PAULA CAHEN D ANVERS PAULA 60ML C/VAPORIZADOR", price: 0 },
  { name: "PAULA CAHEN D ANVERS ALEGRIA 60 ML C/VAPORIZADOR", price: 0 },
  { name: "PAULA CAHEN D ANVERS ALMA 60ML C/VAPORIZADOR", price: 0 },
  { name: "PAULA CAHEN D ANVERS LUZ 60 ML C/VAPORIZADOR", price: 0 }
    ];
];

const cart = {};
let isAdmin = false;
let inactivityTimer;

function loadProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  const query = document.getElementById('searchBar').value.toLowerCase();
  let currentBrand = "";
  products.forEach((product, index) => {
    if (!query || product.name.toLowerCase().includes(query)) {
      let brand = product.name.split(' ')[0].toUpperCase();
      if (brand !== currentBrand) {
        currentBrand = brand;
        const separator = document.createElement('div');
        separator.className = 'brand-separator';
        separator.textContent = brand;
        container.appendChild(separator);
      }
      const div = document.createElement('div');
      div.className = 'product';
      const displayPrice = (product.price * 1.4).toFixed(2);
      div.innerHTML = `
        <strong>${product.name}</strong><br>
        Precio: $${displayPrice}<br>
        <button onclick="addToCart(${index})">Agregar a la cuenta</button>
        ${isAdmin ? `<button onclick="editProduct(${index})">Editar</button>` : ''}
      `;
      container.appendChild(div);
    }
  });
}

function addToCart(index) {
  if (isAdmin) return alert("Cierre sesión para operar.");
  const product = products[index];
  const id = product.name;
  if (!cart[id]) cart[id] = { ...product, quantity: 0 };
  cart[id].quantity++;
  updateCalculator();
}

function updateCalculator() {
  const container = document.getElementById('calculatorItems');
  container.innerHTML = '';
  let total = 0;
  for (let id in cart) {
    const item = cart[id];
    const unit = (item.price * 1.4).toFixed(2);
    const subtotal = (item.quantity * item.price * 1.4).toFixed(2);
    total += parseFloat(subtotal);
    container.innerHTML += `<div><strong>${item.name}</strong><br>Cantidad: ${item.quantity}<br>Precio unitario: $${unit}<br>Subtotal: $${subtotal}</div><hr>`;
  }
  document.getElementById('totalAmount').textContent = `TOTAL: $${total.toFixed(2)}`;
}

function toggleCalculator() {
  const calc = document.getElementById('calculator');
  calc.style.display = calc.style.display === 'none' ? 'block' : 'none';
}

function printTicket() {
  const container = document.getElementById('ticketContainer');
  const now = new Date();
  const time = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: true });
  const date = now.toLocaleDateString('es-AR');
  let ticket = `<div class="ticket"><div class="ticket-header">
    <strong>FARMACIA PINTAR</strong><br>SAN MIGUEL<br>AV REMIGIO LOPEZ 2393<br>TEL: 4455502<br>
    FECHA: ${date} - HORA: ${time}</div><small>DOCUMENTO NO VÁLIDO COMO FACTURA FISCAL</small>`;
  let total = 0;
  for (let id in cart) {
    const item = cart[id];
    const unit = (item.price).toFixed(2);
    const subtotal = (item.quantity * item.price).toFixed(2);
    ticket += `<div class="ticket-product">${item.name}<br>Cant: ${item.quantity} | Unit: $${unit} | Subtotal: $${subtotal}</div>`;
    total += parseFloat(subtotal);
  }
  ticket += `<h3>TOTAL: $${total.toFixed(2)}</h3>
  <div class="small-text">IMPORTANTE: EL PRECIO ES VÁLIDO POR 12HS. PASADAS LAS 12HS, EL PRECIO PODRÍA VARIAR. RECLAMOS SOLO CON TICKET EN MANO.</div>
  <div class="ticket-footer">GRACIAS POR SU COMPRA<br><a href="https://turnosdefarmacias.info">turnosdefarmacias.info</a></div></div>`;
  container.innerHTML = ticket;
  window.print();
}

function loginPrompt() {
  if (isAdmin) {
    isAdmin = false;
    clearTimeout(inactivityTimer);
    alert("Sesión cerrada");
    loadProducts();
    return;
  }
  const user = prompt("Usuario:");
  const pass = prompt("Contraseña:");
  if (user === "259" && pass === "emi2003") {
    isAdmin = true;
    alert("Modo editor activado");
    startInactivityTimer();
    loadProducts();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function startInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    isAdmin = false;
    alert("Sesión cerrada por inactividad");
    loadProducts();
  }, 900000); // 15 minutos
}

function editProduct(index) {
  const newPrice = prompt("Nuevo precio base:", products[index].price);
  if (newPrice) {
    products[index].price = parseFloat(newPrice);
    loadProducts();
  }
}

document.getElementById("searchBar").addEventListener("input", loadProducts);
document.getElementById("toggleCalcBtn").addEventListener("click", toggleCalculator);
document.getElementById("loginBtn").addEventListener("click", loginPrompt);
loadProducts();

