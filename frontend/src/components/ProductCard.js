import { faCartPlus, faCheck, faCircleInfo, faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../styles/ProductCard.css';

export default function ProductCard() {
    const [inCart, addToCart] = useState(false);
    // function addToCart (){
    // $('.buy').click(function(){
    //     $('.bottom').addClass("clicked");
    //   });

    //   $('.remove').click(function(){
    //     $('.bottom').removeClass("clicked");
    //   });

    // }
    return (
        <div className="productCard">
            <div className="container">
                <div className="top"></div>
                <div className={`bottom ${inCart ? 'clicked' : ''}`}>
                    <div className="left">
                        <div className="details">
                            <h1>Chair</h1>
                            <p>£250</p>
                        </div>
                        <div className="buy" onClick={() => addToCart(true)}>
                            {/* <i className="material-icons">add_shopping_cart</i> */}
                            <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="done">
                            {/* <i className="material-icons">done</i> */}
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div className="remove" onClick={() => addToCart(false)}>
                            {/* <i className="material-icons">clear</i> */}
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon">
                    {/* <i className="material-icons">info_outline</i> */}
                    <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <div className="contents">
                    <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                        <tr>
                            <th>Something</th>
                            <th>Something</th>
                        </tr>
                        <tr>
                            <td>200mm</td>
                            <td>200mm</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div >
    );
}