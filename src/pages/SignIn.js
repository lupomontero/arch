import createElement from '../lib/createElement';
import SignInButton from '../components/SignInButton';

export default ({ store }) => createElement('div', {
  className: 'sign-in',
  children: [
    SignInButton({
      disabled: !!store.getState().loading,
      onclick: () => store.setState({ loading: true }),
    }),
  ],
});
