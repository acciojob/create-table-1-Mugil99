
  
    //Write your code here
  function insertRow() {
  const table = document.getElementById("myTable");
  const row = table.insertRow(); // insert new row at position 1 (just below header)

  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.innerHTML = "Row3 cell1";
  cell2.innerHTML = "Row3 cell2";
}

  

  

