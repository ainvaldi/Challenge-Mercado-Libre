export const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Mercado Libre</h1>
    <nav>
      <a href="#inicio">Inicio</a>
    </nav>
  `;
  return header;
};
