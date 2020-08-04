import React, {Component} from 'react';

//フォームからデータを入力して、そのデータをstateに反映.
//それから、そのstateの値をconsoleへ叩き出す.

export default class MyForm extends Component{	
	
	constructor(props){
		super(props)
		
		this.state = {
			name: 'Ryota',
      sex: 'male',
			email: '',
      //fruit: '',
      os: ['Mac', 'Windows'],
      accept: true,
      languages: [],
			//`value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
		};
		//予めバインド->eventObjectを読み取るため.
		this.handleChange = this.handleChange.bind(this);
    this.handleChangeForMS = this.handleChangeForMS.bind(this);
    this.handleChangeForCB = this.handleChangeForCB.bind(this);
    this.handleChangeForMCB = this.handleChangeForMCB.bind(this);
    this.show = this.show.bind(this);
	}
	
	show(e){
		console.log(`name: ${this.state.name}`);
    console.log(`fruit: ${this.state.sex}`);
		console.log(`email: ${this.state.email}`);
    //console.log(`fruit: ${this.state.fruit}`);
    console.log(`os: ${this.state.os}`);
    console.log(`accept agreements: ${this.state.accept}`);
    console.log(`languages: ${this.state.languages}`);
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
  
  //Radio boxのstateは少し複雑. 
  handleChangeForMS(e){
    
    const data = [];
    const opts = e.target.options;
    
    for (let i=0; i<opts.length; i++){
      if(opts[i].selected){
        data.push(opts[i].value);
      }
    }
    this.setState({
      [e.target.name]:data
    });
  }

  handleChangeForCB(e){
    this.setState({
      [e.target.name]:e.target.checked
    });
  }
	
  handleChangeForMCB(e){
    
    //setStateする前の状態を格納.
    const ls = this.state.languages; 
    
    //新しくcheckされたバリューならchecked=trueなので追加.
    if(e.target.checked){
      ls.push(e.target.value);
    }
    //新しくuncheckedされたバリューならchecked=falseで、リストから消去.
    else {
      ls.splice(ls.indexOf(e.target.value),1);
    }
    this.setState({
      [e.target.name]:ls
    });
  }
  
	render(){
		return (
		  <form>
      {/* text */}
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
      {/* select
				<div>
					<label htmlFor="fruit">好きなフルーツ:</label>
					<select id="fruit" name="fruit" 
			 onChange={this.handleChange}
			value={this.state.fruit} >
           <option>Apple</option>
           <option>Orange</option>
           <option>Grape</option>
          </select>
				</div>
        */}
        
     {/* select multiple */}
			<div>
				<label htmlFor="os">OS:</label>
     <select id="os" name="os" value={this.state.os} 
     size="3" multiple={true}
		 onChange={this.handleChangeForMS} >
          <option>Mac</option>
          <option>Windows</option>
          <option>Linux</option>
         </select>
			</div>
     
     {/* radio button */}
		 <div>
       <fieldset>
         <legend> 性別:</legend>
         <label htmlFor="sex_male">Male:</label>
         <input id='sex_male' name='sex' type='radio' value='male' checked={this.state.sex === 'male'} onChange={this.handleChange} /><br />
         <label htmlFor="sex_female">Female:</label>
         <input id='sex_female' name='sex' type='radio' value='female' checked={this.state.sex === 'female'} onChange={this.handleChange} /><br />
         <label htmlFor="other">Ohter:</label>
         <input id='other' name='sex' type='radio' value='other' checked={this.state.sex === 'other'} onChange={this.handleChange} /><br />
      </fieldset>
     </div>
     
     {/*Check box*/}
     <div>
       <label htmlFor="accept">Accept Agreements:</label>
       {/*this.state.acceptでチェック状態を管理.*/}
       <input id='accept' type='checkbox' name='accept' checked={this.state.accept}
       onChange={this.handleChangeForCB} />
     </div>
     
     {/*Multiple check boxes*/}
     <div>
       <fieldset>
         <legend> 使用言語:</legend>
         <label htmlFor="PHP">PHP:</label>
         <input id='PHP' type='checkbox' name='languages' value='php'       checked={this.state.languages.includes('php')}
         onChange={this.handleChangeForMCB} />
         
         <label htmlFor="JavaScript">JavaScript:</label>
         <input id='JavaScript' type='checkbox' name='languages' value='javascript'       checked={this.state.languages.includes('javascript')}
         onChange={this.handleChangeForMCB} />
         
         <label htmlFor="Nodejs">Nodejs:</label>
         <input id='Nodejs' type='checkbox' name='languages' value='nodejs'       checked={this.state.languages.includes('nodejs')}
         onChange={this.handleChangeForMCB} />
       </fieldset>
     </div>
       
     {/*Show values*/}
       <div>
         <button type="button" onClick={this.show}>送信</button>
       </div>
			</form>
		);
	}
}