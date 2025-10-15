import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div>
        {/* Solid Buttons */}
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>

        <br /><br />

        {/* Outline Buttons */}
        <button type="button" className="btn btn-outline-primary">Primary</button>
        <button type="button" className="btn btn-outline-secondary">Secondary</button>
        <button type="button" className="btn btn-outline-success">Success</button>
        <button type="button" className="btn btn-outline-danger">Danger</button>
        <button type="button" className="btn btn-outline-warning">Warning</button>
        <button type="button" className="btn btn-outline-info">Info</button>
        <button type="button" className="btn btn-outline-light">Light</button>
        <button type="button" className="btn btn-outline-dark">Dark</button>

        <br /><br />

        {/* Progress Bars */}
        <div className="progress mb-2">
          <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }}></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
