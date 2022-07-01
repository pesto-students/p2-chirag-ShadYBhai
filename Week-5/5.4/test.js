describe("Calculator tests", () => {
    test('adding 5 + 7 should return 12', () => {
    
      var result = mathOperations.sum(5,7)
    
      
      expect(result).toBe(12);
    });
    
    test("subtracting 2 from 10 should return 8", () => {
      
      var result = mathOperations.diff(10,2)
    
      
      expect(result).toBe(8);
    });
    
    test("multiplying 2 and 8 should return 16", () => {
      
      var result = mathOperations.product(2,8)
    
      
      expect(result).toBe(16);
    });
})
