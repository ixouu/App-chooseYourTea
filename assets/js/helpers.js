
function findTea(tastes, colors) {
    const result = allTea.filter(obj => obj.tastes.includes(tastes) && obj.colors.includes(colors))
        .forEach(obj => addContent(obj));
};
function findInfusion(family, tastes) {
    let result = allInfusion.filter(obj => obj.family.includes(family) && obj.tastes.includes(tastes))
        .forEach(obj => addContent(obj));
};
