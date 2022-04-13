import "./headerStyle.css";

export const Header = () => {
    return (
        <header>            
            <img id="profile" src="https://pm1.narvii.com/6353/f0d7f4db55a6cc9f0812dd1442581a67dc2ed836_hq.jpg" alt="profile"></img>
            <div className="surname">
                <h1>Rick</h1>
                <h1>Sanchez</h1>
            </div>
        </header>
    );
};