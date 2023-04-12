function medium_copiar_nombres_posts(){
  //Añadimos jQuery
  var script  = document.createElement('script');
  script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
  
  //Copiamos 
  var titulos = ''
  
  $('h2.ak.gk.kw.kx.ky.kz.la.lb.lc.ld.le.lf.lg.lh.li.lj.lk.ll.lm.ln.lo.lp.lq.lr.ls.lt.lu.fz.gb.gc.ge.gg.bo').each(function(a,o){
      titulos += $(o).text() + '\n'
  })
  
  console.log(titulos)
}

medium_copiar_nombres_posts();

