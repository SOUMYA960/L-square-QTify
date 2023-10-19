import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums } from "./api";
import Section from "./Components/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumbsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumbsData();
  }, []);

  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateNewAlbumbsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  };

  useEffect(() => {
    generateNewAlbumbsData();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      {/* {topAlbumsData.map((item) => {
        return <Card data={item} type="album" key={item.title} />;
      })} */}
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
        {/* <Section data={topAlbumsData} type="album" title="Songs" /> */}
      </div>
    </div>
  );
}

export default App;
