import { loadUser } from '../../actions/auth';
import { USER_LOADED } from '../../actions/types';

test('should create an action to load a user', () => {
  const user = {
    name: 'tom brady',
    email: 'theGOAT@gmail.com',
  };
  const expectedAction = {
    type: USER_LOADED,
    payload: user,
  };
  expectedAction(loadUser());
});
