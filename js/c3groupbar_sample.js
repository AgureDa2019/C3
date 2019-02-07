var X_name ='';

var x_category_list1 = ['利用中','未使用'];

var chart = c3.generate({
    bindto: '#chart_stacked_bar',
    size: { // グラフ描画領域サイズ指定
		height:300,
		width: 900
    },
    onrendered: () => {
        d3.selectAll('.c3-text').each((v) => {
            console.dir(v);
        });
    },
    data: {
        labels: true, //値を表示
        url: 'data/test.json',
        mimeType: 'json',
        groups: [
x_category_list1],
        type: 'bar', // グラフとして積み上げ棒グラフ(stacked bar chart)を指定
        keys: {
           x: '日付', 
          value: x_category_list1,
        }
    },
    axis: {
        x: {
            type: 'category',
            label: '日付',
        },
        y: {
            label: '件数',
            tick: {  // y軸の金額をカンマ区切りに
            	format: d3.format(',')
            },
	    min:0,
	    max:1000,
            padding: {top: 0, bottom: 0}
        }
    },
    tooltip: {
    	format: { // 各値のツールチップ表示内容を変更
    		value: function (value, ratio, id, index) { return d3.format(',')(value) + '件'  ; }
    	}
    },
    grid: {
    	y: { // y軸のグリッドを表示
    		show: true
    	}
    },
});
