interface InputLabelProps {
    htmlFor: string;
    text: string;
}

export function InputLabel({ htmlFor, text }: InputLabelProps) {
    return (
        <label htmlFor={htmlFor} className="text-yellow-100 text-xs">
            {text}
        </label>
    );
}
