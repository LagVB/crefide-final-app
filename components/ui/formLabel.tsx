export default function FormLabel({ children, htmlFor }: { children: React.ReactNode, htmlFor: string }) {
    return <label className='text-[10px] text-[#969696]' htmlFor={htmlFor}>{children} <span className='text-red-500'>*</span></label>
}