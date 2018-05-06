// @flow
import * as React from 'react';
import styles from './styles.css';

import type { CurrencyId } from '~/common/types/currency';
import type { Wallet } from '~/common/types/wallet';

type Props = {|
  availableCurrencyIds: CurrencyId[],
  sourceCurrencyId: CurrencyId,
  sourceCurrencyWallet: Wallet,
  targetCurrencyId: CurrencyId,
  targetCurrencyWallet: Wallet,
  exchangeAmount: number,
  exchangeRate: number,
  onChangeSourceCurrency(CurrencyId): void,
  onChangeTargetCurrency(CurrencyId): void,
  onChangeExchangeAmount(number): void,
|};

export class AppView extends React.Component<Props> {
  handleChangeSourceCurrency = (event: { target: { value: CurrencyId } }) => {
    this.props.onChangeSourceCurrency(event.target.value);
  };

  handleChangeTargetCurrency = (event: { target: { value: CurrencyId } }) => {
    this.props.onChangeTargetCurrency(event.target.value);
  };

  handleChangeExchangeAmount = (
    event: SyntheticInputEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    const cleanedValue = value.replace(/[^\d|\.]/g, '');

    this.props.onChangeExchangeAmount(parseFloat(cleanedValue) || 0);
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
  };

  render() {
    const {
      sourceCurrencyId,
      sourceCurrencyWallet,
      targetCurrencyId,
      targetCurrencyWallet,
    } = this.props;

    return (
      <form action="" className={styles.root} onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Foreign exchange</h1>
        <p>
          1 {sourceCurrencyId} = {this.props.exchangeRate} {targetCurrencyId}
        </p>

        <fieldset>
          <legend>From</legend>

          <div>
            <select
              value={sourceCurrencyId}
              onChange={this.handleChangeSourceCurrency}
            >
              {this.props.availableCurrencyIds.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={this.props.exchangeAmount}
              onChange={this.handleChangeExchangeAmount}
            />
          </div>
          <p>
            You have {sourceCurrencyWallet.balance}{' '}
            {sourceCurrencyWallet.currencyId}
          </p>
        </fieldset>

        <fieldset>
          <legend>To</legend>
          <div>
            <select
              value={targetCurrencyId}
              onChange={this.handleChangeTargetCurrency}
            >
              {this.props.availableCurrencyIds.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <input
              readOnly
              type="number"
              value={this.props.exchangeAmount * this.props.exchangeRate}
            />
          </div>

          <p>
            You have {targetCurrencyWallet.balance} {targetCurrencyId}
          </p>
        </fieldset>

        <button type="submit" disabled={sourceCurrencyId === targetCurrencyId}>
          Exchange
        </button>
      </form>
    );
  }
}
