import ReceiptParticles from './ReceiptParticles';
import './HomePage.css';

function HomePage() {
  return (
    <div class="home-page">
        <h1 id="website-title">Receipted</h1>
        <ReceiptParticles />
        <div class="login-card">
            <div class="login-card-content">
                <form class="form-field">
                    <label>Store Brand: </label>
                        <select name="stores" id="stores">
                            <option value="shoprite">ShopRite</option>
                            <option value="costco">Costco</option>
                            <option value="stop-and-shop">Stop & Shop</option>
                            <option value="aldi">Aldi</option>
                        </select>   
                    <div class="form-field">
                        <label> Receipt Code: 
                            <input type="text" name="name" />
                        </label>
                    </div>
                </form>
                <div>
                <br></br>
                </div>
                <button id="submit" type="submit">
                    Go
                </button>
                
            </div>
        </div>
    </div>
  );
}

export default HomePage;
