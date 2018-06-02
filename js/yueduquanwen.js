$(function(){
	var result={
		"status" : true,
	    "data" : {
			"info" :{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
			"commentList" : [
				{
					"id": "10",
					"user_id": "1",
					"blog_id": "1",
					"parent_id": "0",
					"content": "hao",
					"status": "0",
					"createtime": "2017-10-22 16:33:38",
					"updatetime": null,
					"author": {
						"id": "1",
						"name": "马莹",
						"email": "1977905246@qq.com",
						"password": "123qwe",
						"image": "./public/upload/img_1508660053229888.png",
						"status": "0",
						"createtime": "2017-10-22 16:14:13",
						"updatetime": null
					},
					"like_count": "0",
					"is_like": 0
				},
			],
			"relationBlog" : [
				{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
			]
	    }
	}
	var res={
		"status" : true,
	    "data"   : {
			"id": "1",
		    "name": "马莹",
		    "email": "1977905246@qq.com",
		    "image": "./public/upload/img_1508660053229888.png",
		    "status": "0",
		    "createtime": "2017-10-22 16:14:13",uu
		    "updatetime": null
	    }
	}
    var infoStr='<ul><h4 class="atitle"><span>'+result.data.info.createtime+'</span>'+result.data.info.title+'</h4><p class="newnav">"您现在的位置是:"<a href="/_">首页</a>"&nbsp;>&nbsp;"<a href="/download/">模板分享</a>"&nbsp;>&nbsp;"<a href="/download/div/">个人博客分享</a></p><p>'+result.data.info.content+'</p><p>"&nbsp;"<img src="./image/1fbd418ae96efa37a03dedf71c7e9544.jpg"></p><p>如果你也在使用帝国cms,可以直接使用模板组.关于首页调用修改,直接修改栏目id即可.</p><p><span><a href="#" style="color:rgb(0,255,0);">帝国cms模板组下载</a></span><a href="#"><span style="color:gab(255,204,0)">《如何使用帝国模板组?》</span></a></p><p>本模板更换背景图片也很简单,随意更换背景图片,还有主色就可以变换一个风格.比如这样</p><p><img src="./image/3580d43c0c993516f8a07c364a378996.png" width="700"></p><P>&nbsp;</P><P><img src="./image/f3d31093cb66dae68f96b99b1af416e3.png" width="700" height="450"></P><p><strong>静态页面</strong>"请直接点击下面的蓝色按钮"</p><P>&nbsp;</P>'
    $(".about-left").html(infoStr);
    var commentStr="";
    for (var j = 0; j < result.data.commentList.length; j++) {
    	commentStr+='<div class="user clearfix"><div class="user-img fl"><img src="./image/haizi.jpg"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">'+result.data.commentList[j].name+'</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">'+result.data.commentList[j].createtime+'</span></p><p class="saying-w">年轻的我总是爱惹是非，在每个人眼中，我早已注定成了一个不正的学生。大四了，感觉什么都没做好，被身边的朋友说笑，女朋友也没有。好不容易想去报一个java软件培训，却在钱的问题上踌躇不前。不想让父母知道，因为知道自己上的是本三，本来学费就贵。向亲人借钱，却被告知必须要父母同意才借。感觉自己已经长大，可在别人眼里，依旧是个孩子。也许，每个人都要为自己的年轻负责。在青姐博客下留言，偷偷地许几个愿望，难过时就前来看看。1，我要去筹钱，不犯法，不违背道德就好；2，我要学号java；3，我要找一个女朋友；4，我想和青姐分享我的小想法。期待，未来，能够遇见更好的自己。告诉所有，我不是一个坏孩子。</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>'
    };
    $(".list-item").html(commentStr);
    var blogStr="";
    for(var k = 0;k < result.data.relationBlog.length; k++){
    	blogStr+='<h2>相关文章</h2><ul class="clearfix"><li><a href="#">'+result.data.relationBlog[k].title+'</a></li></ul>'
    };
    $(".otherlink").html(blogStr);

        $(".header-login").click(function(){
            $(".all").show();
        })
        $(".login-close-btn").click(function(){
            $(".all").hide();
        })
        $(".phone-input").click(function(){
        	$(".phone-input").val();
        })
        $(".password-input").click(function(){
        	$(".password-input").val();
        })
        $.ajax({
        	url:"http://192.168.199.249:8080/index.php?c=api&a=doLogin",
        	type:"post",
        	dataType:"json",
        	data:{
        		email:username,
        		password:password,
        	},
        	success:function(res){
        		if (res.status){
                    $(".all").hide();
                    localStorage.getItem("user_id",res.data.id)
        		}
        	},
            error:function(res){

            }
        })
        $(".issue fr").click(function(){
        	var blogTd = window.location.search.split("=")[1];
        	var userId = localStorage.getItem("user_id");
        	var contentText = $(".textarea").val();
        	$ajax({
        		url:"http://192.168.199.249:8080/index.php?c=api&a=doComment",
        		type;"post"
        		dataType:"json"
        		data:{
        			content:contentText,
        			user_id: userId,
        			blog_id:blogId,
        		},
            success:function(res){
            	if (res.status) {
            		alert("已经成功")；
            		var plStr='<div class="user clearfix"><div class="user-img fl"><img src="./image/haizi.jpg"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">挽留所有不能的</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">2017年9月29日 11:36</span></p><p class="saying-w">'+contentText+'</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>'
            	    $(".list-item")append(plStr),
            	};
            }
            error:function(){

            }
        	})
        })
       })