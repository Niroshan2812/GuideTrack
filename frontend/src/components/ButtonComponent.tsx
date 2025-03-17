import React from "react";


interface ButtonComponentProps {
    onclick: () => void;
    text: string;
    icon?:React.ReactNode; // icon as a optional prop
    iconClassName? :string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({onclick, text, icon, iconClassName})=>{
    return(
        <button 
            onClick={onclick}
            className="inline-flex items-center justify-center px-5 py-3 text-base 
                     font-medium text-center text-indigo-100 border
                     border-indigo-500 rounded-lg shadow-sm cursor-pointer
                     hover:text-white bg-gradient-to-br from-purple-500
                     via-indigo-500 to-indigo-500">
                        {icon && <span className={iconClassName}>{icon}</span> } 
                        {text}

                     </button>
    );
};

export default ButtonComponent;