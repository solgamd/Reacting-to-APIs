import React from 'react';

const Header = () => {
    return (
        <>
        <header className="App-header d-flex m-2 justify-content-center">
            <h1>Reacting to APIs</h1>
        </header>
        <div className="row d-flex flex-column justify-content-center align-items-center">
            <div>
                <img src={require("../studio-ghibli-logo.svg")} height="100" width="100" alt="Ghibli Logo" />
            </div>
        </div>
        </>
      );
}

export default Header;