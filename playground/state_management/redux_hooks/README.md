This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `yarn start`
- `yarn test`
- `yarn build`
- `yarn eject`

### Important stuffs

- `useCallback()`: “Every callback function should be memorized to prevent useless re-rendering of child components which use the callback function”
- usual functions are `re-created on every rendering of component`
- use case: `MyBigList` renders a list of items. Knowing the list could be big, probably a few hundreds of items. To preserve the list re-rendering, you wrap it into `React.memo`.

```javascript
import React from 'react';

function MyBigList({ items, handleClick }) {
  const map = (item, index) => (
    <div onClick={() => handleClick(index)}>{item}</div>;
  );
  return <div>{items.map(map)}</div>;
}

export const MyBigList = React.memo(MyBigList);
```

```javascript
import React, { useCallback } from "react";
import useSearch from "./fetch-items";

function MyParent({ term }) {
  const handleClick = useCallback(
    (item) => {
      console.log("You clicked ", item);
    },
    [term]
  );

  const items = useSearch(term);

  return <MyBigList items={items} handleClick={handleClick} />;
}
```

- `handleClick` callback is memorized by `useCallback()`. As long as `term` variable stays the same, `useCallback()` returns the same function object.
- [`Profile before optimizing` - ref](https://dmitripavlutin.com/dont-overuse-react-usecallback/)

### styled component

- `styled-component` のスタイリングと `Material-UI` のスタイリングの適用順序が逆になって、うまいことスタイルがあたらないこと場合がある: ルートコンポーネント付近に `Material-UI` の `StylesProvider` を配置し、`Material-UI` のスタイル順序を制御してやる。`injectionFirst` のオプションを与えることで、`styled components` がスタイルを上書きできる。

```javascript
import { StylesProvider } from "@material-ui/styles";
<StylesProvider injectFirst>
  <App />
</StylesProvider>;
```

- `Material-UI と styled components のテーマの共通化`

```javascript
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    main: #FFF
  },
});
```

```javascript
import React from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./Theme";

const App = (props) => {
  return (
    <>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <></>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
};

export default Layout;
```

```javascript
import styled from "styled-components";

// props.theme のなかにテーマが格納されている
const StyledDiv = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
`;
```

- TypeScript を利用している場合、theme の型が指定されていないためさらに設定が必要:

```javascript
// import original module declarations
import "styled-components"
import { Theme } from "@material-ui/core"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    //   追加でテーマを拡張する場合、この中に定義をかく。
    borderRadius: string
  }
}
```

- [ref](https://qiita.com/Ouvill/items/c6761c32d31ffb11e114#%E3%81%95%E3%82%89%E3%81%AB%E6%80%A0%E6%83%B0%E3%81%AB%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AA%E3%83%B3%E3%82%B0)
