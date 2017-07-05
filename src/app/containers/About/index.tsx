import * as React from 'react';
const style = require('./style.css');

export default class About extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={style.About}>
        <h4>About</h4>
      </div>
    );
  }
}
