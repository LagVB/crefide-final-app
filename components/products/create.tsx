'use client'

import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export default function CreateProduct() {

    const handleCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const name = formData.get('name')
        const description = formData.get('description')
        const price = formData.get('price')
        const points = formData.get('points')
        const product = { name, description, price, points };
        console.log(product);
        try {
            const response = await fetch('/api/createProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
            const data = await response.json();
            console.log(data.message);
            redirect('/myProducts');
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: "Erro ao criar produto" }, { status: 500 })
        }
    }

    return <form onSubmit={handleCreateProduct}>
        <label>Nome do Produto</label>
        <input id="name" type="text" name="name" placeholder="Nome do Produto" />
        <label>Descrição do Produto</label>
        <input id="description" type="text" name="description" placeholder="Descrição do Produto" />
        <label>Preço do Produto</label>
        <input id="price" type="text" name="price" placeholder="Preço do Produto" />
        <label>Pontos do Produto</label>
        <input id="points" type="text" name="points" placeholder="Pontos do Produto" />
        <button type="submit">Criar Produto</button>
    </form>
}