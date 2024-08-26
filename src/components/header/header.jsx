import './header.scss'

function Header() {
    return <div className="header">
        <div className="img">
            <img src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1597821998048-538UNQI253SYL3KE9NGD/chup-anh-mon-an-breakfast-10.jpg" alt="" />
        </div>
        <div className="content">
            <h2>Oder your favourite foood here</h2>
            <p>Choose from a diverse menu featuring a deletable array of dishers crafted with the finest ingredients anhd culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one dellicious meal ar a time</p>
            <button>View menu</button>
        </div>
    </div>
}

export default Header