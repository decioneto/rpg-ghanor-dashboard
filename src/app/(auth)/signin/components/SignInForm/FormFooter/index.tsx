import { Button } from '@/components/Button';
import { SwordIcon } from '@/CustomIcons/SwordIcon';
import Link from 'next/link';

export function FormFooter() {
  return (
    <div className="flex gap-4 ml-auto">
      <Link href="register" className="py-4 px-2 btn-tertiary text-xs">
        Criar conta
      </Link>
      <Button.Root styleType="SECONDARY">
        <Button.Icon icon={SwordIcon} />
        <Button.Text>Login</Button.Text>
      </Button.Root>
    </div>
  );
}
