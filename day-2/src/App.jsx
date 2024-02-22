import { EditMessage } from "./pages/messages/edit-message";
import { CreateMessage } from "./pages/messages/create-message";
import { Auth } from "./pages/auth/auth";
import { Messages } from "./pages/messages/messages-list";
import { Routes, Route, Router } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Messages />} />
          <Route path="create" element={<CreateMessage />} />
          <Route path="edit/:id" element={<EditMessage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
