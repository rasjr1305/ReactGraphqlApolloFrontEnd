import { useEffect, useState } from "react";
import CategorySelect from "../components/Select";
import { useCategory } from "../hooks/useProducts";
import EnhancedTable, { Data } from "../components/EnhancedTable";

function ProductsPage() {
  const [category, setCategory] = useState("Todas");
  const [rows, setRows] = useState([]);
  const { error, loading, data } = useCategory(category);

  useEffect(() => {
    if (data) {
      setRows(
        data.allProducts.map((product: Data) => {
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
          };
        })
      );
    }
  }, [data]);

  const handleSelectCategory = (category: string) => {
    setCategory(category);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro.</div>;

  return (
    <div>
      <CategorySelect handleSelectCategory={handleSelectCategory} />
      <EnhancedTable rows={rows} />
    </div>
  );
}

export default ProductsPage;
