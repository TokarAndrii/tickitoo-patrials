import React, {Component, createRef} from "react";
import styles from "./HeaderLanguageSelector.module.scss";
import angleIcon from './angel.svg';

const AVAIL_LANGUAGES = ["Рус", "Укр"];

const [initLanguage,] = AVAIL_LANGUAGES;

const INITIAL_STATE = {
  language: initLanguage,
  showLanguagesList: false,
}



class HeaderLanguageSelector extends Component{
  constructor(props){
    super(props)
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  containerRef = createRef();

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

  handleWindowClick = function(e)  {
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
      <div 
        className={styles['languages-holder']} 
        onClick={this.handleToggleShowLanguagesList} 
        ref={this.containerRef}
      >
          <div className={styles['visible-holder']}>
          <div>{language}</div>
            <div>
              <img 
              className={showLanguagesList ? styles.angleUp  : styles.angleDown} 
              src={angleIcon} width = {12}  
              alt="language angle"
              />
            </div>
            {showLanguagesList && (
              <div className={styles['languages-list']}>
                {AVAIL_LANGUAGES.map(curr=> (
                  <div 
                  key={curr} 
                  className={styles['hidden-holder-item']}
                  onClick={()=> this.handleSetLanguage(curr)}
                  >
                    {curr}
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
    );
  }
} 
  



export default HeaderLanguageSelector;
