export const allProducts = [
  { 
    id: 1, 
    name: "Audífonos Inalámbricos (Transparente)", 
    category: "Audifonos", 
    brand: "AudioFlow", 
    price: 149.9, 
    img: "img/audifono-1.jpeg", 
    alt: "Audífonos inalámbricos con estuche transparente y pantalla LED.",
    description: `
      <h3 class="text-2xl font-bold">Sonido Cristalino, Estilo Único</h3>
      <p>Experimenta una calidad de audio superior con estos audífonos inalámbricos. Su estuche de carga transparente no solo es elegante, sino que también cuenta con una pantalla LED digital para que siempre sepas el nivel de batería restante. Diseñados para un ajuste cómodo y horas de escucha.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Conexión:</strong> Bluetooth 5.3</li>
        <li><strong>Pantalla:</strong> LED digital en estuche</li>
        <li><strong>Batería (audífonos):</strong> 4-5 horas de reproducción</li>
        <li><strong>Batería (estuche):</strong> 20 horas adicionales</li>
        <li><strong>Resistencia:</strong> IPX5 (sudor y salpicaduras)</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Maria G.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 semana</p>
        <p class="text-gray-600 dark:text-gray-400">¡Me encanta el diseño! La pantalla LED es súper útil. El sonido es muy claro.</p>
      </div>
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Carlos R.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 3 días</p>
        <p class="text-gray-600 dark:text-gray-400">Buenos por el precio, pero la batería dura un poco menos de lo que esperaba.</p>
      </div>
    `
  },
  { 
    id: 2, 
    name: "Audífonos Gamer Pro (Negro)", 
    category: "Audifonos", 
    brand: "GamerTech", 
    price: 199.0, 
    img: "img/audifono-2.jpeg", 
    alt: "Audífonos gamer negros con estuche de carga y pantalla LED.",
    description: `
      <h3 class="text-2xl font-bold">Sumérgete en el Juego</h3>
      <p>Diseñados para gamers, estos audífonos ofrecen una latencia ultrabaja para una sincronización perfecta de audio y video. El estuche con acabado de espejo y pantalla LED dual muestra la carga de cada audífono y del estuche por separado. Micrófono con cancelación de ruido para una comunicación clara.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Modo de Juego:</strong> Latencia ultrabaja (40ms)</li>
        <li><strong>Pantalla:</strong> LED dual (carga individual)</li>
        <li><strong>Conexión:</strong> Bluetooth 5.2</li>
        <li><strong>Micrófono:</strong> Doble con cancelación de ruido ambiental (ENC)</li>
        <li><strong>Diseño:</strong> Estuche con tapa de espejo</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Fabian 'Gamer' L.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 mes</p>
        <p class="text-gray-600 dark:text-gray-400">Cero lag, perfectos para *shooters*. El micrófono es bastante bueno y la batería dura un montón. 10/10.</p>
      </div>
    `
  },
  { 
    id: 3, 
    name: "Audífonos Pastel (Varios Colores)", 
    category: "Audifonos", 
    brand: "Chic", 
    price: 89.0, 
    img: "img/audifono-3.jpeg", 
    alt: "Set de audífonos inalámbricos en colores pastel.",
    description: `
      <h3 class="text-2xl font-bold">Color y Sonido en Armonía</h3>
      <p>Exprésate con esta línea de audífonos en vibrantes colores pastel. Ligeros, compactos y fáciles de llevar, son el accesorio perfecto para tu música diaria. Conexión rápida y estable para que disfrutes sin interrupciones.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Conexión:</strong> Bluetooth 5.0</li>
        <li><strong>Material:</strong> Plástico ABS mate</li>
        <li><strong>Batería (audífonos):</strong> 3-4 horas de reproducción</li>
        <li><strong>Puerto de Carga:</strong> Lightning (compatible)</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Lucia P.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 5 días</p>
        <p class="text-gray-600 dark:text-gray-400">Son hermosos y muy ligeros. El sonido es decente para el precio. ¡El color rosa es tal cual la foto!</p>
      </div>
    `
  },
  { 
    id: 4, 
    name: "Parlante Bluetooth RGB", 
    category: "Parlantes", 
    brand: "JBL", 
    price: 249.0, 
    img: "img/parlantes-1.jpeg", 
    alt: "Parlante Bluetooth portátil con luces RGB.",
    description: `
      <h3 class="text-2xl font-bold">La Fiesta a Donde Vayas</h3>
      <p>Este parlante portátil combina un sonido potente con un espectáculo de luces RGB dinámico que se sincroniza con la música. Su diseño robusto y su correa de transporte lo hacen ideal para exteriores. Conecta tu música y anima cualquier reunión.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Potencia:</strong> 20W RMS</li>
        <li><strong>Iluminación:</strong> RGB Sincronizada con la música</li>
        <li><strong>Batería:</strong> Hasta 8 horas de reproducción</li>
        <li><strong>Resistencia:</strong> IPX6 (resistente al agua)</li>
        <li><strong>Conectividad:</strong> Bluetooth 5.1, Aux-in, Tarjeta TF</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">David S.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 semana</p>
        <p class="text-gray-600 dark:text-gray-400">¡Potente! Las luces le dan un toque genial a las reuniones. La batería dura bastante.</p>
      </div>
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Ana V.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 2 días</p>
        <p class="text-gray-600 dark:text-gray-400">Buen sonido, aunque me gustaría que las luces tuvieran más modos.</p>
      </div>
    `
  },
  { 
    id: 5, 
    name: "Parlantes 2.0 (Negro/Azul)", 
    category: "Parlantes", 
    brand: "Xtech", 
    price: 79.0, 
    img: "img/parlantes-2.jpeg", 
    alt: "Set de parlantes 2.0 para PC, color negro y azul.",
    description: `
      <h3 class="text-2xl font-bold">Sonido Claro para tu Escritorio</h3>
      <p>Mejora el audio de tu PC o laptop con este set de parlantes 2.0. Diseño compacto y moderno en negro con detalles en azul brillante. Alimentación por USB y conexión de audio de 3.5mm para una instalación simple y rápida.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Tipo:</strong> 2.0 (Estéreo)</li>
        <li><strong>Potencia:</strong> 6W (3W x 2)</li>
        <li><strong>Alimentación:</strong> USB 5V</li>
        <li><strong>Conexión de Audio:</strong> Jack 3.5mm</li>
        <li><strong>Control de Volumen:</strong> Sí, en el cable</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Ricardo M.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 10 días</p>
        <p class="text-gray-600 dark:text-gray-400">Cumplen su función. Sonido claro para mis clases en línea. Simples y efectivos por el precio.</p>
      </div>
    `
  },
  { 
    id: 6, 
    name: "Parlantes Gamer RGB 2.0", 
    category: "Parlantes", 
    brand: "GamerTech", 
    price: 129.0, 
    img: "img/parlantes-3.jpeg", 
    alt: "Set de parlantes gamer 2.0 con iluminación RGB.",
    description: `
      <h3 class="text-2xl font-bold">Completa tu Set-up</h3>
      <p>Eleva tu estación de juego con estos parlantes gamer. Su diseño angular y la iluminación RGB dual (en el cono y en la rejilla) crean una atmósfera de inmersión total. Sonido estéreo optimizado para juegos.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Tipo:</strong> 2.0 (Estéreo)</li>
        <li><strong>Iluminación:</strong> RGB Dual (Estática y pulsante)</li>
        <li><strong>Potencia:</strong> 10W (5W x 2)</li>
        <li><strong>Alimentación:</strong> USB 5V</li>
        <li><strong>Conexión de Audio:</strong> Jack 3.5mm</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">'DarkZero'</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 semana</p>
        <p class="text-gray-600 dark:text-gray-400">Se ven geniales junto a mi PC. Las luces son un plus y el sonido es bueno para lo que cuestan.</p>
      </div>
    `
  },
  { 
    id: 7, 
    name: "Cargador 25W PD (Negro)", 
    category: "Cargadores", 
    brand: "Samsung", 
    price: 119.0, 
    img: "img/cargador-1.jpeg", 
    alt: "Cargador Samsung 25W PD con cable USB-C.",
    description: `
      <h3 class="text-2xl font-bold">Carga Super Rápida</h3>
      <p>Nunca te quedes sin batería. Este cargador de 25W con tecnología Power Delivery (PD) y PPS ofrece una carga súper rápida para tus dispositivos Samsung y otros compatibles. Incluye cable USB-C a USB-C.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Potencia:</strong> 25W Max</li>
        <li><strong>Tecnología:</strong> Power Delivery (PD) 3.0, PPS</li>
        <li><strong>Entrada:</strong> 100-240V</li>
        <li><strong>Salida:</strong> (PDO) 5V/3A, 9V/2.77A (PPS) 3.3-5.9V/3A</li>
        <li><strong>Cable:</strong> USB-C a USB-C (1m)</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Sofia C.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 4 días</p>
        <p class="text-gray-600 dark:text-gray-400">Carga mi S23 Ultra súper rápido. Es el original, totalmente recomendado.</p>
      </div>
    `
  },
  { 
    id: 8, 
    name: "Cargador SuperCharge 22.5W", 
    category: "Cargadores", 
    brand: "Huawei", 
    price: 69.0, 
    img: "img/cargador-2.jpeg", 
    alt: "Cargador Huawei SuperCharge 22.5W.",
    description: `
      <h3 class="text-2xl font-bold">Energía Rápida y Segura</h3>
      <p>Cargador original Huawei SuperCharge para una carga eficiente y segura de tus dispositivos. Potencia de 22.5W que lleva tu batería al 50% en minutos. Incluye cable USB-A a USB-C original.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Potencia:</strong> 22.5W Max</li>
        <li><strong>Tecnología:</strong> Huawei SuperCharge</li>
        <li><strong>Salida:</strong> 10V/2.25A, 9V/2A, 5V/2A</li>
        <li><strong>Cable:</strong> USB-A a USB-C (1m)</li>
        <li><strong>Compatibilidad:</strong> P30, P40, Mate 20, Mate 30 y más.</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Miguel A.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 semana</p>
        <p class="text-gray-600 dark:text-gray-400">Funciona perfecto con mi P30 Pro, activó el 'SuperCharge' de inmediato.</p>
      </div>
    `
  },
  { 
    id: 9, 
    name: "Cargador 33W (Blanco)", 
    category: "Cargadores", 
    brand: "Xiaomi", 
    price: 49.0, 
    img: "img/cargador-3.jpeg", 
    alt: "Cargador Xiaomi 33W con cable USB-C.",
    description: `
      <h3 class="text-2xl font-bold">Carga Rápida para tu Día</h3>
      <p>Este cargador Xiaomi de 33W es la solución perfecta para cargar tus dispositivos de la familia Redmi, Poco o Mi a máxima velocidad. Diseño compacto y seguro, con cable USB-C incluido.</p>
    `,
    specs: `
      <h3 class="text-2xl font-bold">Especificaciones Técnicas</h3>
      <ul class="list-disc pl-6">
        <li><strong>Potencia:</strong> 33W Max</li>
        <li><strong>Tecnología:</strong> Xiaomi Turbo Charge</li>
        <li><strong>Salida:</strong> 11V/3A Max</li>
        <li><strong>Cable:</strong> USB-A a USB-C (1m)</li>
        <li><strong>Compatibilidad:</strong> Note 10 Pro, Poco X3, Mi 11 Lite y más.</li>
      </ul>
    `,
    reviews: `
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Jorge T.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 2 semanas</p>
        <p class="text-gray-600 dark:text-gray-400">Excelente, carga mi Redmi Note 10 Pro a 33W sin problemas. Llegó rápido.</p>
      </div>
      <div class="border-b border-gray-200 dark:border-gray-700/50 py-4">
        <div class="flex items-center mb-1">
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400" style="font-variation-settings: 'FILL' 1">star</span>
          <span class="material-symbols-outlined text-yellow-400">star</span>
        </div>
        <p class="font-semibold text-gray-900 dark:text-white">Valeria F.</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">hace 1 día</p>
        <p class="text-gray-600 dark:text-gray-400">Buen cargador, aunque el cable podría ser un poco más largo.</p>
      </div>
    `
  },
];

