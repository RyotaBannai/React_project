import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

//decolator
/*
このconnect decolator はReact とRedux Store を接続する役割を持っており、引数にstate をprops と対応付ける関数と、dispatch をprops に対応付ける関数を指定することができます。
これらはstore から提供される関数を指定します。
//
このconnect デコレータはReact にRedux のstate に対してアクセスできるよう接続(値のマッピング)を行う役割を持っています。
*/
@connect(
  /*　@connectは
    1. state をprops と対応付ける関数と、
      (返り値としてstate のkey を指定することでconnect
       されたクラスのthis.props からstate の値を取得することができる.)
    2. dispatch をprops に対応付ける関数を指定することができる.
    (3. storeのdispatcherをprops経由で呼び出すことができる.)
    | つまり、
    V
    1. stateの値を、propsから(this.props.)から呼び出せるようになる.
    2. このstateにstoreで関連づけたreducer内の値を取得するための関数を
      　指定することができる. 
        -> this.props 経由でRedux で管理している値を
           コンポネント内で取得することができる. 
          (このconnect デコレータはReact に「Redux のstate」に対して
            アクセスできるよう接続(値のマッピング)を行う役割を持っている.)
  */
  //1. states -> props
  (store) => { 
  return {
    //2. these are states, but outside of class constructor
    user: store.userReducer.user, //dispatch
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets,
    tweetsFetching: store.tweetsReducer.fetching
    };
  }
  /*
    普通はstateはクラス内のconstructor内で, this.state={ハッシュ} で宣言して,
    その同コンポネント内で, this.state. で利用するのが基本.
  */
)
export default class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    //このfetchUser() 関数のことをAction Creator と呼ぶ.
  }
  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }
  render() {
    
    /*
      render (){}　内には様々な条件分岐を書くことができる. 
      -> つまり、stateやpropの値によって, 同じコンポネント内で,
         returnしたいDOMを臨機応変に変えることがきる.(見せたり隠したりすることがきる.)
    */
    const { user, tweets, tweetsFetching } = this.props;

    if (tweetsFetching === true) {
      return (<div>fetching...</div>);
    }
    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}
