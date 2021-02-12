import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { loadUser } from '../../actions/auth';
import { USER_LOADED } from '../../actions/types';
import mockLocalStorage from '../__mocks__/mockLocalStorage';

jest.mock('axios');
const mockStore = configureMockStore([thunk]);
window.localStorage = mockLocalStorage;

test('should create an action to load a user', () => {
  const user = {
    name: 'tom brady',
    email: 'theGOAT@gmail.com',
    avatar: '//www.tombradydrunkatparade.com',
    date: '2021-02-10',
  };

  axios.get.mockResolvedValue({
    data: [user],
  });

  mockStore.dispatch(loadUser());

  const expectedAction = {
    type: USER_LOADED,
    payload: user,
  };
  expect(store.getActions()).toEqual(expectedAction);
});
