function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.getElementById('app').querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n){
	const lis = document.querySelectorAll('.ranked-list li')

	for (let i = 0; i < lis.length; i++){
		lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
	}
}

function deepestChild(){
	let node = document.getElementById('grand-node')
  let deeperNode = node.children[0]

  while (node.children[0]) {
    node = deeperNode
    deeperNode = node.children[0]
  }

  return node
}


// Define a function deepestChild() that pulls out the most deeply nested 
// child from div#grand-node. (Remember, you can iterate over elements and 
// call querySelector() and querySelectorAll() on them. 