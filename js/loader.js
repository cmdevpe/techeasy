async function injectHTML(url, elementId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al cargar ${url}: ${response.statusText}`);
    }
    const text = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = text;
    } else {
      console.warn(`No se encontró el placeholder: #${elementId}`);
    }
  } catch (error) {
    console.error(`Error al inyectar HTML (${url}):`, error);
  }
}

async function loadLayout() {
  await Promise.all([
    injectHTML('layout/header.html', 'header-placeholder'),
    injectHTML('layout/footer.html', 'footer-placeholder'),
    injectHTML('layout/modals.html', 'modals-placeholder')
  ]);
}

export { loadLayout };