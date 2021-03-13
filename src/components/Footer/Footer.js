import React from 'react'

function Footer () {

    return (
        <div className="col-12 text-light text-center fixed-bottom bg-dark">
            <footer>
                <p></p>
                Restaurant © {new Date().getFullYear()}
                <p></p>
            </footer>

        </div>
    )
}

export default Footer;