import React, {Component, createRef} from "react";
import "./HeaderLanguageSelector.sass";
import angleIcon from './angel.svg';

const INITIAL_STATE = {
  language: "Ru",
  showLanguagesList: false,
}

const availLanguage = ["Ru", "Ua"];

class HeaderLanguageSelector extends Component{
  containerRef = createRef();

  modalRef = createRef();

  state = {...INITIAL_STATE}

  handleSetLanguage = language => {
    const {language: currentLanguage} = this.state;
    if (language !== currentLanguage){
      this.setState({language: language})
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    if(this.containerRef.current){
             const isTargetInsideContainer = this.containerRef.current.contains(e.target);
             if(!isTargetInsideContainer) this.handleCloseShowLanguagesList();
    }
  };

  handleToggleShowLanguagesList = () => {
    this.setState(prevState => ({showLanguagesList: !prevState.showLanguagesList}))
  }

  handleCloseShowLanguagesList = () => {
    this.setState({showLanguagesList: false})
  }

  

  render(){
    const {language,showLanguagesList} = this.state;
    return (
      <div className="languages-holder" onClick={this.handleToggleShowLanguagesList} ref={this.containerRef}>
          <select name="language" value={language} className="select2-hidden-accessible">
            {availLanguage.map(language => (
                 <option key={language} value={language}>{language}</option>
            ))}
          </select>
          <div className="visible-holder">
            <div>{language}</div>
            <div>
              <img className={showLanguagesList ? 'angleUp'  : 'angleDown'} src={angleIcon} width = {12}  alt="language angle"></img>
            </div>
            {showLanguagesList && (
                          <div className="languages-list" ref={this.modalRef}>
                            {availLanguage.map(curr=> (
                              <div key={curr} className="hidden-holder-item" onClick={()=> this.handleSetLanguage(curr)}>{curr}</div>
                            ))}
                        </div>
            )}

          </div>
      </div>
    );
  }
} 
  



export default HeaderLanguageSelector;
