import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Aboutus.css";

function Aboutus() {
   
    return (
<div>
    <Navbar />
    <div className='container' >
    <h1><span className="fa fa-heartbeat"></span> MEDICURE</h1><br></br>
    <h3>EFFORTLESS ONLINE MEDICINE ORDERS AT MEDICURE PHARMACY</h3>
    <p>Because ordering medicines online need not be complicated but rather a cakewalk. And at Medicure Pharmacy we ensure that. All you need to do is:

    Browse through our wide variety of products
    Add products to your cart and complete the payment. Voila!
    Your order will be on its way to you.
    Apollo Pharmacy is your go-to online pharmacy store for all your medicine needs. We also have a range of products in the personal care, baby care, health and nutrition, wellness, and lifestyle categories. Come explore ‘everything under the sun’ related to healthcare at Medicure Pharmacy.
    </p>
    <h3>Reasons To Buy Medicine From Medicure Pharmacy</h3>
    <p>For over 39 years, Medicure Pharmacy has been providing you with genuine medicines round-the-clock, through 24-hour pharmacies. And now through Medicure Pharmacy, we intend to make your lives easier – by getting your medicines delivered to you. Yes, no more stepping out to get your medicines, no more standing in long queues, no more worrying about the genuineness of medicines, no more sweat! Here are more reasons why you should buy your medicines from Medicure Pharmacy:    </p>
    <ul>
    <li>uper-fast deliveries. In select cities, deliveries are done in as less as 1 day. </li>
    <li>Largest pharmacy chain in India with over 5,600 stores</li>
    <li>Attractive deals on medicines and other FMCG products</li>
    <li>Get Health Credits on purchases (not applicable on discounted products)</li>
    <li>Option to consult with a pharmacologist to check medicine interactions</li>
    <li>Wide range of healthcare products to choose from</li>
    <li>Only genuine and top-quality products delivered.</li>
    <li>Medicure Pharmacy - Largest Online Pharmacy In India</li>
    <li>With more than 5,600 stores in India, Medicure Pharmacy is not just the largest online pharmacy store in India but in Asia as well. Our pharmacy chain has been operational and been providing genuine quality healthcare products for more than 39 years. Our wide range of products ensures that everything you need related to healthcare, you will find it on our platform.</li>
    </ul>

    <h3>Most Trusted Online Medical Store Of India</h3>
    As pioneers in the healthcare segment, we understand the importance of trust. And that is why, over the years, we worked on building that trust. We ensure that every product sold through our offline/online stores are checked for their authenticity, quality, and compliance with the Central Drugs Standard Control Organization, the national regulatory body for Indian pharmaceuticals and medical devices.

    <h3>100% Genuine Medicine From Medicure Pharmacy</h3>
    <p>All medicines/healthcare products sold on Medicure Pharmacy are procured from our sister company - Medicure Pharmacy, with a reputation of selling only 100% genuine products. The products sold through Medicure Pharmacy are inspected thoroughly to ensure only genuine products make the cut. We believe that when it comes to medicines, quality and authenticity should never be compromised.
    </p>
    <h3>Over 5,600 Pharmacy Stores In India</h3>
    <p>
    Our strong network lets us deliver medicines to every nook and corner of the country. We have more than 5,600 pharmacy stores in India catering to all your medicine needs. Our network is so vast that you may find an Medicure Pharmacy store at every 1 km. We are leveraging this vast network to now become an online medical store – by getting these medicines delivered to you.
    </p>
    <h3>Fastest Home Delivery Of Your Order</h3>
    <p>When it comes to medicines, most of us do not want to take a chance. This is why most of us prefer going to a store physically to get medicines. But you know what happens at the stores. First, you need to go there physically which means you have to drive/walk/ride for at least 10-15 minutes. Second, you need to wait for your turn which may come after 10-15 minutes. Third, you can only buy the products you are sure about. What if you want to buy an FMCG product but are not sure which one? You cannot expect the pharmacist to give you too many options.

    Medicure Pharmacy is the solution to all these. We deliver the medicines to you without you having to step out or wait in the queue to buy medicines. And we give you the option to browse through a variety of non-pharma products to choose from.
     <br></br>
    <b>Are we missing something here?</b> Yes, the time we take to deliver your order. We understand that you may sometimes require medicines in urgency and that is why we assure you the fastest home delivery of your medicines. Also, depending on the city you reside in, medicines can be delivered in as less as 1 hour.
    </p>
    <h3>Extra Benefits Of Online Medicine Orders</h3>
    <p>
    When you order medicines at Medicure Pharmacy, not only do you get your medicines delivered on time and at your doorstep, but you also get additional benefits. You can earn Medicure Health Credits whenever you order medicine online and also when you purchase other non-pharma products (not applicable on discounted products including the ones where coupon codes have been applied). You can use these Health Credits to make more purchases on our platform. And not to forget the discounts and exclusive offers we bring out from time to time.

    Additional Services I Will Receive
    Besides purchasing medicines, the additional services you can avail on our platform are doctor consultations, symptom checker, ordering diagnostic tests, and digitization of your health records. These services let you consult with doctors from over 70 specialties, check and understand your symptoms, book diagnostics tests, and convert your physical health records into digital records. With so many services under our umbrella, you wouldn't need to go anywhere else.</p>
    <Link to="/" className="btn btn-info" style={{float:"right"}}><span className="fa fa-arrow-left">Home</span></Link>
    </div>
</div>

    );
    
}

export default Aboutus;