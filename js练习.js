document.ready(function($) {
//part 1
	var y = .2 - .1
	console.log(x==y);
	// false
	console.log(x=y);
	// 0.1
	console.log(x);
	// 0.1
	console.log(y);
	// 0.1
	// console.log（"x,y得出的值 都是近似等于.1 但并不相等");
	// SyntaxError: illegal character
	var x = "x,y得出的值 都是近似等于.1 但并不相等";
	console.log(x);
	// x,y得出的值 都是近似等于.1 但并不相等

	//part 2
	var then = new Date(2012,9,01);
	var later = new Date(2012,9,01,17,10,30);//同一天
	var now  = new Date(); //当前时间
	var elapsed = now - then;//日期减法，计算时间间隔的毫秒数
	later.getFullYear(); //2012
	// 2012
	later.getMonth();
	// 9
	later.getMonth();//从0开始计算月数
	// 9
	later.getDate();//从1开始计算天数
	//1
	later.getHours();
	// 17
	later.getUTCHours();
	// 9
	console.log(elapsed);
	// 120603777440
	now.getDay();
	// 3
	// now.getUtcDate();
	// TypeError: now.getUtcDate is not a function
	now.getUTCDate();
	// 27


	//part 3
	var zero = 0;
	// undefined
	var negz = -0;
	// undefined
	console.log( zero == negz );
	// true
	// alter( zero == negz );
	// ReferenceError: alter is not defined
	console.log( 1/zero == 1/negz );//正无穷大、负无穷大
	// false

	//part 4
	var p = "π";
	// undefined
	var e = "e";
	// undefined
	p.length;
	// 1 ？？
	e.length;
	// 1 ？？
});
