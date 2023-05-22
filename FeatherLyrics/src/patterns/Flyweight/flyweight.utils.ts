export const getSizeInBytes = (obj) => {
    let str = null;
    if (typeof obj === 'string') {
      // If obj is a string, then use it
      str = obj;
    } else {
      // Else, make obj into a string
      str = JSON.stringify(obj);
    }
    // Get the length of the Uint8Array
    const bytes = new TextEncoder().encode(str).length;
    return bytes;
  }; 
  
  export const logSizeInBytes = (description, obj) => {
    const bytes = getSizeInBytes(obj);
    console.log(`${description} is approximately ${bytes} B`);
  };
  
  
  
  
      