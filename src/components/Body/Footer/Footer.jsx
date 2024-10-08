import React from 'react';
import social from './image/social.jpeg'
import './Footer.css'; // Import the CSS for styling
import footerLogo from './image/footerLogo.svg'
import store1 from './image/store1.webp'
import store2 from './image/store2.webp'

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <img style={{margin: "50px  0 0 4%",width: "15%"}} src={footerLogo} alt="" />
     <div className="contacts">
        <div className="castomer">
           <h4 style={{color:"yellow",textTransform:"uppercase"}}>customer service</h4>
           <p>Contact Us</p>
           <p>Track Order</p>
           <p>Return Order</p>
           <p>Cancel Order</p>
        </div>
        <div className="compony">
           <h4 style={{color:"yellow",textTransform:"uppercase",}}>company</h4>
           <p>About Us</p>
           <p>Terms & Conditions</p>
           <p>Privacy Policy</p>
            <h4 style={{color:"yellow",textTransform:"uppercase",width:"100%",}}>download the app</h4>
           <div className="apps">
            <img src={store1} alt="" />
            <img src={store2} alt="" />
           </div>
        </div>
        <div className="contact">
           <h4 style={{color:"yellow",textTransform:"uppercase",}}>connect with us</h4>
           <img style={{width:"60%", backgroundColor:"black"}} src={social} alt="" />
        </div>
        <div className="email" >
           <h4 style={{color:"yellow",textTransform:"uppercase",}}>keep up to date</h4>
           <input type="email" id="" placeholder='Enter Your ID:' 
           style={{backgroundColor:"black", color:"white", outline:"none", height:"30px",
             width:"130px", textAlign:"center",fontSize:"large",marginTop:"60px"
           }}/>
           <button style={{
            height:"35px", width:"130px", backgroundColor:"yellow",color:"black",cursor:"pointer"
           }}>SUBSCRIBE</button>
        </div>
     </div>
     <p style={{border:"1px solid wheat",}}></p>
     <div className="clothes">
        <div className="men">
            <h4>Men's Clothing</h4>
            <p>Top Wear</p><p>Men's New Arrivals</p>  <p>Men's T-Shirts</p>
            <p>Men's Hoodies & Sweatshirts</p>  <p>Oversized T-Shirts for Men</p>
            <p>Men's Long Sleeve T-shirts</p>  <p>Men's White T-shirts</p>  <p>Men's Crew Neck T-shirts</p>
            <p>Men's Half Sleeve T-Shirts</p><p>Men's Printed T-shirts</p>
            <p>Men's Plain T-shirts</p><p>Men's Plus Size T-shirts</p><p>Men's Vests</p>
            <p>Men's Polo T-Shirts</p><p>Men's tank Tops</p><p>Akatsuki T-Shirts</p>
            <p>Men's Kurtas</p><p>Men's Combo T-Shirts</p><p>Men's Shirts</p><p>Men's Nightwear</p>
            <p>Men's Plus Size Store</p><p>Bottom Wear</p><p>Men's Pajamas</p><p>Men's Boxer Shorts</p>
            <p>Men's Shorts</p><p>Men's Jogger</p><p>Men's Cargo Joggers</p>
            <p>Men's Track Pants</p><p>Men's Jeans</p><p>Men's Bell Bottom Jeans</p> <p>Men's Trousers & Pants</p>
        </div>
        <div className="women">
            <h4>Women's Clothing</h4>
            <p>Women's Top Wear</p>
            <p>Women's New Arrivals</p>
            <p>Women's T-Shirts</p>
           <p> Women's Fashion Tops</p>
           <p> Women's Hoodies & Sweatshirts</p>
          <p>  Women's Dresses</p>
          <p>  Women's 3/4 Sleeve T-Shirts</p>
          <p>  Women's Kurtis</p>
          <p>  Women's Combo T-Shirts</p>
          <p>  Women's Nightwear</p>
           <p> Women's Plus Size Store</p>
           <p> Women's Bottom Wear</p>
           <p> Women's Co-ord Sets</p>
          <p>  Women's Pajamas</p>
          <p>  Women's Boxer Shorts</p>
           <p> Women's Jeans</p>
         <p>   Women's Wide Leg Jeans</p>
           <p> Women's Jeggings</p>
          <p>  Women's Joggers</p>
          <p>  Women's Trousers & Pants</p>
           <p> Women's Cargo Pants</p>
          <p>  Women's Track Pants</p>
          <p>  Women's Shorts</p>
          <p>  BAGS</p>
          <p>  Laptop Bags</p>
            <p>Small Backpacks</p>
        </div>
        <div className="cover">
            <h4>Mobile Covers</h4>
            <p>Apple</p>
            <p>Realme</p>
            <p>Samsung</p>
            <p>Xiaomi</p>
            <p>OnePlus</p>
            <p>Vivo</p>
            <p>Oppo</p>
            <p>Poco</p>
        </div>
        <div className="type">
            <h4>Fanbook</h4><h4>Offers</h4><h4>Sitemap</h4>
        </div>
     </div>
     <div className="description">
        <h4 style={{marginTop:"15px",color:"white"}}>
            
BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE.
Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes creative,
 distinctive fashion for the trendy, contemporary Indian. Bewakoof® was created on the principle of creating impact through innovation, honesty and thoughtfulness.
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability,
         and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus
          extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-
          consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint
           and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee
            benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        Online Shopping at Bewakoof® is hassle-free, convenient and super-exciting!
        Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we
         have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online 
         shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals
          and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly
           hassle free. This in our own words is what we call Bewakoof.com.
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        Bewakoof®, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping 
        for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear
         and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online
          shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it
           will put a smile on their faces.
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        Bewakoof.com: the quirkiest online shopping sites of all!
        Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America
         t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com.
          If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour 
          of our bewakoof® blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they 
          say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? 
          Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, 
          you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and bag packs and so much more are
           just some of the other items you can grab hold of here.
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        Avail of Online shopping benefits at Bewakoof.com and youll shop nowhere else!
        Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment
         for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after
          purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be
           safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes
            online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day 
            returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with
             high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing
              head to Bewakoof.com for a great online shopping india experience now! Could you have asked for more?
        </h4>
        <h4 style={{marginTop:"15px",color:"white"}}>
        OUR PHILOSOPHY
        We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same
         time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to 
         get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent 
         innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, 
         everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen
          in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures
           reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact 
           on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting 
           and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof® is about creating an impact by breaking conventions and having a different perspective!
        </h4>
     </div>
    </footer> 
    </>
  );
};

export default Footer;
