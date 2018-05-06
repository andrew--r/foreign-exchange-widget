// @flow
import * as React from 'react';
import cn from 'classnames';
import styles from './styles.css';

import type { DataState } from '~/common/types/common';
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
  ratesDataState: DataState,
  onChangeSourceCurrency(CurrencyId): void,
  onChangeTargetCurrency(CurrencyId): void,
  onChangeExchangeAmount(number): void,
  onRequestLoadExchangeRates(): void,
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

  renderExchangeRate = () => {
    let content;

    if (!window.isNaN(this.props.exchangeRate)) {
      content = `1 ${this.props.sourceCurrencyId} = ${
        this.props.exchangeRate
      } ${this.props.targetCurrencyId}`;
    } else if (this.props.ratesDataState === 'loading') {
      content = 'Loading exchange rate...';
    } else {
      content = (
        <React.Fragment>
          Failed to load exchange rates{' '}
          <button onClick={this.props.onRequestLoadExchangeRates}>
            Try again
          </button>
        </React.Fragment>
      );
    }

    return <p className={styles.annotation}>{content}</p>;
  };

  render() {
    const {
      sourceCurrencyId,
      sourceCurrencyWallet,
      targetCurrencyId,
      targetCurrencyWallet,
    } = this.props;
    const exchangeAmountExceedsWalletBalance =
      this.props.exchangeAmount > this.props.sourceCurrencyWallet.balance;

    return (
      <form action="" className={styles.root} onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Foreign exchange</h1>
        {this.renderExchangeRate()}

        <fieldset className={styles.fieldset}>
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
          <p
            className={cn({
              [styles.error]: exchangeAmountExceedsWalletBalance,
            })}
          >
            You have {sourceCurrencyWallet.balance}{' '}
            {sourceCurrencyWallet.currencyId}
          </p>
        </fieldset>

        <fieldset className={styles.fieldset}>
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

        <footer className={styles.footer}>
          <button
            type="submit"
            disabled={
              this.props.exchangeAmount === 0 ||
              sourceCurrencyId === targetCurrencyId ||
              exchangeAmountExceedsWalletBalance
            }
          >
            Exchange
          </button>
        </footer>
      </form>
    );
  }
}
