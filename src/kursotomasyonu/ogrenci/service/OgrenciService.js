import { post, get } from "../../../api/HttpClient";

export async function ogrenciEkle(ogrenciData) {
  const url = "/api/ogrenci";
  return post(url, ogrenciData);
}

export async function ogrenciList() {
  const url = "/api/ogrenci";
  return get(url);
}