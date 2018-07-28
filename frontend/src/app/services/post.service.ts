import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends RestService {
  constructor(http: HttpClient) {
    super('/api/posts', http);
   }
}
