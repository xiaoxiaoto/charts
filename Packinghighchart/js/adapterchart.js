/**
 *根据type类型来确定创建图表类型
 *
 * type：图表类型
 *
 * data：图表数据
 *
 */
var date = new Date();
var subtitleText = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
function createZone(customZone) {
	var basicZone = {
		color : null,
		dashStyle : null,
		fillColor : null,
		value : undefined
	};
	if ( typeof (customZone) != "undefined" && customZone != null) {

		if ( typeof (customZone.color) != "undefined" && customZone.color != null) {
			basicZone.color = customZone.color;
		}
		if ( typeof (customZone.dashStyle) != "undefined" && customZone.dashStyle != null) {
			basicZone.dashStyle = customZone.dashStyle;
		}
		if ( typeof (customZone.fillColor) != "undefined" && customZone.fillColor != null) {
			basicZone.fillColor = customZone.fillColor;
		}
		if ( typeof (customZone.value) != "undefined" && customZone.value != null) {
			basicZone.value = customZone.value;
		}

	}
	return basicZone;
}

function createSeries(customSeries, zones) {

	var basicSeries = {
		type : null,
		allowPointSelect : true, //是否允许使用鼠标选中数据点
		animation : true, //是否动画显示数据点数据
		animationLimit : null, //
		borderColor : "#F00",
		borderRadius : 0,
		borderWidth : 10,
		color : null, //数据点显示数据颜色包括数据提示框的颜色
		colorByPoint : false,
		colors : null,
		connectEnds : true,
		connectNulls : false,
		cropThreshold : 300, //
		cursor : 'pointer', //当鼠标移上数据点时鼠标的样式
		dashStyle : "Solid", //数据点显示样式  Solid   dot
		dataLabels : {
			align : "center", //数据点上显示文本的水平对齐方式  left    center   right
			allowOverlap : true, //是否允许数据点上显示文本重叠
			backgroundColor : null, //数据点上显示文本的背景色
			borderColor : null, //数据点上显示文本边框颜色
			borderRadius : 0, //数据点上显示文本边框圆角
			borderWidth : 0, //数据点上显示文本边框宽度
			color : null, //数据点上显示文本颜色
			crop : true, //是否隐藏超出绘图区域外的数据点上显示文本
			defer : true, //是否当初始化完毕之后显示数据点文本
			enabled : true, //是否显示数据点上文本
			format : '{point.country}', //数据点上显示文本设置
			formatter : null, //数据点上显示文本格式化函数
			inside : true, //数据点上显示文本位置  true 在图表数据点显示符号上显示  false 在图表数据点显示符号外显示
			overflow : "justify", //是否允许数据点上显示文本溢出  false  justify
			padding : 0, //数据点上显示文本内边距
			reserveSpace : true, //是否为数据点上显示文本预留空间
			rotation : 0, //数据点上显示文本旋角
			shadow : false, //数据点上显示文本是否有阴影效果
			shape : "square",
			style : {
				"color" : "contrast",
				"fontSize" : "11px",
				"fontWeight" : "bold",
				"textShadow" : "0 0 6px contrast, 0 0 3px contrast"
			}, //数据点上显示文本样式
			useHTML : false, //当数据点上显示文本包含HTML标签，是否解析HTML标签
			verticalAlign : null, //数据点上显示文本垂直对齐方式   top   center  bottom
			xHigh : 0,
			xLow : 0,
			yHigh : -6,
			yLow : 16,
			x : 0, //数据点上显示文本在X轴方向上的偏移量
			y : 0, //数据点上显示文本在Y轴方向上的偏移量
			zIndex : 6//数据点上显示文本的ZIndex值
		},
		depth : 25,
		edgeColor : null,
		edgeWidth : 1,
		displayNegative : true,
		enableMouseTracking : true, //数据点上鼠标跟随事件是否启用  主要控制数据提示框等等鼠标跟随事件
		//events:undefined,//数据点上事件    {	afterAnimate: 动画加载完成之后事件,checkboxClick: 选择框被点击事件,click: 点击事件,	hide: 数据点隐藏事件,legendItemClick: 图例项点击事件,	mouseOut: 鼠标移出事件,mouseOver: 鼠标移上事件,show: 数据展示事件	}
		fillColor : null,
		fillOpacity : 0.75,
		getExtremesFromAll : true,
		groupPadding : 0.2,
		groupZPadding : 1,
		grouping : true,
		keys : null,
		lineColor : null, //数据显示的线颜色
		lineWidth : 0, //数据显示的线宽
		linecap : "round",
		linkedTo : null,
		marker : {//数据点标记 即数据以点的形式显示
			enabled : true, //是否启用数据点标记
			fillColor : null, //数据点标记的填充颜色
			height : null, //数据点标记高度
			lineColor : "#FFF", //数据点标记外边框颜色
			lineWidth : 0, //数据点标记外边框宽度
			radius : 4, //数据点标记点半径
			states : {
				hover : {
					enabled : true, //是否启用数据点标记鼠标移入样式
					fillColor : null, //鼠标移入数据点标记的填充颜色
					lineColor : "#FFF", //鼠标移入数据点标记外边框颜色
					lineWidth : 0, //鼠标移入数据点标记外边框宽度
					lineWidthPlus : 1, //鼠标移入数据点标记外边框额外增加宽度
					radius : null, //鼠标移入数据点标记半径
					radiusPlus : 2//鼠标移入数据点标记半径额外增加宽度
				},
				select : {
					enabled : true, //是否启用数据点标记选中样式
					fillColor : null, //选中数据点标记的填充颜色
					lineColor : "#000", //选中数据点标记外边框颜色
					lineWidth : 0, //选中数据点标记外边框宽度
					lineWidthPlus : 0, //鼠标移入数据点标记外边框额外增加宽度
					radius : null, //选中数据点标记半径
					radiusPlus : 0//鼠标移入数据点标记半径额外增加宽度
				}
			},
			symbol : null, //数据点标记符号   circle square diamond triangle triangle-down
			width : null//数据点标记宽度
		},
		medianColor : null,
		medianWidth : 2,
		maxPointWidth : null,
		minPointLength : 0,
		maxSize : "20%", //数据点最大尺寸
		minSize : "8", //数据点最小尺寸
		neckHeight : '25%',
		neckWidth : '30%',
		negativeColor : '#FFF',
		negativeFillColor : null,
		point : {
			// events: null//点事件{	click: 点击事件,mouseOut: 鼠标移出事件,mouseOver: 鼠标移入事件,remove: 移出事件,select: 选中事件,unselect: 取消选中事件,update: 更新事件}
		},
		pointInterval : 1,
		pointIntervalUnit : null,
		pointPlacement : null,
		pointPadding : 0.1,
		pointPlacement : null,
		pointRange : null,
		pointWidth : null,
		pointStart : 0,
		reversed : false,
		selected : false, //图例项是否显示复选框是否被选中
		shadow : false, //数据点是否显示阴影效果
		showCheckbox : false, //图例项是否显示复选框
		showInLegend : true, //是否显示图例
		slicedOffset : 10,
		sizeBy : "area",
		sizeByAbsoluteValue : false,
		softThreshold : true,
		stacking : null,
		states : {
			hover : {
				borderColor : null,
				brightness : 0.1,
				color : null,
				enabled : true, //数据点是否启用鼠标移入样式
				halo : {
					attributes : {
						'stroke-width' : 1,
						stroke : '#cccccc',
						fill : '#E0E0E0',
						r : 0,
						states : {
							hover : {
								fill : '#bada55'
							},
							select : {
								stroke : '#039',
								fill : '#bada55'
							}
						}
					}, //数据点外围光环（晕）属性设置
					opacity : 0.25, //数据点外围光环透明度
					size : 5//数据点外围光环大小
				},
				lineWidth : 0, //数据点外边框宽度
				lineWidthPlus : 1, //数据点外边框额外增加宽度
				marker : {
					enabled : null, //是否启用数据点标记
					fillColor : null, //数据点标记的填充颜色
					height : null, //数据点标记高度
					lineColor : "#FFF", //数据点标记外边框颜色
					lineWidth : 0, //数据点标记外边框宽度
					radius : 4, //数据点标记点半径
					states : {
						hover : {
							enabled : true, //是否启用数据点标记鼠标移入样式
							fillColor : null, //鼠标移入数据点标记的填充颜色
							lineColor : "#FFF", //鼠标移入数据点标记外边框颜色
							lineWidth : 0, //鼠标移入数据点标记外边框宽度
							lineWidthPlus : 1, //鼠标移入数据点标记外边框额外增加宽度
							radius : null, //鼠标移入数据点标记半径
							radiusPlus : 2//鼠标移入数据点标记半径额外增加宽度
						},
						select : {
							enabled : true, //是否启用数据点标记选中样式
							fillColor : null, //选中数据点标记的填充颜色
							lineColor : "#000", //选中数据点标记外边框颜色
							lineWidth : 0, //选中数据点标记外边框宽度
							lineWidthPlus : 0, //鼠标移入数据点标记外边框额外增加宽度
							radius : null, //选中数据点标记半径
							radiusPlus : 0//鼠标移入数据点标记半径额外增加宽度
						}
					},
					symbol : null, //数据点标记符号   circle square diamond triangle triangle-down
					width : null//数据点标记宽度
				}
			}
		},
		stemColor : null,
		stemDashStyle : "Solid",
		stemWidth : null,
		step : "false",
		stickyTracking : false, //鼠标事件的黏连追踪 为true时显示提示文本框，false不显示
		threshold : 50, //Y轴的值，作为区域图的基本值 以区分高于阈值或低于阈值
		trackByArea : false,
		turboThreshold : 1000,
		upColor : null,
		visible : true, //是否显示数据
		whiskerColor : null,
		whiskerLength : '50%',
		whiskerWidth : 2,
		zMax : null, //Z最大值
		zMin : null, //Z最小值
		zThreshold : 0, //Z阀值
		zoneAxis : "y",
		zones : zones
	};
	if ( typeof (customSeries) != "undefined" && customSeries != null) {
		if ( typeof (customSeries.type) != "undefined" && customSeries.type != null) {
			basicSeries.type = customSeries.type;
		}
		if ( typeof (customSeries.allowPointSelect) != "undefined" && customSeries.allowPointSelect != null) {
			basicSeries.allowPointSelect = customSeries.allowPointSelect;
		}
		if ( typeof (customSeries.animation) != "undefined" && customSeries.animation != null) {
			basicSeries.animation = customSeries.animation;
		}
		if ( typeof (customSeries.animationLimit) != "undefined" && customSeries.animationLimit != null) {
			basicSeries.animationLimit = customSeries.animationLimit;
		}
		if ( typeof (customSeries.borderColor) != "undefined" && customSeries.borderColor != null) {
			basicSeries.borderColor = customSeries.borderColor;
		}
		if ( typeof (customSeries.borderRadius) != "undefined" && customSeries.borderRadius != null) {
			basicSeries.borderRadius = customSeries.borderRadius;
		}
		if ( typeof (customSeries.borderWidth) != "undefined" && customSeries.borderWidth != null) {
			basicSeries.borderWidth = customSeries.borderWidth;
		}
		if ( typeof (customSeries.color) != "undefined" && customSeries.color != null) {
			basicSeries.color = customSeries.color;
		}
		if ( typeof (customSeries.colorByPoint) != "undefined" && customSeries.colorByPoint != null) {
			basicSeries.colorByPoint = customSeries.colorByPoint;
		}
		if ( typeof (customSeries.colors) != "undefined" && customSeries.colors != null) {
			basicSeries.colors = customSeries.colors;
		}
		if ( typeof (customSeries.connectEnds) != "undefined" && customSeries.connectEnds != null) {
			basicSeries.connectEnds = customSeries.connectEnds;
		}
		if ( typeof (customSeries.connectNulls) != "undefined" && customSeries.connectNulls != null) {
			basicSeries.connectNulls = customSeries.connectNulls;
		}
		if ( typeof (customSeries.cropThreshold) != "undefined" && customSeries.cropThreshold != null) {
			basicSeries.cropThreshold = customSeries.cropThreshold;
		}
		if ( typeof (customSeries.cursor) != "undefined" && customSeries.cursor != null) {
			basicSeries.cursor = customSeries.cursor;
		}
		if ( typeof (customSeries.dashStyle) != "undefined" && customSeries.dashStyle != null) {
			basicSeries.dashStyle = customSeries.dashStyle;
		}
		if ( typeof (customSeries.dataLabels) != "undefined" && customSeries.dataLabels != null) {

			if ( typeof (customSeries.dataLabels.align) != "undefined" && customSeries.dataLabels.align != null) {
				basicSeries.dataLabels.align = customSeries.dataLabels.align;
			}
			if ( typeof (customSeries.dataLabels.allowOverlap) != "undefined" && customSeries.dataLabels.allowOverlap != null) {
				basicSeries.dataLabels.allowOverlap = customSeries.dataLabels.allowOverlap;
			}
			if ( typeof (customSeries.dataLabels.backgroundColor) != "undefined" && customSeries.dataLabels.backgroundColor != null) {
				basicSeries.dataLabels.backgroundColor = customSeries.dataLabels.backgroundColor;
			}
			if ( typeof (customSeries.dataLabels.borderColor) != "undefined" && customSeries.dataLabels.borderColor != null) {
				basicSeries.dataLabels.borderColor = customSeries.dataLabels.borderColor;
			}
			if ( typeof (customSeries.dataLabels.borderRadius) != "undefined" && customSeries.dataLabels.borderRadius != null) {
				basicSeries.dataLabels.borderRadius = customSeries.dataLabels.borderRadius;
			}
			if ( typeof (customSeries.dataLabels.borderWidth) != "undefined" && customSeries.dataLabels.borderWidth != null) {
				basicSeries.dataLabels.borderWidth = customSeries.dataLabels.borderWidth;
			}
			if ( typeof (customSeries.dataLabels.color) != "undefined" && customSeries.dataLabels.color != null) {
				basicSeries.dataLabels.color = customSeries.dataLabels.color;
			}
			if ( typeof (customSeries.dataLabels.crop) != "undefined" && customSeries.dataLabels.crop != null) {
				basicSeries.dataLabels.crop = customSeries.dataLabels.crop;
			}
			if ( typeof (customSeries.dataLabels.defer) != "undefined" && customSeries.dataLabels.defer != null) {
				basicSeries.dataLabels.defer = customSeries.dataLabels.defer;
			}
			if ( typeof (customSeries.dataLabels.enabled) != "undefined" && customSeries.dataLabels.enabled != null) {
				basicSeries.dataLabels.enabled = customSeries.dataLabels.enabled;
			}
			if ( typeof (customSeries.dataLabels.format) != "undefined" && customSeries.dataLabels.format != null) {
				basicSeries.dataLabels.format = customSeries.dataLabels.format;
			}
			if ( typeof (customSeries.dataLabels.formatter) != "undefined" && customSeries.dataLabels.formatter != null) {
				basicSeries.dataLabels.formatter = customSeries.dataLabels.formatter;
			}
			if ( typeof (customSeries.dataLabels.inside) != "undefined" && customSeries.dataLabels.inside != null) {
				basicSeries.dataLabels.inside = customSeries.dataLabels.inside;
			}
			if ( typeof (customSeries.dataLabels.overflow) != "undefined" && customSeries.dataLabels.overflow != null) {
				basicSeries.dataLabels.overflow = customSeries.dataLabels.overflow;
			}
			if ( typeof (customSeries.dataLabels.padding) != "undefined" && customSeries.dataLabels.padding != null) {
				basicSeries.dataLabels.padding = customSeries.dataLabels.padding;
			}
			if ( typeof (customSeries.dataLabels.reserveSpace) != "undefined" && customSeries.dataLabels.reserveSpace != null) {
				basicSeries.dataLabels.reserveSpace = customSeries.dataLabels.reserveSpace;
			}
			if ( typeof (customSeries.dataLabels.rotation) != "undefined" && customSeries.dataLabels.rotation != null) {
				basicSeries.dataLabels.rotation = customSeries.dataLabels.rotation;
			}
			if ( typeof (customSeries.dataLabels.shadow) != "undefined" && customSeries.dataLabels.shadow != null) {
				basicSeries.dataLabels.shadow = customSeries.dataLabels.shadow;
			}
			if ( typeof (customSeries.dataLabels.shape) != "undefined" && customSeries.dataLabels.shape != null) {
				basicSeries.dataLabels.shape = customSeries.dataLabels.shape;
			}
			if ( typeof (customSeries.dataLabels.style) != "undefined" && customSeries.dataLabels.style != null) {
				basicSeries.dataLabels.style = customSeries.dataLabels.style;
			}
			if ( typeof (customSeries.dataLabels.useHTML) != "undefined" && customSeries.dataLabels.useHTML != null) {
				basicSeries.dataLabels.useHTML = customSeries.dataLabels.useHTML;
			}
			if ( typeof (customSeries.dataLabels.verticalAlign) != "undefined" && customSeries.dataLabels.verticalAlign != null) {
				basicSeries.dataLabels.verticalAlign = customSeries.dataLabels.verticalAlign;
			}
			if ( typeof (customSeries.dataLabels.xHigh) != "undefined" && customSeries.dataLabels.xHigh != null) {
				basicSeries.dataLabels.xHigh = customSeries.dataLabels.xHigh;
			}
			if ( typeof (customSeries.dataLabels.xLow) != "undefined" && customSeries.dataLabels.xLow != null) {
				basicSeries.dataLabels.xLow = customSeries.dataLabels.xLow;
			}
			if ( typeof (customSeries.dataLabels.yHigh) != "undefined" && customSeries.dataLabels.yHigh != null) {
				basicSeries.dataLabels.yHigh = customSeries.dataLabels.yHigh;
			}
			if ( typeof (customSeries.dataLabels.yLow) != "undefined" && customSeries.dataLabels.yLow != null) {
				basicSeries.dataLabels.yLow = customSeries.dataLabels.yLow;
			}
			if ( typeof (customSeries.dataLabels.x) != "undefined" && customSeries.dataLabels.x != null) {
				basicSeries.dataLabels.x = customSeries.dataLabels.x;
			}
			if ( typeof (customSeries.dataLabels.y) != "undefined" && customSeries.dataLabels.y != null) {
				basicSeries.dataLabels.y = customSeries.dataLabels.y;
			}
			if ( typeof (customSeries.dataLabels.zIndex) != "undefined" && customSeries.dataLabels.zIndex != null) {
				basicSeries.dataLabels.zIndex = customSeries.dataLabels.zIndex;
			}
		}
		if ( typeof (customSeries.depth) != "undefined" && customSeries.depth != null) {
			basicSeries.depth = customSeries.depth;
		}
		if ( typeof (customSeries.edgeColor) != "undefined" && customSeries.edgeColor != null) {
			basicSeries.edgeColor = customSeries.edgeColor;
		}
		if ( typeof (customSeries.edgeWidth) != "undefined" && customSeries.edgeWidth != null) {
			basicSeries.edgeWidth = customSeries.edgeWidth;
		}
		if ( typeof (customSeries.displayNegative) != "undefined" && customSeries.displayNegative != null) {
			basicSeries.displayNegative = customSeries.displayNegative;
		}
		if ( typeof (customSeries.enableMouseTracking) != "undefined" && customSeries.enableMouseTracking != null) {
			basicSeries.enableMouseTracking = customSeries.enableMouseTracking;
		}
		if ( typeof (customSeries.events) != "undefined" && customSeries.events != null) {
			basicSeries.events = customSeries.events;
		}
		if ( typeof (customSeries.fillColor) != "undefined" && customSeries.fillColor != null) {
			basicSeries.fillColor = customSeries.fillColor;
		}
		if ( typeof (customSeries.fillOpacity) != "undefined" && customSeries.fillOpacity != null) {
			basicSeries.fillOpacity = customSeries.fillOpacity;
		}
		if ( typeof (customSeries.getExtremesFromAll) != "undefined" && customSeries.getExtremesFromAll != null) {
			basicSeries.getExtremesFromAll = customSeries.getExtremesFromAll;
		}
		if ( typeof (customSeries.groupPadding) != "undefined" && customSeries.groupPadding != null) {
			basicSeries.groupPadding = customSeries.groupPadding;
		}
		if ( typeof (customSeries.groupZPadding) != "undefined" && customSeries.groupZPadding != null) {
			basicSeries.groupZPadding = customSeries.groupZPadding;
		}
		if ( typeof (customSeries.grouping) != "undefined" && customSeries.grouping != null) {
			basicSeries.grouping = customSeries.grouping;
		}
		if ( typeof (customSeries.keys) != "undefined" && customSeries.keys != null) {
			basicSeries.keys = customSeries.keys;
		}
		if ( typeof (customSeries.lineColor) != "undefined" && customSeries.lineColor != null) {
			basicSeries.lineColor = customSeries.lineColor;
		}
		if ( typeof (customSeries.lineWidth) != "undefined" && customSeries.lineWidth != null) {
			basicSeries.lineWidth = customSeries.lineWidth;
		}
		if ( typeof (customSeries.linecap) != "undefined" && customSeries.linecap != null) {
			basicSeries.linecap = customSeries.linecap;
		}
		if ( typeof (customSeries.linkedTo) != "undefined" && customSeries.linkedTo != null) {
			basicSeries.linkedTo = customSeries.linkedTo;
		}
		if ( typeof (customSeries.marker) != "undefined" && customSeries.marker != null) {
			if ( typeof (customSeries.marker.enabled) != "undefined" && customSeries.marker.enabled != null) {
				basicSeries.marker.enabled = customSeries.marker.enabled;
			}
			if ( typeof (customSeries.marker.fillColor) != "undefined" && customSeries.marker.fillColor != null) {
				basicSeries.marker.fillColor = customSeries.marker.fillColor;
			}
			if ( typeof (customSeries.marker.height) != "undefined" && customSeries.marker.height != null) {
				basicSeries.marker.height = customSeries.marker.height;
			}
			if ( typeof (customSeries.marker.lineColor) != "undefined" && customSeries.marker.lineColor != null) {
				basicSeries.marker.lineColor = customSeries.marker.lineColor;
			}
			if ( typeof (customSeries.marker.lineWidth) != "undefined" && customSeries.marker.lineWidth != null) {
				basicSeries.marker.lineWidth = customSeries.marker.lineWidth;
			}
			if ( typeof (customSeries.marker.radius) != "undefined" && customSeries.marker.radius != null) {
				basicSeries.marker.radius = customSeries.marker.radius;
			}
			if ( typeof (customSeries.marker.states) != "undefined" && customSeries.marker.states != null) {
				if ( typeof (customSeries.marker.states.hover) != "undefined" && customSeries.marker.states.hover != null) {
					if ( typeof (customSeries.marker.states.hover.enabled) != "undefined" && customSeries.marker.states.hover.enabled != null) {
						basicSeries.marker.states.hover.enabled = customSeries.marker.states.hover.enabled;
					}
					if ( typeof (customSeries.marker.states.hover.fillColor) != "undefined" && customSeries.marker.states.hover.fillColor != null) {
						basicSeries.marker.states.hover.fillColor = customSeries.marker.states.hover.fillColor;
					}
					if ( typeof (customSeries.marker.states.hover.lineColor) != "undefined" && customSeries.marker.states.hover.lineColor != null) {
						basicSeries.marker.states.hover.lineColor = customSeries.marker.states.hover.lineColor;
					}
					if ( typeof (customSeries.marker.states.hover.lineWidth) != "undefined" && customSeries.marker.states.hover.lineWidth != null) {
						basicSeries.marker.states.hover.lineWidth = customSeries.marker.states.hover.lineWidth;
					}
					if ( typeof (customSeries.marker.states.hover.lineWidthPlus) != "undefined" && customSeries.marker.states.hover.lineWidthPlus != null) {
						basicSeries.marker.states.hover.lineWidthPlus = customSeries.marker.states.hover.lineWidthPlus;
					}
					if ( typeof (customSeries.marker.states.hover.radius) != "undefined" && customSeries.marker.states.hover.radius != null) {
						basicSeries.marker.states.hover.radius = customSeries.marker.states.hover.radius;
					}
					if ( typeof (customSeries.marker.states.hover.radiusPlus) != "undefined" && customSeries.marker.states.hover.radiusPlus != null) {
						basicSeries.marker.states.hover.radiusPlus = customSeries.marker.states.hover.radiusPlus;
					}
				}
				if ( typeof (customSeries.marker.states.select) != "undefined" && customSeries.marker.states.select != null) {
					if ( typeof (customSeries.marker.states.select.enabled) != "undefined" && customSeries.marker.states.select.enabled != null) {
						basicSeries.marker.states.select.enabled = customSeries.marker.states.select.enabled;
					}
					if ( typeof (customSeries.marker.states.select.fillColor) != "undefined" && customSeries.marker.states.select.fillColor != null) {
						basicSeries.marker.states.select.fillColor = customSeries.marker.states.select.fillColor;
					}
					if ( typeof (customSeries.marker.states.select.lineColor) != "undefined" && customSeries.marker.states.select.lineColor != null) {
						basicSeries.marker.states.select.lineColor = customSeries.marker.states.select.lineColor;
					}
					if ( typeof (customSeries.marker.states.select.lineWidth) != "undefined" && customSeries.marker.states.select.lineWidth != null) {
						basicSeries.marker.states.select.lineWidth = customSeries.marker.states.select.lineWidth;
					}
					if ( typeof (customSeries.marker.states.select.lineWidthPlus) != "undefined" && customSeries.marker.states.select.lineWidthPlus != null) {
						basicSeries.marker.states.select.lineWidthPlus = customSeries.marker.states.select.lineWidthPlus;
					}
					if ( typeof (customSeries.marker.states.select.radius) != "undefined" && customSeries.marker.states.select.radius != null) {
						basicSeries.marker.states.select.radius = customSeries.marker.states.select.radius;
					}
					if ( typeof (customSeries.marker.states.select.radiusPlus) != "undefined" && customSeries.marker.states.select.radiusPlus != null) {
						basicSeries.marker.states.select.radiusPlus = customSeries.marker.states.select.radiusPlus;
					}
				}
			}
			if ( typeof (customSeries.marker.symbol) != "undefined" && customSeries.marker.symbol != null) {
				basicSeries.marker.symbol = customSeries.marker.symbol;
			}
			if ( typeof (customSeries.marker.width) != "undefined" && customSeries.marker.width != null) {
				basicSeries.marker.width = customSeries.marker.width;
			}
		}
		if ( typeof (customSeries.medianColor) != "undefined" && customSeries.medianColor != null) {
			basicSeries.medianColor = customSeries.medianColor;
		}
		if ( typeof (customSeries.medianWidth) != "undefined" && customSeries.medianWidth != null) {
			basicSeries.medianWidth = customSeries.medianWidth;
		}
		if ( typeof (customSeries.maxPointWidth) != "undefined" && customSeries.maxPointWidth != null) {
			basicSeries.maxPointWidth = customSeries.maxPointWidth;
		}
		if ( typeof (customSeries.minPointLength) != "undefined" && customSeries.minPointLength != null) {
			basicSeries.minPointLength = customSeries.minPointLength;
		}
		if ( typeof (customSeries.maxSize) != "undefined" && customSeries.maxSize != null) {
			basicSeries.maxSize = customSeries.maxSize;
		}
		if ( typeof (customSeries.minSize) != "undefined" && customSeries.minSize != null) {
			basicSeries.minSize = customSeries.minSize;
		}
		if ( typeof (customSeries.neckHeight) != "undefined" && customSeries.neckHeight != null) {
			basicSeries.neckHeight = customSeries.neckHeight;
		}
		if ( typeof (customSeries.neckWidth) != "undefined" && customSeries.neckWidth != null) {
			basicSeries.neckWidth = customSeries.neckWidth;
		}
		if ( typeof (customSeries.negativeColor) != "undefined" && customSeries.negativeColor != null) {
			basicSeries.negativeColor = customSeries.negativeColor;
		}
		if ( typeof (customSeries.negativeFillColor) != "undefined" && customSeries.negativeFillColor != null) {
			basicSeries.negativeFillColor = customSeries.negativeFillColor;
		}
		if ( typeof (customSeries.point) != "undefined" && customSeries.point != null) {
			if ( typeof (customSeries.point.events) != "undefined" && customSeries.point.events != null) {
				basicSeries.point.events = customSeries.point.events;
			}
		}
		if ( typeof (customSeries.pointInterval) != "undefined" && customSeries.pointInterval != null) {
			basicSeries.pointInterval = customSeries.pointInterval;
		}
		if ( typeof (customSeries.pointIntervalUnit) != "undefined" && customSeries.pointIntervalUnit != null) {
			basicSeries.pointIntervalUnit = customSeries.pointIntervalUnit;
		}
		if ( typeof (customSeries.pointPlacement) != "undefined" && customSeries.pointPlacement != null) {
			basicSeries.pointPlacement = customSeries.pointPlacement;
		}
		if ( typeof (customSeries.pointPadding) != "undefined" && customSeries.pointPadding != null) {
			basicSeries.pointPadding = customSeries.pointPadding;
		}
		if ( typeof (customSeries.pointPlacement) != "undefined" && customSeries.pointPlacement != null) {
			basicSeries.pointPlacement = customSeries.pointPlacement;
		}
		if ( typeof (customSeries.pointRange) != "undefined" && customSeries.pointRange != null) {
			basicSeries.pointRange = customSeries.pointRange;
		}
		if ( typeof (customSeries.pointWidth) != "undefined" && customSeries.pointWidth != null) {
			basicSeries.pointWidth = customSeries.pointWidth;
		}
		if ( typeof (customSeries.pointStart) != "undefined" && customSeries.pointStart != null) {
			basicSeries.pointStart = customSeries.pointStart;
		}
		if ( typeof (customSeries.reversed) != "undefined" && customSeries.reversed != null) {
			basicSeries.reversed = customSeries.reversed;
		}
		if ( typeof (customSeries.selected) != "undefined" && customSeries.selected != null) {
			basicSeries.selected = customSeries.selected;
		}
		if ( typeof (customSeries.shadow) != "undefined" && customSeries.shadow != null) {
			basicSeries.shadow = customSeries.shadow;
		}
		if ( typeof (customSeries.showCheckbox) != "undefined" && customSeries.showCheckbox != null) {
			basicSeries.showCheckbox = customSeries.showCheckbox;
		}
		if ( typeof (customSeries.showInLegend) != "undefined" && customSeries.showInLegend != null) {
			basicSeries.showInLegend = customSeries.showInLegend;
		}
		if ( typeof (customSeries.slicedOffset) != "undefined" && customSeries.slicedOffset != null) {
			basicSeries.slicedOffset = customSeries.slicedOffset;
		}
		if ( typeof (customSeries.sizeBy) != "undefined" && customSeries.sizeBy != null) {
			basicSeries.sizeBy = customSeries.sizeBy;
		}
		if ( typeof (customSeries.sizeByAbsoluteValue) != "undefined" && customSeries.sizeByAbsoluteValue != null) {
			basicSeries.sizeByAbsoluteValue = customSeries.sizeByAbsoluteValue;
		}
		if ( typeof (customSeries.softThreshold) != "undefined" && customSeries.softThreshold != null) {
			basicSeries.softThreshold = customSeries.softThreshold;
		}
		if ( typeof (customSeries.stacking) != "undefined" && customSeries.stacking != null) {
			basicSeries.stacking = customSeries.stacking;
		}
		if ( typeof (customSeries.states) != "undefined" && customSeries.states != null) {
			if ( typeof (customSeries.states.hover) != "undefined" && customSeries.states.hover != null) {
				if ( typeof (customSeries.states.hover.borderColor) != "undefined" && customSeries.states.hover.borderColor != null) {
					basicSeries.states.hover.borderColor = customSeries.states.hover.borderColor;
				}
				if ( typeof (customSeries.states.hover.brightness) != "undefined" && customSeries.states.hover.brightness != null) {
					basicSeries.states.hover.brightness = customSeries.states.hover.brightness;
				}
				if ( typeof (customSeries.states.hover.color) != "undefined" && customSeries.states.hover.color != null) {
					basicSeries.states.hover.color = customSeries.states.hover.color;
				}
				if ( typeof (customSeries.states.hover.enabled) != "undefined" && customSeries.states.hover.enabled != null) {
					basicSeries.states.hover.enabled = customSeries.states.hover.enabled;
				}
				if ( typeof (customSeries.states.hover.halo) != "undefined" && customSeries.states.hover.halo != null) {
					if ( typeof (customSeries.states.hover.halo.attributes) != "undefined" && customSeries.states.hover.halo.attributes != null) {
						basicSeries.states.hover.halo.attributes = customSeries.states.hover.halo.attributes;
					}
					if ( typeof (customSeries.states.hover.halo.opacity) != "undefined" && customSeries.states.hover.halo.opacity != null) {
						basicSeries.states.hover.halo.opacity = customSeries.states.hover.halo.opacity;
					}
					if ( typeof (customSeries.states.hover.halo.size) != "undefined" && customSeries.states.hover.halo.size != null) {
						basicSeries.states.hover.halo.size = customSeries.states.hover.halo.size;
					}
				}
				if ( typeof (customSeries.states.hover.lineWidth) != "undefined" && customSeries.states.hover.lineWidth != null) {
					basicSeries.states.hover.lineWidth = customSeries.states.hover.lineWidth;
				}
				if ( typeof (customSeries.states.hover.lineWidthPlus) != "undefined" && customSeries.states.hover.lineWidthPlus != null) {
					basicSeries.states.hover.lineWidthPlus = customSeries.states.hover.lineWidthPlus;
				}
				if ( typeof (customSeries.states.hover.marker) != "undefined" && customSeries.states.hover.marker != null) {
					if ( typeof (customSeries.states.hover.marker.enabled) != "undefined" && customSeries.states.hover.marker.enabled != null) {
						basicSeries.states.hover.marker.enabled = customSeries.states.hover.marker.enabled;
					}
					if ( typeof (customSeries.states.hover.marker.fillColor) != "undefined" && customSeries.states.hover.marker.fillColor != null) {
						basicSeries.states.hover.marker.fillColor = customSeries.states.hover.marker.fillColor;
					}
					if ( typeof (customSeries.states.hover.marker.height) != "undefined" && customSeries.states.hover.marker.height != null) {
						basicSeries.states.hover.marker.height = customSeries.states.hover.marker.height;
					}
					if ( typeof (customSeries.states.hover.marker.lineColor) != "undefined" && customSeries.states.hover.marker.lineColor != null) {
						basicSeries.states.hover.marker.lineColor = customSeries.states.hover.marker.lineColor;
					}
					if ( typeof (customSeries.states.hover.marker.lineWidth) != "undefined" && customSeries.states.hover.marker.lineWidth != null) {
						basicSeries.states.hover.marker.lineWidth = customSeries.states.hover.marker.lineWidth;
					}
					if ( typeof (customSeries.states.hover.marker.radius) != "undefined" && customSeries.states.hover.marker.radius != null) {
						basicSeries.marker.radius = customSeries.marker.radius;
					}
					if ( typeof (customSeries.states.hover.marker.states) != "undefined" && customSeries.states.hover.marker.states != null) {
						if ( typeof (customSeries.states.hover.marker.states.hover) != "undefined" && customSeries.states.hover.marker.states.hover != null) {
							if ( typeof (customSeries.states.hover.marker.states.hover.enabled) != "undefined" && customSeries.states.hover.marker.states.hover.enabled != null) {
								basicSeries.states.hover.marker.states.hover.enabled = customSeries.states.hover.marker.states.hover.enabled;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.fillColor) != "undefined" && customSeries.states.hover.marker.states.hover.fillColor != null) {
								basicSeries.states.hover.marker.states.hover.fillColor = customSeries.states.hover.marker.states.hover.fillColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineColor) != "undefined" && customSeries.states.hover.marker.states.hover.lineColor != null) {
								basicSeries.states.hover.marker.states.hover.lineColor = customSeries.states.hover.marker.states.hover.lineColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineWidth) != "undefined" && customSeries.states.hover.marker.states.hover.lineWidth != null) {
								basicSeries.states.hover.marker.states.hover.lineWidth = customSeries.states.hover.marker.states.hover.lineWidth;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineWidthPlus) != "undefined" && customSeries.states.hover.marker.states.hover.lineWidthPlus != null) {
								basicSeries.states.hover.marker.states.hover.lineWidthPlus = customSeries.states.hover.marker.states.hover.lineWidthPlus;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.radius) != "undefined" && customSeries.states.hover.marker.states.hover.radius != null) {
								basicSeries.states.hover.marker.states.hover.radius = customSeries.states.hover.marker.states.hover.radius;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.radiusPlus) != "undefined" && customSeries.states.hover.marker.states.hover.radiusPlus != null) {
								basicSeries.states.hover.marker.states.hover.radiusPlus = customSeries.states.hover.marker.states.hover.radiusPlus;
							}
						}
						if ( typeof (customSeries.states.hover.marker.states.select) != "undefined" && customSeries.states.hover.marker.states.select != null) {
							if ( typeof (customSeries.states.hover.marker.states.select.enabled) != "undefined" && customSeries.states.hover.marker.states.select.enabled != null) {
								basicSeries.states.hover.marker.states.select.enabled = customSeries.states.hover.marker.states.select.enabled;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.fillColor) != "undefined" && customSeries.states.hover.marker.states.select.fillColor != null) {
								basicSeries.states.hover.marker.states.select.fillColor = customSeries.states.hover.marker.states.select.fillColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineColor) != "undefined" && customSeries.states.hover.marker.states.select.lineColor != null) {
								basicSeries.states.hover.marker.states.select.lineColor = customSeries.states.hover.marker.states.select.lineColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineWidth) != "undefined" && customSeries.states.hover.marker.states.select.lineWidth != null) {
								basicSeries.states.hover.marker.states.select.lineWidth = customSeries.states.hover.marker.states.select.lineWidth;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineWidthPlus) != "undefined" && customSeries.states.hover.marker.states.select.lineWidthPlus != null) {
								basicSeries.states.hover.marker.states.select.lineWidthPlus = customSeries.states.hover.marker.states.select.lineWidthPlus;
							}
							if ( typeof (customSeries.marker.states.select.radius) != "undefined" && customSeries.marker.states.select.radius != null) {
								basicSeries.marker.states.select.radius = customSeries.marker.states.select.radius;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.radiusPlus) != "undefined" && customSeries.states.hover.marker.states.select.radiusPlus != null) {
								basicSeries.states.hover.marker.states.select.radiusPlus = customSeries.states.hover.marker.states.select.radiusPlus;
							}
						}
					}
					if ( typeof (customSeries.states.hover.marker.symbol) != "undefined" && customSeries.states.hover.marker.symbol != null) {
						basicSeries.states.hover.marker.symbol = customSeries.states.hover.marker.symbol;
					}
					if ( typeof (customSeries.states.hover.marker.width) != "undefined" && customSeries.states.hover.marker.width != null) {
						basicSeries.states.hover.marker.width = customSeries.states.hover.marker.width;
					}
				}
			}
		}
		if ( typeof (customSeries.stemColor) != "undefined" && customSeries.stemColor != null) {
			basicSeries.softThstemColorreshold = customSeries.stemColor;
		}
		if ( typeof (customSeries.stemDashStyle) != "undefined" && customSeries.stemDashStyle != null) {
			basicSeries.stemDashStyle = customSeries.stemDashStyle;
		}
		if ( typeof (customSeries.stemWidth) != "undefined" && customSeries.stemWidth != null) {
			basicSeries.stemWidth = customSeries.stemWidth;
		}
		if ( typeof (customSeries.step) != "undefined" && customSeries.step != null) {
			basicSeries.step = customSeries.step;
		}
		if ( typeof (customSeries.stickyTracking) != "undefined" && customSeries.stickyTracking != null) {
			basicSeries.stickyTracking = customSeries.stickyTracking;
		}
		if ( typeof (customSeries.threshold) != "undefined" && customSeries.threshold != null) {
			basicSeries.threshold = customSeries.threshold;
		}
		if ( typeof (customSeries.trackByArea) != "undefined" && customSeries.trackByArea != null) {
			basicSeries.trackByArea = customSeries.trackByArea;
		}
		if ( typeof (customSeries.turboThreshold) != "undefined" && customSeries.turboThreshold != null) {
			basicSeries.turboThreshold = customSeries.turboThreshold;
		}
		if ( typeof (customSeries.upColor) != "undefined" && customSeries.upColor != null) {
			basicSeries.upColor = customSeries.upColor;
		}
		if ( typeof (customSeries.visible) != "undefined" && customSeries.visible != null) {
			basicSeries.visible = customSeries.visible;
		}
		if ( typeof (customSeries.whiskerColor) != "undefined" && customSeries.whiskerColor != null) {
			basicSeries.whiskerColor = customSeries.whiskerColor;
		}
		if ( typeof (customSeries.whiskerLength) != "undefined" && customSeries.whiskerLength != null) {
			basicSeries.whiskerLength = customSeries.whiskerLength;
		}
		if ( typeof (customSeries.whiskerWidth) != "undefined" && customSeries.whiskerWidth != null) {
			basicSeries.whiskerWidth = customSeries.whiskerWidth;
		}
		if ( typeof (customSeries.zMax) != "undefined" && customSeries.zMax != null) {
			basicSeries.zMax = customSeries.zMax;
		}
		if ( typeof (customSeries.zMin) != "undefined" && customSeries.zMin != null) {
			basicSeries.zMin = customSeries.zMin;
		}
		if ( typeof (customSeries.zThreshold) != "undefined" && customSeries.zThreshold != null) {
			basicSeries.zThreshold = customSeries.zThreshold;
		}
		if ( typeof (customSeries.zoneAxis) != "undefined" && customSeries.zoneAxis != null) {
			basicSeries.zoneAxis = customSeries.zoneAxis;
		}
		if ( typeof (customSeries.zThreshold) != "undefined" && customSeries.zThreshold != null) {
			basicSeries.zThreshold = customSeries.zThreshold;
		}
	}
	return basicSeries;
}

