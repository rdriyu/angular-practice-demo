import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBranch2Component } from './git-branch2.component';

describe('GitBranch2Component', () => {
  let component: GitBranch2Component;
  let fixture: ComponentFixture<GitBranch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitBranch2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBranch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
