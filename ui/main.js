// Api code

var per= document.getElementById('personal');
var pro= document.getElementById('professional');
var soc= document.getElementById('social');

per.onclick = function(){
    var request1 = new XMLHttpRequest();
    
    //capture
        request1.onreadystatechange = function(){
        if(request1.readyState === XMLHttpRequest.DONE)
        {
            if(request1.status === 200){
                var pers = request1.response.Text;
                var pr = document.getElementById('data');
                pr.innerHTML = pers.toString();
            }
        }
    };
    // make a request
    request1.open('GET', 'http:asishag12.cloud.hasura.io/personal', true);
    request1.send(null);
    
};

pro.onclick = function(){
    
    
};

soc.onclick = function(){
    
    
};
