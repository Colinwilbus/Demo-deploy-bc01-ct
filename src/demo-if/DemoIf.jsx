import React, { Component } from 'react'

export default class DemoIf extends Component {
    width = 5 ;
    height = 3 ;

    hinhVuong = () => {
        return(
            <div>
                <h3>Đây là hình vuông!!!</h3>
            </div>
        )
    }
     hinhChuNhat = () => {
         return(
             <div>
                 <h3>Đây là hình chữ nhật!!!</h3>
             </div>
         )
     }
    
    render() {
        return (
            <div>
               {this.width === this.height? this.hinhVuong():this.hinhChuNhat()}
            </div>
        )
    }
}
