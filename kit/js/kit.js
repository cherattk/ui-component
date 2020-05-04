// dropdown menu
    var open = document.querySelectorAll('.openmenu'),
        max = open.length,
        showMenu = function(e){
                e.stopPropagation(); // to not reach document
                this.className = this.className.trim();

                var rgx = /\sshow$/;
                if(rgx.test(this.className)){
                    // hide menu
                    this.className = this.className.replace(rgx, '');
                }else{
                    // show menu
                    this.className += ' show';
                }
        };
    
    for (var i = 0 ; i < max; i++) {
        open[i].onclick = showMenu;
        open[i].nextElementSibling.onmouseleave = (function(idx){
                return function(){
            
                    open[idx].className = open[idx].className.replace(/\sshow$/, '');
                };
            })(i);
    };
/****************************************************************************/