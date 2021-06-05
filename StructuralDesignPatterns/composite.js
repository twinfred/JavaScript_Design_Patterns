const Node = function(name) {
  this.children = [];
  this.name = name;
};

Node.prototype = {
  add: function(child) {
    this.children.push(child);
    return this;
  }
}

// recursive console log of what's inside of the tree
const log = (root) => {
  if (!root) return;

  console.log('');
  console.log(`---Node: ${root.name}---`);
  console.log(root);

  root.children.forEach(child => {
    if(child?.children.length) {
      log(child);
    }
  });
}

const init = () => {
  const tree = new Node('root');
  const [left, right] = [new Node("left"), new Node("right")];
  const [leftleft, leftright] = [new Node("leftleft"), new Node("leftright")];
  const [rightleft, rightright] = [new Node("rightleft"), new Node("rightright")];

  tree.add(left).add(right);
  left.add(leftleft).add(leftright);
  right.add(rightleft).add(rightright);

  log(tree);
}

init();