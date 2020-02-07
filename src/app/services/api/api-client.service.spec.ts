import {inject, TestBed} from "@angular/core/testing";

import {ApiClient} from "./api-client.service";

describe("ApiClient", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiClient]
    });
  });

  it("should be created", inject([ApiClient], (service: ApiClient) => {
    expect(service).toBeTruthy();
  }));
});
