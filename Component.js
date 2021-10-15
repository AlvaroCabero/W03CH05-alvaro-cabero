class Component {
  parentNode;
  element;
  tag;
  className;
  constructor(parentNode, className, tag) {
    this.parentNode = parentNode;
    this.element = document.createElement(tag);
    this.element.className = className;
    parentNode.append(this.element);
  }
}

export default Component;
