import React,{Component} from 'react';
import Square from './../../figures/square/square';
import L from './../../figures/L/L';
import Line from './../../figures/line/line';
import T from './../../figures/T/T';
import Z from './../../figures/Z/Z';
import "./play.css";
import ReactDOM from 'react-dom';

class play extends Component{

    state={
        key:0
    }
    
    constructor(){
        super();
        this.setState={key:1}
    }

    componentDidUpdate(){
        var node = ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var pos=0;
        var set = setInterval(function(){
            pos+=20
            elem[0].style.top=pos+"px";
            if(pos>=550)
            {
                clearInterval(set);
                this.setState({key:0});
            }
        },1000)
    }

    randomization=()=>{
        var x=Math.floor(Math.random()*5);
        var y;
        if(x==0)
        {
            y=<Square/>
        }
        if(x==1)
        {
            y=<Line/>
        }
        if(x==2)
        {
            y=<T/>
        }
        if(x==3)
        {
            y=<L/>
        }
        if(x==4)
        {
            y=<Z/>
        }
        return(y);
    }
    render(){
        
        var randomElement=this.randomization();    

        return(
            <div className="play">
                <div className="anim">
                    {randomElement}
                </div>
            </div>
        );
    }
}

export default play;