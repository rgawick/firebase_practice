let itemTextBox = document.getElementById("itemTextBox")
let storeSelect = document.getElementById("storeSelect")
let orderBtn = document.getElementById("orderBtn")
let container = document.getElementById("container")
let displayAllBtn = document.getElementById("displayAllBtn")
let ordersList = document.getElementById("ordersList")

const database = firebase.database()
const ordersRef = database.ref("orders")

let orders = []

function placeOrder(order) {

  let orderRef = ordersRef.push()
  orderRef.set(order)
//  let orderRef = database.ref("orders").push()
  database.ref(order.item).set(order)
}

function displayOrders(orders) {

  let liItems = orders.map(function(order) {
    return `<li>${order.store} - ${order.item}</li>`
  })

   ordersList.innerHTML = orders.join('')

}

orderBtn.addEventListener('click',function(){

    let store = storeSelect.value
    let item = itemTextBox.value

    let order = { store : store , item : item  }

    placeOrder(order)
})

displayAllBtn.addEventListener('click',function(){

    displayOrders(orders)
})
