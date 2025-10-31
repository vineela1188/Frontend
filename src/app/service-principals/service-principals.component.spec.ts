import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePrincipalsComponent } from './service-principals.component';

describe('ServicePrincipalsComponent', () => {
  let component: ServicePrincipalsComponent;
  let fixture: ComponentFixture<ServicePrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePrincipalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
