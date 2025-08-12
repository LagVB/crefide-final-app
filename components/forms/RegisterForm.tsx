export default function RegisterForm() {
    return <form>
        <label>Nome</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Senha</label>
        <input type="password" />
        <button type="submit">Cadastrar</button>
    </form>
}