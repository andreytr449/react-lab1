type Props = {
    onChange: (value: string) => void;
    value: string;
    onFocus?: () => void;
    onBlur?: () => void;

}
export default function Input({onChange, value}: Props, {...props}) {
    return (
        <input
            className='w-full rounded-2xl text-black px-3.5 outline-none'
            placeholder={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    )
}