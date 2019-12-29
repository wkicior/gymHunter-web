import { TestBed } from '@angular/core/testing';

import { SubscribedTrainingsService } from './subscribed-trainings.service';

describe('SubscribedTrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscribedTrainingsService = TestBed.get(SubscribedTrainingsService);
    expect(service).toBeTruthy();
  });
});
