import React from 'react';
import PropTypes from 'prop-types';

export default class AppSetting extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        const { actions } = this.props;
        actions.changeModal();
    }

    render() {
        const { modal, actions } = this.props;
        return (
            <div className="appSetting linearRight boxCenter">
              <button type="button" className="setting-toggle" onClick={this.handleClick}>
                <img src="img/setting-icon.png" width="10.5px" height="10.5px" />
              </button>
            </div>
        );
    }
}

AppSetting.propTypes = {
    modal: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};
