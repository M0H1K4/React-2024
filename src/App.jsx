import img from './assets/react-core-concepts.png'

function App() {

  return (
    <div>
      <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build
        </p>
      </header>
      <main>
        <h2>Time to get started! And I am table </h2>
      </main>
    </div>
  );
}

export default App;
