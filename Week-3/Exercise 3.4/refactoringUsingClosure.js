        function createStack() {
            const items = [];
            return {
                push(item) {
                    items.push(item);
                    console.log('pushed : ' + item);
                },
                pop() {
                    console.log('pop    : ' + items.pop());
                }
            };
        }
        const stack = createStack();
        stack.push(10);
        stack.push(5);
        stack.pop(); // => 5
        console.log('stack[]: ' + stack.items);