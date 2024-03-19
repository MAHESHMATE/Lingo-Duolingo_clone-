import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dj96xNVSxeUz9EtGim4xPY4uJc"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
