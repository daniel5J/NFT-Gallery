import { SiweMessage } from "siwe";
import apiClient from "src/services/apiClient";
import { tUser } from "src/types/tUser";

export async function createUser(
  user: tUser,
  signature: string,
  message: SiweMessage
) {
  const res = await apiClient.post<tUser>(`/user`, {
    ...user,
    signature,
    message: JSON.stringify(message),
  });
  return res.data;
}
