import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable1Page } from './learning-katakana-table1.page';

describe('LearningKatakanaTable1Page', () => {
  let component: LearningKatakanaTable1Page;
  let fixture: ComponentFixture<LearningKatakanaTable1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningKatakanaTable1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningKatakanaTable1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
