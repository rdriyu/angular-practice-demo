import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBranch3Component } from './git-branch3.component';

describe('GitBranch3Component', () => {
  let component: GitBranch3Component;
  let fixture: ComponentFixture<GitBranch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitBranch3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBranch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
