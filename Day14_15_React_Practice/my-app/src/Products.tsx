import { useEffect, useState } from "react";
/* import "./styles.css"; */

export default function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(null);
  const [limit, setLimit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products/search?q=phone");
      const result = await res.json();
      setProducts(result.products); // Array of products
      setTotal(result.total); // Total number of products
      setLimit(result.limit); // Limit on products per request
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Products Info</h1>
      <div>
        <p>Total Products: {total}</p>
        <p>Limit: {limit}</p>
      </div>
      <ul>
        {products &&
          products.map((product) => {
            const { id, title } = product;
            return (
              <li key={id}>
                <h2>{title}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

// import { useEffect, useState } from "react";
// /* import "./styles.css"; */

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://dummyjson.com/products/search?q=phone");
//       const result = await res.json();
//       /* console.log(result); */
//       setProducts(result.products);
//     };
//     fetchData();
//   }, []);

//   /* console.log(products); */

//   return (
//     <div className="App">
//       <h1>Products info</h1>
//       {products &&
//         products.map((product) => {
//           const { id, title } = product;
//           return (
//             <li key={id}>
//               <h2>{title}</h2>
//             </li>
//           );
//         })}
//     </div>
//   );
// }
