import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { PagInicialComponent } from './pag-inicial.component';

describe('PagInicialComponent', () => {
  let component: PagInicialComponent;
  let fixture: ComponentFixture<PagInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagInicialComponent, MatSlideToggle,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
