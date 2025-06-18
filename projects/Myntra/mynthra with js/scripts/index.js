let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItem");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  diplsyBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItem", JSON.stringify(bagItems));
  diplsyBagIcon();
}

function diplsyBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = "visible";
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += ` 
            <div class="item-container">
                <img src="${item.image}" alt="item img">
                <div class="rating">${item.rating.stars}⭐|${item.rating.count}</div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs${item.current_price}</span>
                    <span class="orignal-price">Rs${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>
`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
