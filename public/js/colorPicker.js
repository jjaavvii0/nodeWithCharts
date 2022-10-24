const arrayColors = {
    colors:[
        "rgba(255, 0, 0, 0.5)",
        'rgba(0, 0, 255, 0.5)',
        'rgba(60, 179, 113, 0.5)',
        'rgba(238, 130, 238, 0.5)',
        'rgba(255, 165, 0, 0.5)',
        'rgba(106, 90, 205, 0.5)',
        'rgba(128, 128, 0, 0.5)',
        'rgba(128, 128, 128, 0.5)',
        'rgba(0, 255, 0, 0.5)',
        'rgba(0, 255, 255, 0.5)',
        'rgba(255, 0, 255, 0.5)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(0, 0, 0, 0.5)'
    ]
}

function getColors(size) {
    return arrayColors.colors.slice(0, size);
}

export default {getColors};
