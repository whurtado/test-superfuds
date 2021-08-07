import React from 'react';

/**Components */
import Tooltip from './Tooltip';

const Seals = ({ seals = [] }) => {
    console.log('seals', seals);
    return (
        <div className="seals">
            {seals &&
                seals.map((item, index) => {
                    return (
                        <>
                            <div>
                                <img src={item.image} />
                                <Tooltip data={item.name} />
                            </div>
                        </>
                    );
                })}
        </div>
    );
};

export default Seals;
