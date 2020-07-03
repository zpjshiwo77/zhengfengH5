var API = new importAPI();

function importAPI () {
	var _self = this;

	var requestDomain = "https://wechat.dhteam.net/lillysec/Wapi/voice.ashx?action=";

	function _Ajax(opts){
	    var type = opts.type || "POST";
	    $.ajax({
	        type: type,
	        url: requestDomain + opts.API,
	        dataType: 'json',
	        async: true,
	        data: opts.data,
	        success: function(data){
                if (opts.onSuccess) opts.onSuccess(data);
	        },
	        error: function(){
	        	alert("网络可能存在问题，请刷新试试！");
	        }
	    });
	}

	/**
     * 保存语音
     * @param {*} onSuccess 回调函数
     */
	_self.AddVoice = function(data,onSuccess){
		_Ajax({
            API:"AddVoice",
            data:data,
            onSuccess:onSuccess
        });
	}//end func
	
	/**
     * 查询语音
     * @param {*} onSuccess 回调函数
     */
	_self.SelVoice = function(data,onSuccess){
		_Ajax({
            API:"SelVoice",
			data:data,
			type:"GET",
            onSuccess:onSuccess
        });
	}//end func
	
	/**
     * 查询分享语音
     * @param {*} onSuccess 回调函数
     */
	_self.SelVoiceShare = function(data,onSuccess){
		_Ajax({
            API:"SelVoiceShare",
            data:data,
            onSuccess:onSuccess
        });
    }//end func

}//end import