function settingSeries(customSeries, zones) {
	var basicSeries = {
		allowPointSelect : true, //是否允许使用鼠标选中数据点
		animation : true, //是否动画显示数据点数据
		animationLimit : null, //
		borderColor : "#F00",
		borderRadius : 0,
		borderWidth : 10,
		color : null, //数据点显示数据颜色包括数据提示框的颜色
		colorByPoint : false,
		colors : null,
		connectEnds : true,
		connectNulls : false,
		cropThreshold : 300, //
		cursor : 'pointer', //当鼠标移上数据点时鼠标的样式
		dashStyle : "Solid", //数据点显示样式  Solid   dot
		dataLabels : {
			align : "center", //数据点上显示文本的水平对齐方式  left    center   right
			allowOverlap : true, //是否允许数据点上显示文本重叠
			backgroundColor : null, //数据点上显示文本的背景色
			borderColor : null, //数据点上显示文本边框颜色
			borderRadius : 0, //数据点上显示文本边框圆角
			borderWidth : 0, //数据点上显示文本边框宽度
			color : null, //数据点上显示文本颜色
			crop : true, //是否隐藏超出绘图区域外的数据点上显示文本
			defer : true, //是否当初始化完毕之后显示数据点文本
			enabled : true, //是否显示数据点上文本
			format : '{point.country}', //数据点上显示文本设置
			formatter : null, //数据点上显示文本格式化函数
			inside : true, //数据点上显示文本位置  true 在图表数据点显示符号上显示  false 在图表数据点显示符号外显示
			overflow : "justify", //是否允许数据点上显示文本溢出  false  justify
			padding : 0, //数据点上显示文本内边距
			reserveSpace : true, //是否为数据点上显示文本预留空间
			rotation : 0, //数据点上显示文本旋角
			shadow : false, //数据点上显示文本是否有阴影效果
			shape : "square",
			style : {
				"color" : "contrast",
				"fontSize" : "11px",
				"fontWeight" : "bold",
				"textShadow" : "0 0 6px contrast, 0 0 3px contrast"
			}, //数据点上显示文本样式
			useHTML : false, //当数据点上显示文本包含HTML标签，是否解析HTML标签
			verticalAlign : null, //数据点上显示文本垂直对齐方式   top   center  bottom
			xHigh : 0,
			xLow : 0,
			yHigh : -6,
			yLow : 16,
			x : 0, //数据点上显示文本在X轴方向上的偏移量
			y : 0, //数据点上显示文本在Y轴方向上的偏移量
			zIndex : 6//数据点上显示文本的ZIndex值
		},
		depth : 25,
		edgeColor : null,
		edgeWidth : 1,
		displayNegative : true,
		enableMouseTracking : true, //数据点上鼠标跟随事件是否启用  主要控制数据提示框等等鼠标跟随事件
		//events:undefined,//数据点上事件    {	afterAnimate: 动画加载完成之后事件,checkboxClick: 选择框被点击事件,click: 点击事件,	hide: 数据点隐藏事件,legendItemClick: 图例项点击事件,	mouseOut: 鼠标移出事件,mouseOver: 鼠标移上事件,show: 数据展示事件	}
		fillColor : null,
		fillOpacity : 0.75,
		getExtremesFromAll : true,
		groupPadding : 0.2,
		groupZPadding : 1,
		grouping : true,
		keys : null,
		lineColor : null, //数据显示的线颜色
		lineWidth : 0, //数据显示的线宽
		linecap : "round",
		linkedTo : null,
		marker : {//数据点标记 即数据以点的形式显示
			enabled : true, //是否启用数据点标记
			fillColor : null, //数据点标记的填充颜色
			height : null, //数据点标记高度
			lineColor : "#FFF", //数据点标记外边框颜色
			lineWidth : 0, //数据点标记外边框宽度
			radius : 4, //数据点标记点半径
			states : {
				hover : {
					enabled : true, //是否启用数据点标记鼠标移入样式
					fillColor : null, //鼠标移入数据点标记的填充颜色
					lineColor : "#FFF", //鼠标移入数据点标记外边框颜色
					lineWidth : 0, //鼠标移入数据点标记外边框宽度
					lineWidthPlus : 1, //鼠标移入数据点标记外边框额外增加宽度
					radius : null, //鼠标移入数据点标记半径
					radiusPlus : 2//鼠标移入数据点标记半径额外增加宽度
				},
				select : {
					enabled : true, //是否启用数据点标记选中样式
					fillColor : null, //选中数据点标记的填充颜色
					lineColor : "#000", //选中数据点标记外边框颜色
					lineWidth : 0, //选中数据点标记外边框宽度
					lineWidthPlus : 0, //鼠标移入数据点标记外边框额外增加宽度
					radius : null, //选中数据点标记半径
					radiusPlus : 0//鼠标移入数据点标记半径额外增加宽度
				}
			},
			symbol : null, //数据点标记符号   circle square diamond triangle triangle-down
			width : null//数据点标记宽度
		},
		medianColor : null,
		medianWidth : 2,
		maxPointWidth : null,
		minPointLength : 0,
		maxSize : "20%", //数据点最大尺寸
		minSize : "8", //数据点最小尺寸
		neckHeight : '25%',
		neckWidth : '30%',
		negativeColor : '#FFF',
		negativeFillColor : null,
		point : {
			// events: null//点事件{	click: 点击事件,mouseOut: 鼠标移出事件,mouseOver: 鼠标移入事件,remove: 移出事件,select: 选中事件,unselect: 取消选中事件,update: 更新事件}
		},
		pointInterval : 1,
		pointIntervalUnit : null,
		pointPlacement : null,
		pointPadding : 0.1,
		pointPlacement : null,
		pointRange : null,
		pointWidth : null,
		pointStart : 0,
		reversed : false,
		selected : false, //图例项是否显示复选框是否被选中
		shadow : false, //数据点是否显示阴影效果
		showCheckbox : false, //图例项是否显示复选框
		showInLegend : true, //是否显示图例
		slicedOffset : 10,
		sizeBy : "area",
		sizeByAbsoluteValue : false,
		softThreshold : true,
		stacking : null,
		states : {
			hover : {
				borderColor : null,
				brightness : 0.1,
				color : null,
				enabled : true, //数据点是否启用鼠标移入样式
				halo : {
					attributes : {
						'stroke-width' : 1,
						stroke : '#cccccc',
						fill : '#E0E0E0',
						r : 0,
						states : {
							hover : {
								fill : '#bada55'
							},
							select : {
								stroke : '#039',
								fill : '#bada55'
							}
						}
					}, //数据点外围光环（晕）属性设置
					opacity : 0.25, //数据点外围光环透明度
					size : 5//数据点外围光环大小
				},
				lineWidth : 0, //数据点外边框宽度
				lineWidthPlus : 1, //数据点外边框额外增加宽度
				marker : {
					enabled : null, //是否启用数据点标记
					fillColor : null, //数据点标记的填充颜色
					height : null, //数据点标记高度
					lineColor : "#FFF", //数据点标记外边框颜色
					lineWidth : 0, //数据点标记外边框宽度
					radius : 4, //数据点标记点半径
					states : {
						hover : {
							enabled : true, //是否启用数据点标记鼠标移入样式
							fillColor : null, //鼠标移入数据点标记的填充颜色
							lineColor : "#FFF", //鼠标移入数据点标记外边框颜色
							lineWidth : 0, //鼠标移入数据点标记外边框宽度
							lineWidthPlus : 1, //鼠标移入数据点标记外边框额外增加宽度
							radius : null, //鼠标移入数据点标记半径
							radiusPlus : 2//鼠标移入数据点标记半径额外增加宽度
						},
						select : {
							enabled : true, //是否启用数据点标记选中样式
							fillColor : null, //选中数据点标记的填充颜色
							lineColor : "#000", //选中数据点标记外边框颜色
							lineWidth : 0, //选中数据点标记外边框宽度
							lineWidthPlus : 0, //鼠标移入数据点标记外边框额外增加宽度
							radius : null, //选中数据点标记半径
							radiusPlus : 0//鼠标移入数据点标记半径额外增加宽度
						}
					},
					symbol : null, //数据点标记符号   circle square diamond triangle triangle-down
					width : null//数据点标记宽度
				}
			}
		},
		stemColor : null,
		stemDashStyle : "Solid",
		stemWidth : null,
		step : "false",
		stickyTracking : false, //鼠标事件的黏连追踪 为true时显示提示文本框，false不显示
		threshold : 50, //Y轴的值，作为区域图的基本值 以区分高于阈值或低于阈值
		trackByArea : false,
		turboThreshold : 1000,
		upColor : null,
		visible : true, //是否显示数据
		whiskerColor : null,
		whiskerLength : '50%',
		whiskerWidth : 2,
		zMax : null, //Z最大值
		zMin : null, //Z最小值
		zThreshold : 0, //Z阀值
		zoneAxis : "y",
		zones : zones
	};
	if ( typeof (customSeries) != "undefined" && customSeries != null) {
		if ( typeof (customSeries.allowPointSelect) != "undefined" && customSeries.allowPointSelect != null) {
			basicSeries.allowPointSelect = customSeries.allowPointSelect;
		}
		if ( typeof (customSeries.animation) != "undefined" && customSeries.animation != null) {
			basicSeries.animation = customSeries.animation;
		}
		if ( typeof (customSeries.animationLimit) != "undefined" && customSeries.animationLimit != null) {
			basicSeries.animationLimit = customSeries.animationLimit;
		}
		if ( typeof (customSeries.borderColor) != "undefined" && customSeries.borderColor != null) {
			basicSeries.borderColor = customSeries.borderColor;
		}
		if ( typeof (customSeries.borderRadius) != "undefined" && customSeries.borderRadius != null) {
			basicSeries.borderRadius = customSeries.borderRadius;
		}
		if ( typeof (customSeries.borderWidth) != "undefined" && customSeries.borderWidth != null) {
			basicSeries.borderWidth = customSeries.borderWidth;
		}
		if ( typeof (customSeries.color) != "undefined" && customSeries.color != null) {
			basicSeries.color = customSeries.color;
		}
		if ( typeof (customSeries.colorByPoint) != "undefined" && customSeries.colorByPoint != null) {
			basicSeries.colorByPoint = customSeries.colorByPoint;
		}
		if ( typeof (customSeries.colors) != "undefined" && customSeries.colors != null) {
			basicSeries.colors = customSeries.colors;
		}
		if ( typeof (customSeries.connectEnds) != "undefined" && customSeries.connectEnds != null) {
			basicSeries.connectEnds = customSeries.connectEnds;
		}
		if ( typeof (customSeries.connectNulls) != "undefined" && customSeries.connectNulls != null) {
			basicSeries.connectNulls = customSeries.connectNulls;
		}
		if ( typeof (customSeries.cropThreshold) != "undefined" && customSeries.cropThreshold != null) {
			basicSeries.cropThreshold = customSeries.cropThreshold;
		}
		if ( typeof (customSeries.cursor) != "undefined" && customSeries.cursor != null) {
			basicSeries.cursor = customSeries.cursor;
		}
		if ( typeof (customSeries.dashStyle) != "undefined" && customSeries.dashStyle != null) {
			basicSeries.dashStyle = customSeries.dashStyle;
		}
		if ( typeof (customSeries.dataLabels) != "undefined" && customSeries.dataLabels != null) {

			if ( typeof (customSeries.dataLabels.align) != "undefined" && customSeries.dataLabels.align != null) {
				basicSeries.dataLabels.align = customSeries.dataLabels.align;
			}
			if ( typeof (customSeries.dataLabels.allowOverlap) != "undefined" && customSeries.dataLabels.allowOverlap != null) {
				basicSeries.dataLabels.allowOverlap = customSeries.dataLabels.allowOverlap;
			}
			if ( typeof (customSeries.dataLabels.backgroundColor) != "undefined" && customSeries.dataLabels.backgroundColor != null) {
				basicSeries.dataLabels.backgroundColor = customSeries.dataLabels.backgroundColor;
			}
			if ( typeof (customSeries.dataLabels.borderColor) != "undefined" && customSeries.dataLabels.borderColor != null) {
				basicSeries.dataLabels.borderColor = customSeries.dataLabels.borderColor;
			}
			if ( typeof (customSeries.dataLabels.borderRadius) != "undefined" && customSeries.dataLabels.borderRadius != null) {
				basicSeries.dataLabels.borderRadius = customSeries.dataLabels.borderRadius;
			}
			if ( typeof (customSeries.dataLabels.borderWidth) != "undefined" && customSeries.dataLabels.borderWidth != null) {
				basicSeries.dataLabels.borderWidth = customSeries.dataLabels.borderWidth;
			}
			if ( typeof (customSeries.dataLabels.color) != "undefined" && customSeries.dataLabels.color != null) {
				basicSeries.dataLabels.color = customSeries.dataLabels.color;
			}
			if ( typeof (customSeries.dataLabels.crop) != "undefined" && customSeries.dataLabels.crop != null) {
				basicSeries.dataLabels.crop = customSeries.dataLabels.crop;
			}
			if ( typeof (customSeries.dataLabels.defer) != "undefined" && customSeries.dataLabels.defer != null) {
				basicSeries.dataLabels.defer = customSeries.dataLabels.defer;
			}
			if ( typeof (customSeries.dataLabels.enabled) != "undefined" && customSeries.dataLabels.enabled != null) {
				basicSeries.dataLabels.enabled = customSeries.dataLabels.enabled;
			}
			if ( typeof (customSeries.dataLabels.format) != "undefined" && customSeries.dataLabels.format != null) {
				basicSeries.dataLabels.format = customSeries.dataLabels.format;
			}
			if ( typeof (customSeries.dataLabels.formatter) != "undefined" && customSeries.dataLabels.formatter != null) {
				basicSeries.dataLabels.formatter = customSeries.dataLabels.formatter;
			}
			if ( typeof (customSeries.dataLabels.inside) != "undefined" && customSeries.dataLabels.inside != null) {
				basicSeries.dataLabels.inside = customSeries.dataLabels.inside;
			}
			if ( typeof (customSeries.dataLabels.overflow) != "undefined" && customSeries.dataLabels.overflow != null) {
				basicSeries.dataLabels.overflow = customSeries.dataLabels.overflow;
			}
			if ( typeof (customSeries.dataLabels.padding) != "undefined" && customSeries.dataLabels.padding != null) {
				basicSeries.dataLabels.padding = customSeries.dataLabels.padding;
			}
			if ( typeof (customSeries.dataLabels.reserveSpace) != "undefined" && customSeries.dataLabels.reserveSpace != null) {
				basicSeries.dataLabels.reserveSpace = customSeries.dataLabels.reserveSpace;
			}
			if ( typeof (customSeries.dataLabels.rotation) != "undefined" && customSeries.dataLabels.rotation != null) {
				basicSeries.dataLabels.rotation = customSeries.dataLabels.rotation;
			}
			if ( typeof (customSeries.dataLabels.shadow) != "undefined" && customSeries.dataLabels.shadow != null) {
				basicSeries.dataLabels.shadow = customSeries.dataLabels.shadow;
			}
			if ( typeof (customSeries.dataLabels.shape) != "undefined" && customSeries.dataLabels.shape != null) {
				basicSeries.dataLabels.shape = customSeries.dataLabels.shape;
			}
			if ( typeof (customSeries.dataLabels.style) != "undefined" && customSeries.dataLabels.style != null) {
				basicSeries.dataLabels.style = customSeries.dataLabels.style;
			}
			if ( typeof (customSeries.dataLabels.useHTML) != "undefined" && customSeries.dataLabels.useHTML != null) {
				basicSeries.dataLabels.useHTML = customSeries.dataLabels.useHTML;
			}
			if ( typeof (customSeries.dataLabels.verticalAlign) != "undefined" && customSeries.dataLabels.verticalAlign != null) {
				basicSeries.dataLabels.verticalAlign = customSeries.dataLabels.verticalAlign;
			}
			if ( typeof (customSeries.dataLabels.xHigh) != "undefined" && customSeries.dataLabels.xHigh != null) {
				basicSeries.dataLabels.xHigh = customSeries.dataLabels.xHigh;
			}
			if ( typeof (customSeries.dataLabels.xLow) != "undefined" && customSeries.dataLabels.xLow != null) {
				basicSeries.dataLabels.xLow = customSeries.dataLabels.xLow;
			}
			if ( typeof (customSeries.dataLabels.yHigh) != "undefined" && customSeries.dataLabels.yHigh != null) {
				basicSeries.dataLabels.yHigh = customSeries.dataLabels.yHigh;
			}
			if ( typeof (customSeries.dataLabels.yLow) != "undefined" && customSeries.dataLabels.yLow != null) {
				basicSeries.dataLabels.yLow = customSeries.dataLabels.yLow;
			}
			if ( typeof (customSeries.dataLabels.x) != "undefined" && customSeries.dataLabels.x != null) {
				basicSeries.dataLabels.x = customSeries.dataLabels.x;
			}
			if ( typeof (customSeries.dataLabels.y) != "undefined" && customSeries.dataLabels.y != null) {
				basicSeries.dataLabels.y = customSeries.dataLabels.y;
			}
			if ( typeof (customSeries.dataLabels.zIndex) != "undefined" && customSeries.dataLabels.zIndex != null) {
				basicSeries.dataLabels.zIndex = customSeries.dataLabels.zIndex;
			}
		}
		if ( typeof (customSeries.depth) != "undefined" && customSeries.depth != null) {
			basicSeries.depth = customSeries.depth;
		}
		if ( typeof (customSeries.edgeColor) != "undefined" && customSeries.edgeColor != null) {
			basicSeries.edgeColor = customSeries.edgeColor;
		}
		if ( typeof (customSeries.edgeWidth) != "undefined" && customSeries.edgeWidth != null) {
			basicSeries.edgeWidth = customSeries.edgeWidth;
		}
		if ( typeof (customSeries.displayNegative) != "undefined" && customSeries.displayNegative != null) {
			basicSeries.displayNegative = customSeries.displayNegative;
		}
		if ( typeof (customSeries.enableMouseTracking) != "undefined" && customSeries.enableMouseTracking != null) {
			basicSeries.enableMouseTracking = customSeries.enableMouseTracking;
		}
		if ( typeof (customSeries.events) != "undefined" && customSeries.events != null) {
			basicSeries.events = customSeries.events;
		}
		if ( typeof (customSeries.fillColor) != "undefined" && customSeries.fillColor != null) {
			basicSeries.fillColor = customSeries.fillColor;
		}
		if ( typeof (customSeries.fillOpacity) != "undefined" && customSeries.fillOpacity != null) {
			basicSeries.fillOpacity = customSeries.fillOpacity;
		}
		if ( typeof (customSeries.getExtremesFromAll) != "undefined" && customSeries.getExtremesFromAll != null) {
			basicSeries.getExtremesFromAll = customSeries.getExtremesFromAll;
		}
		if ( typeof (customSeries.groupPadding) != "undefined" && customSeries.groupPadding != null) {
			basicSeries.groupPadding = customSeries.groupPadding;
		}
		if ( typeof (customSeries.groupZPadding) != "undefined" && customSeries.groupZPadding != null) {
			basicSeries.groupZPadding = customSeries.groupZPadding;
		}
		if ( typeof (customSeries.grouping) != "undefined" && customSeries.grouping != null) {
			basicSeries.grouping = customSeries.grouping;
		}
		if ( typeof (customSeries.keys) != "undefined" && customSeries.keys != null) {
			basicSeries.keys = customSeries.keys;
		}
		if ( typeof (customSeries.lineColor) != "undefined" && customSeries.lineColor != null) {
			basicSeries.lineColor = customSeries.lineColor;
		}
		if ( typeof (customSeries.lineWidth) != "undefined" && customSeries.lineWidth != null) {
			basicSeries.lineWidth = customSeries.lineWidth;
		}
		if ( typeof (customSeries.linecap) != "undefined" && customSeries.linecap != null) {
			basicSeries.linecap = customSeries.linecap;
		}
		if ( typeof (customSeries.linkedTo) != "undefined" && customSeries.linkedTo != null) {
			basicSeries.linkedTo = customSeries.linkedTo;
		}
		if ( typeof (customSeries.marker) != "undefined" && customSeries.marker != null) {
			if ( typeof (customSeries.marker.enabled) != "undefined" && customSeries.marker.enabled != null) {
				basicSeries.marker.enabled = customSeries.marker.enabled;
			}
			if ( typeof (customSeries.marker.fillColor) != "undefined" && customSeries.marker.fillColor != null) {
				basicSeries.marker.fillColor = customSeries.marker.fillColor;
			}
			if ( typeof (customSeries.marker.height) != "undefined" && customSeries.marker.height != null) {
				basicSeries.marker.height = customSeries.marker.height;
			}
			if ( typeof (customSeries.marker.lineColor) != "undefined" && customSeries.marker.lineColor != null) {
				basicSeries.marker.lineColor = customSeries.marker.lineColor;
			}
			if ( typeof (customSeries.marker.lineWidth) != "undefined" && customSeries.marker.lineWidth != null) {
				basicSeries.marker.lineWidth = customSeries.marker.lineWidth;
			}
			if ( typeof (customSeries.marker.radius) != "undefined" && customSeries.marker.radius != null) {
				basicSeries.marker.radius = customSeries.marker.radius;
			}
			if ( typeof (customSeries.marker.states) != "undefined" && customSeries.marker.states != null) {
				if ( typeof (customSeries.marker.states.hover) != "undefined" && customSeries.marker.states.hover != null) {
					if ( typeof (customSeries.marker.states.hover.enabled) != "undefined" && customSeries.marker.states.hover.enabled != null) {
						basicSeries.marker.states.hover.enabled = customSeries.marker.states.hover.enabled;
					}
					if ( typeof (customSeries.marker.states.hover.fillColor) != "undefined" && customSeries.marker.states.hover.fillColor != null) {
						basicSeries.marker.states.hover.fillColor = customSeries.marker.states.hover.fillColor;
					}
					if ( typeof (customSeries.marker.states.hover.lineColor) != "undefined" && customSeries.marker.states.hover.lineColor != null) {
						basicSeries.marker.states.hover.lineColor = customSeries.marker.states.hover.lineColor;
					}
					if ( typeof (customSeries.marker.states.hover.lineWidth) != "undefined" && customSeries.marker.states.hover.lineWidth != null) {
						basicSeries.marker.states.hover.lineWidth = customSeries.marker.states.hover.lineWidth;
					}
					if ( typeof (customSeries.marker.states.hover.lineWidthPlus) != "undefined" && customSeries.marker.states.hover.lineWidthPlus != null) {
						basicSeries.marker.states.hover.lineWidthPlus = customSeries.marker.states.hover.lineWidthPlus;
					}
					if ( typeof (customSeries.marker.states.hover.radius) != "undefined" && customSeries.marker.states.hover.radius != null) {
						basicSeries.marker.states.hover.radius = customSeries.marker.states.hover.radius;
					}
					if ( typeof (customSeries.marker.states.hover.radiusPlus) != "undefined" && customSeries.marker.states.hover.radiusPlus != null) {
						basicSeries.marker.states.hover.radiusPlus = customSeries.marker.states.hover.radiusPlus;
					}
				}
				if ( typeof (customSeries.marker.states.select) != "undefined" && customSeries.marker.states.select != null) {
					if ( typeof (customSeries.marker.states.select.enabled) != "undefined" && customSeries.marker.states.select.enabled != null) {
						basicSeries.marker.states.select.enabled = customSeries.marker.states.select.enabled;
					}
					if ( typeof (customSeries.marker.states.select.fillColor) != "undefined" && customSeries.marker.states.select.fillColor != null) {
						basicSeries.marker.states.select.fillColor = customSeries.marker.states.select.fillColor;
					}
					if ( typeof (customSeries.marker.states.select.lineColor) != "undefined" && customSeries.marker.states.select.lineColor != null) {
						basicSeries.marker.states.select.lineColor = customSeries.marker.states.select.lineColor;
					}
					if ( typeof (customSeries.marker.states.select.lineWidth) != "undefined" && customSeries.marker.states.select.lineWidth != null) {
						basicSeries.marker.states.select.lineWidth = customSeries.marker.states.select.lineWidth;
					}
					if ( typeof (customSeries.marker.states.select.lineWidthPlus) != "undefined" && customSeries.marker.states.select.lineWidthPlus != null) {
						basicSeries.marker.states.select.lineWidthPlus = customSeries.marker.states.select.lineWidthPlus;
					}
					if ( typeof (customSeries.marker.states.select.radius) != "undefined" && customSeries.marker.states.select.radius != null) {
						basicSeries.marker.states.select.radius = customSeries.marker.states.select.radius;
					}
					if ( typeof (customSeries.marker.states.select.radiusPlus) != "undefined" && customSeries.marker.states.select.radiusPlus != null) {
						basicSeries.marker.states.select.radiusPlus = customSeries.marker.states.select.radiusPlus;
					}
				}
			}
			if ( typeof (customSeries.marker.symbol) != "undefined" && customSeries.marker.symbol != null) {
				basicSeries.marker.symbol = customSeries.marker.symbol;
			}
			if ( typeof (customSeries.marker.width) != "undefined" && customSeries.marker.width != null) {
				basicSeries.marker.width = customSeries.marker.width;
			}
		}
		if ( typeof (customSeries.medianColor) != "undefined" && customSeries.medianColor != null) {
			basicSeries.medianColor = customSeries.medianColor;
		}
		if ( typeof (customSeries.medianWidth) != "undefined" && customSeries.medianWidth != null) {
			basicSeries.medianWidth = customSeries.medianWidth;
		}
		if ( typeof (customSeries.maxPointWidth) != "undefined" && customSeries.maxPointWidth != null) {
			basicSeries.maxPointWidth = customSeries.maxPointWidth;
		}
		if ( typeof (customSeries.minPointLength) != "undefined" && customSeries.minPointLength != null) {
			basicSeries.minPointLength = customSeries.minPointLength;
		}
		if ( typeof (customSeries.maxSize) != "undefined" && customSeries.maxSize != null) {
			basicSeries.maxSize = customSeries.maxSize;
		}
		if ( typeof (customSeries.minSize) != "undefined" && customSeries.minSize != null) {
			basicSeries.minSize = customSeries.minSize;
		}
		if ( typeof (customSeries.neckHeight) != "undefined" && customSeries.neckHeight != null) {
			basicSeries.neckHeight = customSeries.neckHeight;
		}
		if ( typeof (customSeries.neckWidth) != "undefined" && customSeries.neckWidth != null) {
			basicSeries.neckWidth = customSeries.neckWidth;
		}
		if ( typeof (customSeries.negativeColor) != "undefined" && customSeries.negativeColor != null) {
			basicSeries.negativeColor = customSeries.negativeColor;
		}
		if ( typeof (customSeries.negativeFillColor) != "undefined" && customSeries.negativeFillColor != null) {
			basicSeries.negativeFillColor = customSeries.negativeFillColor;
		}
		if ( typeof (customSeries.point) != "undefined" && customSeries.point != null) {
			if ( typeof (customSeries.point.events) != "undefined" && customSeries.point.events != null) {
				basicSeries.point.events = customSeries.point.events;
			}
		}
		if ( typeof (customSeries.pointInterval) != "undefined" && customSeries.pointInterval != null) {
			basicSeries.pointInterval = customSeries.pointInterval;
		}
		if ( typeof (customSeries.pointIntervalUnit) != "undefined" && customSeries.pointIntervalUnit != null) {
			basicSeries.pointIntervalUnit = customSeries.pointIntervalUnit;
		}
		if ( typeof (customSeries.pointPlacement) != "undefined" && customSeries.pointPlacement != null) {
			basicSeries.pointPlacement = customSeries.pointPlacement;
		}
		if ( typeof (customSeries.pointPadding) != "undefined" && customSeries.pointPadding != null) {
			basicSeries.pointPadding = customSeries.pointPadding;
		}
		if ( typeof (customSeries.pointPlacement) != "undefined" && customSeries.pointPlacement != null) {
			basicSeries.pointPlacement = customSeries.pointPlacement;
		}
		if ( typeof (customSeries.pointRange) != "undefined" && customSeries.pointRange != null) {
			basicSeries.pointRange = customSeries.pointRange;
		}
		if ( typeof (customSeries.pointWidth) != "undefined" && customSeries.pointWidth != null) {
			basicSeries.pointWidth = customSeries.pointWidth;
		}
		if ( typeof (customSeries.pointStart) != "undefined" && customSeries.pointStart != null) {
			basicSeries.pointStart = customSeries.pointStart;
		}
		if ( typeof (customSeries.reversed) != "undefined" && customSeries.reversed != null) {
			basicSeries.reversed = customSeries.reversed;
		}
		if ( typeof (customSeries.selected) != "undefined" && customSeries.selected != null) {
			basicSeries.selected = customSeries.selected;
		}
		if ( typeof (customSeries.shadow) != "undefined" && customSeries.shadow != null) {
			basicSeries.shadow = customSeries.shadow;
		}
		if ( typeof (customSeries.showCheckbox) != "undefined" && customSeries.showCheckbox != null) {
			basicSeries.showCheckbox = customSeries.showCheckbox;
		}
		if ( typeof (customSeries.showInLegend) != "undefined" && customSeries.showInLegend != null) {
			basicSeries.showInLegend = customSeries.showInLegend;
		}
		if ( typeof (customSeries.slicedOffset) != "undefined" && customSeries.slicedOffset != null) {
			basicSeries.slicedOffset = customSeries.slicedOffset;
		}
		if ( typeof (customSeries.sizeBy) != "undefined" && customSeries.sizeBy != null) {
			basicSeries.sizeBy = customSeries.sizeBy;
		}
		if ( typeof (customSeries.sizeByAbsoluteValue) != "undefined" && customSeries.sizeByAbsoluteValue != null) {
			basicSeries.sizeByAbsoluteValue = customSeries.sizeByAbsoluteValue;
		}
		if ( typeof (customSeries.softThreshold) != "undefined" && customSeries.softThreshold != null) {
			basicSeries.softThreshold = customSeries.softThreshold;
		}
		if ( typeof (customSeries.stacking) != "undefined" && customSeries.stacking != null) {
			basicSeries.stacking = customSeries.stacking;
		}
		if ( typeof (customSeries.states) != "undefined" && customSeries.states != null) {
			if ( typeof (customSeries.states.hover) != "undefined" && customSeries.states.hover != null) {
				if ( typeof (customSeries.states.hover.borderColor) != "undefined" && customSeries.states.hover.borderColor != null) {
					basicSeries.states.hover.borderColor = customSeries.states.hover.borderColor;
				}
				if ( typeof (customSeries.states.hover.brightness) != "undefined" && customSeries.states.hover.brightness != null) {
					basicSeries.states.hover.brightness = customSeries.states.hover.brightness;
				}
				if ( typeof (customSeries.states.hover.color) != "undefined" && customSeries.states.hover.color != null) {
					basicSeries.states.hover.color = customSeries.states.hover.color;
				}
				if ( typeof (customSeries.states.hover.enabled) != "undefined" && customSeries.states.hover.enabled != null) {
					basicSeries.states.hover.enabled = customSeries.states.hover.enabled;
				}
				if ( typeof (customSeries.states.hover.halo) != "undefined" && customSeries.states.hover.halo != null) {
					if ( typeof (customSeries.states.hover.halo.attributes) != "undefined" && customSeries.states.hover.halo.attributes != null) {
						basicSeries.states.hover.halo.attributes = customSeries.states.hover.halo.attributes;
					}
					if ( typeof (customSeries.states.hover.halo.opacity) != "undefined" && customSeries.states.hover.halo.opacity != null) {
						basicSeries.states.hover.halo.opacity = customSeries.states.hover.halo.opacity;
					}
					if ( typeof (customSeries.states.hover.halo.size) != "undefined" && customSeries.states.hover.halo.size != null) {
						basicSeries.states.hover.halo.size = customSeries.states.hover.halo.size;
					}
				}
				if ( typeof (customSeries.states.hover.lineWidth) != "undefined" && customSeries.states.hover.lineWidth != null) {
					basicSeries.states.hover.lineWidth = customSeries.states.hover.lineWidth;
				}
				if ( typeof (customSeries.states.hover.lineWidthPlus) != "undefined" && customSeries.states.hover.lineWidthPlus != null) {
					basicSeries.states.hover.lineWidthPlus = customSeries.states.hover.lineWidthPlus;
				}
				if ( typeof (customSeries.states.hover.marker) != "undefined" && customSeries.states.hover.marker != null) {
					if ( typeof (customSeries.states.hover.marker.enabled) != "undefined" && customSeries.states.hover.marker.enabled != null) {
						basicSeries.states.hover.marker.enabled = customSeries.states.hover.marker.enabled;
					}
					if ( typeof (customSeries.states.hover.marker.fillColor) != "undefined" && customSeries.states.hover.marker.fillColor != null) {
						basicSeries.states.hover.marker.fillColor = customSeries.states.hover.marker.fillColor;
					}
					if ( typeof (customSeries.states.hover.marker.height) != "undefined" && customSeries.states.hover.marker.height != null) {
						basicSeries.states.hover.marker.height = customSeries.states.hover.marker.height;
					}
					if ( typeof (customSeries.states.hover.marker.lineColor) != "undefined" && customSeries.states.hover.marker.lineColor != null) {
						basicSeries.states.hover.marker.lineColor = customSeries.states.hover.marker.lineColor;
					}
					if ( typeof (customSeries.states.hover.marker.lineWidth) != "undefined" && customSeries.states.hover.marker.lineWidth != null) {
						basicSeries.states.hover.marker.lineWidth = customSeries.states.hover.marker.lineWidth;
					}
					if ( typeof (customSeries.states.hover.marker.radius) != "undefined" && customSeries.states.hover.marker.radius != null) {
						basicSeries.marker.radius = customSeries.marker.radius;
					}
					if ( typeof (customSeries.states.hover.marker.states) != "undefined" && customSeries.states.hover.marker.states != null) {
						if ( typeof (customSeries.states.hover.marker.states.hover) != "undefined" && customSeries.states.hover.marker.states.hover != null) {
							if ( typeof (customSeries.states.hover.marker.states.hover.enabled) != "undefined" && customSeries.states.hover.marker.states.hover.enabled != null) {
								basicSeries.states.hover.marker.states.hover.enabled = customSeries.states.hover.marker.states.hover.enabled;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.fillColor) != "undefined" && customSeries.states.hover.marker.states.hover.fillColor != null) {
								basicSeries.states.hover.marker.states.hover.fillColor = customSeries.states.hover.marker.states.hover.fillColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineColor) != "undefined" && customSeries.states.hover.marker.states.hover.lineColor != null) {
								basicSeries.states.hover.marker.states.hover.lineColor = customSeries.states.hover.marker.states.hover.lineColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineWidth) != "undefined" && customSeries.states.hover.marker.states.hover.lineWidth != null) {
								basicSeries.states.hover.marker.states.hover.lineWidth = customSeries.states.hover.marker.states.hover.lineWidth;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.lineWidthPlus) != "undefined" && customSeries.states.hover.marker.states.hover.lineWidthPlus != null) {
								basicSeries.states.hover.marker.states.hover.lineWidthPlus = customSeries.states.hover.marker.states.hover.lineWidthPlus;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.radius) != "undefined" && customSeries.states.hover.marker.states.hover.radius != null) {
								basicSeries.states.hover.marker.states.hover.radius = customSeries.states.hover.marker.states.hover.radius;
							}
							if ( typeof (customSeries.states.hover.marker.states.hover.radiusPlus) != "undefined" && customSeries.states.hover.marker.states.hover.radiusPlus != null) {
								basicSeries.states.hover.marker.states.hover.radiusPlus = customSeries.states.hover.marker.states.hover.radiusPlus;
							}
						}
						if ( typeof (customSeries.states.hover.marker.states.select) != "undefined" && customSeries.states.hover.marker.states.select != null) {
							if ( typeof (customSeries.states.hover.marker.states.select.enabled) != "undefined" && customSeries.states.hover.marker.states.select.enabled != null) {
								basicSeries.states.hover.marker.states.select.enabled = customSeries.states.hover.marker.states.select.enabled;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.fillColor) != "undefined" && customSeries.states.hover.marker.states.select.fillColor != null) {
								basicSeries.states.hover.marker.states.select.fillColor = customSeries.states.hover.marker.states.select.fillColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineColor) != "undefined" && customSeries.states.hover.marker.states.select.lineColor != null) {
								basicSeries.states.hover.marker.states.select.lineColor = customSeries.states.hover.marker.states.select.lineColor;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineWidth) != "undefined" && customSeries.states.hover.marker.states.select.lineWidth != null) {
								basicSeries.states.hover.marker.states.select.lineWidth = customSeries.states.hover.marker.states.select.lineWidth;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.lineWidthPlus) != "undefined" && customSeries.states.hover.marker.states.select.lineWidthPlus != null) {
								basicSeries.states.hover.marker.states.select.lineWidthPlus = customSeries.states.hover.marker.states.select.lineWidthPlus;
							}
							if ( typeof (customSeries.marker.states.select.radius) != "undefined" && customSeries.marker.states.select.radius != null) {
								basicSeries.marker.states.select.radius = customSeries.marker.states.select.radius;
							}
							if ( typeof (customSeries.states.hover.marker.states.select.radiusPlus) != "undefined" && customSeries.states.hover.marker.states.select.radiusPlus != null) {
								basicSeries.states.hover.marker.states.select.radiusPlus = customSeries.states.hover.marker.states.select.radiusPlus;
							}
						}
					}
					if ( typeof (customSeries.states.hover.marker.symbol) != "undefined" && customSeries.states.hover.marker.symbol != null) {
						basicSeries.states.hover.marker.symbol = customSeries.states.hover.marker.symbol;
					}
					if ( typeof (customSeries.states.hover.marker.width) != "undefined" && customSeries.states.hover.marker.width != null) {
						basicSeries.states.hover.marker.width = customSeries.states.hover.marker.width;
					}
				}
			}
		}
		if ( typeof (customSeries.stemColor) != "undefined" && customSeries.stemColor != null) {
			basicSeries.softThstemColorreshold = customSeries.stemColor;
		}
		if ( typeof (customSeries.stemDashStyle) != "undefined" && customSeries.stemDashStyle != null) {
			basicSeries.stemDashStyle = customSeries.stemDashStyle;
		}
		if ( typeof (customSeries.stemWidth) != "undefined" && customSeries.stemWidth != null) {
			basicSeries.stemWidth = customSeries.stemWidth;
		}
		if ( typeof (customSeries.step) != "undefined" && customSeries.step != null) {
			basicSeries.step = customSeries.step;
		}
		if ( typeof (customSeries.stickyTracking) != "undefined" && customSeries.stickyTracking != null) {
			basicSeries.stickyTracking = customSeries.stickyTracking;
		}
		if ( typeof (customSeries.threshold) != "undefined" && customSeries.threshold != null) {
			basicSeries.threshold = customSeries.threshold;
		}
		if ( typeof (customSeries.trackByArea) != "undefined" && customSeries.trackByArea != null) {
			basicSeries.trackByArea = customSeries.trackByArea;
		}
		if ( typeof (customSeries.turboThreshold) != "undefined" && customSeries.turboThreshold != null) {
			basicSeries.turboThreshold = customSeries.turboThreshold;
		}
		if ( typeof (customSeries.upColor) != "undefined" && customSeries.upColor != null) {
			basicSeries.upColor = customSeries.upColor;
		}
		if ( typeof (customSeries.visible) != "undefined" && customSeries.visible != null) {
			basicSeries.visible = customSeries.visible;
		}
		if ( typeof (customSeries.whiskerColor) != "undefined" && customSeries.whiskerColor != null) {
			basicSeries.whiskerColor = customSeries.whiskerColor;
		}
		if ( typeof (customSeries.whiskerLength) != "undefined" && customSeries.whiskerLength != null) {
			basicSeries.whiskerLength = customSeries.whiskerLength;
		}
		if ( typeof (customSeries.whiskerWidth) != "undefined" && customSeries.whiskerWidth != null) {
			basicSeries.whiskerWidth = customSeries.whiskerWidth;
		}
		if ( typeof (customSeries.zMax) != "undefined" && customSeries.zMax != null) {
			basicSeries.zMax = customSeries.zMax;
		}
		if ( typeof (customSeries.zMin) != "undefined" && customSeries.zMin != null) {
			basicSeries.zMin = customSeries.zMin;
		}
		if ( typeof (customSeries.zThreshold) != "undefined" && customSeries.zThreshold != null) {
			basicSeries.zThreshold = customSeries.zThreshold;
		}
		if ( typeof (customSeries.zoneAxis) != "undefined" && customSeries.zoneAxis != null) {
			basicSeries.zoneAxis = customSeries.zoneAxis;
		}
		if ( typeof (customSeries.zThreshold) != "undefined" && customSeries.zThreshold != null) {
			basicSeries.zThreshold = customSeries.zThreshold;
		}
	}
	return basicSeries;
}

