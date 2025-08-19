

export default function FormInput({ type, name, placeholder, required }: { type: string, name: string, placeholder: string, required: boolean }) {
    return <input className='bg-[#1B1919] rounded-md p-2 w-[360px] h-[35px] focus:outline-none' id={name} name={name} type={type} required={required} />
}