import axios from "axios";
export class HttpClient {
  async get(url: string, options?: Object) {
    const { data } = await axios.get(url, options);
    return { data };
  }
}
