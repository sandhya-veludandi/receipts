import './HomePage.css';

function HomePage() {
  return (
    <div classname="home-page">
        <h1 id="website-title">Receipted</h1>
        <form>
            <label> Store Brand:
                <select name="stores" id="stores">
                    <option value="shoprite">ShopRite</option>
                    <option value="costco">Costco</option>
                    <option value="stop-and-shop">Stop & Shop</option>
                    <option value="aldi">Aldi</option>
                </select>
            </label>
            <br></br>   
            <label> Receipt Code:
                <input type="text" name="name" />
            </label>
            <br></br>
            <input type="submit" value="Go!" />
        </form>
    </div>
  );
}

export default HomePage;
