// Write solution code here to dynamically add the form fields 
let customerDetails = [];
let orderList = [];
let OrderIdCount = 0;
let orderItemCount = 0;

window.load = setOrderId();
function setOrderId(){
    document.getElementById('orderId').value = 0;
    console.log("Window reset, order id set to zero");
}

const order = document.getElementById('orderId').value;
const name = document.getElementById('customerNameId').value;


function saveOrder(){
    let categoryName = document.getElementById('categoryNameId').value;
    let itemName = document.getElementById('itemNameId').value;
    let price = document.getElementById('priceId').value;
    let quantity = document.getElementById('quantityId').value;
    let amount = document.getElementById('amountId').value;

    if(categoryName.length==0||itemName.length==0||price==0||quantity==0||amount==0){
        console.log("Enter a valid order");
        return false;
    }
    orderList.push({
                    'Category_Name' : categoryName,
                    'Item_Name' : itemName,
                    'Price' : price,
                    'Quantity' : quantity,
                    'Amount' : amount
    })

    //creating a order item card
    
    const newOrder = document.createElement("div");
    const divFromHTML = document.getElementById("addOrders");
    divFromHTML.append(newOrder);
    newOrder.classList.add('row');
    
    const newCategory = document.createElement('h6');
    newOrder.append(newCategory);
    newCategory.classList.add('col');
    newCategory.innerHTML = orderList[orderItemCount].Category_Name;

    const newItem = document.createElement('h6');
    newOrder.append(newItem);
    newItem.classList.add('col');
    newItem.innerHTML = orderList[orderItemCount].Item_Name;

    const newPrice = document.createElement('h6');
    newOrder.append(newPrice);
    newPrice.classList.add('col');
    newPrice.innerHTML = orderList[orderItemCount].Price;

    const newQuantity = document.createElement('h6');
    newOrder.append(newQuantity);
    newQuantity.classList.add('col');
    newQuantity.innerHTML = orderList[orderItemCount].Quantity;

    const newAmount = document.createElement('h6');
    newOrder.append(newAmount);
    newAmount.classList.add('col');
    newAmount.innerHTML = orderList[orderItemCount].Amount;

    orderItemCount = orderItemCount + 1;

    //reseting order inputs after add order
    document.getElementById('categoryNameId').value = '';
    document.getElementById('itemNameId').value = '';
    document.getElementById('priceId').value = '0';
    document.getElementById('quantityId').value = '0';
    document.getElementById('amountId').value = '0';
    

}

function getPrice(){
    const itemName = document.getElementById("itemNameId");
    
    if(itemName.value=='Coke'){document.getElementById("priceId").value="1.5";}
    else if(itemName.value=='Garlic Bread'){document.getElementById("priceId").value="2.8";}
    else if(itemName.value=='Mozzerella Sticks'){document.getElementById("priceId").value="5.5";}
    else if(itemName.value=='Medium Size Margherita Pizza'){document.getElementById("priceId").value="11";}
    else if(itemName.value=='Iced Tea'){document.getElementById("priceId").value="1.25";}
    else if(itemName.value=='Greek Wedge Salad'){document.getElementById("priceId").value="4.5";}
    else if(itemName.value=='Soft Drink'){document.getElementById("priceId").value="1.25";}
    else if(itemName.value=='Veg Family Meal'){document.getElementById("priceId").value="13.25";}
    else if(itemName.value=='Large Size Vegan Pepperoni Pizza'){document.getElementById("priceId").value="14.5";}
    else{document.getElementById("priceId").value="-1";}
}

function calculateAmount(){
    const price = document.getElementById("priceId").value;
    const quantity = document.getElementById("quantityId").value;
    const amount = price*quantity;
    document.getElementById("amountId").value=amount;
}

let totalAmount = 0;
function calculateTotal(){
    totalAmount = 0;
    for(let i=0;i<orderList.length;i++){
        totalAmount = parseFloat(totalAmount) + parseFloat(orderList[i].Amount);
    }
    document.getElementById('totalAmountId').value = totalAmount;
}

// Save the order details on clicking the submit button
function orderSubmitted(){
    const orderId = document.getElementById('orderId').value;
    const customerName = document.getElementById('customerNameId').value;
    const emailId = document.getElementById('emailId').value;
    const contactNumber = document.getElementById('contactNumberId').value;
    const orderDate = document.getElementById('dateId').value;
    const address = document.getElementById('addressId').value;

    if(orderId.length==0||customerName.length==0||emailId.length==0||contactNumber.length==0||address.length==0||orderList.length==0){
        console.log("Enter all customer details and atleast one order");
        return false;
    }

    customerDetails.push({
                    'Order Id' : orderId,
                    'Customer Name' : customerName,
                    'Email Id' : emailId,
                    'Contact Number' : contactNumber,
                    'Order Date' : orderDate,
                    'Address' : address,
                    'Order list' : orderList,
                    'Total_bill' : totalAmount
    })
    console.log(customerDetails);

    OrderIdCount = OrderIdCount + 1;
    document.getElementById('orderId').value = OrderIdCount;

    alert("Total amount to be paid: " + totalAmount);

    orderList = [];
    orderItemCount = 0;

    //removing the orders cards once order now is clicked
    e = document.getElementById('addOrders');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

    //reseting the customer details 
    
    document.getElementById('customerNameId').value='';
    document.getElementById('emailId').value='';
    document.getElementById('contactNumberId').value='';
    document.getElementById('dateId').value='';
    document.getElementById('addressId').value='';
    document.getElementById('totalAmountId').value='';
}