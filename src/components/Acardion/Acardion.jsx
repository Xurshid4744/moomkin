import { Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

const Acardion = ({data}) => (
  <Collapse bordered={false} defaultActiveKey={["1"]}>
    <Panel header={title} key={id}>
      <p style={{ paddingLeft: 24 }}>{text}</p>
    </Panel>
  </Collapse>
);

export default Acardion;
