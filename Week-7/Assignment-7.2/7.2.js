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

function rotateListKTimes(head, k)
{
  let tail = head, n = 1;
  while(tail.next)
  {
    n++;
    tail = tail.next;
  }

  k %= n;
  if(k === 0)
    return head;

  tail.next = head;
  let steps = n-k;
  let newTail = tail;
  while(steps--)
  {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}
