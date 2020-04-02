import React from 'react'
import { sizeToCubicWeight, convertKgToGram, formatFloatNumber } from "../../../utils/Utils"

const ProductItem = ({item}) => {
    const cate = item.category;
    const title = item.title;
    const cubicWeight = sizeToCubicWeight(item.size);
    // const cubicWeight = sizeToCubicWeight({width: 40, height: 20, length: 30})
    const cubicWeightInGrams = convertKgToGram(cubicWeight);

    const result = (<p className="card-text">
                    <strong>Cubic weight: {formatFloatNumber(cubicWeightInGrams)}</strong>
                </p>)

    const isAirConditioner = (cate.toLowerCase() === "air conditioners") && result;

    return (
        <div className="card form-group">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="text-muted card-subtitle mb-2">{cate}</h6>
                {isAirConditioner}
            </div>
        </div>
    )
}

export default ProductItem;