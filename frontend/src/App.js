import "./App.css";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import DeleteStudent from "./components/DeleteStudent";
import GetStudent from "./components/GetStudent";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/" element={<AllStudents />} />
          <Route path="/:id" element={<GetStudentWrapper />} />
          <Route path="/delete/:id" element={<DeleteStudentWrapper />} />
          <Route path="/update/:id" element={<UpdateStudentWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

function GetStudentWrapper() {
  const { id } = useParams();
  return <GetStudent id={id} />;
}

function DeleteStudentWrapper() {
  const { id } = useParams();
  return <DeleteStudent id={id} />;
}

function UpdateStudentWrapper() {
  const { id } = useParams();
  return <UpdateStudent id={id} />;
}

export default App;
