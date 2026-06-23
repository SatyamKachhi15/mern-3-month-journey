import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
       <h1>Crickk by <b> satyam</b>-
        <h2>A Merchandise and Albumb provider.</h2>
      </h1>

      <div className="products">
        <ProductCard
          name="MS Dhoni"
          role="Wicket Keeper"
          team="India"
          rating="5.0"
          image="https://tse3.mm.bing.net/th/id/OIP.oiVnRuJoFdV7vBDE8AjfYAHaEo?cb=thfc1falcon2&w=760&h=475&rs=1&pid=ImgDetMain&o=7&rm=3"
          Price="RS 7000"
        />

        <ProductCard
          name="Virat Kohli"
          role="Batsman"
          team="India"
          rating="4.9"
          image="https://wallpaperaccess.com/full/1311173.jpg"
          Price=" RS 1800"
        />

        <ProductCard
          name="Rohit Sharma"
          role="Batsman"
          team="India"
          rating="4.8"
          image="https://wallpaperbat.com/img/693762-rohit-sharma-cricket-poster-mumbai-indians-ipl-cricket-wallpaper.jpg"
          Price="RS 4500"
        />
        <ProductCard
          name="Sachin Tendulkar"
          role="Batsman"
          team="India"
          rating="5"
          image="https://wallpapers.com/images/hd/sachin-tendulkar-3000-x-2181-wallpaper-cai5mjnwoxk9jee8.jpg"
          Price="RS 10000 "
        />
        <ProductCard
          name="Steve Smith"
          role="Batsman"
          team="Australia"
          rating="4.8"
          image="https://live-production.wcms.abc-cdn.net.au/dbf4572b61bafd15826f1f5982d639ad?impolicy=wcms_crop_resize&cropH=1464&cropW=2200&xPos=0&yPos=0&width=862&height=575"
          Price="RS 4900"
        />
        <ProductCard
          name="AB De Villiers"
          role="Batsman"
          team="South Africa"
          rating="4.9"
          image="https://sportzwiki.com/wp-content/uploads/2021/03/AB-de-Villiers-1.jpg"
          Price="RS 1700"
        />
<footer>
  <div>
    Trusted BY <b> CRICKET </b> LOVER
  </div>
</footer>

      </div>
    </>
  );
}

export default App;