import { Component } from "react";

import Header from "../Header";

import './index.css'

class Home extends Component{

    renderLeftSideBar=()=>{
        return <div className="mains">
            <div className="small-box">
                <img src="home.png" alt="img5" className="imgg" />
                <p>Dashboard</p>
            </div>
            <div className="small-box">
                <img src="burger.png"  alt="img6"  className="imgg" />
                <p>Orders</p>
            </div>
            <div className="small-box">
                <img src="products.png"  alt="img7"  className="imgg" />
                <p>Products</p>
            </div>
            <div className="small-box">
                <img src="folderrr.png" alt="img8"  className="imgg"  />
                <p>Categories</p>
            </div>
            <div className="small-box">
                <img src="customers.png"  alt="img9"  className="imgg" />
                <p>Customers</p>
            </div>
            <div className="small-box">
                <img src="report.png"  alt="img10"  className="imgg" />
                <p>Reports</p>
            </div>
            <div className="small-box">
                <img src="star.png"  alt="img11"  className="imgg" />
                <p>Coupons</p>
            </div>
            <div className="small-box">
                <img src="message.png" alt="img12"  className="imgg"  />
                <p>Inbox</p>
            </div>
            <p>Other Informations</p>
            <div className="small-box">
                <img src="qnmark.png"  alt="img13" className="imgg"  />
                <p>Knowledge Base</p>
            </div>
            <div className="small-box">
                <img src="badge.png"  alt="img14" className="imgg"  />
                <p>Product Updates</p>
            </div>
            <p>Settings</p>
            <div className="small-box">
                <img src="customers.png"  alt="img15" className="imgg"  />
                <p>Personal Settings</p>
            </div>
            <div className="small-box">
                <img src="setting.png"  alt="img16" className="imgg"  />
                <p>Global Settings</p>
            </div>

        </div>
    }

    renderRightSideBar=()=>{
        return <div>
            <div className="first-line">
                <h1 className="namee cat">Categories</h1>
                <button className="namee butt1 catt">+ Add Category</button>
            </div>
            <div className="sec-container">
                <div className="grid-box">
                    <img  alt="img17"  src="https://assets.ajio.com/medias/sys_master/root/20230621/MqRi/64927506d55b7d0c638dd25b/-473Wx593H-464021795-black-MODEL7.jpg" className="grid-img" />
                    <p className="para-name">Men Clothes</p>
                    <p className="para-name2">24 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img18" src="https://m.media-amazon.com/images/I/61lTRqEd1gL._AC_UY1100_.jpg" className="grid-img" />
                    <p className="para-name">Women Clothes</p>
                    <p className="para-name2">12 items</p>
                </div>
                <div className="grid-box">
                    <img alt="img19"  src="https://thumbs.dreamstime.com/z/portrait-bearded-man-sunglasses-hat-park-144826979.jpg" className="grid-img" />
                    <p className="para-name">Accessories</p>
                    <p className="para-name2">43 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img20" src="https://5.imimg.com/data5/TW/JX/MY-9651283/men-cotton-t-shirt-500x500.jpg" className="grid-img" />
                    <p className="para-name">Cotton Clothes</p>
                    <p className="para-name2">31 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img21" src="https://assets.ajio.com/medias/sys_master/root/20231020/xJ31/65321c2cddf77915194d47a7/-473Wx593H-469560455-white-MODEL.jpg" className="grid-img" />
                    <p className="para-name">Summer Clothes</p>
                    <p className="para-name2">26 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img22" src="https://i.pinimg.com/474x/44/9d/5c/449d5cf0379adcad1caed1da9c774a10.jpg" className="grid-img" />
                    <p className="para-name">Wedding Clothes</p>
                    <p className="para-name2">52 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img23" src="https://img.freepik.com/premium-photo/stylish-brunette-asian-girl-wearing-black-tshirt-sunglasses-posing-against-street-urban-cloth_281858-2862.jpg" className="grid-img" />
                    <p className="para-name">Spring Collection</p>
                    <p className="para-name2">24 items</p>
                </div>
                <div className="grid-box">
                    <img  alt="img24" src="https://www.shutterstock.com/image-photo/redhead-young-male-yellow-t-600nw-2237501123.jpg" className="grid-img" />
                    <p className="para-name">Casual Clothes</p>
                    <p className="para-name2">52 items</p>
                </div>
                <div className="grid-box">
                    <img alt="img25"  src="https://img.freepik.com/free-photo/modern-african-american-man-wearing-round-glasses_23-2148634034.jpg" className="grid-img" />
                    <p className="para-name">Hats</p>
                    <p className="para-name2">26 items</p>
                </div>
            </div>
            
        </div>
    }

  render(){
    return <div>
        <Header />
        <div className="bars">
            {this.renderLeftSideBar()}
            {this.renderRightSideBar()}
        </div>
    </div>
  }
}

export default Home;
