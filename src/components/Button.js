import createElement from '../lib/createElement';

export default ({ text, disabled, onclick }) => (
  createElement('button', {
    innerText: text,
    disabled,
    onclick,
  })
);
