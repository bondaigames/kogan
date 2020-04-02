export const sizeCMToCubicMetres = ({width, height, length}) => {
    return (width * height * length) / Math.pow(100, 3); 
}

export const sizeToCubicWeight = (size) => {
    return sizeCMToCubicMetres(size) * 250;
}

export const convertKgToGram = (unit) => {
    return unit * 1000;
}

export const formatFloatNumber = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}