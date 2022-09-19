import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import TicketModal from "./components/TicketModal";
import { dashboardData, completedTasks, users } from "../src/Mock-data.js";
import LoginForm from "../src/components/LoginForm/LoginForm.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage/Homepage";
import TaskPage from "./components/Taskpage/TaskPage";
import AdminHomepage from "./components/AdminHomepage";

let initial = {
  title: "",
  description: "",
  file: "",
};

function App() {
  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);
  const [flag, setFlag] = useState(false);

  const [currentIndex, setCurrentIndex] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");
  const [ticketData, setTicketData] = useState(initial);

  const saveTicket = () => {
    cols[currentIndex][currentActivity].push(ticketData);
    setTicketData(initial);
    setTicketModal(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Navigate to={`/auth/loginAdmin`} replace />}
          />
          <Route
            path='/auth/loginAdmin'
            element={
              <LoginForm
                setFlag={setFlag}
                title='Admin'
                child1='Admin'
                child2='User'
              />
            }
          />
          <Route
            path='/auth/loginUser'
            element={
              <LoginForm
                setFlag={setFlag}
                title='User'
                child1='User'
                child2='Admin'
              />
            }
          />

          {
            flag ? (
              <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/user/:id/project/:pid' element={<Dashboard />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/user/:id' element={<Homepage />} />
                <Route path='/adminhomepage' element={<AdminHomepage />} />
                <Route path='/task' element={<TaskPage />} />
                <Route
                  path='/user/:id/project/:pid/task/:tid'
                  element={<TaskPage />}
                />
              </>
            ) : (
              <>
                <Route
                  path='/dashboard'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/user/:id/project/:pid'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/homepage'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/user/:id'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/adminhomepage'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/task'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
                <Route
                  path='/user/:id/project/:pid/task/:tid'
                  element={<Navigate to={`/auth/loginAdmin`} replace />}
                />
              </>
            )
            // null
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
