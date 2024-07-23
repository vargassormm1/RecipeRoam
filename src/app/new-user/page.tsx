import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq, and } from "drizzle-orm";

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const userExists = await db
    .select()
    .from(users)
    .where(
      and(
        eq(users.clerkId, user.id),
        eq(users.email, user?.emailAddresses[0].emailAddress)
      )
    );

  if (!userExists.length) {
    await db.insert(users).values({
      clerkId: String(user.id),
      fname: String(user.firstName),
      lname: String(user.lastName),
      email: String(user.emailAddresses[0].emailAddress),
      imageUrl: String(user.imageUrl),
    });
  }

  redirect("/explore");
};

const NewUser = async () => {
  await createNewUser();
  return (
    <div className="container mx-auto flex justify-center p-24">...loading</div>
  );
};

export default NewUser;
