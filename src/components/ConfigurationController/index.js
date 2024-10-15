// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

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
      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-context-con">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-container">
            <div className="content-checkbox-con">
              <input
                id="content"
                className="input"
                type="checkbox"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="content-checkbox-con">
              <input
                id="left"
                className="input"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeft}
              />
              <label htmlFor="left" className="label">
                Left Navbar
              </label>
            </div>
            <div className="content-checkbox-con">
              <input
                id="right"
                className="input"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRight}
              />
              <label htmlFor="right" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
