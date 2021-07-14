import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimulerAppelPage } from './simuler-appel.page';

describe('SimulerAppelPage', () => {
  let component: SimulerAppelPage;
  let fixture: ComponentFixture<SimulerAppelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulerAppelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimulerAppelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
