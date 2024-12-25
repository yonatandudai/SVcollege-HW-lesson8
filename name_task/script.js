//Q1.
function dealWithName(firstName, lastName) {
    // Create a div element to hold the paragraphs
    const myDiv = document.createElement('div');
    
    // Create the first and second paragraph elements
    const myfirstPara = document.createElement('p');
    const mySecondPara = document.createElement('p');
    
    // Append the paragraphs to the div
    myDiv.appendChild(myfirstPara);
    myDiv.appendChild(mySecondPara);
    
    // Set the text content of the paragraphs
    myfirstPara.textContent = `${firstName}`;
    mySecondPara.textContent = `${lastName}`;
    
    // Style the first paragraph
    myfirstPara.style.color = 'red';
    myfirstPara.style.textDecoration = 'underline';
    
    // Style the second paragraph
    mySecondPara.style.fontSize = '50px';
    mySecondPara.style.border = '2px solid black';
    mySecondPara.style.display = 'inline-block';
    mySecondPara.style.padding = '5px';
    
    // Append the div to the body
    document.body.appendChild(myDiv);
    
    // Adjust margin to reduce space between paragraphs
    myfirstPara.style.marginBottom = '5px';
    mySecondPara.style.marginTop = '5px';
}