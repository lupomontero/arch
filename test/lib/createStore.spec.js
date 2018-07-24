import createStore from '../../src/lib/createStore';

describe('createStore', () => {
  it('should create a store object', () => {
    const store = createStore();
    expect(typeof store.getState).toBe('function');
    expect(typeof store.setState).toBe('function');
    expect(typeof store.subscribe).toBe('function');
  });

  describe('store.getState', () => {
    it('should get the current state', () => {
      const store = createStore({ ok: true });
      expect(store.getState()).toEqual({ ok: true });
      store.setState({ ok: false });
      expect(store.getState()).toEqual({ ok: false });
    });
  });

  describe('store.setState', () => {
    it('should update the state and notify subscribers', () => {
      const store = createStore({ ok: true });
      store.setState({ ok: false });
      expect(store.getState()).toEqual({ ok: false });
      store.setState({ hello: true });
      expect(store.getState()).toEqual({ ok: false, hello: true });
      store.setState({ goodbye: true });
      expect(store.getState()).toEqual({
        ok: false,
        hello: true,
        goodbye: true,
      });
    });
  });

  describe('store.subscribe', () => {
    it('should add function as subscriber', () => {
      const store = createStore({ ok: true });
      const expectedState = [
        { ok: false },
        { ok: false, hello: true },
        { ok: false, hello: true, goodbye: true },
      ];
      const subscriber = jest.fn().mockImplementation(() => {
        expect(store.getState()).toEqual(expectedState.shift());
      });
      store.subscribe(subscriber);
      store.setState({ ok: false });
      store.setState({ hello: true });
      store.setState({ goodbye: true });
      expect(subscriber.mock.calls).toMatchSnapshot();
    });
  });
});
