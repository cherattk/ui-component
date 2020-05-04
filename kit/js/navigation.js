function naviation(){
        
        var navbar = document.querySelectorAll(".hnav");
        var that = this;
        var changeDiv = function(e){                
            
            var el = that.getTarget(e);
            
            if(el.tagName === "LI"){

                var li_old_idx = this.getAttribute("data-idxli");
                var li_check_idx = el.getAttribute('data-idx');
                if(li_check_idx !== li_old_idx){

                var li_old_el = this.getElementsByTagName('li')[li_old_idx - 1];
                var t_mod = el.getAttribute("data-mod");

                // display and hide module
                document.getElementById(t_mod).style.display = "block";                    
                document.getElementById(this.getAttribute("data-div")).style.display = "none";

                // styling navigation bar
                el.className = "checked";                    
                li_old_el.className = "";                    

                // store navigation state
                this.setAttribute("data-div",t_mod);
                this.setAttribute("data-idxli",li_check_idx);
                }
            }
        };
        
        for(var i=0 ; i < navbar.length ; i++){
            
            navbar[i].onclick = changeDiv;
        }
    }