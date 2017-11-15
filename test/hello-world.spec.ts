
import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('HelloWorld', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('hello-world')
      .inView('<hello-world first-name.bind="firstName"></hello-world>')
      .boundTo({ firstName: 'Bob' });
  });

  test('should render first name', done => {
    component.create(bootstrap).then(() => {
      console.warn('hey');
      const nameElement = document.querySelector('.firstName');
      expect(nameElement.innerHTML).toBe('Bob');
      done();
    }).catch(e => { console.log(e.toString()); });
  });

  afterEach(() => {
    component.dispose();
  });
});
