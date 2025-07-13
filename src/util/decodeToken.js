import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const decoded = jwtDecode(token); // ✅ updated usage
    return decoded;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
};
