import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningKatakanaMnemonicPage } from './learning-katakana-mnemonic.page';

describe('LearningKatakanaMnemonicPage', () => {
  let component: LearningKatakanaMnemonicPage;
  let fixture: ComponentFixture<LearningKatakanaMnemonicPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningKatakanaMnemonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningKatakanaMnemonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
