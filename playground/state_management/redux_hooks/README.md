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

- 子コンポーネントに `dispatch` を渡す場合、`useCallback` を利用して、メモ化する: 親の再レンダリングによって子コンポーネントが不必要に再レンダリングされることを回避するため

```javascript
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch();
  const incrementCounter = useCallback(
    () => dispatch({ type: "increment-counter" }),
    [dispatch]
  );

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  );
};

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
));
```

- [ref](https://qiita.com/Ouvill/items/569384e5c8c7ce78f98e)

#### shallowEqual

- 下記の場合、data は毎回新しいオブジェクトになる。すなわち再描写がかかる。
  - これは `useSelector` の比較方法が `reference equality` だからである。なお、`connect` の比較方法は `shallow equality` である。
  - `reference equality` --- セレクタが返したオブジェクト「自体」のアドレスが同一であるか
  - `shallow equality` --- セレクタが返したオブジェクトの「1 階層目のキーの種類とその参照先アドレス」が同一であるか

```javascript
const data = useSelector(
  (state) => ({
    commentsLoading: state.comments.loading,
    commentsError: state.comments.error,
    comments: state.comments.commentsByIssue[issueId],
  })
  // shallowEqual, // 第 2 引数に shallowEqual を渡すことで比較方法を変更できる
);
```

- セレクタの最適化(`reselect` を使う場合)
  - `shallowEqual` を使ったとしても再描写がかかってしまう場合がある。例えば下記の `getVisibleTodos()`のうち`.filter()`された結果については、必ず新しい(`=参照の異なる`)配列として生成される
    このように state の一部をフィルタして抜き出すなどするときなどは、reselect を使って適宜メモ化すること
  - `reselect` を使うと`.filter()`した結果も`メモ化`され、同じ参照のオブジェクトとして取得できる
- [ref](https://note.yuuniworks.com/study/redux-toolkit.html#%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%BF%E3%81%AE%E6%9C%80%E9%81%A9%E5%8C%96-reselect-%E3%82%92%E4%BD%BF%E3%81%86%E5%A0%B4%E5%90%88)

```javascript
import { connect, useSelector } from 'react-redux'
+import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from 'features/todos/todosSlice'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from 'features/filters/filtersSlice'

-const getVisibleTodos = (todos, filter) => {
-  switch (filter) {
-    case VisibilityFilters.SHOW_ALL:
-      return todos
-    case VisibilityFilters.SHOW_COMPLETED:
-      return todos.filter(t => t.completed)
-    case VisibilityFilters.SHOW_ACTIVE:
-      return todos.filter(t => !t.completed)
-    default:
-      throw new Error('Unknown filter: ' + filter)
-  }
-}
+const selectTodos = state => state.todos
+const selectFilter = state => state.visibilityFilter
+const selectVisibleTodos = createSelector(
+  [selectTodos, selectFilter],
+  (todos, filter) => {
+    switch (filter) {
+      case VisibilityFilters.SHOW_ALL:
+        return todos
+      case VisibilityFilters.SHOW_COMPLETED:
+        return todos.filter(t => t.completed)
+      case VisibilityFilters.SHOW_ACTIVE:
+        return todos.filter(t => !t.completed)
+      default:
+        throw new Error('Unknown filter: ' + filter)
+    }
+  }
+)


const mapStateToProps = state => ({
- todos: getVisibleTodos(state.todos, state.visibilityFilter)
+ todos: selectVisibleTodos(state)
})

又はhookの場合、
+ const todos = useSelector(selectVisibleTodos)
```

#### HMR

- `HMR` が利用できる環境では`module.hot`が存在するので、これを使って再描写を行う
- 再描写の方法は`accept()`のコールバックに個別に記載する
- `create-react-app` ではデフォルトでは HMR ではなく`フルリロード`が行われる

```javascript
module.hot.accept(
  dependencies, // 監視するファイル
  callback // ファイルが変更されたときに何をするか
);
```

##### `Hot Module Replacement`

- `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, `without a full reload`. This can significantly speed up development in a few ways:
  - `Retain application state` which is lost during a full reload.
  - Save valuable development time by only updating what's changed.
  - Instantly update the browser when modifications are made to `CSS/JS` in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

### createSlice を使わないという選択

- createSlice を使う弊害
  - `createAsyncThunk()`を使わない場合 --- thunk を createSlice の外部かつ後段に書く必要があり、コードのまとまりとして不自然で見にくい
  - `createAsyncThunk()`を使う場合 --- thunk を slice よりも前で宣言する必要があることから、必然的に slice 内で作成した action creator にアクセスすることが出来ない
  - あまりないケースだが、slice 内で作成した action creator から、同一の slice 内で作成した他の action creator にアクセス出来ない
- 結論として、あえて createSlice を使わずに、下記のようにした方が汎用性が高く、シンプルではないか？

```javascript
const sliceName = 'issuesDisplay/';

export const syncActionCreator1 = createAction<number>(
  `${sliceName}syncActionCreator1`,
);
export const syncActionCreator2 = createAction<number>(
  `${sliceName}syncActionCreator2`,
);
export const asyncActionCreator1 = createAsyncThunk<number, string>(
  `${sliceName}asyncActionCreator1`,
  async (name, { dispatch }) => {
    dispatch(syncActionCreator1(100));
    dispatch(syncActionCreator2(200));
    return name.length;
  },
);
export const asyncActionCreator2 = createAsyncThunk<void, void>(
  `${sliceName}asyncActionCreator2`,
  async () => {},
);

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(syncActionCreator1, (state, action) => {})
    .addCase(syncActionCreator2, (state, action) => {})
    .addCase(asyncActionCreator1.fulfilled, (state, action) => {}),
    .addCase(asyncActionCreator2.fulfilled, (state, action) => {}),
);

export default reducer;
```

- Good Reference of Redux
  - [Yuuniworks Notes](https://note.yuuniworks.com/study/redux-toolkit.html)
  - [Redux Toolkit v1.3.0 を使ってみる](https://qiita.com/puku0x/items/4217ca9f98fad82bc998#slice)
  - [Redux Toolkit やっておいた方がいいこと](https://qiita.com/shikazuki/items/02fb27dc741cbff18811)
