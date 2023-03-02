import { Eye, EyeOff } from 'react-feather';

interface ViewPasswordProps {
    handleVisible: () => void;
    isVisible: boolean;
}

export function ViewPassword(props: ViewPasswordProps) {
    return (
        <button
            className="absolute bottom-5 translate-y-1/2 right-4"
            onClick={props.handleVisible}
        >
            {props.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
    );
}
