const fs = require('fs');

//Function to convert source array to the desired result
function convertSourceToResult(source) {
    return source.reduce((result, { batch_id, ...rest }) => {

      const batchObj = result.find(item => item[batch_id]);//batchID already exist

      if (!batchObj) {
        result.push({ [batch_id]: [rest] });//creating new batchID
      } else {
        batchObj[batch_id].push(rest);//push rest object if same batchID already
      }
      return result;
    }, []);
  }
  

// Reading source.json file
fs.readFile('./source.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file', err);
    return;
  }

  // Parsing the JSON data
  const source = JSON.parse(data);
  console.log("asfsaddsfdf__asdfd",data);
  // Converting source data to result
  const result = convertSourceToResult(source);

  // Writing result to result.json
  fs.writeFile('./result.json', JSON.stringify(result), (err) => {
    if (err) {
      console.error('Error writing the file', err);
    } else {
      console.log('Result saved to result.json');
    }
  });
});
