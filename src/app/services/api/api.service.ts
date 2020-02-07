import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiClient} from "./api-client.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private static readonly API_PROTOCOL: string = "http";
  private static readonly API_HOST: string = "localhost";
  private static readonly API_PORT: number = 7878;
  private static readonly API_ENDPOINT: string = ApiService.API_PROTOCOL + "://" + ApiService.API_HOST + ":" + ApiService.API_PORT;

  constructor(private apiClient: ApiClient) {
  }

  // TODO: Type the responses.
  login(email: string, password: string): Observable<any> {
    const headers: object = {
      "Authorization": "Basic " + btoa(email + ":" + password)
    };

    return this.apiClient.get<any>(ApiService.API_ENDPOINT + "/login", headers);
  }

  // TODO: Type the responses.
  register(username: string, email: string, password: string): Observable<any> {
    const body: object = {
      username: username,
      email: email,
      password: password
    };

    return this.apiClient.post<any>(ApiService.API_ENDPOINT + "/register", body);
  }
}
