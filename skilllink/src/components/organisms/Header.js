import { useState } from "react";
import { styled } from "@mui/joy/styles";
import Grid from "@mui/joy/Grid";
import Input from "@mui/joy/Input";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CategoryMenu from "./CategoryMenu";
import Link from "@mui/material/Link";
import SpaceLayout from "@/components/templates/SpaceLayout";
export default function Header() {
  // const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <SpaceLayout>
        <Grid container spacing={2} sx={{ flexGrow: 1, padding: "50px 0" }}>
          <Grid xs={3}>
            <Link href="/">Logo</Link>
          </Grid>
          <Grid xs={5}>
            <Input
              // value={searchValue}
              // onChange={(e) => {
              //   if (searchValue.length > 2) return;
              //   setSearchValue(e.target.value);
              // }}
              endDecorator={<Search />}
              // onChange={(e) => {
              //   console.log(e.target.value);

              //   if (e.target.value.length > 3) {
              //     e.target.value = e.target.value.slice(0, 3);
              //   }
              // }}
            />
          </Grid>
          <Grid xs={4}>
            <Stack
              direction={{ xs: "row" }}
              spacing={{ xs: 1 }}
              justifyContent="flex-end"
            >
              <Button variant="text"> 등록</Button>
              <Button variant="text">로그인</Button>
              <Button variant="contained">무료 회원가입</Button>
            </Stack>
          </Grid>
          <Grid
            xs={2}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <CategoryMenu />
          </Grid>
          <Grid xs={5}>
            <Stack direction="row" spacing={2} justifyContent="space-around">
              <Link href="/category/design" underline="hover">
                스킬링크
              </Link>
              <Link href="#" underline="hover">
                {"엔터프라이즈"}
              </Link>
              <Link href="#" underline="hover">
                {"전자책 및 VOD"}
              </Link>
            </Stack>
          </Grid>
          <Grid
            xs={5}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link href="#" underline="hover">
              필요한 인재를 찾으세요
            </Link>
          </Grid>
        </Grid>
      </SpaceLayout>
    </header>
  );
}
