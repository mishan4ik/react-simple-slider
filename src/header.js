import React from "react"
import {Component} from "react"
import "./style.css";




export default class Header extends Component {

    constructor(props){
        super(props)
        this.state ={

            img: "block",
            img1:"none",
            img2: "none",
            img3: "none"

        }

        this.func = this.func.bind(this);
        this.func1 = this.func1.bind(this);
    }
    
    
    func = () => {

       if(this.state.img =="block" &&  this.state.img1 =="none" && this.state.img2 =="none" && this.state.img3 == "none"){

        this.state.img ="none";
        this.state.img1 ="block";
        this.state.img2 ="none";
        this.state.img3 = "none";

       }
       else if(this.state.img =="none" &&  this.state.img1 =="block" && this.state.img2 =="none" && this.state.img3 == "none"){

        this.state.img ="none";
        this.state.img1 ="none";
        this.state.img2 ="block";
        this.state.img3 = "none";

       }
       else if(this.state.img =="none" &&  this.state.img1 =="none" && this.state.img2 =="block" && this.state.img3 == "none"){

        this.state.img ="none";
        this.state.img1 ="none";
        this.state.img2 ="none";
        this.state.img3 = "block";

       }
       else if(this.state.img =="none" &&  this.state.img1 =="none" && this.state.img2 =="none" && this.state.img3 == "block"){

        this.state.img ="block";
        this.state.img1 ="none";
        this.state.img2 ="none";
        this.state.img3 = "none";

       }


        this.setState({

            img:this.state.img,
            img1:this.state.img1,
            img2:this.state.img2,
            img3:this.state.img3

        })

    }

    func1 =() => {

        if(this.state.img =="none" &&  this.state.img1 =="none" && this.state.img2 =="none" && this.state.img3 == "block"){

            this.state.img ="none";
            this.state.img1 ="none";
            this.state.img2 ="block";
            this.state.img3 = "none";
    
           }

           else if (this.state.img =="none" &&  this.state.img1 =="none" && this.state.img2 =="block" && this.state.img3 == "none"){

            this.state.img ="none";
            this.state.img1 ="block";
            this.state.img2 ="none";
            this.state.img3 = "none";

           }
           else if (this.state.img =="none" &&  this.state.img1 =="block" && this.state.img2 =="none" && this.state.img3 == "none"){

            this.state.img ="block";
            this.state.img1 ="none";
            this.state.img2 ="none";
            this.state.img3 = "none";

           }
           else if (this.state.img =="block" &&  this.state.img1 =="none" && this.state.img2 =="none" && this.state.img3 == "none"){

            this.state.img ="none";
            this.state.img1 ="none";
            this.state.img2 ="none";
            this.state.img3 = "block";

           }

        


        this.setState({

            img:this.state.img,
            img1:this.state.img1,
            img2:this.state.img2,
            img3:this.state.img3

        })
    }
    
    render(){

        return(

            <div>
                <div>
                <img style ={{display:this.state.img}} src="https://i.pinimg.com/564x/c3/5e/1f/c35e1f123907404e885ffebcdf468f1c.jpg" alt="" />
                <img style ={{display:this.state.img1}} src="https://i.pinimg.com/564x/40/8c/8f/408c8f54b438ce14a706626a959a10e8.jpg" alt="" />
                <img style ={{display:this.state.img2}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tDgbDDHlJiBUoJutxzjKb8P7xUcQOOxOyg&usqp=CAU" alt="" />
                <img style ={{display:this.state.img3}} src="https://w7.pngwing.com/pngs/329/838/png-transparent-homer-simpson-bart-simpson-maggie-simpson-marge-simpson-lisa-simpson-cartoon-characters-homer-simpson-homer-simpson-bart-simpson-maggie-simpson.png" alt="" />
                </div>
                <button onClick={this.func}>next</button>
                <button onClick={this.func1}>pref</button>
                   

            </div>

        )

    }

}