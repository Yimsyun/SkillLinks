import TabPanel from "@/components/molecules/TabPanel";
import Grid from "@mui/joy/Grid";

import { Typography } from "@mui/material";
const data = {
  standard: {
    price: 20000,
    description: <div>abcd</div>,
    options: {
      "앱 등록": true,
      기능추가: "0개",
    },
  },
  delux: {
    price: 50000,
    description: <div>description입니다.</div>,
    options: {
      "delux 앱등록": true,
      기능추가: "1개",
      "delux 혜택": "1개",
    },
  },
  premium: {
    price: 100000,
    description: <div>description입니다.</div>,
    options: {
      "Primium 앱등록": true,
      기능추가: "1개",
      "Primium 혜택": "1개",
      "Primium 유지보수": "1개",
    },
  },
};

// ['premium', 'delux', 'standard']
export default function PurchaseService({ purchase = data }) {
  const tabs = Object.keys(purchase).map((label) => {
    const { price, description, options } = purchase[label];
    return {
      label,
      panel: (
        <Grid>
          <h2>{price}원 (VAT 포함가)</h2>
          <p>{description}</p>
          <li>
            {Object.entries(options).map(([key, value]) => (
              <ol>
                <span>{key}</span>
                <span>{value}</span>
              </ol>
            ))}
          </li>
        </Grid>
      ),
    };
  });
  return <TabPanel tabs={tabs} />;
}