export let cart = JSON.parse(localStorage.getItem('techEaseCart')) || [];
export let favorites = JSON.parse(localStorage.getItem('techEaseFavorites')) || [];

export function saveCart() {
  localStorage.setItem('techEaseCart', JSON.stringify(cart));
}
export function saveFavorites() {
  localStorage.setItem('techEaseFavorites', JSON.stringify(favorites));
}

export function renderCartModal() {
  const cartModalBody = document.getElementById("cart-modal-body");
  const cartTotalElement = document.getElementById("cart-total");
  if (!cartModalBody || !cartTotalElement) return;

  cartModalBody.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartModalBody.innerHTML =
      '<p class="text-center text-gray-500 dark:text-gray-400">Tu carrito está vacío.</p>';
  } else {
    const cartItems = cart.reduce((acc, product) => {
      acc[product.id] = acc[product.id] || { ...product, quantity: 0 };
      acc[product.id].quantity += 1;
      return acc;
    }, {});

    Object.values(cartItems).forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      const cartItemHTML = `
      <div class="flex items-center gap-4 mb-4">
        <img src="${item.img}" alt="${item.alt}" class="w-16 h-16 object-cover rounded-lg">
        <div class="flex-1">
          <p class="font-medium text-gray-900 dark:text-white">${item.name}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">S/ ${item.price.toFixed(2)} x ${item.quantity}</p>
        </div>
        <div class="text-right">
            <p class="font-bold text-gray-900 dark:text-white">S/ ${itemTotal.toFixed(2)}</p>
            <button data-product-id="${item.id}" class="remove-from-cart-btn text-sm text-red-500 hover:underline">Quitar</button>
        </div>
      </div>
    `;
      cartModalBody.insertAdjacentHTML("beforeend", cartItemHTML);
    });
  }
  cartTotalElement.textContent = `S/ ${total.toFixed(2)}`;
}

