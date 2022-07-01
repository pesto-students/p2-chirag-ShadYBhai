function findPair(arr, size, n) {
		
		let i = 0;
		let j = 1;

		// Search for a pair
		while (i < size && j < size) {
			if (i != j && arr[j] - arr[i] == n) {
				document.write("Pair Found: (" + arr[i] + ", " +
				arr[j] + ")");
				return true;
			}
			else if (arr[j] - arr[i] < n)
				j++;
			else
				i++;
		}

		document.write("No such pair");
		return false;
	}


	let arr = [1, 7, 50, 88, 120];
	let size = arr.length;
	let n = 60;
	findPair(arr, size, n);
