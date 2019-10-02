import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasukanComponent } from './masukan.component';

describe('MasukanComponent', () => {
  let component: MasukanComponent;
  let fixture: ComponentFixture<MasukanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasukanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
