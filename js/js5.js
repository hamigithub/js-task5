/**
 * Created by Administrator on 2017/6/26 0026.
 */





$(document).ready(function(){


    $('#btn-sub').click(function(){
        $.ajax({
            type:'POST',//请求方法
            url:'/carrots-admin-ajax/a/login',//接口
            dataType:'json',
            data:{
                name:$('#username').val(),
                pwd:$('#userpwd').val(),
            },

            success:function(data){
                //console.log(data);
                if(data.code!==0){
                    alert(data.message);
                }
                else if(data.code===0){
                    console.log(data.message);
                }
            },
            error:function(data){


            }
        })
    })

})















