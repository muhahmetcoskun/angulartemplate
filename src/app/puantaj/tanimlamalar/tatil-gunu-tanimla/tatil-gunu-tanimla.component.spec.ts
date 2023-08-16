import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatilGunuTanimlaComponent } from './tatil-gunu-tanimla.component';

describe('TatilGunuTanimlaComponent', () => {
  let component: TatilGunuTanimlaComponent;
  let fixture: ComponentFixture<TatilGunuTanimlaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatilGunuTanimlaComponent]
    });
    fixture = TestBed.createComponent(TatilGunuTanimlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
