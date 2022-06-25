import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaFORComponent } from './diretiva-for.component';

describe('DiretivaFORComponent', () => {
  let component: DiretivaFORComponent;
  let fixture: ComponentFixture<DiretivaFORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaFORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaFORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
