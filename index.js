const headNode = (linkedList, collection) => {
    return collection[linkedList]
}

const getName = (node) => {
    return node.name
}

const next = (node, collection) => {
    return collection[node.next]
}

const nodeAt = (i, linkedList, collection) => {
    let node = collection[linkedList]
    for (let j = 0; j<i; j++) {
        node = next(node, collection)
    }
    return node
}

const addressAt = (i, linkedList, collection) => {
    let node = collection[linkedList]
    if (i>0) {
        for (let j = 0; j<i-1; j++) {
            node = next(node, collection)
        }
        return node.next
    }
    return linkedList
}

const indexAt = (node, collection, linkedList) => {
    for (let i = 0; i < 1000; i++) {
        if (nodeAt(i, linkedList, collection) === node) {
            return i
        }
    }
}

const insertNodeAt = (i, address, linkedList, collection) => {
    let node = nodeAt(i, linkedList, collection)
    let prevNode = nodeAt(i-1, linkedList, collection)
    collection[address].next = prevNode.next
    prevNode.next = address
}

const deleteNodeAt = (i, linkedList, collection) => {
    let node = nodeAt(i, linkedList, collection)
    let prevNode = nodeAt(i-1, linkedList, collection)
    prevNode.next = node.next
}