import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="title">Shopping App</div>
                <div className="subtitle">welcome to out shop ! </div>
                <div className="btn__area">
                    <a href="https://www.protopie.io" target="_blank">
                        <button>Try ProtoPie Yourself</button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;