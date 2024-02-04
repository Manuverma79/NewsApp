import { useEffect, useState } from "react";
import CardGrid from "./components/cardGrid";
import Footer from "./components/footer";
import Header from "./components/header";
import SubHeading from "./components/subheading";

function App() {
  let [newsList, setNewsListState] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_376152dcaa43fea5022e936de74f8661e0d12&language=en"
    )
      .then((res) => res.json())
      .then((items) => {
        setNewsListState(items.results);
      });
  }, []);
  const Search = (item) => {
    item = item.split(" ").join("OR");
    console.log(item);
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_376152dcaa43fea5022e936de74f8661e0d12&q=${item}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsListState(data.results);
        console.log(data);
      });
  };
  return (
    <>
      <div className="p-0 m-0 overflow-x-hidden">
        <Header></Header>
        <SubHeading onSearch={Search}></SubHeading>
        <CardGrid newsList={newsList}></CardGrid>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
