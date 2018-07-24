import render from './lib/render';
import createStore from './lib/createStore';
import SignIn from './pages/SignIn';

const store = createStore({ loading: false });

const withStore = Component => props => Component({ ...props, store });

const doRender = () => render(
  withStore(SignIn),
  document.getElementById('root'),
);

store.subscribe(doRender);
doRender();
