// @flow
import type { CurrencyId } from '~/common/types/currency';

export type Wallet = {|
  +currencyId: CurrencyId,
  +balance: number,
|};
