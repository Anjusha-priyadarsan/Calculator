// display
function display(num)
{
    output.value +=num;
}
function clearAll()
{
    output.value=" "
    answer.value=" "
   
}

function evaluateExp()
{
    answer.value=eval(output.value)
    
    
}


function removeLast()
{
    currentExp=output.value
    output.value=currentExp.slice(0, -1)
}