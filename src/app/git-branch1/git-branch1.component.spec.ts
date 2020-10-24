import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBranch1Component } from './git-branch1.component';

describe('GitBranch1Component', () => {
  let component: GitBranch1Component;
  let fixture: ComponentFixture<GitBranch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitBranch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBranch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
