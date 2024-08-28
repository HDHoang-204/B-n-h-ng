import "./menu.scss"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

let menu = [
    {
        id: 1,
        name: "Phở bò",
        price: "20.000",
        buy: "Mua Ngay",
        category: "Phở",
        image: "https://th.bing.com/th/id/OIP.B8nN-MKEyBDl0ehMvEdTIwHaFe?rs=1&pid=ImgDetMain"
    },
    {
        id: 2,
        name: "Cơm gà",
        category: "Cơm",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://cdn.mediamart.vn/images/news/cach-nu-com-ga-hi-an-ngon-chun-dung-diu-min-trung_466f27ad.jpg"
    },

    {
        id: 3,
        name: "Mỳ quảng",
        category: "Mỳ",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://dulichkhampha24.com/wp-content/uploads/2021/03/my-quang-hoi-an-1.jpg"
    },

    {
        id: 4,
        name: "Bún bò",
        category: "Bún",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://digifood.vn/blog/wp-content/uploads/2022/02/bun-bo-xao-1-Anh-Eric-Nguyen.jpg"
    },
    {
        id: 5,
        name: "Bún mắm",
        category: "Bún",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://th.bing.com/th/id/R.05d9414229fde53a894af411bd10aa16?rik=KNuQGjS1dnGw6w&pid=ImgRaw&r=0"
    },
    {
        id: 6,
        name: "Bún chả cá",
        category: "Bún",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://bepmina.vn/wp-content/uploads/2021/05/bun-cha-ca-thac-lac.jpeg"
    },
    {
        id: 7,
        name: "Mỳ quảng gà",
        category: "Mỳ",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://th.bing.com/th/id/R.ba9754aac38ff60183aa12a21beaa0e1?rik=A%2b2PzGbYNMTWjg&riu=http%3a%2f%2fgiavihanhphuc.com%2ffiles%2ffolder_1401%2fimages%2fmi-quang-ga-8Wm000.jpg&ehk=Urytr9n%2fg30EJBKBISFu1Yki1J0k9nEZ6F6NRJw%2fw3A%3d&risl=&pid=ImgRaw&r=0"
    },

    {
        id: 8,
        name: "Cơm hến",
        category: "Cơm",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://statics.vinpearl.com/com-hen-0565_1628341291.jpg"
    },
    {
        id: 9,
        name: "Cơm chiên dương châu",
        category: "Cơm",
        buy: "Mua Ngay",
        price: "20.000",
        image: "https://th.bing.com/th/id/OIP.1_Py6gY6iYrEEr6JjSy2pQAAAA?rs=1&pid=ImgDetMain"
    },

]





function Menu() {

    const [food, setfood] = useState(menu)

    const showcategory = (cat) => {
        const uppdate = menu.filter((x) => x.category === cat);
        setfood(uppdate);

    }






    return <div className="menu" id="menu">
        <h1>Explor  our Menu</h1>

        <div className="showmenu">
            <div className="btn"><button onClick={() => setfood(menu)}>All</button></div>
            <div className="btn"><button onClick={() => showcategory("Phở")}>Phở</button></div>
            <div className="btn"><button onClick={() => showcategory("Cơm")}>Cơm</button></div>
            <div className="btn"><button onClick={() => showcategory("Bún")}>Bún</button></div>
            <div className="btn"><button onClick={() => showcategory("Mỳ")}>Mỳ</button></div>
        </div>

        <h2>Menu</h2>

        <div className="colum">
            {food.map((menu, index) => {
                return (
                    <div key={index} className="listt">
                        <img src={menu.image} alt="" />
                        <span><a href="#">{menu.buy}</a></span>
                        <a href="#">{menu.name}</a>
                        <p>{menu.price} VNĐ</p>
                    </div>
                )

            })}
        </div>



    </div>
}

export default Menu;