export function renderFavoritesModal() {
  const favoritesModalBody = document.getElementById("favorites-modal-body");
  if (!favoritesModalBody) return;

  favoritesModalBody.innerHTML = "";
  if (favorites.length === 0) {
    favoritesModalBody.innerHTML =
      '<p class="text-center text-gray-500 dark:text-gray-400">No tienes productos favoritos.</p>';
  } else {
    const uniqueFavoriteIds = [...new Set(favorites)];
    const favoriteProducts = allProducts.filter((p) =>
      uniqueFavoriteIds.includes(p.id)
    );

    favoriteProducts.forEach((item) => {
      const favItemHTML = `
      <div class="flex items-center gap-4 mb-4">
        <img src="${item.img}" alt="${item.alt}" class="w-16 h-16 object-cover rounded-lg">
        <div class="flex-1">
          <p class="font-medium text-gray-900 dark:text-white">${item.name}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">${item.brand}</p>
          <p class="font-bold text-primary">S/ ${item.price.toFixed(2)}</p>
        </div>
        <div class="text-right">
            <a href="product-detail.html?id=${item.id}" class="text-sm text-primary hover:underline">Ver</a>
        </div>
      </div>
    `;
      favoritesModalBody.insertAdjacentHTML("beforeend", favItemHTML);
    });
  }
}

