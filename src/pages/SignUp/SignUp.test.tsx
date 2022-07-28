import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/slices/userSlice';
import { render } from '@/utils/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import SignUp from '@/pages/SignUp/SignUp';

describe('Страница регистрации', () => {
  test('должна корректно рендериться', () => {
    const mockStore = configureStore({
      reducer: {
        user: userReducer,
      },
    });
    const { getByText } = render(
      <Provider store={mockStore}>
        <Router>
          <SignUp />
        </Router>
      </Provider>
    );

    expect(getByText('Регистрация')).toBeInTheDocument();
  });
});
