import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

export const HomeScreen = (props) => {
  const productList = useSelector((state) => state.productList); //useSelector เป็นการเข้าถึง store
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    //เหมือนต้องหุ่ม action
    dispatch(listProducts()); //ทำให้เข้าถึง reducers แล้วให้ despatch หุ่ม listProducts

    // const fetchData = async () => {
    //     const { data } = await Axios.get('/api/products')
    //     setProduct(data)
    // }
    // fetchData()

    return () => {};
  }, []);
  return (
    loading ? <div>Loading...</div>:
    error? <div>{error}</div> :
   
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            {/* ส่ง id ไปใน url */}
            <Link to={"/product/" + product._id}>
              <img className="product-image" src={product.img} alt="product" />
            </Link>

            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name} </Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
