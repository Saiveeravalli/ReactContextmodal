import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="con-box">
          <h1 className="main-heading">Layout</h1>
          <div className="in-1">
            <input
              checked={showContent}
              id="content"
              type="checkbox"
              className="input-1"
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="lable-1">
              Content
            </label>
          </div>
          <div className="in-1">
            <input
              checked={showLeftNavbar}
              id="left"
              type="checkbox"
              className="input-1"
              onChange={onChangeLeft}
            />
            <label htmlFor="left" className="lable-1">
              Left Navbar
            </label>
          </div>
          <div className="in-1">
            <input
              checked={showRightNavbar}
              id="Right"
              type="checkbox"
              className="input-1"
              onChange={onChangeRight}
            />
            <label htmlFor="Right" className="lable-1">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
