import React from 'react';

const Header = () => {
    return (
        <>
        <header className="App-header d-flex m-2 justify-content-center">
            <h4 className="font-weight-light text-success">Covalence Lab: Reacting to APIs</h4>
        </header>
        <div className="row d-flex flex-column justify-content-center align-items-center">
            <div>
                <img src={require("../studio-ghibli-logo.svg")} height="200" width="400" alt="Ghibli Logo" />
            </div>
        </div>
        </>
      );
}

export default Header;