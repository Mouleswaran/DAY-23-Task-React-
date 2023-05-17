import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
    <Card price/>
    <Card price/>
    <Card price/>
    </div>
  </div>
</section>

   
    </div>
  );
}

export default App;
