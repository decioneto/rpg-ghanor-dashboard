interface PasswordTipsProps {
  password: string;
}

export function PasswordTips({ password }: PasswordTipsProps) {
  const uppercasePattern = /(?=.*?[A-Z])/;
  const lowercasePattern = /(?=.*?[a-z])/;
  const numberPattern = /(?=.*?[0-9])/;
  const specialCharacterPattern = /(?=.*?[#?!@$%^&*-])/;

  return (
    <div className="text-yellow-900 bg-neutral-300 p-4 h-fit rounded text-[10px] w-auto">
      <h6>A senha deve conter:</h6>
      <ul className="text-neutral-500">
        <li className={`${password.length >= 8 ? 'text-status-green' : ''}`}>
          No mínimo 8 caracteres;
        </li>
        <li
          className={`${
            uppercasePattern.test(password) ? 'text-status-green' : ''
          }`}
        >
          Uma letra maíuscula;
        </li>
        <li
          className={`${
            lowercasePattern.test(password) ? 'text-status-green' : ''
          }`}
        >
          Uma letra minúscula;
        </li>
        <li
          className={`${
            specialCharacterPattern.test(password) ? 'text-status-green' : ''
          }`}
        >
          Um caractere especial;
        </li>
        <li
          className={`${
            numberPattern.test(password) ? 'text-status-green' : ''
          }`}
        >
          Um numeral;
        </li>
      </ul>
    </div>
  );
}
