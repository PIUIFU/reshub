function SuccessNotification(messageContent) {
    UIkit.notification.closeAll();
    UIkit.notification({
        message: "<svg  class=\"icon uk-margin-small-right\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2648\" width=\"32\" height=\"32\"><path d=\"M512 0.006C229.233 0.006 0.006 229.233 0.006 512S229.233 1023.994 512 1023.994 1023.994 794.767 1023.994 512 794.767 0.006 512 0.006z m269.355 390.731L468.122 703.974c-9.763 9.763-22.56 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-0.028-0.029-154.739-154.737c-19.526-19.526-19.527-51.185 0-70.71 19.526-19.526 51.184-19.527 70.711 0l119.411 119.41 277.878-277.88c19.525-19.526 51.184-19.527 70.711 0 19.526 19.525 19.526 51.183-0.001 70.709z\" fill=\"#54d25c\" p-id=\"2649\"></path></svg>" + messageContent,
        pos: 'bottom-center',
        status: 'success'
    });
}
function FailNotification(messageContent) {
    UIkit.notification.closeAll();
    UIkit.notification({
        message: "<svg class=\"icon uk-margin-small-right\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6923\" width=\"32\" height=\"32\"><path d=\"M512 1024c-283.574857 0-512-228.425143-512-512s228.425143-512 512-512 512 228.425143 512 512-228.425143 512-512 512z\" fill=\"#BB1629\" p-id=\"6924\"></path><path d=\"M559.396571 598.747429c-3.218286 40.594286-25.526857 59.538286-47.542857 59.538285-16.310857 0 0 0 0 0-20.845714-4.534857-37.083429-14.848-44.251428-55.881143L438.857143 218.916571C438.857143 180.370286 479.378286 146.285714 513.755429 146.285714S585.142857 181.979429 585.142857 220.452571l-25.746286 378.294858zM512 731.428571a73.142857 73.142857 0 1 0 0 146.285715 73.142857 73.142857 0 0 0 0-146.285715\" fill=\"#FFFFFF\" p-id=\"6925\"></path></svg>" + messageContent,
        pos: 'bottom-center',
        status: 'danger'
    });
}

jQuery(document).on('click', '#license_submit', function(event) {

    InputLicense = jQuery('#license_input').val();

    if(InputLicense.replace(/\s+/g, "").length <= 0) {
        FailNotification('请输入验证码');
        return false
    }
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: {
            action: 'check_init',
            code: InputLicense
        }
    })
        .done(function(data) {
            if(data.code == 200) {
                SuccessNotification('小宇宙插件,激活成功');
                window.location.reload();
            } else {
                FailNotification(data.msg);
                console.log(data)
            }
        })
});

jQuery(document).on('click', '.wex_option_item_switcher', function(event) {
    var that = jQuery(this);
    var thatId = that.data('id');
    var thatVal = that.val();
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: {
            action: 'WPXYZ_switcher',
            id: thatId,
        }
    })
        .done(function(data) {
            if(data.code == 200) {
                SuccessNotification('修改成功');
            } else {
                FailNotification(data.code);
                console.log(data)
            }
        })
});

jQuery(document).on('click', '.form_save', function(event) {
    let that = jQuery(this);
    let formId = that.data('formid');
    let theInput= jQuery("#" + formId + ' .xyz_input');
    let theform= {};
    jQuery(theInput).each(function(){
        let theInputVal = jQuery(this).val();
        let theInputID = jQuery(this).data("id");
        theform[theInputID]=theInputVal;
    });
    theform['action']='WPXYZ_form_action';
    theform['id']= formId;
    console.log(formId);
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: theform,
    })
    .done(function(data) {
        if(data.code == 200) {
            SuccessNotification('修改成功');
            console.log(theform)
        } else {
            FailNotification(data.code);
            console.log(data)
        }
    })
});

jQuery(document).on('click', '.xyz_handle', function(event) {
    let theHandleID = jQuery(this).data("id");
    let theShortCode = '{{'+ theHandleID +'}}';
    let theHandleGroup = jQuery(this).data("group");
    document.getElementById(theHandleGroup).value +=  theShortCode;
});

jQuery(document).on('click', '#sitemap_button', function(event) {

    let that = jQuery(this);
    that.text('正在生成...').addClass('ing');

    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: {
            action: 'WPXYZ_sitemap_generate',
        },
    })
        .done(function( data ) {
            that.text('刷新').removeClass('ing');
        })
        .fail(function() {
            alert('错误，请稍后再试！')
        });

    SuccessNotification('SITEMAP生成完成');

});

