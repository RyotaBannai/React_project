import React, {Component} from 'react';

//フォームからデータを入力して、そのデータをstateに反映.
//それから、そのstateの値をsonsoleへ叩き出す.

export default class MyForm extends Component{	
	
	constructor(props){
		super(props)
		
		this.state = {
			name: 'Ryota',
			email: '',
			//`value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
		};
		//予めバインド->eventObjectを読み取るため.
		this.handleChange = this.handleChange.bind(this);
		this.show = this.show.bind(this);
	}
	
	show(e){
		console.log(`name: ${this.state.name}`);
		console.log(`name: ${this.state.email}`);
	}
	
	handleChange(e){
		this.setState({
			//ちゃんとformにname propertyをつけておく.
      /*“computed property name” 
        https://ginpen.com/2017/12/07/computed-property-name/
        テンプレート記法も使える. 
        const obj = {
          [`id-${id}`]: { }, 
        };
        個々にイベントリスナーを設定する場合, keyをベタがきする.
      */
			[e.target.name]:e.target.value,
		});
    
    /*
      handleChangeName(e){
        this.setState({
          name: e.taget.value
        })
      }
    */
    
    //この段階でshowsしてみると、stateが反映されていない->
    //関数が終わった後に更新内容が反映される.
		//this.show();
	}
	
	render(){
		return (
		  <form>
				<div>
					<label htmlFor="name">名前:</label>
		{/*valueは、はじめはdefault値.*/}
					<input id="name" name="name" type="text" 
			onChange={this.handleChange}
			value={this.state.name} />
				</div>
				<div>
					<label htmlFor="email">メールアドレス:</label>
					<input id="email" name="email" type="text" 
			onChange={this.handleChange}
			value={this.state.email} />
				</div>
        <div>
          <button type="button" onClick={this.show}>送信</button>
        </div>
			</form>
		);
	}
}