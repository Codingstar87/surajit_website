import React from 'react';
import './products.css';
import img1 from "../Assests3/bottle1.jpg";
import img2 from "../Assests3/bottle2.jpg"
import img3 from "../Assests3/bottle3.jpg";
import img4 from "../Assests3/bottle4.jpg";
import img5 from "../Assests3/bottle5.jpg";
import img6 from "../Assests3/bottle6.jpg";
import img7 from "../Assests3/bottle7.jpg";
import img8 from "../Assests3/bottle8.jpg";
import img9 from "../Assests3/bottle9.jpg";
import img10 from "../Assests3/bottle10.jpg";
import img11 from "../Assests3/bottle11.jpg";
import img12 from "../Assests3/mirror1.jpg";
import img13 from "../Assests3/mirror2.jpg";
import img14 from "../Assests3/mirror3.jpg";
import img15 from "../Assests3/mirror4.jpg";
import img16 from "../Assests3/mirror5.jpg";
import img17 from "../Assests3/lamp1.jpg";
import img18 from "../Assests3/lamp2.jpg";
import img19 from "../Assests3/lamp3.jpg";
import img20 from "../Assests3/waving_lamp2.jpg"
import img21 from "../Assests3/waving_lampshade1.jpg"
import img22 from "../Assests3/waving_lampshade2.jpg"
import img23 from "../Assests3/waving_lampshade3.jpg"
import img24 from "../Assests3/waving_lampshade4.jpg"
import img25 from "../Assests3/waving_lampshade5.jpg"
import img26 from "../Assests3/waving_lampshade6.jpg"
import img27 from "../Assests3/waving_lampshade7.jpg"
import img28 from "../Assests3/waving_lampshade8.jpg"
import img29 from "../Assests3/cosmatic01.jpg"
import img30 from "../Assests3/cosmatic02.jpg"
import img31 from "../Assests3/cosmatic03.jpg"
import img32 from "../Assests3/costamic04.jpg"
import img33 from "../Assests3/costamic05.jpg"
import img34 from "../Assests3/jwellery_boxA1.jpg"
import img35 from "../Assests3/jwellery_boxA2.jpg"
import img36 from "../Assests3/jwellery_boxA3.png"
import img37 from "../Assests3/jwellery_boxB1.jpg"
import img38 from "../Assests3/jwellery_boxB2.png"
import img39 from "../Assests3/jwellery_boxB3.png"
import img40 from "../Assests3/table_organizer1.jpg"
import img41 from "../Assests3/tea_coaster1.png"
import img42 from "../Assests3/desk_organizer01.png"
import img43 from "../Assests3/desk_organizer02.jpg"
import img44 from "../Assests3/flower_bas1.jpg"
import img45 from "../Assests3/idcard1.jpg"
import img46 from "../Assests3/clock1.jpg"
import img47 from "../Assests3/clck2.jpg"
import img48 from "../Assests3/memento1.jpg"
import img49 from "../Assests3/tray1.jpg"
import img50 from "../Assests3/TRAY 7.jpg"
import img51 from "../Assests3/soap case A2.jpg"
import img52 from "../Assests3/soap case A3.jpg"
import img53 from "../Assests3/soap case A4.jpg"
import img54 from "../Assests3/case1.png"
import img55 from "../Assests3/case2.png"
import img56 from "../Assests3/case3.png"
import img57 from "../Assests3/case4.png"
import img58 from "../Assests3/case5.png"
import img59 from "../Assests3/bamboo_box1.jpg"
import img60 from "../Assests3/waving_basket1.jpg"
import img61 from "../Assests3/waving_basket2.jpg"
import img62 from "../Assests3/waving_basket3.jpg"
import img63 from "../Assests3/waving_basket4.jpg"
import img64 from "../Assests3/waving_design1.jpg"
import img65 from "../Assests3/waving_design2.jpg"
import img66 from "../Assests3/waving_design3.jpg"
import img67 from "../Assests3/waving_design4.jpg"
import img68 from "../Assests3/waving_design5.jpg"
import img69 from "../Assests3/waving_design6.jpg"
import img70 from "../Assests3/waving_design7.jpg"
import img71 from "../Assests3/waving_design8.jpg"
import img72 from "../Assests3/waving_design9.jpg"
import img73 from "../Assests3/waving_design10.jpg"
import img74 from "../Assests3/waving_design11.jpg"
import img75 from "../Assests3/waving_design12.jpg"
import img76 from "../Assests3/waving_design13.jpg"
import img77 from "../Assests3/waving_design14.jpg"



