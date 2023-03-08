function App() {
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(
      (i % 3 === 0 && 'Falabella')||
      (i % 5 === 0 && 'IT') ||
      (i % 3 === 0 && i % 5 === 0 && 'Marketplace') ||
      i
    );
  }

  return (
    <div>
      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
}

export default App;
