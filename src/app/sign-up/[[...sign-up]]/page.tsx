import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto flex justify-center pt-28">
      <SignUp />
    </div>
  );
}
