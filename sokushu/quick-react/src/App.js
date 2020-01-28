import React from 'react';
import logo from './logo.svg';
import './App.css';

// 以前のバーションだとComponent classから継承（extends）してコンポーネントを作成。現在のバージョンでは functoin <component_name> でok. 
// つまり、import React, {Component} from 'react';の 個別メンバー Componentは不要。
// render method も必要ない。そのかわりdomをreturn。
// コンポーネント名はPascal形式でhtmlタグを区別するため。

// コンポーネントをeditすると、webpack-dev-server が更新を認識して、自動でリロード＆反映する。

function App() {
  return (
    <div className="App">
      <header className="App-header">
				{/*コメントはこうする。空要素は〜/>で終える*/}
        <img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Reactへようこそ！</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
