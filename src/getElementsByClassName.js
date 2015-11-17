// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var nodes = [];

  node = node || document.body;

  //get classname from node
    //compare node classname to className. if match, push to nodes container.

  var allClasses = node.className.split(" ");
  if (allClasses.indexOf(className) !== -1) {
    nodes.push(node);
  }

  //loop through all nodes
  for (var i = 0; i < node.children.length; i++) {

    //run getElementsByClassName on the children
    var childElements = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(childElements);
  }
   console.log(nodes);
  return nodes;
};

