import React, { useState, useContext } from 'react';
import { DashboardContext } from './DashboardContext';

const AddWidgetForm = ({ categoryName }) => {
    const { addWidget } = useContext(DashboardContext);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText
        };
        addWidget(categoryName, newWidget);
        setWidgetName('');
        setWidgetText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                required
            />
            <button type="submit">Add Widget</button>
        </form>
    );
};

export default AddWidgetForm;
