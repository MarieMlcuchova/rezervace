import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from './bookingSummary/bookingSummary';
import './bookingSummary/bookingSummary.css';

document.querySelector('#root').innerHTML = render(
  <BookingSummary />
);
