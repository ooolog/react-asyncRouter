import React,{PureComponent} from 'react';

export default class Index extends PureComponent{

    constructor(props){
        super();

        this.state={
            name:'A'
        }
    }

    componentDidMount(){
        // this.setState({name:'B'})
        // console.log(this.state.name);
        // this.setState({name:'C'})
        // console.log(this.state.name);

        setTimeout(()=>{
            this.setState({name:'timeOut-B'})
            console.log(this.state.name);
            this.setState({name:'timeOut-C'})
            console.log(this.state.name);
        })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }


    render(){
        console.log('>>',this.state.name)
        return <div>我是Index页面,name:{this.state.name}</div>
    }
}