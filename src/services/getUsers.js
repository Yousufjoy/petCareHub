export const getAllUsers = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/admin-dashboard/customers/api/users`
  );
  const users = await res.json();
  return users;
};
