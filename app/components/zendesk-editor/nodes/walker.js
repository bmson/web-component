// Module definition
export default class {

  constructor(node) {

    //
    let added   = [];
    let removed = [];
    let state   = {};

    //
    const getState = (e) => {

      //
      const keys = this.walkTree(node);
      const diff = this.diff(added, keys);

      //
      added = diff.added;
      removed = diff.removed;

      //
      added.forEach(i => state[i] = true);
      removed.forEach(i => state[i] = false);

      //
      Object.keys(state).forEach(i => {

        //
        this.createEvent(node, {
          'nodeType': i,
          'status': state[i]
        });

      });

    };

    const clearState = (e) => {

      //
      Object.keys(state).forEach(i => {

        //
        this.createEvent(node, {
          'nodeType': i,
          'status': false
        });

      });

    };

    // Event listeners
    node.addEventListener('mouseup', getState);
    node.addEventListener('keyup', getState);
    node.addEventListener('blur', clearState);

    //
    return node;

  }

  //
  createEvent(node, detail) {

    //
    const customEvent = new CustomEvent('match', {
      'detail': detail
    });

    //
    node.dispatchEvent(customEvent);

  }

  // Walk tree in reverse
  walkTree(root) {

    //
    const types = []

    // Get current node
    let node = this.currentNode();

    //
    types.push(node.nodeName);

    //
    while (node.parentNode !== root) {

      //
      node = node.parentNode;

      //
      if (node) {
        types.push(node.nodeName);
      } else return [];

    }

    //
    return types;

  }

  // Return currently selected node
  currentNode() {

    const selection = document.getSelection();
    return selection && (selection.anchorNode).parentNode;

  }

  // Get arrray difference
  diff(current, match) {

    return {
      'removed': current.filter(x => match.indexOf(x) < 0),
      'added': match
    };

  }

}