const Products = React.forwardRef((props,ref) => {
    const products = [
        { name: 'Bamboo Bottles', price: '$5', img: img1 },
        { name: '', price: '$2', img: img2 },
        { name: '', price: '$10', img: img3 },
        { name: '', price: '$5', img: img4 },
        { name: '', price: '$2', img: img5 },
        { name: '', price: '$10', img: img6 },
        { name: '', price: '$5', img: img7 },
        { name: '', price: '$2', img: img8 },
        { name: '', price: '$10', img: img9 },
        { name: '', price: '$5', img: img10 },
        { name: '', price: '$2', img: img11 },
        { name: 'Bamboo Wall Mirror', price: '$10', img: img12 },
        { name: '', price: '$5', img: img13 },
        { name: '', price: '$2', img: img14 },
        { name: '', price: '$10', img: img15 },
        { name: '', price: '$10', img: img16 },
        { name: 'Bamboo Wall-hanging Lamp ', price: '$5', img: img17 },
        { name: '', price: '$2', img: img18 },
        { name: '', price: '$10', img: img19 },
        { name: 'Bamboo Wabing Lamp', price: '$10', img: img20 },
        { name: '', price: '$5', img: img21 },
        { name: '', price: '$2', img: img22 },
        { name: '', price: '$10', img: img23 },
        { name: '', price: '$5', img: img24 },
        { name: '', price: '$2', img: img25 },
        { name: '', price: '$10', img: img26 },
        { name: '', price: '$5', img: img27 },
        { name: '', price: '$2', img: img28 },
        { name: 'Bamboo Makeup Se', price: '$10', img: img29 },
        { name: '', price: '$5', img: img30 },
        { name: '', price: '$2', img: img31 },
        { name: '', price: '$10', img: img32 },
        { name: 'Bamboo Jwellery Box', price: '$5', img: img33 },
        { name: '', price: '$2', img: img34 },
        { name: '', price: '$10', img: img35 },
        { name: '', price: '$10', img: img36 },
        { name: '', price: '$5', img: img37 },
        { name: '', price: '$2', img: img38 },
        { name: 'Bamboo Table Organizer', price: '$10', img: img39 },
        { name: 'Bamboo Tea coaster', price: '$10', img: img40 },
        { name: 'Bamboo Table Organizer', price: '$5', img: img41 },
        { name: 'Bamboo Table Organizer', price: '$2', img: img42 },
        { name: 'Bamboo Flower Vase', price: '$10', img: img43 },
        { name: 'Bamboo Id Card', price: '$5', img: img44 },
        { name: 'Bamboo Wall Clock', price: '$2', img: img45 },
        { name: 'Bamboo Wall Clock', price: '$10', img: img46 },
        { name: 'Bamboo Memento', price: '$5', img: img47 },
        { name: 'Bamboo Tray', price: '$2', img: img48 },
        { name: 'Bamboo Tray', price: '$10', img: img49 },
        { name: 'Bamboo Soap Case', price: '$5', img: img50 },
        { name: 'Bamboo Soap Case', price: '$2', img: img51 },
        { name: 'Bamboo Soap Case', price: '$10', img: img52 },
        { name: 'Bamboo Box', price: '$5', img: img53 },
        { name: 'Bamboo Box', price: '$2', img: img54 },
        { name: ' ', price: '$10', img: img55 },
        { name: '', price: '$10', img: img56 },
        { name: '', price: '$5', img: img57 },
        { name: 'Bamboo Jwellery Box', price: '$2', img: img58 },
        { name: 'Bamboo Basket', price: '$10', img: img59 },
        { name: 'Bamboo Busket', price: '$10', img: img60 },
        { name: 'Bamboo Busket', price: '$5', img: img61 },
        { name: 'Bamboo Busket', price: '$2', img: img62 },
        { name: 'Bamboo Weaving Design A01', price: '$10', img: img63 },
        { name: 'Bamboo Weaving Design A02', price: '$5', img: img64 },
        { name: 'Bamboo Weaving Design A03', price: '$2', img: img65 },
        { name: 'Bamboo Weaving Design A04', price: '$10', img: img66 },
        { name: 'Bamboo Weaving Design A05', price: '$5', img: img67 },
        { name: 'Bamboo Weaving Design A06', price: '$2', img: img68 },
        { name: 'Bamboo Weaving Design A07', price: '$10', img: img69 },
        { name: 'Bamboo Weaving Design A08', price: '$5', img: img70 },
        { name: 'Bamboo Weaving Design A09', price: '$2', img: img71 },
        { name: 'Bamboo Weaving Design A10', price: '$10', img: img72 },
        { name: 'Bamboo Weaving Design A11', price: '$5', img: img73 },
        { name: 'Bamboo Weaving Design A12', price: '$2', img: img74 },
        { name: 'Bamboo Weaving Design A13', price: '$10', img: img75 },
        { name: 'Bamboo Weaving Design A14', price: '$10', img: img76 },
        { name: 'Bamboo Weaving Design A15', price: '$5', img: img77 },

    ];

    return (

        <section className="products" ref={ref}>
            
            <h2>Our Products</h2>
            <div className="product-list" >
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.img} alt={product.name} />
                        <h4>{product.name}</h4>
                        {/* <p>{product.price}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
})

export default Products;
