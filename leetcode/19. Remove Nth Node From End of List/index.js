/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let node = head;
  let cur = 0;
  while (node) {
    node = node.next;
    cur++;
  }
  cur = cur - n;
  node = new ListNode(0);
  node.next = head;
  let temp = node;
  while (cur) {
    temp = temp.next;
    cur--;
  }
  temp.next = temp.next.next;
  return node.next;
};
