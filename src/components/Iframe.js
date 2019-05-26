import React from 'react';

class IframeComponent extends React.Component {
  
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    document.body.appendChild(script);
  }

  render() {
    return (
      <iframe
        title="snapwidget-iframe"
        allowtransparency="true" 
        className="snapwidget-ika snapwidget-widget" 
        frameBorder="0" 
        scrolling="no" 
        src="https://snapwidget.com/embed/293837" 
        style={{
          border: 'none', 
          overflow: 'auto', 
          height: '100%'
        }}
        >
      </iframe>
    )
  }
}

export default IframeComponent;