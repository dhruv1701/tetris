// import React,{Component} from 'react';
// import Square from './../../figures/square/square';
// import L from './../../figures/L/L';
// import Line from './../../figures/line/line';
// import T from './../../figures/T/T';
// import Z from './../../figures/Z/Z';
// import "./play.css";
// import ReactDOM from 'react-dom';

// const NUMBERING={
//     0:'square',
//     1:'line',
//     2:'T',
//     3:'L',
//     4:'Z'
// }

// var x,deg=90;

// class play extends Component{

//     
    
//     componentDidMount(){
//         var node = ReactDOM.findDOMNode(this);
//         var elem=node.getElementsByClassName("anim");
//         var that=this;
//         var pos=0;
//         var set = setInterval(function(){
//             if(pos>=560)
//             {
//                 pos=0;
//                 var left=elem[0].style.left;
//                 var top=elem[0].style.top;
//                 var tempMat=that.state.matrix;
//                 var currentPosition=that.marker(x,deg,top,left);
//                 console.log(currentPosition);
//                 tempMat[(currentPosition[0].top)/20][(currentPosition[0].left)/20]=x;
//                 clearInterval(set);
//                 console.log(tempMat);
//                 that.setState({matrix:tempMat});
//                 that.componentDidMount();
//             }
//             pos+=20;
//             elem[0].style.top=pos+"px";
//         },1000)
//     }

//     parseStr=(string)=>{
//         var newString="";
//         for(var i=0;i<string.length;i++)
//         {
//             if(string[i]==='p')
//                 break;
//             newString+=string[i];
//         }
//         return +newString;
//     }

//     marker=(shape,degree,bottop,botleft)=>{
//         var a,b,c,d;
//         bottop=this.parseStr(bottop);
//         botleft=this.parseStr(botleft);
//         if(shape===0)
//         {
//             a={
//                 top: bottop,
//                 left: botleft
//             }
//             b={
//                 top: bottop,
//                 left: botleft+20
//             }
//             c={
//                 top: bottop-20,
//                 left: botleft
//             }
//             d={
//                 top: bottop-20,
//                 left: botleft+20
//             }
//         }
//         if(shape===1)
//         {
//             if(degree===-90 || degree===90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop-20,
//                     left: botleft
//                 }
//                 c={
//                     top: bottop-40,
//                     left: botleft
//                 }
//                 d={
//                     top: bottop-60,
//                     left: botleft
//                 }
//             }
//             if(degree===-180 || degree===180)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop,
//                     left: botleft+20
//                 }
//                 c={
//                     top: bottop,
//                     left: botleft+40
//                 }
//                 d={
//                     top: bottop,
//                     left: botleft+60
//                 }
//             }
//         }
//         if(shape===2)
//         {
//             if(degree===90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop,
//                     left: botleft+20
//                 }
//                 c={
//                     top: bottop-20,
//                     left: botleft+20
//                 }
//                 d={
//                     top: bottop+20,
//                     left: botleft+20
//                 }
//             }
//             if(degree===-90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop-20,
//                     left: botleft
//                 }
//                 c={
//                     top: bottop-40,
//                     left: botleft
//                 }
//                 d={
//                     top: bottop-20,
//                     left: botleft+20
//                 }
//             }
//             if(degree===180 || degree===-180)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop,
//                     left: botleft+20
//                 }
//                 c={
//                     top: bottop-20,
//                     left: botleft+20
//                 }
//                 d={
//                     top: bottop,
//                     left: botleft+40
//                 }
//             }
//         }
//         if(shape===3)
//         {
//             if(degree===90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop-20,
//                     left: botleft
//                 }
//                 c={
//                     top: bottop-20,
//                     left: botleft+20
//                 }
//                 d={
//                     top: bottop-20,
//                     left: botleft+40
//                 }
//             }
//             if(degree===-90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop,
//                     left: botleft+20
//                 }
//                 c={
//                     top: bottop,
//                     left: botleft+40
//                 }
//                 d={
//                     top: bottop-20,
//                     left: botleft+40
//                 }
//             }
//             if(degree===180 || degree===-180)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop,
//                     left: botleft+20
//                 }
//                 c={
//                     top: bottop+20,
//                     left: botleft+20
//                 }
//                 d={
//                     top: bottop+40,
//                     left: botleft+20
//                 }
//             }        
//         }
//         if(shape===4)
//         {
//             if(degree===90 || degree===-90)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop-20,
//                     left: botleft
//                 }
//                 c={
//                     top: bottop-20,
//                     left: botleft-20
//                 }
//                 d={
//                     top: bottop,
//                     left: botleft+20
//                 }
//             }
//             if(degree===180 || degree===-180)
//             {
//                 a={
//                     top: bottop,
//                     left: botleft
//                 }
//                 b={
//                     top: bottop-20,
//                     left: botleft
//                 }
//                 c={
//                     top: bottop-20,
//                     left: botleft+20
//                 }
//                 d={
//                     top: bottop-40,
//                     left: botleft+20
//                 }
//             }
//         }
//         return [a,b,c,d];
//     }

