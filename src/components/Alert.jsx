import React from "react";
import classNames from "classnames";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props;

        const alertMultiClass = classNames(
            'alert',
            `alert-${type}`);

        const alertSingleClass = classNames('alert');

        return (
            <div className={alertMultiClass} role={alertSingleClass}>{text}</div>
        )
    }
}

export default Alert;