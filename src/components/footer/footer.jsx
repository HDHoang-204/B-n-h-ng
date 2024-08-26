import "./footer.scss"



function Footer() {
    return <footer>
        <div className="footer-container">
            <div className="footer-content">
                <h3>Footer Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>

}
export default Footer