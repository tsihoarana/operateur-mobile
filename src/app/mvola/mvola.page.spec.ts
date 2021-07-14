import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MvolaPage } from './mvola.page';

describe('MvolaPage', () => {
  let component: MvolaPage;
  let fixture: ComponentFixture<MvolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvolaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MvolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
