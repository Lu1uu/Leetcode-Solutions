/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
	const merge = (node1, node2) => {
		if (!node1 || !node2) return node1 || node2
		if (node1.val < node2.val) {
			node1.next = merge(node1.next, node2)
			return node1
		}
		node2.next = merge(node1, node2.next)
		return node2
	}
	return merge(l1, l2)
}
