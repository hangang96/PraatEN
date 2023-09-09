 function toggleMenu() {
    const body = document.body;
    body.classList.toggle("menu-open");
    
    // 获取隐藏文字的元素
    const hiddenText1 = document.getElementById("hidden-text-1");
    const hiddenText2 = document.getElementById("hidden-text-2");
    const hiddenText3 = document.getElementById("hidden-text-3");
    
    // 切换隐藏文字的显示状态
    hiddenText1.style.display = body.classList.contains("menu-open") ? "block" : "none";
    hiddenText2.style.display = body.classList.contains("menu-open") ? "block" : "none";
    hiddenText3.style.display = body.classList.contains("menu-open") ? "block" : "none";
}

		
		
	 // 获取作者链接元素
	const authorLink = document.querySelector('#menu li:nth-child(2) a');
	// 点击作者链接时触发淡出效果
	authorLink.addEventListener('click', function(event) {
		event.preventDefault(); // 阻止默认链接行为
		document.body.style.opacity = '0'; // 设置当前页面透明
		setTimeout(function() {
		window.location.href = authorLink.getAttribute('href'); // 跳转到作者页
		}, 500); // 延迟 500 毫秒后跳转
	});
	
	
