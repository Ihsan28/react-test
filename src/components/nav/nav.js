import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="top-nav">
        <a href="#">Home |</a>
        <a href="#">Home |</a>
        <a href="#">Home |</a>
        <a href="#">Home |</a>
        <a href="#">Home |</a>
        <a href="#">About</a>
      </div>

      <div className="sticky-bottom-nav">
        <a href="#bottom-nav" className="bottom-dash">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
        </a>

        <div className="bottom-nav" id="bottom-nav">

          <div className="dropdown">
            <div className="dropbtn">Accessory</div>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropbtn">Accessory1</div>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropbtn">Accessory2</div>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropbtn">Accessory3</div>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropbtn">Accessory4</div>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
