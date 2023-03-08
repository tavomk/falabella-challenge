function App() {
  //se instancia array para guardar resultado.
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    /* Agrega elementos al array numbers según requerimientos del Challenge. 
     * Si es múltiplo de 3 imprimir 'Falabella'.
     * Si es múltiplo de 5 imprimir 'IT'
     * Si es mútiplo de 3 y 5 imprimir 'Marketplace
     * En caso de que no sea ninguno de los requerimientos anteriormente mencionados se imprime el valor del número.
     */
    numbers.push(
      (i % 3 === 0 && 'Falabella')||
      (i % 5 === 0 && 'IT') ||
      (i % 3 === 0 && i % 5 === 0 && 'Marketplace') ||
      i
    );
  }

  // Recorre los elementos del array number y lo renderiza en el front en tag <p> 
  return (
    <div>
      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
}

export default App;
