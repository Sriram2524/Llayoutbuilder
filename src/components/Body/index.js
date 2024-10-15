// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-con">
          {showLeftNavbar ? (
            <div className="left-navbar-con">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul className="unordered-list">
                <li className="list">Item 1</li>
                <li className="list">Item 2</li>
                <li className="list">Item 3</li>
                <li className="list">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-con">
              <h1 className="left-nav-heading">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, send do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venlam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar-con">
              <h1 className="left-nav-heading">Right Navbar</h1>
              <div className="box-con">
                <p className="ad-para">Ad 1</p>
                <p className="ad-para">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
