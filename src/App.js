import './App.css';
import FetchNorrisJoke from './FetchNorrisJoke';
import PageTitle from './PageTitle';

const App = () => {
  return (
    <div className="App">
      <PageTitle />

      <div className="App-header">
        <FetchNorrisJoke />
      </div>
    </div>
  );
}

export default App;
