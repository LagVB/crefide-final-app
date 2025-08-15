
import MyProducts from "@/components/products/myProducts";
import Link from "next/link";

export default function ProductsPage() {
    return <div>
        Meus Produtos
        <MyProducts />
        <Link href="/products/create">Criar Produto</Link>
    </div>
}