
// 父子关系数组数据转树数据
module.exports = function(items) {
	items.forEach(item => {
		items.forEach(cell => {
			//parentId为null表示没有父节点  即根节点
			if (item.pid !== null && item.pid === cell.id) {
				if (!(cell.children instanceof Array)) {
					// children初始化
					cell.children = [];
				}
				cell.children.push(item);
			}
		})
	})
	
	// 返回tree
	return items.filter(atom => atom.pid === null);
}
