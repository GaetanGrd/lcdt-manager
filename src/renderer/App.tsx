import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import "tailwindcss/tailwind.css";
import { useTranslation } from "renderer/hooks/use-translation.hook";
import { NavBar } from './components/nav-bar.component'



const Hello = () => {

  const t = useTranslation();


  return (
    <div>
      <NavBar/>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
