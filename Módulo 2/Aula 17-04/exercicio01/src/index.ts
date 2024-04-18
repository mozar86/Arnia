export function findUserByEmail(email: string, database: Array<any>) {
  return database.find(item => item.email === email);
}

export function updateUser(userId: string, newData: any, database: Array<any>) {
  const existingUserIndex = database.findIndex(item => item.id === userId);

  if (existingUserIndex === -1) {
    return "User not found";
  }

  database[existingUserIndex] = { ...database[existingUserIndex], ...newData };
  return "User updated successfully";
}

export function deleteUser(userId: string, database: Array<any>) {
  const existingUserIndex = database.findIndex(item => item.id === userId);

  if (existingUserIndex === -1) {
    return "User not found";
  }

  database.splice(existingUserIndex, 1);
  return "User deleted successfully";
}