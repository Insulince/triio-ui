import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiClient {
  private static readonly STANDARD_API_HEADERS: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private static buildOptions(rawHeaders: object = {}): object {
    let headers: HttpHeaders = new HttpHeaders();

    ApiClient.STANDARD_API_HEADERS.keys().forEach(
      (standardApiHeaderName: string): void => {
        headers = headers.append(standardApiHeaderName, ApiClient.STANDARD_API_HEADERS.get(standardApiHeaderName));
      }
    );
    Object.keys(rawHeaders).forEach(
      (rawHeaderName: string) => {
        headers = headers.append(rawHeaderName, rawHeaders[rawHeaderName]);
      }
    );

    return {headers: headers};
  }

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url: string, headers: object = {}): Observable<T> {
    return this.httpClient.get<T>(url, ApiClient.buildOptions(headers));
  }

  public post<T>(url: string, body: object = {}, headers: object = {}): Observable<T> {
    return this.httpClient.post<T>(url, body, ApiClient.buildOptions(headers));
  }

  public put<T>(url: string, body: object = {}, headers: object = {}): Observable<T> {
    return this.httpClient.put<T>(url, body, ApiClient.buildOptions(headers));
  }

  public delete<T>(url: string, headers: object = {}): Observable<T> {
    return this.httpClient.delete<T>(url, ApiClient.buildOptions(headers));
  }
}
