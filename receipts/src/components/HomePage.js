import ReceiptParticles from './ReceiptParticles';
import FileUploadButton from './FileUploadButton';
import './HomePage.css';
import ProductData from './products.json';

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
                    tabindex="0">Split Bill</label>
                <div id="tab-content1" 
                    class="tab-content" 
                    role="tabpanel" 
                    aria-labelledby="Split Bill" 
                    aria-hidden="false">
                    <p>Click on the "Choose File" button to upload a file:</p>
                    <FileUploadButton />
                </div>
            </li>
  
            <li>
                <input type="radio" name="tabs" id="tab2" />
                <label for="tab2"
                    role="tab" 
                    aria-selected="false" 
                    aria-controls="panel2" 
                    tabindex="0">Receipt Search</label>
                <div id="tab-content2" 
                    class="tab-content"
                    role="tabpanel" 
                    aria-labelledby="Receipt Search" 
                    aria-hidden="true">
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
                            <div class="results">{
                                ProductData.map(post=> {
                                    return(
                                        <>
                                            <h4>{post.productname}</h4>
                                            <p>{post.store}</p>
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default HomePage;
