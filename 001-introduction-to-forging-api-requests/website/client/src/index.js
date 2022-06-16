import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Discover from './pages/Discover';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ProfileFeed from "./pages/ProfileFeed";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
            <Route index element={<Feed />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/profile/:username" element={<ProfileFeed />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);