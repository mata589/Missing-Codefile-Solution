import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCodefileComponent } from './send-codefile.component';

describe('SendCodefileComponent', () => {
  let component: SendCodefileComponent;
  let fixture: ComponentFixture<SendCodefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendCodefileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCodefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
