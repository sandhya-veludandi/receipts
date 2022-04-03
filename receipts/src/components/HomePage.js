import ReceiptParticles from './ReceiptParticles';
import './HomePage.css';

function HomePage() {
  return (
    <div class="home-page">
        <h1 id="website-title">Receipted</h1>
        <ReceiptParticles />
        <ul class="tabs" role="tablist">
            <li>
                <input type="radio" name="tabs" id="tab1" checked />
                <label for="tab1" 
                    role="tab" 
                    aria-selected="true" 
                    aria-controls="panel1" 
                    tabindex="0">Description</label>
                <div id="tab-content1" 
                    class="tab-content" 
                    role="tabpanel" 
                    aria-labelledby="description" 
                    aria-hidden="false">
                    <div class="login-card">
                            <div class="login-card-content">
                                <form class="form-field">
                                    <span>Store Brand: </span>
                                        <select name="stores" id="stores">
                                            <option value="shoprite">ShopRite</option>
                                            <option value="costco">Costco</option>
                                            <option value="stop-and-shop">Stop & Shop</option>
                                            <option value="aldi">Aldi</option>
                                        </select>   
                                    <div class="form-field">
                                        <span> Receipt Code: 
                                            <input type="text" name="name" />
                                        </span>
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
            </li>
  
            <li>
                <input type="radio" name="tabs" id="tab2" />
                <label for="tab2"
                    role="tab" 
                    aria-selected="false" 
                    aria-controls="panel2" 
                    tabindex="0">Specification</label>
                <div id="tab-content2" 
                    class="tab-content"
                    role="tabpanel" 
                    aria-labelledby="specification" 
                    aria-hidden="true">
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default HomePage;
