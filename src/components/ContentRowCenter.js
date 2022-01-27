import React from 'react';
import RandomProductInDb from './RandomProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <RandomProductInDb />

            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;