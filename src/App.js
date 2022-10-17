import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { SharedLayout } from "./Components";
import { Login, UserDetail, Users } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SharedLayout />}>
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/users/:userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
