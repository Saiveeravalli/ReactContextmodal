import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-box">
          {showLeftNavbar && (
            <div className="left-box">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="list-1" type="none">
                <li className="p-s">Item 1</li>
                <li className="p-s">Item 2</li>
                <li className="p-s">Item 3</li>
                <li className="p-s">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="middle-box">
              <h1 className="left-heading">Content</h1>
              <p className="des-c">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-box">
              <h1 className="right-heading">Right Navbar</h1>
              <p className="box-1">Ad 1</p>
              <p className="box-1">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
