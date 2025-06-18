let bagItemObjects;

onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItem();
  displayBagSummary();
}
function loadBagItemObjects() {
  console.log(bagItems);

  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}
function displayBagItem() {
  let containerElement = document.querySelector(".bag-items-container");
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItem", JSON.stringify(bagItems));
  onLoad();
  diplsyBagIcon();
}

function generateHTML(item) {
  return `
<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>`;
}

function displayBagSummary() {
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  const convenienceFee = 99;
  bagItemObjects.forEach((bagItem) => {
    totalMRP += bagItem.original_price;

    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  finalPayment += totalMRP - totalDiscount + convenienceFee;

  let bagSummaryElement = document.querySelector(".bag-summary");
  bagSummaryElement.innerHTML = `
   <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItems.length} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${convenienceFee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}