function createButton(customButton) {
	var basicButton = {
		align : "left", //按钮水平对齐方式可以是left，right，center
		backgroundColor : '#F00', //按钮背景色
		borderColor : '#F00', //按钮边框颜色
		borderRadius : 0, //按钮边框圆角
		borderWidth : 1, //按钮边框宽度
		enabled : false, //是否显示按钮
		height : 20, //按钮高度
		hoverBorderColor : '#FFF', //鼠标移上按钮边框颜色
		hoverSymbolFill : '#FFF', //鼠标移上按钮符号填充色
		hoverSymbolStroke : '#CCC', ////鼠标移上按钮符号绘制色
		menuItems : null, //按钮菜单项
		onclick : null, //按钮onclick事件
		symbol : "menu", //按钮符号
		symbolFill : "#A8BF77", //按钮符号填充色
		symbolSize : 14, //按钮符号大小
		symbolStroke : "#666", //按钮符号绘制色
		symbolStrokeWidth : 1, //按钮符号绘制宽度
		symbolX : 12.5, //按钮符号在X轴方向上的偏移量
		symbolY : 10.5, //按钮符号在Y轴方向上的偏移量
		text : null, //按钮显示文本
		theme : {
			'stroke-width' : .1,
			stroke : '#cccccc',
			fill : '#E0E0E0',
			r : 0,
			states : {
				hover : {
					fill : '#bada55'
				},
				select : {
					stroke : '#039',
					fill : '#bada55'
				}
			}
		}, //按钮主题
		verticalAlign : "top", //按钮垂直对齐方式 可以是 top，middle，bottom
		width : 24, //按钮宽度
		x : -10, //按钮在X轴方向上的偏移量
		y : 0//按钮在X轴方向上的偏移量
	};
	if ( typeof (customButton) != "undefined" && customButton != null) {

		if ( typeof (customButton.align) != "undefined" && customButton.align != null) {
			basicButton.align = customButton.align;
		}
		if ( typeof (customButton.backgroundColor) != "undefined" && customButton.backgroundColor != null) {
			basicButton.backgroundColor = customButton.backgroundColor;
		}
		if ( typeof (customButton.borderColor) != "undefined" && customButton.borderColor != null) {
			basicButton.borderColor = customButton.borderColor;
		}
		if ( typeof (customButton.borderRadius) != "undefined" && customButton.borderRadius != null) {
			basicButton.borderRadius = customButton.borderRadius;
		}
		if ( typeof (customButton.borderWidth) != "undefined" && customButton.borderWidth != null) {
			basicButton.borderWidth = customButton.borderWidth;
		}
		if ( typeof (customButton.enabled) != "undefined" && customButton.enabled != null) {
			basicButton.enabled = customButton.enabled;
		}
		if ( typeof (customButton.height) != "undefined" && customButton.height != null) {
			basicButton.height = customButton.height;
		}
		if ( typeof (customButton.hoverBorderColor) != "undefined" && customButton.hoverBorderColor != null) {
			basicButton.hoverBorderColor = customButton.hoverBorderColor;
		}
		if ( typeof (customButton.hoverSymbolFill) != "undefined" && customButton.hoverSymbolFill != null) {
			basicButton.hoverSymbolFill = customButton.hoverSymbolFill;
		}
		if ( typeof (customButton.hoverSymbolStroke) != "undefined" && customButton.hoverSymbolStroke != null) {
			basicButton.hoverSymbolStroke = customButton.hoverSymbolStroke;
		}
		if ( typeof (customButton.menuItems) != "undefined" && customButton.menuItems != null) {
			basicButton.menuItems = customButton.menuItems;
		}
		if ( typeof (customButton.onclick) != "undefined" && customButton.onclick != null) {
			basicButton.onclick = customButton.onclick;
		}
		if ( typeof (customButton.symbol) != "undefined" && customButton.symbol != null) {
			basicButton.symbol = customButton.symbol;
		}
		if ( typeof (customButton.symbolFill) != "undefined" && customButton.symbolFill != null) {
			basicButton.symbolFill = customButton.symbolFill;
		}
		if ( typeof (customButton.symbolSize) != "undefined" && customButton.symbolSize != null) {
			basicButton.symbolSize = customButton.symbolSize;
		}
		if ( typeof (customButton.symbolStroke) != "undefined" && customButton.symbolStroke != null) {
			basicButton.symbolStroke = customButton.symbolStroke;
		}
		if ( typeof (customButton.symbolStrokeWidth) != "undefined" && customButton.symbolStrokeWidth != null) {
			basicButton.symbolStrokeWidth = customButton.symbolStrokeWidth;
		}
		if ( typeof (customButton.symbolX) != "undefined" && customButton.symbolX != null) {
			basicButton.symbolX = customButton.symbolX;
		}
		if ( typeof (customButton.symbolY) != "undefined" && customButton.symbolY != null) {
			basicButton.symbolY = customButton.symbolY;
		}
		if ( typeof (customButton.text) != "undefined" && customButton.text != null) {
			basicButton.text = customButton.text;
		}
		if ( typeof (customButton.theme) != "undefined" && customButton.theme != null) {
			basicButton.theme = customButton.theme;
		}
		if ( typeof (customButton.verticalAlign) != "undefined" && customButton.verticalAlign != null) {
			basicButton.verticalAlign = customButton.verticalAlign;
		}
		if ( typeof (customButton.width) != "undefined" && customButton.width != null) {
			basicButton.width = customButton.width;
		}
		if ( typeof (customButton.x) != "undefined" && customButton.x != null) {
			basicButton.x = customButton.x;
		}
		if ( typeof (customButton.y) != "undefined" && customButton.y != null) {
			basicButton.y = customButton.y;
		}

	}
	return basicButton;
}

