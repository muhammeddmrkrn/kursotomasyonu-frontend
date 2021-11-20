import { post, get } from "../../../api/HttpClient";

export async function dersProgramiEkle(dersProgramiData) {
  const url = "/api/dersprogrami";
  return post(url, dersProgramiData);
}

export async function dersProgramiList() {
  const url = "/api/dersprogrami";
  return get(url);
}