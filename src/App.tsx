import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContentIntro from "./components/ContentIntro";
import CategoriesContent from "./components/CategoriesContent";
import "./App.css";

function App() {
  return (
    <div className="ContainerApp" id="ncc-app">
      <NavBar />
      <div className="MainContent MinHeight100vh">
        <main className="HeightCover PaddingContent">
          <Header />
          <ContentIntro />
          <CategoriesContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