jQuery(document).on('click', '#fast_api_save', function (event) {

    CurrentApiInput = jQuery('#fast_api_input').val();

    if (CurrentApiInput.replace(/\s+/g, "").length <= 0) {
        FailNotification( '请输入API');
        return false
    }
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'baidu_api_save',  api: CurrentApiInput ,  category: 'fast' },
    })
        .done(function (data) {
            if (data.status == 200) {
                SuccessNotification('API已保存');
                UIkit.modal('#fast_submit_modal_2').show();
            } else {
                FailNotification('请填写API');
            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});
//api 保存
jQuery(document).on('click', '#fast_api_save', function (event) {

    CurrentApiInput = jQuery('#fast_api_input').val();

    if (CurrentApiInput.replace(/\s+/g, "").length <= 0) {
        FailNotification( '请输入API');
        return false
    }
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'baidu_api_save',  api: CurrentApiInput ,  category: 'current' },
    })
        .done(function (data) {
            if (data.status == 200) {
                SuccessNotification('API已保存');
                UIkit.modal('#fast_submit_modal_2').show();
            } else {
                FailNotification('请填写API');
            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});
jQuery(document).on('click', '#current_api_save', function (event) {

    CurrentApiInput = jQuery('#current_api_input').val();

    if (CurrentApiInput.replace(/\s+/g, "").length <= 0) {
        FailNotification( '请输入API');
        return false
    }
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'baidu_api_save',  api: CurrentApiInput ,  category: 'current' },
    })
        .done(function (data) {
            if (data.status == 200) {
                SuccessNotification('API已保存');
                UIkit.modal('#current_api_submit_modal_2').show();
            } else {
                FailNotification('请填写API');
                alert(data.status);

            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});

// 自定义连接提交
jQuery(document).on('click', '#fast_submit_modal_2_submit', function (event) {

    FastSubmitInput= document.getElementById('fast_submit_input').value;

    if (FastSubmitInput.replace(/\s+/g, "").length <= 0) {
        FailNotification( '请输入URL');
        return false
    }

    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'input_submit',  url: FastSubmitInput ,  category: 'fast' },
    })
        .done(function (data) {

            if (data.status == 200) {
                successNum = data.successNum;
                remainNum = data.remainNum;
                SuccessNotification('提交成功'+ successNum + '条,今日还可提交'+ remainNum + '条');
                FastSubmitInput = '';
            } else if  (data.message == "over quota") {
                FailNotification('超出今日提交数');
            }else {
                FailNotification('URL或API填写错误');
            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});
jQuery(document).on('click', '#current_submit_modal_3_submit', function (event) {

    FastSubmitInput= document.getElementById('current_submit_input').value;

    if (FastSubmitInput.replace(/\s+/g, "").length <= 0) {
        FailNotification( '请输入URL');
        return false
    }

    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'input_submit',  url: FastSubmitInput ,  category: 'current' },
    })
        .done(function (data) {
            if (data.status == 200) {
                successNum = data.successNum;
                remainNum = data.remainNum;
                SuccessNotification('提交成功'+ successNum + '条,今日还可提交'+ remainNum + '条');
                FastSubmitInput = '';
            } else if  (data.message == "over quota") {
                FailNotification('超出今日提交数');
            }else {
                FailNotification('URL或API填写错误');
            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});

//普通方式提交所有文章
jQuery(document).on('click', '#current_api_submit_single', function (event) {

    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'current_api_submit_single' },
    })
        .done(function (data) {
            if (data.status == 200) {
                successNum = data.successNum;
                remainNum = data.remainNum;
                SuccessNotification('提交成功'+ successNum + '条,今日还可提交'+ remainNum + '条');
            }else {
                console.log(data);
                FailNotification(data.status+'错误');
            }
        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});
//普通方式提交所有分类
jQuery(document).on('click', '#current_api_submit_archive', function (event) {

    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: { action: 'current_api_submit_archive' },
    })
        .done(function (data) {
            if (data.status == 200) {
                successNum = data.successNum;
                remainNum = data.remainNum;
                SuccessNotification('提交成功'+ successNum + '条,今日还可提交'+ remainNum + '条');
            }else {
                FailNotification('请填写API');
            }

        })
        .fail(function () {
            FailNotification('网络错误，请稍后再试！');
        });

});

