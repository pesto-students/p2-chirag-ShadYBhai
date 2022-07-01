function doTask1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function doTask2() {
    console.log('calling');
    const result = await doTask1();
    console.log(result);
    
  }
  
  doTask2();
