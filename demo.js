const a = ['apple', 'banana', 'orange']
const b = ['pineapple', 'orange', 'banana', 'peach']

/**
 * 通过对比修改，将 a 修改成和 b 一致
 * @param {*} oldVnode 
 * @param {*} newVNode 
 * @returns 
 */
function patch(oldVnode, newVNode) {
  for(let i = 0; i < newVNode.length; i++) {
    const v = newVNode[i]
    for(let j = 0; j < oldVnode.length; j++) {
      const ov = oldVnode[j]
      if (v === ov) {
        oldVnode[j] = oldVnode[i]
        oldVnode[i] = v
        break
      }
      if (j === oldVnode.length - 1) {
        oldVnode.splice(i, 0, v)
        break
      }
    }
  }
  oldVnode.length = newVNode.length
  return oldVnode
}

console.log(patch(a, b))

// 关于唯一标识符的思考
// 如果仅仅用索引来判断两个值是否相等，必须借助第三种数据结构（因为数组的插入、删除、移动都会影响原有索引）。
