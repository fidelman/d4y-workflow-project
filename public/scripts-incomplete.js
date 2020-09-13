var productDetails = [
    {
      id: "airpods-pro",
      name: "Airpods Pro",
      price: 7290,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      heading: "Wireless Noise Cancelling Earphones",
    },
    {
      id: "apple-watch",
      name: "Apple Watch",
      price: 11690,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      heading: "You’ve never seen a watch like this",
    },
    {
      id: "macbook-pro",
      name: "MacBook pro",
      price: 38990,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      heading: "The best for the brightest",
    },
    {
      id: "iphone-11-pro",
      name: "iPhone 11 pro",
      price: 29990,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      heading: "Pro cameras. Pro display. Pro performance",
    },
    {
      id: "ipad-pro",
      name: "iPad Pro",
      price: 22990,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      heading: "Your next computer is not a computer",
    }
  ]
  var cartDetails = []
  
  var sideNavElement = document.querySelector(".side-nav")
  var sideNavCoverElement = document.querySelector(".side-nav-cover")
  var cartButtonElement = document.querySelector(".cart-button")
  var closeCartButtonElement = document.querySelector(".close-cart-button")
  var cartItemsElement = document.querySelector(".cart-items")
  var clearButtonElement = document.querySelector(".clear")
  var mainCart = document.querySelector(".main-cart")
  
  mainCart.innerHTML = productDetails
    .map(function (product) {
      return `
        <div class="card">
          <div class="top-bar">
            <i class="fab fa-apple"></i>
            <em class="stocks">In Stock</em>
          </div>
          <div class="img-container">
            <img class="product-img" src="${product.imageUrl}" alt="" />
          </div>
          <div class="details">
            <div class="name-fav">
              <strong class="product-name">${product.name}</strong>
              <button class="heart"><i class="fas fa-heart"></i></button>
            </div>
            <div class="wrapper">
              <h5>${product.heading}</h5>
            </div>
            <div class="purchase">
              <p class="product-price">Kč ${product.price}</p>
              <span class="btn-add">
                <div>
                  <button data-id="${product.id}" class="add-btn">Add <i class="fas fa-chevron-right"></i></button>
                </div>
              </span>
            </div>
          </div>
        </div>`
    })
    .join("")
  
  var addButtonElements = document.querySelectorAll(".add-btn")
  addButtonElements.forEach(function (element) {
    element.addEventListener("click", addItem)
  })
  
  sideNavCoverElement.addEventListener("click", toggleSideNav)
  cartButtonElement.addEventListener("click", toggleSideNav)
  closeCartButtonElement.addEventListener("click", toggleSideNav)
  clearButtonElement.addEventListener("click", clearCart)
  
  function toggleSideNav() {
    if (sideNavElement.classList.contains("show")) {
      sideNavElement.style.right = "-100%"
      sideNavCoverElement.style.display = "none"
      sideNavElement.classList.remove("show")
    } else {
      sideNavElement.style.right = "0"
      sideNavCoverElement.style.display = "block"
      sideNavElement.classList.add("show")
    }
  
    checkCartEmpty()
  }
  
  function checkCartEmpty() {
    if (cartDetails.length === 0) {
      cartItemsElement.innerHTML =
        `<span class="empty-cart">Looks Like You Haven't Added Any Product In The Cart</span>`
    }
  }
  
  
  function updateCart() {
    renderCartItems()
    checkCartEmpty()
    calculateCartItemsTotal()
  }
  
  function convertArrayIntoString(array) {
    return array.join("")
  }
  
  function addItem(event) {
    /**
     * TODO: Add an item
     * TIP: "data-id" attribute in HTML markup can help you
     * TIP: if an item already exists in "cartDetails", just increment quantity
     * 1. add an item into "cartDetails"
     * 2. Write renderCartItems function
     * 3. Write "calculateCartItemsTotal" function
     */
  
    renderCartItems()
    calculateCartItemsTotal()
  }
  
  var cartTotalPrice = document.querySelector(".total")
  var cartTotalQty = document.querySelector(".total-qty")
  function calculateCartItemsTotal() {
    /**
     * TODO:
     * 1. Calculate total price and insert the value to "cartTotalPrice"
     * 2. Calculate total quantity and insert the value to "cartTotalQty"
     */
  }
  
  function renderCartItems() {
    /**
     * TODO: render cart items from "cartDetails"
     * 1. Create a markup for all items from "cartDetails" and insert them into "cartItemsElement"
     * TIP: function "convertArrayIntoString" can help you
     * Markup:
     * <div class="cart-item">
        <div class="cart-img">
          <img src="TODO: Product Image URL" alt="" />
        </div>
        <strong class="name">TODO: Product name</strong>
        <span class="qty-change">
          <div>
            <button class="btn-qty btn-qty-sub" data-id="TODO: Product ID"><i class="fas fa-chevron-left"></i></button>
            <p class="qty">TODO: Product Quantity</p>
            <button class="btn-qty btn-qty-add" data-id="TODO: Product ID"><i class="fas fa-chevron-right"></i></button>
          </div>
        </span>
        <p class="price">Kč TODO: Sum Price (quantity * price)</p>
        <button class="cart-item-remove" data-id="TODO: Product ID"><i class="fas fa-trash"></i></button>
      </div>
     * 2. Add event listeners on click to all "cart-item-remove" buttons and use "removeItem" function
     * 3. Add event listeners on click to all "btn-qty-sub" buttons and use "qtySub" function
     * 4. Add event listeners on click to all "btn-qty-add" buttons and use "qtyAdd" function
     */
  }
  
  
  function qtySub(event) {
    /**
     * TODO: decrement a cart item quantity
     * TIP: "data-id" attribute in HTML markup can help you
     * TIP: do not forget to remove item when the quantity is 0
     */
  
    updateCart()
  }
  
  function qtyAdd(event) {
    /**
     * TODO: increment a cart item quantity
     * TIP: "data-id" attribute in HTML markup can help you
     */
  
    updateCart()
  }
  
  function removeItem(event) {
    /**
     * TODO: remove clicked element from "cartDetails"
     * TIP: "data-id" attribute in HTML markup can help you
     */
  
    updateCart()
  }
  
  
  function clearCart() {
    /**
     * 💰Bonus task
     * TODO:
     * 1. Remove all elements from "cartDetails"
     */
    updateCart()
  }