type Props = {
    onChange: (value: string) => void;
    value: string;
    onFocus: () => void;
    onBlur: () => void;

}
export default function Input({onChange, value, onFocus, onBlur}: Props) {
    return (
        <input
            className='w-full rounded-2xl text-black px-3.5 outline-none'
            placeholder={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
        />
    )
}