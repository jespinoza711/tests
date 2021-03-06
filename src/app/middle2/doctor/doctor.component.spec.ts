
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';

import { HttpClientModule } from '@angular/common/http';


describe('DoctorComponent Middle 2', () => {

    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ DoctorComponent ],
            providers: [ DoctorService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( DoctorComponent );
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        expect( component ).toBeTruthy();
    });

    it('Should return doctor name', () => {
        const name = 'Francisco';
        const message = component.greetDoctor( name );
        expect( message ).toContain(name);
    });

});


