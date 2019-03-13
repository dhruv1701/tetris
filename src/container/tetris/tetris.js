import React,{Component} from 'react';
import Play from './../../component/UI/play/play';
import './tetris.css';

class tetris extends Component{
    state={
        score:0,
        linesRemoved:0,
        pause:false
    } 
    render(){

        return(
            <div>
                <Play/>
            </div>
        );    
    }
}

export default tetris;