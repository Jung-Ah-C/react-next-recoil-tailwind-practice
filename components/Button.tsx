import { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({...props}) => {
    return (
        <button className="rounded-[4px] bg-[#87A1FF] hover:bg-[#577CFF] text-[#FFFFFF] text-[12px] w-[80px] h-[24px]" {...props}></button>
    );
}

export default Button;