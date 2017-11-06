module.exports = {
    formatElementsColumns
}
function formatElementsColumns(elementsGroups) {
    const elementsGroupsWithOffsets = elementsGroups.map(fillColumnsOffsetsWithPlaceholders)
    return elementsGroupsWithOffsets
}

function fillColumnsOffsetsWithPlaceholders(elementsGroup, index) {
    const columnsOffsets = [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0]
    return [...new Array(columnsOffsets[index]), ...elementsGroup]
}