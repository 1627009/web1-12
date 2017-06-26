document.getElementById('form').onsubmit = function()
{
  window.alert(document.getElementById('form').number.value);
  return false;
}

for(var i = 0; i < document.form.number.value; i++)
{
  var li = document.createElement('li');
  
  if((i + 1) % 3 == 0 && (i + 1) % 5 == 0)
    li.textContent = 'FizzBuzz';
  else if((i + 1) % 3 == 0)
    li.textContent = 'Fizz';
  else if((i + 1) % 5 == 0)
    li.textContent = 'Buzz';
  else
    li.textContent = i + 1 + '回目';
  document.getElementById('list').appendChild(li);
}
