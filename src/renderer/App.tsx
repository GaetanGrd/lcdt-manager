import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import "tailwindcss/tailwind.css";
import { useTranslation } from "renderer/hooks/use-translation.hook";



const Hello = () => {

  const t = useTranslation();


  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <h2>Amazing translation : </h2>
      <h2> {t("NavBar.news")}</h2>
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
