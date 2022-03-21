export default function updateNodeElement(newElement, virtualDOM, oldVirtualDom = {}) {
  // 获取节点对应的属性对象
  const newProps = virtualDOM.props || {};
  const oldProps = oldVirtualDom.props || {};

    if (virtualDOM.type === 'text') {

      if (newProps.textContent !== oldProps.textContent) {

        if (virtualDOM.parent.type !== oldVirtualDom.parent.type) {
          virtualDOM.parent.stateNode.appendChild(
            document.createTextNode(newProps.textContent),
          )
        } else {
          virtualDOM.parent.stateNode.replaceChild(
            document.createTextNode(newProps.textContent),
            oldVirtualDom.stateNode
          )
        }
      }
      return 
    }

  Object.keys(newProps).forEach((propName) => {
    const newPropsValue = newProps[propName];
    const oldPropsValue = oldProps[propName];
    if (newPropsValue !== oldPropsValue) {
      if (propName.slice(0, 2) === 'on') {
        // 判断属性是否是事件属性 onClick -> click
        const eventName = propName.toLowerCase().slice(2);
        // 为元素添加属性
        newElement.addEventListener(eventName, newPropsValue);
        // 删除原有的事件的事件处理函数
        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropsValue;
      } else if (propName !== 'children') {
        if (propName === 'className') {
          newElement.setAttribute('class', newPropsValue);
        } else {
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    }
  });

  // 判断属性被删除的情况
  Object.keys(oldProps).forEach((propName) => {
    const newPropsValue = newProps[propName];
    const oldPropsValue = oldProps[propName];
    if (!newPropsValue) {
      // 属性删除了
      if (propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        newElement.removeAttribute(propName);
      }
    }
  });
}
