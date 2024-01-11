import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarousalComponent } from './movie-carousal.component';

describe('MovieCarousalComponent', () => {
  let component: MovieCarousalComponent;
  let fixture: ComponentFixture<MovieCarousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieCarousalComponent]
    });
    fixture = TestBed.createComponent(MovieCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