export function updateCartBadge() {
  const cartBadge = document.getElementById("cart-badge");
  const mobileCartBadge = document.getElementById("mobile-cart-badge");
  const badges = [cartBadge, mobileCartBadge].filter(Boolean);
  const count = cart.length;

  badges.forEach(badge => {
    if (count === 0) {
      badge.style.display = "none";
    } else {
      badge.style.display = "flex";
      badge.textContent = count;
      badge.classList.add("pop-animation");
      badge.onanimationend = () =>
        badge.classList.remove("pop-animation");
    }
  });
}

export function updateFavoritesBadge() {
  const favoritesBadge = document.getElementById("favorites-badge");
  const mobileFavoritesBadge = document.getElementById("mobile-favorites-badge");
  const badges = [favoritesBadge, mobileFavoritesBadge].filter(Boolean);
  const uniqueFavorites = [...new Set(favorites)];
  const count = uniqueFavorites.length;

  badges.forEach(badge => {
    if (count === 0) {
      badge.style.display = "none";
    } else {
      badge.style.display = "flex";
      badge.textContent = count;
      badge.classList.add("pop-animation");
      badge.onanimationend = () =>
        badge.classList.remove("pop-animation");
    }
  });
}

function handleCartModalClick(event) {
  const button = event.target.closest("button");
  if (!button || !button.classList.contains("remove-from-cart-btn"))
    return;

  const productId = parseInt(button.dataset.productId);
  
  if (removeSingleInstanceFromCart(productId)) {
    saveCart();
    renderCartModal();
    updateCartBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  }
}

