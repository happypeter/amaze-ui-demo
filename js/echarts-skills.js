
   var myChart = echarts.init(document.getElementById('echarts'));

// 指定图表的配置项和数据
option = {
 backgroundColor: '#2196f3',
 title : {
   textStyle: {
    color: 'white'
   },
   x: 'center'
 },
 yAxis: {
   axisLine: {show: false},
   axisTick: {show: false},
   data: ["React","CSS","HTML","JS"],
   axisLabel: {
     show: true,
     textStyle: {
       color: 'white'
   }
 },
 },
 xAxis: {
   axisLine: {show: false},
   axisTick: {show: false},
   splitLine: { show: false },
   axisLabel: { show: false }
 },
 series: [
   {
     type: 'bar',
     barWidth: 30,
     data: [100, 100, 100, 100],
     itemStyle: {
       normal: {
         color: 'rgba(0,0,0,0.15)'
       }
     }
   },
   {
     type: 'bar',
     barWidth: 30,
     data: [50, 80, 76, 70],
     itemStyle: {
       normal: {
         barBorderRadius: 5,
         color: 'white'
       }
     },
     barGap: '-100%',
     label: {
       normal: {
         show: true,
         formatter: '{c}%',
         textStyle: {
           color: '#2196f3'
         }
       }
     }
   }
 ]
};
   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
