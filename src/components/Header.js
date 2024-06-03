export const createHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>Header Component</h1>
   <nav>
      <a href="/home" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/contact" data-link>Contact</a>
    </nav>
  `;
  return header;
};
