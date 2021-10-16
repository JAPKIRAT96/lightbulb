import './App.css';
import Controller from './controller.js';

function App() {
  const controllers = [10, 18]
  return (
    <div>
      {controllers.map(bulbCount => <Controller numOfBulbs={bulbCount} />)}
    </div>
  )
}

export default App;