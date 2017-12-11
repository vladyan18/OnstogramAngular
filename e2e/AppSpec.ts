/**
 * Created by Владислав on 11.12.2017.
 */
import { LoginComponent }   from '../src/app/login.component';
import {ComponentFixture, inject, TestBed} from "@angular/core/testing";

describe("LoginController", function() {

  let component:LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  var $controller;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('Setting enabled to false disabled the submit button', () => {
    let res = this.component.testFunc(5, 10);
    expect(res == 15).toBeTruthy();
  });

});
