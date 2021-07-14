import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetPage } from './internet.page';

describe('InternetPage', () => {
  let component: InternetPage;
  let fixture: ComponentFixture<InternetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
