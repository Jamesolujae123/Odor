const allProducts = [
  {
    image: "IMG-20240503-WA0001-removebg-preview.png",
    name: "Magnetic Spirit Of Joy",
    price: 250,
    discount: 600,
    rating: [true, true, true, false, false],
  },
  {
    image: "IMG-20240503-WA0002-removebg-preview.png",
    name: "Imagine the Stylish you",
    price: 400,
    discount: 530,
    rating: [true, true, true, true, false],
  },
  {
    image: "IMG-20240503-WA0003-removebg-preview.png",
    name: "Feel good feel fantastic",
    price: 250,
    discount: 400,
    rating: [true, true, true, true, false],
  },
  {
    image: "IMG-20240503-WA0005-removebg-preview.png",
    name: "Make your day happier",
    price: 250,
    discount: 350,
    rating: [true, true, true, true, true],
  },
];

// const productCont = document.querySelector(".all-products");

// function renderProducts() {
//   allProducts.forEach((product, index) => {
//     const productCard = `
//     <div class='Product'>
//     <div class='product-card'>
//     <img src=${product.image} width="120px" alt='' />
//     </div>

//           <div class='other-product'>
//           <p class="title">${product.name}</p>
//           <div class='theicon'>
//           <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
//           </div>
//           <p class='price'>$${product.price}</p>
//           <div><button class="buynow">Buy Now</button></div>
//     </div>
//           `;

//     productCont.innerHTML += productCard;
//   });

//   const Buynow = document.querySelectorAll(".buynow");

//   Buynow.addEventListener("mo", function () {
//     Buynow.classList.add("hover");
//   });

//   Buynow.addEventListener("mouseleave", () => {
//     Buynow.classList.remove("hover");
//   });
// }

// renderProducts();

const showRatings = (ratings, starCont) => {
  ratings.map((rating) => {
    const star = document.createElement("i");
    if (rating == true) {
      star.classList.add("fa-solid");
    } else {
      star.classList.add("fa-regular");
    }
    star.classList.add("fa-star");
    starCont.appendChild(star);
  });
};

const productCont = document.querySelector(".all-products");

allProducts.map((product) => {
  let productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCont.appendChild(productCard);

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.classList.add("product-img");
  productCard.appendChild(productImage);

  const productName = document.createElement("h4");
  productName.classList.add("product-name");
  productName.textContent = product.name;

  productCard.appendChild(productName);

  const productPrice = document.createElement("h4");
  productPrice.textContent = `$${product.price}`;
  productPrice.classList.add("price");
  productCard.appendChild(productPrice);

  const discountPrice = document.createElement("span");
  discountPrice.textContent = `$${product.discount}`;
  discountPrice.classList.add("discount");
  productCard.appendChild(discountPrice);

  const starCont = document.createElement("div");

  const buynow = document.createElement("button");
  buynow.textContent = "Buy now";
  buynow.classList.add("buy-btn");
  productCard.appendChild(buynow);

  const added = document.getElementById("clicked");

  buynow.addEventListener("click", () => {
    added.textContent = `Added to cart`;
    productCard.appendChild(added);
    setTimeout(() => {
      productCard.removeChild(added);
    }, 2000);
  });

  starCont.classList.add("stars");
  showRatings(product.rating, starCont);
  productCard.appendChild(starCont);
});

const pricetag = document.querySelector(".price-things");

const remove = document.querySelector(".remove-cart");
const add = document.querySelector(".add-cart");
let result = 0;

function cart(a) {
  result += a;
  if (result < 0){
    result = 0
  }

  if (result >= 15){
    result = 15
  }

  document.querySelector(".cart-input").innerHTML = result;
  let notification = document.querySelector(".notify");

  if (result >= 10) {
    notification.textContent = "This cart is full";
  } else if (result <= 0) {
    notification.textContent = "not enough item in the cart!";
  } else if (result > 0 && result <= 10) {
    notification.textContent = "";
  } else if (result >= 30 && result <= 0) {
    document.querySelector(".add-cart").preventDefault() &&
      document.querySelector("remove-cart").preventDefault();
  }
}

function dropdown() {
  var drop = document.getElementById("head-links");
  if (drop.className === "header-link") {
    drop.className += "responsive";
  } else {
    drop.className = "header-link";
  }
}
