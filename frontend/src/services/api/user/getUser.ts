import apiClient from "src/services/apiClient";
import { tUser } from "src/types/tUser";

export async function getUser(address: string) {
  const res = await apiClient.get<tUser>(`/user/${address}`);
  return res.data;
}
