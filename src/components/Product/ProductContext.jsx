import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(null); // Estado para armazenar o erro

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                
                const data = await response.json();
                setProduct(data);
                setError(null);
            } catch (error) {
                setError("Erro ao chamar os produtos. API fora do ar!");
            }
        };
        
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