//     randomization=()=>{
//         x=Math.floor(Math.random()*5);
//         var y;
//         if(x===0)
//         {
//             y=<Square/>
//         }
//         if(x===1)
//         {
//             y=<Line/>
//         }
//         if(x===2)
//         {
//             y=<T/>
//         }
//         if(x===3)
//         {
//             y=<L/>
//         }
//         if(x===4)
//         {
//             y=<Z/>
//         }

//         return(y);
//     }
//     render(){
        
//         var randomElement=this.randomization();    

//         return(
//             <div className="play">
//                 <div className="anim">
//                     {randomElement}
//                 </div>
//             </div>
//         );
//     }
// }

// export default play;



import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Square from '../../figures/square/square';
import Line from '../../figures/line/line';
import L from '../../figures/L/L';
import T from '../../figures/T/T';
import Z from '../../figures/Z/Z';
import './play.css';
import Colour from './colour/colour';
import Bottom from './../bottombar/bottom/bottom'
import Sidebar from '../sidebar/sidebar';

const NUMBERING={
    0: 'squaress',
    1: 'liness',
    2: 'Tss',
    3: 'Lss',
    4: 'Zss'
}

var x,deg=0;
class play extends Component{
    
    state={
        matrix:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
        score:0,
        linesCleared:0
    }

    componentDidMount(){
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var pos=0;
        var flag=0,flag1=0;
        var that=this;
        var set=setInterval(function(){
            var tempMat=that.state.matrix;
            var left=elem[0].style.left;
            var top=elem[0].style.top;
            var currentPosition=that.marker(x,deg,top,left);
            console.log(currentPosition);
            if(tempMat[(currentPosition[0].top+20)/20][(currentPosition[0].left)/20]!==undefined)
            flag=1;

            if(tempMat[(currentPosition[1].top+20)/20][(currentPosition[1].left)/20]!==undefined)
            flag=1;

            if(tempMat[(currentPosition[2].top+20)/20][(currentPosition[2].left)/20]!==undefined)
            flag=1;

            if(tempMat[(currentPosition[3].top+20)/20][(currentPosition[3].left)/20]!==undefined)
            flag=1;

            if(currentPosition[0].top==520)
            flag1=1;

            if(currentPosition[1].top==520)
            flag1=1;

            if(currentPosition[2].top==520)
            flag1=1;

            if(currentPosition[3].top==520)
            flag1=1;

            if(pos===520 || flag===1 || flag1===1)
            {
                pos=0;
                //console.log(currentPosition);
                tempMat[(currentPosition[0].top)/20][(currentPosition[0].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[1].top)/20][(currentPosition[1].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[2].top)/20][(currentPosition[2].left)/20]=NUMBERING[x];
                tempMat[(currentPosition[3].top)/20][(currentPosition[3].left)/20]=NUMBERING[x];
                console.log(tempMat);
                clearInterval(set);
                var scores=that.state.score;
                var linesClear=that.state.linesCleared;
                var cnt=0;
                for(var i=0;i<=26;i++)
                {
                    cnt=0;
                    for(var j=0;j<tempMat[i].length;j++)
                    {
                        if(tempMat[i][j]!==undefined)
                        {
                            cnt++;
                        }
                    }
                    console.log(cnt);
                    if(cnt==23)
                    {
                        tempMat.splice(i,1);
                        tempMat.unshift([]);
                        linesClear++;
                        scores+=10;
                    }
                }
                var random=Math.floor(Math.random()*20)*20;
                elem[0].style.left=random+"px";
                that.setState({matrix: tempMat,score:scores,linesCleared:linesClear});
                that.componentDidMount();
            }

            pos+=20;
            elem[0].style.top=pos+"px";
        },1000);
    }
    parseStr=(string)=>{
        var newString="";
        for(var i=0;i<string.length;i++)
        {
            if(string[i]==='p')
                break;
            newString+=string[i];
        }
        return +newString;
    }
    
