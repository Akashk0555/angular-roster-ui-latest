import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteSiteStaffsComponent } from './remote-site-staffs.component';

describe('RemoteSiteStaffsComponent', () => {
  let component: RemoteSiteStaffsComponent;
  let fixture: ComponentFixture<RemoteSiteStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoteSiteStaffsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteSiteStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