function initSetting(buttons, plotOptions) {
	var basicSetting = {
		/*
		 图表语言设置
		 */
		langContextButtonTitle : '图表导出菜单', //设置图表导出菜单标题
		langDecimalPoint : '.', //设置小数点
		langDownloadJPEG : '下载JPEG图片', //设置下载JPEG图片
		langDownloadPDF : '下载PDF文件', //设置下载PDF文件
		langDownloadPNG : '下载PNG文件', //设置下载PNG文件
		langDownloadSVG : '下载SVG文件', //设置下载SVG文件
		langDrillUpText : '返回 {series.name}', //设置返回文本
		langInvalidDate : '', //设置无效日期显示
		langLoading : '加载中...', //设置数据加载
		langMonths : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], //设置月份
		langNoData : '没有数据!', //设置无数据
		langNumericSymbols : ["千", "兆", "G", "T", "P", "E"], //设置数字符号
		langPrintChart : '打印图表', //设置打印图表
		langResetZoom : '恢复缩放', //设置恢复缩放
		langResetZoomTitle : '恢复图表', //设置恢复图表
		langShortMonths : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], //设置月份缩写
		langShortWeekdays : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], //设置星期缩写
		langThousandsSep : ',', //设置千位分割符
		langWeekdays : ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"], //设置星期
		/*
		 版权设置
		 */
		creditsEnabled : true, //是否显示版权信息
		creditsHref : 'http://www.baidu.com', //版权信息链接地址
		creditsPosition : {
			align : 'center',
			x : -10,
			verticalAlign : 'bottom',
			y : -5
		}, //版权信息显示位置
		creditsStyle : {
			cursor : 'pointer',
			color : '#909090',
			fontSize : '10px'
		}, //版权信息样式
		creditsText : '版权信息', //版权显示信息
		/*
		 图表整体设置
		 */
		container : 'linechart', //图表显示容器的id
		chartAlignTicks : true, //当使用多个坐标轴时，将使用最少的轴线来校准两个或多个坐标轴
		chartAnimation : true, //图表动画的更新效果,配合update()函数使用，图表初始化时，这个参数不起作用
		chartBackgroundColor : '#FFF', //图表背景色
		chartBorderRadius : 0, //图表边框圆角
		chartBorderColor : '#4572A7', //图表边框颜色
		chartBorderWidth : 0, //图表边框宽度
		chartEvents : null, //图表事件：{ click ：图表点击事件,load ：图表加载完后事件，addSeries ：图表增加序列事件，drilldown ：图表下钻事件，drillup ： 图表上钻事件，redraw ：图表重绘事件，selection ： 图表范围选择事件，afterPrint ： 图表打印前事件，beforePrint ： 图表打印后事件 }
		chartHeight : null, //图表高度
		chartIgnoreHiddenSeries : true, //点击legend时，轴及轴线是否被隐藏
		chartInverted : false, //图表坐标轴反转
		chartMargin : [null], //图表绘制区域距图表边框宽度，数组分别为上、右、下、左
		chartMarginTop : null, //图表绘制区域距图表上边框宽度
		chartMarginRight : 70, //图表绘制区域距图表右边框宽度
		chartMarginBottom : 70, //图表绘制区域距图表下边框宽度
		chartMarginLeft : 80, //图表绘制区域距图表左边框宽度
		chartPanKey : 'Shift', //平移键
		chartPanning : false, //是否启用平移，启用平移后，按住平移键既可以使用鼠标对图表进行平移操作
		chartPinchType : 'x',
		chartPlotBackgroundColor : null, //图表绘制区域背景色
		chartPlotBackgroundImage : null, //绘制区域背景图片
		chartPlotBorderColor : '#C0C0C0', //绘制区域边框颜色
		chartPlotBorderWidth : 0, //图表绘制区域边框宽度
		chartPlotShadow : false, //图表绘制区域是否先阴影
		chartPolar : false, //是否将line, spline, area，column等转化为雷达图
		chartReflow : true, //图表是否自适应浏览器宽度
		chartSelectionMarkerFill : '#FFF',
		chartShadow : true, //图表是否有阴影效果
		chartShowAxes : true, //是否显示最初的坐标轴
		chartSpacingTop : 10, //（绘图区，坐标轴标题标签，标题，副标题或legend中的顶部位置）的图表和内容上边缘之间的空间
		chartSpacingRight : 10, //（绘图区，坐标轴标题标签，标题，副标题或legend中的顶部位置）的图表和内容右边缘之间的空间
		chartSpacingBottom : 15, //（绘图区，坐标轴标题标签，标题，副标题或legend中的顶部位置）的图表和内容下边缘之间的空间
		chartSpacingLeft : 10, //（绘图区，坐标轴标题标签，标题，副标题或legend中的顶部位置）的图表和内容左边缘之间的空间
		chartStyle : {
			fontFamily : '"Lucida Grande","Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', //default font
			fontSize : '12px'
		}, //图表样式
		chartWidth : null, //图表宽度
		chartZoomType : '', //决定在什么区域，用户可以通过拖动鼠标放大。可以通过x轴放大，可以通过y轴放大，也可以通过xy轴同时放大
		chartType : 'bubble', //line表示折线型、spline表示曲线型、area表示折线区域型、areaspline表示曲线区域型、column表示柱状型、bar表示横向条状型号、pie表示饼状型、scatter表示散播型、bubble表示离散点
		/*
		 标题设置
		 */
		titleText : '图表标题', //图表标题
		titleAlign : 'center', //标题水平对齐方式,可以是left，right，center
		titleFloating : false, //标题是否浮动
		titleStyle : {
			color : '#3E576F'
		}, //标题样式
		titleUseHTML : false, //当标题包含html标签是，是否解析html标签
		titleVerticalAlign : null, //垂直对齐方式，可以是 top，middle，bottom
		titleWidthAdjust : 0,
		titleMargin : 15, //标题和图表区的间隔，当有副标题时，表示标题和副标题之间的间隔
		titleX : 0.0, //图表标题X轴偏移
		titleY : 20.0, //图表标题Y轴偏移
		/*
		 副标题设置
		 */
		subtitleText : subtitleText, //图表副副标题
		subtitleAlign : 'center', //副标题水平对齐方式,可以是left，right，center
		subtitleFloating : false, //副标题是否浮动
		subtitleStyle : {
			color : '#3E576F'
		}, //副标题样式
		subtitleUseHTML : false, //当副标题包含html标签是，是否解析html标签
		subtitleVerticalAlign : null, //垂直对齐方式，可以是 top，middle，bottom
		subtitleX : 0.0, //副标题X轴偏移
		subtitleY : 50.0, //图表副标题Y轴偏移
		/*
		 X轴设置
		 */
		xAxisAllowDecimals : true, //控制数轴是否显示小数
		xAxisAlternateGridColor : null,
		xAxisBreaksBreakSize : 0,
		xAxisBreaksFrom : 0,
		xAxisBreaksRepeat : 0,
		xAxisBreaksTo : 0,
		xAxisCategories : null, //X轴刻度控制
		xAxisCeiling : null, //X轴最大刻度值
		xAxisCrosshairColor : null, //跟随鼠标的瞄准线颜色
		xAxisCrosshairDashStyle : 'Solid', //跟随鼠标的瞄准线样式，dot:虚线 Solid:实线
		xAxisCrosshairSnap : false, //跟随鼠标的瞄准线是否是拍快照（延迟移动）
		xAxisCrosshairWidth : 0, //跟随鼠标的瞄准线宽度
		xAxisCrosshairZIndex : 2, //跟随鼠标的瞄准线ZIndx值
		xAxisDateTimeLabelFormats : null, //X轴为时间刻度时时间刻度的格式化类型，如{	millisecond: '%H:%M:%S.%L',	second: '%H:%M:%S',	minute: '%H:%M',	hour: '%H:%M',	day: '%e. %b',	week: '%e. %b',	month: '%b \'%y',	year: '%Y'}
		xAxisEvents : null, //X轴事件 { afterBreaks: undefined，afterSetExtremes: undefined，pointBreak: undefined，pointInBreak:undefined，setExtremes: undefined}
		xAxisFloor : 0, //最低的自动计算刻度值
		xAxisGridLineColor : '#D8D8D8', //图表绘制区域垂直X轴网格线颜色
		xAxisGridLineDashStyle : 'Solid', //图表绘制区域垂直X轴网格线样式，dot:虚线 Solid:实线
		xAxisGridLineWidth : 1, //图表绘制区域垂直X轴网格线宽度
		xAxisGridZIndex : 1, //图表绘制区域垂直X轴网格线ZIndex值
		xAxisId : null, //X轴ID值
		xAxisLabelsAlign : 'center', //刻度线相对刻度值的位置 可以是left，right，center
		xAxisLabelsAutoRotation : [-45], //刻度值自动旋转角度[0,-45]
		xAxisLabelsAutoRotationLimit : 80, //刻度值自动旋转角范围
		xAxisLabelsDistance : 15, //刻度值距离
		xAxisLabelsEnabled : true, //是否显示刻度值
		xAxisLabelsFormat : '{value}', //显示刻度值得格式
		xAxisLabelsFormatter : null, //格式化刻度值 function() {	   return this.value+'%';    }
		xAxisLabelsMaxStaggerLines : 5, //刻度值最大交错显示（上、下）值
		xAxisLabelsOverflow : null, //刻度值是否允许溢出 false  justify
		xAxisLabelsPadding : 5, //刻度值内边距
		xAxisLabelsReserveSpace : true, //刻度值是否预留空白
		xAxisLabelsRotation : 0, //刻度值旋转角度
		xAxisLabelsStaggerLines : null, //刻度值的交错显示（上、下）值
		xAxisLabelsStep : null, //刻度值显示步长
		xAxisLabelsStyle : {
			"color" : "#6D869F",
			"fontWeight" : "bold"
		}, //刻度值显示样式
		xAxisLabelsUseHTML : false, //当刻度值包含HTML标签是是否解析HTML标签
		xAxisLabelsX : 0, //刻度值在X轴上的偏移量
		xAxisLabelsY : null, //刻度值在Y轴上的偏移量
		xAxisLabelsZIndex : 7, //刻度值ZIndex值
		xAxisLineColor : '#C0D0E0', //X轴颜色
		xAxisLineWidth : 1, //X轴宽度
		xAxisLinkedTo : null,
		xAxisMax : null, //刻度值最大值
		xAxisMaxPadding : 0.01, //最大内边距
		xAxisMaxZoom : null, //最大 Zoom 级别
		xAxisMin : null, //刻度值最小值
		xAxisMinPadding : 0.01, //最小内边距
		xAxisMinRange : null, //最小取值范围
		xAxisMinTickInterval : 1, //刻度和刻度值显示的步长
		xAxisMinorGridLineColor : "#E0E0E0", //绘制区域副网格线颜色
		xAxisMinorGridLineDashStyle : "Solid", //绘制区域副网格线样式，dot:虚线 Solid:实线
		xAxisMinorGridLineWidth : 1, //绘制区域副网格线宽度
		xAxisMinorTickColor : "#A0A0A0", //副刻度线颜色
		xAxisMinorTickInterval : null, //副刻度线间隔
		xAxisMinorTickLength : 2, //副刻度线高度
		xAxisMinorTickPosition : 'outside', //副刻度线延伸方向  inside向绘制区域延伸  outside向外延伸
		xAxisMinorTickWidth : 0, //副刻度线宽度
		xAxisOffset : 0, //X轴距绘制区域宽度
		xAxisOpposite : false, //X轴在绘制区域的位置 true为上方 false为下方
		xAxisPlotBandsBorderColor : null, //垂直X轴基准区域边框颜色
		xAxisPlotBandsBorderWidth : 0, //垂直X轴基准区域宽度
		xAxisPlotBandsColor : null, //垂直X轴基准区域颜色
		xAxisPlotBandsEvents : null, //垂直X轴基准区域事件 { click:点击事件, mouseover:鼠标移上事件 mouseout:鼠标移出事件, mousemove:鼠标移动事件 }
		xAxisPlotBandsFrom : null, //垂直X轴基准区域开始值
		xAxisPlotBandsId : null, //垂直X轴基准区域ID
		xAxisPlotBandsTo : null, //垂直X轴基准区域结束值
		xAxisPlotBandsZIndex : null, //垂直X轴基准区域ZIndex值
		xAxisPlotBandsLabelAlign : 'center', //垂直X轴基准区域注解水平对齐方式
		xAxisPlotBandsLabelRotation : 0, //垂直X轴基准区域注解旋转角
		xAxisPlotBandsLabelStyle : null, //垂直X轴基准区域注解旋样式
		xAxisPlotBandsLabelText : 'null', //垂直X轴基准区域注解
		xAxisPlotBandsLabelTextAlign : null, //垂直X轴基准区域注解文本对齐方式
		xAxisPlotBandsLabelUseHTML : false, //如果垂直X轴基准区域注解包含HTML标签，是否解析HTML标签
		xAxisPlotBandsLabelVerticalAlign : 'middle', //垂直X轴基准区域注解垂直对齐方式 top middle bottom
		xAxisPlotBandsLabelX : null, //垂直X轴基准区域注解在X轴上的偏移量
		xAxisPlotBandsLabelY : null, //垂直X轴基准区域注解在Y轴上的偏移量
		xAxisPlotLinesValue : 0, //垂直X轴基准线位置
		xAxisPlotLineswidth : 0, //垂直X轴基准线宽度
		xAxisPlotLinesColor : null, //垂直X轴基准线颜色
		xAxisPlotLinesDashStyle : 'Solid', //垂直X轴基准线样式  dot虚线  Solid实线
		xAxisPlotLinesZIndex : 3, //垂直X轴基准线ZIndex值
		xAxisPlotLinesId : null, //垂直X轴基准线ID
		xAxisPlotLinesEvents : null, //垂直X轴基准线样式  { click:点击事件, mouseover:鼠标移上事件 mouseout:鼠标移出事件, mousemove:鼠标移动事件 }
		xAxisPlotLinesLabelAlign : 'center', //垂直X轴基准线注解水平对齐方式 left  center  right
		xAxisPlotLinesLabelRotation : 0, //垂直X轴基准线注解旋转角度
		xAxisPlotLinesLabelStyle : null, //垂直X轴基准线注解样式
		xAxisPlotLinesLabelText : null, //垂直X轴基准线注解
		xAxisPlotLinesLabelTextAlign : null, //垂直X轴基准线注解文本对齐方式  left  center  right
		xAxisPlotLinesLabelUseHTML : false, //如果垂直X轴基准线注解包含HTML标签，是否解析HTML标签
		xAxisPlotLinesLabelVerticalAlign : 'top', //垂直X轴基准线注解垂直对齐方式 top middle bottom
		xAxisPlotLinesLabelX : null, //垂直X轴基准线注解在X轴上的偏移量
		xAxisPlotLinesLabelY : null, //垂直X轴基准线注解在Y轴上的偏移量
		xAxisReversed : false, //图表反转
		xAxisShowEmpty : true, //坐标轴没有数据时是否显示轴线和标题
		xAxisShowFirstLabel : true, //是否显示开始束刻度线
		xAxisShowLastLabel : true, //显示最后个轴标签
		xAxisStartOfWeek : 1, //时间轴起始周
		xAxisStartOnTick : true, //是否显示开始束刻度线
		xAxisEndOnTick : true, //是否显示结束刻度线
		xAxisTickAmount : null, //刻度线数量
		xAxisTickColor : '#C0D0E0', //刻度线延伸
		xAxisTickInterval : null, //刻度间隔
		xAxisTickLength : 10, //刻度线高度
		xAxisTickPixelInterval : null, //刻度线间隔像素值
		xAxisTickPosition : 'outside', //刻度线延伸方向  inside向绘制区域延伸  outside向外延伸
		xAxisTickPositioner : null, //刻度线显示位置函数 function() { return {   x: 60, y: 80  }}
		xAxisTickPositions : null, //刻度线显示位置数组 [ ]
		xAxisTickWidth : 1, //刻度线宽度
		xAxisTickmarkPlacement : 'between', //刻度线对齐方式，有between和on可选
		xAxisTitleAign : 'middle', //X轴轴标水平对齐方式  low居左   middle居中    high居右
		xAxisTitleEnabled : true, //X轴轴标是否显示  true显示 false不显示
		xAxisTitleMargin : null, //X轴轴标远离X轴的距离
		xAxisTitleOffset : null, //X轴轴标靠近X轴的距离
		xAxisTitleRotation : 0, //轴轴标旋转角度
		xAxisTitleStyle : {
			"color" : "#707070",
			"fontWeight" : "bold"
		}, //X轴轴标样式
		xAxisTitleText : null, //X轴轴标
		xAxisTitleX : 0, //X轴轴标在X轴方向上的偏移量
		xAxisTitleY : null, //X轴轴标在Y轴方向上的偏移量
		xAxisType : "category", //X轴类型      inear:线性轴 logarithmic:对数轴 datetime:时间轴 category:数组轴
		xAxisUnits : null, //X轴值单位
		xAxisVisible : true, //是否显示X轴
		/*
		 Y轴设置
		 */
		yAxisAllowDecimals : true, //控制数轴是否显示小数
		yAxisAlternateGridColor : null, //垂直Y轴相隔出现纵向的颜色格栅
		yAxisBreaksBreakSize : 0,
		yAxisBreaksFrom : 0,
		yAxisBreaksRepeat : 0,
		yAxisBreaksTo : 0,
		yAxisCategories : null, //Y轴刻度控制
		yAxisCeiling : null, //Y轴最大刻度值
		yAxisCrosshairColor : null, //跟随鼠标的瞄准线颜色
		yAxisCrosshairDashStyle : 'Solid', //跟随鼠标的瞄准线样式，dot:虚线 Solid:实线
		yAxisCrosshairSnap : false, //跟随鼠标的瞄准线是否是拍快照（延迟移动）
		yAxisCrosshairWidth : 0, //跟随鼠标的瞄准线宽度
		yAxisCrosshairZIndex : 2, //跟随鼠标的瞄准线ZIndx值
		yAxisDateTimeLabelFormats : null, //Y轴为时间刻度时时间刻度的格式化类型，如{	millisecond: '%H:%M:%S.%L',	second: '%H:%M:%S',	minute: '%H:%M',	hour: '%H:%M',	day: '%e. %b',	week: '%e. %b',	month: '%b \'%y',	year: '%Y'}
		yAxisEvents : null, //Y轴事件 { afterBreaks: undefined，afterSetExtremes: undefined，pointBreak: undefined，pointInBreak:undefined，setExtremes: undefined}
		yAxisFloor : 0, //最低的自动计算刻度值
		yAxisGridLineColor : '#D8D8D8', //图表绘制区域垂直X轴网格线颜色
		yAxisGridLineDashStyle : 'Solid', //图表绘制区域垂直X轴网格线样式，dot:虚线 Solid:实线
		yAxisGridLineWidth : 1, //图表绘制区域垂直Y轴网格线宽度
		yAxisGridZIndex : 1, //图表绘制区域垂直Y轴网格线ZIndex值
		yAxisId : null, //X轴ID值
		yAxisLabelsAlign : 'center', //刻度线相对刻度值的位置 可以是left，right，center
		yAxisLabelsAutoRotation : [-45], //刻度值自动旋转角度[0,-45]
		yAxisLabelsAutoRotationLimit : 80, //刻度值自动旋转角范围
		yAxisLabelsDistance : 15, //刻度值距离
		yAxisLabelsEnabled : true, //是否显示刻度值
		yAxisLabelsFormat : '{value}', //显示刻度值得格式
		yAxisLabelsFormatter : null, //格式化刻度值 function() {	   return this.value+'%';    }
		yAxisLabelsMaxStaggerLines : 5, //刻度值最大交错显示（上、下）值
		yAxisLabelsOverflow : null, //刻度值是否允许溢出 false  justify
		yAxisLabelsPadding : 5, //刻度值内边距
		yAxisLabelsReserveSpace : true, //刻度值是否预留空白
		yAxisLabelsRotation : 0, //刻度值旋转角度
		yAxisLabelsStaggerLines : null, //刻度值的交错显示（上、下）值
		yAxisLabelsStep : null, //刻度值显示步长
		yAxisLabelsStyle : {
			"color" : "#6D869F",
			"fontWeight" : "bold"
		}, //刻度值显示样式
		yAxisLabelsUseHTML : false, //当刻度值包含HTML标签是是否解析HTML标签
		yAxisLabelsX : 0, //刻度值在X轴上的偏移量
		yAxisLabelsY : null, //刻度值在Y轴上的偏移量
		yAxisLabelsZIndex : 7, //刻度值ZIndex值
		yAxisLineColor : '#C0D0E0', //Y轴颜色
		yAxisLineWidth : 1, //Y轴宽度
		yAxisLinkedTo : null,
		yAxisMax : null, //刻度值最大值
		yAxisMaxPadding : 0.01, //最大内边距
		yAxisMaxZoom : null, //最大 Zoom 级别
		yAxisMin : null, //刻度值最小值
		yAxisMinPadding : 0.01, //最小内边距
		yAxisMinRange : null, //最小取值范围
		yAxisMinTickInterval : 1, //刻度和刻度值显示的步长
		yAxisMinorGridLineColor : "#E0E0E0", //绘制区域副网格线颜色
		yAxisMinorGridLineDashStyle : "Solid", //绘制区域副网格线样式，dot:虚线 Solid:实线
		yAxisMinorGridLineWidth : 1, //绘制区域副刻度线宽度
		yAxisMinorTickColor : "#A0A0A0", //副刻度线颜色
		yAxisMinorTickInterval : null, //副刻度线间隔
		yAxisMinorTickLength : 2, //副刻度线高度
		yAxisMinorTickPosition : 'outside', //副刻度线延伸方向  inside向绘制区域延伸  outside向外延伸
		yAxisMinorTickWidth : 0, //副刻度线宽度
		yAxisOffset : 0, //Y轴距绘制区域宽度
		yAxisOpposite : false, //Y轴在绘制区域的位置 true为上方 false为下方
		yAxisPlotBandsBorderColor : null, //垂直Y轴基准区域边框颜色
		yAxisPlotBandsBorderWidth : 0, //垂直Y轴基准区域宽度
		yAxisPlotBandsColor : null, //垂直Y轴基准区域颜色
		yAxisPlotBandsEvents : null, //垂直Y轴基准区域事件 { click:点击事件, mouseover:鼠标移上事件 mouseout:鼠标移出事件, mousemove:鼠标移动事件 }
		yAxisPlotBandsFrom : null, //垂直Y轴基准区域开始值
		yAxisPlotBandsId : null, //垂直Y轴基准区域ID
		yAxisPlotBandsTo : null, //垂直Y轴基准区域结束值
		yAxisPlotBandsZIndex : null, //垂直Y轴基准区域ZIndex值
		yAxisPlotBandsLabelAlign : 'center', //垂直Y轴基准区域注解水平对齐方式
		yAxisPlotBandsLabelRotation : 0, //垂直Y轴基准区域注解旋转角
		yAxisPlotBandsLabelStyle : null, //垂直Y轴基准区域注解旋样式
		yAxisPlotBandsLabelText : 'null', //垂直Y轴基准区域注解
		yAxisPlotBandsLabelTextAlign : null, //垂直Y轴基准区域注解文本对齐方式
		yAxisPlotBandsLabelUseHTML : false, //如果垂直Y轴基准区域注解包含HTML标签，是否解析HTML标签
		yAxisPlotBandsLabelVerticalAlign : 'middle', //垂直Y轴基准区域注解垂直对齐方式 top middle bottom
		yAxisPlotBandsLabelX : null, //垂直Y轴基准区域注解在X轴上的偏移量
		yAxisPlotBandsLabelY : null, //垂直Y轴基准区域注解在Y轴上的偏移量
		yAxisPlotLinesValue : 0, //垂直Y轴基准线位置
		yAxisPlotLineswidth : 0, //垂直Y轴基准线宽度
		yAxisPlotLinesColor : null, //垂直Y轴基准线颜色
		yAxisPlotLinesDashStyle : 'Solid', //垂直Y轴基准线样式  dot虚线  Solid实线
		yAxisPlotLinesZIndex : 3, //垂直Y轴基准线ZIndex值
		yAxisPlotLinesId : null, //垂直Y轴基准线ID
		yAxisPlotLinesEvents : null, //垂直Y轴基准线样式  { click:点击事件, mouseover:鼠标移上事件 mouseout:鼠标移出事件, mousemove:鼠标移动事件 }
		yAxisPlotLinesLabelAlign : 'center', //垂直Y轴基准线注解水平对齐方式 left  center  right
		yAxisPlotLinesLabelRotation : 0, //垂直Y轴基准线注解旋转角度
		yAxisPlotLinesLabelStyle : null, //垂直Y轴基准线注解样式
		yAxisPlotLinesLabelText : null, //垂直Y轴基准线注解
		yAxisPlotLinesLabelTextAlign : null, //垂直Y轴基准线注解文本对齐方式  left  center  right
		yAxisPlotLinesLabelUseHTML : false, //如果垂直Y轴基准线注解包含HTML标签，是否解析HTML标签
		yAxisPlotLinesLabelVerticalAlign : 'top', //垂直Y轴基准线注解垂直对齐方式 top middle bottom
		yAxisPlotLinesLabelX : null, //垂直Y轴基准线注解在X轴上的偏移量
		yAxisPlotLinesLabelY : null, //垂直Y轴基准线注解在Y轴上的偏移量
		yAxisReversed : false, //图表反转
		yAxisShowEmpty : true, //坐标轴没有数据时是否显示轴线和标题
		yAxisShowFirstLabel : true, //显示第一个轴标签
		yAxisShowLastLabel : true, //显示最后个轴标签
		yAxisStartOfWeek : 1, //时间轴起始周
		yAxisStartOnTick : true, //是否显示开始束刻度线
		yAxisEndOnTick : true, //是否显示结束刻度线
		yAxisTickAmount : null, //刻度线数量
		yAxisTickColor : '#C0D0E0', //刻度线颜色
		yAxisTickInterval : null, //刻度间隔
		yAxisTickLength : 10, //刻度线高度
		yAxisTickPixelInterval : null, //刻度线间隔像素值
		yAxisTickPosition : 'outside', //刻度线延伸方向  inside向绘制区域延伸  outside向外延伸
		yAxisTickPositioner : null, //刻度线显示位置函数 function() { return {   x: 60, y: 80  }}
		yAxisTickPositions : null, //刻度线显示位置数组 [ ]
		yAxisTickWidth : 1, //刻度线宽度
		yAxisTickmarkPlacement : 'between', //刻度线对齐方式，有between和on可选
		yAxisTitleAign : 'middle', //Y轴轴标水平对齐方式  low居左   middle居中    high居右
		yAxisTitleEnabled : true, //Y轴轴标是否显示  true显示 false不显示
		yAxisTitleMargin : null, //Y轴轴标远离X轴的距离
		yAxisTitleOffset : null, //Y轴轴标靠近X轴的距离
		yAxisTitleRotation : -90, //轴轴标旋转角度
		yAxisTitleStyle : {
			"color" : "#707070",
			"fontWeight" : "bold"
		}, //X轴轴标样式
		yAxisTitleText : null, //X轴轴标
		yAxisTitleX : 0, //Y轴轴标在X轴方向上的偏移量
		yAxisTitleY : null, //Y轴轴标在Y轴方向上的偏移量
		yAxisType : "inear", //Y轴类型      inear:线性轴 logarithmic:对数轴 datetime:时间轴 category:数组轴
		yAxisUnits : null, //Y轴值单位
		yAxisVisible : true, //是否显示Y轴
		/*
		 数据提示框设置
		 */
		tooltipAnimation : true, //数据提示框动画的更新效果,配合update()函数使用，图表初始化时，这个参数不起作用
		tooltipBackgroundColor : 'rgba(255, 255, 255, 0.85)', //数据提示框背景色
		tooltipBorderColor : null, //数据提示框边框颜色
		tooltipBorderRadius : 0, //数据提示框边框圆角
		tooltipBorderWidth : 1, //数据提示框边框宽度
		tooltipCrosshairs : false, //启用准星线 (跟随鼠标的十字线)  true 启用竖直方向准星线   [true,true]  同时启用竖直及水平准星线    [{   width: 3,    color: 'green' }, {  width: 1,  color: "#006cee",  dashStyle: 'longdashdot',  zIndex: 100 }]   // 设置准星线样式
		tooltipDateTimeLabelFormats : {
			millisecond : "%A, %b %e, %H:%M:%S.%L",
			second : "%A, %b %e, %H:%M:%S",
			minute : "%A, %b %e, %H:%M",
			hour : "%A, %b %e, %H:%M",
			day : "%A, %b %e, %Y",
			week : "Week from %A, %b %e, %Y",
			month : "%B %Y",
			year : "%Y"
		}, //数据框中的时间点的格式化
		tooltipEnabled : true, //数据提示框是否显示
		tooltipFollowPointer : false, //数据提示框
		tooltipFollowTouchMove : true, //数据提示框
		tooltipFooterFormat : false, //数据提示框
		tooltipFormatter : function() {
			return '<b>' + this.x + '</b><br/><span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + this.y + '</b>';
		}, //数据提示框格式化函数   this.x ： 当前点 X 值  this.y / this.point[i].y ： 当前点的 Y 指 / 当前第 i 个点的 Y 值  this.point / this.point[i] ： 当前点 / 当前第 i 个点   this.series/ this.point[i].series ： 当前数据列 / 当前第 i 个点的数据列  this.total  this.percentage
		tooltipHeaderFormat : '<span style="font-size: 10px">{point.key}</span><br/>', //数据提示框头部格式化字符
		tooltipHideDelay : 500, //数据提示框
		tooltipPointFormat : '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>', //数据提示框单个点的格式化字符串
		tooltipPointFormatter : null, //数据提示框格式化函数
		tooltipPositioner : null, //数据提示框在固定位置显示function() { return {   x: 60, y: 80  }}
		tooltipShadow : true, //数据提示框阴影效果
		tooltipShape : 'callout', //数据提示框形状
		tooltipShared : false, //共享数据提示框
		tooltipSnap : false, //数据提示框是否是拍快照（延迟移动）
		tooltipStyle : {
			"color" : "#333333",
			"cursor" : "default",
			"fontSize" : "12px",
			"padding" : "8px",
			"pointerEvents" : "none",
			"whiteSpace" : "nowrap"
		}, //数据提示框样式
		tooltipUseHTML : true, //如果数据提示框包含HTML标签是是否解析HTML标签
		tooltipValueDecimals : null, //数据提示框显示值是否显示小数
		tooltipValuePrefix : null, //数据提示框显示值前缀
		tooltipValueSuffix : null, //数据提示框显示值后缀
		tooltipXDateFormat : null, //数据提示框头部时间格式化字符串
		/*
		 图例设置
		 */
		legendAlign : 'right', //图例水平对齐样式  left  center  right
		legendBackgroundColor : '#F2F2F2', //图例背景色
		legendBorderColor : '#909090', //图例边框颜色
		legendBorderRadius : 0, //图例边框圆角
		legendBorderWidth : 1, //图例边框宽度
		legendEnabled : true, //是否显示图例
		legendFloating : false, //图例是否浮动，如果为true将不会保留图例显示空间
		legendItemDistance : 1, //图例每项的间距
		legendItemHiddenStyle : {
			color : '#CCC'
		}, //图例隐藏时的样式
		legendItemHoverStyle : {
			color : '#000'
		}, //图例鼠标划过时样式
		legendItemMarginBottom : 0, //图例项距底边距
		legendItemMarginTop : 0, //图例项距上边距
		legendItemStyle : {
			"color" : "#333333",
			"cursor" : "pointer",
			"fontSize" : "12px",
			"fontWeight" : "bold"
		}, //图例项默认显示样式
		legendItemWidth : null, //图例项宽度
		legendLabelFormat : '{name}', //图例项文本
		legendLabelFormatter : null, //图例项文本格式化
		legendLayout : 'vertical', //图例布局 horizontal 行布局 vertical 列布局
		legendLineHeight : 16, //图例行高
		legendMargin : 12, //图例外边距
		legendMaxHeight : null, //图例最大高度
		legendNavigationActiveColor : '#3E576F', //图例分页可用按钮颜色
		legendNavigationAnimation : true, //图例分页动画
		legendNavigationArrowSize : 12, //图例分页按钮大小
		legendNavigationEnabled : true, //图例高度不足是否分页
		legendNavigationInactiveColor : '#CCC', //图例不可用按钮颜色
		legendNavigationStyle : null, //图例分页样式
		legendPadding : 8, //图例外边距
		legendReversed : false, //图例项是否倒序显示
		legendRtl : false, //图例文字是否显示在符号前面
		legendShadow : false, //图例阴影效果
		legendStyle : null, //图例样式
		legendSymbolHeight : null, //图例符号高度
		legendSymbolPadding : 5, //图例符号内边距
		legendSymbolRadius : 0, //图例符号圆角
		legendSymbolWidth : 16, //图例符号宽度
		legendTitleStyle : {
			"fontWeight" : "bold"
		}, //图例标题样式
		legendTitleText : '图例', //图例标题文本
		legendUseHTML : false, //如果图例标题包含HTML标签，是否解析HTML标签
		legendVerticalAlign : 'top', //图例垂直对齐方式  top middle  bottom
		legendWidth : null, //图例宽度
		legendX : -190, //图例在X轴方向上的偏移量
		legendY : 90, //图例Y轴方向上的偏移量
		/*
		 用于极性图表和角仪表的pane窗格设置
		 */
		paneBackground : 'gradient', //pane背景 { backgroundColor (solid or gradient), shape ("solid" or "arc"), innerWidth, outerWidth, borderWidth, borderColor}
		paneCenter : ["50%", "50%"], //极坐标图或角度测量仪的中心点，像数组[x,y]一样定位,位置可以是以像素为单位的整数或者是绘图区域的百分比
		paneEndAngle : null, //x轴极坐标或角度轴的最终度数，以度数的方式给出 0是北
		paneSize : null, //pane窗格大小 可以是以像素为单位的整数或者是绘图区域的百分比
		paneStartAngle : null, //x轴或测量轴的开始度数，以度数的方式给出  0是北
		/*
		 导出导航按钮设置
		 */
		navigationButtonOptionsAlign : 'right', //导出按钮水平对齐方式 可以是left，right，center
		navigationButtonOptionsEnabled : true, //是否显示导出按钮
		navigationButtonOptionsHeight : 20, //导出按钮高度
		navigationButtonOptionsSymbolFill : '#F00', //导出按钮符号填充色
		navigationButtonOptionsSymbolSize : 14, //导出按钮符号大小
		navigationButtonOptionsSymbolStroke : '#F00', //导出按钮符号绘制色
		navigationButtonOptionsSymbolStrokeWidth : 1, //导出按钮符号绘制宽度
		navigationButtonOptionsSymbolX : 12.5, //导出按钮符号在X轴上的偏移量
		navigationButtonOptionsSymbolY : 10.5, //导出按钮符号在Y轴上的偏移量
		navigationButtonOptionsText : null, //导出按钮显示文本
		navigationButtonOptionsTheme : {
			'stroke-width' : 1,
			stroke : '#cccccc',
			fill : '#E0E0E0'
		}, //导出按钮样式
		navigationButtonOptionsVerticalAlign : 'top', //导出按钮垂直对齐方式 top middle  bottom
		navigationButtonOptionsWidth : 24, //导出按钮宽度
		navigationButtonOptionsY : 0, //导出按钮在Y轴上的偏移量
		navigationMenuItemHoverStyle : {
			background : '#4572A5',
			color : '#FFF'
		}, //导出菜单项鼠标移上样式
		navigationMenuItemStyle : {
			padding : '0 5px',
			background : 'none',
			color : '#303030'
		}, //导出菜单项样式
		navigationMenuStyle : {
			border : '1px  solid #A0A0A0',
			background : '#FFFFFF'
		}, //导出菜单样式
		/*
		 打印导出设置
		 */
		exportingAllowHTML : false, //是否允许HTML导出打印
		exportingChartOptions : null, //给导出打印图表添加图表选项
		exportingEnabled : true, //导出打印是否可用
		exportingFallbackToExportServer : true, //导出是否可回退
		exportingFilename : 'chart', //导出图表的文件名称，不带扩展名
		exportingFormAttributes : null,
		exportingPrintMaxWidth : 780, //图表打印的最大宽度
		exportingScale : 1, //导出打印图表的缩放比例
		exportingSourceHeight : null, //原始图表高度
		exportingSourceWidth : null, //原始图表宽度
		exportingType : 'image/png', //导出打印类型  image/png image/jpeg application/pdf  image/svg+xml
		exportingUrl : ' http://export.highcharts.com', //转化SVG字符串为图片格式的服务器模块的UR
		exportingWidth : 800, //图表导出为png或jpg类型的时候的像素宽度
		exportingButtons : buttons, //图表按钮设置(可以设置多个，多个之间用','分隔)

		/*
		 图表Lable HTML标签，可以放置在绘图的任何位置
		 */
		labelsItems : [{
			html : null,
			style : {
				left : '100px',
				top : '100px'
			}
		}], //图表Lable 显示项信息和样式（可以是多个） 功能：对图表做标注、划分图表区域等
		labelsStyle : {
			color : '#3E576F'
		}, //图表Lable 显示样式
		/*
			数据列设置
		*/
		dataColumns:null,
		dataComplete:null,
		dataCsv:null,
		dataDateFormat:null,
		dataDecimalPoint:'.',
		dataEndColumn:null,
		dataEndRow:null,
		dataFirstRowAsNames:true,
		dataGoogleSpreadsheetKey:null,
		dataGoogleSpreadsheetWorksheet:null,
		dataItemDelimiter:null,
		dataLineDelimiter:'\n',
		dataParseDate:null,
		dataParsed:null,
		dataRows:null,
		dataSeriesMapping:null,
		dataStartColumn:0,
		dataStartRow:0,
		dataSwitchRowsAndColumns:null,
		dataTable:false,
		/*
		 chart没有数据时显示的内容
		 */
		noDataAttr : {
			"stroke-width" : 1,
			"stroke" : '#cccccc'
		}, //对于没有数据标签附加SVG属性的对象
		noDataPosition : {
			"x" : 0,
			"y" : 0,
			"align" : "center",
			"verticalAlign" : "middle"
		}, //显示SVG属性的对象的位置
		noDataStyle : {
			"fontSize" : "12px",
			"fontWeight" : "bold",
			"color" : "#60606a"
		}, //显示SVG属性的对象的样式
		noDataUseHTML : false, //SVG属性的对象包含HTML标签，是否解析HTML标签
		/*
		 数据加载时设置
		 */
		loadingHideDuration : 100, //隐藏时淡出效果的持续时间
		loadingLabelStyle : {
			"fontWeight" : "bold",
			"position" : "relative",
			"top" : "45%"
		}, //数据加载时标签样式
		loadingShowDuration : 100, //显示时褪色效果的持续时间
		loadingStyle : null, //数据加载时样式
		/*
		 绘制元素设置
		 */
		plotOptions : plotOptions,
		series : [{
			data : [{
				x : 95,
				y : 95,
				z : 13.8,
				name : 'BE',
				country : 'Belgium'
			}, {
				x : 86.5,
				y : 102.9,
				z : 14.7,
				name : 'DE',
				country : 'Germany'
			}, {
				x : 80.8,
				y : 91.5,
				z : 15.8,
				name : 'FI',
				country : 'Finland'
			}, {
				x : 80.4,
				y : 102.5,
				z : 12,
				name : 'NL',
				country : 'Netherlands'
			}, {
				x : 85.3,
				y : 86.1,
				z : 11.8,
				name : 'SE',
				country : 'Sweden'
			}, {
				x : 78.4,
				y : 73.1,
				z : 16.6,
				name : 'ES',
				country : 'Spain'
			}, {
				x : 77.2,
				y : 68.5,
				z : 14.5,
				name : 'FR',
				country : 'France'
			}, {
				x : 79.5,
				y : 83.1,
				z : 10,
				name : 'NO',
				country : 'Norway'
			}, {
				x : 89,
				y : 93.2,
				z : 24.7,
				name : 'UK',
				country : 'United Kingdom'
			}, {
				x : 77.2,
				y : 57.6,
				z : 10.4,
				name : 'IT',
				country : 'Italy'
			}, {
				x : 68.6,
				y : 65,
				z : 16,
				name : 'RU',
				country : 'Russia'
			}, {
				x : 65.5,
				y : 48.4,
				z : 35.3,
				name : 'US',
				country : 'United States'
			}, {
				x : 65.4,
				y : 60.8,
				z : 28.5,
				name : 'HU',
				country : 'Hungary'
			}, {
				x : 88.4,
				y : 51.8,
				z : 15.4,
				name : 'PT',
				country : 'Portugal'
			}, {
				x : 94,
				y : 92.9,
				z : 31.3,
				name : 'NZ',
				country : 'New Zealand'
			}],
			marker : {
				fillColor : {
					radialGradient : {
						cx : 0.4,
						cy : 0.3,
						r : 0.7
					},
					stops : [[0, 'rgba(255,255,255,0.5)'], [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]]
				}
			}
		}, {
			data : [{
				x : 95,
				y : 95,
				z : 13.8,
				name : 'BE',
				country : 'Belgium'
			}, {
				x : 86.5,
				y : 102.9,
				z : 14.7,
				name : 'DE',
				country : 'Germany'
			}, {
				x : 80.8,
				y : 91.5,
				z : 15.8,
				name : 'FI',
				country : 'Finland'
			}, {
				x : 80.4,
				y : 102.5,
				z : 12,
				name : 'NL',
				country : 'Netherlands'
			}, {
				x : 80.3,
				y : 86.1,
				z : 11.8,
				name : 'SE',
				country : 'Sweden'
			}, {
				x : 78.4,
				y : 70.1,
				z : 16.6,
				name : 'ES',
				country : 'Spain'
			}, {
				x : 74.2,
				y : 68.5,
				z : 14.5,
				name : 'FR',
				country : 'France'
			}, {
				x : 73.5,
				y : 83.1,
				z : 10,
				name : 'NO',
				country : 'Norway'
			}, {
				x : 71,
				y : 93.2,
				z : 24.7,
				name : 'UK',
				country : 'United Kingdom'
			}, {
				x : 69.2,
				y : 57.6,
				z : 10.4,
				name : 'IT',
				country : 'Italy'
			}, {
				x : 68.6,
				y : 20,
				z : 16,
				name : 'RU',
				country : 'Russia'
			}, {
				x : 65.5,
				y : 126.4,
				z : 35.3,
				name : 'US',
				country : 'United States'
			}, {
				x : 65.4,
				y : 50.8,
				z : 28.5,
				name : 'HU',
				country : 'Hungary'
			}, {
				x : 63.4,
				y : 51.8,
				z : 15.4,
				name : 'PT',
				country : 'Portugal'
			}, {
				x : 64,
				y : 82.9,
				z : 31.3,
				name : 'NZ',
				country : 'New Zealand'
			}],
			marker : {
				fillColor : {
					radialGradient : {
						cx : 0.4,
						cy : 0.3,
						r : 0.7
					},
					stops : [[0, 'rgba(255,255,255,0.5)'], [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]]
				}
			}
		}],
		/*
		 图表数据钻取设置
		 */
		drilldownActiveAxisLabelStyle : {
			cursor : 'pointer',
			color : '#0d233a',
			fontWeight : 'bold',
			textDecoration : 'underline'
		}, //钻取活动轴刻度样式
		drilldownActiveDataLabelStyle : {
			cursor : 'pointer',
			color : '#0d233a',
			fontWeight : 'bold',
			textDecoration : 'underline'
		}, //钻取活动数据刻度样式
		drilldownAllowPointDrilldown : true, //s是否允许点进行数据钻取
		drilldownAnimation : true, //是否允许动画
		drilldownDrillUpButtonPosition : {
			y : 10,
			x : 10,
			align : 'left',
			verticalAlign : 'top'
		}, //钻取按钮显示位置      left  right  center   top middle  bottom
		drilldownDrillUpButtonRelativeTo : 'plotBox', // plotBox    spacingBox
		drilldownDrillUpButtonTheme : {
			'stroke-width' : 1,
			stroke : '#cccccc',
			fill : '#E0E0E0',
			r : 0,
			states : {
				hover : {
					fill : '#bada55'
				},
				select : {
					stroke : '#039',
					fill : '#bada55'
				}
			}
		}, //钻取按钮主题
		drilldownSeries : null,
	};
	return basicSetting;
}

