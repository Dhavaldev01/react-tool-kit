import { Component } from "react";


class ClassBasedComponent extends Component {
    // state
    state = {
        showText : false,
        changeColor : false,
        count : 0 ,
        changeCountStyle : false
    };

    handleClick = () => {
        // this is not recomened becasue that mutatae a state and not a rerender the page
        // this.state.showText = !this.state.showText

        const {showText , changeColor} = this.state
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })
    }
    handleCount = () => {
        const {showText , changeColor , count} = this.state

        this.setState({
            ...this.state , 
            count : this.state.count + 1 
        })
    }


    //componentDidMount
    //componentDidUpadate
    //componentWillUnmount

    componentDidMount(){
        console.log("this is first time page load ")
        const {showText , changeColor} = this.state
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("Component updated");
        // console.log("Previous state:", prevState);
        // console.log("Current state:", this.state);

        if(
            prevState && 
            prevState.count !== this.state.count && 
            this.state.count === 10  
        ){
            this.setState({
                ...this.state,
                changeCountStyle : true,
            })
        }
      }

      componentWillUnmount(){
        console.log("component is getting unmounted")
      }

    render(){
        const {showText , changeColor , count , changeCountStyle} = this.state
        console.log(changeCountStyle);
        // console.log(this.state);
        return <div>
            {
                showText ? (<h3 style={{color : changeColor ? "red" : "black" }}>Class based Components </h3>) : null

            }
            
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick = {this.handleCount}>Increase the count Value</button>
            <h3 style={{color : changeCountStyle ? "blue" : "black" , fontSize : changeCountStyle ? "30px" : "12px"}}>Count is {count}</h3>
        </div>
    }
}

export default ClassBasedComponent