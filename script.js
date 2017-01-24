app = new Vue({
  el: "#main",
  data: {
    users: [],
    newElement: {user:"",status:"",oper:"",tip:"",numDoc:"",valDoc:"",conPag:"",forPag:"",date:""}
  },
  
  methods: {
    addUser: function(){
      this.users.push({user:this.newElement.user,status:this.newElement.status,oper:this.newElement.oper,tip:this.newElement.tip,numDoc:this.newElement.numDoc,valDoc:this.newElement.valDoc,conPag:this.newElement.conPag,forPag:this.newElement.forPag,date:this.newElement.date});
      this.newElement = {user:"",status:"",oper:"",num:"",tip:"",numDoc:"",valDoc:"",conPag:"",forPag:"",date:""};
    },
    removeUser: function(item){
      this.users.splice(item,1);
    }
  }
});

