var olink=window.location.href;
var it=document.getElementsByClassName("yro")[0].innerText;
var hr=document.getElementsByClassName("yro")[0].href;
  var x = document.getElementsByClassName("yro");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
document.write("<iframe  frameborder='0' scrolling='no' width='"+gyro_ads_width+"px'  style='background:;'     height='"+gyro_ads_height+"px'      src='//jobs.gyrojob.com/display.php?h="+gyro_ads_height+"&w="+gyro_ads_width+"&outlink="+olink+"&u="+gyro_ads_url+"&dos="+hr+"-"+it+"&adid="+gyro_ads_adid+"&adno="+gyro_ads_no+"&border="+gyro_ads_border+"&t="+gyro_ads_title+"&bg="+gyro_ads_bg+"&te="+gyro_ads_text+"' style='padding:0px;margin:0px;'></iframe>");var ht = window.location.protocol;var pathname = window.location.hostname;document.getElementById('msg').innerHTML = ht+"//"+pathname;