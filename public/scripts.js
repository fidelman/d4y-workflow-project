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
  var cartTotalPrice = document.querySelector(".total")
  var cartTotalQty = document.querySelector(".total-qty")
  
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
  
  function addItem(event) {
    var product = productDetails.find(function (detail) {
      return detail.id === event.currentTarget.dataset.id
    })
  
    var addedProduct = cartDetails.find(function (item) {
      return item.id === product.id
    })
  
    if (addedProduct) {
      addedProduct.qty++
    } else {
      var cartItem = {
        name: product.name,
        price: product.price,
        imgSrc: product.imageUrl,
        id: product.id,
        qty: 1
      }
      cartDetails.push(cartItem)
    }
  
    renderCart()
    calculateCartItemsTotal()
  }
  
  function renderCart() {
    renderCart
    cartItemsElement.innerHTML = cartDetails
      .map(function (cartItem) {
        return `
          <div class="cart-item">
            <div class="cart-img">
              <img src="${cartItem.imgSrc}" alt="" />
            </div>
            <strong class="name">${cartItem.name}</strong>
            <span class="qty-change">
              <div>
                <button class="btn-qty btn-qty-sub" data-id="${cartItem.id
          }"><i class="fas fa-chevron-left"></i></button>
                <p class="qty">${cartItem.qty}</p>
                <button class="btn-qty btn-qty-add" data-id="${cartItem.id
          }"><i class="fas fa-chevron-right"></i></button>
              </div>
            </span>
            <p class="price">Kč ${cartItem.price * cartItem.qty}</p>
            <button class="cart-item-remove" data-id="${cartItem.id
          }"><i class="fas fa-trash"></i></button>
          </div>
        `
      })
      .join("")
    var removeButtonElements = document.querySelectorAll(".cart-item-remove")
    removeButtonElements.forEach(function (element) {
      element.addEventListener("click", removeItem)
    })
  
    var subButtonElements = document.querySelectorAll(".btn-qty-sub")
    subButtonElements.forEach(function (element) {
      element.addEventListener("click", qtySub)
    })
  
    var addButtonElements = document.querySelectorAll(".btn-qty-add")
    addButtonElements.forEach(function (element) {
      element.addEventListener("click", qtyAdd)
    })
  }
  
  function qtySub(event) {
    var cartItem = cartDetails.find(function (item) {
      return item.id === event.currentTarget.dataset.id
    })
  
    cartItem.qty--
  
    if (cartItem.qty === 0) {
      cartDetails = cartDetails.filter(function (item) {
        return item.id !== cartItem.id
      })
    }
  
    updateCart()
  }
  
  function qtyAdd(event) {
    var cartItem = cartDetails.find(function (item) {
      return item.id === event.currentTarget.dataset.id
    })
  
    cartItem.qty++
    updateCart()
  }
  
  function removeItem(event) {
    var product = productDetails.find(function (item) {
      return item.id === event.currentTarget.dataset.id
    })
  
    cartDetails.forEach((item, i) => {
      if (product.name === item.name) {
        cartDetails.splice(i, 1)
      }
    })
    updateCart()
  }
  
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
  
  function clearCart() {
    cartDetails.length = 0
    updateCart()
  }
  
  function updateCart() {
    renderCart()
    checkCartEmpty()
    calculateCartItemsTotal()
  }
  
  function calculateCartItemsTotal() {
    var totalPrice = cartDetails.reduce((totalCost, item) => {
      return totalCost + item.price * item.qty
    }, 0)
    var totalQty = cartDetails.reduce((total, item) => {
      return total + item.qty
    }, 0)
    cartTotalPrice.innerText = totalPrice
    cartTotalQty.innerText = totalQty
  }
  