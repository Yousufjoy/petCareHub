export const getAllUsers = async () => {
  const res = await fetch(
    "http://localhost:3000/admin-dashboard/customers/api/users"
  );
  const users = await res.json();
  return users;
};
