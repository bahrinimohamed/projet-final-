function verifier (){
    var test1=document.form1.nom.value
      var test2=document.form1.prenom.value
     var test3=document.form1.email.value
     var x=""
    
      if (test1=="")
          x="'nom' "
      if (test2=="")
          x=x+" 'prenom' "
      if (test3=="")
          x=x + " 'email' "
  
      if(x!="")
      alert("les champs manquants sont : " + x )
  }