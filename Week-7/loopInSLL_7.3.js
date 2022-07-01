class SLLNode
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

function createSLL(arr)
{
  let head = new SLLNode(arr[0]);
  let curr = head;
  for(let i = 1; i < arr.length; ++i)
  {
    curr.next = new SLLNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

function findPivot(head)
{
  let slow = head, fast = head;
  while(fast && fast.next)
  {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast)    // loop exists
    {
      slow = head;
      while(slow !== fast)
      {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;    // pivot found
    }
  }
  return null;    // no loop exists
}

