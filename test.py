class linkedlist:
    nxt = None
    data = None

    def __init__(self, nxt, data):
        self.nxt = nxt
        self.data = data

lists = [1,2,3,4,5,6,7,8]

head = linkedlist(None, lists[7])
end = head
for idx in range(6, -1, -1):
    head = linkedlist(head, lists[idx])
end.nxt = head
while head.nxt != None:
    print(head.data)
    head = head.nxt
print(head.data)
