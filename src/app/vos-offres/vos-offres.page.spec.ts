import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VosOffresPage } from './vos-offres.page';

describe('VosOffresPage', () => {
  let component: VosOffresPage;
  let fixture: ComponentFixture<VosOffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VosOffresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VosOffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
