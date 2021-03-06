$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	loadBox.show();
	var openId = icom.getQueryString("openid");
	var voiceId = icom.getQueryString("vid");

	if (os.weixin && !openId && !voiceId) location.href = "https://wechat.dhteam.net/lillysec/Wapi/getopenid.ashx";

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp <= 0.64 && os.screenProp >= 0.54) articleBox.addClass("screen169");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			load_handler();
			sound_handler();
		});
		wxUser.init({
			shareInfo: {
				title: "争锋独家频道",
				friend: '最新最全的争锋情报在这礼，点开Get更多详细资讯！',
				timeline: '最新最全的争锋情报在这礼，点开Get更多详细资讯！'
			}
		});
	}//edn func

	function sound_handler() {
		if (os.weixin) {
			var wsb = window;
			if (wsb.WeixinJSBridge) {
				try {
					wsb.WeixinJSBridge.invoke("getNetworkType", {}, sound_creat);
				}
				catch (e) {
					wx.ready(sound_creat);
				}
			}
			else {
				document.addEventListener("WeixinJSBridgeReady", sound_creat, false);
			}
		} else {
			sound_creat();
		}
	}//edn func

	function sound_creat() {
		document.removeEventListener("WeixinJSBridgeReady", sound_creat);
		ibgm.init({ src: 'audio/bgm2.mp3', autoplay: true });
	}//end func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/share.jpg');
		loader.addImage('images/videoBox/btn.png');
		loader.addImage('images/videoBox/tips.png');
		loader.addImage('images/videoBox/title.png');
		loader.addImage('images/scheduleBox/date.png');
		loader.addImage('images/resultBox/again.png');
		loader.addImage('images/resultBox/audio.png');
		loader.addImage('images/resultBox/b1.png');
		loader.addImage('images/resultBox/b2.png');
		loader.addImage('images/resultBox/di.png');
		loader.addImage('images/resultBox/ok.png');
		loader.addImage('images/recordBox/again.png');
		loader.addImage('images/recordBox/bg.jpg');
		loader.addImage('images/recordBox/end.png');
		loader.addImage('images/recordBox/ok.png');
		loader.addImage('images/recordBox/start.png');
		loader.addImage('images/recordBox/word.png');
		loader.addImage('images/rankBox/b1.png');
		loader.addImage('images/rankBox/b2.png');
		loader.addImage('images/rankBox/block.png');
		loader.addImage('images/rankBox/t.png');
		loader.addImage('images/rankBox/title.png');
		loader.addImage('images/peopleBox/close.png');
		loader.addImage('images/peopleBox/p1.png');
		loader.addImage('images/peopleBox/p2.png');
		loader.addImage('images/peopleBox/pattern.png');
		loader.addImage('images/peopleBox/tips.png');
		loader.addImage('images/peopleBox/title.png');
		loader.addImage('images/peopleBox/people3/ayyc.png');
		loader.addImage('images/peopleBox/people3/cll.png');
		loader.addImage('images/peopleBox/people3/dw.png');
		loader.addImage('images/peopleBox/people3/glx.png');
		loader.addImage('images/peopleBox/people3/jln.png');
		loader.addImage('images/peopleBox/people3/jwp.png');
		loader.addImage('images/peopleBox/people3/lcj.png');
		loader.addImage('images/peopleBox/people3/lxy.png');
		loader.addImage('images/peopleBox/people3/lyb.png');
		loader.addImage('images/peopleBox/people3/ml.png');
		loader.addImage('images/peopleBox/people3/pyd.png');
		loader.addImage('images/peopleBox/people3/rq.png');
		loader.addImage('images/peopleBox/people3/tl.png');
		loader.addImage('images/peopleBox/people3/tnw.png');
		loader.addImage('images/peopleBox/people3/xwb.png');
		loader.addImage('images/peopleBox/people3/yhj.png');
		loader.addImage('images/peopleBox/people3/yl.png');
		loader.addImage('images/peopleBox/people3/yp.png');
		loader.addImage('images/peopleBox/people3/ywy.png');
		loader.addImage('images/peopleBox/people3/yzl.png');
		loader.addImage('images/peopleBox/people3/zzg.png');
		loader.addImage('images/myAudioBox/logo.png');
		loader.addImage('images/myAudioBox/title.png');
		loader.addImage('images/mapBox/bg.jpg');
		loader.addImage('images/mapBox/btn.png');
		loader.addImage('images/mapBox/map.png');
		loader.addImage('images/mapBox/ar.png');
		loader.addImage('images/mapBox/title.png');
		loader.addImage('images/indexBox/bg.jpg');
		loader.addImage('images/indexBox/tips1.png');
		loader.addImage('images/indexBox/tips2.png');
		loader.addImage('images/indexBox/title.png');
		loader.addImage('images/codeBox/code.png');
		loader.addImage('images/codeBox/bg.jpg');
		loader.addImage('images/codeBox/title.png');
		loader.addImage('images/formBox/ar.png');
		loader.addImage('images/formBox/btns.png');
		loader.addImage('images/formBox/more.png');
		loader.addImage('images/formBox/ok.png');
		loader.addImage('images/common/ar.png');
		loader.addImage('images/common/bg.jpg');
		loader.addImage('images/common/bgm_off.png');
		loader.addImage('images/common/bgm_on.png');
		loader.addImage('images/common/close.png');
		loader.addImage('images/common/logo.png');
		loader.addImage('images/common/logo2.png');
		loader.addImage('images/common/share.png');
		loader.addImage('images/common/turn_lock.png');
		loader.addImage('images/common/turn_no.png');
		loader.addImage('images/common/turn_phone.png');
		loader.addImage('images/common/turn_unlock.png');
		loader.addImage('images/common/turn_yes.png');
		loader.addImage('images/areaBox/backBtn.png');
		loader.addImage('images/areaBox/title.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			pageInit();
			load_video();
			loader = null;
		});
		loader.start();
	}//end func

	function load_video() {
		var loader = new PxLoader();
		for (var i = 0; i < 272; i++) {
			loader.addImage('images/video2/' + i + '.jpg');
		}


		loader.addCompletionListener(function () {
			loader = null;
		});
		loader.start();
	}//end func
	//----------------------------------------页面逻辑代码----------------------------------------
	var indexBox = $("#indexBox");
	var codeBox = $("#codeBox");
	var scheduleBox = $("#scheduleBox");
	var peopleBox = $("#peopleBox");
	var peopleBox1 = $("#peopleBox2");
	var moreBox = $("#moreBox");
	var mapBox = $("#mapBox");
	var recordBox = $("#recordBox");
	var resultBox = $("#resultBox");
	var areaBox = $("#areaBox");
	var rankBox = $("#rankBox");
	var videoBox = $("#videoBox");
	var choseBox = $("#choseBox");
	var formBox = $("#formBox");
	var peopleDetail = $("#peopleDetail");
	var myAudioBox = $("#myAudioBox");
	var startRecordBox = $(".startRecord");
	var endRecordBox = $(".endRecord");
	var shareBox = $("#shareBox");

	var p1 = $(".p1");
	var p2 = $(".p2");

	var myVoice, myVideo;
	var pageTransitionFlag = true;

	var bullets = ["成都：巴适的板", "广州：猴嗨森", "青岛：可了不敌", "北京：倍儿爽", "上海：老灵额", "天津：真乐呵", "武汉：信得足", "呼和浩特：抗硬", "杭州：扑心扑肝", "郑州：得劲", "长沙：好韵味", "哈尔滨：特稀罕"];
	var bulletsIndex = 0;
	var bulletBox = $(".bulletBox");
	var bulletEles = [];
	var bulletAnimeFlag = false;
	var uploadAudioFlag = false;

	var backBox = "";

	var myName = "";
	var myProvince = "";
	var shareVoiceId = "";
	var myAudio = document.getElementById("myAudio");

	var areaScroll = new IScroll('#areaScroll', {
		bounce: false,
		click: true,
	});

	var rankScroll = new IScroll('#rankScroll', {
		bounce: false,
		click: true,
	});

	/**
	 * 页面初始化
	 */
	function pageInit() {
		eventInit();
		// DevelopTest();
		monitor_handler();
		loadBox.hide();
		peoplesInit();
		selectInit($("#province"));
		selectInit($("#provinceC"));
		if (voiceId) showMyAudioBox();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		loadingBox.hide();
		QABox.show();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		indexBox.on("swipeup", showCodeBox);

		codeBox.on("swipeup", showScheduleBox);
		codeBox.on("swipedown", backIndexBox);

		scheduleBox.on("swipeup", showPeopleBox);
		scheduleBox.on("swipedown", backCodeBox);

		// p1.on("swipeleft", showPeople3);
		// p2.on("swiperight", showPeople1);
		peopleBox.on("click", ".block", showPeopleDetail);
		peopleBox1.on("click", ".block", showPeopleDetail);

		peopleBox.on("swipeup", showPeopleBox1);
		peopleBox.on("swipedown", backScheduleBox);
		peopleBox1.on("swipeup", showMoreBox);
		peopleBox1.on("swipedown", backPeopleBox);
		moreBox.on("swipedown", backPeopleBox1);

		videoBox.on("swipeup", VideoEnded);

		mapBox.find(".showBtn").on("touchend", showFormBox);
		mapBox.find(".viewBtn").on("touchend", showChoseBox);

		formBox.find(".closeBtn").on("touchend", closeFormbox);
		formBox.find(".okBtn").on("touchend", confrimInfo);

		$("#recordBtn").on("touchend", recording);
		$("#endRecordBtn").on("touchend", endRecord);
		recordBox.find(".okBtn").on("touchend", endRecord);
		recordBox.find(".againBtn").on("touchend", againRecord);

		resultBox.find(".againBtn").on("touchend", showAgainRecord);
		resultBox.find(".okBtn").on("touchend", uploadVoice);
		resultBox.find(".moreBtn").on("touchend", showChoseBox);
		$(".shareBtn").on("touchend", showShareBox);

		$("#videoBtn").on("touchend", showVideoBox);

		articleBox.on("touchend", ".audioblock", playAudio);

		$("#choseBtn").on("touchend", showAreaBox);
		$("#allBtn").on("touchend", showRankBox);

		$("select").on("change", function () {
			$(this).css("color", "#000000");
		});

		areaBox.find(".btn").on("touchend", backToResultBox);

		rankBox.find(".hearBtn").on("touchend", backToResultBox);

		myAudio.addEventListener("ended", function () {
			$(".audioblock .audio").removeClass("playing");
		})

		$(".limitBtn").on("touchend", limitClick);
	}

	/**
	 * 返回日程页面
	 */
	function backScheduleBox() {
		pageTransition(peopleBox, scheduleBox, -1);
	}

	/**
	 * 返回人物页面
	 */
	function backPeopleBox() {
		pageTransition(peopleBox1, peopleBox, -1);
	}

	/**
	 * 返回人物页面
	 */
	function backPeopleBox1() {
		pageTransition(moreBox, peopleBox1, -1);
	}

	/**
	 * 返回结果页面
	 */
	function backToResultBox() {
		var box = backBox == "resultBox" ? resultBox : mapBox;
		icom.fadeIn(box,500,function(){
			areaBox.hide();
			rankBox.hide();
		});
	}

	/**
	 * 显示我的语音页面
	 */
	function showMyAudioBox() {
		myAudioBox.show();
		API.SelVoiceShare({ localId: voiceId }, function (data) {
			if (data.code == 0) {
				var info = JSON.parse(data.msg);
				myAudioBox.find(".audioblock").attr("data-val", 'https://wechat.dhteam.net/lillysec/' + info[0].mp3Url);
				ibgm.pause();
			}
		})
	}

	/**
	 * 显示区域排行
	 */
	function showAreaBox() {
		var province = $("#provinceC").val();
		if (province == null || province == "null" || province == "x") icom.alert("请选择省份");
		else {
			loadBox.show();
			var data = {
				pageindex: 1,
				pagesize: 5,
				province: province
			}
			API.SelVoice(data, function (res) {
				if (res.code == "0") {
					renderAreaBox(res.msg, province);
					resultBox.hide();
					rankBox.hide();
					mapBox.hide();
					areaBox.show();
					areaScroll.refresh();
					icom.fadeOut(choseBox);
				}
				loadBox.hide();
			})
		}
	}

	/**
	 * 渲染地区的页面
	 */
	function renderAreaBox(data, province) {
		var list = JSON.parse(data);
		var box = $("#areaScroll .scroll");
		var cont = "";

		for (var i = 0; i < list.length; i++) {
			var ele = list[i];
			cont += '<div class="block"><div class="name">' + (i + 1) + '.' + ele.userName + '</div><div class="audioblock" data-val="' + 'https://wechat.dhteam.net/lillysec/' + ele.mp3Url + '"><img src="images/resultBox/di.png" class="full"><div class="audio "></div></div></div>';
		}

		box.empty().append(cont);
		areaBox.find(".word").html("地域：" + province);
	}

	/**
	 * 渲染排行榜页面
	 */
	function renderRankBox(data) {
		var list = JSON.parse(data);
		var box = $("#rankScroll .scroll");
		var cont = "";

		for (var i = 0; i < list.length; i++) {
			var ele = list[i];
			cont += '<div class="block"><div class="rank">' + ele.sort + '</div><div class="name">' + ele.userName + '</div><div class="area">' + ele.province + '</div><div class="audioblock" data-val="' + 'https://wechat.dhteam.net/lillysec/' + ele.mp3Url + '"><img src="images/rankBox/block.png" class="full"><div class="audio"></div></div></div>';
		}

		box.empty().append(cont);
	}

	/**
	 * 显示全部排行
	 */
	function showRankBox() {
		loadBox.show();
		var data = {
			pageindex: 1,
			pagesize: 50
		}
		API.SelVoice(data, function (res) {
			if (res.code == "0") {
				renderRankBox(res.msg);
				resultBox.hide();
				areaBox.hide();
				mapBox.hide();
				rankBox.show();
				rankScroll.refresh();
				icom.fadeOut(choseBox);
			}
			loadBox.hide();
		})
	}

	/**
	 * 选择器初始化
	 */
	function selectInit(box) {
		var cityData = ["武汉","上海","广州","杭州","成都","长沙","天津","郑州","呼和浩特","合肥","北京"];
		var cont = "";
		for (var i = 0; i < cityData.length; i++) {
			cont += '<option value="' + cityData[i] + '" >' + cityData[i] + '</option>';
		}
		box.append(cont);
	}

	/**
	 * 确认信息
	 */
	function confrimInfo() {
		var name = $("#name").val();
		var province = $("#province").val();
		if (name == "") icom.alert("请输入姓名");
		else if (province == null || province == "null" || province == "x") icom.alert("请选择省份");
		else {
			myName = name;
			myProvince = province;
			closeFormbox();
			showRecordBox();
		}
	}

	/**
	 * 关闭表单页面
	 */
	function closeFormbox() {
		icom.fadeOut(formBox);
	}

	/**
	 * 播放音频
	 */
	function playAudio() {
		var btn = $(this);
		if (btn.find(".audio").hasClass("playing")) return;
		var url = $(this).data("val");
		if (url) playAudioUrl(url, btn);
		else playLocalAuido(btn);
	}

	/**
	 * 播放语音
	 */
	function playAudioUrl(url, btn) {
		$(".audioblock .audio").removeClass("playing");
		btn.find(".audio").addClass("playing");

		myAudio.pause();
		myAudio.src = url;
		myAudio.play();
	}

	/**
	 * 播放本地语音
	 */
	function playLocalAuido(btn) {
		wx.playVoice({
			localId: shareVoiceId
		});
		wx.onVoicePlayEnd({
			success: function (res) {
				$(".audioblock .audio").removeClass("playing");
			}
		});
		btn.find(".audio").addClass("playing");
	}

	/**
	 * 显示分享页面
	 */
	function showShareBox() {
		if(!uploadAudioFlag){
			uploadVoice();
		}
		icom.popOn(shareBox);
	}

	/**
	 * 显示选择页面
	 */
	function showChoseBox() {
		icom.fadeIn(choseBox);
		backBox = $(this).data("val");
	}

	/**
	 * 上传语音
	 */
	function uploadVoice() {
		loadBox.show();
		wx.uploadVoice({
			localId: shareVoiceId,
			isShowProgressTips: 1,
			success: function (res) {
				var serverId = res.serverId;
				var data = {
					openId: openId,
					userName: myName,
					province: myProvince,
					city: "",
					localId: shareVoiceId,
					serverId: serverId
				}
				API.AddVoice(data, function (res) {
					icom.alert("上传完成");
					shareChange();
					loadBox.hide();
					uploadAudioFlag = true;
				})
			}
		});
	}

	/**
	 * 修改分享
	 */
	function shareChange() {
		wxUser.shareReset({
			link: wxUser.dominUrl + "?vid=" + shareVoiceId,
			friend: '快来听听我的语音吧',
			timeline: '快来听听我的语音吧'
		});
	}

	/**
	 * 显示填写页面
	 */
	function showFormBox() {
		icom.fadeIn(formBox);
	}

	/**
	 * 显示再一次录音
	 */
	function showAgainRecord() {
		icom.fadeOut(resultBox);
		icom.fadeIn(recordBox);
		againRecord();
	}

	/**
	 * 再一次录音
	 */
	function againRecord() {
		icom.fadeIn(startRecordBox);
		icom.fadeOut(endRecordBox);
		try {
			wx.stopRecord({
				success: function (res) { }
			});
		}
		catch (res) { }
	}

	/**
	 * 录音
	 */
	function recording() {
		icom.fadeOut(startRecordBox);
		icom.fadeIn(endRecordBox);
		wx.startRecord();

		wx.onVoiceRecordEnd({
			complete: function (res) {
				icom.fadeIn(resultBox);
				icom.fadeOut(recordBox);
				shareVoiceId = res.localId;
			}
		});
	}

	/**
	 * 结束录音
	 */
	function endRecord() {
		icom.fadeIn(resultBox);
		icom.fadeOut(recordBox);
		wx.stopRecord({
			success: function (res) {
				shareVoiceId = res.localId;
			}
		});
	}

	/**
	 * 显示录音页面
	 */
	function showRecordBox() {
		icom.fadeIn(recordBox);
		icom.fadeOut(mapBox);
		ibgm.pause();
	}

	/**
	 * 显示视频页面
	 */
	function showVideoBox() {
		videoBox.show();
		myVideo = $("#myVideo");
		ibgm.pause();
		myVideo.VP({
			debug: false,
			autoPlay: true,
			total: 271,
			time: 18,
			audio: "audio/audio.mp3",
			mode: 2,
			path: "images/video2/",
			scaleMode:"fixedWidth",
			onPlay: function () {
				console.log('onPlay gif');
			},
			onEnd: VideoEnded

		});
		// bulletInit();
	}

	/**
	 * 视频播放结束
	 */
	function VideoEnded() {
		showMapBox();
		ibgm.play();
		myVideo.destroy();
	}

	function bulletInit() {
		var nums = 8;
		for (var i = 0; i < nums; i++) {
			var ele = $("<div>", { "class": 'bullet' });
			ele.html(bullets[bulletsIndex]);
			ele.css("top", 0.8 * parseInt(i / 2) + "rem");
			bulletBox.append(ele);
			bulletsIndex++;
			bulletEles.push(ele);
		}
		bulletAnimeFlag = true;
		bulletsAnime();
	}

	/**
	 * 弹幕动画
	 */
	function bulletsAnime() {
		var times = [10000, 10000, 9000, 9000, 11000, 11000, 7000, 7000, 8000, 8000];
		var delay = [0, 4500, 1000, 5000, 0, 6000, 500, 4000, 0, 4000];
		for (var i = 0; i < bulletEles.length; i++) {
			setBulletAnime(bulletEles[i], times[i], delay[i]);
		}
	}

	/**
	 * 设置弹幕动画
	 */
	function setBulletAnime(ele, time, delay) {
		setTimeout(function () {
			bulletAnime(ele, time);
		}, delay)
	}

	/**
	 * 弹幕动画
	 */
	function bulletAnime(ele, time) {
		ele.transition({ x: "-7.5rem" }, time, "linear", function () {
			ele.html(bullets[bulletsIndex]).css({ x: "7.5rem" });
			bulletsIndex++;
			if (bulletsIndex >= bullets.length) bulletsIndex = 0;
			if (bulletAnimeFlag) bulletAnime(ele, time);
		});
	}

	/**
	 * 显示地图页面
	 */
	function showMapBox() {
		mapBox.show();
		videoBox.transition({y:"-100%"},function(){
			videoBox.hide();
		})
		bulletAnimeFlag = false;
	}

	/**
	 * 显示更多的页面
	 */
	function showMoreBox() {
		pageTransition(peopleBox1, moreBox);
	}

	/**
	 * 显示人物页面
	 */
	function showPeopleBox1() {
		pageTransition(peopleBox, peopleBox1);
	}

	/**
	 * 显示人物详情
	 */
	function showPeopleDetail() {
		var val = $(this).data("val");
		peopleDetail.find(".detail")[0].src = "images/peopleBox/people3/" + val + ".png";
		icom.popOn(peopleDetail);
	}

	/**
	 * 显示日程页面
	 */
	function showScheduleBox() {
		pageTransition(codeBox, scheduleBox);
	}

	/**
	 * 显示二维码页面
	 */
	function showCodeBox(){
		pageTransition(indexBox, codeBox);
	}

	/**
	 * 返回首页
	 */
	function backIndexBox() {
		pageTransition(codeBox, indexBox, -1);
	}

	/**
	 * 返回二维码页面
	 */
	function backCodeBox(){
		pageTransition(scheduleBox, codeBox, -1);
	}

	/**
	 * 显示人物页面
	 */
	function showPeopleBox() {
		pageTransition(scheduleBox, peopleBox);
	}

	/**
	 * 初始化
	 */
	function peoplesInit() {
		var pa = ["glx", "yl", "jwp", "zzg", "ayyc", "jln", "pyd", "rq", "ywy", "lxy", "ml"];
		var pb = ["ayyc", "cll", "tnw", "xwb", "lyb", "tl", "yzl", "yhj", "lcj", "yp", "dw"];
		var cont1 = "";
		var cont2 = "";
		for (var i = 0; i < pa.length; i++) {
			cont1 += '<div class="block" data-val="' + pa[i] + '"></div>'
		}
		for (var i = 0; i < pb.length; i++) {
			cont2 += '<div class="block" data-val="' + pb[i] + '"></div>'
		}
		p1.append(cont1);
		p2.append(cont2);
	}

	/**
	 * 页面过渡
	 */
	function pageTransition(prev, next, dir) {
		var d = dir || 1;
		if (pageTransitionFlag) {
			pageTransitionFlag = false;
			prev.transition({ y: (-d * 100) + "%" }, 500, function () {
				prev.hide();
				pageTransitionFlag = true;
				if (!$(".bgmBtn").hasClass("sp")) $(".bgmBtn").addClass("sp");
			});
			next.show().css({ y: (d * 100) + "%" })
				.transition({ y: "0" }, 500);
		}
	}

	/**
	 * 限制点击
	 */
	function limitClick() {
		$(".limitBtn").addClass('noPointer');
		setTimeout(function () { $(".limitBtn").removeClass('noPointer') }, 500);
	}//end func

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
