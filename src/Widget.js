import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext';

const Widget = ({ widget, categoryName }) => {
    const { removeWidget } = useContext(DashboardContext);

    return (
        <div>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
            <button onClick={() => removeWidget(categoryName, widget.id)}>Remove</button>
        </div>
    );
};

export default Widget;
