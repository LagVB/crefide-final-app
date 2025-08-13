import CreateProduct from "@/components/products/create";
import MyProducts from "@/components/products/myProducts";

export default function ProductsPage() {
    return <div>
        Meus Produtos
        <MyProducts />
        <CreateProduct />
    </div>
}