export function PasswordTips() {
  return (
    <div className="text-yellow-900 bg-neutral-300 p-4 h-fit rounded text-[10px] w-auto">
      <h6>A senha deve conter:</h6>
      <ul>
        <li>No mínimo 8 caracteres;</li>
        <li>Uma letra maíuscula;</li>
        <li>Uma letra minúscula;</li>
        <li>Um caractere especial;</li>
        <li>Um numeral;</li>
      </ul>
    </div>
  );
}
