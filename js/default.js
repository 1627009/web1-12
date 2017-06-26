for(var i = 0; i < 100; ++i)
{
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
}
