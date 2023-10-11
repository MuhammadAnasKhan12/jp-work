import React from "react";
import "./App.css";
import DashboardPage from "./screens/admin_screen/Dashboard";
import AppRouter from "./config/routers/routers";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
