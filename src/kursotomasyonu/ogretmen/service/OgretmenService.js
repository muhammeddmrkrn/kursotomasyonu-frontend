import { post, get } from "../../../api/HttpClient";

export async function ogretmenEkle(ogretmenData) {
  const url = "/api/ogretmen";
  return post(url, ogretmenData);
}

export async function ogretmenList() {
  const url = "/api/ogretmen";
  return get(url);
}