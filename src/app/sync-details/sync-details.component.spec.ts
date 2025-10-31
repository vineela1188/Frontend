import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDetailsComponent } from './sync-details.component';

describe('SyncDetailsComponent', () => {
  let component: SyncDetailsComponent;
  let fixture: ComponentFixture<SyncDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyncDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
