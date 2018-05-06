// @flow
import * as React from 'react';
import styles from './styles.css';

type Props = {||};

export class App extends React.Component<Props> {
  handleSubmit = (event: Event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form action="" className={styles.root} onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Currency exchange</h1>
        <p>1 GBP = 1.34 EUR</p>

        <fieldset>
          <legend>From</legend>

          <div>
            <select value="GBP">
              {['GBP', 'EUR', 'USD'].map((currency) => (
                <option value={currency}>{currency}</option>
              ))}
            </select>
            <input type="text" />
          </div>
          <p>You have 150 GBP</p>
        </fieldset>

        <fieldset>
          <legend>To</legend>
          <div>
            <select value="USD">
              {['GBP', 'EUR', 'USD'].map((currency) => (
                <option value={currency}>{currency}</option>
              ))}
            </select>
            <input type="text" readOnly />
          </div>

          <p>You have 50 USD</p>
        </fieldset>

        <button type="submit">Exchange</button>
      </form>
    );
  }
}
