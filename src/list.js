const createList = value => {
  return createNode(value);
};
const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while (x.next) {
    x = x.next;
  }
  // x.next === null //x 是最后一个节点
  x.next = node;
  return node;
};
const removeFromList = (list, node) => {
  let x = list;
  let p = null;
  while (x !== node) {
    p = x;
    x = x.next;
  }
  p.next = x.next;
};

const createNode = value => {
  return {
    data: value,
    next: null
  };
};

const travelList = (list, fn) => {
  let x = list;
  while (x !== null) {
    fn(x);
    x = x.next;
  }
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
travelList(list, node => {
  console.log(node.data);
});
