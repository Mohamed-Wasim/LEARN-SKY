import React from 'react';
import Tab from 'react-bootstrap/Tab';
import ReactTabs from 'react-bootstrap/Tabs';

const LskyTabs = (props) => {
  const [key, setKey] = React.useState(props.activeTab);
  return (
    <ReactTabs id="lsky-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
      {React.Children.map(props.children, (child, index) => (
        <Tab
          eventKey={child.props.eventKey}
          title={child.props.title}
          key={index}
          {...child.props?.tabProps}
        >
          {child}
        </Tab>
      ))}
    </ReactTabs>
  );
};

export default LskyTabs;
