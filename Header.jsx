import '../App.css'

function Header(){
    return(
        <div className='header'>
            <img src='../img/tiktoklogo.png' alt='Tiktok'></img>
            <button className='uploadbutton'>+ Upload</button>
            <div class="search-container">
            <input type="text" className='search-input' placeholder="Search"></input>
             <button className='search-button'>⌕</button>
            </div>
            <button className='loginButton'>Log in</button>
            <button className='menuButton'>⋮</button>
        </div>
    )
}

export default Header;

