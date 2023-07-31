import React, {FC} from 'react';

interface PropertyProps {
    children: string
    value: string
}

const Property: FC<PropertyProps> = ({children, value}) => {
    return (
        <p className='text-xl text-white'>
            {children}{": "}
            {typeof value === "string"
                ?
                value.slice(0, 10)
                :
                ""}
        </p>
    );
};

export default Property;