function openCartModal() {
  const cartModal = document.getElementById("cart-modal");
  renderCartModal();
  cartModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = "none";
  document.body.style.overflow = "auto";
}

function openFavoritesModal() {
  const favoritesModal = document.getElementById("favorites-modal");
  renderFavoritesModal();
  favoritesModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeFavoritesModal() {
  const favoritesModal = document.getElementById("favorites-modal");
  favoritesModal.style.display = "none";
  document.body.style.overflow = "auto";
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuIcon = mobileMenuToggle?.querySelector("span");
  if (!mobileMenu || !mobileMenuIcon) return;
  
  const isHidden = mobileMenu.classList.toggle("hidden");
  mobileMenuIcon.textContent = isHidden ? "menu" : "close";
}

export function initializeApp() {
  const cartButton = document.getElementById("cart-button");
  const favoritesButton = document.getElementById("favorites-button");
  const mobileCartButton = document.getElementById("mobile-cart-button");
  const mobileFavoritesButton = document.getElementById("mobile-favorites-button");
  const closeCartModalButton = document.getElementById("close-cart-modal");
  const closeFavoritesModalButton = document.getElementById("close-favorites-modal");
  const cartModal = document.getElementById("cart-modal");
  const favoritesModal = document.getElementById("favorites-modal");
  const cartModalBody = document.getElementById("cart-modal-body");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

  cartButton?.addEventListener("click", openCartModal);
  favoritesButton?.addEventListener("click", openFavoritesModal);
  mobileCartButton?.addEventListener("click", openCartModal);
  mobileFavoritesButton?.addEventListener("click", openFavoritesModal);
  closeCartModalButton?.addEventListener("click", closeCartModal);
  closeFavoritesModalButton?.addEventListener("click", closeFavoritesModal);
  
  cartModal?.addEventListener("click", (event) => {
    if (event.target === cartModal) closeCartModal();
  });
  favoritesModal?.addEventListener("click", (event) => {
    if (event.target === favoritesModal) closeFavoritesModal();
  });
  
  cartModalBody?.addEventListener("click", handleCartModalClick);
  mobileMenuToggle?.addEventListener("click", toggleMobileMenu);

  updateCartBadge();
  updateFavoritesBadge();
}

export function getProductQuantityInCart(productId) {
  return cart.filter(p => p.id === productId).length;
}

export function removeSingleInstanceFromCart(productId) {
  const index = cart.findIndex(p => p.id === productId);
  if (index > -1) {
    cart.splice(index, 1);
    return true;
  }
  return false;
}

export function removeAllOfProductFromCart(productId) {
  let i = cart.length;
  let removed = false;
  while (i--) {
    if (cart[i].id === productId) {
      cart.splice(i, 1);
      removed = true;
    }
  }
  return removed;
}