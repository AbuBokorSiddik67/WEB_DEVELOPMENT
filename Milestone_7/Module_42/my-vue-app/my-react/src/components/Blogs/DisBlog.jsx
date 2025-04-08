import React from 'react';

const DisBlog = (props) => {
    console.log(props);
    const { brand, capacity, color, lifespan, material, price, weight } = props.blog;
        
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {brand}
                    <div className="badge badge-secondary">{color}</div>
                    <div className="badge badge-secondary">C: {capacity}</div>
                    <div className="badge badge-secondary">W: {weight}</div>
                    </h2>
                    <p>{material}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{lifespan}</div>
                        <div className="badge badge-outline">{ price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisBlog;