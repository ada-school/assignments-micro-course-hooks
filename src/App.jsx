import "./App.css";

function App() {
  return (
    <main className="container">
      <header>
        <h1>ADA Shopping</h1>
      </header>
      <section className="product">
        <h2>Laptop</h2>
        <h1>💻</h1>
        <p>Precio (precio inicial)$</p>
      </section>
      <section className="offer">
        <h2>Ofertar</h2>
        <div>{/* Código para listar los botones con las ofertas */}</div>
      </section>
      <section className="result">
        <p>{/* Ternario con el resultado del mensaje */}</p>
      </section>
    </main>
  );
}

export { App };
