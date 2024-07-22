import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 min-h-24">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">RecipeRoam</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center">
          <SignedOut>
            <li>
              <Link href={"/sign-in"}>Signin</Link>
            </li>
            <li>
              <Link href={"/sign-up"}>Signup</Link>
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <Link href={"/explore"}>Explore</Link>
            </li>
            <li>
              <UserButton />
            </li>
          </SignedIn>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
