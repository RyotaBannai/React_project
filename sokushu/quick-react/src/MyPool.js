import React, {Component} from 'react';

export default class MyPool extends Component{
	show(e){
		//イベントプーリング: イベント処理後はSyntheticEventはクリアされるため、非同期処理内で利用する時にはすでにクリアされている.
		// const t = e.type で退避させるか,e.persist();をはじめに呼び出しておく.
		console.log(e.type);
		setTimeout(()=>{
			console.log(e.type);
		}, 1000)
	}
	render(){
		return (
			<button type="button" onClick={this.show.bind(this)}>イベント情報</button>
		);
	}
}