    marker=(shape,degree,bottop,botleft)=>{
        var a,b,c,d;
        bottop=this.parseStr(bottop);
        botleft=this.parseStr(botleft);
        console.log(bottop,botleft);
        if(shape===0)
        {
            a={
                top: bottop,
                left: botleft
            }
            b={
                top: bottop,
                left: botleft+20
            }
            c={
                top: bottop+20,
                left: botleft
            }
            d={
                top: bottop+20,
                left: botleft+20
            }
           
        }
        if(shape===1)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+60
                }
            }
            if(degree===-90 || degree===90 || degree===270 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+60,
                    left: botleft
                }
            }
            if(degree===-180 || degree===180)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+60
                }
            }
        }
        if(shape===2)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop,
                    left: botleft+40
                }
            }
            if(degree===90 || degree===-270)
            {
                a={
                    top: bottop+20,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            if(degree===-90 || degree===270)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+20,
                    left: botleft+20
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft
                }
                d={
                    top: bottop+20,
                    left: botleft+40
                }
            }
           
        }
        if(shape===3)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+40,
                    left: botleft
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            if(degree===90 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop,
                    left: botleft+40
                }
                d={
                    top: bottop+20,
                    left: botleft
                }
            }
            if(degree===-90 || degree===270)
            {
                a={
                    top: bottop+20,
                    left: botleft
                }
                b={
                    top: bottop+20,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+40
                }
                d={
                    top: bottop,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft+20
                }
            }
            
        }
        if(shape===4)
        {
            if(degree===0 || degree===360 || degree===-360)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft
                }
            }
            if(degree===90 || degree===-90 || degree===270 || degree===-270)
            {
                a={
                    top: bottop,
                    left: botleft
                }
                b={
                    top: bottop,
                    left: botleft+20
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+20,
                    left: botleft+40
                }
            }
            if(degree===180 || degree===-180)
            {
                a={
                    top: bottop,
                    left: botleft+20
                }
                b={
                    top: bottop+20,
                    left: botleft
                }
                c={
                    top: bottop+20,
                    left: botleft+20
                }
                d={
                    top: bottop+40,
                    left: botleft
                }
            }
           
            
        }
        return [a,b,c,d];
    }

    randomization=()=>{
        x=Math.floor(Math.random()*5); 
       var y;
        if(x===0)
            y=<Square/>
        if(x===1)
            y=<Line/>
        if(x===2)
            y=<T/>
        if(x===3)
            y=<L/>
        if(x===4)
            y=<Z/>
        return y;
    }


    moveLeft=()=>{
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var left=elem[0].style.left;
        var top=elem[0].style.top;
        var tempPos=this.marker(x,deg,top,left);
        var flag=0,flag1=0;
        for(var i=0;i<=3;i++)
        {
            if(tempPos[i].left<20)
            {
                flag=1;
                break;
            }
        }
        if(flag!=1)
        {
            var newnumber=this.parseStr(left);
            var tempMat=this.state.matrix;
            
            if(tempMat[(tempPos[0].top+20)/20][(tempPos[0].left-20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[1].top+20)/20][(tempPos[1].left-20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[2].top+20)/20][(tempPos[2].left-20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[3].top+20)/20][(tempPos[3].left-20)/20]!==undefined)
            flag1=1;
            
            if(flag1==0)
            {
                newnumber-=20;
                elem[0].style.left=newnumber+"px";
            }
        }
    }

    moveRight=()=>{
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var left=elem[0].style.left;
        var top=elem[0].style.top;
        var tempPos=this.marker(x,deg,top,left);
        var flag=0,flag1=0;
        for(var i=0;i<=3;i++)
        {
            if(tempPos[i].left>=440)
            {
                flag=1;
                break;
            }
        }
        if(flag!=1)
        {
            var newnumber=this.parseStr(left);
            var tempMat=this.state.matrix;
            
            if(tempMat[(tempPos[0].top+20)/20][(tempPos[0].left+20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[1].top+20)/20][(tempPos[1].left+20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[2].top+20)/20][(tempPos[2].left+20)/20]!==undefined)
            flag1=1;

            if(tempMat[(tempPos[3].top+20)/20][(tempPos[3].left+20)/20]!==undefined)
            flag1=1;
            
            if(flag1==0)
            {
                newnumber+=20;
                elem[0].style.left=newnumber+"px";
            }
        }
    }

    rotateClock=()=>{
        var node=ReactDOM.findDOMNode(this);
        var elem=node.getElementsByClassName("anim");
        var rotation=deg+90;
        elem[0].style.transformOrigin="50% 50%";
        elem[0].style.transform='rotate('+rotation+'deg)';
        deg=(deg+90+360)%360;

    }
    render(){

        var randomElement=this.randomization();
        return(
            <div className="play">
                <div className="anim" style={{left:"0px",top:"20px"}}>
                    {randomElement}     
                </div>
                <Colour matrix={this.state.matrix} /> 
                <Sidebar linescleared={this.state.linesCleared} score={this.state.score}/>
                <Bottom moveleft={this.moveLeft} moveright={this.moveRight} rotateclock={this.rotateClock}/>
            </div>
        )
    }
}

export default play;