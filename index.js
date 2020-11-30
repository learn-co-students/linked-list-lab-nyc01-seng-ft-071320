const getName = (node) => {
    return node.name
}

const headNode = (linkedList, collection) => {
    return collection[linkedList]
}

const next = (node, list) => {
    let nextNode = node.next

    return list[`${nextNode}`]
}

const nodeAt = (idx, list, collection) => {
    let currentNode = headNode(list, collection)
    for(let i = 0; i < idx; i++){
        currentNode = next(currentNode, collection);
    }

    return currentNode;
}

const addressAt = (index, linkedList, collection) => {
    if(index == 0){
      return linkedList
    } else {
      let node = nodeAt(index-1, linkedList, collection)
      return node.next
    }
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }

  function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }