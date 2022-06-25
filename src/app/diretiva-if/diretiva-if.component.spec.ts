import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaIFComponent } from './diretiva-if.component';

describe('DiretivaIFComponent', () => {
  let component: DiretivaIFComponent;
  let fixture: ComponentFixture<DiretivaIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaIFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
