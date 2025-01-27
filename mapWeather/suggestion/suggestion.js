var bmap = require('../../utils/bmap-wx.min.js');
Page({
    data: {
        sugData: ''
    },
    bindKeyInput: function(e) {
        var that = this;
        if (e.detail.value === '') {
            that.setData({
                sugData: ''
            });
            return;
        }
        var BMap = new bmap.BMapWX({
          ak: 'a6GccvoztGoGeihnutK49zGcxWPeFHUT'
        });
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            var sugData = '';
            for(var i = 0; i < data.result.length; i++) {
                sugData = sugData + data.result[i].name + '\n';
            }
            that.setData({
                sugData: sugData
            });
        }
        BMap.suggestion({
          
            query: e.detail.value,
            region: '湖北',
            city_limit: true,
            fail: fail,
            success: success
        });
    }
})