function adapterChart(type, data) {
	//var customButton={align: "center",text:'打印',enabled:false};
	var button1 = createButton(null);

	var buttons = {
		printButton : button1
	};

	//var customZone={color:'#F00'};
	var zone = createZone(null);
	var zones = [zone, zone];

	// var customSeries={allowPointSelect:false,dataLabels:{format:'{point.name}'},marker:{enabled:true,states:{hover:{enabled:false}}},states:{hover:{marker: {states:{hover:{enabled:false}}}}}};
	var plotOption = settingSeries(null, zones);
	// alert(JSON.stringify(plotOption.states.hover.marker.states.hover.enabled));
	var plotOptions = {
		series : plotOption
	};
	var data1 = initSetting(buttons, plotOptions);

	switch(type) {
		case 'line':
			createLineChart(data);
			break;
		case 'area':
			createAreaChart(type, data);
			break;
		case 'bar':
			createBarChart(type, data);
			break;
		case 'column':
			createColumnChart(type, data);
			break;
		case 'pie':
			createPieChart(type, data);
			break;
		case 'scatter':
			createScatterChart(type, data);
			break;
		case 'bubble':
			createBubbleChart(type, data);
			break;
		case '3Dbubble':
			type = type.substring(2);
			create3DBubbleChart(type, data);
			break;
		case 'basic':
			createBasicChart(type, data1);
			break;
	};

}

