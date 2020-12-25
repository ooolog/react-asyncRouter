import React,{PureComponent} from 'react';


class Text extends PureComponent{

    render(){
        console.log('Text render');
        return <div>Props:{this.props.data.a}</div>
    }
}


export default class PureIndex extends React.Component{

    state={
        data:{ a : 1 , b : 2 },
        name:'zhangsan'
    }
    handleAClick=()=>{
        const { data } = this.state
        data.a++
        this.setState({ data })
    }

    handleBClick=()=>{
        this.setState({
            ...this.state,
            name:'lisi'
        })
    }

    render(){
        console.log('PureIndex render');
        const { data } = this.state
        return <div>
            <button onClick={ this.handleAClick } >点击A</button>
            <Text data={{...data}} />
            <button onClick={ this.handleBClick } >点击B</button>
            <div>{this.state.name}</div>
        </div>
    }
}

