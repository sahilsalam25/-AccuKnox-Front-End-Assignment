// import React, { useContext } from 'react';
// import { DashboardContext } from './';
// import Category from './Category';

// const Dashboard = () => {
//     const { categories } = useContext(DashboardContext);

//     return (
//         <div>
//             {categories.map(category => (
//                 <Category key={category.name} category={category} />
//             ))}
//         </div>
//     );
// };

// export default Dashboard;

import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext'; // Correct the import path
import Category from './Category';

const Dashboard = () => {
    const { categories } = useContext(DashboardContext);

    return (
        <div>
            {categories.map(category => (
                <Category key={category.name} category={category} />
            ))}
        </div>
    );
};

export default Dashboard;
