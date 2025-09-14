const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price");
	let total = 0;
	prices.forEach(cell =>{
		total =  total + parseFloat(cell.textContent);
	});

	let table = document.querySelector("table");
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");

	newCell.setAttribute("colspan","2");
	newCell.textContent = "Total price: " + total;
	
	newRow.appendChild(newCell);
	table.appendChild(newRow);
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

