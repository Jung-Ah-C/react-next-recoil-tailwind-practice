
type Input = {
    placeholder: string;
    onChange: React.ChangeEvent<HTMLInputElement> | any;
    value: string;
}

const Input: React.FC<Input> = ({placeholder, onChange, value}) => {
    return (
        <input type="text" placeholder={placeholder} value={value} onChange={onChange}></input>
    );
}

export default Input;