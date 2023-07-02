import { SignIn } from '@/components/Forms/SignIn';

export default function SignInPage() {
  return (
    <div className="border border-yellow-100 p-8 relative">
      <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-bottom-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-bottom-4" />
      <div className="after:block after:border after:absolute after:border-yellow-100 after:w-4 after:h-4 after:-left-4 after:-top-4 before:block before:border before:absolute before:border-yellow-100 before:w-4 before:h-4 before:-right-4 before:-top-4" />
      <SignIn />
    </div>
  );
}
