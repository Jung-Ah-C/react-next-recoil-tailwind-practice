type Button = {
    type?: 'submit' | 'reset' | 'button';
    text?: string;
}

const Button: React.FC<Button> = ({ type, text }) => {
    return (
        <button type={type}>{text}</button>
    );
}

export default Button;