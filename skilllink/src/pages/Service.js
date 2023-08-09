import { Grid } from "@mui/material";
import Breadcrumbs from "@/components/atoms/Breadcrumbs";
import Link from "@mui/material/Link";
import Rate from "@/components/molecules/Rate";
import TabPanel from "@/components/molecules/TabPanel";
import PurchaseService from "@/components/organisms/PurchaseService";

export default function Service() {
  return (
    <Grid container>
      <Grid xs={7} sx={{ background: "pink" }}>
        <Breadcrumbs />
        <img src="https://t1.daumcdn.net/cfile/tistory/9978BC445B72B57F07" />
        <Rate value={3.5} count={20} />
        <TabPanel
          tabs={[
            { label: "Item One", panel: <div>1번 패널</div> },
            { label: "Item Two", panel: <div>2번 패널</div> },
            { label: "Item Three", panel: <div>3번 패널</div> },
          ]}
        />
      </Grid>
      <Grid xs={5}>
        <Grid>공유하기 좋아요</Grid>
        <Grid>타이틀 제목</Grid>
        <Grid>
          <PurchaseService />
        </Grid>
      </Grid>
    </Grid>
  );
}
