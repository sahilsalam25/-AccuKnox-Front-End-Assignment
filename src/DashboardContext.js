import React, { createContext, useState } from 'react';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        {
            name: 'CSPM Executive Dashboard',
            widgets: [
                { id: 1, name: 'Widget 1', text: 'This is Widget 1' },
                { id: 2, name: 'Widget 2', text: 'This is Widget 2' }
            ]
        }
    ]);

    const addWidget = (categoryName, widget) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.name === categoryName
                    ? { ...category, widgets: [...category.widgets, widget] }
                    : category
            )
        );
    };

    const removeWidget = (categoryName, widgetId) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.name === categoryName
                    ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
                    : category
            )
        );
    };

    return (
        <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
            {children}
        </DashboardContext.Provider>
    );
};

export { DashboardContext, DashboardProvider };
