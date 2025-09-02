let orders = JSON.parse(localStorage.getItem("order")) || [];
let ordersDiv = document.getElementById("orders");

if (orders.length === 0) {
  ordersDiv.innerHTML = "<p>No orders found.</p>";
} else {
  orders.forEach((order, index) => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("order-card");

    wrapper.innerHTML = `
      <h2>Order #${index + 1}</h2>
      <p><b>Name:</b> ${order.Name}</p>
      <p><b>Phone:</b> ${order.phone}</p>
      <p><b>Address:</b> ${order.address}</p>

      <table>
        <thead>
          <tr>
            <th>Product Names</th>
          </tr>
        </thead>
        <tbody>
          ${order.Names.map(p => `<tr><td>${p}</td></tr>`).join("")}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Total Quantity</th>
            <th>Total Weight</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2"></td>
            <td>₹${order.price}</td>
          </tr>
        </tbody>
      </table>
    `;
    ordersDiv.appendChild(wrapper);
    console.log(order);
    
  });
}