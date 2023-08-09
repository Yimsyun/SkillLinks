import * as React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import CategoryCard from "@/components/organisms/CategoryCard";
import Breadcrumbs from "@/components/atoms/Breadcrumbs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import category from "@/data/category";

export default function Category() {
  /*
  1) UseParams()란?
   - 라우터의 파라미터 정보를 가져와서 활용하기 위한 훅
  */
  const navigate = useNavigate();
  const { mainCategoryId } = useParams();
  const [list, setList] = React.useState("");
  const handlechange = (e) => {
    setList(e.target.value);
  };
  const [navigation] = category.filter(
    ({ categoryId }) => mainCategoryId === categoryId
  );
  console.log("navigation", navigation);

  return (
    <Grid container direction="row">
      <Grid xs={2}>
        <nav>
          <div className="css-1cp4chc e1ia2c8m1">
            <h1 className="css-1bmlbzf e1ia2c8m2">{navigation.label}</h1>
          </div>
          <a href="/event">
            <img
              alt="디자인 카테고리 포트폴리오 배너"
              src="/temp.PNG"
              width="214"
              height="75"
            ></img>
          </a>
          <div>
            {navigation.subCategory.map(({ label, category }) => (
              <List dense key={label}>
                <div style={{ fontWeight: 700 }}>{label}</div>
                {category.map(({ label, path }) => (
                  <ListItem key={label}>
                    <Link to={path}>
                      <ListItemText primary={label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            ))}
          </div>
        </nav>
      </Grid>
      <Grid xs={10}>
        <Grid container>
          {/* <Link href="#" underline="hover" color="#bdbdbd">
          홈
        </Link>
        {">"}
        <Link href="#" underline="hover" color="#bdbdbd">
          디자인
        </Link> */}
          <Breadcrumbs />
        </Grid>
        {/* controlled component(state) vs uncontrolled component(ref) */}
        {/* input, select, radio .. form */}
        <Grid container>
          <FormControl>
            <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
            <Select sx={"width:130px"} onChange={handlechange}>
              <MenuItem value={10}>로고등등</MenuItem>
              <MenuItem value={20}>인쇄</MenuItem>
              <MenuItem value={30}>패키지</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">서비스옵션</InputLabel>
            <Select sx={"width:130px"} value={list} onChange={handlechange}>
              <MenuItem value={10}>로고</MenuItem>
              <MenuItem value={20}>등등</MenuItem>
              <MenuItem value={30}>등등</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">전문가옵션</InputLabel>
            <Select sx={"width:130px"} value={list} onChange={handlechange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">전문가옵션</InputLabel>
            <Select sx={"width:130px"} value={list} onChange={handlechange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Prime"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="빠른 응답"
            />
          </FormControl>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start">
          {[...Array(8)].map((item, i) => (
            <Grid sx={{ margin: "10px" }} key={i}>
              <CategoryCard key={i} onClick={() => navigate("/service/123")} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
