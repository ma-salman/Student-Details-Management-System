import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<StudentTable/>} />
      <Route  path="/student/create" element={<CreateStudent/>} />
      <Route  path="/student/edit/:studentid" element={<EditStudent/>} />
      <Route  path="/student/view/:studentid" element={<ViewDetails/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;

// npx json-server@0.17.4 --watch db.json --port 8000 --id id