function createBasicChart(type, data) {
	$('#' + data.container).highcharts({
		lang : {
			contextButtonTitle : data.langContextButtonTitle,
			decimalPoint : data.langDecimalPoint,
			downloadJPEG : data.langDownloadJPEG,
			downloadPDF : data.langDownloadPDF,
			downloadPNG : data.langDownloadPNG,
			downloadSVG : data.langDownloadSVG,
			drillUpText : data.langDrillUpText,
			invalidDate : data.langInvalidDate,
			loading : data.langLoading,
			months : data.langMonths,
			noData : data.langNoData,
			numericSymbols : data.langNumericSymbols,
			printChart : data.langPrintChart,
			resetZoom : data.langResetZoom,
			resetZoomTitle : data.langResetZoomTitle,
			shortMonths : data.langShortMonths,
			shortWeekdays : data.langShortWeekdays,
			thousandsSep : data.langThousandsSep,
			weekdays : data.langWeekdays
		},
		credits : {
			enabled : data.creditsEnabled,
			href : data.creditsHref,
			position : data.creditsPosition,
			style : data.creditsStyle,
			text : data.creditsText
		},
		chart : {
			alignTicks : data.chartAlignTicks,
			animation : data.chartAnimation,
			backgroundColor : data.chartBackgroundColor,
			borderColor : data.chartBorderColor,
			borderRadius : data.chartBorderRadius,
			borderWidth : data.chartBorderWidth,
			events : data.chartEvents,
			height : data.chartHeight,
			ignoreHiddenSeries : data.chartIgnoreHiddenSeries,
			inverted : data.chartInverted,
			margin : data.chartMargin,
			marginTop : data.chartMarginTop,
			marginRight : data.chartMarginRight,
			marginBottom : data.chartMarginBottom,
			marginLeft : data.chartMarginLeft,
			panKey : data.chartPanKey,
			panning : data.chartPanning,
			pinchType : data.chartPinchType,
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBackgroundImage : data.chartPlotBackgroundImage,
			plotBorderColor : data.chartPlotBorderColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			polar : data.chartPolar,
			reflow : data.chartReflow,
			selectionMarkerFill : data.chartSelectionMarkerFill,
			shadow : data.chartShadow,
			showAxes : data.chartShowAxes,
			spacingTop : data.chartSpacingTop,
			spacingRight : data.chartSpacingRight,
			spacingBottom : data.chartSpacingBottom,
			spacingLeft : data.chartSpacingLeft,
			style : data.chartStyle,
			width : data.chartWidth,
			type : data.chartType,
			zoomType : data.chartZoomType
		},
		title : {
			text : data.titleText,
			align : data.titleAlign,
			floating : data.titleFloating,
			style : data.titleStyle,
			useHTML : data.titleUseHTML,
			verticalAlign : data.titleVerticalAlign,
			widthAdjust : data.tileWidthAdjust,
			margin : data.titleMargin,
			x : data.titleX,
			y : data.titleY
		},
		subtitle : {
			text : data.subtitleText,
			align : data.subtitleAlign,
			floating : data.subtitleFloating,
			style : data.subtitleStyle,
			useHTML : data.subtitleUseHTML,
			verticalAlign : data.subtitleVerticalAlign,
			x : data.subtitleX,
			y : data.subtitleY
		},
		xAxis : {
			allowDecimals : data.xAxisAllowDecimals,
			alternateGridColor : data.xAxisAlternateGridColor,
			breaks : [{
				breakSize : data.xAxisBreaksBreakSize,
				from : data.xAxisBreaksFrom,
				repeat : data.xAxisBreaksRepeat,
				to : data.xAxisBreaksTo
			}],
			categories : data.xAxisCategories,
			ceiling : data.xAxisCeiling,
			crosshair : {
				color : data.xAxisCrosshairColor,
				dashStyle : data.xAxisCrosshairDashStyle,
				snap : data.xAxisCrosshairSnap,
				width : data.xAxisCrosshairWidth,
				zIndex : data.xAxisCrosshairZIndex
			},
			dateTimeLabelFormats : data.xAxisDateTimeLabelFormats,
			endOnTick : data.xAxisEndOnTick,
			events : data.xAxisEvents,
			floor : data.xAxisFloor,
			gridLineColor : data.xAxisGridLineColor,
			gridLineDashStyle : data.xAxisGridLineDashStyle,
			gridLineWidth : data.xAxisGridLineWidth,
			gridZIndex : data.xAxisGridZIndex,
			id : data.xAxisId,
			labels : {
				align : data.xAxisLabelsAlign,
				autoRotation : data.xAxisLabelsAutoRotation,
				autoRotationLimit : data.xAxisLabelsAutoRotationLimit,
				distance : data.xAxisLabelsDistance,
				enabled : data.xAxisLabelsEnabled,
				format : data.xAxisLabelsFormat,
				formatter : data.xAxisLabelsFormatter,
				maxStaggerLines : data.xAxisLabelsMaxStaggerLines,
				overflow : data.xAxisLabelsOverflow,
				padding : data.xAxisLabelsPadding,
				reserveSpace : data.xAxisLabelsReserveSpace,
				rotation : data.xAxisLabelsRotation,
				staggerLines : data.xAxisLabelsStaggerLines,
				step : data.xAxisLabelsStep,
				style : data.xAxisLabelsStyle,
				useHTML : data.xAxisLabelsUseHTML,
				x : data.xAxisLabelsX,
				y : data.xAxisLabelsY,
				zIndex : data.xAxisLabelsZIndex
			},
			lineColor : data.xAxisLineColor,
			lineWidth : data.xAxisLineWidth,
			linkedTo : data.xAxisLinkedTo,
			max : data.xAxisMax,
			maxPadding : data.xAxisMaxPadding,
			maxZoom : data.xAxisMaxZoom,
			min : data.xAxisMin,
			minPadding : data.xAxisMinPadding,
			minRange : data.xAxisMinRange,
			minTickInterval : data.xAxisMinTickInterval,
			minorGridLineColor : data.xAxisMinorGridLineColor,
			minorGridLineDashStyle : data.xAxisMinorGridLineDashStyle,
			minorGridLineWidth : data.xAxisMinorGridLineWidth,
			minorTickColor : data.xAxisMinorTickColor,
			minorTickInterval : data.xAxisMinorTickInterval,
			minorTickLength : data.xAxisMinorTickLength,
			minorTickPosition : data.xAxisMinorTickPosition,
			minorTickWidth : data.xAxisMinorTickWidth,
			offset : data.xAxisOffset,
			opposite : data.xAxisOpposite,
			plotBands : [{
				borderColor : data.xAxisPlotBandsBorderColor,
				borderWidth : data.xAxisPlotBandsBorderWidth,
				color : data.xAxisPlotBandsColor,
				events : data.xAxisPlotBandsEvents,
				from : data.xAxisPlotBandsFrom,
				id : data.xAxisPlotBandsId,
				to : data.xAxisPlotBandsTo,
				zIndex : data.xAxisPlotBandsZIndex,
				label : {
					align : data.xAxisPlotBandsLabelAlign,
					rotation : data.xAxisPlotBandsLabelRotation,
					style : data.xAxisPlotBandsLabelStyle,
					text : data.xAxisPlotBandsLabelText,
					textAlign : data.xAxisPlotBandsLabelTextAlign,
					useHTML : data.xAxisPlotBandsLabelUseHTML,
					verticalAlign : data.xAxisPlotBandsLabelVerticalAlign,
					x : data.xAxisPlotBandsLabelX,
					y : data.xAxisPlotBandsLabelY
				}
			}],
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				id : data.xAxisPlotLinesId,
				events : data.xAxisPlotLinesEvents,
				zIndex : data.xAxisPlotLinesZIndex,
				label : {
					align : data.xAxisPlotLinesLabelAlign,
					rotation : data.xAxisPlotLinesLabelRotation,
					style : data.xAxisPlotLinesLabelStyle,
					text : data.xAxisPlotLinesLabelText,
					textAlign : data.xAxisPlotLinesLabelTextAlign,
					useHTML : data.xAxisPlotLinesLabelUseHTML,
					verticalAlign : data.xAxisPlotLinesLabelVerticalAlign,
					x : data.xAxisPlotLinesLabelX,
					y : data.xAxisPlotLinesLabelY
				}
			}],
			reversed : data.xAxisReversed,
			showEmpty : data.xAxisShowEmpty,
			showFirstLabel : data.xAxisShowFirstLabel,
			showLastLabel : data.xAxisShowLastLabel,
			startOfWeek : data.xAxisStartOfWeek,
			startOnTick : data.xAxisStartOnTick,
			tickAmount : data.xAxisTickAmount,
			tickColor : data.xAxisTickColor,
			tickInterval : data.xAxisTickInterval,
			tickLength : data.xAxisTickLength,
			tickPixelInterval : data.xAxisTickPixelInterval,
			tickPosition : data.xAxisTickPosition,
			tickPositioner : data.xAxisTickPositioner,
			tickPositions : data.xAxisTickPositions,
			tickWidth : data.xAxisTickWidth,
			tickmarkPlacement : data.xAxisTickmarkPlacement,
			title : {
				align : data.xAxisTitleAign,
				enabled : data.xAxisTitleEnabled,
				margin : data.xAxisTitleMargin,
				offset : data.xAxisTitleOffset,
				rotation : data.xAxisTitleRotation,
				style : data.xAxisTitleStyle,
				text : data.xAxisTitleText,
				x : data.xAxisTitleX,
				y : data.xAxisTitleY
			},
			type : data.xAxisType,
			units : data.xAxisUnits,
			visible : data.xAxisVisible
		},

		yAxis : {
			allowDecimals : data.yAxisAllowDecimals,
			alternateGridColor : data.yAxisAlternateGridColor,
			breaks : [{
				breakSize : data.yAxisBreaksBreakSize,
				from : data.yAxisBreaksFrom,
				repeat : data.yAxisBreaksRepeat,
				to : data.yAxisBreaksTo
			}],
			categories : data.yAxisCategories,
			ceiling : data.yAxisCeiling,
			crosshair : {
				color : data.yAxisCrosshairColor,
				dashStyle : data.yAxisCrosshairDashStyle,
				snap : data.yAxisCrosshairSnap,
				width : data.yAxisCrosshairWidth,
				zIndex : data.yAxisCrosshairZIndex
			},
			dateTimeLabelFormats : data.yAxisDateTimeLabelFormats,
			endOnTick : data.yAxisEndOnTick,
			events : data.yAxisEvents,
			floor : data.yAxisFloor,
			gridLineColor : data.yAxisGridLineColor,
			gridLineDashStyle : data.yAxisGridLineDashStyle,
			gridLineWidth : data.yAxisGridLineWidth,
			gridZIndex : data.yAxisGridZIndex,
			id : data.yAxisId,
			labels : {
				align : data.yAxisLabelsAlign,
				autoRotation : data.yAxisLabelsAutoRotation,
				autoRotationLimit : data.yAxisLabelsAutoRotationLimit,
				distance : data.yAxisLabelsDistance,
				enabled : data.yAxisLabelsEnabled,
				format : data.yAxisLabelsFormat,
				formatter : data.yAxisLabelsFormatter,
				maxStaggerLines : data.yAxisLabelsMaxStaggerLines,
				overflow : data.yAxisLabelsOverflow,
				padding : data.yAxisLabelsPadding,
				reserveSpace : data.yAxisLabelsReserveSpace,
				rotation : data.yAxisLabelsRotation,
				staggerLines : data.yAxisLabelsStaggerLines,
				step : data.yAxisLabelsStep,
				style : data.yAxisLabelsStyle,
				useHTML : data.yAxisLabelsUseHTML,
				x : data.yAxisLabelsX,
				y : data.yAxisLabelsY,
				zIndex : data.yAxisLabelsZIndex
			},
			lineColor : data.yAxisLineColor,
			lineWidth : data.yAxisLineWidth,
			linkedTo : data.yAxisLinkedTo,
			max : data.yAxisMax,
			maxPadding : data.yAxisMaxPadding,
			maxZoom : data.yAxisMaxZoom,
			min : data.yAxisMin,
			minPadding : data.yAxisMinPadding,
			minRange : data.yAxisMinRange,
			minTickInterval : data.yAxisMinTickInterval,
			minorGridLineColor : data.yAxisMinorGridLineColor,
			minorGridLineDashStyle : data.yAxisMinorGridLineDashStyle,
			minorGridLineWidth : data.yAxisMinorGridLineWidth,
			minorTickColor : data.yAxisMinorTickColor,
			minorTickInterval : data.yAxisMinorTickInterval,
			minorTickLength : data.yAxisMinorTickLength,
			minorTickPosition : data.yAxisMinorTickPosition,
			minorTickWidth : data.yAxisMinorTickWidth,
			offset : data.yAxisOffset,
			opposite : data.yAxisOpposite,
			plotBands : [{
				borderColor : data.yAxisPlotBandsBorderColor,
				borderWidth : data.yAxisPlotBandsBorderWidth,
				color : data.yAxisPlotBandsColor,
				events : data.yAxisPlotBandsEvents,
				from : data.yAxisPlotBandsFrom,
				id : data.yAxisPlotBandsId,
				to : data.yAxisPlotBandsTo,
				zIndex : data.yAxisPlotBandsZIndex,
				label : {
					align : data.yAxisPlotBandsLabelAlign,
					rotation : data.yAxisPlotBandsLabelRotation,
					style : data.yAxisPlotBandsLabelStyle,
					text : data.yAxisPlotBandsLabelText,
					textAlign : data.yAxisPlotBandsLabelTextAlign,
					useHTML : data.yAxisPlotBandsLabelUseHTML,
					verticalAlign : data.yAxisPlotBandsLabelVerticalAlign,
					x : data.yAxisPlotBandsLabelX,
					y : data.yAxisPlotBandsLabelY
				}
			}],
			title : {
				enabled : data.yAxisTitleEnabled,
				text : data.yAxisTitleText
			},
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				id : data.yAxisPlotLinesId,
				events : data.yAxisPlotLinesEvents,
				zIndex : data.yAxisPlotLinesZIndex,
				label : {
					align : data.yAxisPlotLinesLabelAlign,
					rotation : data.yAxisPlotLinesLabelRotation,
					style : data.yAxisPlotLinesLabelStyle,
					text : data.yAxisPlotLinesLabelText,
					textAlign : data.yAxisPlotLinesLabelTextAlign,
					useHTML : data.yAxisPlotLinesLabelUseHTML,
					verticalAlign : data.yAxisPlotLinesLabelVerticalAlign,
					x : data.yAxisPlotLinesLabelX,
					y : data.yAxisPlotLinesLabelY
				}
			}],
			reversed : data.yAxisReversed,
			showEmpty : data.yAxisShowEmpty,
			showFirstLabel : data.yAxisShowFirstLabel,
			showLastLabel : data.yAxisShowLastLabel,
			startOfWeek : data.yAxisStartOfWeek,
			startOnTick : data.yAxisStartOnTick,
			tickAmount : data.yAxisTickAmount,
			tickColor : data.yAxisTickColor,
			tickInterval : data.yAxisTickInterval,
			tickLength : data.yAxisTickLength,
			tickPixelInterval : data.yAxisTickPixelInterval,
			tickPosition : data.yAxisTickPosition,
			tickPositioner : data.yAxisTickPositioner,
			tickPositions : data.yAxisTickPositions,
			tickWidth : data.yAxisTickWidth,
			tickmarkPlacement : data.yAxisTickmarkPlacement,
			title : {
				align : data.yAxisTitleAign,
				enabled : data.yAxisTitleEnabled,
				margin : data.yAxisTitleMargin,
				offset : data.yAxisTitleOffset,
				rotation : data.yAxisTitleRotation,
				style : data.yAxisTitleStyle,
				text : data.yAxisTitleText,
				x : data.yAxisTitleX,
				y : data.yAxisTitleY
			},
			type : data.yAxisType,
			units : data.yAxisUnits,
			visible : data.yAxisVisible
		},
		tooltip : {
			animation : data.tooltipAnimation,
			backgroundColor : data.tooltipBackgroundColor,
			borderColor : data.tooltipBorderColor,
			borderRadius : data.tooltipBorderRadius,
			borderWidth : data.tooltipBorderWidth,
			crosshairs : data.tooltipCrosshairs,
			dateTimeLabelFormats : data.tooltipDateTimeLabelFormats,
			enabled : data.tooltipEnabled,
			followPointer : data.tooltipFollowPointer,
			followTouchMove : data.tooltipFollowTouchMove,
			footerFormat : data.tooltipFooterFormat,
			formatter : data.tooltipFormatter,
			headerFormat : data.tooltipHeaderFormat,
			hideDelay : data.tooltipHideDelay,
			pointFormat : data.tooltipPointFormat,
			pointFormatter : data.tooltipPointFormatter,
			positioner : data.tooltipPositioner,
			shadow : data.tooltipShadow,
			shape : data.tooltipShape,
			shared : data.tooltipShared,
			snap : data.tooltipSnap,
			style : data.tooltipStyle,
			useHTML : data.tooltipUseHTML,
			valueDecimals : data.tooltipValueDecimals,
			valuePrefix : data.tooltipValuePrefix,
			valueSuffix : data.tooltipValueSuffix,
			xDateFormat : data.tooltipXDateFormat
		},
		legend : {
			align : data.legendAlign,
			backgroundColor : data.legendBackgroundColor,
			borderColor : data.legendBorderColor,
			borderRadius : data.legendBorderRadius,
			borderWidth : data.legendBorderWidth,
			enabled : data.legendEnabled,
			floating : data.legendFloating,
			itemDistance : data.legendItemDistance,
			itemHiddenStyle : data.legendItemHiddenStyle,
			itemHoverStyle : data.legendItemHoverStyle,
			itemMarginBottom : data.legendItemMarginBottom,
			itemMarginTop : data.legendItemMarginTop,
			itemStyle : data.legendItemStyle,
			itemWidth : data.legendItemWidth,
			labelFormat : data.legendLabelFormat,
			labelFormatter : data.legendLabelFormatter,
			layout : data.legendLayout,
			lineHeight : data.legendLineHeight,
			margin : data.legendMargin,
			maxHeight : data.legendMaxHeight,
			navigation : {
				activeColor : data.legendNavigationActiveColor,
				animation : data.legendNavigationAnimation,
				arrowSize : data.legendNavigationArrowSize,
				enabled : data.legendNavigationEnabled,
				inactiveColor : data.legendNavigationInactiveColor,
				style : data.legendNavigationStyle
			},
			padding : data.legendPadding,
			reversed : data.legendReversed,
			rtl : data.legendRtl,
			shadow : data.legendShadow,
			style : data.legendStyle,
			symbolHeight : data.legendSymbolHeight,
			symbolPadding : data.legendSymbolPadding,
			symbolRadius : data.legendSymbolRadius,
			symbolWidth : data.legendSymbolWidth,
			title : {
				style : data.legendTitleStyle,
				text : data.legendTitleText
			},
			useHTML : data.legendUseHTML,
			verticalAlign : data.legendVerticalAlign,
			width : data.legendWidth,
			x : data.legendX,
			y : data.legendY
		},
		pane : {
			background : data.paneBackground,
			center : data.paneCenter,
			endAngle : data.paneEndAngle,
			size : data.paneSize,
			startAngle : data.paneStartAngle
		},
		navigation : {
			buttonOptions : {
				align : data.navigationButtonOptionsAlign,
				enabled : data.navigationButtonOptionsEnabled,
				height : data.navigationButtonOptionsHeight,
				symbolFill : data.navigationButtonOptionsSymbolFill,
				symbolSize : data.navigationButtonOptionsSymbolSize,
				symbolStroke : data.navigationButtonOptionsSymbolStroke,
				symbolStrokeWidth : data.navigationButtonOptionsSymbolStrokeWidth,
				symbolX : data.navigationButtonOptionsSymbolX,
				symbolY : data.navigationButtonOptionsSymbolY,
				text : data.navigationButtonOptionsText,
				theme : data.navigationButtonOptionsTheme,
				verticalAlign : data.navigationButtonOptionsVerticalAlign,
				width : data.navigationButtonOptionsWidth,
				y : data.navigationButtonOptionsY
			},
			menuItemHoverStyle : data.navigationMenuItemHoverStyle,
			menuItemStyle : data.navigationMenuItemStyle,
			menuStyle : data.navigationMenuStyle
		},
		exporting : {
			allowHTML : data.exportingAllowHTML,
			buttons : data.exportingButtons,
			chartOptions : data.exportingChartOptions,
			enabled : data.exportingEnabled,
			fallbackToExportServer : data.exportingFallbackToExportServer,
			filename : data.exportingFilename,
			formAttributes : data.exportingFormAttributes,
			printMaxWidth : data.exportingPrintMaxWidth,
			scale : data.exportingScale,
			sourceHeight : data.exportingSourceHeight,
			sourceWidth : data.exportingSourceWidth,
			type : data.exportingType,
			url : data.exportingUrl,
			width : data.exportingWidth
		},
		labels : {
			items : data.labelsItems,
			style : data.labelsStyle
		},
		// data: {
			// columns:data.dataColumns,
			// complete:data.dataComplete,
			// csv:data.dataCsv,
			// dateFormat: data.dataDateFormat,
			// decimalPoint: data.dataDecimalPoint,
			// endColumn:data.dataEndColumn,
			// endRow:data.dataEndRow,
			// firstRowAsNames: data.dataFirstRowAsNames,
			// googleSpreadsheetKey:data.dataGoogleSpreadsheetKey,
			// googleSpreadsheetWorksheet: data.dataGoogleSpreadsheetWorksheet,
			// itemDelimiter:data.dataItemDelimiter,
			// lineDelimiter: data.dataLineDelimiter,
			// parseDate:data.dataParseDate,
			// parsed:data.dataParsed,
			// rows:data.dataRows,
			// seriesMapping: data.dataSeriesMapping,
			// startColumn: data.dataStartColumn,
			// startRow: data.dataStartRow,
			// switchRowsAndColumns: data.dataSwitchRowsAndColumns,
			// table:data.dataTable
		// },
		loading : {
			hideDuration : data.loadingHideDuration,
			labelStyle : data.loadingLabelStyle,
			showDuration : data.loadingShowDuration,
			style : data.loadingStyle
		},
		noData : {
			attr : data.noDataAttr,
			position : data.noDataPosition,
			style : data.noDataStyle,
			useHTML : data.noDataUseHTML
		},
		plotOptions : data.plotOptions,
		series : data.series,
		drilldown : {
			activeAxisLabelStyle : data.drilldownActiveAxisLabelStyle,
			activeDataLabelStyle : data.drilldownActiveDataLabelStyle,
			allowPointDrilldown : data.drilldownAllowPointDrilldown,
			animation : data.drilldownAnimation,
			drillUpButton : {
				position : data.drilldownDrillUpButtonPosition,
				relativeTo : data.drilldownDrillUpButtonRelativeTo,
				theme : data.drilldownDrillUpButtonTheme
			},
			series : data.drilldownSeries
		}
	});
}

