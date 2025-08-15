import CreateProduct from "@/components/products/create";
import Link from "next/link";

export default function CreateProductPage() {
    return <div>
        <Link href="/products">Voltar</Link>
        <h1>Criar Produto</h1>
        <CreateProduct />
    </div>
}

