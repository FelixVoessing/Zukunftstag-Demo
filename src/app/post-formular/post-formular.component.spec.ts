import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormularComponent } from './post-formular.component';

describe('PostFormularComponent', () => {
  let component: PostFormularComponent;
  let fixture: ComponentFixture<PostFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
