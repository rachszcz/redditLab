import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RedditApiService } from './reddit-api.service';

describe('RedditApiService', () => {
  let service: RedditApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
