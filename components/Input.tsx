import { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<'input'>;

const Input: React.FC<InputProps> = ({className, ...props}) => {
    return (
        <input {...props} className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:[#577CFF] focus:[#577CFF] rounded-[4px] focus:ring-1" type="text"></input>
    );
}

export default Input;