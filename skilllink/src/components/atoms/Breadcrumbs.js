import { Link, useMatches } from "react-router-dom";

export default function Breadcrumbs() {
  const matches = useMatches(); 
   
  const matchesHavingCrumbs = matches.filter((match) =>
    Boolean(match.handle?.crumb)
  );
  
  console.log(matches);
  console.log("matchesHavingCrumbs", matchesHavingCrumbs);

  return (
    <ol>
      {matchesHavingCrumbs.map((match, index) => (
        <li key={index}>
          <Link to={match.pathname}>{match.handle.crumb(match)}</Link>
        </li>
      ))}
    </ol>
  );
}

// 1. 전체 카테고리에서 보여지는 값으로 Category.json 파일 수정하기
// 2. Breadcrumbs 컴포넌트에서 하드코딩된 값이 아닌 현재 카테고리의 label을 보여줄 것
// 3. Breadcrumbs에 mui 적용하기 (https://mui.com/material-ui/react-breadcrumbs/)
// 4. router 설정(react-router-dom) 코드 이해하기
