// Dependencies
import Trigger from './trigger';

// Module definition
export default class {

  constructor(node) {

    // Declare trigger
    this.trigger = new Trigger();

    //
    let added   = [];
    let removed = [];
    let state   = {};

    //
    const callback = (e) => {

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
        const obj = {
          'key': i,
          'type': state[i]
        }

        //
        this.trigger.transmit(i, obj);
        this.trigger.transmit('*', obj);

      });

    };

    // Event listeners
    node.addEventListener('mouseup', callback);
    node.addEventListener('keyup', callback);

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


  // Create events
  match(name, callback) {

    (this.trigger).register(...arguments);

  }

}
