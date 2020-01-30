import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MyTypes2 extends Component{
	
	//propTypesは、classコンポネントには、classの中に記述できる functionコンポネントはx
	static propTypes = {
		obj : PropTypes.shape({
			name: PropTypes.string,
			born: PropTypes.number,
		}),
	}
	
	render(){
		return (
		{/*二つ以上の要素を括るダミー要素*/}
			<React.Fragment>
				<p> >>渡されたpropsは以下の通りです.</p>
				<ul>
					<li>{this.props.obj.name}</li>
					<li>{this.props.obj.born}</li>
				</ul>
			</React.Fragment>
		)
	}
}


// Specifies the default values for props:
// 省略するときは　オブジェクト全部省略しないとだめで、要素の一つだけ省略してもdefault の値は反映されない。
MyTypes2.defaultProps = {
	obj : {	
		name: "Taro",
		born: 2000,
	},
	//children: PropTypes.element.isRequired //requires single child object
}

/*
MyTypes2.propTypes = {
	obj : PropTypes.shape({
		name: PropTypes.string,
		born: PropTypes.number,
	}),
}
*/