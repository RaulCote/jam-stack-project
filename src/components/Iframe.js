import React from 'react';

const IframeComponent = () => (
    <iframe
      title="snapwidget-iframe"
      allowtransparency="true" 
      className="snapwidget-widget" 
      frameBorder="0" 
      scrolling="no" 
      src="https://snapwidget.com/embed/293837" 
      style={{
        border: 'none', 
        overflow: 'auto', 
        height: '100%'
        }}>
    </iframe>
)

export default IframeComponent;