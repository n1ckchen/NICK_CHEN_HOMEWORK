import { useState, useEffect } from "react";

// Item type definition
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const fetchCartItems = async (): Promise<CartItem[]> => {
  // Mock async API call to get cart items
  const items = await new Promise<CartItem[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Item 1", price: 20, quantity: 0 },
        { id: 2, name: "Item 2", price: 15, quantity: 0 },
        { id: 3, name: "Item 3", price: 30, quantity: 0 },
      ]);
    }, 1000);
  });
  return items;
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items when component mounts
  useEffect(() => {
    const loadCartItems = async () => {
      const items = await fetchCartItems();
      setCartItems(items);
    };

    loadCartItems();
  }, []);

  // Get total price based on item quantity and price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Increment the quantity of an item
  const incrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement the quantity of an item
  const decrementQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Mock checkout function
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total Price: ${getTotalPrice()}</h3>
        <button onClick={handleCheckout}>Checkout</button>
        <button>Empty Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
