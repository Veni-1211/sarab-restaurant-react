import { useState } from "react";
import menu1 from "../img/menu/1.jpg";
import menu2 from "../img/menu/2.jpg";
import menu3 from "../img/menu/3.jpg";
import menu4 from "../img/menu/4.jpg";
import menu5 from "../img/menu/5.jpg";
import menu6 from "../img/menu/6.jpg";
import gallery1 from "../img/portfolio/work1.jpg";
import gallery2 from "../img/portfolio/work2.jpg";
import gallery3 from "../img/portfolio/work3.jpg";
import gallery4 from "../img/portfolio/work4.jpg";
import gallery5 from "../img/portfolio/work5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonial1 from "../img/testimonial/1.jpg";
import testimonial2 from "../img/testimonial/2.jpg";
import testimonial3 from "../img/testimonial/3.jpg";
import testimonial4 from "../img/testimonial/4.jpg";
function Restaurant() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const openMenuPopup = (e) => {
    console.log("PLUS BUTTON CLICKED");
    const card = e.currentTarget.closest(".mcard");
    console.log("CARD DATA:", card?.dataset);

    setQuantity(1);
    setSelectedItem({
      img: card.dataset.img,
      title: card.dataset.title,
      cat: card.dataset.cat,
      price: card.dataset.price,
      old: card.dataset.old,
      rating: card.dataset.rating,
      reviews: card.dataset.reviews,
      cal: card.dataset.cal,
      time: card.dataset.time,
      desc: card.dataset.desc,
      tags: card.dataset.tags,
    });
  };
  const [galOpen, setGalOpen] = useState(false);
  const [selectGallery, setSelectGallery] = useState(null);
  const openGallery = (e) => {
    const item = e.currentTarget.closest(".gitem");
    const index = Number(item.dataset.gi);
    setGalleryIndex(index);
    setSelectGallery(galleryImages[index]);
    setGalOpen(true);
  };
  const menuImages = {
    "img/menu/1.jpg": menu1,
    "img/menu/2.jpg": menu2,
    "img/menu/3.jpg": menu3,
    "img/menu/4.jpg": menu4,
    "img/menu/5.jpg": menu5,
    "img/menu/6.jpg": menu6,
  };
  const galleryImages = [
    {
      img: gallery1,
      title: "Gourmet Burgers",
      desc: "Our delicious gourmet burgers.",
    },
    {
      img: gallery2,
      title: "Fresh Pizza",
      desc: "Freshly prepared pizza.",
    },
    {
      img: gallery3,
      title: "Delicious Food",
      desc: "Made with fresh ingredients.",
    },
    {
      img: gallery4,
      title: "Special Dishes",
      desc: "Our special restaurant dishes.",
    },
    {
      img: gallery5,
      title: "Tasty Desserts",
      desc: "Enjoy our delicious desserts.",
    },
  ];
  const prevGallery = () => {
    const newIndex =
      (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    setGalleryIndex(newIndex);
    setSelectGallery(galleryImages(newIndex));
  };
  const nextGallery = () => {
    const newIndex = (galleryIndex + 1) % galleryImages.length;

    setGalleryIndex(newIndex);
    setSelectGallery(galleryImages[newIndex]);
  };
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  return (
    <>
      <div id="topbar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="top-contact d-flex flex-wrap">
              <span>
                <i className="fas fa-phone-alt"></i>+1 (800) 123-4567
              </span>
              <span>
                <i class="fas fa-envelope"></i>
                info@sarabrestaurant.com
              </span>
              <span>
                <i className="fas fa-map-marker-alt"></i>42 Flavor Street, NY
              </span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="ttag">
                <i className="fas fa-fire me-1"></i>Free Delivery Today!
              </span>
              <div className="tsoc">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg" id="nav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="blogo">
              <div className="bico">
                <i className="fas fa-utensils"></i>
              </div>
              <div>
                <div className="bname">
                  Sar<span>ab</span>
                </div>
                <div className="bsub">Fast Food & Restaurant</div>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <i
              className="fas fa-bars"
              style={{ color: "var(--primary)", fontSize: "1.35rem" }}
            ></i>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#chefs">
                  Chefs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservation">
                  Reservation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-1">
              <button
                id="navSearchBtn"
                title="Search"
                onClick={() => setSearchOpen(true)}
              >
                <i className="fas fa-search"></i>
              </button>
              <a href="#menu" className="nav-link nav-cta">
                <i className="fas fa-shopping-bag me-1"></i>Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="searchOv" style={{ display: searchOpen ? "flex" : "none" }}>
        <button
          className="sovclose"
          id="searchClose"
          onClick={() => setSearchOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="sovbox">
          <h4>What are you craving today?</h4>
          <div className="sovinput">
            <input
              type="text"
              id="searchInput"
              placeholder="Search burgers, pizza, chicken..."
              autocomplete="off"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="sovcats">
            <div className="sovcat active" data-cat="all">
              <img src="./src/img/menu/1.jpg" alt="" />
              All Items
            </div>
            <div className="sovcat" data-cat="burgers">
              <img src="./src/img/menu/1.jpg" alt="" />
              Burgers
            </div>
            <div className="sovcat" data-cat="pizza">
              <img src="./src/img/menu/2.jpg" alt="" />
              Pizza
            </div>
            <div className="sovcat" data-cat="chicken">
              <img src="./src/img/menu/3.jpg" alt="" />
              Chicken
            </div>
            <div className="sovcat" data-cat="wraps">
              <img src="./src/img/menu/4.jpg" alt="" />
              Wraps
            </div>
            <div className="sovcat" data-cat="pasta">
              <img src="./src/img/menu/5.jpg" alt="" />
              Pasta
            </div>
            <div className="sovcat" data-cat="desserts">
              <img src="./src/img/menu/6.jpg" alt="" />
              Desserts
            </div>
          </div>
          <div className="sovtrend">
            <p>
              <i
                className="fas fa-fire me-1"
                style={{ color: "var(--secondary)" }}
              ></i>
              Trending Searches
            </p>{" "}
            <span className="ttag">Smash Burger</span>
            <span className="ttag">Nashville Chicken</span>
            <span className="ttag">Truffle Pizza</span>
            <span className="ttag">Lava Cake</span>
            <span className="ttag">Loaded Fries</span>
            <span className="ttag">Mango Shake</span>
          </div>
        </div>
      </div>
      <section id="hero">
        <div className="hs hs1"></div>
        <div className="hs hs2"></div>
        <div className="hbgtxt">FOOD</div>
        <div className="container">
          <div
            className="row align-items-center g-5"
            style={{ minHeight: "88vh" }}
          >
            {" "}
            <div className="col-lg-6">
              <div className="hbadge">
                <div className="hbi">
                  <i className="fas fa-star"></i>
                </div>
                <span>#1 Rated Fast Food Restaurant in New York</span>
              </div>
              <h1 className="htitle">
                Delicious <span className="hl">Fast Food</span>
                <br />
                for Every Moment
              </h1>
              <p className="hdesc">
                Experience bold flavors crafted from premium ingredients. From
                crispy burgers to gourmet pizzas - every bite is an adventure
                worth savoring.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-2">
                <a href="#menu" className="btn-red">
                  <i className="fas fa-utensils"></i>Explore Menu
                </a>
                <a
                  href="https://www.youtube.com/watch?v=RXv_uIN6e-Y"
                  className="magnific_popup btn-play popup-youtube"
                >
                  <div className="pico">
                    <i className="fas fa-play"></i>
                  </div>
                  <span>Watch Our Story</span>
                </a>
              </div>
              <div className="hstats d-flex gap-3 flex-wrap mt-4">
                <div className="hstat">
                  <span className="snum">
                    850<em>+</em>
                  </span>
                  <small>Happy Customers</small>
                </div>
                <div className="sdiv"></div>
                <div className="hstat">
                  <span className="snum">
                    120<em>+</em>
                  </span>
                  <small>Menu Items</small>
                </div>
                <div className="sdiv"></div>
                <div className="hstat">
                  <span className="snum">
                    15<em>+</em>
                  </span>
                  <small>Expert Chefs</small>
                </div>
                <div className="sdiv"></div>
                <div className="hstat">
                  <span className="snum">
                    12<em>yr</em>
                  </span>
                  <small>Experience</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ position: "relative", textAlign: "center" }}>
                {" "}
                <div className="hcircle">
                  <img src="./src/img/banner-img.jpg" alt="Burger" />
                </div>
                <div className="fcard fc1">
                  <div className="fcoi r">
                    <i className="fas fa-fire"></i>
                  </div>
                  <div>
                    <span className="fcnum">Hot Deal</span>
                    <span className="fcsm">30% off today</span>
                  </div>
                </div>
                <div className="fcard fc2">
                  <div className="fcoi y">
                    <i className="fas fa-star"></i>
                  </div>
                  <div>
                    <span className="fcnum">4.9/5</span>
                    <span className="fcsm">2k+ reviews</span>
                  </div>
                </div>
                <div className="fcard fc3">
                  <div className="fcoi g">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <span className="fcnum">20 min</span>
                    <span className="fcsm">Fast delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mqsec">
        <div className="mqtrack">
          <div className="mqitem">
            <i className="fas fa-circle"></i>Crispy Fried Chicken
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Gourmet Burgers
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Artisan Pizzas
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Fresh Wraps &amp; Rolls
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Loaded Fries
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Ice Cream Shakes
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Grilled Sandwiches
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Crispy Fried Chicken
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Gourmet Burgers
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Artisan Pizzas
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Fresh Wraps &amp; Rolls
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Loaded Fries
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Ice Cream Shakes
          </div>
          <div className="mqitem">
            <i className="fas fa-circle"></i>Grilled Sandwiches
          </div>
        </div>
      </div>
      <section id="category">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">What We Offer</span>
            <h2 className="stitle">
              Browse by <span>Category</span>
            </h2>
            <div className="sline"></div>
            <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>
              From sizzling burgers to exotic world cuisines - find your
              favourite in our menu
            </p>{" "}
          </div>
          <div className="row g-3 justify-content-center">
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <div className="catcard active" data-filter="all">
                <img className="catimg" src="./src/img/category/1.jpg" alt="" />
                <div className="catnm">All Items</div>
                <div className="catct">99 items</div>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="70"
            >
              <div className="catcard" data-filter="burgers">
                <img className="catimg" src="./src/img/category/2.jpg" alt="" />
                <div className="catnm">Burgers</div>
                <div className="catct">24 items</div>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="140"
            >
              <div className="catcard" data-filter="pizza">
                <img className="catimg" src="./src/img/category/3.jpg" alt="" />
                <div className="catnm">Pizza</div>
                <div className="catct">18 items</div>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="210"
            >
              <div className="catcard" data-filter="chicken">
                <img className="catimg" src="./src/img/category/4.jpg" alt="" />
                <div className="catnm">Fried Chicken</div>
                <div className="catct">15 items</div>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="280"
            >
              <div className="catcard" data-filter="wraps">
                <img className="catimg" src="./src/img/category/5.jpg" alt="" />
                <div className="catnm">Wraps</div>
                <div className="catct">12 items</div>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <div className="catcard" data-filter="desserts">
                <img className="catimg" src="./src/img/category/6.jpg" alt="" />
                <div className="catnm">Desserts</div>
                <div className="catct">20 items</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="astack">
                <div className="aexp">
                  <span className="anum">12+</span>
                  <small>
                    Years of
                    <br />
                    Excellence
                  </small>
                </div>
                <div className="amain">
                  <img src="./src/img/about1.jpg" alt="Restaurant" />
                </div>
                <div className="asm">
                  <img src="./src/img/about2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <span className="slbl">Our Story</span>
              <h2 className="stitle text-start">
                We Invite You to Visit
                <br />
                Our <span>Food Restaurant</span>
              </h2>
              <div className="sline lft"></div>
              <p className="sdesc mb-4">
                Founded in 2012, Sarab began as a small corner joint with a big
                dream - to serve food that brings people together. Today we're
                proud to serve thousands of happy customers every week with the
                same passion that started it all.
              </p>
              <div className="mb-4">
                <div className="fti">
                  <div className="ftico r">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div>
                    <h6>100% Fresh Ingredients</h6>
                    <p>
                      We source locally and sustainably. Every ingredient is
                      hand-picked daily for maximum freshness.
                    </p>
                  </div>
                </div>
                <div className="fti">
                  <div className="ftico y">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <h6>Award-Winning Recipes</h6>
                    <p>
                      Our signature recipes have won national culinary awards 5
                      years in a row.
                    </p>
                  </div>
                </div>
                <div className="fti">
                  <div className="ftico g">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <div>
                    <h6>Lightning-Fast Delivery</h6>
                    <p>
                      Order online and get hot, fresh food at your door in under
                      25 minutes, guaranteed.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#menu" className="btn-red">
                <i className="fas fa-book-open"></i>View Full Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="menu">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">What's Cooking</span>
            <h2 className="stitle">
              Our Delicious <span>Menu</span>
            </h2>
            <div className="sline"></div>
          </div>
          <div className="text-center mb-4" data-aos="fade-up">
            {[
              "all",
              "burgers",
              "pizza",
              "chicken",
              "wraps",
              "desserts",
              "pasta",
            ].map((cat) => (
              <button
                key={cat}
                className={`filtbtn ${activeCategory === cat ? "active" : ""}`}
                data-f={cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="row g-4" id="mgrid">
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "burgers" ? "d-none" : ""}`}
              data-c="burgers"
              data-aos="fade-up"
            >
              <div
                className="mcard"
                data-img="img/menu/1.jpg"
                data-title="classic Smash Burger"
                data-cat="Burgers"
                data-price="$14.99"
                data-old="$18.99"
                data-rating="4.9"
                data-reviews="128"
                data-cal="620"
                data-time="12"
                data-desc="Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun."
                data-tags="Spicy,Bestseller,Beef"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/1.jpg"
                    alt="Smash Burger"
                    onClick={openMenuPopup}
                  />
                  <div className="mbdg hot">
                    <i className="fas fa-star"></i> Hot
                  </div>
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Burgers</div>
                  <div className="mtit">classNameic Smash Burger</div>
                  <div className="mdesc">
                    Double smashed patty, cheddar, caramelized onions, pickles
                    &amp; special sauce
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">
                        $14.99 <small>$18.99</small>
                      </div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (128)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "pizza" ? "d-none" : ""}`}
              data-c="pizza"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div
                className="mcard"
                data-img="img/menu/2.jpg"
                data-title="Margherita Royale"
                data-cat="Pizza"
                data-price="$19.99"
                data-old="$24.99"
                data-rating="4.8"
                data-reviews="95"
                data-cal="480"
                data-time="18"
                data-desc="San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base."
                data-tags="Vegetarian,New,Italian"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/2.jpg"
                    alt="Pizza"
                    onClick={openMenuPopup}
                  />
                  <div className="mbdg new">
                    <i className="fas fa-star"></i> New
                  </div>
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Pizza</div>
                  <div className="mtit">Margherita Royale</div>
                  <div className="mdesc">
                    San Marzano tomatoes, buffalo mozzarella, basil &amp;
                    truffle oil on sourdough
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">
                        $19.99 <small>$24.99</small>
                      </div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (95)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "chicken" ? "d-none" : ""}`}
              data-c="chicken"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div
                className="mcard"
                data-img="img/menu/3.jpg"
                data-title="Nashville Hot Chicken"
                data-cat="Chicken"
                data-price="$12.99"
                data-old="$16.99"
                data-rating="5.0"
                data-reviews="210"
                data-cal="710"
                data-time="15"
                data-desc="Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend, served with honey drizzle and house pickles on a toasted brioche bun."
                data-tags="Spicy,Bestseller,Crispy"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/3.jpg"
                    alt="Chicken"
                    onClick={openMenuPopup}
                  />
                  <div className="mbdg">
                    <i className="fas fa-star"></i> Best Seller
                  </div>
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Chicken</div>
                  <div className="mtit">Nashville Hot Chicken</div>
                  <div className="mdesc">
                    Crispy fried chicken in fiery Nashville spice blend with
                    honey drizzle
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">
                        $12.99 <small>$16.99</small>
                      </div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (210)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "wraps" ? "d-none" : ""}`}
              data-c="wraps"
              data-aos="fade-up"
            >
              <div
                className="mcard"
                data-img="img/menu/4.jpg"
                data-title="Loaded Fajita Wrap"
                data-cat="Wraps"
                data-price="$10.99"
                data-old=""
                data-rating="4.5"
                data-reviews="74"
                data-cal="520"
                data-time="10"
                data-desc="Grilled chicken strips, saut�ed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar."
                data-tags="Grilled,Fresh,Mexican"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/4.jpg"
                    alt="Wrap"
                    onClick={openMenuPopup}
                  />
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Wraps</div>
                  <div className="mtit">Loaded Fajita Wrap</div>
                  <div className="mdesc">
                    Grilled chicken, peppers, sour cream &amp; guacamole in a
                    warm tortilla
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">$10.99</div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (74)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "desserts" ? "d-none" : ""}`}
              data-c="desserts"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div
                className="mcard"
                data-img="img/menu/5.jpg"
                data-title="Nutella Lava Cake"
                data-cat="Desserts"
                data-price="$8.99"
                data-old="$11.99"
                data-rating="4.9"
                data-reviews="56"
                data-cal="390"
                data-time="8"
                data-desc="Warm molten chocolate cake with a gooey Nutella center, served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries."
                data-tags="Sweet,New,Chocolate"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/5.jpg"
                    alt="Lava Cake"
                    onClick={openMenuPopup}
                  />
                  <div className="mbdg new">
                    <i className="fas fa-star"></i> New
                  </div>
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Desserts</div>
                  <div className="mtit">Nutella Lava Cake</div>
                  <div className="mdesc">
                    Molten chocolate cake with Nutella center, vanilla ice cream
                    &amp; caramel
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">
                        $8.99 <small>$11.99</small>
                      </div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (56)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-sm-6 col-lg-4 mwrap ${activeCategory !== "all" && activeCategory !== "pasta" ? "d-none" : ""}`}
              data-c="pasta"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div
                className="mcard"
                data-img="img/menu/6.jpg"
                data-title="Truffle Mushroom Pasta"
                data-cat="Pasta"
                data-price="$16.99"
                data-old=""
                data-rating="4.9"
                data-reviews="88"
                data-cal="560"
                data-time="20"
                data-desc="Al dente tagliatelle tossed with mixed wild mushrooms, freshly shaved black truffle, aged parmesan, fresh thyme and a touch of cream in garlic butter."
                data-tags="Vegetarian,Chef's Pick,Italian"
              >
                <div className="mimg">
                  <img
                    src="./src/img/menu/6.jpg"
                    alt="Pasta"
                    onClick={openMenuPopup}
                  />
                  <div className="mbdg hot">Chef's Pick</div>
                  <div className="mhrt">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="mbody">
                  <div className="mcat">Pasta</div>
                  <div className="mtit">Truffle Mushroom Pasta</div>
                  <div className="mdesc">
                    Al dente tagliatelle, wild mushrooms, black truffle,
                    parmesan &amp; thyme
                  </div>
                  <div className="mfoot">
                    <div>
                      <div className="mprice">$16.99</div>
                      <div className="mstars">
                        <i className="fas fa-star"></i>{" "}
                        <span style={{ color: "#bbb", fontSize: ".7rem" }}>
                          (88)
                        </span>
                      </div>
                    </div>
                    <button
                      className="madd"
                      title="View Details"
                      onClick={openMenuPopup}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#" className="btn-red">
              <i className="fas fa-th-large"></i>View Full Menu
            </a>
          </div>
        </div>
      </section>
      {selectedItem && (
        <div id="menuPop" className="open">
          <div className="mpbox">
            <button
              className="mpclose"
              id="mpClose"
              onClick={() => setSelectedItem(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="mpimg">
              <img
                id="mpImg"
                src={menuImages[selectedItem.img]}
                alt={selectedItem.title}
              />
            </div>
            <div className="mpbody">
              <div id="mpCat">{selectedItem.cat}</div>
              <div id="mpTitle">{selectedItem.title}</div>
              <div id="mpStars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <strong>{selectedItem.rating}</strong>
                <span>({selectedItem.reviews} reviews)</span>
              </div>
              <div id="mpDesc">{selectedItem.desc}</div>
              <div id="mpPrice">
                {selectedItem.price}
                {selectedItem.old && <small>{selectedItem.old}</small>}
              </div>
              <div className="mpmeta" id="mpMeta">
                <div className="mpm">
                  <div className="mpmv">{selectedItem.cal} kcal</div>
                  <div className="mpml">Calories</div>
                </div>

                <div className="mpm">
                  <div className="mpmv">{selectedItem.time} min</div>
                  <div className="mpml">Prep Time</div>
                </div>

                <div className="mpm">
                  <div className="mpmv">
                    <i className="fas fa-star"></i> {selectedItem.rating}/5
                  </div>
                  <div className="mpml">Rating</div>
                </div>
              </div>
              <div className="mpqty">
                <button
                  className="mpqbtn"
                  id="mpMinus"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="mpqnum" id="mpQnum">
                  {quantity}
                </span>
                <button
                  className="mpqbtn"
                  id="mpPlus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <span
                  style={{
                    fontSize: ".82rem",
                    color: "#aaa",
                    marginLeft: "9px",
                  }}
                >
                  portion
                </span>{" "}
              </div>
              <div className="mptags" id="mpTags">
                {selectedItem.tags.split(",").map((tag, index) => (
                  <span className="mptag" key={index}>
                    {tag.trim()}
                  </span>
                ))}
              </div>
              <button className="mpaddcart" id="mpAddCart">
                <i className="fas fa-shopping-cart"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <section id="special">
        <div className="spbg"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="sptag">
                <i className="fas fa-bolt me-1"></i>Limited Time Offer
              </div>
              <h2 className="sptitle">
                Get 30% Off
                <br />
                Our Signature
                <br />
                <span>Burger</span> Meal
              </h2>
              <p className="spdesc">
                Don't miss our weekend special - grab our award-winning
                signature burger combo with loaded fries and a premium shake at
                an unbeatable price.
              </p>
              <div className="cdwrap">
                <div className="cditem">
                  <span className="cdnum" id="cdH">
                    08
                  </span>
                  <span className="cdlbl">Hours</span>
                </div>
                <div className="cditem">
                  <span className="cdnum" id="cdM">
                    45
                  </span>
                  <span className="cdlbl">Minutes</span>
                </div>
                <div className="cditem">
                  <span className="cdnum" id="cdS">
                    30
                  </span>
                  <span className="cdlbl">Seconds</span>
                </div>
              </div>
              <a href="#menu" className="btn-red">
                <i className="fas fa-shopping-cart"></i>Grab the Deal
              </a>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="spimgw">
                <div className="spglow"></div>
                <div className="sppbdg">
                  <span className="old">$24.99</span>
                  <span className="np">$17.49</span>
                </div>
                <img src="./src/img/off-img.jpg" alt="Special Burger" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">Food Showcase</span>
            <h2 className="stitle">
              Let's See Our <span>Fast Food</span>
            </h2>
            <div className="sline"></div>
          </div>
          <div className="ggrid" data-aos="fade-up">
            <div
              className="gitem"
              data-gi="0"
              onClick={openGallery}
              data-gimg={gallery1}
              data-gtitle="Gourmet Burgers"
              data-gdesc="Our award-winning smash burgers, hand-crafted with 100% premium beef, aged cheddar and house-made sauces."
            >
              <img
                src="./src/img/portfolio/work1.jpg"
                alt="Burgers"
                onClick={openGallery}
              />
              <div className="gover">
                <span>
                  <i className="fas fa-expand-alt"></i> Gourmet Burgers
                </span>
              </div>
            </div>
            <div
              className="gitem"
              onClick={openGallery}
              data-gi="1"
              data-gimg={gallery2}
              data-gtitle="Wood-Fired Pizza"
              data-gdesc="Authentic Neapolitan-style pizzas fired at 900deg F in our wood-burning stone oven for the perfect char."
            >
              <img
                src="./src/img/portfolio/work2.jpg"
                alt="Pizza"
                onClick={openGallery}
              />
              <div className="gover">
                <span>
                  <i className="fas fa-expand-alt"></i> Wood-Fired Pizza
                </span>
              </div>
            </div>
            <div
              className="gitem"
              onClick={openGallery}
              data-gi="2"
              data-gimg={gallery3}
              data-gtitle="Crispy Fried Chicken"
              data-gdesc="Double-brined, hand-battered chicken fried to golden perfection using our 15-spice secret blend."
            >
              <img
                src="./src/img/portfolio/work3.jpg"
                alt="Chicken"
                onClick={openGallery}
              />
              <div className="gover">
                <span>
                  <i className="fas fa-expand-alt"></i> Crispy Fried Chicken
                </span>
              </div>
            </div>
            <div
              className="gitem"
              onClick={openGallery}
              data-gi="3"
              data-gimg={gallery4}
              data-gtitle="Sweet Desserts"
              data-gdesc="Handcrafted desserts - from molten lava cakes to artisan ice cream sundaes and seasonal pastries."
            >
              <img
                src="./src/img/portfolio/work4.jpg"
                alt="Desserts"
                onClick={openGallery}
              />
              <div className="gover">
                <span>
                  <i className="fas fa-expand-alt"></i> Sweet Desserts
                </span>
              </div>
            </div>
            <div
              className="gitem"
              onClick={openGallery}
              data-gi="4"
              data-gimg={gallery5}
              data-gtitle="Fresh Wraps &amp; Rolls"
              data-gdesc="Loaded fresh wraps packed with grilled proteins, crunchy vegetables and our house-made sauces."
            >
              <img
                src="./src/img/portfolio/work5.jpg"
                alt="Wraps"
                onClick={openGallery}
              />
              <div className="gover">
                <span>
                  <i className="fas fa-expand-alt"></i> Fresh Wraps &amp; Rolls
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="galPop" className={galOpen ? "open" : ""}>
        <div className="gpbox">
          <button
            className="gpclose"
            id="gpClose"
            onClick={() => setGalOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          {selectGallery && (
            <>
              <img
                id="gpImg"
                src={selectGallery.img}
                alt={selectGallery.title}
              />
              <div className="gpcap">
                <h5 id="gpTitle">{selectGallery.title}</h5>
                <p id="gpDesc">{selectGallery.desc}</p>
              </div>
            </>
          )}
          <div className="gpnav">
            <button id="gpPrev" onClick={prevGallery}>
              <i className="fas fa-chevron-left me-1"></i>Prev
            </button>
            <button id="gpNext" onClick={nextGallery}>
              Next <i className="fas fa-chevron-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
      <section id="history">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">Our Journey</span>
            <h2 className="stitle">
              A History of <span>Restaurant</span>
            </h2>
            <div className="sline"></div>
            <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>
              From humble beginnings to the city's most beloved restaurant -
              every chapter written with passion.
            </p>
          </div>
          <div className="timeline" data-aos="fade-up">
            <div className="tli">
              <div className="tl-left">
                <div className="tlyear">2012</div>
                <h5>Evolution of Restaurants</h5>
                <p>
                  Sarab opens its first 20-seat diner on Flavor Street. Within 3
                  months, lines stretch around the block every evening as word
                  of our food spreads.
                </p>
              </div>
              <div className="tl-center">
                <div className="tldot"></div>
              </div>
              <div className="tl-right">
                <div className="tlyear">2012</div>
                <h5>Evolution of Restaurants</h5>
                <p>
                  Sarab opens its first 20-seat diner on Flavor Street. Within 3
                  months, lines stretch around the block every evening as word
                  of our food spreads.
                </p>
              </div>
            </div>
            <div className="tli">
              <div className="tl-left">
                <div className="tlyear">2015</div>
                <h5>Fine Dining &amp; The Concept</h5>
                <p>
                  Expanding the vision - we introduced our signature tasting
                  menu and hired our first Michelin-trained chef, elevating our
                  craft to remarkable new heights.
                </p>
              </div>
              <div className="tl-center">
                <div className="tldot"></div>
              </div>
              <div className="tl-right">
                <div className="tlyear">2015</div>
                <h5>Fine Dining &amp; The Concept</h5>
                <p>
                  Expanding the vision - we introduced our signature tasting
                  menu and hired our first Michelin-trained chef, elevating our
                  craft to remarkable new heights.
                </p>
              </div>
            </div>
            <div className="tli">
              <div className="tl-left">
                <div className="tlyear">2019</div>
                <h5>Modern Fast Food Origins</h5>
                <p>
                  Launched our signature fast-food line, merging gourmet quality
                  with speed and convenience. Within 6 months we won 3
                  prestigious culinary awards nationally.
                </p>
              </div>
              <div className="tl-center">
                <div className="tldot"></div>
              </div>
              <div className="tl-right">
                <div className="tlyear">2019</div>
                <h5>Modern Fast Food Origins</h5>
                <p>
                  Launched our signature fast-food line, merging gourmet quality
                  with speed and convenience. Within 6 months we won 3
                  prestigious culinary awards nationally.
                </p>
              </div>
            </div>
            <div className="tli">
              <div className="tl-left">
                <div className="tlyear">2026</div>
                <h5>National Expansion</h5>
                <p>
                  Now operating in 8 cities across the US with an online
                  delivery platform handling 10,000+ orders weekly - and growing
                  every single day.
                </p>
              </div>
              <div className="tl-center">
                <div className="tldot"></div>
              </div>
              <div className="tl-right">
                <div className="tlyear">2026</div>
                <h5>National Expansion</h5>
                <p>
                  Now operating in 8 cities across the US with an online
                  delivery platform handling 10,000+ orders weekly - and growing
                  every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="chefs">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">The Culinary Team</span>
            <h2 className="stitle">
              Meet Our Expert <span>Chefs</span>
            </h2>
            <div className="sline"></div>
          </div>
          <div className="row g-4">
            <div
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="chcard">
                <div className="chimg">
                  <img src="./src/img/chefs/1.jpg" alt="" />
                  <div className="chsoc">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="chbody">
                  <div className="chnm">Alice Mortal</div>
                  <div className="chrole">Head Chef</div>
                  <div className="chexp">12 years experience</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div className="chcard">
                <div className="chimg">
                  <img src="./src/img/chefs/2.jpg" alt="" />
                  <div className="chsoc">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="chbody">
                  <div className="chnm">Michael Corn</div>
                  <div className="chrole">Grill Master</div>
                  <div className="chexp">8 years experience</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="chcard">
                <div className="chimg">
                  <img src="./src/img/chefs/3.jpg" alt="" />
                  <div className="chsoc">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="chbody">
                  <div className="chnm">Faz Chowdel</div>
                  <div className="chrole">Pastry Chef</div>
                  <div className="chexp">10 years experience</div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <div className="chcard">
                <div className="chimg">
                  <img src="./src/img/chefs/4.jpg" alt="" />
                  <div className="chsoc">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="chbody">
                  <div className="chnm">William Latnum</div>
                  <div className="chrole">Pizza Artisan</div>
                  <div className="chexp">9 years experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hours">
        <div className="hrsbg"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl" style={{ color: "#a5d6bc" }}>
              Opening Hours
            </span>
            <h2 className="stitle" style={{ color: "#fff" }}>
              We're Open{" "}
              <span style={{ color: "var(--secondary)" }}>For You</span>
            </h2>
            <div className="sline"></div>
          </div>
          <div className="row g-4 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="hrscard">
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Monday - Tuesday
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="hdot off"></div>
                    <span className="hrstime" style={{ color: "#ff6b6b" }}>
                      Closed
                    </span>
                  </div>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Wednesday - Thursday
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="hdot on"></div>
                    <span className="hrstime">09:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Friday
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="hdot on"></div>
                    <span className="hrstime">09:00 AM - 11:00 PM</span>
                  </div>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Saturday
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="hdot on"></div>
                    <span className="hrstime">10:00 AM - 11:30 PM</span>
                  </div>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Sunday
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="hdot on"></div>
                    <span className="hrstime">11:00 AM - 09:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
              <div className="hrscta">
                <i
                  className="fas fa-truck-fast fa-2x mb-3"
                  style={{ color: "rgba(255,255,255,.8)" }}
                ></i>
                <h4>Order Online</h4>
                <p>Get hot food delivered in 25 minutes</p>
                <a href="#menu" className="btnw">
                  Order Now ?
                </a>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-left">
              <div className="hrscard">
                <h5
                  style={{
                    color: "#fff",
                    marginBottom: "18px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: ".95rem",
                    fontWeight: 700,
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Find Us
                </h5>{" "}
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-location-dot me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Address
                  </span>
                  <span className="hrstime" style={{ fontSize: ".8rem" }}>
                    42 Flavor Street, NY
                  </span>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-phone me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Phone
                  </span>
                  <span className="hrstime" style={{ fontSize: ".8rem" }}>
                    +1 (800) 123-4567
                  </span>
                </div>
                <div className="hrsrow">
                  <span className="hrsday">
                    <i
                      className="fas fa-envelope me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    Email
                  </span>
                  <span className="hrstime" style={{ fontSize: ".8rem" }}>
                    info@sarabrestaurant.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">What People Say</span>
            <h2 className="stitle">
              Our Customers <span>Feedback</span>
            </h2>
            <div className="sline"></div>
          </div>
          <Swiper
            className="tesSwiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="tescard">
                <div className="tesq">"</div>
                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testxt">
                  Honestly the best burgers I've ever had. The smash burger is
                  incredible - perfectly crispy edges, juicy inside, and those
                  pickles! We come every Friday now.
                </p>
                <div className="tesauth">
                  <img src={testimonial1} alt="Monica Wilber" />
                  <div>
                    <div className="tesnm">Monica Wilber</div>
                    <div className="tesrl">Regular Customer</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tescard">
                <div className="tesq">"</div>
                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testxt">
                  Ordered delivery and the food arrived hot and fresh in 22
                  minutes. Portions are generous. Sarab has become my go-to
                  comfort food spot without question.
                </p>
                <div className="tesauth">
                  <img src={testimonial2} alt="Monica Wilber" />
                  <div>
                    <div className="tesnm">Cameron Fox</div>
                    <div className="tesrl">Food Blogger</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tescard">
                <div className="tesq">"</div>
                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testxt">
                  The truffle pasta blew my mind. I didn't expect that quality
                  from a fast food place. Great ambiance, super friendly staff.
                  Highly recommended!
                </p>
                <div className="tesauth">
                  <img src={testimonial3} alt="Monica Wilber" />
                  <div>
                    <div className="tesnm">Priya Sharma</div>
                    <div className="tesrl">Food Enthusiast</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tescard">
                <div className="tesq">"</div>
                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testxt">
                  Catered our office party of 50 people and everything was
                  flawless. Fresh, delicious, on time and well presented.
                  Nashville chicken was the absolute star!
                </p>
                <div className="tesauth">
                  <img src={testimonial4} alt="Monica Wilber" />
                  <div>
                    <div className="tesnm">David Park</div>
                    <div className="tesrl">Corporate Client</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="reservation">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">Book a Table</span>
            <h2 className="stitle">
              Make a <span>Reservation</span>
            </h2>
            <div className="sline"></div>
            <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>
              Reserve your table for a memorable dining experience. We recommend
              booking 24 hours in advance for weekend evenings.
            </p>
          </div>
          <div className="row g-4 align-items-start">
            <div className="col-lg-4" data-aos="fade-right">
              <div
                style={{
                  background: "var(--dark)",
                  borderRadius: "18px",
                  padding: "36px",
                }}
              >
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "1.3rem",
                    marginBottom: "8px",
                  }}
                >
                  Contact Info
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,.55)",
                    fontSize: ".85rem",
                    marginBottom: "26px",
                  }}
                >
                  We're happy to help you plan the perfect dining experience.
                </p>{" "}
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "11px",
                        background: "rgba(232,40,26,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#ccc",
                          fontSize: ".78rem",
                          textTransform: "uppercase",
                          letterSpacing: ".8px",
                        }}
                      >
                        Opening Hours
                      </strong>

                      <span style={{ color: "#fff", fontSize: ".87rem" }}>
                        Wed - Sun, 9 AM - 11 PM
                      </span>
                    </div>{" "}
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "11px",
                        background: "rgba(232,40,26,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-phone-alt"></i>
                    </div>

                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#ccc",
                          fontSize: ".78rem",
                          textTransform: "uppercase",
                          letterSpacing: ".8px",
                        }}
                      >
                        Call for Booking
                      </strong>

                      <span style={{ color: "#fff", fontSize: ".87rem" }}>
                        +1 (800) 123-4567
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "11px",
                        background: "rgba(232,40,26,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#ccc",
                          fontSize: ".78rem",
                          textTransform: "uppercase",
                          letterSpacing: ".8px",
                        }}
                      >
                        Group Dining
                      </strong>

                      <span style={{ color: "#fff", fontSize: ".87rem" }}>
                        Special menus for 10+ guests
                      </span>
                    </div>{" "}
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "11px",
                        background: "rgba(232,40,26,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#ccc",
                          fontSize: ".78rem",
                          textTransform: "uppercase",
                          letterSpacing: ".8px",
                        }}
                      >
                        Location
                      </strong>

                      <span style={{ color: "#fff", fontSize: ".87rem" }}>
                        42 Flavor Street, NY
                      </span>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-left">
              <div className="fcard">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="flbl">Full Name *</label>
                    <input
                      type="text"
                      className="fctrl"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Phone Number *</label>
                    <input
                      type="tel"
                      className="fctrl"
                      placeholder="+1 (800) 000-0000"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Email Address *</label>
                    <input
                      type="email"
                      className="fctrl"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Number of Guests *</label>
                    <select className="fctrl">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 - 4 People</option>
                      <option>5 - 6 People</option>
                      <option>7 -10 People</option>
                      <option>10+ People</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Date *</label>
                    <input type="date" className="fctrl" />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Time *</label>
                    <select className="fctrl">
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                      <option>10:00 PM</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="flbl">Special Requests</label>
                    <textarea
                      className="fctrl"
                      rows="3"
                      placeholder="Allergies, dietary needs, special occasions..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn-red w-100 justify-content-center"
                      id="resBtn"
                      onClick={() => setReservationSuccess(true)}
                    >
                      <i className="fas fa-calendar-check"></i>Confirm
                      Reservation
                    </button>
                  </div>
                </div>
                {reservationSuccess && (
                  <div className="sucmsg" id="resOk">
                    <i className="fas fa-check-circle"></i>
                    <p>Table reserved! We'll confirm via email shortly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">News &amp; Updates</span>
            <h2 className="stitle">
              Our Latest <span>Blog</span> Posts
            </h2>
            <div className="sline"></div>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="blcard">
                <div className="blimg">
                  <img src="./src/img/blog/1.jpg" alt="" />
                  <div className="bldatebdg">
                    <span className="bd">14</span>
                    <span className="bm">Mar</span>
                  </div>
                </div>
                <div className="blbody">
                  <div className="bltag">Food &amp; Health</div>
                  <div className="bltit">
                    <a href="#">
                      Healthy Fast Food: A Myth or Beautiful Reality
                    </a>
                  </div>
                  <div className="blmeta">
                    <span>
                      <i className="fas fa-user"></i>James Writer
                    </span>
                    <span>
                      <i className="fas fa-comment"></i>24 Comments
                    </span>
                  </div>
                  <a href="#" className="blmore">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div className="blcard">
                <div className="blimg">
                  <img src="./src/img/blog/2.jpg" alt="" />
                  <div className="bldatebdg">
                    <span className="bd">28</span>
                    <span className="bm">Feb</span>
                  </div>
                </div>
                <div className="blbody">
                  <div className="bltag">Food Science</div>
                  <div className="bltit">
                    <a href="#">
                      Is Fast Food Getting Healthier? Here's What We Found
                    </a>
                  </div>
                  <div className="blmeta">
                    <span>
                      <i className="fas fa-user"></i>Sarah Grain
                    </span>
                    <span>
                      <i className="fas fa-comment"></i>18 Comments
                    </span>
                  </div>
                  <a href="#" className="blmore">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="blcard">
                <div className="blimg">
                  <img src="./src/img/blog/3.jpg" alt="" />
                  <div className="bldatebdg">
                    <span className="bd">05</span>
                    <span className="bm">Jan</span>
                  </div>
                </div>
                <div className="blbody">
                  <div className="bltag">Recipes</div>
                  <div className="bltit">
                    <a href="#">
                      Innovative Hot Chickpeas Flake Crackin' Recipe at Home
                    </a>
                  </div>
                  <div className="blmeta">
                    <span>
                      <i className="fas fa-user"></i>Chef Marcus
                    </span>
                    <span>
                      <i className="fas fa-comment"></i>32 Comments
                    </span>
                  </div>
                  <a href="#" className="blmore">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter">
        <div className="nlbg"></div>
        <div className="container">
          <div className="nlw text-center" data-aos="zoom-in">
            <span className="slbl" style={{ color: "rgba(255,255,255,.7)" }}>
              Stay Connected
            </span>
            <h2 className="mb-3" style={{ color: "#fff" }}>
              Subscribe &amp; Get Exclusive{" "}
              <span style={{ color: "var(--secondary)" }}>Deals</span>
            </h2>
            <p className="mb-4" style={{ color: "rgba(255,255,255,.78)" }}>
              Get 15% off your first order plus early access to new menu items
            </p>{" "}
            <div className="nl-form-wrap">
              <input
                className="nlinput"
                type="email"
                id="nlEmail"
                placeholder="Enter your email address..."
              />
              <button className="nlbtn" id="nlBtn">
                <i className="fas fa-paper-plane me-1"></i>Subscribe
              </button>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,.45)",
                fontSize: ".76rem",
                marginTop: "11px",
              }}
            >
              <i className="fas fa-lock me-1"></i>
              No spam, unsubscribe anytime.
            </p>{" "}
          </div>
        </div>
      </section>
      <section id="contact-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">Get In Touch</span>
            <h2 className="stitle">
              Contact <span>Us</span>
            </h2>
            <div className="sline"></div>
            <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>
              Have a question, feedback, or want to plan a special event? We'd
              love to hear from you.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="ctdark">
                <h4>Let's Talk</h4>
                <p className="ctsub">
                  We typically respond within 2 hours during business hours.
                </p>
                <div className="ctitem">
                  <div className="cticon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ctinfo">
                    <strong>Address</strong>
                    <span>
                      42 Flavor Street, Manhattan,
                      <br />
                      New York, NY 10001
                    </span>
                  </div>
                </div>
                <div className="ctitem">
                  <div className="cticon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ctinfo">
                    <strong>Phone</strong>
                    <span>+1 (800) 123-4567</span>
                  </div>
                </div>
                <div className="ctitem">
                  <div className="cticon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ctinfo">
                    <strong>Email</strong>
                    <span>info@sarabrestaurant.com </span>
                  </div>
                </div>
                <div className="ctitem">
                  <div className="cticon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="ctinfo">
                    <strong>Working Hours</strong>
                    <span>Wed - Sun: 9 AM - 11 PM</span>
                  </div>
                </div>
                <div className="ctsocrow">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-left">
              <div className="fcard">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="flbl">Your Name *</label>
                    <input
                      type="text"
                      className="fctrl"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Email Address *</label>
                    <input
                      type="email"
                      className="fctrl"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Phone Number</label>
                    <input
                      type="tel"
                      className="fctrl"
                      placeholder="+1 (800) 000-0000"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Subject *</label>
                    <select className="fctrl">
                      <option>General Inquiry</option>
                      <option>Catering &amp; Events</option>
                      <option>Feedback</option>
                      <option>Partnership</option>
                      <option>Media &amp; Press</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="flbl">Message *</label>
                    <textarea
                      className="fctrl"
                      rows="5"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn-red" id="ctcBtn" onClick={()=>setContactSuccess(true)}>
                      <i className="fas fa-paper-plane"></i>Send Message
                    </button>
                  </div>
                </div>
                {contactSuccess &&(<div className="contact-sucmsg" id="ctcOk">
                  <i className="fas fa-check-circle"></i>
                  <p>Message sent! We'll reply within 2 hours.</p>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="fnm">
                Sar<span>ab</span>
              </div>
              <p className="fdesc">
                We bring the world's finest flavors together in a fast,
                friendly, and affordable experience. Every meal crafted with
                love.
              </p>
              <div className="fsoc">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="ftit">Quick Links</div>
              <ul className="flinks ps-0">
                <li>
                  <a href="#hero">
                    <i className="fas fa-chevron-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fas fa-chevron-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Our Menu
                  </a>
                </li>
                <li>
                  <a href="#reservation">
                    <i className="fas fa-chevron-right"></i>Reservation
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <i className="fas fa-chevron-right"></i>Blog
                  </a>
                </li>
                <li>
                  <a href="#contact-section">
                    <i className="fas fa-chevron-right"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="ftit">Our Menu</div>
              <ul className="flinks ps-0">
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Burgers
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Pizza
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Fried Chicken
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Wraps &amp; Rolls
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Pasta
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i className="fas fa-chevron-right"></i>Desserts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="ftit">Get In Touch</div>
              <div className="fci">
                <div className="fciico">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="fciinfo">
                  <strong>Address</strong>42 Flavor Street, Manhattan, NY 10001
                </div>
              </div>
              <div className="fci">
                <div className="fciico">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="fciinfo">
                  <strong>Phone</strong>+1 (800) 123-4567
                </div>
              </div>
              <div className="fci">
                <div className="fciico">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="fciinfo">
                  <strong>Email</strong> info@sarabrestaurant.com
                </div>
              </div>
              <div className="fci">
                <div className="fciico">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="fciinfo">
                  <strong>Hours</strong>Wed - Sun: 09 AM - 11 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fbot">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <p>
                &copy 2026 <span>Sarab Restaurant</span>. All Rights Reserved by
                <a
                  target="_blank"
                  className="mx-0 fw-bold text-success"
                  href="https://bestwpware.com/"
                >
                  Bestwpware
                </a>
                . Made with{" "}
                <span>
                  <i className="fas fa-heart"></i>
                </span>{" "}
                <br />
                Distributed by{" "}
                <a
                  target="_blank"
                  className="mx-0 fw-bold text-success"
                  href="https://themewagon.com"
                >
                  ThemeWagon
                </a>
              </p>{" "}
              <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cartfl">
        <i className="fas fa-shopping-cart"></i>
        <span>My Cart</span>
        <div className="ccount" id="cartCount">
          0
        </div>
      </div>
      <button
        id="btt"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
export default Restaurant;
