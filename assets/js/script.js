$(document).ready(function () {
	$('.header-bar').on('click', function (e) {
		$('.header-navbar').addClass('active');
	});

	$('.header-navbar').on('click', function (e) {
		if ($(e.target).closest('.header-navbar ul').length <= 0) {
			$('.header-navbar').removeClass('active');
		}
	});

	$('.product-tab a').on('click', function (e) {
		const tab_target = $(this).attr('tab-target');
		// xoa active cua cac product-list va product-tab a
		$('.product-list').removeClass('active');
		$('.product-tab a').removeClass('active');
		// Khi click vào product-tab nào thì nó sẽ được thêm class active
		// Đồng thời product list có id = giá trị của thuộc tính tab -
		//thêm class active
		$(this).addClass('active');
		$(tab_target).addClass('active');
	});

	$('.client-say-slick').slick({
		dots: true, // Hiện dot
		arrow: false, //bỏ mũi tên 2 bên
	});

	$('.site-footer-nav_heading').on('click', function (e) {
        // remove class active ở mọi nav_list
        const footer_list = $('.site-footer-nav_heading').next();
        footer_list.removeClass('active');
 
        // thêm class active ở cùng cấp với site-footer-nav_heading được clich (this)
        const this_list = $(this).next();
        this_list.addClass('active');
    });

});