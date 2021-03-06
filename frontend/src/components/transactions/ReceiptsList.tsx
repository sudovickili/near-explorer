import * as T from "../../libraries/explorer-wamp/transactions";

import ReceiptRow from "./ReceiptRow";

export interface Props {
  receipts: T.Receipt[];
}

export default ({ receipts }: Props) => (
  <>
    {receipts.map(receipt => (
      <ReceiptRow key={receipt.id} receipt={receipt} />
    ))}
  </>
);
