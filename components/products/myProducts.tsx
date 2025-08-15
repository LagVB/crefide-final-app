'use client'

import { useEffect, useState } from "react"

export default function MyProducts() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/getMyProducts')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return <ul>
        {products ? products.map((product: any) => (
            <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </li>
        )) : <p>Nenhum produto encontrado</p>}
    </ul>
}



