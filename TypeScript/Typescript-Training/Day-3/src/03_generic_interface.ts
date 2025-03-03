interface Container<T> {
    value: T;
    getValue: () => T;
  }
  
  const stringContainer: Container<string> = {
    value: "Hello",
    getValue: function () {
      return this.value;
    }
  };
  
  console.log(stringContainer.getValue()); // Output: Hello
  