function createLineChart(data) {

	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			categories : data.xAxisCategories
		},
		yAxis : {
			title : {
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}]
		},
		tooltip : {
			valueSuffix : data.tooltipYValueSuffix
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		series : data.series
	});
}

function createAreaChart(type, data) {

	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			ttitle : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}]
		},
		yAxis : {
			title : {
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}]
		},
		tooltip : {
			valueSuffix : data.tooltipYValueSuffix
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		plotOptions : {
			area : {
				pointStart : data.plotOptionsPointStart,
				marker : {
					enabled : data.plotOptionsMarkerEnabled,
					symbol : data.plotOptionsMarkerSymbol,
					radius : data.plotOptionsMarkerRadius,
					states : {
						hover : {
							enabled : data.plotOptionsMarkerStatesHoverEnabled
						}
					}
				}
			}
		},
		series : data.series
	});
}

function createBarChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : [{
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			categories : data.xAxisCategories,
			opposite : !data.xAxisOpposite,
			reversed : data.xAxisReversed,
			labels : {
				step : data.xAxisLabelsStep
			}
		}, {
			categories : data.xAxisCategories,
			opposite : data.xAxisOpposite,
			reversed : data.xAxisReversed,
			linkedTo : data.xAxisLinkedTo,
			labels : {
				step : data.xAxisLabelsStep
			}
		}],
		yAxis : {
			title : {
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
			labels : {
				formatter : function() {
					return Math.abs(this.value);
				}
			}
		},

		plotOptions : {
			series : {
				stacking : 'normal'
			}
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		tooltip : {
			formatter : function() {
				return '<b>' + this.series.name + ', ' + data.xAxisTitleText + this.point.category + '</b><br/>' + data.yAxisTitleText + ': ' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + data.tooltipYValueSuffix;
			}
		},
		series : data.series
	});
}

function createColumnChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			categories : data.xAxisCategories,
			crosshair : data.xAxisCrosshair
		},
		yAxis : {
			min : data.yAxisMin,
			title : {
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
		},
		tooltip : {
			headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} ' + data.tooltipYValueSuffix + '</b></td></tr>',
			footerFormat : '</table>',
			shared : data.tooltipShared,
			useHTML : true
		},
		plotOptions : {
			column : {
				pointPadding : data.plotOptionsPointPadding,
				borderWidth : 0
			}
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		series : data.series
	});
}

function createPieChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : 'pie'
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		tooltip : {
			pointFormat : '{series.name}: <b>{point.percentage:.1f}' + data.tooltipYValueSuffix + '</b>'
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		plotOptions : {
			pie : {
				allowPointSelect : data.plotOptionsAllowPointSelect,
				cursor : data.plotOptionsCursor,
				dataLabels : {
					enabled : data.plotOptionsDataLabelsEnabled,
					format : '<b>{point.name}</b>: {point.percentage:.1f} %',
					style : {
						color : (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		series : data.series
	});
}

function createScatterChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type,
			zoomType : 'xy'
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			startOnTick : true,
			endOnTick : true,
			showLastLabel : true
		},
		yAxis : {
			title : {
				enabled : data.yAxisTitleEnabled,
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		plotOptions : {
			scatter : {
				marker : {
					radius : 5,
					states : {
						hover : {
							enabled : true,
							lineColor : 'rgb(100,100,100)'
						}
					}
				},
				states : {
					hover : {
						marker : {
							enabled : false
						}
					}
				},
				tooltip : {
					headerFormat : '<b>{series.name}</b><br>',
					pointFormat : '{point.x}' + data.tooltipXValueSuffix + ', {point.y}' + data.tooltipYValueSuffix
				}
			}
		},
		series : data.series
	});
}

function createScatterChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type,
			zoomType : 'xy'
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			startOnTick : true,
			endOnTick : true,
			showLastLabel : true
		},
		yAxis : {
			title : {
				enabled : data.yAxisTitleEnabled,
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		plotOptions : {
			scatter : {
				marker : {
					radius : 5,
					states : {
						hover : {
							enabled : true,
							lineColor : 'rgb(100,100,100)'
						}
					}
				},
				states : {
					hover : {
						marker : {
							enabled : false
						}
					}
				},
				tooltip : {
					headerFormat : '<b>{series.name}</b><br>',
					pointFormat : '{point.x}' + data.tooltipXValueSuffix + ', {point.y}' + data.tooltipYValueSuffix
				}
			}
		},
		series : data.series
	});
}

function createBubbleChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			type : type,
			zoomType : 'xy'
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
			labels : {
				format : '{value}' + data.tooltipXValueSuffix
			}
		},
		yAxis : {
			title : {
				enabled : data.yAxisTitleEnabled,
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
			startOnTick : false,
			endOnTick : false,
		},
		labels : {
			format : '{value}' + data.tooltipYValueSuffix
		},
		maxPadding : 0.2,
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		tooltip : {
			useHTML : true,
			headerFormat : '<table>',
			pointFormat : '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' + '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' + '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' + '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
			footerFormat : '</table>',
			followPointer : true
		},

		plotOptions : {
			series : {
				dataLabels : {
					enabled : data.plotOptionsDataLabelsEnabled,
					format : '{point.' + data.plotOptionsDataLabelsFormat + '}'
				}
			}
		},

		series : data.series
	});
}

function create3DBubbleChart(type, data) {
	$('#' + data.container).highcharts({
		chart : {
			alignTicks : data.chartAlignTicks,
			animation : data.chartAnimation,
			backgroundColor : data.chartBackgroundColor,
			borderWidth : data.chartBorderWidth,
			borderColor : data.chartBorderColor,
			borderRadius : data.chartBorderRadius,
			ignoreHiddenSeries : data.chartIgnoreHiddenSeries,
			inverted : data.chartInverted,
			margin : data.chartMargin,
			marginTop : data.chartMarginTop,
			marginRight : data.chartMarginRight,
			marginBottom : data.chartMarginBottom,
			marginLeft : data.chartMarginLeft,
			plotBackgroundColor : data.chartPlotBackgroundColor,
			plotBackgroundImage : data.chartPlotBackgroundImage,
			plotBorderColor : data.chartPlotBorderColor,
			plotBorderWidth : data.chartPlotBorderWidth,
			plotShadow : data.chartPlotShadow,
			reflow : data.chartReflow,
			shadow : data.chartShadow,
			showAxes : data.chartShowAxes,
			spacingTop : data.chartSpacingTop,
			spacingRight : data.chartSpacingRight,
			spacingBottom : data.chartSpacingBottom,
			spacingLeft : data.chartSpacingLeft,
			style : data.chartStyle,
			width : data.chartWidth,
			height : data.chartHeight,
			type : 'bubble',
			zoomType : 'xy'
		},
		title : {
			text : data.titleText,
			x : data.titleX
		},
		subtitle : {
			text : data.subtitleText,
			x : data.subtileX
		},
		xAxis : {
			title : {
				enabled : data.xAxisTitleEnabled,
				text : data.xAxisTitleText
			},
			gridLineColor : data.xAxisGridLineColor,
			gridLineWidth : data.xAxisGridLineWidth,
			plotLines : [{
				value : data.xAxisPlotLinesValue,
				width : data.xAxisPlotLineswidth,
				color : data.xAxisPlotLinesColor,
				dashStyle : data.xAxisPlotLinesDashStyle,
				label : {
					rotation : data.xAxisPlotLinesLabelRotation,
					y : data.xAxisPlotLinesLabelY,
					style : {
						fontStyle : data.xAxisPlotLinesLabelFontStyle
					},
					text : data.xAxisPlotLinesLabelText
				},
				zIndex : data.xAxisPlotLinesZIndex
			}],
		},

		yAxis : {
			title : {
				enabled : data.yAxisTitleEnabled,
				text : data.yAxisTitleText
			},
			gridLineColor : data.yAxisGridLineColor,
			gridLineWidth : data.yAxisGridLineWidth,
			plotLines : [{
				value : data.yAxisPlotLinesValue,
				width : data.yAxisPlotLineswidth,
				color : data.yAxisPlotLinesColor,
				dashStyle : data.yAxisPlotLinesDashStyle,
				x : data.yAxisPlotLinesLabelX,
				label : {
					rotation : data.yAxisPlotLinesLabelRotation,
					align : data.yAxisPlotLinesLabelAlign,
					style : {
						fontStyle : data.yAxisPlotLinesLabelFontStyle
					},
					text : data.yAxisPlotLinesLabelText
				},
				zIndex : data.yAxisPlotLinesZIndex
			}],
			startOnTick : false,
			endOnTick : false
		},
		legend : {
			enabled : data.legendEnabled,
			layout : data.legendLayout,
			align : data.legendAlign,
			verticalAlign : data.legendVerticalAlign,
			borderWidth : data.legendBorderWidth,
			x : data.legendX,
			y : data.legendY,
			floating : data.legendFoating,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || data.legendBackgroundColor
		},
		tooltip : {
			useHTML : true,
			headerFormat : '<table>',
			pointFormat : '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' + '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' + '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' + '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
			footerFormat : '</table>',
			followPointer : true
		},
		plotOptions : {
			series : {
				dataLabels : {
					enabled : data.plotOptionsDataLabelsEnabled,
					format : '{point.' + data.plotOptionsDataLabelsFormat + '}'
				}
			}
		},
		series : data.series
	});
}

